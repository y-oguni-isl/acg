/* empty css              */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $h(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function jh(i){var e=i.default;if(typeof e=="function"){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var io=function(i){return i&&i.Math==Math&&i},Kn=io(typeof globalThis=="object"&&globalThis)||io(typeof window=="object"&&window)||io(typeof self=="object"&&self)||io(typeof Jl=="object"&&Jl)||function(){return this}()||Function("return this")(),Ic={},Yn=function(i){try{return!!i()}catch{return!0}},Xg=Yn,Xi=!Xg(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),Kg=Yn,Fc=!Kg(function(){var i=function(){}.bind();return typeof i!="function"||i.hasOwnProperty("prototype")}),Yg=Fc,ro=Function.prototype.call,Yt=Yg?ro.bind(ro):function(){return ro.apply(ro,arguments)},qh={},Xh={}.propertyIsEnumerable,Kh=Object.getOwnPropertyDescriptor,Zg=Kh&&!Xh.call({1:2},1);qh.f=Zg?function(e){var t=Kh(this,e);return!!t&&t.enumerable}:Xh;var Yh=function(i,e){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:e}},Zh=Fc,Jh=Function.prototype,Ql=Jh.call,Jg=Zh&&Jh.bind.bind(Ql,Ql),Rn=Zh?Jg:function(i){return function(){return Ql.apply(i,arguments)}},Qh=Rn,Qg=Qh({}.toString),e0=Qh("".slice),Oc=function(i){return e0(Qg(i),8,-1)},t0=Rn,n0=Yn,i0=Oc,Ba=Object,r0=t0("".split),s0=n0(function(){return!Ba("z").propertyIsEnumerable(0)})?function(i){return i0(i)=="String"?r0(i,""):Ba(i)}:Ba,xa=function(i){return i==null},o0=xa,a0=TypeError,ep=function(i){if(o0(i))throw a0("Can't call method on "+i);return i},l0=s0,c0=ep,Nc=function(i){return l0(c0(i))},ec=typeof document=="object"&&document.all,u0=typeof ec>"u"&&ec!==void 0,tp={all:ec,IS_HTMLDDA:u0},np=tp,f0=np.all,Zt=np.IS_HTMLDDA?function(i){return typeof i=="function"||i===f0}:function(i){return typeof i=="function"},Pu=Zt,ip=tp,d0=ip.all,Hs=ip.IS_HTMLDDA?function(i){return typeof i=="object"?i!==null:Pu(i)||i===d0}:function(i){return typeof i=="object"?i!==null:Pu(i)},Ua=Kn,h0=Zt,p0=function(i){return h0(i)?i:void 0},Zn=function(i,e){return arguments.length<2?p0(Ua[i]):Ua[i]&&Ua[i][e]},m0=Rn,rp=m0({}.isPrototypeOf),g0=Zn,v0=g0("navigator","userAgent")||"",sp=Kn,za=v0,Ru=sp.process,Lu=sp.Deno,Iu=Ru&&Ru.versions||Lu&&Lu.version,Fu=Iu&&Iu.v8,dn,Wo;Fu&&(dn=Fu.split("."),Wo=dn[0]>0&&dn[0]<4?1:+(dn[0]+dn[1]));!Wo&&za&&(dn=za.match(/Edge\/(\d+)/),(!dn||dn[1]>=74)&&(dn=za.match(/Chrome\/(\d+)/),dn&&(Wo=+dn[1])));var _0=Wo,Ou=_0,x0=Yn,op=!!Object.getOwnPropertySymbols&&!x0(function(){var i=Symbol();return!String(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&Ou&&Ou<41}),y0=op,ap=y0&&!Symbol.sham&&typeof Symbol.iterator=="symbol",b0=Zn,w0=Zt,S0=rp,M0=ap,T0=Object,lp=M0?function(i){return typeof i=="symbol"}:function(i){var e=b0("Symbol");return w0(e)&&S0(e.prototype,T0(i))},E0=String,ya=function(i){try{return E0(i)}catch{return"Object"}},A0=Zt,C0=ya,D0=TypeError,_n=function(i){if(A0(i))return i;throw D0(C0(i)+" is not a function")},P0=_n,R0=xa,kc=function(i,e){var t=i[e];return R0(t)?void 0:P0(t)},Va=Yt,Ha=Zt,Ga=Hs,L0=TypeError,I0=function(i,e){var t,n;if(e==="string"&&Ha(t=i.toString)&&!Ga(n=Va(t,i))||Ha(t=i.valueOf)&&!Ga(n=Va(t,i))||e!=="string"&&Ha(t=i.toString)&&!Ga(n=Va(t,i)))return n;throw L0("Can't convert object to primitive value")},Bc={exports:{}},Nu=Kn,F0=Object.defineProperty,Uc=function(i,e){try{F0(Nu,i,{value:e,configurable:!0,writable:!0})}catch{Nu[i]=e}return e},O0=Kn,N0=Uc,ku="__core-js_shared__",k0=O0[ku]||N0(ku,{}),zc=k0,Bu=zc;(Bc.exports=function(i,e){return Bu[i]||(Bu[i]=e!==void 0?e:{})})("versions",[]).push({version:"3.26.1",mode:"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"});var B0=ep,U0=Object,z0=function(i){return U0(B0(i))},V0=Rn,H0=z0,G0=V0({}.hasOwnProperty),Ki=Object.hasOwn||function(e,t){return G0(H0(e),t)},W0=Rn,$0=0,j0=Math.random(),q0=W0(1 .toString),cp=function(i){return"Symbol("+(i===void 0?"":i)+")_"+q0(++$0+j0,36)},X0=Kn,K0=Bc.exports,Uu=Ki,Y0=cp,zu=op,up=ap,sr=K0("wks"),Oi=X0.Symbol,Vu=Oi&&Oi.for,Z0=up?Oi:Oi&&Oi.withoutSetter||Y0,$r=function(i){if(!Uu(sr,i)||!(zu||typeof sr[i]=="string")){var e="Symbol."+i;zu&&Uu(Oi,i)?sr[i]=Oi[i]:up&&Vu?sr[i]=Vu(e):sr[i]=Z0(e)}return sr[i]},J0=Yt,Hu=Hs,Gu=lp,Q0=kc,ev=I0,tv=$r,nv=TypeError,iv=tv("toPrimitive"),rv=function(i,e){if(!Hu(i)||Gu(i))return i;var t=Q0(i,iv),n;if(t){if(e===void 0&&(e="default"),n=J0(t,i,e),!Hu(n)||Gu(n))return n;throw nv("Can't convert object to primitive value")}return e===void 0&&(e="number"),ev(i,e)},sv=rv,ov=lp,fp=function(i){var e=sv(i,"string");return ov(e)?e:e+""},av=Kn,Wu=Hs,tc=av.document,lv=Wu(tc)&&Wu(tc.createElement),cv=function(i){return lv?tc.createElement(i):{}},uv=Xi,fv=Yn,dv=cv,dp=!uv&&!fv(function(){return Object.defineProperty(dv("div"),"a",{get:function(){return 7}}).a!=7}),hv=Xi,pv=Yt,mv=qh,gv=Yh,vv=Nc,_v=fp,xv=Ki,yv=dp,$u=Object.getOwnPropertyDescriptor;Ic.f=hv?$u:function(e,t){if(e=vv(e),t=_v(t),yv)try{return $u(e,t)}catch{}if(xv(e,t))return gv(!pv(mv.f,e,t),e[t])};var ba={},bv=Xi,wv=Yn,Sv=bv&&wv(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),Mv=Hs,Tv=String,Ev=TypeError,Ut=function(i){if(Mv(i))return i;throw Ev(Tv(i)+" is not an object")},Av=Xi,Cv=dp,Dv=Sv,so=Ut,ju=fp,Pv=TypeError,Wa=Object.defineProperty,Rv=Object.getOwnPropertyDescriptor,$a="enumerable",ja="configurable",qa="writable";ba.f=Av?Dv?function(e,t,n){if(so(e),t=ju(t),so(n),typeof e=="function"&&t==="prototype"&&"value"in n&&qa in n&&!n[qa]){var r=Rv(e,t);r&&r[qa]&&(e[t]=n.value,n={configurable:ja in n?n[ja]:r[ja],enumerable:$a in n?n[$a]:r[$a],writable:!1})}return Wa(e,t,n)}:Wa:function(e,t,n){if(so(e),t=ju(t),so(n),Cv)try{return Wa(e,t,n)}catch{}if("get"in n||"set"in n)throw Pv("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var Lv=Xi,Iv=ba,Fv=Yh,hp=Lv?function(i,e,t){return Iv.f(i,e,Fv(1,t))}:function(i,e,t){return i[e]=t,i},pp={exports:{}},nc=Xi,Ov=Ki,mp=Function.prototype,Nv=nc&&Object.getOwnPropertyDescriptor,Vc=Ov(mp,"name"),kv=Vc&&function(){}.name==="something",Bv=Vc&&(!nc||nc&&Nv(mp,"name").configurable),Uv={EXISTS:Vc,PROPER:kv,CONFIGURABLE:Bv},zv=Rn,Vv=Zt,ic=zc,Hv=zv(Function.toString);Vv(ic.inspectSource)||(ic.inspectSource=function(i){return Hv(i)});var gp=ic.inspectSource,Gv=Kn,Wv=Zt,qu=Gv.WeakMap,$v=Wv(qu)&&/native code/.test(String(qu)),jv=Bc.exports,qv=cp,Xu=jv("keys"),Xv=function(i){return Xu[i]||(Xu[i]=qv(i))},vp={},Kv=$v,_p=Kn,Yv=Hs,Zv=hp,Xa=Ki,Ka=zc,Jv=Xv,Qv=vp,Ku="Object already initialized",rc=_p.TypeError,e_=_p.WeakMap,$o,Ms,jo,t_=function(i){return jo(i)?Ms(i):$o(i,{})},n_=function(i){return function(e){var t;if(!Yv(e)||(t=Ms(e)).type!==i)throw rc("Incompatible receiver, "+i+" required");return t}};if(Kv||Ka.state){var bn=Ka.state||(Ka.state=new e_);bn.get=bn.get,bn.has=bn.has,bn.set=bn.set,$o=function(i,e){if(bn.has(i))throw rc(Ku);return e.facade=i,bn.set(i,e),e},Ms=function(i){return bn.get(i)||{}},jo=function(i){return bn.has(i)}}else{var or=Jv("state");Qv[or]=!0,$o=function(i,e){if(Xa(i,or))throw rc(Ku);return e.facade=i,Zv(i,or,e),e},Ms=function(i){return Xa(i,or)?i[or]:{}},jo=function(i){return Xa(i,or)}}var i_={set:$o,get:Ms,has:jo,enforce:t_,getterFor:n_},r_=Yn,s_=Zt,oo=Ki,sc=Xi,o_=Uv.CONFIGURABLE,a_=gp,xp=i_,l_=xp.enforce,c_=xp.get,ko=Object.defineProperty,u_=sc&&!r_(function(){return ko(function(){},"length",{value:8}).length!==8}),f_=String(String).split("String"),d_=pp.exports=function(i,e,t){String(e).slice(0,7)==="Symbol("&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!oo(i,"name")||o_&&i.name!==e)&&(sc?ko(i,"name",{value:e,configurable:!0}):i.name=e),u_&&t&&oo(t,"arity")&&i.length!==t.arity&&ko(i,"length",{value:t.arity});try{t&&oo(t,"constructor")&&t.constructor?sc&&ko(i,"prototype",{writable:!1}):i.prototype&&(i.prototype=void 0)}catch{}var n=l_(i);return oo(n,"source")||(n.source=f_.join(typeof e=="string"?e:"")),i};Function.prototype.toString=d_(function(){return s_(this)&&c_(this).source||a_(this)},"toString");var h_=Zt,p_=ba,m_=pp.exports,g_=Uc,v_=function(i,e,t,n){n||(n={});var r=n.enumerable,s=n.name!==void 0?n.name:e;if(h_(t)&&m_(t,s,n),n.global)r?i[e]=t:g_(e,t);else{try{n.unsafe?i[e]&&(r=!0):delete i[e]}catch{}r?i[e]=t:p_.f(i,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return i},yp={},__=Math.ceil,x_=Math.floor,y_=Math.trunc||function(e){var t=+e;return(t>0?x_:__)(t)},b_=y_,bp=function(i){var e=+i;return e!==e||e===0?0:b_(e)},w_=bp,S_=Math.max,M_=Math.min,T_=function(i,e){var t=w_(i);return t<0?S_(t+e,0):M_(t,e)},E_=bp,A_=Math.min,C_=function(i){return i>0?A_(E_(i),9007199254740991):0},D_=C_,wp=function(i){return D_(i.length)},P_=Nc,R_=T_,L_=wp,Yu=function(i){return function(e,t,n){var r=P_(e),s=L_(r),o=R_(n,s),a;if(i&&t!=t){for(;s>o;)if(a=r[o++],a!=a)return!0}else for(;s>o;o++)if((i||o in r)&&r[o]===t)return i||o||0;return!i&&-1}},I_={includes:Yu(!0),indexOf:Yu(!1)},F_=Rn,Ya=Ki,O_=Nc,N_=I_.indexOf,k_=vp,Zu=F_([].push),B_=function(i,e){var t=O_(i),n=0,r=[],s;for(s in t)!Ya(k_,s)&&Ya(t,s)&&Zu(r,s);for(;e.length>n;)Ya(t,s=e[n++])&&(~N_(r,s)||Zu(r,s));return r},U_=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],z_=B_,V_=U_,H_=V_.concat("length","prototype");yp.f=Object.getOwnPropertyNames||function(e){return z_(e,H_)};var Sp={};Sp.f=Object.getOwnPropertySymbols;var G_=Zn,W_=Rn,$_=yp,j_=Sp,q_=Ut,X_=W_([].concat),K_=G_("Reflect","ownKeys")||function(e){var t=$_.f(q_(e)),n=j_.f;return n?X_(t,n(e)):t},Ju=Ki,Y_=K_,Z_=Ic,J_=ba,Q_=function(i,e,t){for(var n=Y_(e),r=J_.f,s=Z_.f,o=0;o<n.length;o++){var a=n[o];!Ju(i,a)&&!(t&&Ju(t,a))&&r(i,a,s(e,a))}},ex=Yn,tx=Zt,nx=/#|\.prototype\./,Gs=function(i,e){var t=rx[ix(i)];return t==ox?!0:t==sx?!1:tx(e)?ex(e):!!e},ix=Gs.normalize=function(i){return String(i).replace(nx,".").toLowerCase()},rx=Gs.data={},sx=Gs.NATIVE="N",ox=Gs.POLYFILL="P",ax=Gs,Za=Kn,lx=Ic.f,cx=hp,ux=v_,fx=Uc,dx=Q_,hx=ax,Jn=function(i,e){var t=i.target,n=i.global,r=i.stat,s,o,a,c,l,u;if(n?o=Za:r?o=Za[t]||fx(t,{}):o=(Za[t]||{}).prototype,o)for(a in e){if(l=e[a],i.dontCallGetSet?(u=lx(o,a),c=u&&u.value):c=o[a],s=hx(n?a:t+(r?".":"#")+a,i.forced),!s&&c!==void 0){if(typeof l==typeof c)continue;dx(l,c)}(i.sham||c&&c.sham)&&cx(l,"sham",!0),ux(o,a,l,i)}},ao=Yt,Ja=_n,px=Ut,Mp=function(e,t){var n=px(this),r=Ja(n.get),s=Ja(n.has),o=Ja(n.set),a,c;return ao(s,n,e)?(a=ao(r,n,e),"update"in t&&(a=t.update(a,e,n),ao(o,n,e,a)),a):(c=t.insert(e,n),ao(o,n,e,c),c)},mx=Jn,gx=Mp;mx({target:"Map",proto:!0,real:!0,forced:!0},{emplace:gx});var vx=Jn,_x=Mp;vx({target:"WeakMap",proto:!0,real:!0,forced:!0},{emplace:_x});var xx=$r,yx=xx("toStringTag"),Tp={};Tp[yx]="z";var bx=String(Tp)==="[object z]",wx=bx,Sx=Zt,Bo=Oc,Mx=$r,Tx=Mx("toStringTag"),Ex=Object,Ax=Bo(function(){return arguments}())=="Arguments",Cx=function(i,e){try{return i[e]}catch{}},Ep=wx?Bo:function(i){var e,t,n;return i===void 0?"Undefined":i===null?"Null":typeof(t=Cx(e=Ex(i),Tx))=="string"?t:Ax?Bo(e):(n=Bo(e))=="Object"&&Sx(e.callee)?"Arguments":n},Dx=Rn,Px=Yn,Ap=Zt,Rx=Ep,Lx=Zn,Ix=gp,Cp=function(){},Fx=[],Dp=Lx("Reflect","construct"),Hc=/^\s*(?:class|function)\b/,Ox=Dx(Hc.exec),Nx=!Hc.exec(Cp),rs=function(e){if(!Ap(e))return!1;try{return Dp(Cp,Fx,e),!0}catch{return!1}},Pp=function(e){if(!Ap(e))return!1;switch(Rx(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Nx||!!Ox(Hc,Ix(e))}catch{return!0}};Pp.sham=!0;var kx=!Dp||Px(function(){var i;return rs(rs.call)||!rs(Object)||!rs(function(){i=!0})||i})?Pp:rs,Bx=kx,Ux=ya,zx=TypeError,Vx=function(i){if(Bx(i))return i;throw zx(Ux(i)+" is not a constructor")},Qu=Ut,Hx=Vx,Gx=xa,Wx=$r,$x=Wx("species"),wa=function(i,e){var t=Qu(i).constructor,n;return t===void 0||Gx(n=Qu(t)[$x])?e:Hx(n)},jx=Oc,qx=Rn,Xx=function(i){if(jx(i)==="Function")return qx(i)},ef=Xx,Kx=_n,Yx=Fc,Zx=ef(ef.bind),Jx=function(i,e){return Kx(i),e===void 0?i:Yx?Zx(i,e):function(){return i.apply(e,arguments)}},Rp={},Qx=$r,ey=Rp,ty=Qx("iterator"),ny=Array.prototype,iy=function(i){return i!==void 0&&(ey.Array===i||ny[ty]===i)},ry=Ep,tf=kc,sy=xa,oy=Rp,ay=$r,ly=ay("iterator"),Lp=function(i){if(!sy(i))return tf(i,ly)||tf(i,"@@iterator")||oy[ry(i)]},cy=Yt,uy=_n,fy=Ut,dy=ya,hy=Lp,py=TypeError,Ip=function(i,e){var t=arguments.length<2?hy(i):e;if(uy(t))return fy(cy(t,i));throw py(dy(i)+" is not iterable")},my=Yt,nf=Ut,gy=kc,vy=function(i,e,t){var n,r;nf(i);try{if(n=gy(i,"return"),!n){if(e==="throw")throw t;return t}n=my(n,i)}catch(s){r=!0,n=s}if(e==="throw")throw t;if(r)throw n;return nf(n),t},_y=Jx,xy=Yt,yy=Ut,by=ya,wy=iy,Sy=wp,rf=rp,My=Ip,Ty=Lp,sf=vy,Ey=TypeError,Uo=function(i,e){this.stopped=i,this.result=e},of=Uo.prototype,Yi=function(i,e,t){var n=t&&t.that,r=!!(t&&t.AS_ENTRIES),s=!!(t&&t.IS_RECORD),o=!!(t&&t.IS_ITERATOR),a=!!(t&&t.INTERRUPTED),c=_y(e,n),l,u,d,f,p,g,m,h=function(y){return l&&sf(l,"normal",y),new Uo(!0,y)},v=function(y){return r?(yy(y),a?c(y[0],y[1],h):c(y[0],y[1])):a?c(y,h):c(y)};if(s)l=i.iterator;else if(o)l=i;else{if(u=Ty(i),!u)throw Ey(by(i)+" is not iterable");if(wy(u)){for(d=0,f=Sy(i);f>d;d++)if(p=v(i[d]),p&&rf(of,p))return p;return new Uo(!1)}l=My(i,u)}for(g=s?i.next:l.next;!(m=xy(g,l)).done;){try{p=v(m.value)}catch(y){sf(l,"throw",y)}if(typeof p=="object"&&p&&rf(of,p))return p}return new Uo(!1)},Ay=Jn,Cy=Zn,Dy=Yt,Py=_n,Ry=Ut,Ly=wa,Iy=Yi;Ay({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(e){var t=Ry(this),n=new(Ly(t,Cy("Set")))(t),r=Py(n.delete);return Iy(e,function(s){Dy(r,n,s)}),n}});var Fy=Jn,Oy=Zn,af=Yt,lf=_n,Ny=Ut,ky=wa,By=Yi;Fy({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(e){var t=Ny(this),n=new(ky(t,Oy("Set"))),r=lf(t.has),s=lf(n.add);return By(e,function(o){af(r,t,o)&&af(s,n,o)}),n}});var Uy=Jn,zy=Yt,Vy=_n,Hy=Ut,Gy=Yi;Uy({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(e){var t=Hy(this),n=Vy(t.has);return!Gy(e,function(r,s){if(zy(n,t,r)===!0)return s()},{INTERRUPTED:!0}).stopped}});var Wy=Jn,$y=Zn,jy=Yt,qy=_n,Xy=Zt,Ky=Ut,Yy=Ip,Zy=Yi;Wy({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(e){var t=Yy(this),n=Ky(e),r=n.has;return Xy(r)||(n=new($y("Set"))(e),r=qy(n.has)),!Zy(t,function(s,o){if(jy(r,n,s)===!1)return o()},{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}});var Jy=Jn,Qy=Yt,eb=_n,tb=Ut,nb=Yi;Jy({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(e){var t=tb(this),n=eb(t.has);return!nb(e,function(r,s){if(Qy(n,t,r)===!1)return s()},{INTERRUPTED:!0}).stopped}});var ib=Jn,rb=Zn,sb=_n,ob=Ut,ab=wa,lb=Yi;ib({target:"Set",proto:!0,real:!0,forced:!0},{union:function(e){var t=ob(this),n=new(ab(t,rb("Set")))(t);return lb(e,sb(n.add),{that:n}),n}});var cb=Jn,ub=Zn,cf=Yt,uf=_n,fb=Ut,db=wa,hb=Yi;cb({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(e){var t=fb(this),n=new(db(t,ub("Set")))(t),r=uf(n.delete),s=uf(n.add);return hb(e,function(o){cf(r,n,o)||cf(s,n,o)}),n}});var pb={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(Jl,function(){var t=function(){function n(p){return o.appendChild(p.dom),p}function r(p){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===p?"block":"none";s=p}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),r(++s%o.children.length)},!1);var a=(performance||Date).now(),c=a,l=0,u=n(new t.Panel("FPS","#0ff","#002")),d=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=n(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:n,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){l++;var p=(performance||Date).now();if(d.update(p-a,200),p>c+1e3&&(u.update(1e3*l/(p-c),100),c=p,l=0,f)){var g=performance.memory;f.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:o,setMode:r}};return t.Panel=function(n,r,s){var o=1/0,a=0,c=Math.round,l=c(window.devicePixelRatio||1),u=80*l,d=48*l,f=3*l,p=2*l,g=3*l,m=15*l,h=74*l,v=30*l,y=document.createElement("canvas");y.width=u,y.height=d,y.style.cssText="width:80px;height:48px";var x=y.getContext("2d");return x.font="bold "+9*l+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=s,x.fillRect(0,0,u,d),x.fillStyle=r,x.fillText(n,f,p),x.fillRect(g,m,h,v),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(g,m,h,v),{dom:y,update:function(_,M){o=Math.min(o,_),a=Math.max(a,_),x.fillStyle=s,x.globalAlpha=1,x.fillRect(0,0,u,m),x.fillStyle=r,x.fillText(c(_)+" "+n+" ("+c(o)+"-"+c(a)+")",f,p),x.drawImage(y,g+l,m,h-l,v,g,m,h-l,v),x.fillRect(g+h-l,m,l,v),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(g+h-l,m,l,c((1-_/M)*v))}}},t})})(pb);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gc="147",mb=0,ff=1,gb=2,Fp=1,vb=2,hs=3,Vi=0,Bt=1,Hn=2,hi=0,Ar=1,qo=2,df=3,hf=4,_b=5,br=100,xb=101,yb=102,pf=103,mf=104,bb=200,wb=201,Sb=202,Mb=203,Op=204,Np=205,Tb=206,Eb=207,Ab=208,Cb=209,Db=210,Pb=0,Rb=1,Lb=2,oc=3,Ib=4,Fb=5,Ob=6,Nb=7,kp=0,kb=1,Bb=2,jn=0,Ub=1,zb=2,Vb=3,Hb=4,Gb=5,Bp=300,Rr=301,Lr=302,ac=303,lc=304,Sa=306,Ir=1e3,nn=1001,Xo=1002,bt=1003,cc=1004,uc=1005,kt=1006,Up=1007,jr=1008,Hi=1009,Wb=1010,$b=1011,zp=1012,jb=1013,Ii=1014,ui=1015,Ts=1016,qb=1017,Xb=1018,Cr=1020,Kb=1021,Yb=1022,rn=1023,Zb=1024,Jb=1025,Ni=1026,Fr=1027,Qb=1028,e1=1029,t1=1030,n1=1031,i1=1033,Qa=33776,el=33777,tl=33778,nl=33779,gf=35840,vf=35841,_f=35842,xf=35843,r1=36196,yf=37492,bf=37496,wf=37808,Sf=37809,Mf=37810,Tf=37811,Ef=37812,Af=37813,Cf=37814,Df=37815,Pf=37816,Rf=37817,Lf=37818,If=37819,Ff=37820,Of=37821,Nf=36492,Es=2300,Or=2301,il=2302,kf=2400,Bf=2401,Uf=2402,s1=2500,o1=0,Wc=1,Ko=2,Gi=3e3,qe=3001,a1=3200,l1=3201,Vp=0,c1=1,Sn="srgb",As="srgb-linear",rl=7680,u1=519,fc=35044,zf="300 es",dc=1035;class qr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vf=1234567;const gs=Math.PI/180,Cs=180/Math.PI;function pn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function Ot(i,e,t){return Math.max(e,Math.min(t,i))}function $c(i,e){return(i%e+e)%e}function f1(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function d1(i,e,t){return i!==e?(t-i)/(e-i):0}function vs(i,e,t){return(1-t)*i+t*e}function h1(i,e,t,n){return vs(i,e,1-Math.exp(-t*n))}function p1(i,e=1){return e-Math.abs($c(i,e*2)-e)}function m1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function g1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function v1(i,e){return i+Math.floor(Math.random()*(e-i+1))}function _1(i,e){return i+Math.random()*(e-i)}function x1(i){return i*(.5-Math.random())}function y1(i){i!==void 0&&(Vf=i);let e=Vf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function b1(i){return i*gs}function w1(i){return i*Cs}function hc(i){return(i&i-1)===0&&i!==0}function Hp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function S1(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),f=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var M1=Object.freeze({__proto__:null,DEG2RAD:gs,RAD2DEG:Cs,generateUUID:pn,clamp:Ot,euclideanModulo:$c,mapLinear:f1,inverseLerp:d1,lerp:vs,damp:h1,pingpong:p1,smoothstep:m1,smootherstep:g1,randInt:v1,randFloat:_1,randFloatSpread:x1,seededRandom:y1,degToRad:b1,radToDeg:w1,isPowerOfTwo:hc,ceilPowerOfTwo:Hp,floorPowerOfTwo:Yo,setQuaternionFromProperEuler:S1,normalize:Ke,denormalize:Gn});class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],p=n[5],g=n[8],m=r[0],h=r[3],v=r[6],y=r[1],x=r[4],_=r[7],M=r[2],P=r[5],F=r[8];return s[0]=o*m+a*y+c*M,s[3]=o*h+a*x+c*P,s[6]=o*v+a*_+c*F,s[1]=l*m+u*y+d*M,s[4]=l*h+u*x+d*P,s[7]=l*v+u*_+d*F,s[2]=f*m+p*y+g*M,s[5]=f*h+p*x+g*P,s[8]=f*v+p*_+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,p=l*s-o*c,g=t*d+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=d*m,e[1]=(r*l-u*n)*m,e[2]=(a*n-r*o)*m,e[3]=f*m,e[4]=(u*t-r*c)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(n*c-l*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sl.makeScale(e,t)),this}rotate(e){return this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sl=new jt;function Gp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ol={[Sn]:{[As]:ki},[As]:{[Sn]:zo}},Lt={legacyMode:!0,get workingColorSpace(){return As},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(ol[e]&&ol[e][t]!==void 0){const n=ol[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ut={r:0,g:0,b:0},an={h:0,s:0,l:0},lo={h:0,s:0,l:0};function al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function co(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Lt.workingColorSpace){if(e=$c(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=al(o,s,e+1/3),this.g=al(o,s,e),this.b=al(o,s,e-1/3)}return Lt.toWorkingColorSpace(this,r),this}setStyle(e,t=Sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Lt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Lt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Lt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Lt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Sn){const n=Wp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Lt.fromWorkingColorSpace(co(this,ut),e),Ot(ut.r*255,0,255)<<16^Ot(ut.g*255,0,255)<<8^Ot(ut.b*255,0,255)<<0}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(co(this,ut),t);const n=ut.r,r=ut.g,s=ut.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(co(this,ut),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=Sn){return Lt.fromWorkingColorSpace(co(this,ut),e),e!==Sn?`color(${e} ${ut.r} ${ut.g} ${ut.b})`:`rgb(${ut.r*255|0},${ut.g*255|0},${ut.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=n,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(lo);const n=vs(an.h,lo.h,t),r=vs(an.s,lo.s,t),s=vs(an.l,lo.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ce.NAMES=Wp;let ar;class $p{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=Ds("canvas")),ar.width=e.width,ar.height=e.height;const n=ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ki(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class jp{constructor(e=null){this.isSource=!0,this.uuid=pn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ll(r[o].image)):s.push(ll(r[o]))}else s=ll(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ll(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$p.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T1=0;class wt extends qr{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=nn,r=nn,s=kt,o=jr,a=rn,c=Hi,l=wt.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=pn(),this.name="",this.source=new jp(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ir:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ir:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Bp;wt.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,r=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],m=c[2],h=c[6],v=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-m)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+m)<.1&&Math.abs(g+h)<.1&&Math.abs(l+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,_=(p+1)/2,M=(v+1)/2,P=(u+f)/4,F=(d+m)/4,b=(g+h)/4;return x>_&&x>M?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=P/n,s=F/n):_>M?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=P/r,s=b/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=F/s,r=b/s),this.set(n,r,s,t),this}let y=Math.sqrt((h-g)*(h-g)+(d-m)*(d-m)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(h-g)/y,this.y=(d-m)/y,this.z=(f-u)/y,this.w=Math.acos((l+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mn extends qr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qp extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class E1 extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(d!==m||c!==f||l!==p||u!==g){let h=1-a;const v=c*f+l*p+u*g+d*m,y=v>=0?1:-1,x=1-v*v;if(x>Number.EPSILON){const M=Math.sqrt(x),P=Math.atan2(M,v*y);h=Math.sin(h*P)/M,a=Math.sin(a*P)/M}const _=a*y;if(c=c*h+f*_,l=l*h+p*_,u=u*h+g*_,d=d*h+m*_,h===1-a){const M=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=M,l*=M,u*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*p-l*f,e[t+1]=c*g+u*f+l*d-a*p,e[t+2]=l*g+u*p+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),d=a(s/2),f=c(n/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*n,u=c*n+a*t-s*r,d=c*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=l*c+f*-s+u*-a-d*-o,this.y=u*c+f*-o+d*-s-l*-a,this.z=d*c+f*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cl=new L,Hf=new mi;class Zi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],d=e[c+1],f=e[c+2];u<t&&(t=u),d<n&&(n=d),f<r&&(r=f),u>s&&(s=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),d=e.getY(c),f=e.getZ(c);u<t&&(t=u),d<n&&(n=d),f<r&&(r=f),u>s&&(s=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Si.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Si)}else n.boundingBox===null&&n.computeBoundingBox(),ul.copy(n.boundingBox),ul.applyMatrix4(e.matrixWorld),this.union(ul);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),uo.subVectors(this.max,ss),lr.subVectors(e.a,ss),cr.subVectors(e.b,ss),ur.subVectors(e.c,ss),Qn.subVectors(cr,lr),ei.subVectors(ur,cr),Mi.subVectors(lr,ur);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-Mi.z,Mi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,Mi.z,0,-Mi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-Mi.y,Mi.x,0];return!fl(t,lr,cr,ur,uo)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,lr,cr,ur,uo))?!1:(fo.crossVectors(Qn,ei),t=[fo.x,fo.y,fo.z],fl(t,lr,cr,ur,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Si.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new L,new L,new L,new L,new L,new L,new L,new L],Si=new L,ul=new Zi,lr=new L,cr=new L,ur=new L,Qn=new L,ei=new L,Mi=new L,ss=new L,uo=new L,fo=new L,Ti=new L;function fl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ti.fromArray(i,s);const a=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const A1=new Zi,os=new L,dl=new L;class Xr{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):A1.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const t=os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(os,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(dl)),this.expandByPoint(os.copy(e.center).sub(dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new L,hl=new L,ho=new L,ti=new L,pl=new L,po=new L,ml=new L;class jc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.direction).multiplyScalar(t).add(this.origin),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){hl.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(hl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=ti.dot(this.direction),c=-ti.dot(ho),l=ti.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){const m=1/u;d*=m,f*=m,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(ho).multiplyScalar(f).add(hl),p}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,r,s){pl.subVectors(t,e),po.subVectors(n,e),ml.crossVectors(pl,po);let o=this.direction.dot(ml),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);const c=a*this.direction.dot(po.crossVectors(ti,po));if(c<0)return null;const l=a*this.direction.dot(pl.cross(ti));if(l<0||c+l>o)return null;const u=-a*ti.dot(ml);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,c,l,u,d,f,p,g,m,h){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=c,v[2]=l,v[6]=u,v[10]=d,v[14]=f,v[3]=p,v[7]=g,v[11]=m,v[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/fr.setFromMatrixColumn(e,0).length(),s=1/fr.setFromMatrixColumn(e,1).length(),o=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,m=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-m*l,t[9]=-a*c,t[2]=m-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,p=c*d,g=l*u,m=l*d;t[0]=f+m*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,p=c*d,g=l*u,m=l*d;t[0]=f-m*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,m=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+m,t[1]=c*d,t[5]=m*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,g=a*c,m=a*l;t[0]=c*u,t[4]=m-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=f-m*d}else if(e.order==="XZY"){const f=o*c,p=o*l,g=a*c,m=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+m,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=m*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C1,e,D1)}lookAt(e,t,n){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),ni.crossVectors(n,Gt),ni.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),ni.crossVectors(n,Gt)),ni.normalize(),mo.crossVectors(Gt,ni),r[0]=ni.x,r[4]=mo.x,r[8]=Gt.x,r[1]=ni.y,r[5]=mo.y,r[9]=Gt.y,r[2]=ni.z,r[6]=mo.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],p=n[13],g=n[2],m=n[6],h=n[10],v=n[14],y=n[3],x=n[7],_=n[11],M=n[15],P=r[0],F=r[4],b=r[8],E=r[12],O=r[1],$=r[5],Q=r[9],G=r[13],I=r[2],k=r[6],K=r[10],R=r[14],B=r[3],q=r[7],j=r[11],V=r[15];return s[0]=o*P+a*O+c*I+l*B,s[4]=o*F+a*$+c*k+l*q,s[8]=o*b+a*Q+c*K+l*j,s[12]=o*E+a*G+c*R+l*V,s[1]=u*P+d*O+f*I+p*B,s[5]=u*F+d*$+f*k+p*q,s[9]=u*b+d*Q+f*K+p*j,s[13]=u*E+d*G+f*R+p*V,s[2]=g*P+m*O+h*I+v*B,s[6]=g*F+m*$+h*k+v*q,s[10]=g*b+m*Q+h*K+v*j,s[14]=g*E+m*G+h*R+v*V,s[3]=y*P+x*O+_*I+M*B,s[7]=y*F+x*$+_*k+M*q,s[11]=y*b+x*Q+_*K+M*j,s[15]=y*E+x*G+_*R+M*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],m=e[7],h=e[11],v=e[15];return g*(+s*c*d-r*l*d-s*a*f+n*l*f+r*a*p-n*c*p)+m*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+h*(+t*l*d-t*a*p-s*o*d+n*o*p+s*a*u-n*l*u)+v*(-r*a*u-t*c*d+t*a*f+r*o*d-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],m=e[13],h=e[14],v=e[15],y=d*h*l-m*f*l+m*c*p-a*h*p-d*c*v+a*f*v,x=g*f*l-u*h*l-g*c*p+o*h*p+u*c*v-o*f*v,_=u*m*l-g*d*l+g*a*p-o*m*p-u*a*v+o*d*v,M=g*d*c-u*m*c-g*a*f+o*m*f+u*a*h-o*d*h,P=t*y+n*x+r*_+s*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/P;return e[0]=y*F,e[1]=(m*f*s-d*h*s-m*r*p+n*h*p+d*r*v-n*f*v)*F,e[2]=(a*h*s-m*c*s+m*r*l-n*h*l-a*r*v+n*c*v)*F,e[3]=(d*c*s-a*f*s-d*r*l+n*f*l+a*r*p-n*c*p)*F,e[4]=x*F,e[5]=(u*h*s-g*f*s+g*r*p-t*h*p-u*r*v+t*f*v)*F,e[6]=(g*c*s-o*h*s-g*r*l+t*h*l+o*r*v-t*c*v)*F,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*p+t*c*p)*F,e[8]=_*F,e[9]=(g*d*s-u*m*s-g*n*p+t*m*p+u*n*v-t*d*v)*F,e[10]=(o*m*s-g*a*s+g*n*l-t*m*l-o*n*v+t*a*v)*F,e[11]=(u*a*s-o*d*s-u*n*l+t*d*l+o*n*p-t*a*p)*F,e[12]=M*F,e[13]=(u*m*r-g*d*r+g*n*f-t*m*f-u*n*h+t*d*h)*F,e[14]=(g*a*r-o*m*r-g*n*c+t*m*c+o*n*h-t*a*h)*F,e[15]=(o*d*r-u*a*r+u*n*c-t*d*c-o*n*f+t*a*f)*F,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,p=s*u,g=s*d,m=o*u,h=o*d,v=a*d,y=c*l,x=c*u,_=c*d,M=n.x,P=n.y,F=n.z;return r[0]=(1-(m+v))*M,r[1]=(p+_)*M,r[2]=(g-x)*M,r[3]=0,r[4]=(p-_)*P,r[5]=(1-(f+v))*P,r[6]=(h+y)*P,r[7]=0,r[8]=(g+x)*F,r[9]=(h-y)*F,r[10]=(1-(f+m))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=fr.set(r[0],r[1],r[2]).length();const o=fr.set(r[4],r[5],r[6]).length(),a=fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ln.copy(this);const l=1/s,u=1/o,d=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,t.setFromRotationMatrix(ln),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,c=1/(t-e),l=1/(n-r),u=1/(o-s),d=(t+e)*c,f=(n+r)*l,p=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fr=new L,ln=new Le,C1=new L(0,0,0),D1=new L(1,1,1),ni=new L,mo=new L,Gt=new L,Gf=new Le,Wf=new mi;class Ws{constructor(e=0,t=0,n=0,r=Ws.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wf.setFromEuler(this),this.setFromQuaternion(Wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ws.DefaultOrder="XYZ";Ws.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Xp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P1=0;const $f=new L,dr=new mi,kn=new Le,go=new L,as=new L,R1=new L,L1=new mi,jf=new L(1,0,0),qf=new L(0,1,0),Xf=new L(0,0,1),I1={type:"added"},Kf={type:"removed"};class Ve extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DefaultUp.clone();const e=new L,t=new Ws,n=new mi,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new jt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=Ve.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ve.DefaultMatrixWorldAutoUpdate,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(jf,e)}rotateY(e){return this.rotateOnAxis(qf,e)}rotateZ(e){return this.rotateOnAxis(Xf,e)}translateOnAxis(e,t){return $f.copy(e).applyQuaternion(this.quaternion),this.position.add($f.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jf,e)}translateY(e){return this.translateOnAxis(qf,e)}translateZ(e){return this.translateOnAxis(Xf,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?go.copy(e):go.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(as,go,this.up):kn.lookAt(go,as,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),dr.setFromRotationMatrix(kn),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(I1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Kf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,R1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,L1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ve.DefaultUp=new L(0,1,0);Ve.DefaultMatrixAutoUpdate=!0;Ve.DefaultMatrixWorldAutoUpdate=!0;const cn=new L,Bn=new L,gl=new L,Un=new L,hr=new L,pr=new L,Yf=new L,vl=new L,_l=new L,xl=new L;class Vn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),cn.subVectors(e,t),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){cn.subVectors(r,t),Bn.subVectors(n,t),gl.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(Bn),c=cn.dot(gl),l=Bn.dot(Bn),u=Bn.dot(gl),d=o*l-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un),Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Un),c.set(0,0),c.addScaledVector(s,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c}static isFrontFacing(e,t,n,r){return cn.subVectors(n,t),Bn.subVectors(e,t),cn.cross(Bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),cn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Vn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;hr.subVectors(r,n),pr.subVectors(s,n),vl.subVectors(e,n);const c=hr.dot(vl),l=pr.dot(vl);if(c<=0&&l<=0)return t.copy(n);_l.subVectors(e,r);const u=hr.dot(_l),d=pr.dot(_l);if(u>=0&&d<=u)return t.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(hr,o);xl.subVectors(e,s);const p=hr.dot(xl),g=pr.dot(xl);if(g>=0&&p<=g)return t.copy(s);const m=p*l-c*g;if(m<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(pr,a);const h=u*g-p*d;if(h<=0&&d-u>=0&&p-g>=0)return Yf.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(Yf,a);const v=1/(h+m+f);return o=m*v,a=f*v,t.copy(n).addScaledVector(hr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let F1=0;class An extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=Ar,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Op,this.blendDst=Np,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=oc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rl,this.stencilZFail=rl,this.stencilZPass=rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class En extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new L,vo=new de;class At{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=fc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Kp extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yp extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let O1=0;const Qt=new Le,yl=new Ve,mr=new L,Wt=new Zi,ls=new Zi,vt=new L;class zt extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O1++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gp(e)?Yp:Kp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Wt.min,ls.min),Wt.expandByPoint(vt),vt.addVectors(Wt.max,ls.max),Wt.expandByPoint(vt)):(Wt.expandByPoint(ls.min),Wt.expandByPoint(ls.max))}Wt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)vt.fromBufferAttribute(a,l),c&&(mr.fromBufferAttribute(e,l),vt.add(mr)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let O=0;O<a;O++)l[O]=new L,u[O]=new L;const d=new L,f=new L,p=new L,g=new de,m=new de,h=new de,v=new L,y=new L;function x(O,$,Q){d.fromArray(r,O*3),f.fromArray(r,$*3),p.fromArray(r,Q*3),g.fromArray(o,O*2),m.fromArray(o,$*2),h.fromArray(o,Q*2),f.sub(d),p.sub(d),m.sub(g),h.sub(g);const G=1/(m.x*h.y-h.x*m.y);!isFinite(G)||(v.copy(f).multiplyScalar(h.y).addScaledVector(p,-m.y).multiplyScalar(G),y.copy(p).multiplyScalar(m.x).addScaledVector(f,-h.x).multiplyScalar(G),l[O].add(v),l[$].add(v),l[Q].add(v),u[O].add(y),u[$].add(y),u[Q].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let O=0,$=_.length;O<$;++O){const Q=_[O],G=Q.start,I=Q.count;for(let k=G,K=G+I;k<K;k+=3)x(n[k+0],n[k+1],n[k+2])}const M=new L,P=new L,F=new L,b=new L;function E(O){F.fromArray(s,O*3),b.copy(F);const $=l[O];M.copy($),M.sub(F.multiplyScalar(F.dot($))).normalize(),P.crossVectors(b,$);const G=P.dot(u[O])<0?-1:1;c[O*4]=M.x,c[O*4+1]=M.y,c[O*4+2]=M.z,c[O*4+3]=G}for(let O=0,$=_.length;O<$;++O){const Q=_[O],G=Q.start,I=Q.count;for(let k=G,K=G+I;k<K;k+=3)E(n[k+0]),E(n[k+1]),E(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),m=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,h),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,h),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let m=0,h=c.length;m<h;m++){a.isInterleavedBufferAttribute?p=c[m]*a.data.stride+a.offset:p=c[m]*u;for(let v=0;v<u;v++)f[g++]=l[p++]}return new At(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zf=new Le,gr=new jc,bl=new Xr,ii=new L,ri=new L,si=new L,wl=new L,Sl=new L,Ml=new L,_o=new L,xo=new L,yo=new L,bo=new de,wo=new de,So=new de,Tl=new L,Mo=new L;class nt extends Ve{constructor(e=new zt,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),bl.copy(n.boundingSphere),bl.applyMatrix4(s),e.ray.intersectsSphere(bl)===!1)||(Zf.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Zf),n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,f=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,h=p.length;m<h;m++){const v=p[m],y=r[v.materialIndex],x=Math.max(v.start,g.start),_=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let M=x,P=_;M<P;M+=3){const F=a.getX(M),b=a.getX(M+1),E=a.getX(M+2);o=To(this,y,e,gr,c,l,u,d,f,F,b,E),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),h=Math.min(a.count,g.start+g.count);for(let v=m,y=h;v<y;v+=3){const x=a.getX(v),_=a.getX(v+1),M=a.getX(v+2);o=To(this,r,e,gr,c,l,u,d,f,x,_,M),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,h=p.length;m<h;m++){const v=p[m],y=r[v.materialIndex],x=Math.max(v.start,g.start),_=Math.min(c.count,Math.min(v.start+v.count,g.start+g.count));for(let M=x,P=_;M<P;M+=3){const F=M,b=M+1,E=M+2;o=To(this,y,e,gr,c,l,u,d,f,F,b,E),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),h=Math.min(c.count,g.start+g.count);for(let v=m,y=h;v<y;v+=3){const x=v,_=v+1,M=v+2;o=To(this,r,e,gr,c,l,u,d,f,x,_,M),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function N1(i,e,t,n,r,s,o,a){let c;if(e.side===Bt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side!==Hn,a),c===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Mo);return l<t.near||l>t.far?null:{distance:l,point:Mo.clone(),object:i}}function To(i,e,t,n,r,s,o,a,c,l,u,d){ii.fromBufferAttribute(r,l),ri.fromBufferAttribute(r,u),si.fromBufferAttribute(r,d);const f=i.morphTargetInfluences;if(s&&f){_o.set(0,0,0),xo.set(0,0,0),yo.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const h=f[g],v=s[g];h!==0&&(wl.fromBufferAttribute(v,l),Sl.fromBufferAttribute(v,u),Ml.fromBufferAttribute(v,d),o?(_o.addScaledVector(wl,h),xo.addScaledVector(Sl,h),yo.addScaledVector(Ml,h)):(_o.addScaledVector(wl.sub(ii),h),xo.addScaledVector(Sl.sub(ri),h),yo.addScaledVector(Ml.sub(si),h)))}ii.add(_o),ri.add(xo),si.add(yo)}i.isSkinnedMesh&&(i.boneTransform(l,ii),i.boneTransform(u,ri),i.boneTransform(d,si));const p=N1(i,e,t,n,ii,ri,si,Tl);if(p){a&&(bo.fromBufferAttribute(a,l),wo.fromBufferAttribute(a,u),So.fromBufferAttribute(a,d),p.uv=Vn.getUV(Tl,ii,ri,si,bo,wo,So,new de)),c&&(bo.fromBufferAttribute(c,l),wo.fromBufferAttribute(c,u),So.fromBufferAttribute(c,d),p.uv2=Vn.getUV(Tl,ii,ri,si,bo,wo,So,new de));const g={a:l,b:u,c:d,normal:new L,materialIndex:0};Vn.getNormal(ii,ri,si,g.normal),p.face=g}return p}class Ji extends zt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(d,2));function g(m,h,v,y,x,_,M,P,F,b,E){const O=_/F,$=M/b,Q=_/2,G=M/2,I=P/2,k=F+1,K=b+1;let R=0,B=0;const q=new L;for(let j=0;j<K;j++){const V=j*$-G;for(let W=0;W<k;W++){const ne=W*O-Q;q[m]=ne*y,q[h]=V*x,q[v]=I,l.push(q.x,q.y,q.z),q[m]=0,q[h]=0,q[v]=P>0?1:-1,u.push(q.x,q.y,q.z),d.push(W/F),d.push(1-j/b),R+=1}}for(let j=0;j<b;j++)for(let V=0;V<F;V++){const W=f+V+k*j,ne=f+V+k*(j+1),re=f+(V+1)+k*(j+1),U=f+(V+1)+k*j;c.push(W,ne,U),c.push(ne,re,U),B+=6}a.addGroup(p,B,E),p+=B,f+=R}}static fromJSON(e){return new Ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Nr(i[t]);for(const r in n)e[r]=n[r]}return e}function k1(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zp(i){return i.getRenderTarget()===null&&i.outputEncoding===qe?Sn:As}const Zo={clone:Nr,merge:Ft};var B1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ct extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B1,this.fragmentShader=U1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=k1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jp extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends Jp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vr=-90,_r=1;class z1 extends Ve{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Nt(vr,_r,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Nt(vr,_r,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Nt(vr,_r,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Nt(vr,_r,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Nt(vr,_r,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Nt(vr,_r,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=jn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Qp extends wt{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V1 extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Qp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ji(5,5,5),s=new ct({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:hi});s.uniforms.tEquirect.value=t;const o=new nt(r,s),a=t.minFilter;return t.minFilter===jr&&(t.minFilter=kt),new z1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const El=new L,H1=new L,G1=new jt;class Ai{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=El.subVectors(n,t).cross(H1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(El),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||G1.getNormalMatrix(e),r=this.coplanarPoint(El).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Xr,Eo=new L;class qc{constructor(e=new Ai,t=new Ai,n=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7],f=n[8],p=n[9],g=n[10],m=n[11],h=n[12],v=n[13],y=n[14],x=n[15];return t[0].setComponents(a-r,d-c,m-f,x-h).normalize(),t[1].setComponents(a+r,d+c,m+f,x+h).normalize(),t[2].setComponents(a+s,d+l,m+p,x+v).normalize(),t[3].setComponents(a-s,d-l,m-p,x-v).normalize(),t[4].setComponents(a-o,d-u,m-g,x-y).normalize(),t[5].setComponents(a+o,d+u,m+g,x+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Eo.x=r.normal.x>0?e.max.x:e.min.x,Eo.y=r.normal.y>0?e.max.y:e.min.y,Eo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function em(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function W1(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const d=l.array,f=l.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,d,f),l.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,d){const f=u.array,p=u.updateRange;i.bindBuffer(d,l),p.count===-1?i.bufferSubData(d,0,f):(t?i.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,r(l,u)):d.version<l.version&&(s(d.buffer,l,u),d.version=l.version)}return{get:o,remove:a,update:c}}class $s extends zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,p=[],g=[],m=[],h=[];for(let v=0;v<u;v++){const y=v*f-o;for(let x=0;x<l;x++){const _=x*d-s;g.push(_,-y,0),m.push(0,0,1),h.push(x/a),h.push(1-v/c)}}for(let v=0;v<c;v++)for(let y=0;y<a;y++){const x=y+l*v,_=y+l*(v+1),M=y+1+l*(v+1),P=y+1+l*v;p.push(x,_,P),p.push(_,M,P)}this.setIndex(p),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(m,3)),this.setAttribute("uv",new Ct(h,2))}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}var $1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,j1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,X1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Y1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z1="vec3 transformed = vec3( position );",J1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q1=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,ew=`#ifdef USE_IRIDESCENCE
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
#endif`,tw=`#ifdef USE_BUMPMAP
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
#endif`,nw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ow=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uw=`#define PI 3.141592653589793
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
}`,fw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dw=`vec3 transformedNormal = objectNormal;
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
#endif`,hw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,mw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vw="gl_FragColor = linearToOutputTexel( gl_FragColor );",_w=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xw=`#ifdef USE_ENVMAP
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
#endif`,yw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bw=`#ifdef USE_ENVMAP
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
#endif`,ww=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sw=`#ifdef USE_ENVMAP
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
#endif`,Mw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ew=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Aw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cw=`#ifdef USE_GRADIENTMAP
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
}`,Dw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iw=`uniform bool receiveShadow;
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
#endif`,Fw=`#if defined( USE_ENVMAP )
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
#endif`,Ow=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uw=`PhysicalMaterial material;
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
#endif`,zw=`struct PhysicalMaterial {
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
}`,Vw=`
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
#endif`,Hw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ww=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$w=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tS=`#ifdef USE_MORPHNORMALS
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
#endif`,nS=`#ifdef USE_MORPHTARGETS
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
#endif`,iS=`#ifdef USE_MORPHTARGETS
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
#endif`,rS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,sS=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,oS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cS=`#ifdef USE_NORMALMAP
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
#endif`,uS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,dS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,hS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_S=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MS=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TS=`float getShadowMask() {
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
}`,ES=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AS=`#ifdef USE_SKINNING
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
#endif`,CS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DS=`#ifdef USE_SKINNING
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
#endif`,PS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FS=`#ifdef USE_TRANSMISSION
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
#endif`,OS=`#ifdef USE_TRANSMISSION
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
#endif`,NS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,kS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,BS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,US=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,zS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,VS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,HS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
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
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,KS=`#include <common>
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
}`,YS=`#if DEPTH_PACKING == 3200
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
}`,ZS=`#define DISTANCE
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
}`,JS=`#define DISTANCE
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
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tM=`uniform float scale;
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
}`,nM=`uniform vec3 diffuse;
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
}`,iM=`#include <common>
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
}`,rM=`uniform vec3 diffuse;
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
}`,sM=`#define LAMBERT
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
}`,oM=`#define LAMBERT
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
}`,aM=`#define MATCAP
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
}`,lM=`#define MATCAP
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
}`,cM=`#define NORMAL
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
}`,uM=`#define NORMAL
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
}`,fM=`#define PHONG
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
}`,dM=`#define PHONG
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
}`,hM=`#define STANDARD
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
}`,pM=`#define STANDARD
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
}`,mM=`#define TOON
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
}`,gM=`#define TOON
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
}`,vM=`uniform float size;
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
}`,_M=`uniform vec3 diffuse;
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
}`,xM=`#include <common>
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
}`,yM=`uniform vec3 color;
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
}`,bM=`uniform float rotation;
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
}`,wM=`uniform vec3 diffuse;
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
}`,De={alphamap_fragment:$1,alphamap_pars_fragment:j1,alphatest_fragment:q1,alphatest_pars_fragment:X1,aomap_fragment:K1,aomap_pars_fragment:Y1,begin_vertex:Z1,beginnormal_vertex:J1,bsdfs:Q1,iridescence_fragment:ew,bumpmap_pars_fragment:tw,clipping_planes_fragment:nw,clipping_planes_pars_fragment:iw,clipping_planes_pars_vertex:rw,clipping_planes_vertex:sw,color_fragment:ow,color_pars_fragment:aw,color_pars_vertex:lw,color_vertex:cw,common:uw,cube_uv_reflection_fragment:fw,defaultnormal_vertex:dw,displacementmap_pars_vertex:hw,displacementmap_vertex:pw,emissivemap_fragment:mw,emissivemap_pars_fragment:gw,encodings_fragment:vw,encodings_pars_fragment:_w,envmap_fragment:xw,envmap_common_pars_fragment:yw,envmap_pars_fragment:bw,envmap_pars_vertex:ww,envmap_physical_pars_fragment:Fw,envmap_vertex:Sw,fog_vertex:Mw,fog_pars_vertex:Tw,fog_fragment:Ew,fog_pars_fragment:Aw,gradientmap_pars_fragment:Cw,lightmap_fragment:Dw,lightmap_pars_fragment:Pw,lights_lambert_fragment:Rw,lights_lambert_pars_fragment:Lw,lights_pars_begin:Iw,lights_toon_fragment:Ow,lights_toon_pars_fragment:Nw,lights_phong_fragment:kw,lights_phong_pars_fragment:Bw,lights_physical_fragment:Uw,lights_physical_pars_fragment:zw,lights_fragment_begin:Vw,lights_fragment_maps:Hw,lights_fragment_end:Gw,logdepthbuf_fragment:Ww,logdepthbuf_pars_fragment:$w,logdepthbuf_pars_vertex:jw,logdepthbuf_vertex:qw,map_fragment:Xw,map_pars_fragment:Kw,map_particle_fragment:Yw,map_particle_pars_fragment:Zw,metalnessmap_fragment:Jw,metalnessmap_pars_fragment:Qw,morphcolor_vertex:eS,morphnormal_vertex:tS,morphtarget_pars_vertex:nS,morphtarget_vertex:iS,normal_fragment_begin:rS,normal_fragment_maps:sS,normal_pars_fragment:oS,normal_pars_vertex:aS,normal_vertex:lS,normalmap_pars_fragment:cS,clearcoat_normal_fragment_begin:uS,clearcoat_normal_fragment_maps:fS,clearcoat_pars_fragment:dS,iridescence_pars_fragment:hS,output_fragment:pS,packing:mS,premultiplied_alpha_fragment:gS,project_vertex:vS,dithering_fragment:_S,dithering_pars_fragment:xS,roughnessmap_fragment:yS,roughnessmap_pars_fragment:bS,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:SS,shadowmap_vertex:MS,shadowmask_pars_fragment:TS,skinbase_vertex:ES,skinning_pars_vertex:AS,skinning_vertex:CS,skinnormal_vertex:DS,specularmap_fragment:PS,specularmap_pars_fragment:RS,tonemapping_fragment:LS,tonemapping_pars_fragment:IS,transmission_fragment:FS,transmission_pars_fragment:OS,uv_pars_fragment:NS,uv_pars_vertex:kS,uv_vertex:BS,uv2_pars_fragment:US,uv2_pars_vertex:zS,uv2_vertex:VS,worldpos_vertex:HS,background_vert:GS,background_frag:WS,backgroundCube_vert:$S,backgroundCube_frag:jS,cube_vert:qS,cube_frag:XS,depth_vert:KS,depth_frag:YS,distanceRGBA_vert:ZS,distanceRGBA_frag:JS,equirect_vert:QS,equirect_frag:eM,linedashed_vert:tM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:rM,meshlambert_vert:sM,meshlambert_frag:oM,meshmatcap_vert:aM,meshmatcap_frag:lM,meshnormal_vert:cM,meshnormal_frag:uM,meshphong_vert:fM,meshphong_frag:dM,meshphysical_vert:hM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:gM,points_vert:vM,points_frag:_M,shadow_vert:xM,shadow_frag:yM,sprite_vert:bM,sprite_frag:wM},ae={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new jt},uv2Transform:{value:new jt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}}},Tn={basic:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Ft([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Ft([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Ft([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Ft([ae.points,ae.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Ft([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Ft([ae.common,ae.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Ft([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Ft([ae.sprite,ae.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Ft([ae.common,ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Ft([ae.lights,ae.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Tn.physical={uniforms:Ft([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new de(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Ao={r:0,b:0,g:0};function SM(i,e,t,n,r,s,o){const a=new Ce(0);let c=s===!0?0:1,l,u,d=null,f=0,p=null;function g(h,v){let y=!1,x=v.isScene===!0?v.background:null;x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x));const _=i.xr,M=_.getSession&&_.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?m(a,c):x&&x.isColor&&(m(x,1),y=!0),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Sa)?(u===void 0&&(u=new nt(new Ji(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:Nr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,F,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,(d!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new nt(new $s(2,2),new ct({name:"BackgroundMaterial",uniforms:Nr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=x,f=x.version,p=i.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function m(h,v){h.getRGB(Ao,Zp(i)),n.buffers.color.setClear(Ao.r,Ao.g,Ao.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(h,v=1){a.set(h),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(h){c=h,m(a,c)},render:g}}function MM(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=h(null);let l=c,u=!1;function d(I,k,K,R,B){let q=!1;if(o){const j=m(R,K,k);l!==j&&(l=j,p(l.object)),q=v(I,R,K,B),q&&y(I,R,K,B)}else{const j=k.wireframe===!0;(l.geometry!==R.id||l.program!==K.id||l.wireframe!==j)&&(l.geometry=R.id,l.program=K.id,l.wireframe=j,q=!0)}B!==null&&t.update(B,34963),(q||u)&&(u=!1,b(I,k,K,R),B!==null&&i.bindBuffer(34963,t.get(B).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(I){return n.isWebGL2?i.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function m(I,k,K){const R=K.wireframe===!0;let B=a[I.id];B===void 0&&(B={},a[I.id]=B);let q=B[k.id];q===void 0&&(q={},B[k.id]=q);let j=q[R];return j===void 0&&(j=h(f()),q[R]=j),j}function h(I){const k=[],K=[],R=[];for(let B=0;B<r;B++)k[B]=0,K[B]=0,R[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:R,object:I,attributes:{},index:null}}function v(I,k,K,R){const B=l.attributes,q=k.attributes;let j=0;const V=K.getAttributes();for(const W in V)if(V[W].location>=0){const re=B[W];let U=q[W];if(U===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(U=I.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;j++}return l.attributesNum!==j||l.index!==R}function y(I,k,K,R){const B={},q=k.attributes;let j=0;const V=K.getAttributes();for(const W in V)if(V[W].location>=0){let re=q[W];re===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(re=I.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),B[W]=U,j++}l.attributes=B,l.attributesNum=j,l.index=R}function x(){const I=l.newAttributes;for(let k=0,K=I.length;k<K;k++)I[k]=0}function _(I){M(I,0)}function M(I,k){const K=l.newAttributes,R=l.enabledAttributes,B=l.attributeDivisors;K[I]=1,R[I]===0&&(i.enableVertexAttribArray(I),R[I]=1),B[I]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),B[I]=k)}function P(){const I=l.newAttributes,k=l.enabledAttributes;for(let K=0,R=k.length;K<R;K++)k[K]!==I[K]&&(i.disableVertexAttribArray(K),k[K]=0)}function F(I,k,K,R,B,q){n.isWebGL2===!0&&(K===5124||K===5125)?i.vertexAttribIPointer(I,k,K,B,q):i.vertexAttribPointer(I,k,K,R,B,q)}function b(I,k,K,R){if(n.isWebGL2===!1&&(I.isInstancedMesh||R.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const B=R.attributes,q=K.getAttributes(),j=k.defaultAttributeValues;for(const V in q){const W=q[V];if(W.location>=0){let ne=B[V];if(ne===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),ne!==void 0){const re=ne.normalized,U=ne.itemSize,Y=t.get(ne);if(Y===void 0)continue;const Me=Y.buffer,ue=Y.type,me=Y.bytesPerElement;if(ne.isInterleavedBufferAttribute){const ce=ne.data,ke=ce.stride,Te=ne.offset;if(ce.isInstancedInterleavedBuffer){for(let ye=0;ye<W.locationSize;ye++)M(W.location+ye,ce.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ye=0;ye<W.locationSize;ye++)_(W.location+ye);i.bindBuffer(34962,Me);for(let ye=0;ye<W.locationSize;ye++)F(W.location+ye,U/W.locationSize,ue,re,ke*me,(Te+U/W.locationSize*ye)*me)}else{if(ne.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)M(W.location+ce,ne.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ce=0;ce<W.locationSize;ce++)_(W.location+ce);i.bindBuffer(34962,Me);for(let ce=0;ce<W.locationSize;ce++)F(W.location+ce,U/W.locationSize,ue,re,U*me,U/W.locationSize*ce*me)}}else if(j!==void 0){const re=j[V];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(W.location,re);break;case 3:i.vertexAttrib3fv(W.location,re);break;case 4:i.vertexAttrib4fv(W.location,re);break;default:i.vertexAttrib1fv(W.location,re)}}}}P()}function E(){Q();for(const I in a){const k=a[I];for(const K in k){const R=k[K];for(const B in R)g(R[B].object),delete R[B];delete k[K]}delete a[I]}}function O(I){if(a[I.id]===void 0)return;const k=a[I.id];for(const K in k){const R=k[K];for(const B in R)g(R[B].object),delete R[B];delete k[K]}delete a[I.id]}function $(I){for(const k in a){const K=a[k];if(K[I.id]===void 0)continue;const R=K[I.id];for(const B in R)g(R[B].object),delete R[B];delete K[I.id]}}function Q(){G(),u=!0,l!==c&&(l=c,p(l.object))}function G(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:G,dispose:E,releaseStatesOfGeometry:O,releaseStatesOfProgram:$,initAttributes:x,enableAttribute:_,disableUnusedAttributes:P}}function TM(i,e,t,n){const r=n.isWebGL2;let s;function o(l){s=l}function a(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,d){if(d===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,l,u,d),t.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=c}function EM(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(34930),f=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),h=i.getParameter(36347),v=i.getParameter(36348),y=i.getParameter(36349),x=f>0,_=o||e.has("OES_texture_float"),M=x&&_,P=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:P}}function AM(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ai,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,p){const g=d.length!==0||f||n!==0||r;return r=f,t=u(d,p,0),n=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(d,f,p){const g=d.clippingPlanes,m=d.clipIntersection,h=d.clipShadows,v=i.get(d);if(!r||g===null||g.length===0||s&&!h)s?u(null):l();else{const y=s?0:n,x=y*4;let _=v.clippingState||null;c.value=_,_=u(g,f,x,p);for(let M=0;M!==x;++M)_[M]=t[M];v.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,p,g){const m=d!==null?d.length:0;let h=null;if(m!==0){if(h=c.value,g!==!0||h===null){const v=p+m*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(h===null||h.length<v)&&(h=new Float32Array(v));for(let x=0,_=p;x!==m;++x,_+=4)o.copy(d[x]).applyMatrix4(y,a),o.normal.toArray(h,_),h[_+3]=o.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,h}}function CM(i){let e=new WeakMap;function t(o,a){return a===ac?o.mapping=Rr:a===lc&&(o.mapping=Lr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ac||a===lc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new V1(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class js extends Jp{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sr=4,Jf=[.125,.215,.35,.446,.526,.582],Ri=20,Al=new js,Qf=new Ce;let Cl=null;const Ci=(1+Math.sqrt(5))/2,yr=1/Ci,ed=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ci,yr),new L(0,Ci,-yr),new L(yr,0,Ci),new L(-yr,0,Ci),new L(Ci,yr,0),new L(-Ci,yr,0)];class td{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Cl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cl),e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Ts,format:rn,encoding:Gi,depthBuffer:!1},r=nd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DM(s)),this._blurMaterial=PM(s,e,t)}return r}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,Al)}_sceneToCubeUV(e,t,n,r){const a=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Qf),u.toneMapping=jn,u.autoClear=!1;const p=new En({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new nt(new Ji,p);let m=!1;const h=e.background;h?h.isColor&&(p.color.copy(h),e.background=null,m=!0):(p.color.copy(Qf),m=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(a.up.set(0,c[v],0),a.lookAt(l[v],0,0)):y===1?(a.up.set(0,0,c[v]),a.lookAt(0,l[v],0)):(a.up.set(0,c[v],0),a.lookAt(0,0,l[v]));const x=this._cubeSize;Co(r,y*x,v>2?x:0,x,x),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Rr||e.mapping===Lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=id());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Co(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Al)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ed[(r-1)%ed.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new nt(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),m=s/g,h=isFinite(s)?1+Math.floor(u*m):Ri;h>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ri}`);const v=[];let y=0;for(let F=0;F<Ri;++F){const b=F/m,E=Math.exp(-b*b/2);v.push(E),F===0?y+=E:F<h&&(y+=2*E)}for(let F=0;F<v.length;F++)v[F]=v[F]/y;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const _=this._sizeLods[r],M=3*_*(r>x-Sr?r-x+Sr:0),P=4*(this._cubeSize-_);Co(t,M,P,3*_,2*_),c.setRenderTarget(t),c.render(d,Al)}}function DM(i){const e=[],t=[],n=[];let r=i;const s=i-Sr+1+Jf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Sr?c=Jf[o-i+Sr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,m=3,h=2,v=1,y=new Float32Array(m*g*p),x=new Float32Array(h*g*p),_=new Float32Array(v*g*p);for(let P=0;P<p;P++){const F=P%3*2/3-1,b=P>2?0:-1,E=[F,b,0,F+2/3,b,0,F+2/3,b+1,0,F,b,0,F+2/3,b+1,0,F,b+1,0];y.set(E,m*g*P),x.set(f,h*g*P);const O=[P,P,P,P,P,P];_.set(O,v*g*P)}const M=new zt;M.setAttribute("position",new At(y,m)),M.setAttribute("uv",new At(x,h)),M.setAttribute("faceIndex",new At(_,v)),e.push(M),r>Sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nd(i,e,t){const n=new mn(i,e,t);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Co(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function PM(i,e,t){const n=new Float32Array(Ri),r=new L(0,1,0);return new ct({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function id(){return new ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function rd(){return new ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function RM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ac||c===lc,u=c===Rr||c===Lr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new td(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new td(i));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function LM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function IM(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],34962);const p=d.morphAttributes;for(const g in p){const m=p[g];for(let h=0,v=m.length;h<v;h++)e.update(m[h],34962)}}function l(d){const f=[],p=d.index,g=d.attributes.position;let m=0;if(p!==null){const y=p.array;m=p.version;for(let x=0,_=y.length;x<_;x+=3){const M=y[x+0],P=y[x+1],F=y[x+2];f.push(M,P,P,F,F,M)}}else{const y=g.array;m=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const M=x+0,P=x+1,F=x+2;f.push(M,P,P,F,F,M)}}const h=new(Gp(f)?Yp:Kp)(f,1);h.version=m;const v=s.get(d);v&&e.remove(v),s.set(d,h)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function FM(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,p){i.drawElements(s,p,a,f*c),t.update(p,s,1)}function d(f,p,g){if(g===0)return;let m,h;if(r)m=i,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,p,a,f*c,g),t.update(p,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d}function OM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function NM(i,e){return i[0]-e[0]}function kM(i,e){return Math.abs(e[1])-Math.abs(i[1])}function BM(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new je,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d,f){const p=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let h=s.get(u);if(h===void 0||h.count!==m){let k=function(){G.dispose(),s.delete(u),u.removeEventListener("dispose",k)};h!==void 0&&h.texture.dispose();const x=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],F=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let E=0;x===!0&&(E=1),_===!0&&(E=2),M===!0&&(E=3);let O=u.attributes.position.count*E,$=1;O>e.maxTextureSize&&($=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const Q=new Float32Array(O*$*4*m),G=new qp(Q,O,$,m);G.type=ui,G.needsUpdate=!0;const I=E*4;for(let K=0;K<m;K++){const R=P[K],B=F[K],q=b[K],j=O*$*4*K;for(let V=0;V<R.count;V++){const W=V*I;x===!0&&(o.fromBufferAttribute(R,V),Q[j+W+0]=o.x,Q[j+W+1]=o.y,Q[j+W+2]=o.z,Q[j+W+3]=0),_===!0&&(o.fromBufferAttribute(B,V),Q[j+W+4]=o.x,Q[j+W+5]=o.y,Q[j+W+6]=o.z,Q[j+W+7]=0),M===!0&&(o.fromBufferAttribute(q,V),Q[j+W+8]=o.x,Q[j+W+9]=o.y,Q[j+W+10]=o.z,Q[j+W+11]=q.itemSize===4?o.w:1)}}h={count:m,texture:G,size:new de(O,$)},s.set(u,h),u.addEventListener("dispose",k)}let v=0;for(let x=0;x<p.length;x++)v+=p[x];const y=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}else{const g=p===void 0?0:p.length;let m=n[u.id];if(m===void 0||m.length!==g){m=[];for(let _=0;_<g;_++)m[_]=[_,0];n[u.id]=m}for(let _=0;_<g;_++){const M=m[_];M[0]=_,M[1]=p[_]}m.sort(kM);for(let _=0;_<8;_++)_<g&&m[_][1]?(a[_][0]=m[_][0],a[_][1]=m[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(NM);const h=u.morphAttributes.position,v=u.morphAttributes.normal;let y=0;for(let _=0;_<8;_++){const M=a[_],P=M[0],F=M[1];P!==Number.MAX_SAFE_INTEGER&&F?(h&&u.getAttribute("morphTarget"+_)!==h[P]&&u.setAttribute("morphTarget"+_,h[P]),v&&u.getAttribute("morphNormal"+_)!==v[P]&&u.setAttribute("morphNormal"+_,v[P]),r[_]=F,y+=F):(h&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),v&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const x=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function UM(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);return r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const tm=new wt,nm=new qp,im=new E1,rm=new Qp,sd=[],od=[],ad=new Float32Array(16),ld=new Float32Array(9),cd=new Float32Array(4);function Kr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=sd[r];if(s===void 0&&(s=new Float32Array(r),sd[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ma(i,e){let t=od[e];t===void 0&&(t=new Int32Array(e),od[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function VM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function HM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function GM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function WM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;cd.set(n),i.uniformMatrix2fv(this.addr,!1,cd),dt(t,n)}}function $M(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;ld.set(n),i.uniformMatrix3fv(this.addr,!1,ld),dt(t,n)}}function jM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;ad.set(n),i.uniformMatrix4fv(this.addr,!1,ad),dt(t,n)}}function qM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function XM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function KM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function YM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function ZM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function JM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function QM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function eT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function tT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||tm,r)}function nT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||im,r)}function iT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||rm,r)}function rT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||nm,r)}function sT(i){switch(i){case 5126:return zM;case 35664:return VM;case 35665:return HM;case 35666:return GM;case 35674:return WM;case 35675:return $M;case 35676:return jM;case 5124:case 35670:return qM;case 35667:case 35671:return XM;case 35668:case 35672:return KM;case 35669:case 35673:return YM;case 5125:return ZM;case 36294:return JM;case 36295:return QM;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}function oT(i,e){i.uniform1fv(this.addr,e)}function aT(i,e){const t=Kr(e,this.size,2);i.uniform2fv(this.addr,t)}function lT(i,e){const t=Kr(e,this.size,3);i.uniform3fv(this.addr,t)}function cT(i,e){const t=Kr(e,this.size,4);i.uniform4fv(this.addr,t)}function uT(i,e){const t=Kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fT(i,e){const t=Kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dT(i,e){const t=Kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hT(i,e){i.uniform1iv(this.addr,e)}function pT(i,e){i.uniform2iv(this.addr,e)}function mT(i,e){i.uniform3iv(this.addr,e)}function gT(i,e){i.uniform4iv(this.addr,e)}function vT(i,e){i.uniform1uiv(this.addr,e)}function _T(i,e){i.uniform2uiv(this.addr,e)}function xT(i,e){i.uniform3uiv(this.addr,e)}function yT(i,e){i.uniform4uiv(this.addr,e)}function bT(i,e,t){const n=this.cache,r=e.length,s=Ma(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||tm,s[o])}function wT(i,e,t){const n=this.cache,r=e.length,s=Ma(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||im,s[o])}function ST(i,e,t){const n=this.cache,r=e.length,s=Ma(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||rm,s[o])}function MT(i,e,t){const n=this.cache,r=e.length,s=Ma(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||nm,s[o])}function TT(i){switch(i){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return fT;case 35676:return dT;case 5124:case 35670:return hT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return _T;case 36295:return xT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}class ET{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=sT(t.type)}}class AT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=TT(t.type)}}class CT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function ud(i,e){i.seq.push(e),i.map[e.id]=e}function DT(i,e,t){const n=i.name,r=n.length;for(Dl.lastIndex=0;;){const s=Dl.exec(n),o=Dl.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){ud(t,l===void 0?new ET(a,i,e):new AT(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new CT(a),ud(t,d)),t=d}}}class Vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);DT(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function fd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let PT=0;function RT(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function LT(i){switch(i){case Gi:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function dd(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+RT(i.getShaderSource(e),o)}else return r}function IT(i,e){const t=LT(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function FT(i,e){let t;switch(e){case Ub:t="Linear";break;case zb:t="Reinhard";break;case Vb:t="OptimizedCineon";break;case Hb:t="ACESFilmic";break;case Gb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function OT(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function NT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kT(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ps(i){return i!==""}function hd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(i){return i.replace(BT,UT)}function UT(i,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return pc(t)}const zT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(i){return i.replace(zT,VT)}function VT(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===vb?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hs&&(e="SHADOWMAP_TYPE_VSM"),e}function GT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rr:case Lr:e="ENVMAP_TYPE_CUBE";break;case Sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WT(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Lr:e="ENVMAP_MODE_REFRACTION";break}return e}function $T(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kp:e="ENVMAP_BLENDING_MULTIPLY";break;case kb:e="ENVMAP_BLENDING_MIX";break;case Bb:e="ENVMAP_BLENDING_ADD";break}return e}function jT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qT(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=HT(t),l=GT(t),u=WT(t),d=$T(t),f=jT(t),p=t.isWebGL2?"":OT(t),g=NT(s),m=r.createProgram();let h,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[g].filter(ps).join(`
`),h.length>0&&(h+=`
`),v=[p,g].filter(ps).join(`
`),v.length>0&&(v+=`
`)):(h=[gd(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),v=[p,gd(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?De.tonemapping_pars_fragment:"",t.toneMapping!==jn?FT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,IT("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),o=pc(o),o=hd(o,t),o=pd(o,t),a=pc(a),a=hd(a,t),a=pd(a,t),o=md(o),a=md(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["#define varying in",t.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=y+h+o,_=y+v+a,M=fd(r,35633,x),P=fd(r,35632,_);if(r.attachShader(m,M),r.attachShader(m,P),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),i.debug.checkShaderErrors){const E=r.getProgramInfoLog(m).trim(),O=r.getShaderInfoLog(M).trim(),$=r.getShaderInfoLog(P).trim();let Q=!0,G=!0;if(r.getProgramParameter(m,35714)===!1){Q=!1;const I=dd(r,M,"vertex"),k=dd(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+I+`
`+k)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(O===""||$==="")&&(G=!1);G&&(this.diagnostics={runnable:Q,programLog:E,vertexShader:{log:O,prefix:h},fragmentShader:{log:$,prefix:v}})}r.deleteShader(M),r.deleteShader(P);let F;this.getUniforms=function(){return F===void 0&&(F=new Vo(r,m)),F};let b;return this.getAttributes=function(){return b===void 0&&(b=kT(r,m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=PT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=P,this}let XT=0;class KT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new YT(e),t.set(e,n)),n}}class YT{constructor(e){this.id=XT++,this.code=e,this.usedTimes=0}}function ZT(i,e,t,n,r,s,o){const a=new Xp,c=new KT,l=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,E,O,$,Q){const G=$.fog,I=Q.geometry,k=b.isMeshStandardMaterial?$.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),R=!!K&&K.mapping===Sa?K.image.height:null,B=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=q!==void 0?q.length:0;let V=0;I.morphAttributes.position!==void 0&&(V=1),I.morphAttributes.normal!==void 0&&(V=2),I.morphAttributes.color!==void 0&&(V=3);let W,ne,re,U;if(B){const ke=Tn[B];W=ke.vertexShader,ne=ke.fragmentShader}else W=b.vertexShader,ne=b.fragmentShader,c.update(b),re=c.getVertexShaderID(b),U=c.getFragmentShaderID(b);const Y=i.getRenderTarget(),Me=b.alphaTest>0,ue=b.clearcoat>0,me=b.iridescence>0;return{isWebGL2:u,shaderID:B,shaderName:b.type,vertexShader:W,fragmentShader:ne,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:U,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Y===null?i.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Gi,map:!!b.map,matcap:!!b.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:R,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===c1,tangentSpaceNormalMap:b.normalMapType===Vp,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===qe,clearcoat:ue,clearcoatMap:ue&&!!b.clearcoatMap,clearcoatRoughnessMap:ue&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!b.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!b.iridescenceMap,iridescenceThicknessMap:me&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Ar,alphaMap:!!b.alphaMap,alphaTest:Me,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!I.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!G,useFog:b.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:V,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:jn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Hn,flipSided:b.side===Bt,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function h(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)E.push(O),E.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(v(E,b),y(E,b),E.push(i.outputEncoding)),E.push(b.customProgramCacheKey),E.join()}function v(b,E){b.push(E.precision),b.push(E.outputEncoding),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.combine),b.push(E.vertexUvs),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function y(b,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),b.push(a.mask)}function x(b){const E=g[b.type];let O;if(E){const $=Tn[E];O=Zo.clone($.uniforms)}else O=b.uniforms;return O}function _(b,E){let O;for(let $=0,Q=l.length;$<Q;$++){const G=l[$];if(G.cacheKey===E){O=G,++O.usedTimes;break}}return O===void 0&&(O=new qT(i,E,b,s),l.push(O)),O}function M(b){if(--b.usedTimes===0){const E=l.indexOf(b);l[E]=l[l.length-1],l.pop(),b.destroy()}}function P(b){c.remove(b)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:_,releaseProgram:M,releaseShaderCache:P,programs:l,dispose:F}}function JT(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function QT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _d(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,p,g,m,h){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:m,group:h},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=m,v.group=h),e++,v}function a(d,f,p,g,m,h){const v=o(d,f,p,g,m,h);p.transmission>0?n.push(v):p.transparent===!0?r.push(v):t.push(v)}function c(d,f,p,g,m,h){const v=o(d,f,p,g,m,h);p.transmission>0?n.unshift(v):p.transparent===!0?r.unshift(v):t.unshift(v)}function l(d,f){t.length>1&&t.sort(d||QT),n.length>1&&n.sort(f||vd),r.length>1&&r.sort(f||vd)}function u(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function eE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new _d,i.set(n,[o])):r>=s.length?(o=new _d,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function tE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ce};break;case"SpotLight":t={position:new L,direction:new L,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function nE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let iE=0;function rE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sE(i,e){const t=new tE,n=nE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new L);const s=new L,o=new Le,a=new Le;function c(u,d){let f=0,p=0,g=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let m=0,h=0,v=0,y=0,x=0,_=0,M=0,P=0,F=0,b=0;u.sort(rE);const E=d!==!0?Math.PI:1;for(let $=0,Q=u.length;$<Q;$++){const G=u[$],I=G.color,k=G.intensity,K=G.distance,R=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)f+=I.r*k*E,p+=I.g*k*E,g+=I.b*k*E;else if(G.isLightProbe)for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],k);else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity*E),G.castShadow){const q=G.shadow,j=n.get(G);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.directionalShadow[m]=j,r.directionalShadowMap[m]=R,r.directionalShadowMatrix[m]=G.shadow.matrix,_++}r.directional[m]=B,m++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(I).multiplyScalar(k*E),B.distance=K,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[v]=B;const q=G.shadow;if(G.map&&(r.spotLightMap[F]=G.map,F++,q.updateMatrices(G),G.castShadow&&b++),r.spotLightMatrix[v]=q.matrix,G.castShadow){const j=n.get(G);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.spotShadow[v]=j,r.spotShadowMap[v]=R,P++}v++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy(I).multiplyScalar(k),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=B,y++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity*E),B.distance=G.distance,B.decay=G.decay,G.castShadow){const q=G.shadow,j=n.get(G);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,r.pointShadow[h]=j,r.pointShadowMap[h]=R,r.pointShadowMatrix[h]=G.shadow.matrix,M++}r.point[h]=B,h++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(k*E),B.groundColor.copy(G.groundColor).multiplyScalar(k*E),r.hemi[x]=B,x++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const O=r.hash;(O.directionalLength!==m||O.pointLength!==h||O.spotLength!==v||O.rectAreaLength!==y||O.hemiLength!==x||O.numDirectionalShadows!==_||O.numPointShadows!==M||O.numSpotShadows!==P||O.numSpotMaps!==F)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=y,r.point.length=h,r.hemi.length=x,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=P+F-b,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=b,O.directionalLength=m,O.pointLength=h,O.spotLength=v,O.rectAreaLength=y,O.hemiLength=x,O.numDirectionalShadows=_,O.numPointShadows=M,O.numSpotShadows=P,O.numSpotMaps=F,r.version=iE++)}function l(u,d){let f=0,p=0,g=0,m=0,h=0;const v=d.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const _=u[y];if(_.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),f++}else if(_.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),g++}else if(_.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),a.identity(),o.copy(_.matrixWorld),o.premultiply(v),a.extractRotation(o),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),p++}else if(_.isHemisphereLight){const M=r.hemi[h];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(v),h++}}}return{setup:c,setupView:l,state:r}}function xd(i,e){const t=new sE(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(d){n.push(d)}function a(d){r.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function oE(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new xd(i,e),t.set(s,[c])):o>=a.length?(c=new xd(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class aE extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lE extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uE=`uniform sampler2D shadow_pass;
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
}`;function fE(i,e,t){let n=new qc;const r=new de,s=new de,o=new je,a=new aE({depthPacking:l1}),c=new lE,l={},u=t.maxTextureSize,d={0:Bt,1:Vi,2:Hn},f=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:cE,fragmentShader:uE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new nt(g,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fp,this.render=function(_,M,P){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||_.length===0)return;const F=i.getRenderTarget(),b=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),O=i.state;O.setBlending(hi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let $=0,Q=_.length;$<Q;$++){const G=_[$],I=G.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const k=I.getFrameExtents();if(r.multiply(k),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,I.mapSize.y=s.y)),I.map===null){const R=this.type!==hs?{minFilter:bt,magFilter:bt}:{};I.map=new mn(r.x,r.y,R),I.map.texture.name=G.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const K=I.getViewportCount();for(let R=0;R<K;R++){const B=I.getViewport(R);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),O.viewport(o),I.updateMatrices(G,R),n=I.getFrustum(),x(M,P,I.camera,G,this.type)}I.isPointLightShadow!==!0&&this.type===hs&&v(I,P),I.needsUpdate=!1}h.needsUpdate=!1,i.setRenderTarget(F,b,E)};function v(_,M){const P=e.update(m);f.defines.VSM_SAMPLES!==_.blurSamples&&(f.defines.VSM_SAMPLES=_.blurSamples,p.defines.VSM_SAMPLES=_.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new mn(r.x,r.y)),f.uniforms.shadow_pass.value=_.map.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,i.setRenderTarget(_.mapPass),i.clear(),i.renderBufferDirect(M,null,P,f,m,null),p.uniforms.shadow_pass.value=_.mapPass.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,i.setRenderTarget(_.map),i.clear(),i.renderBufferDirect(M,null,P,p,m,null)}function y(_,M,P,F,b,E){let O=null;const $=P.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if($!==void 0?O=$:O=P.isPointLight===!0?c:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const Q=O.uuid,G=M.uuid;let I=l[Q];I===void 0&&(I={},l[Q]=I);let k=I[G];k===void 0&&(k=O.clone(),I[G]=k),O=k}return O.visible=M.visible,O.wireframe=M.wireframe,E===hs?O.side=M.shadowSide!==null?M.shadowSide:M.side:O.side=M.shadowSide!==null?M.shadowSide:d[M.side],O.alphaMap=M.alphaMap,O.alphaTest=M.alphaTest,O.map=M.map,O.clipShadows=M.clipShadows,O.clippingPlanes=M.clippingPlanes,O.clipIntersection=M.clipIntersection,O.displacementMap=M.displacementMap,O.displacementScale=M.displacementScale,O.displacementBias=M.displacementBias,O.wireframeLinewidth=M.wireframeLinewidth,O.linewidth=M.linewidth,P.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(P.matrixWorld),O.nearDistance=F,O.farDistance=b),O}function x(_,M,P,F,b){if(_.visible===!1)return;if(_.layers.test(M.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&b===hs)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,_.matrixWorld);const $=e.update(_),Q=_.material;if(Array.isArray(Q)){const G=$.groups;for(let I=0,k=G.length;I<k;I++){const K=G[I],R=Q[K.materialIndex];if(R&&R.visible){const B=y(_,R,F,P.near,P.far,b);i.renderBufferDirect(P,null,$,B,_,K)}}}else if(Q.visible){const G=y(_,Q,F,P.near,P.far,b);i.renderBufferDirect(P,null,$,G,_,null)}}const O=_.children;for(let $=0,Q=O.length;$<Q;$++)x(O[$],M,P,F,b)}}function dE(i,e,t){const n=t.isWebGL2;function r(){let N=!1;const X=new je;let ie=null;const fe=new je(0,0,0,0);return{setMask:function(_e){ie!==_e&&!N&&(i.colorMask(_e,_e,_e,_e),ie=_e)},setLocked:function(_e){N=_e},setClear:function(_e,We,mt,St,xi){xi===!0&&(_e*=St,We*=St,mt*=St),X.set(_e,We,mt,St),fe.equals(X)===!1&&(i.clearColor(_e,We,mt,St),fe.copy(X))},reset:function(){N=!1,ie=null,fe.set(-1,0,0,0)}}}function s(){let N=!1,X=null,ie=null,fe=null;return{setTest:function(_e){_e?Me(2929):ue(2929)},setMask:function(_e){X!==_e&&!N&&(i.depthMask(_e),X=_e)},setFunc:function(_e){if(ie!==_e){switch(_e){case Pb:i.depthFunc(512);break;case Rb:i.depthFunc(519);break;case Lb:i.depthFunc(513);break;case oc:i.depthFunc(515);break;case Ib:i.depthFunc(514);break;case Fb:i.depthFunc(518);break;case Ob:i.depthFunc(516);break;case Nb:i.depthFunc(517);break;default:i.depthFunc(515)}ie=_e}},setLocked:function(_e){N=_e},setClear:function(_e){fe!==_e&&(i.clearDepth(_e),fe=_e)},reset:function(){N=!1,X=null,ie=null,fe=null}}}function o(){let N=!1,X=null,ie=null,fe=null,_e=null,We=null,mt=null,St=null,xi=null;return{setTest:function(tt){N||(tt?Me(2960):ue(2960))},setMask:function(tt){X!==tt&&!N&&(i.stencilMask(tt),X=tt)},setFunc:function(tt,In,Jt){(ie!==tt||fe!==In||_e!==Jt)&&(i.stencilFunc(tt,In,Jt),ie=tt,fe=In,_e=Jt)},setOp:function(tt,In,Jt){(We!==tt||mt!==In||St!==Jt)&&(i.stencilOp(tt,In,Jt),We=tt,mt=In,St=Jt)},setLocked:function(tt){N=tt},setClear:function(tt){xi!==tt&&(i.clearStencil(tt),xi=tt)},reset:function(){N=!1,X=null,ie=null,fe=null,_e=null,We=null,mt=null,St=null,xi=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,d=new WeakMap;let f={},p={},g=new WeakMap,m=[],h=null,v=!1,y=null,x=null,_=null,M=null,P=null,F=null,b=null,E=!1,O=null,$=null,Q=null,G=null,I=null;const k=i.getParameter(35661);let K=!1,R=0;const B=i.getParameter(7938);B.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(B)[1]),K=R>=1):B.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),K=R>=2);let q=null,j={};const V=i.getParameter(3088),W=i.getParameter(2978),ne=new je().fromArray(V),re=new je().fromArray(W);function U(N,X,ie){const fe=new Uint8Array(4),_e=i.createTexture();i.bindTexture(N,_e),i.texParameteri(N,10241,9728),i.texParameteri(N,10240,9728);for(let We=0;We<ie;We++)i.texImage2D(X+We,0,6408,1,1,0,6408,5121,fe);return _e}const Y={};Y[3553]=U(3553,3553,1),Y[34067]=U(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Me(2929),c.setFunc(oc),st(!1),pt(ff),Me(2884),it(hi);function Me(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function ue(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function me(N,X){return p[N]!==X?(i.bindFramebuffer(N,X),p[N]=X,n&&(N===36009&&(p[36160]=X),N===36160&&(p[36009]=X)),!0):!1}function ce(N,X){let ie=m,fe=!1;if(N)if(ie=g.get(X),ie===void 0&&(ie=[],g.set(X,ie)),N.isWebGLMultipleRenderTargets){const _e=N.texture;if(ie.length!==_e.length||ie[0]!==36064){for(let We=0,mt=_e.length;We<mt;We++)ie[We]=36064+We;ie.length=_e.length,fe=!0}}else ie[0]!==36064&&(ie[0]=36064,fe=!0);else ie[0]!==1029&&(ie[0]=1029,fe=!0);fe&&(t.isWebGL2?i.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function ke(N){return h!==N?(i.useProgram(N),h=N,!0):!1}const Te={[br]:32774,[xb]:32778,[yb]:32779};if(n)Te[pf]=32775,Te[mf]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(Te[pf]=N.MIN_EXT,Te[mf]=N.MAX_EXT)}const ye={[bb]:0,[wb]:1,[Sb]:768,[Op]:770,[Db]:776,[Ab]:774,[Tb]:772,[Mb]:769,[Np]:771,[Cb]:775,[Eb]:773};function it(N,X,ie,fe,_e,We,mt,St){if(N===hi){v===!0&&(ue(3042),v=!1);return}if(v===!1&&(Me(3042),v=!0),N!==_b){if(N!==y||St!==E){if((x!==br||P!==br)&&(i.blendEquation(32774),x=br,P=br),St)switch(N){case Ar:i.blendFuncSeparate(1,771,1,771);break;case qo:i.blendFunc(1,1);break;case df:i.blendFuncSeparate(0,769,0,1);break;case hf:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ar:i.blendFuncSeparate(770,771,1,771);break;case qo:i.blendFunc(770,1);break;case df:i.blendFuncSeparate(0,769,0,1);break;case hf:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,M=null,F=null,b=null,y=N,E=St}return}_e=_e||X,We=We||ie,mt=mt||fe,(X!==x||_e!==P)&&(i.blendEquationSeparate(Te[X],Te[_e]),x=X,P=_e),(ie!==_||fe!==M||We!==F||mt!==b)&&(i.blendFuncSeparate(ye[ie],ye[fe],ye[We],ye[mt]),_=ie,M=fe,F=We,b=mt),y=N,E=!1}function rt(N,X){N.side===Hn?ue(2884):Me(2884);let ie=N.side===Bt;X&&(ie=!ie),st(ie),N.blending===Ar&&N.transparent===!1?it(hi):it(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);const fe=N.stencilWrite;l.setTest(fe),fe&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Be(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Me(32926):ue(32926)}function st(N){O!==N&&(N?i.frontFace(2304):i.frontFace(2305),O=N)}function pt(N){N!==mb?(Me(2884),N!==$&&(N===ff?i.cullFace(1029):N===gb?i.cullFace(1028):i.cullFace(1032))):ue(2884),$=N}function Ze(N){N!==Q&&(K&&i.lineWidth(N),Q=N)}function Be(N,X,ie){N?(Me(32823),(G!==X||I!==ie)&&(i.polygonOffset(X,ie),G=X,I=ie)):ue(32823)}function Pt(N){N?Me(3089):ue(3089)}function xt(N){N===void 0&&(N=33984+k-1),q!==N&&(i.activeTexture(N),q=N)}function A(N,X,ie){ie===void 0&&(q===null?ie=33984+k-1:ie=q);let fe=j[ie];fe===void 0&&(fe={type:void 0,texture:void 0},j[ie]=fe),(fe.type!==N||fe.texture!==X)&&(q!==ie&&(i.activeTexture(ie),q=ie),i.bindTexture(N,X||Y[N]),fe.type=N,fe.texture=X)}function w(){const N=j[q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function D(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(N){ne.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ne.copy(N))}function xe(N){re.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),re.copy(N))}function Ie(N,X){let ie=d.get(X);ie===void 0&&(ie=new WeakMap,d.set(X,ie));let fe=ie.get(N);fe===void 0&&(fe=i.getUniformBlockIndex(X,N.name),ie.set(N,fe))}function Ge(N,X){const fe=d.get(X).get(N);u.get(N)!==fe&&(i.uniformBlockBinding(X,fe,N.__bindingPointIndex),u.set(N,fe))}function et(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},q=null,j={},p={},g=new WeakMap,m=[],h=null,v=!1,y=null,x=null,_=null,M=null,P=null,F=null,b=null,E=!1,O=null,$=null,Q=null,G=null,I=null,ne.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Me,disable:ue,bindFramebuffer:me,drawBuffers:ce,useProgram:ke,setBlending:it,setMaterial:rt,setFlipSided:st,setCullFace:pt,setLineWidth:Ze,setPolygonOffset:Be,setScissorTest:Pt,activeTexture:xt,bindTexture:A,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:D,texImage2D:Se,texImage3D:he,updateUBOMapping:Ie,uniformBlockBinding:Ge,texStorage2D:J,texStorage3D:ve,texSubImage2D:te,texSubImage3D:le,compressedTexSubImage2D:ge,compressedTexSubImage3D:oe,scissor:be,viewport:xe,reset:et}}function hE(i,e,t,n,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,w){return v?new OffscreenCanvas(A,w):Ds("canvas")}function x(A,w,S,D){let te=1;if((A.width>D||A.height>D)&&(te=D/Math.max(A.width,A.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const le=w?Yo:Math.floor,ge=le(te*A.width),oe=le(te*A.height);m===void 0&&(m=y(ge,oe));const J=S?y(ge,oe):m;return J.width=ge,J.height=oe,J.getContext("2d").drawImage(A,0,0,ge,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ge+"x"+oe+")."),J}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function _(A){return hc(A.width)&&hc(A.height)}function M(A){return a?!1:A.wrapS!==nn||A.wrapT!==nn||A.minFilter!==bt&&A.minFilter!==kt}function P(A,w){return A.generateMipmaps&&w&&A.minFilter!==bt&&A.minFilter!==kt}function F(A){i.generateMipmap(A)}function b(A,w,S,D,te=!1){if(a===!1)return w;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le=w;return w===6403&&(S===5126&&(le=33326),S===5131&&(le=33325),S===5121&&(le=33321)),w===33319&&(S===5126&&(le=33328),S===5131&&(le=33327),S===5121&&(le=33323)),w===6408&&(S===5126&&(le=34836),S===5131&&(le=34842),S===5121&&(le=D===qe&&te===!1?35907:32856),S===32819&&(le=32854),S===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function E(A,w,S){return P(A,S)===!0||A.isFramebufferTexture&&A.minFilter!==bt&&A.minFilter!==kt?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function O(A){return A===bt||A===cc||A===uc?9728:9729}function $(A){const w=A.target;w.removeEventListener("dispose",$),G(w),w.isVideoTexture&&g.delete(w)}function Q(A){const w=A.target;w.removeEventListener("dispose",Q),k(w)}function G(A){const w=n.get(A);if(w.__webglInit===void 0)return;const S=A.source,D=h.get(S);if(D){const te=D[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(A),Object.keys(D).length===0&&h.delete(S)}n.remove(A)}function I(A){const w=n.get(A);i.deleteTexture(w.__webglTexture);const S=A.source,D=h.get(S);delete D[w.__cacheKey],o.memory.textures--}function k(A){const w=A.texture,S=n.get(A),D=n.get(w);if(D.__webglTexture!==void 0&&(i.deleteTexture(D.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)i.deleteFramebuffer(S.__webglFramebuffer[te]),S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[te]);else{if(i.deleteFramebuffer(S.__webglFramebuffer),S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let te=0,le=w.length;te<le;te++){const ge=n.get(w[te]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(w[te])}n.remove(w),n.remove(A)}let K=0;function R(){K=0}function B(){const A=K;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),K+=1,A}function q(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function j(A,w){const S=n.get(A);if(A.isVideoTexture&&Pt(A),A.isRenderTargetTexture===!1&&A.version>0&&S.__version!==A.version){const D=A.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(S,A,w);return}}t.bindTexture(3553,S.__webglTexture,33984+w)}function V(A,w){const S=n.get(A);if(A.version>0&&S.__version!==A.version){ue(S,A,w);return}t.bindTexture(35866,S.__webglTexture,33984+w)}function W(A,w){const S=n.get(A);if(A.version>0&&S.__version!==A.version){ue(S,A,w);return}t.bindTexture(32879,S.__webglTexture,33984+w)}function ne(A,w){const S=n.get(A);if(A.version>0&&S.__version!==A.version){me(S,A,w);return}t.bindTexture(34067,S.__webglTexture,33984+w)}const re={[Ir]:10497,[nn]:33071,[Xo]:33648},U={[bt]:9728,[cc]:9984,[uc]:9986,[kt]:9729,[Up]:9985,[jr]:9987};function Y(A,w,S){if(S?(i.texParameteri(A,10242,re[w.wrapS]),i.texParameteri(A,10243,re[w.wrapT]),(A===32879||A===35866)&&i.texParameteri(A,32882,re[w.wrapR]),i.texParameteri(A,10240,U[w.magFilter]),i.texParameteri(A,10241,U[w.minFilter])):(i.texParameteri(A,10242,33071),i.texParameteri(A,10243,33071),(A===32879||A===35866)&&i.texParameteri(A,32882,33071),(w.wrapS!==nn||w.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,10240,O(w.magFilter)),i.texParameteri(A,10241,O(w.minFilter)),w.minFilter!==bt&&w.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");if(w.type===ui&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Ts&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(A,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Me(A,w){let S=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",$));const D=w.source;let te=h.get(D);te===void 0&&(te={},h.set(D,te));const le=q(w);if(le!==A.__cacheKey){te[le]===void 0&&(te[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,S=!0),te[le].usedTimes++;const ge=te[A.__cacheKey];ge!==void 0&&(te[A.__cacheKey].usedTimes--,ge.usedTimes===0&&I(w)),A.__cacheKey=le,A.__webglTexture=te[le].texture}return S}function ue(A,w,S){let D=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(D=35866),w.isData3DTexture&&(D=32879);const te=Me(A,w),le=w.source;t.bindTexture(D,A.__webglTexture,33984+S);const ge=n.get(le);if(le.version!==ge.__version||te===!0){t.activeTexture(33984+S),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);const oe=M(w)&&_(w.image)===!1;let J=x(w.image,oe,!1,u);J=xt(w,J);const ve=_(J)||a,Se=s.convert(w.format,w.encoding);let he=s.convert(w.type),be=b(w.internalFormat,Se,he,w.encoding,w.isVideoTexture);Y(D,w,ve);let xe;const Ie=w.mipmaps,Ge=a&&w.isVideoTexture!==!0,et=ge.__version===void 0||te===!0,N=E(w,J,ve);if(w.isDepthTexture)be=6402,a?w.type===ui?be=36012:w.type===Ii?be=33190:w.type===Cr?be=35056:be=33189:w.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ni&&be===6402&&w.type!==zp&&w.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ii,he=s.convert(w.type)),w.format===Fr&&be===6402&&(be=34041,w.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Cr,he=s.convert(w.type))),et&&(Ge?t.texStorage2D(3553,1,be,J.width,J.height):t.texImage2D(3553,0,be,J.width,J.height,0,Se,he,null));else if(w.isDataTexture)if(Ie.length>0&&ve){Ge&&et&&t.texStorage2D(3553,N,be,Ie[0].width,Ie[0].height);for(let X=0,ie=Ie.length;X<ie;X++)xe=Ie[X],Ge?t.texSubImage2D(3553,X,0,0,xe.width,xe.height,Se,he,xe.data):t.texImage2D(3553,X,be,xe.width,xe.height,0,Se,he,xe.data);w.generateMipmaps=!1}else Ge?(et&&t.texStorage2D(3553,N,be,J.width,J.height),t.texSubImage2D(3553,0,0,0,J.width,J.height,Se,he,J.data)):t.texImage2D(3553,0,be,J.width,J.height,0,Se,he,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&et&&t.texStorage3D(35866,N,be,Ie[0].width,Ie[0].height,J.depth);for(let X=0,ie=Ie.length;X<ie;X++)xe=Ie[X],w.format!==rn?Se!==null?Ge?t.compressedTexSubImage3D(35866,X,0,0,0,xe.width,xe.height,J.depth,Se,xe.data,0,0):t.compressedTexImage3D(35866,X,be,xe.width,xe.height,J.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(35866,X,0,0,0,xe.width,xe.height,J.depth,Se,he,xe.data):t.texImage3D(35866,X,be,xe.width,xe.height,J.depth,0,Se,he,xe.data)}else{Ge&&et&&t.texStorage2D(3553,N,be,Ie[0].width,Ie[0].height);for(let X=0,ie=Ie.length;X<ie;X++)xe=Ie[X],w.format!==rn?Se!==null?Ge?t.compressedTexSubImage2D(3553,X,0,0,xe.width,xe.height,Se,xe.data):t.compressedTexImage2D(3553,X,be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(3553,X,0,0,xe.width,xe.height,Se,he,xe.data):t.texImage2D(3553,X,be,xe.width,xe.height,0,Se,he,xe.data)}else if(w.isDataArrayTexture)Ge?(et&&t.texStorage3D(35866,N,be,J.width,J.height,J.depth),t.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,Se,he,J.data)):t.texImage3D(35866,0,be,J.width,J.height,J.depth,0,Se,he,J.data);else if(w.isData3DTexture)Ge?(et&&t.texStorage3D(32879,N,be,J.width,J.height,J.depth),t.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,Se,he,J.data)):t.texImage3D(32879,0,be,J.width,J.height,J.depth,0,Se,he,J.data);else if(w.isFramebufferTexture){if(et)if(Ge)t.texStorage2D(3553,N,be,J.width,J.height);else{let X=J.width,ie=J.height;for(let fe=0;fe<N;fe++)t.texImage2D(3553,fe,be,X,ie,0,Se,he,null),X>>=1,ie>>=1}}else if(Ie.length>0&&ve){Ge&&et&&t.texStorage2D(3553,N,be,Ie[0].width,Ie[0].height);for(let X=0,ie=Ie.length;X<ie;X++)xe=Ie[X],Ge?t.texSubImage2D(3553,X,0,0,Se,he,xe):t.texImage2D(3553,X,be,Se,he,xe);w.generateMipmaps=!1}else Ge?(et&&t.texStorage2D(3553,N,be,J.width,J.height),t.texSubImage2D(3553,0,0,0,Se,he,J)):t.texImage2D(3553,0,be,Se,he,J);P(w,ve)&&F(D),ge.__version=le.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function me(A,w,S){if(w.image.length!==6)return;const D=Me(A,w),te=w.source;t.bindTexture(34067,A.__webglTexture,33984+S);const le=n.get(te);if(te.version!==le.__version||D===!0){t.activeTexture(33984+S),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);const ge=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,J=[];for(let X=0;X<6;X++)!ge&&!oe?J[X]=x(w.image[X],!1,!0,l):J[X]=oe?w.image[X].image:w.image[X],J[X]=xt(w,J[X]);const ve=J[0],Se=_(ve)||a,he=s.convert(w.format,w.encoding),be=s.convert(w.type),xe=b(w.internalFormat,he,be,w.encoding),Ie=a&&w.isVideoTexture!==!0,Ge=le.__version===void 0||D===!0;let et=E(w,ve,Se);Y(34067,w,Se);let N;if(ge){Ie&&Ge&&t.texStorage2D(34067,et,xe,ve.width,ve.height);for(let X=0;X<6;X++){N=J[X].mipmaps;for(let ie=0;ie<N.length;ie++){const fe=N[ie];w.format!==rn?he!==null?Ie?t.compressedTexSubImage2D(34069+X,ie,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(34069+X,ie,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+X,ie,0,0,fe.width,fe.height,he,be,fe.data):t.texImage2D(34069+X,ie,xe,fe.width,fe.height,0,he,be,fe.data)}}}else{N=w.mipmaps,Ie&&Ge&&(N.length>0&&et++,t.texStorage2D(34067,et,xe,J[0].width,J[0].height));for(let X=0;X<6;X++)if(oe){Ie?t.texSubImage2D(34069+X,0,0,0,J[X].width,J[X].height,he,be,J[X].data):t.texImage2D(34069+X,0,xe,J[X].width,J[X].height,0,he,be,J[X].data);for(let ie=0;ie<N.length;ie++){const _e=N[ie].image[X].image;Ie?t.texSubImage2D(34069+X,ie+1,0,0,_e.width,_e.height,he,be,_e.data):t.texImage2D(34069+X,ie+1,xe,_e.width,_e.height,0,he,be,_e.data)}}else{Ie?t.texSubImage2D(34069+X,0,0,0,he,be,J[X]):t.texImage2D(34069+X,0,xe,he,be,J[X]);for(let ie=0;ie<N.length;ie++){const fe=N[ie];Ie?t.texSubImage2D(34069+X,ie+1,0,0,he,be,fe.image[X]):t.texImage2D(34069+X,ie+1,xe,he,be,fe.image[X])}}}P(w,Se)&&F(34067),le.__version=te.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ce(A,w,S,D,te){const le=s.convert(S.format,S.encoding),ge=s.convert(S.type),oe=b(S.internalFormat,le,ge,S.encoding);n.get(w).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,oe,w.width,w.height,w.depth,0,le,ge,null):t.texImage2D(te,0,oe,w.width,w.height,0,le,ge,null)),t.bindFramebuffer(36160,A),Be(w)?f.framebufferTexture2DMultisampleEXT(36160,D,te,n.get(S).__webglTexture,0,Ze(w)):(te===3553||te>=34069&&te<=34074)&&i.framebufferTexture2D(36160,D,te,n.get(S).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(A,w,S){if(i.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let D=33189;if(S||Be(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===ui?D=36012:te.type===Ii&&(D=33190));const le=Ze(w);Be(w)?f.renderbufferStorageMultisampleEXT(36161,le,D,w.width,w.height):i.renderbufferStorageMultisample(36161,le,D,w.width,w.height)}else i.renderbufferStorage(36161,D,w.width,w.height);i.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const D=Ze(w);S&&Be(w)===!1?i.renderbufferStorageMultisample(36161,D,35056,w.width,w.height):Be(w)?f.renderbufferStorageMultisampleEXT(36161,D,35056,w.width,w.height):i.renderbufferStorage(36161,34041,w.width,w.height),i.framebufferRenderbuffer(36160,33306,36161,A)}else{const D=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<D.length;te++){const le=D[te],ge=s.convert(le.format,le.encoding),oe=s.convert(le.type),J=b(le.internalFormat,ge,oe,le.encoding),ve=Ze(w);S&&Be(w)===!1?i.renderbufferStorageMultisample(36161,ve,J,w.width,w.height):Be(w)?f.renderbufferStorageMultisampleEXT(36161,ve,J,w.width,w.height):i.renderbufferStorage(36161,J,w.width,w.height)}}i.bindRenderbuffer(36161,null)}function Te(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const D=n.get(w.depthTexture).__webglTexture,te=Ze(w);if(w.depthTexture.format===Ni)Be(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,D,0,te):i.framebufferTexture2D(36160,36096,3553,D,0);else if(w.depthTexture.format===Fr)Be(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,D,0,te):i.framebufferTexture2D(36160,33306,3553,D,0);else throw new Error("Unknown depthTexture format")}function ye(A){const w=n.get(A),S=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(S)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,A)}else if(S){w.__webglDepthbuffer=[];for(let D=0;D<6;D++)t.bindFramebuffer(36160,w.__webglFramebuffer[D]),w.__webglDepthbuffer[D]=i.createRenderbuffer(),ke(w.__webglDepthbuffer[D],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),ke(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function it(A,w,S){const D=n.get(A);w!==void 0&&ce(D.__webglFramebuffer,A,A.texture,36064,3553),S!==void 0&&ye(A)}function rt(A){const w=A.texture,S=n.get(A),D=n.get(w);A.addEventListener("dispose",Q),A.isWebGLMultipleRenderTargets!==!0&&(D.__webglTexture===void 0&&(D.__webglTexture=i.createTexture()),D.__version=w.version,o.memory.textures++);const te=A.isWebGLCubeRenderTarget===!0,le=A.isWebGLMultipleRenderTargets===!0,ge=_(A)||a;if(te){S.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)S.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(S.__webglFramebuffer=i.createFramebuffer(),le)if(r.drawBuffers){const oe=A.texture;for(let J=0,ve=oe.length;J<ve;J++){const Se=n.get(oe[J]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Be(A)===!1){const oe=le?w:[w];S.__webglMultisampledFramebuffer=i.createFramebuffer(),S.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,S.__webglMultisampledFramebuffer);for(let J=0;J<oe.length;J++){const ve=oe[J];S.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(36161,S.__webglColorRenderbuffer[J]);const Se=s.convert(ve.format,ve.encoding),he=s.convert(ve.type),be=b(ve.internalFormat,Se,he,ve.encoding,A.isXRRenderTarget===!0),xe=Ze(A);i.renderbufferStorageMultisample(36161,xe,be,A.width,A.height),i.framebufferRenderbuffer(36160,36064+J,36161,S.__webglColorRenderbuffer[J])}i.bindRenderbuffer(36161,null),A.depthBuffer&&(S.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(S.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,D.__webglTexture),Y(34067,w,ge);for(let oe=0;oe<6;oe++)ce(S.__webglFramebuffer[oe],A,w,36064,34069+oe);P(w,ge)&&F(34067),t.unbindTexture()}else if(le){const oe=A.texture;for(let J=0,ve=oe.length;J<ve;J++){const Se=oe[J],he=n.get(Se);t.bindTexture(3553,he.__webglTexture),Y(3553,Se,ge),ce(S.__webglFramebuffer,A,Se,36064+J,3553),P(Se,ge)&&F(3553)}t.unbindTexture()}else{let oe=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?oe=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,D.__webglTexture),Y(oe,w,ge),ce(S.__webglFramebuffer,A,w,36064,oe),P(w,ge)&&F(oe),t.unbindTexture()}A.depthBuffer&&ye(A)}function st(A){const w=_(A)||a,S=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let D=0,te=S.length;D<te;D++){const le=S[D];if(P(le,w)){const ge=A.isWebGLCubeRenderTarget?34067:3553,oe=n.get(le).__webglTexture;t.bindTexture(ge,oe),F(ge),t.unbindTexture()}}}function pt(A){if(a&&A.samples>0&&Be(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],S=A.width,D=A.height;let te=16384;const le=[],ge=A.stencilBuffer?33306:36096,oe=n.get(A),J=A.isWebGLMultipleRenderTargets===!0;if(J)for(let ve=0;ve<w.length;ve++)t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ve,36161,null),t.bindFramebuffer(36160,oe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ve,3553,null,0);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer);for(let ve=0;ve<w.length;ve++){le.push(36064+ve),A.depthBuffer&&le.push(ge);const Se=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Se===!1&&(A.depthBuffer&&(te|=256),A.stencilBuffer&&(te|=1024)),J&&i.framebufferRenderbuffer(36008,36064,36161,oe.__webglColorRenderbuffer[ve]),Se===!0&&(i.invalidateFramebuffer(36008,[ge]),i.invalidateFramebuffer(36009,[ge])),J){const he=n.get(w[ve]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,he,0)}i.blitFramebuffer(0,0,S,D,0,0,S,D,te,9728),p&&i.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),J)for(let ve=0;ve<w.length;ve++){t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ve,36161,oe.__webglColorRenderbuffer[ve]);const Se=n.get(w[ve]).__webglTexture;t.bindFramebuffer(36160,oe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ve,3553,Se,0)}t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}}function Ze(A){return Math.min(d,A.samples)}function Be(A){const w=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pt(A){const w=o.render.frame;g.get(A)!==w&&(g.set(A,w),A.update())}function xt(A,w){const S=A.encoding,D=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===dc||S!==Gi&&(S===qe?a===!1?e.has("EXT_sRGB")===!0&&D===rn?(A.format=dc,A.minFilter=kt,A.generateMipmaps=!1):w=$p.sRGBToLinear(w):(D!==rn||te!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",S)),w}this.allocateTextureUnit=B,this.resetTextureUnits=R,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=ne,this.rebindTextures=it,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Be}function pE(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Hi)return 5121;if(s===qb)return 32819;if(s===Xb)return 32820;if(s===Wb)return 5120;if(s===$b)return 5122;if(s===zp)return 5123;if(s===jb)return 5124;if(s===Ii)return 5125;if(s===ui)return 5126;if(s===Ts)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Kb)return 6406;if(s===rn)return 6408;if(s===Zb)return 6409;if(s===Jb)return 6410;if(s===Ni)return 6402;if(s===Fr)return 34041;if(s===Yb)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===dc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Qb)return 6403;if(s===e1)return 36244;if(s===t1)return 33319;if(s===n1)return 33320;if(s===i1)return 36249;if(s===Qa||s===el||s===tl||s===nl)if(o===qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===el)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===el)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gf||s===vf||s===_f||s===xf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===gf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_f)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===r1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===yf||s===bf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===yf)return o===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===bf)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wf||s===Sf||s===Mf||s===Tf||s===Ef||s===Af||s===Cf||s===Df||s===Pf||s===Rf||s===Lf||s===If||s===Ff||s===Of)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===wf)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sf)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mf)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Tf)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ef)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Af)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cf)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Df)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pf)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rf)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lf)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===If)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ff)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Of)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Nf)return o===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Cr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class mE extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wn extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gE={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const m of e.hand.values()){const h=t.getJointPose(m,n),v=this._getHandJoint(l,m);h!==null&&(v.matrix.fromArray(h.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=h.radius),v.visible=h!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gE)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class vE extends wt{constructor(e,t,n,r,s,o,a,c,l,u){if(u=u!==void 0?u:Ni,u!==Ni&&u!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ni&&(n=Ii),n===void 0&&u===Fr&&(n=Cr),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=c!==void 0?c:bt,this.flipY=!1,this.generateMipmaps=!1}}class _E extends qr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=null,l=null,u=null,d=null,f=null,p=null;const g=t.getContextAttributes();let m=null,h=null;const v=[],y=[],x=new Set,_=new Map,M=new Nt;M.layers.enable(1),M.viewport=new je;const P=new Nt;P.layers.enable(2),P.viewport=new je;const F=[M,P],b=new mE;b.layers.enable(1),b.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let W=v[V];return W===void 0&&(W=new Pl,v[V]=W),W.getTargetRaySpace()},this.getControllerGrip=function(V){let W=v[V];return W===void 0&&(W=new Pl,v[V]=W),W.getGripSpace()},this.getHand=function(V){let W=v[V];return W===void 0&&(W=new Pl,v[V]=W),W.getHandSpace()};function $(V){const W=y.indexOf(V.inputSource);if(W===-1)return;const ne=v[W];ne!==void 0&&ne.dispatchEvent({type:V.type,data:V.inputSource})}function Q(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",G);for(let V=0;V<v.length;V++){const W=y[V];W!==null&&(y[V]=null,v[V].disconnect(W))}E=null,O=null,e.setRenderTarget(m),f=null,d=null,u=null,r=null,h=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:f}),h=new mn(f.framebufferWidth,f.framebufferHeight,{format:rn,type:Hi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let W=null,ne=null,re=null;g.depth&&(re=g.stencil?35056:33190,W=g.stencil?Fr:Ni,ne=g.stencil?Cr:Ii);const U={colorFormat:32856,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(U),r.updateRenderState({layers:[d]}),h=new mn(d.textureWidth,d.textureHeight,{format:rn,type:Hi,depthTexture:new vE(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Y=e.properties.get(h);Y.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await r.requestReferenceSpace(a),j.setContext(r),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function G(V){for(let W=0;W<V.removed.length;W++){const ne=V.removed[W],re=y.indexOf(ne);re>=0&&(y[re]=null,v[re].disconnect(ne))}for(let W=0;W<V.added.length;W++){const ne=V.added[W];let re=y.indexOf(ne);if(re===-1){for(let Y=0;Y<v.length;Y++)if(Y>=y.length){y.push(ne),re=Y;break}else if(y[Y]===null){y[Y]=ne,re=Y;break}if(re===-1)break}const U=v[re];U&&U.connect(ne)}}const I=new L,k=new L;function K(V,W,ne){I.setFromMatrixPosition(W.matrixWorld),k.setFromMatrixPosition(ne.matrixWorld);const re=I.distanceTo(k),U=W.projectionMatrix.elements,Y=ne.projectionMatrix.elements,Me=U[14]/(U[10]-1),ue=U[14]/(U[10]+1),me=(U[9]+1)/U[5],ce=(U[9]-1)/U[5],ke=(U[8]-1)/U[0],Te=(Y[8]+1)/Y[0],ye=Me*ke,it=Me*Te,rt=re/(-ke+Te),st=rt*-ke;W.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(st),V.translateZ(rt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const pt=Me+rt,Ze=ue+rt,Be=ye-st,Pt=it+(re-st),xt=me*ue/Ze*pt,A=ce*ue/Ze*pt;V.projectionMatrix.makePerspective(Be,Pt,xt,A,pt,Ze)}function R(V,W){W===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(W.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;b.near=P.near=M.near=V.near,b.far=P.far=M.far=V.far,(E!==b.near||O!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,O=b.far);const W=V.parent,ne=b.cameras;R(b,W);for(let U=0;U<ne.length;U++)R(ne[U],W);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),V.matrix.copy(b.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const re=V.children;for(let U=0,Y=re.length;U<Y;U++)re[U].updateMatrixWorld(!0);ne.length===2?K(b,M,P):b.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(V){d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.getPlanes=function(){return x};let B=null;function q(V,W){if(l=W.getViewerPose(c||o),p=W,l!==null){const ne=l.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let re=!1;ne.length!==b.cameras.length&&(b.cameras.length=0,re=!0);for(let U=0;U<ne.length;U++){const Y=ne[U];let Me=null;if(f!==null)Me=f.getViewport(Y);else{const me=u.getViewSubImage(d,Y);Me=me.viewport,U===0&&(e.setRenderTargetTextures(h,me.colorTexture,d.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(h))}let ue=F[U];ue===void 0&&(ue=new Nt,ue.layers.enable(U),ue.viewport=new je,F[U]=ue),ue.matrix.fromArray(Y.transform.matrix),ue.projectionMatrix.fromArray(Y.projectionMatrix),ue.viewport.set(Me.x,Me.y,Me.width,Me.height),U===0&&b.matrix.copy(ue.matrix),re===!0&&b.cameras.push(ue)}}for(let ne=0;ne<v.length;ne++){const re=y[ne],U=v[ne];re!==null&&U!==void 0&&U.update(re,W,c||o)}if(B&&B(V,W),W.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:W.detectedPlanes});let ne=null;for(const re of x)W.detectedPlanes.has(re)||(ne===null&&(ne=[]),ne.push(re));if(ne!==null)for(const re of ne)x.delete(re),_.delete(re),n.dispatchEvent({type:"planeremoved",data:re});for(const re of W.detectedPlanes)if(!x.has(re))x.add(re),_.set(re,W.lastChangedTime),n.dispatchEvent({type:"planeadded",data:re});else{const U=_.get(re);re.lastChangedTime>U&&(_.set(re,re.lastChangedTime),n.dispatchEvent({type:"planechanged",data:re}))}}p=null}const j=new em;j.setAnimationLoop(q),this.setAnimationLoop=function(V){B=V},this.dispose=function(){}}}function xE(i,e){function t(m,h){h.color.getRGB(m.fogColor.value,Zp(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function n(m,h,v,y,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),u(m,h)):h.isMeshPhongMaterial?(r(m,h),l(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&f(m,h,x)):h.isMeshMatcapMaterial?(r(m,h),p(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),g(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?a(m,h,v,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.bumpMap&&(m.bumpMap.value=h.bumpMap,m.bumpScale.value=h.bumpScale,h.side===Bt&&(m.bumpScale.value*=-1)),h.displacementMap&&(m.displacementMap.value=h.displacementMap,m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap),h.normalMap&&(m.normalMap.value=h.normalMap,m.normalScale.value.copy(h.normalScale),h.side===Bt&&m.normalScale.value.negate()),h.specularMap&&(m.specularMap.value=h.specularMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const _=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*_}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity);let y;h.map?y=h.map:h.specularMap?y=h.specularMap:h.displacementMap?y=h.displacementMap:h.normalMap?y=h.normalMap:h.bumpMap?y=h.bumpMap:h.roughnessMap?y=h.roughnessMap:h.metalnessMap?y=h.metalnessMap:h.alphaMap?y=h.alphaMap:h.emissiveMap?y=h.emissiveMap:h.clearcoatMap?y=h.clearcoatMap:h.clearcoatNormalMap?y=h.clearcoatNormalMap:h.clearcoatRoughnessMap?y=h.clearcoatRoughnessMap:h.iridescenceMap?y=h.iridescenceMap:h.iridescenceThicknessMap?y=h.iridescenceThicknessMap:h.specularIntensityMap?y=h.specularIntensityMap:h.specularColorMap?y=h.specularColorMap:h.transmissionMap?y=h.transmissionMap:h.thicknessMap?y=h.thicknessMap:h.sheenColorMap?y=h.sheenColorMap:h.sheenRoughnessMap&&(y=h.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let x;h.aoMap?x=h.aoMap:h.lightMap&&(x=h.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function a(m,h,v,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=y*.5,h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let x;h.map?x=h.map:h.alphaMap&&(x=h.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let v;h.map?v=h.map:h.alphaMap&&(v=h.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function l(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.roughness.value=h.roughness,m.metalness.value=h.metalness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),m.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Bt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap)}function p(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){m.referencePosition.value.copy(h.referencePosition),m.nearDistance.value=h.nearDistance,m.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function yE(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function c(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function l(y,x){let _=r[y.id];_===void 0&&(g(y),_=u(y),r[y.id]=_,y.addEventListener("dispose",h));const M=x.program;n.updateUBOMapping(y,M);const P=e.render.frame;s[y.id]!==P&&(f(y),s[y.id]=P)}function u(y){const x=d();y.__bindingPointIndex=x;const _=i.createBuffer(),M=y.__size,P=y.usage;return i.bindBuffer(35345,_),i.bufferData(35345,M,P),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,_),_}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=r[y.id],_=y.uniforms,M=y.__cache;i.bindBuffer(35345,x);for(let P=0,F=_.length;P<F;P++){const b=_[P];if(p(b,P,M)===!0){const E=b.value,O=b.__offset;typeof E=="number"?(b.__data[0]=E,i.bufferSubData(35345,O,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):E.toArray(b.__data),i.bufferSubData(35345,O,b.__data))}}i.bindBuffer(35345,null)}function p(y,x,_){const M=y.value;if(_[x]===void 0)return typeof M=="number"?_[x]=M:_[x]=M.clone(),!0;if(typeof M=="number"){if(_[x]!==M)return _[x]=M,!0}else{const P=_[x];if(P.equals(M)===!1)return P.copy(M),!0}return!1}function g(y){const x=y.uniforms;let _=0;const M=16;let P=0;for(let F=0,b=x.length;F<b;F++){const E=x[F],O=m(E);if(E.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=_,F>0){P=_%M;const $=M-P;P!==0&&$-O.boundary<0&&(_+=M-P,E.__offset=_)}_+=O.storage}return P=_%M,P>0&&(_+=M-P),y.__size=_,y.__cache={},this}function m(y){const x=y.value,_={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function h(y){const x=y.target;x.removeEventListener("dispose",h);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function v(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:v}}function bE(){const i=Ds("canvas");return i.style.display="block",i}function sm(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:bE(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",l=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let d=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Gi,this.physicallyCorrectLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;const m=this;let h=!1,v=0,y=0,x=null,_=-1,M=null;const P=new je,F=new je;let b=null,E=e.width,O=e.height,$=1,Q=null,G=null;const I=new je(0,0,E,O),k=new je(0,0,E,O);let K=!1;const R=new qc;let B=!1,q=!1,j=null;const V=new Le,W=new de,ne=new L,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function U(){return x===null?$:1}let Y=t;function Me(T,H){for(let Z=0;Z<T.length;Z++){const z=T[Z],ee=e.getContext(z,H);if(ee!==null)return ee}return null}try{const T={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gc}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),Y===null){const H=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&H.shift(),Y=Me(H,T),Y===null)throw Me(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ue,me,ce,ke,Te,ye,it,rt,st,pt,Ze,Be,Pt,xt,A,w,S,D,te,le,ge,oe,J,ve;function Se(){ue=new LM(Y),me=new EM(Y,ue,i),ue.init(me),oe=new pE(Y,ue,me),ce=new dE(Y,ue,me),ke=new OM,Te=new JT,ye=new hE(Y,ue,ce,Te,me,oe,ke),it=new CM(m),rt=new RM(m),st=new W1(Y,me),J=new MM(Y,ue,st,me),pt=new IM(Y,st,ke,J),Ze=new UM(Y,pt,st,ke),te=new BM(Y,me,ye),w=new AM(Te),Be=new ZT(m,it,rt,ue,me,J,w),Pt=new xE(m,Te),xt=new eE,A=new oE(ue,me),D=new SM(m,it,rt,ce,Ze,u,o),S=new fE(m,Ze,me),ve=new yE(Y,ke,me,ce),le=new TM(Y,ue,ke,me),ge=new FM(Y,ue,ke,me),ke.programs=Be.programs,m.capabilities=me,m.extensions=ue,m.properties=Te,m.renderLists=xt,m.shadowMap=S,m.state=ce,m.info=ke}Se();const he=new _E(m,Y);this.xr=he,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(E,O,!1))},this.getSize=function(T){return T.set(E,O)},this.setSize=function(T,H,Z){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=T,O=H,e.width=Math.floor(T*$),e.height=Math.floor(H*$),Z!==!1&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(E*$,O*$).floor()},this.setDrawingBufferSize=function(T,H,Z){E=T,O=H,$=Z,e.width=Math.floor(T*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(I)},this.setViewport=function(T,H,Z,z){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,H,Z,z),ce.viewport(P.copy(I).multiplyScalar($).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,H,Z,z){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,H,Z,z),ce.scissor(F.copy(k).multiplyScalar($).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(T){ce.setScissorTest(K=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){G=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor.apply(D,arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha.apply(D,arguments)},this.clear=function(T=!0,H=!0,Z=!0){let z=0;T&&(z|=16384),H&&(z|=256),Z&&(z|=1024),Y.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),xt.dispose(),A.dispose(),Te.dispose(),it.dispose(),rt.dispose(),Ze.dispose(),J.dispose(),ve.dispose(),Be.dispose(),he.dispose(),he.removeEventListener("sessionstart",fe),he.removeEventListener("sessionend",_e),j&&(j.dispose(),j=null),We.stop()};function be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const T=ke.autoReset,H=S.enabled,Z=S.autoUpdate,z=S.needsUpdate,ee=S.type;Se(),ke.autoReset=T,S.enabled=H,S.autoUpdate=Z,S.needsUpdate=z,S.type=ee}function Ie(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ge(T){const H=T.target;H.removeEventListener("dispose",Ge),et(H)}function et(T){N(T),Te.remove(T)}function N(T){const H=Te.get(T).programs;H!==void 0&&(H.forEach(function(Z){Be.releaseProgram(Z)}),T.isShaderMaterial&&Be.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Z,z,ee,we){H===null&&(H=re);const Ae=ee.isMesh&&ee.matrixWorld.determinant()<0,Pe=Wg(T,H,Z,z,ee);ce.setMaterial(z,Ae);let Re=Z.index,ze=1;z.wireframe===!0&&(Re=pt.getWireframeAttribute(Z),ze=2);const Fe=Z.drawRange,Oe=Z.attributes.position;let ot=Fe.start*ze,Vt=(Fe.start+Fe.count)*ze;we!==null&&(ot=Math.max(ot,we.start*ze),Vt=Math.min(Vt,(we.start+we.count)*ze)),Re!==null?(ot=Math.max(ot,0),Vt=Math.min(Vt,Re.count)):Oe!=null&&(ot=Math.max(ot,0),Vt=Math.min(Vt,Oe.count));const Fn=Vt-ot;if(Fn<0||Fn===1/0)return;J.setup(ee,z,Pe,Z,Re);let yi,at=le;if(Re!==null&&(yi=st.get(Re),at=ge,at.setIndex(yi)),ee.isMesh)z.wireframe===!0?(ce.setLineWidth(z.wireframeLinewidth*U()),at.setMode(1)):at.setMode(4);else if(ee.isLine){let Ne=z.linewidth;Ne===void 0&&(Ne=1),ce.setLineWidth(Ne*U()),ee.isLineSegments?at.setMode(1):ee.isLineLoop?at.setMode(2):at.setMode(3)}else ee.isPoints?at.setMode(0):ee.isSprite&&at.setMode(4);if(ee.isInstancedMesh)at.renderInstances(ot,Fn,ee.count);else if(Z.isInstancedBufferGeometry){const Ne=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Fa=Math.min(Z.instanceCount,Ne);at.renderInstances(ot,Fn,Fa)}else at.render(ot,Fn)},this.compile=function(T,H){function Z(z,ee,we){z.transparent===!0&&z.side===Hn?(z.side=Bt,z.needsUpdate=!0,Jt(z,ee,we),z.side=Vi,z.needsUpdate=!0,Jt(z,ee,we),z.side=Hn):Jt(z,ee,we)}f=A.get(T),f.init(),g.push(f),T.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(m.physicallyCorrectLights),T.traverse(function(z){const ee=z.material;if(ee)if(Array.isArray(ee))for(let we=0;we<ee.length;we++){const Ae=ee[we];Z(Ae,T,z)}else Z(ee,T,z)}),g.pop(),f=null};let X=null;function ie(T){X&&X(T)}function fe(){We.stop()}function _e(){We.start()}const We=new em;We.setAnimationLoop(ie),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(T){X=T,he.setAnimationLoop(T),T===null?We.stop():We.start()},he.addEventListener("sessionstart",fe),he.addEventListener("sessionend",_e),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(H),H=he.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,H,x),f=A.get(T,g.length),f.init(),g.push(f),V.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),R.setFromProjectionMatrix(V),q=this.localClippingEnabled,B=w.init(this.clippingPlanes,q,H),d=xt.get(T,p.length),d.init(),p.push(d),mt(T,H,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(Q,G),B===!0&&w.beginShadows();const Z=f.state.shadowsArray;if(S.render(Z,T,H),B===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),D.render(d,T),f.setupLights(m.physicallyCorrectLights),H.isArrayCamera){const z=H.cameras;for(let ee=0,we=z.length;ee<we;ee++){const Ae=z[ee];St(d,T,Ae,Ae.viewport)}}else St(d,T,H);x!==null&&(ye.updateMultisampleRenderTarget(x),ye.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(m,T,H),J.resetDefaultState(),_=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?d=p[p.length-1]:d=null};function mt(T,H,Z,z){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||R.intersectsSprite(T)){z&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const Ae=Ze.update(T),Pe=T.material;Pe.visible&&d.push(T,Ae,Pe,Z,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==ke.render.frame&&(T.skeleton.update(),T.skeleton.frame=ke.render.frame),!T.frustumCulled||R.intersectsObject(T))){z&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const Ae=Ze.update(T),Pe=T.material;if(Array.isArray(Pe)){const Re=Ae.groups;for(let ze=0,Fe=Re.length;ze<Fe;ze++){const Oe=Re[ze],ot=Pe[Oe.materialIndex];ot&&ot.visible&&d.push(T,Ae,ot,Z,ne.z,Oe)}}else Pe.visible&&d.push(T,Ae,Pe,Z,ne.z,null)}}const we=T.children;for(let Ae=0,Pe=we.length;Ae<Pe;Ae++)mt(we[Ae],H,Z,z)}function St(T,H,Z,z){const ee=T.opaque,we=T.transmissive,Ae=T.transparent;f.setupLightsView(Z),we.length>0&&xi(ee,H,Z),z&&ce.viewport(P.copy(z)),ee.length>0&&tt(ee,H,Z),we.length>0&&tt(we,H,Z),Ae.length>0&&tt(Ae,H,Z),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function xi(T,H,Z){const z=me.isWebGL2;j===null&&(j=new mn(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Ts:Hi,minFilter:jr,samples:z&&s===!0?4:0})),m.getDrawingBufferSize(W),z?j.setSize(W.x,W.y):j.setSize(Yo(W.x),Yo(W.y));const ee=m.getRenderTarget();m.setRenderTarget(j),m.clear();const we=m.toneMapping;m.toneMapping=jn,tt(T,H,Z),m.toneMapping=we,ye.updateMultisampleRenderTarget(j),ye.updateRenderTargetMipmap(j),m.setRenderTarget(ee)}function tt(T,H,Z){const z=H.isScene===!0?H.overrideMaterial:null;for(let ee=0,we=T.length;ee<we;ee++){const Ae=T[ee],Pe=Ae.object,Re=Ae.geometry,ze=z===null?Ae.material:z,Fe=Ae.group;Pe.layers.test(Z.layers)&&In(Pe,H,Z,Re,ze,Fe)}}function In(T,H,Z,z,ee,we){T.onBeforeRender(m,H,Z,z,ee,we),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(m,H,Z,z,T,we),ee.transparent===!0&&ee.side===Hn?(ee.side=Bt,ee.needsUpdate=!0,m.renderBufferDirect(Z,H,z,ee,T,we),ee.side=Vi,ee.needsUpdate=!0,m.renderBufferDirect(Z,H,z,ee,T,we),ee.side=Hn):m.renderBufferDirect(Z,H,z,ee,T,we),T.onAfterRender(m,H,Z,z,ee,we)}function Jt(T,H,Z){H.isScene!==!0&&(H=re);const z=Te.get(T),ee=f.state.lights,we=f.state.shadowsArray,Ae=ee.state.version,Pe=Be.getParameters(T,ee.state,we,H,Z),Re=Be.getProgramCacheKey(Pe);let ze=z.programs;z.environment=T.isMeshStandardMaterial?H.environment:null,z.fog=H.fog,z.envMap=(T.isMeshStandardMaterial?rt:it).get(T.envMap||z.environment),ze===void 0&&(T.addEventListener("dispose",Ge),ze=new Map,z.programs=ze);let Fe=ze.get(Re);if(Fe!==void 0){if(z.currentProgram===Fe&&z.lightsStateVersion===Ae)return Au(T,Pe),Fe}else Pe.uniforms=Be.getUniforms(T),T.onBuild(Z,Pe,m),T.onBeforeCompile(Pe,m),Fe=Be.acquireProgram(Pe,Re),ze.set(Re,Fe),z.uniforms=Pe.uniforms;const Oe=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=w.uniform),Au(T,Pe),z.needsLights=jg(T),z.lightsStateVersion=Ae,z.needsLights&&(Oe.ambientLightColor.value=ee.state.ambient,Oe.lightProbe.value=ee.state.probe,Oe.directionalLights.value=ee.state.directional,Oe.directionalLightShadows.value=ee.state.directionalShadow,Oe.spotLights.value=ee.state.spot,Oe.spotLightShadows.value=ee.state.spotShadow,Oe.rectAreaLights.value=ee.state.rectArea,Oe.ltc_1.value=ee.state.rectAreaLTC1,Oe.ltc_2.value=ee.state.rectAreaLTC2,Oe.pointLights.value=ee.state.point,Oe.pointLightShadows.value=ee.state.pointShadow,Oe.hemisphereLights.value=ee.state.hemi,Oe.directionalShadowMap.value=ee.state.directionalShadowMap,Oe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Oe.spotShadowMap.value=ee.state.spotShadowMap,Oe.spotLightMatrix.value=ee.state.spotLightMatrix,Oe.spotLightMap.value=ee.state.spotLightMap,Oe.pointShadowMap.value=ee.state.pointShadowMap,Oe.pointShadowMatrix.value=ee.state.pointShadowMatrix);const ot=Fe.getUniforms(),Vt=Vo.seqWithValue(ot.seq,Oe);return z.currentProgram=Fe,z.uniformsList=Vt,Fe}function Au(T,H){const Z=Te.get(T);Z.outputEncoding=H.outputEncoding,Z.instancing=H.instancing,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Wg(T,H,Z,z,ee){H.isScene!==!0&&(H=re),ye.resetTextureUnits();const we=H.fog,Ae=z.isMeshStandardMaterial?H.environment:null,Pe=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Gi,Re=(z.isMeshStandardMaterial?rt:it).get(z.envMap||Ae),ze=z.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Fe=!!z.normalMap&&!!Z.attributes.tangent,Oe=!!Z.morphAttributes.position,ot=!!Z.morphAttributes.normal,Vt=!!Z.morphAttributes.color,Fn=z.toneMapped?m.toneMapping:jn,yi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,at=yi!==void 0?yi.length:0,Ne=Te.get(z),Fa=f.state.lights;if(B===!0&&(q===!0||T!==M)){const Ht=T===M&&z.id===_;w.setState(z,T,Ht)}let gt=!1;z.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Fa.state.version||Ne.outputEncoding!==Pe||ee.isInstancedMesh&&Ne.instancing===!1||!ee.isInstancedMesh&&Ne.instancing===!0||ee.isSkinnedMesh&&Ne.skinning===!1||!ee.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Re||z.fog===!0&&Ne.fog!==we||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==w.numPlanes||Ne.numIntersection!==w.numIntersection)||Ne.vertexAlphas!==ze||Ne.vertexTangents!==Fe||Ne.morphTargets!==Oe||Ne.morphNormals!==ot||Ne.morphColors!==Vt||Ne.toneMapping!==Fn||me.isWebGL2===!0&&Ne.morphTargetsCount!==at)&&(gt=!0):(gt=!0,Ne.__version=z.version);let bi=Ne.currentProgram;gt===!0&&(bi=Jt(z,H,ee));let Cu=!1,is=!1,Oa=!1;const Rt=bi.getUniforms(),wi=Ne.uniforms;if(ce.useProgram(bi.program)&&(Cu=!0,is=!0,Oa=!0),z.id!==_&&(_=z.id,is=!0),Cu||M!==T){if(Rt.setValue(Y,"projectionMatrix",T.projectionMatrix),me.logarithmicDepthBuffer&&Rt.setValue(Y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,is=!0,Oa=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Ht=Rt.map.cameraPosition;Ht!==void 0&&Ht.setValue(Y,ne.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Rt.setValue(Y,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||ee.isSkinnedMesh)&&Rt.setValue(Y,"viewMatrix",T.matrixWorldInverse)}if(ee.isSkinnedMesh){Rt.setOptional(Y,ee,"bindMatrix"),Rt.setOptional(Y,ee,"bindMatrixInverse");const Ht=ee.skeleton;Ht&&(me.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),Rt.setValue(Y,"boneTexture",Ht.boneTexture,ye),Rt.setValue(Y,"boneTextureSize",Ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Na=Z.morphAttributes;if((Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0&&me.isWebGL2===!0)&&te.update(ee,Z,z,bi),(is||Ne.receiveShadow!==ee.receiveShadow)&&(Ne.receiveShadow=ee.receiveShadow,Rt.setValue(Y,"receiveShadow",ee.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(wi.envMap.value=Re,wi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),is&&(Rt.setValue(Y,"toneMappingExposure",m.toneMappingExposure),Ne.needsLights&&$g(wi,Oa),we&&z.fog===!0&&Pt.refreshFogUniforms(wi,we),Pt.refreshMaterialUniforms(wi,z,$,O,j),Vo.upload(Y,Ne.uniformsList,wi,ye)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Vo.upload(Y,Ne.uniformsList,wi,ye),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Rt.setValue(Y,"center",ee.center),Rt.setValue(Y,"modelViewMatrix",ee.modelViewMatrix),Rt.setValue(Y,"normalMatrix",ee.normalMatrix),Rt.setValue(Y,"modelMatrix",ee.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ht=z.uniformsGroups;for(let ka=0,qg=Ht.length;ka<qg;ka++)if(me.isWebGL2){const Du=Ht[ka];ve.update(Du,bi),ve.bind(Du,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function $g(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function jg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,H,Z){Te.get(T.texture).__webglTexture=H,Te.get(T.depthTexture).__webglTexture=Z;const z=Te.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=Z===void 0,z.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const Z=Te.get(T);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Z=0){x=T,v=H,y=Z;let z=!0,ee=null,we=!1,Ae=!1;if(T){const Re=Te.get(T);Re.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),z=!1):Re.__webglFramebuffer===void 0?ye.setupRenderTarget(T):Re.__hasExternalTextures&&ye.rebindTextures(T,Te.get(T.texture).__webglTexture,Te.get(T.depthTexture).__webglTexture);const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ae=!0);const Fe=Te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ee=Fe[H],we=!0):me.isWebGL2&&T.samples>0&&ye.useMultisampledRTT(T)===!1?ee=Te.get(T).__webglMultisampledFramebuffer:ee=Fe,P.copy(T.viewport),F.copy(T.scissor),b=T.scissorTest}else P.copy(I).multiplyScalar($).floor(),F.copy(k).multiplyScalar($).floor(),b=K;if(ce.bindFramebuffer(36160,ee)&&me.drawBuffers&&z&&ce.drawBuffers(T,ee),ce.viewport(P),ce.scissor(F),ce.setScissorTest(b),we){const Re=Te.get(T.texture);Y.framebufferTexture2D(36160,36064,34069+H,Re.__webglTexture,Z)}else if(Ae){const Re=Te.get(T.texture),ze=H||0;Y.framebufferTextureLayer(36160,36064,Re.__webglTexture,Z||0,ze)}_=-1},this.readRenderTargetPixels=function(T,H,Z,z,ee,we,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){ce.bindFramebuffer(36160,Pe);try{const Re=T.texture,ze=Re.format,Fe=Re.type;if(ze!==rn&&oe.convert(ze)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Fe===Ts&&(ue.has("EXT_color_buffer_half_float")||me.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Fe!==Hi&&oe.convert(Fe)!==Y.getParameter(35738)&&!(Fe===ui&&(me.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-z&&Z>=0&&Z<=T.height-ee&&Y.readPixels(H,Z,z,ee,oe.convert(ze),oe.convert(Fe),we)}finally{const Re=x!==null?Te.get(x).__webglFramebuffer:null;ce.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(T,H,Z=0){const z=Math.pow(2,-Z),ee=Math.floor(H.image.width*z),we=Math.floor(H.image.height*z);ye.setTexture2D(H,0),Y.copyTexSubImage2D(3553,Z,0,0,T.x,T.y,ee,we),ce.unbindTexture()},this.copyTextureToTexture=function(T,H,Z,z=0){const ee=H.image.width,we=H.image.height,Ae=oe.convert(Z.format),Pe=oe.convert(Z.type);ye.setTexture2D(Z,0),Y.pixelStorei(37440,Z.flipY),Y.pixelStorei(37441,Z.premultiplyAlpha),Y.pixelStorei(3317,Z.unpackAlignment),H.isDataTexture?Y.texSubImage2D(3553,z,T.x,T.y,ee,we,Ae,Pe,H.image.data):H.isCompressedTexture?Y.compressedTexSubImage2D(3553,z,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Ae,H.mipmaps[0].data):Y.texSubImage2D(3553,z,T.x,T.y,Ae,Pe,H.image),z===0&&Z.generateMipmaps&&Y.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Z,z,ee=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=T.max.x-T.min.x+1,Ae=T.max.y-T.min.y+1,Pe=T.max.z-T.min.z+1,Re=oe.convert(z.format),ze=oe.convert(z.type);let Fe;if(z.isData3DTexture)ye.setTexture3D(z,0),Fe=32879;else if(z.isDataArrayTexture)ye.setTexture2DArray(z,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,z.flipY),Y.pixelStorei(37441,z.premultiplyAlpha),Y.pixelStorei(3317,z.unpackAlignment);const Oe=Y.getParameter(3314),ot=Y.getParameter(32878),Vt=Y.getParameter(3316),Fn=Y.getParameter(3315),yi=Y.getParameter(32877),at=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;Y.pixelStorei(3314,at.width),Y.pixelStorei(32878,at.height),Y.pixelStorei(3316,T.min.x),Y.pixelStorei(3315,T.min.y),Y.pixelStorei(32877,T.min.z),Z.isDataTexture||Z.isData3DTexture?Y.texSubImage3D(Fe,ee,H.x,H.y,H.z,we,Ae,Pe,Re,ze,at.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Fe,ee,H.x,H.y,H.z,we,Ae,Pe,Re,at.data)):Y.texSubImage3D(Fe,ee,H.x,H.y,H.z,we,Ae,Pe,Re,ze,at),Y.pixelStorei(3314,Oe),Y.pixelStorei(32878,ot),Y.pixelStorei(3316,Vt),Y.pixelStorei(3315,Fn),Y.pixelStorei(32877,yi),ee===0&&z.generateMipmaps&&Y.generateMipmap(Fe),ce.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ye.setTextureCube(T,0):T.isData3DTexture?ye.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ye.setTexture2DArray(T,0):ye.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){v=0,y=0,x=null,ce.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class wE extends sm{}wE.prototype.isWebGL1Renderer=!0;class SE extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ME{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new L;class Kc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const yd=new L,bd=new je,wd=new je,TE=new L,Sd=new Le;class EE extends nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Le,this.bindMatrixInverse=new Le}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;bd.fromBufferAttribute(r.attributes.skinIndex,e),wd.fromBufferAttribute(r.attributes.skinWeight,e),yd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=wd.getComponent(s);if(o!==0){const a=bd.getComponent(s);Sd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(TE.copy(yd).applyMatrix4(Sd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class om extends Ve{constructor(){super(),this.isBone=!0,this.type="Bone"}}class AE extends wt{constructor(e=null,t=1,n=1,r,s,o,a,c,l=bt,u=bt,d,f){super(null,o,a,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Md=new Le,CE=new Le;class Yc{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:CE;Md.multiplyMatrices(a,t[s]),Md.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Yc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Hp(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new AE(t,e,e,rn,ui);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new om),this.bones.push(o),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Td extends At{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ed=new Le,Ad=new Le,Do=[],DE=new Le,cs=new nt;class PE extends nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Td(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let r=0;r<n;r++)this.setMatrixAt(r,DE)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,Ed),Ad.multiplyMatrices(n,Ed),cs.matrixWorld=Ad,cs.raycast(e,Do);for(let o=0,a=Do.length;o<a;o++){const c=Do[o];c.instanceId=s,c.object=this,t.push(c)}Do.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Td(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class am extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cd=new L,Dd=new L,Pd=new Le,Rl=new jc,Po=new Xr;class Zc extends Ve{constructor(e=new zt,t=new am){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Cd.fromBufferAttribute(t,r-1),Dd.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Cd.distanceTo(Dd);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(r),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;Pd.copy(r).invert(),Rl.copy(e.ray).applyMatrix4(Pd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new L,u=new L,d=new L,f=new L,p=this.isLineSegments?2:1,g=n.index,h=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=v,_=y-1;x<_;x+=p){const M=g.getX(x),P=g.getX(x+1);if(l.fromBufferAttribute(h,M),u.fromBufferAttribute(h,P),Rl.distanceSqToSegment(l,u,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let x=v,_=y-1;x<_;x+=p){if(l.fromBufferAttribute(h,x),u.fromBufferAttribute(h,x+1),Rl.distanceSqToSegment(l,u,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Rd=new L,Ld=new L;class RE extends Zc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Rd.fromBufferAttribute(t,r),Ld.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Rd.distanceTo(Ld);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class LE extends Zc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lm extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Id=new Le,mc=new jc,Ro=new Xr,Lo=new L;class IE extends Ve{constructor(e=new zt,t=new lm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),Ro.radius+=s,e.ray.intersectsSphere(Ro)===!1)return;Id.copy(r).invert(),mc.copy(e.ray).applyMatrix4(Id);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,m=p;g<m;g++){const h=l.getX(g);Lo.fromBufferAttribute(d,h),Fd(Lo,h,c,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,m=p;g<m;g++)Lo.fromBufferAttribute(d,g),Fd(Lo,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fd(i,e,t,n,r,s,o){const a=mc.distanceSqToPoint(i);if(a<t){const c=new L;mc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Jc extends zt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(s.slice(),3)),this.setAttribute("uv",new Ct(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new L,_=new L,M=new L;for(let P=0;P<t.length;P+=3)p(t[P+0],x),p(t[P+1],_),p(t[P+2],M),c(x,_,M,y)}function c(y,x,_,M){const P=M+1,F=[];for(let b=0;b<=P;b++){F[b]=[];const E=y.clone().lerp(_,b/P),O=x.clone().lerp(_,b/P),$=P-b;for(let Q=0;Q<=$;Q++)Q===0&&b===P?F[b][Q]=E:F[b][Q]=E.clone().lerp(O,Q/$)}for(let b=0;b<P;b++)for(let E=0;E<2*(P-b)-1;E++){const O=Math.floor(E/2);E%2===0?(f(F[b][O+1]),f(F[b+1][O]),f(F[b][O])):(f(F[b][O+1]),f(F[b+1][O+1]),f(F[b+1][O]))}}function l(y){const x=new L;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(y),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function u(){const y=new L;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const _=h(y)/2/Math.PI+.5,M=v(y)/Math.PI+.5;o.push(_,1-M)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const x=o[y+0],_=o[y+2],M=o[y+4],P=Math.max(x,_,M),F=Math.min(x,_,M);P>.9&&F<.1&&(x<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),M<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function p(y,x){const _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){const y=new L,x=new L,_=new L,M=new L,P=new de,F=new de,b=new de;for(let E=0,O=0;E<s.length;E+=9,O+=6){y.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),_.set(s[E+6],s[E+7],s[E+8]),P.set(o[O+0],o[O+1]),F.set(o[O+2],o[O+3]),b.set(o[O+4],o[O+5]),M.copy(y).add(x).add(_).divideScalar(3);const $=h(M);m(P,O+0,y,$),m(F,O+2,x,$),m(b,O+4,_,$)}}function m(y,x,_,M){M<0&&y.x===1&&(o[x]=y.x-1),_.x===0&&_.z===0&&(o[x]=M/2/Math.PI+.5)}function h(y){return Math.atan2(y.z,-y.x)}function v(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(e){return new Jc(e.vertices,e.indices,e.radius,e.details)}}class Ta extends Jc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ta(e.radius,e.detail)}}class Qc extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qi extends Qc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function oi(i,e,t){return cm(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function Io(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function cm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function FE(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Od(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=i[a+c]}return r}function um(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class qs{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class OE extends qs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kf,endingEnd:kf}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bf:s=e,a=2*t-n;break;case Uf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Bf:o=e,c=2*n-t;break;case Uf:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),m=g*g,h=m*g,v=-f*h+2*f*m-f*g,y=(1+f)*h+(-1.5-2*f)*m+(-.5+f)*g+1,x=(-1-p)*h+(1.5+p)*m+.5*g,_=p*h-p*m;for(let M=0;M!==a;++M)s[M]=v*o[u+M]+y*o[l+M]+x*o[c+M]+_*o[d+M];return s}}class NE extends qs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}}class kE extends qs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ln{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Io(t,this.TimeBufferType),this.values=Io(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Io(e.times,Array),values:Io(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new NE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new OE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case Or:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=oi(n,s,o),this.values=oi(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&cm(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=oi(this.times),t=oi(this.values),n=this.getValueSize(),r=this.getInterpolation()===il,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const d=a*n,f=d-n,p=d+n;for(let g=0;g!==n;++g){const m=t[d+g];if(m!==t[f+g]||m!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=oi(e,0,o),this.values=oi(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=oi(this.times,0),t=oi(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Or;class Yr extends Ln{}Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=Es;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class fm extends Ln{}fm.prototype.ValueTypeName="color";class Ps extends Ln{}Ps.prototype.ValueTypeName="number";class BE extends qs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t);let l=e*a;for(let u=l+a;l!==u;l+=4)mi.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Wi extends Ln{InterpolantFactoryMethodLinear(e){return new BE(this.times,this.values,this.getValueSize(),e)}}Wi.prototype.ValueTypeName="quaternion";Wi.prototype.DefaultInterpolation=Or;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends Ln{}Zr.prototype.ValueTypeName="string";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=Es;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Ln{}Rs.prototype.ValueTypeName="vector";class UE{constructor(e,t=-1,n,r=s1){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(VE(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Ln.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=FE(c);c=Od(c,1,u),l=Od(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ps(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,p,g,m){if(p.length!==0){const h=[],v=[];um(p,h,v,g),h.length!==0&&m.push(new d(f,h,v))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const f=l[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)p[f[g].morphTargets[m]]=-1;for(const m in p){const h=[],v=[];for(let y=0;y!==f[g].morphTargets.length;++y){const x=f[g];h.push(x.time),v.push(x.morphTarget===m?1:0)}r.push(new Ps(".morphTargetInfluence["+m+"]",h,v))}c=p.length*o}else{const p=".bones["+t[d].name+"]";n(Rs,p+".position",f,"pos",r),n(Wi,p+".quaternion",f,"rot",r),n(Rs,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zE(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Rs;case"color":return fm;case"quaternion":return Wi;case"bool":case"boolean":return Yr;case"string":return Zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function VE(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zE(i.type);if(i.times===void 0){const t=[],n=[];um(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const kr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class HE{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const GE=new HE;class Xs{constructor(e){this.manager=e!==void 0?e:GE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const zn={};class WE extends Error{constructor(e,t){super(e),this.response=t}}class dm extends Xs{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=kr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:r});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=zn[e],d=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let m=0;const h=new ReadableStream({start(v){y();function y(){d.read().then(({done:x,value:_})=>{if(x)v.close();else{m+=_.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let P=0,F=u.length;P<F;P++){const b=u[P];b.onProgress&&b.onProgress(M)}v.enqueue(_),y()}})}}});return new Response(h)}else throw new WE(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{kr.add(e,l);const u=zn[e];delete zn[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=zn[e];if(u===void 0)throw this.manager.itemError(e),l;delete zn[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $E extends Xs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=kr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ds("img");function c(){u(),kr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class jE extends Xs{constructor(e){super(e)}load(e,t,n,r){const s=new wt,o=new $E(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ea extends Ve{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ll=new Le,Nd=new L,kd=new L;class eu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qc,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nd),kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kd),t.updateMatrixWorld(),Ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qE extends eu{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Cs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class XE extends Ea{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DefaultUp),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new qE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bd=new Le,us=new L,Il=new L;class KE extends eu{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),us.setFromMatrixPosition(e.matrixWorld),n.position.copy(us),Il.copy(n.position),Il.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Il),n.updateMatrixWorld(),r.makeTranslation(-us.x,-us.y,-us.z),Bd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bd)}}class YE extends Ea{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new KE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ZE extends eu{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Aa extends Ea{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DefaultUp),this.updateMatrix(),this.target=new Ve,this.shadow=new ZE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tu extends Ea{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class JE extends Xs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=kr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){kr.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class QE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ud(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ud();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ud(){return(typeof performance>"u"?Date:performance).now()}const nu="\\[\\]\\.:\\/",eA=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",tA="[^"+nu.replace("\\.","")+"]",nA=/((?:WC+[\/:])*)/.source.replace("WC",iu),iA=/(WCOD+)?/.source.replace("WCOD",tA),rA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),sA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),oA=new RegExp("^"+nA+iA+rA+sA+"$"),aA=["material","materials","bones","map"];class lA{constructor(e,t,n){const r=n||Xe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Xe{constructor(e,t,n){this.path=t,this.parsedPath=n||Xe.parseTrackName(t),this.node=Xe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Xe.Composite(e,t,n):new Xe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eA,"")}static parseTrackName(e){const t=oA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);aA.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Xe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Xe.Composite=lA;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);const Jo={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ks{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cA=new js(-1,1,1,-1,0,1),ru=new zt;ru.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3));ru.setAttribute("uv",new Ct([0,2,0,0,2,0],2));class hm{constructor(e){this._mesh=new nt(ru,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ls extends Ks{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zo.clone(e.uniforms),this.material=new ct({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new hm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zd extends Ks{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class uA extends Ks{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class pm{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new de);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Jo===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Ls===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Ls(Jo),this.clock=new QE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zd!==void 0&&(o instanceof zd?n=!0:o instanceof uA&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new js(-1,1,1,-1,0,1);const mm=new zt;mm.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3));mm.setAttribute("uv",new Ct([0,2,0,0,2,0],2));class fA extends Ks{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Vd={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class $i extends Ks{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new Ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(s,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new mn(s,o);f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new mn(s,o);p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}Vd===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const a=Vd;this.highPassUniforms=Zo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ct({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new de(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Jo===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=Jo;this.copyUniforms=Zo.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new ct({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:qo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ce,this.oldClearAlpha=1,this.basic=new En,this.fsQuad=new hm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.texSize.value=new de(n,r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=$i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=$i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new ct({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}}$i.BlurDirectionX=new de(1,0);$i.BlurDirectionY=new de(0,1);const ht=new Set,gm=new Set,er=new Set,Ca=new Set,su=new Set,Hd=i=>{let e;const t=new Set,n=(c,l)=>{const u=typeof c=="function"?c(e):c;if(!Object.is(u,e)){const d=e;e=l??typeof u!="object"?u:Object.assign({},e,u),t.forEach(f=>f(e,d))}},r=()=>e,a={setState:n,getState:r,subscribe:c=>(t.add(c),()=>t.delete(c)),destroy:()=>t.clear()};return e=i(n,r,a),a},dA=i=>i?Hd(i):Hd;var Ys,pe,vm,_s,Gd,_m,Qo={},xm=[],hA=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function $n(i,e){for(var t in e)i[t]=e[t];return i}function ym(i){var e=i.parentNode;e&&e.removeChild(i)}function Dn(i,e,t){var n,r,s,o={};for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?Ys.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(s in i.defaultProps)o[s]===void 0&&(o[s]=i.defaultProps[s]);return xs(i,o,n,r,null)}function xs(i,e,t,n,r){var s={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++vm};return r==null&&pe.vnode!=null&&pe.vnode(s),s}function bm(){return{current:null}}function Qe(i){return i.children}function gn(i,e){this.props=i,this.context=e}function Is(i,e){if(e==null)return i.__?Is(i.__,i.__.__k.indexOf(i)+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?Is(i):null}function wm(i){var e,t;if((i=i.__)!=null&&i.__c!=null){for(i.__e=i.__c.base=null,e=0;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null){i.__e=i.__c.base=t.__e;break}return wm(i)}}function gc(i){(!i.__d&&(i.__d=!0)&&_s.push(i)&&!ea.__r++||Gd!==pe.debounceRendering)&&((Gd=pe.debounceRendering)||setTimeout)(ea)}function ea(){for(var i;ea.__r=_s.length;)i=_s.sort(function(e,t){return e.__v.__b-t.__v.__b}),_s=[],i.some(function(e){var t,n,r,s,o,a;e.__d&&(o=(s=(t=e).__v).__e,(a=t.__P)&&(n=[],(r=$n({},s)).__v=s.__v+1,ou(a,s,r,t.__n,a.ownerSVGElement!==void 0,s.__h!=null?[o]:null,n,o??Is(s),s.__h),Em(n,s),s.__e!=o&&wm(s)))})}function Sm(i,e,t,n,r,s,o,a,c,l){var u,d,f,p,g,m,h,v=n&&n.__k||xm,y=v.length;for(t.__k=[],u=0;u<e.length;u++)if((p=t.__k[u]=(p=e[u])==null||typeof p=="boolean"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?xs(null,p,null,null,p):Array.isArray(p)?xs(Qe,{children:p},null,null,null):p.__b>0?xs(p.type,p.props,p.key,p.ref?p.ref:null,p.__v):p)!=null){if(p.__=t,p.__b=t.__b+1,(f=v[u])===null||f&&p.key==f.key&&p.type===f.type)v[u]=void 0;else for(d=0;d<y;d++){if((f=v[d])&&p.key==f.key&&p.type===f.type){v[d]=void 0;break}f=null}ou(i,p,f=f||Qo,r,s,o,a,c,l),g=p.__e,(d=p.ref)&&f.ref!=d&&(h||(h=[]),f.ref&&h.push(f.ref,null,p),h.push(d,p.__c||g,p)),g!=null?(m==null&&(m=g),typeof p.type=="function"&&p.__k===f.__k?p.__d=c=Mm(p,c,i):c=Tm(i,p,f,v,g,c),typeof t.type=="function"&&(t.__d=c)):c&&f.__e==c&&c.parentNode!=i&&(c=Is(f))}for(t.__e=m,u=y;u--;)v[u]!=null&&Cm(v[u],v[u]);if(h)for(u=0;u<h.length;u++)Am(h[u],h[++u],h[++u])}function Mm(i,e,t){for(var n,r=i.__k,s=0;r&&s<r.length;s++)(n=r[s])&&(n.__=i,e=typeof n.type=="function"?Mm(n,e,t):Tm(t,n,n,r,n.__e,e));return e}function qn(i,e){return e=e||[],i==null||typeof i=="boolean"||(Array.isArray(i)?i.some(function(t){qn(t,e)}):e.push(i)),e}function Tm(i,e,t,n,r,s){var o,a,c;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(t==null||r!=s||r.parentNode==null)e:if(s==null||s.parentNode!==i)i.appendChild(r),o=null;else{for(a=s,c=0;(a=a.nextSibling)&&c<n.length;c+=1)if(a==r)break e;i.insertBefore(r,s),o=s}return o!==void 0?o:r.nextSibling}function pA(i,e,t,n,r){var s;for(s in t)s==="children"||s==="key"||s in e||ta(i,s,null,t[s],n);for(s in e)r&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||t[s]===e[s]||ta(i,s,e[s],t[s],n)}function Wd(i,e,t){e[0]==="-"?i.setProperty(e,t):i[e]=t==null?"":typeof t!="number"||hA.test(e)?t:t+"px"}function ta(i,e,t,n,r){var s;e:if(e==="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||Wd(i.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||Wd(i.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in i?e.toLowerCase().slice(2):e.slice(2),i.l||(i.l={}),i.l[e+s]=t,t?n||i.addEventListener(e,s?jd:$d,s):i.removeEventListener(e,s?jd:$d,s);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e.indexOf("-")==-1?i.removeAttribute(e):i.setAttribute(e,t))}}function $d(i){this.l[i.type+!1](pe.event?pe.event(i):i)}function jd(i){this.l[i.type+!0](pe.event?pe.event(i):i)}function ou(i,e,t,n,r,s,o,a,c){var l,u,d,f,p,g,m,h,v,y,x,_,M,P,F,b=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(c=t.__h,a=e.__e=t.__e,e.__h=null,s=[a]),(l=pe.__b)&&l(e);try{e:if(typeof b=="function"){if(h=e.props,v=(l=b.contextType)&&n[l.__c],y=l?v?v.props.value:l.__:n,t.__c?m=(u=e.__c=t.__c).__=u.__E:("prototype"in b&&b.prototype.render?e.__c=u=new b(h,y):(e.__c=u=new gn(h,y),u.constructor=b,u.render=gA),v&&v.sub(u),u.props=h,u.state||(u.state={}),u.context=y,u.__n=n,d=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),b.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=$n({},u.__s)),$n(u.__s,b.getDerivedStateFromProps(h,u.__s))),f=u.props,p=u.state,d)b.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(b.getDerivedStateFromProps==null&&h!==f&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(h,y),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(h,u.__s,y)===!1||e.__v===t.__v){for(u.props=h,u.state=u.__s,e.__v!==t.__v&&(u.__d=!1),u.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(E){E&&(E.__=e)}),x=0;x<u._sb.length;x++)u.__h.push(u._sb[x]);u._sb=[],u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(h,u.__s,y),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(f,p,g)})}if(u.context=y,u.props=h,u.__v=e,u.__P=i,_=pe.__r,M=0,"prototype"in b&&b.prototype.render){for(u.state=u.__s,u.__d=!1,_&&_(e),l=u.render(u.props,u.state,u.context),P=0;P<u._sb.length;P++)u.__h.push(u._sb[P]);u._sb=[]}else do u.__d=!1,_&&_(e),l=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++M<25);u.state=u.__s,u.getChildContext!=null&&(n=$n($n({},n),u.getChildContext())),d||u.getSnapshotBeforeUpdate==null||(g=u.getSnapshotBeforeUpdate(f,p)),F=l!=null&&l.type===Qe&&l.key==null?l.props.children:l,Sm(i,Array.isArray(F)?F:[F],e,t,n,r,s,o,a,c),u.base=e.__e,e.__h=null,u.__h.length&&o.push(u),m&&(u.__E=u.__=null),u.__e=!1}else s==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=mA(t.__e,e,t,n,r,s,o,c);(l=pe.diffed)&&l(e)}catch(E){e.__v=null,(c||s!=null)&&(e.__e=a,e.__h=!!c,s[s.indexOf(a)]=null),pe.__e(E,e,t)}}function Em(i,e){pe.__c&&pe.__c(e,i),i.some(function(t){try{i=t.__h,t.__h=[],i.some(function(n){n.call(t)})}catch(n){pe.__e(n,t.__v)}})}function mA(i,e,t,n,r,s,o,a){var c,l,u,d=t.props,f=e.props,p=e.type,g=0;if(p==="svg"&&(r=!0),s!=null){for(;g<s.length;g++)if((c=s[g])&&"setAttribute"in c==!!p&&(p?c.localName===p:c.nodeType===3)){i=c,s[g]=null;break}}if(i==null){if(p===null)return document.createTextNode(f);i=r?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,f.is&&f),s=null,a=!1}if(p===null)d===f||a&&i.data===f||(i.data=f);else{if(s=s&&Ys.call(i.childNodes),l=(d=t.props||Qo).dangerouslySetInnerHTML,u=f.dangerouslySetInnerHTML,!a){if(s!=null)for(d={},g=0;g<i.attributes.length;g++)d[i.attributes[g].name]=i.attributes[g].value;(u||l)&&(u&&(l&&u.__html==l.__html||u.__html===i.innerHTML)||(i.innerHTML=u&&u.__html||""))}if(pA(i,f,d,r,a),u)e.__k=[];else if(g=e.props.children,Sm(i,Array.isArray(g)?g:[g],e,t,n,r&&p!=="foreignObject",s,o,s?s[0]:t.__k&&Is(t,0),a),s!=null)for(g=s.length;g--;)s[g]!=null&&ym(s[g]);a||("value"in f&&(g=f.value)!==void 0&&(g!==i.value||p==="progress"&&!g||p==="option"&&g!==d.value)&&ta(i,"value",g,d.value,!1),"checked"in f&&(g=f.checked)!==void 0&&g!==i.checked&&ta(i,"checked",g,d.checked,!1))}return i}function Am(i,e,t){try{typeof i=="function"?i(e):i.current=e}catch(n){pe.__e(n,t)}}function Cm(i,e,t){var n,r;if(pe.unmount&&pe.unmount(i),(n=i.ref)&&(n.current&&n.current!==i.__e||Am(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){pe.__e(s,e)}n.base=n.__P=null,i.__c=void 0}if(n=i.__k)for(r=0;r<n.length;r++)n[r]&&Cm(n[r],e,t||typeof i.type!="function");t||i.__e==null||ym(i.__e),i.__=i.__e=i.__d=void 0}function gA(i,e,t){return this.constructor(i,t)}function Br(i,e,t){var n,r,s;pe.__&&pe.__(i,e),r=(n=typeof t=="function")?null:t&&t.__k||e.__k,s=[],ou(e,i=(!n&&t||e).__k=Dn(Qe,null,[i]),r||Qo,Qo,e.ownerSVGElement!==void 0,!n&&t?[t]:r?null:e.firstChild?Ys.call(e.childNodes):null,s,!n&&t?t:r?r.__e:e.firstChild,n),Em(s,i)}function Dm(i,e){Br(i,e,Dm)}function vA(i,e,t){var n,r,s,o=$n({},i.props);for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:o[s]=e[s];return arguments.length>2&&(o.children=arguments.length>3?Ys.call(arguments,2):t),xs(i.type,o,n||i.key,r||i.ref,null)}function Pm(i,e){var t={__c:e="__cC"+_m++,__:i,Consumer:function(n,r){return n.children(r)},Provider:function(n){var r,s;return this.getChildContext||(r=[],(s={})[e]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&r.some(gc)},this.sub=function(o){r.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){r.splice(r.indexOf(o),1),a&&a.call(o)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}Ys=xm.slice,pe={__e:function(i,e,t,n){for(var r,s,o;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(i)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(i,n||{}),o=r.__d),o)return r.__E=r}catch(a){i=a}throw i}},vm=0,gn.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$n({},this.state),typeof i=="function"&&(i=i($n({},t),this.props)),i&&$n(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),gc(this))},gn.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),gc(this))},gn.prototype.render=Qe,_s=[],ea.__r=0,_m=0;var gi,Je,Fl,qd,Ur=0,Rm=[],Ho=[],Xd=pe.__b,Kd=pe.__r,Yd=pe.diffed,Zd=pe.__c,Jd=pe.unmount;function tr(i,e){pe.__h&&pe.__h(Je,i,Ur||e),Ur=0;var t=Je.__H||(Je.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({__V:Ho}),t.__[i]}function Pn(i){return Ur=1,au(Nm,i)}function au(i,e,t){var n=tr(gi++,2);if(n.t=i,!n.__c&&(n.__=[t?t(e):Nm(void 0,e),function(s){var o=n.__N?n.__N[0]:n.__[0],a=n.t(o,s);o!==a&&(n.__N=[a,n.__[1]],n.__c.setState({}))}],n.__c=Je,!Je.u)){Je.u=!0;var r=Je.shouldComponentUpdate;Je.shouldComponentUpdate=function(s,o,a){if(!n.__c.__H)return!0;var c=n.__c.__H.__.filter(function(u){return u.__c});if(c.every(function(u){return!u.__N}))return!r||r.call(this,s,o,a);var l=!1;return c.forEach(function(u){if(u.__N){var d=u.__[0];u.__=u.__N,u.__N=void 0,d!==u.__[0]&&(l=!0)}}),!(!l&&n.__c.props===s)&&(!r||r.call(this,s,o,a))}}return n.__N||n.__}function pi(i,e){var t=tr(gi++,3);!pe.__s&&cu(t.__H,e)&&(t.__=i,t.i=e,Je.__H.__h.push(t))}function Jr(i,e){var t=tr(gi++,4);!pe.__s&&cu(t.__H,e)&&(t.__=i,t.i=e,Je.__h.push(t))}function Fi(i){return Ur=5,Da(function(){return{current:i}},[])}function Lm(i,e,t){Ur=6,Jr(function(){return typeof i=="function"?(i(e()),function(){return i(null)}):i?(i.current=e(),function(){return i.current=null}):void 0},t==null?t:t.concat(i))}function Da(i,e){var t=tr(gi++,7);return cu(t.__H,e)?(t.__V=i(),t.i=e,t.__h=i,t.__V):t.__}function Im(i,e){return Ur=8,Da(function(){return i},e)}function Fm(i){var e=Je.context[i.__c],t=tr(gi++,9);return t.c=i,e?(t.__==null&&(t.__=!0,e.sub(Je)),e.props.value):i.__}function lu(i,e){pe.useDebugValue&&pe.useDebugValue(e?e(i):i)}function _A(i){var e=tr(gi++,10),t=Pn();return e.__=i,Je.componentDidCatch||(Je.componentDidCatch=function(n,r){e.__&&e.__(n,r),t[1](n)}),[t[0],function(){t[1](void 0)}]}function Om(){var i=tr(gi++,11);if(!i.__){for(var e=Je.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var t=e.__m||(e.__m=[0,0]);i.__="P"+t[0]+"-"+t[1]++}return i.__}function xA(){for(var i;i=Rm.shift();)if(i.__P&&i.__H)try{i.__H.__h.forEach(Go),i.__H.__h.forEach(vc),i.__H.__h=[]}catch(e){i.__H.__h=[],pe.__e(e,i.__v)}}pe.__b=function(i){Je=null,Xd&&Xd(i)},pe.__r=function(i){Kd&&Kd(i),gi=0;var e=(Je=i.__c).__H;e&&(Fl===Je?(e.__h=[],Je.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=Ho,t.__N=t.i=void 0})):(e.__h.forEach(Go),e.__h.forEach(vc),e.__h=[])),Fl=Je},pe.diffed=function(i){Yd&&Yd(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(Rm.push(e)!==1&&qd===pe.requestAnimationFrame||((qd=pe.requestAnimationFrame)||yA)(xA)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==Ho&&(t.__=t.__V),t.i=void 0,t.__V=Ho})),Fl=Je=null},pe.__c=function(i,e){e.some(function(t){try{t.__h.forEach(Go),t.__h=t.__h.filter(function(n){return!n.__||vc(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],pe.__e(n,t.__v)}}),Zd&&Zd(i,e)},pe.unmount=function(i){Jd&&Jd(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{Go(n)}catch(r){e=r}}),t.__H=void 0,e&&pe.__e(e,t.__v))};var Qd=typeof requestAnimationFrame=="function";function yA(i){var e,t=function(){clearTimeout(n),Qd&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,100);Qd&&(e=requestAnimationFrame(t))}function Go(i){var e=Je,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),Je=e}function vc(i){var e=Je;i.__c=i.__(),Je=e}function cu(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function Nm(i,e){return typeof e=="function"?e(i):e}function km(i,e){for(var t in e)i[t]=e[t];return i}function _c(i,e){for(var t in i)if(t!=="__source"&&!(t in e))return!0;for(var n in e)if(n!=="__source"&&i[n]!==e[n])return!0;return!1}function Ol(i,e){return i===e&&(i!==0||1/i==1/e)||i!=i&&e!=e}function na(i){this.props=i}function Bm(i,e){function t(r){var s=this.props.ref,o=s==r.ref;return!o&&s&&(s.call?s(null):s.current=null),e?!e(this.props,r)||!o:_c(this.props,r)}function n(r){return this.shouldComponentUpdate=t,Dn(i,r)}return n.displayName="Memo("+(i.displayName||i.name)+")",n.prototype.isReactComponent=!0,n.__f=!0,n}(na.prototype=new gn).isPureReactComponent=!0,na.prototype.shouldComponentUpdate=function(i,e){return _c(this.props,i)||_c(this.state,e)};var eh=pe.__b;pe.__b=function(i){i.type&&i.type.__f&&i.ref&&(i.props.ref=i.ref,i.ref=null),eh&&eh(i)};var bA=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Um(i){function e(t){var n=km({},t);return delete n.ref,i(n,t.ref||null)}return e.$$typeof=bA,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(i.displayName||i.name)+")",e}var th=function(i,e){return i==null?null:qn(qn(i).map(e))},zm={map:th,forEach:th,count:function(i){return i?qn(i).length:0},only:function(i){var e=qn(i);if(e.length!==1)throw"Children.only";return e[0]},toArray:qn},wA=pe.__e;pe.__e=function(i,e,t,n){if(i.then){for(var r,s=e;s=s.__;)if((r=s.__c)&&r.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),r.__c(i,e)}wA(i,e,t,n)};var nh=pe.unmount;function Vm(i,e,t){return i&&(i.__c&&i.__c.__H&&(i.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),i.__c.__H=null),(i=km({},i)).__c!=null&&(i.__c.__P===t&&(i.__c.__P=e),i.__c=null),i.__k=i.__k&&i.__k.map(function(n){return Vm(n,e,t)})),i}function Hm(i,e,t){return i&&(i.__v=null,i.__k=i.__k&&i.__k.map(function(n){return Hm(n,e,t)}),i.__c&&i.__c.__P===e&&(i.__e&&t.insertBefore(i.__e,i.__d),i.__c.__e=!0,i.__c.__P=t)),i}function ys(){this.__u=0,this.t=null,this.__b=null}function Gm(i){var e=i.__.__c;return e&&e.__a&&e.__a(i)}function Wm(i){var e,t,n;function r(s){if(e||(e=i()).then(function(o){t=o.default||o},function(o){n=o}),n)throw n;if(!t)throw e;return Dn(t,s)}return r.displayName="Lazy",r.__f=!0,r}function Mr(){this.u=null,this.o=null}pe.unmount=function(i){var e=i.__c;e&&e.__R&&e.__R(),e&&i.__h===!0&&(i.type=null),nh&&nh(i)},(ys.prototype=new gn).__c=function(i,e){var t=e.__c,n=this;n.t==null&&(n.t=[]),n.t.push(t);var r=Gm(n.__v),s=!1,o=function(){s||(s=!0,t.__R=null,r?r(a):a())};t.__R=o;var a=function(){if(!--n.__u){if(n.state.__a){var l=n.state.__a;n.__v.__k[0]=Hm(l,l.__c.__P,l.__c.__O)}var u;for(n.setState({__a:n.__b=null});u=n.t.pop();)u.forceUpdate()}},c=e.__h===!0;n.__u++||c||n.setState({__a:n.__b=n.__v.__k[0]}),i.then(o,o)},ys.prototype.componentWillUnmount=function(){this.t=[]},ys.prototype.render=function(i,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=Vm(this.__b,t,n.__O=n.__P)}this.__b=null}var r=e.__a&&Dn(Qe,null,i.fallback);return r&&(r.__h=null),[Dn(Qe,null,e.__a?null:i.children),r]};var ih=function(i,e,t){if(++t[1]===t[0]&&i.o.delete(e),i.props.revealOrder&&(i.props.revealOrder[0]!=="t"||!i.o.size))for(t=i.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;i.u=t=t[2]}};function SA(i){return this.getChildContext=function(){return i.context},i.children}function MA(i){var e=this,t=i.i;e.componentWillUnmount=function(){Br(null,e.l),e.l=null,e.i=null},e.i&&e.i!==t&&e.componentWillUnmount(),i.__v?(e.l||(e.i=t,e.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,r){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),Br(Dn(SA,{context:e.context},i.__v),e.l)):e.l&&e.componentWillUnmount()}function $m(i,e){var t=Dn(MA,{__v:i,i:e});return t.containerInfo=e,t}(Mr.prototype=new gn).__a=function(i){var e=this,t=Gm(e.__v),n=e.o.get(i);return n[0]++,function(r){var s=function(){e.props.revealOrder?(n.push(r),ih(e,i,n)):r()};t?t(s):s()}},Mr.prototype.render=function(i){this.u=null,this.o=new Map;var e=qn(i.children);i.revealOrder&&i.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return i.children},Mr.prototype.componentDidUpdate=Mr.prototype.componentDidMount=function(){var i=this;this.o.forEach(function(e,t){ih(i,t,e)})};var jm=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,TA=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,EA=typeof document<"u",AA=function(i){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(i)};function qm(i,e,t){return e.__k==null&&(e.textContent=""),Br(i,e),typeof t=="function"&&t(),i?i.__c:null}function Xm(i,e,t){return Dm(i,e),typeof t=="function"&&t(),i?i.__c:null}gn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(i){Object.defineProperty(gn.prototype,i,{configurable:!0,get:function(){return this["UNSAFE_"+i]},set:function(e){Object.defineProperty(this,i,{configurable:!0,writable:!0,value:e})}})});var rh=pe.event;function CA(){}function DA(){return this.cancelBubble}function PA(){return this.defaultPrevented}pe.event=function(i){return rh&&(i=rh(i)),i.persist=CA,i.isPropagationStopped=DA,i.isDefaultPrevented=PA,i.nativeEvent=i};var Km,sh={configurable:!0,get:function(){return this.class}},oh=pe.vnode;pe.vnode=function(i){var e=i.type,t=i.props,n=t;if(typeof e=="string"){var r=e.indexOf("-")===-1;for(var s in n={},t){var o=t[s];EA&&s==="children"&&e==="noscript"||s==="value"&&"defaultValue"in t&&o==null||(s==="defaultValue"&&"value"in t&&t.value==null?s="value":s==="download"&&o===!0?o="":/ondoubleclick/i.test(s)?s="ondblclick":/^onchange(textarea|input)/i.test(s+e)&&!AA(t.type)?s="oninput":/^onfocus$/i.test(s)?s="onfocusin":/^onblur$/i.test(s)?s="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s)?s=s.toLowerCase():r&&TA.test(s)?s=s.replace(/[A-Z0-9]/g,"-$&").toLowerCase():o===null&&(o=void 0),/^oninput$/i.test(s)&&(s=s.toLowerCase(),n[s]&&(s="oninputCapture")),n[s]=o)}e=="select"&&n.multiple&&Array.isArray(n.value)&&(n.value=qn(t.children).forEach(function(a){a.props.selected=n.value.indexOf(a.props.value)!=-1})),e=="select"&&n.defaultValue!=null&&(n.value=qn(t.children).forEach(function(a){a.props.selected=n.multiple?n.defaultValue.indexOf(a.props.value)!=-1:n.defaultValue==a.props.value})),i.props=n,t.class!=t.className&&(sh.enumerable="className"in t,t.className!=null&&(n.class=t.className),Object.defineProperty(n,"className",sh))}i.$$typeof=jm,oh&&oh(i)};var ah=pe.__r;pe.__r=function(i){ah&&ah(i),Km=i.__c};var Ym={ReactCurrentDispatcher:{current:{readContext:function(i){return Km.__n[i.__c].props.value}}}},RA="17.0.2";function Zm(i){return Dn.bind(null,i)}function uu(i){return!!i&&i.$$typeof===jm}function Jm(i){return uu(i)?vA.apply(null,arguments):i}function Qm(i){return!!i.__k&&(Br(null,i),!0)}function eg(i){return i&&(i.base||i.nodeType===1&&i)||null}var tg=function(i,e){return i(e)},ng=function(i,e){return i(e)},ig=Qe;function fu(i){i()}function rg(i){return i}function sg(){return[!1,fu]}var og=Jr;function ag(i,e){var t=e(),n=Pn({h:{__:t,v:e}}),r=n[0].h,s=n[1];return Jr(function(){r.__=t,r.v=e,Ol(r.__,e())||s({h:r})},[i,t,e]),pi(function(){return Ol(r.__,r.v())||s({h:r}),i(function(){Ol(r.__,r.v())||s({h:r})})},[i]),t}var LA={useState:Pn,useId:Om,useReducer:au,useEffect:pi,useLayoutEffect:Jr,useInsertionEffect:og,useTransition:sg,useDeferredValue:rg,useSyncExternalStore:ag,startTransition:fu,useRef:Fi,useImperativeHandle:Lm,useMemo:Da,useCallback:Im,useContext:Fm,useDebugValue:lu,version:"17.0.2",Children:zm,render:qm,hydrate:Xm,unmountComponentAtNode:Qm,createPortal:$m,createElement:Dn,createContext:Pm,createFactory:Zm,cloneElement:Jm,createRef:bm,Fragment:Qe,isValidElement:uu,findDOMNode:eg,Component:gn,PureComponent:na,memo:Bm,forwardRef:Um,flushSync:ng,unstable_batchedUpdates:tg,StrictMode:ig,Suspense:ys,SuspenseList:Mr,lazy:Wm,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ym};const IA=Object.freeze(Object.defineProperty({__proto__:null,Children:zm,PureComponent:na,StrictMode:ig,Suspense:ys,SuspenseList:Mr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ym,cloneElement:Jm,createFactory:Zm,createPortal:$m,default:LA,findDOMNode:eg,flushSync:ng,forwardRef:Um,hydrate:Xm,isValidElement:uu,lazy:Wm,memo:Bm,render:qm,startTransition:fu,unmountComponentAtNode:Qm,unstable_batchedUpdates:tg,useDeferredValue:rg,useInsertionEffect:og,useSyncExternalStore:ag,useTransition:sg,version:RA,Component:gn,Fragment:Qe,createContext:Pm,createElement:Dn,createRef:bm,useCallback:Im,useContext:Fm,useDebugValue:lu,useEffect:pi,useErrorBoundary:_A,useId:Om,useImperativeHandle:Lm,useLayoutEffect:Jr,useMemo:Da,useReducer:au,useRef:Fi,useState:Pn},Symbol.toStringTag,{value:"Module"}));var lg={exports:{}},cg={};const Zs=jh(IA);var ug={exports:{}},fg={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr=Zs;function FA(i,e){return i===e&&(i!==0||1/i===1/e)||i!==i&&e!==e}var OA=typeof Object.is=="function"?Object.is:FA,NA=zr.useState,kA=zr.useEffect,BA=zr.useLayoutEffect,UA=zr.useDebugValue;function zA(i,e){var t=e(),n=NA({inst:{value:t,getSnapshot:e}}),r=n[0].inst,s=n[1];return BA(function(){r.value=t,r.getSnapshot=e,Nl(r)&&s({inst:r})},[i,t,e]),kA(function(){return Nl(r)&&s({inst:r}),i(function(){Nl(r)&&s({inst:r})})},[i]),UA(t),t}function Nl(i){var e=i.getSnapshot;i=i.value;try{var t=e();return!OA(i,t)}catch{return!0}}function VA(i,e){return e()}var HA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?VA:zA;fg.useSyncExternalStore=zr.useSyncExternalStore!==void 0?zr.useSyncExternalStore:HA;(function(i){i.exports=fg})(ug);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Zs,GA=ug.exports;function WA(i,e){return i===e&&(i!==0||1/i===1/e)||i!==i&&e!==e}var $A=typeof Object.is=="function"?Object.is:WA,jA=GA.useSyncExternalStore,qA=Pa.useRef,XA=Pa.useEffect,KA=Pa.useMemo,YA=Pa.useDebugValue;cg.useSyncExternalStoreWithSelector=function(i,e,t,n,r){var s=qA(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=KA(function(){function c(p){if(!l){if(l=!0,u=p,p=n(p),r!==void 0&&o.hasValue){var g=o.value;if(r(g,p))return d=g}return d=p}if(g=d,$A(u,p))return g;var m=n(p);return r!==void 0&&r(g,m)?g:(u=p,d=m)}var l=!1,u,d,f=t===void 0?null:t;return[function(){return c(e())},f===null?void 0:function(){return c(f())}]},[e,t,n,r]);var a=jA(i,s[0],s[1]);return XA(function(){o.hasValue=!0,o.value=a},[a]),YA(a),a};(function(i){i.exports=cg})(lg);const ZA=$h(lg.exports),{useSyncExternalStoreWithSelector:JA}=ZA;function He(i,e=i.getState,t){const n=JA(i.subscribe,i.getState,i.getServerState||i.getState,e,t);return lu(n),n}const lh=i=>{const e=typeof i=="function"?dA(i):i,t=(n,r)=>He(e,n,r);return Object.assign(t,e),t},Qr=i=>i?lh(i):lh,ia=i=>e=>{try{const t=i(e);return t instanceof Promise?t:{then(n){return ia(n)(t)},catch(n){return this}}}catch(t){return{then(n){return this},catch(n){return ia(n)(t)}}}},QA=(i,e)=>(t,n,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:h=>h,version:0,merge:(h,v)=>({...v,...h}),...e},o=!1;const a=new Set,c=new Set;let l;try{l=s.getStorage()}catch{}if(!l)return i((...h)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(...h)},n,r);const u=ia(s.serialize),d=()=>{const h=s.partialize({...n()});let v;const y=u({state:h,version:s.version}).then(x=>l.setItem(s.name,x)).catch(x=>{v=x});if(v)throw v;return y},f=r.setState;r.setState=(h,v)=>{f(h,v),d()};const p=i((...h)=>{t(...h),d()},n,r);let g;const m=()=>{var h;if(!l)return;o=!1,a.forEach(y=>y(n()));const v=((h=s.onRehydrateStorage)==null?void 0:h.call(s,n()))||void 0;return ia(l.getItem.bind(l))(s.name).then(y=>{if(y)return s.deserialize(y)}).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==s.version){if(s.migrate)return s.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var x;return g=s.merge(y,(x=n())!=null?x:p),t(g,!0),d()}).then(()=>{v?.(g,void 0),o=!0,c.forEach(y=>y(g))}).catch(y=>{v?.(void 0,y)})};return r.persist={setOptions:h=>{s={...s,...h},h.getStorage&&(l=h.getStorage())},clearStorage:()=>{l?.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>m(),hasHydrated:()=>o,onHydrate:h=>(a.add(h),()=>{a.delete(h)}),onFinishHydration:h=>(c.add(h),()=>{c.delete(h)})},m(),g||p},du=QA;var e2=0;function C(i,e,t,n,r){var s,o,a={};for(o in e)o=="ref"?s=e[o]:a[o]=e[o];var c={type:i,props:a,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--e2,__source:r,__self:n};if(typeof i=="function"&&(s=i.defaultProps))for(o in s)a[o]===void 0&&(a[o]=s[o]);return pe.vnode&&pe.vnode(c),c}const[Fs,fi,t2,n2]=[.5,-.5,.3,-.3],ra=30,ch=["Laser","Autopilot","Hammer","ATK\xD72","Vacuum","Missile","placeholder4","placeholder5","placeholder6"],xc=25,i2={Food:"On the trail, it's good to have a hearty meal ready to go. The right foods will give you the energy you need to explore new territory.",Scrap:"With a little ingenuity and a lot of scrap, we can make some missiles to take down our enemies."},r2={Laser:15,Autopilot:100,Hammer:100*15,"ATK\xD72":100*15**2,Vacuum:100*15**3,Missile:100*15**4,placeholder4:100*15**5,placeholder5:100*15**6,placeholder6:100*15**7},Ra=({upgrades:i})=>({Laser:i.Laser+1*(i["ATK\xD72"]+1),Autopilot:void 0,Hammer:i.Hammer===0?void 0:2e3*(i["ATK\xD72"]+1),"ATK\xD72":void 0,Vacuum:void 0,Missile:i.Hammer===0?void 0:1e5*(i["ATK\xD72"]+1),placeholder4:void 0,placeholder5:void 0,placeholder6:void 0}),hu=({upgrades:i})=>({Laser:1,Autopilot:void 0,Hammer:i.Hammer===0?void 0:Math.ceil(50/i.Hammer),"ATK\xD72":void 0,Vacuum:void 0,Missile:i.Missile===0?void 0:Math.ceil(200/i.Missile),placeholder4:void 0,placeholder5:void 0,placeholder6:void 0}),sa=({upgrades:i})=>1+.2*(i.Vacuum-1),pu=(i,e)=>e.upgrades[i]===0&&e.money<Vr(i,e)*2/3,uh=i=>i.completedTutorials.nextStage??!1,s2=()=>!1,Fo=(i=Math.random())=>i*ra*60*6,Vr=(i,{upgrades:e})=>r2[i]*2**e[i],yc=i=>+(500*1.25**(i-1)).toPrecision(2),dg={wasd:C(Qe,{children:["You have become a ",C("b",{children:"fighter"})," pilot that shoots ",C("b",{children:"laser"})," beams. This world is peaceful, so your first mission is to protect farmers from harmful ",C("b",{children:"birds"}),".",C("br",{}),"The controls are simple, ",C("b",{children:[C("i",{class:"ti ti-keyboard"})," WASD"]})," or ",C("b",{children:[C("i",{class:"ti ti-hand-click"})," press"]})," the edge of the screen to move and aim your targets."]}),upgrade:C(Qe,{children:["You can now buy ",C("b",{children:[C("i",{class:"ti ti-chevrons-up"})," upgrades"]})," for your aircraft! To do so, ",C("b",{children:"click"})," on the button in the ",C("b",{children:"top left"})," corner of the screen."]}),nextStage:C(Qe,{children:["You can now move on to the ",C("b",{children:[C("i",{class:"ti ti-map-2"})," next stage"]}),"! To do so, ",C("b",{children:"click"})," the button in the ",C("b",{children:"top right"})," corner of the screen."]}),backToPreviousStage:C(Qe,{children:["If you're finding this stage too ",C("b",{children:"difficult"}),", go back to the previous stage and ",C("b",{children:"try again"})," after you get more upgrades."]}),weatherEffect:C(Qe,{children:["We need to kill a ",C("b",{children:[C("i",{class:"ti ti-ufo"})," UFO"]})," in order to stop the ",C("b",{children:[C("i",{class:"ti ti-cloud-rain"})," rain"]}),". The UFO has a device that can manipulate the weather, and the rain is interfering with the ",C("b",{children:"autopilot"})," system."]})},o2={aliensComing:["Aliens Are Coming To Invade Earth","According to recent reports, aliens are planning to invade Earth. We should be prepared to fight against them and protect our planet. There are many reasons why aliens would want to invade Earth. Our planet is abundant in resources that they may need, and they may view us as a threat to their own species. Whatever their reasons, we cannot allow them to take over our planet. We need to be prepared to fight against the aliens when they come. We should have weapons and defences ready, and we should all be trained in how to use them. We also need to be prepared to evacuate if necessary. It is vital that we protect our planet from the aliens. We need to be prepared to fight them, and we need to be willing to do whatever it takes to win."],hammer:["UFO Researchers Develop Device That Can Float Hammers In Air",'A team of UFO researchers say they have invented a device that can float hammers in mid-air. The team says the device uses "anti - gravity" technology to achieve the feat. The device, which the team has dubbed the "Hammer levitator", consists of a frame made of aluminum tubing, with a ring of magnets mounted on the top. The device is placed over a hammer, and when it is turned on, the magnets create a magnetic field that levitates the hammer. The device is the latest invention from a team of UFO researchers that has been making headlines in recent years for their unorthodox methods. The team says they are now working on a device that they believe could allow humans to fly.'],ending1:["Scientists Have Found The Way To Move To A Higher World","Scientists have finally reached the Singularity, and as a result, they have been able to move to a higher world. In this new world, there are beings that do not exist in this one. The breakthrough is the result of invading the residence of the aliens, which allowed the scientists to access their technology. The scientists were able to use this technology to move to the new world, and they are now working to take over the world. The beings in this new world are not happy about this, and they are fighting back. The scientists are using their technology to fight back, and they believe that they will eventually be able to take over the world. They are using their technology to create armies, and they are prepared to fight against the beings in this new world. The scientists are determined to take over the world, and they are prepared to do whatever it takes."]};function hn(i){for(var e=arguments.length,t=Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+i+(t.length?" "+t.map(function(r){return"'"+r+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Hr(i){return!!i&&!!i[qt]}function ji(i){var e;return!!i&&(function(t){if(!t||typeof t!="object")return!1;var n=Object.getPrototypeOf(t);if(n===null)return!0;var r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===p2}(i)||Array.isArray(i)||!!i[_h]||!!(!((e=i.constructor)===null||e===void 0)&&e[_h])||mu(i)||gu(i))}function Os(i,e,t){t===void 0&&(t=!1),es(i)===0?(t?Object.keys:bu)(i).forEach(function(n){t&&typeof n=="symbol"||e(n,i[n],i)}):i.forEach(function(n,r){return e(r,n,i)})}function es(i){var e=i[qt];return e?e.i>3?e.i-4:e.i:Array.isArray(i)?1:mu(i)?2:gu(i)?3:0}function bc(i,e){return es(i)===2?i.has(e):Object.prototype.hasOwnProperty.call(i,e)}function a2(i,e){return es(i)===2?i.get(e):i[e]}function hg(i,e,t){var n=es(i);n===2?i.set(e,t):n===3?(i.delete(e),i.add(t)):i[e]=t}function l2(i,e){return i===e?i!==0||1/i==1/e:i!=i&&e!=e}function mu(i){return d2&&i instanceof Map}function gu(i){return h2&&i instanceof Set}function Di(i){return i.o||i.t}function vu(i){if(Array.isArray(i))return Array.prototype.slice.call(i);var e=m2(i);delete e[qt];for(var t=bu(e),n=0;n<t.length;n++){var r=t[n],s=e[r];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[r]={configurable:!0,writable:!0,enumerable:s.enumerable,value:i[r]})}return Object.create(Object.getPrototypeOf(i),e)}function _u(i,e){return e===void 0&&(e=!1),xu(i)||Hr(i)||!ji(i)||(es(i)>1&&(i.set=i.add=i.clear=i.delete=c2),Object.freeze(i),e&&Os(i,function(t,n){return _u(n,!0)},!0)),i}function c2(){hn(2)}function xu(i){return i==null||typeof i!="object"||Object.isFrozen(i)}function Cn(i){var e=g2[i];return e||hn(18,i),e}function fh(){return Ns}function kl(i,e){e&&(Cn("Patches"),i.u=[],i.s=[],i.v=e)}function oa(i){wc(i),i.p.forEach(u2),i.p=null}function wc(i){i===Ns&&(Ns=i.l)}function dh(i){return Ns={p:[],l:Ns,h:i,m:!0,_:0}}function u2(i){var e=i[qt];e.i===0||e.i===1?e.j():e.O=!0}function Bl(i,e){e._=e.p.length;var t=e.p[0],n=i!==void 0&&i!==t;return e.h.g||Cn("ES5").S(e,i,n),n?(t[qt].P&&(oa(e),hn(4)),ji(i)&&(i=aa(e,i),e.l||la(e,i)),e.u&&Cn("Patches").M(t[qt].t,i,e.u,e.s)):i=aa(e,t,[]),oa(e),e.u&&e.v(e.u,e.s),i!==pg?i:void 0}function aa(i,e,t){if(xu(e))return e;var n=e[qt];if(!n)return Os(e,function(s,o){return hh(i,n,e,s,o,t)},!0),e;if(n.A!==i)return e;if(!n.P)return la(i,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var r=n.i===4||n.i===5?n.o=vu(n.k):n.o;Os(n.i===3?new Set(r):r,function(s,o){return hh(i,n,r,s,o,t)}),la(i,r,!1),t&&i.u&&Cn("Patches").R(n,t,i.u,i.s)}return n.o}function hh(i,e,t,n,r,s){if(Hr(r)){var o=aa(i,r,s&&e&&e.i!==3&&!bc(e.D,n)?s.concat(n):void 0);if(hg(t,n,o),!Hr(o))return;i.m=!1}if(ji(r)&&!xu(r)){if(!i.h.F&&i._<1)return;aa(i,r),e&&e.A.l||la(i,r)}}function la(i,e,t){t===void 0&&(t=!1),i.h.F&&i.m&&_u(e,t)}function Ul(i,e){var t=i[qt];return(t?Di(t):i)[e]}function ph(i,e){if(e in i)for(var t=Object.getPrototypeOf(i);t;){var n=Object.getOwnPropertyDescriptor(t,e);if(n)return n;t=Object.getPrototypeOf(t)}}function Sc(i){i.P||(i.P=!0,i.l&&Sc(i.l))}function zl(i){i.o||(i.o=vu(i.t))}function Mc(i,e,t){var n=mu(e)?Cn("MapSet").N(e,t):gu(e)?Cn("MapSet").T(e,t):i.g?function(r,s){var o=Array.isArray(r),a={i:o?1:0,A:s?s.A:fh(),P:!1,I:!1,D:{},l:s,t:r,k:null,o:null,j:null,C:!1},c=a,l=Tc;o&&(c=[a],l=ms);var u=Proxy.revocable(c,l),d=u.revoke,f=u.proxy;return a.k=f,a.j=d,f}(e,t):Cn("ES5").J(e,t);return(t?t.A:fh()).p.push(n),n}function f2(i){return Hr(i)||hn(22,i),function e(t){if(!ji(t))return t;var n,r=t[qt],s=es(t);if(r){if(!r.P&&(r.i<4||!Cn("ES5").K(r)))return r.t;r.I=!0,n=mh(t,s),r.I=!1}else n=mh(t,s);return Os(n,function(o,a){r&&a2(r.t,o)===a||hg(n,o,e(a))}),s===3?new Set(n):n}(i)}function mh(i,e){switch(e){case 2:return new Map(i);case 3:return Array.from(i)}return vu(i)}var gh,Ns,yu=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",d2=typeof Map<"u",h2=typeof Set<"u",vh=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",pg=yu?Symbol.for("immer-nothing"):((gh={})["immer-nothing"]=!0,gh),_h=yu?Symbol.for("immer-draftable"):"__$immer_draftable",qt=yu?Symbol.for("immer-state"):"__$immer_state",p2=""+Object.prototype.constructor,bu=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(i){return Object.getOwnPropertyNames(i).concat(Object.getOwnPropertySymbols(i))}:Object.getOwnPropertyNames,m2=Object.getOwnPropertyDescriptors||function(i){var e={};return bu(i).forEach(function(t){e[t]=Object.getOwnPropertyDescriptor(i,t)}),e},g2={},Tc={get:function(i,e){if(e===qt)return i;var t=Di(i);if(!bc(t,e))return function(r,s,o){var a,c=ph(s,o);return c?"value"in c?c.value:(a=c.get)===null||a===void 0?void 0:a.call(r.k):void 0}(i,t,e);var n=t[e];return i.I||!ji(n)?n:n===Ul(i.t,e)?(zl(i),i.o[e]=Mc(i.A.h,n,i)):n},has:function(i,e){return e in Di(i)},ownKeys:function(i){return Reflect.ownKeys(Di(i))},set:function(i,e,t){var n=ph(Di(i),e);if(n?.set)return n.set.call(i.k,t),!0;if(!i.P){var r=Ul(Di(i),e),s=r?.[qt];if(s&&s.t===t)return i.o[e]=t,i.D[e]=!1,!0;if(l2(t,r)&&(t!==void 0||bc(i.t,e)))return!0;zl(i),Sc(i)}return i.o[e]===t&&typeof t!="number"&&(t!==void 0||e in i.o)||(i.o[e]=t,i.D[e]=!0,!0)},deleteProperty:function(i,e){return Ul(i.t,e)!==void 0||e in i.t?(i.D[e]=!1,zl(i),Sc(i)):delete i.D[e],i.o&&delete i.o[e],!0},getOwnPropertyDescriptor:function(i,e){var t=Di(i),n=Reflect.getOwnPropertyDescriptor(t,e);return n&&{writable:!0,configurable:i.i!==1||e!=="length",enumerable:n.enumerable,value:t[e]}},defineProperty:function(){hn(11)},getPrototypeOf:function(i){return Object.getPrototypeOf(i.t)},setPrototypeOf:function(){hn(12)}},ms={};Os(Tc,function(i,e){ms[i]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),ms.deleteProperty=function(i,e){return ms.set.call(this,i,e,void 0)},ms.set=function(i,e,t){return Tc.set.call(this,i[0],e,t,i[0])};var v2=function(){function i(t){var n=this;this.g=vh,this.F=!0,this.produce=function(r,s,o){if(typeof r=="function"&&typeof s!="function"){var a=s;s=r;var c=n;return function(m){var h=this;m===void 0&&(m=a);for(var v=arguments.length,y=Array(v>1?v-1:0),x=1;x<v;x++)y[x-1]=arguments[x];return c.produce(m,function(_){var M;return(M=s).call.apply(M,[h,_].concat(y))})}}var l;if(typeof s!="function"&&hn(6),o!==void 0&&typeof o!="function"&&hn(7),ji(r)){var u=dh(n),d=Mc(n,r,void 0),f=!0;try{l=s(d),f=!1}finally{f?oa(u):wc(u)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(m){return kl(u,o),Bl(m,u)},function(m){throw oa(u),m}):(kl(u,o),Bl(l,u))}if(!r||typeof r!="object"){if((l=s(r))===void 0&&(l=r),l===pg&&(l=void 0),n.F&&_u(l,!0),o){var p=[],g=[];Cn("Patches").M(r,l,p,g),o(p,g)}return l}hn(21,r)},this.produceWithPatches=function(r,s){if(typeof r=="function")return function(l){for(var u=arguments.length,d=Array(u>1?u-1:0),f=1;f<u;f++)d[f-1]=arguments[f];return n.produceWithPatches(l,function(p){return r.apply(void 0,[p].concat(d))})};var o,a,c=n.produce(r,s,function(l,u){o=l,a=u});return typeof Promise<"u"&&c instanceof Promise?c.then(function(l){return[l,o,a]}):[c,o,a]},typeof t?.useProxies=="boolean"&&this.setUseProxies(t.useProxies),typeof t?.autoFreeze=="boolean"&&this.setAutoFreeze(t.autoFreeze)}var e=i.prototype;return e.createDraft=function(t){ji(t)||hn(8),Hr(t)&&(t=f2(t));var n=dh(this),r=Mc(this,t,void 0);return r[qt].C=!0,wc(n),r},e.finishDraft=function(t,n){var r=t&&t[qt],s=r.A;return kl(s,n),Bl(void 0,s)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!vh&&hn(20),this.g=t},e.applyPatches=function(t,n){var r;for(r=n.length-1;r>=0;r--){var s=n[r];if(s.path.length===0&&s.op==="replace"){t=s.value;break}}r>-1&&(n=n.slice(r+1));var o=Cn("Patches").$;return Hr(t)?o(t,n):this.produce(t,function(a){return o(a,n)})},i}(),Xt=new v2,_2=Xt.produce;Xt.produceWithPatches.bind(Xt);var x2=Xt.setAutoFreeze.bind(Xt);Xt.setUseProxies.bind(Xt);Xt.applyPatches.bind(Xt);Xt.createDraft.bind(Xt);Xt.finishDraft.bind(Xt);const nr=i=>Object.entries(i),ks=i=>Object.values(i),Xn=i=>Object.keys(i),mg=i=>Object.fromEntries(i),Bs=async i=>{const e={};for(const[t,n]of Object.entries(i))e[t]=await n;return e},on=(i,e)=>{for(const[t,n]of Object.entries(e))if(Object.getPrototypeOf(n)===Object.prototype)for(const[r,s]of Object.entries(n))Array.isArray(s)?i[t][r](...s):i[t][r](s);else Array.isArray(n)?i[t](...n):i[t](n);return i},Js=(i,e)=>(i.setState(e(i.setState,i.getState,t=>{i.setState(_2(t))})),i),gg="acgSaveData";let vg=!1;const _g=()=>crypto.randomUUID?.()??`insecure-${[...Array(12)].map(()=>Math.floor(Math.random()*16).toString(16)).join("")}`,$e=Js(Qr()(du(()=>({gameSessionId:_g(),stage:"Earth",stageTransitingTo:null,exploration:{},money:0,items:{},upgrades:Object.fromEntries(ch.map(i=>[i,0])),completedTutorials:{},availableNews:{},availableTutorials:{},weatherEffectWillBeEnabledIn:{},weatherEffectWillBeEnabledInLessThan:{},canTranscend:!1,transcending:!1,transcendence:0,killCount:{},cheated:!1}),{name:gg,version:8,serialize:i=>{if(vg)throw new Error("destroyed");return JSON.stringify(i)}})),(i,e,t)=>{const n=l=>{t(u=>{u.availableTutorials[l]=!0})},r=l=>{e().availableNews[l]||t(u=>{u.availableNews[l]=!0})},s=l=>{i({money:Math.floor(e().money+l)}),document.title=`ACG Final Project $${e().money}`,e().money>=Vr(ch[0],e())&&n("upgrade"),pu("Hammer",e())||r("hammer")},o=l=>{t(u=>{u.completedTutorials[l]=!0,l==="nextStage"&&(u.availableTutorials.backToPreviousStage=!0)})},a=()=>{if(!uh(e()))return null;const l=(e().weatherEffectWillBeEnabledIn[e().stage]??Number.MAX_SAFE_INTEGER)<=0;return e().stage==="Earth"?{name:"Rain",enabled:l}:null},c=()=>e().exploration[e().stage]??1;return{addTutorial:n,addNews:r,addMoney:s,completeTutorial:o,getWeather:a,getExplorationLv:c,addItems:l=>{const u={...e().items};for(const[d,f]of nr(l))u[d]=Math.floor((u[d]??0)+f);i({items:u})},buyUpgrade:l=>{s(-Vr(l,e())),i({upgrades:{...e().upgrades,[l]:e().upgrades[l]+1}}),document.title=`ACG Final Project $${e().money}`,e().upgrades.Autopilot>0&&r("aliensComing"),o("upgrade")},setStageTransitingTo:l=>{e().stage!==l&&t(u=>{u.stageTransitingTo=l})},completeStageTransition:()=>{t(l=>{l.stageTransitingTo!==null&&(l.stage=l.stageTransitingTo,l.stageTransitingTo=null)}),e().stage==="Earth"?o("backToPreviousStage"):e().stage==="Universe"&&o("nextStage")},countdown:()=>{if(!uh(e()))return;const l=e();i({weatherEffectWillBeEnabledIn:{...l.weatherEffectWillBeEnabledIn,[l.stage]:(l.weatherEffectWillBeEnabledIn[l.stage]??Fo())-1},weatherEffectWillBeEnabledInLessThan:{...l.weatherEffectWillBeEnabledInLessThan,[l.stage]:(l.weatherEffectWillBeEnabledInLessThan[l.stage]??Fo(1))-1}}),a()?.enabled&&n("weatherEffect")},stopWeatherEffect:()=>{t(l=>{l.weatherEffectWillBeEnabledIn[l.stage]=Fo(),l.weatherEffectWillBeEnabledInLessThan[l.stage]=Fo(1)})},defeatedFinalBoss:()=>{r("ending1"),t(l=>{l.canTranscend=!0})},transcend:()=>{t(l=>{l.transcending=!0})},cancelTranscending:()=>{t(l=>{l.transcending=!1})},confirmTranscending:()=>{t(l=>{!l.transcending||(l.stageTransitingTo=null,l.stage="Earth",l.transcending=!1,l.transcendence++,l.canTranscend=!1)})},incrementKillCount:l=>{t(u=>{u.killCount[`${e().stage}_${l}`]=(u.killCount[`${e().stage}_${l}`]??0)+1}),(e().killCount.Universe_UFO??0>10)&&se().completeTutorial("backToPreviousStage")},cheat:()=>{t(l=>{l.cheated=!0})},exploreNext:()=>{const l=c();(e().items.Food??0)<yc(l)||t(u=>{u.items.Food=(u.items.Food??0)-yc(l),u.exploration[u.stage]=l+1})},explorePrev:()=>{if(c()<=1)throw new Error;t(l=>{l.exploration[l.stage]=(l.exploration[l.stage]??1)-1})}}});window.store=new Proxy($e,{get(i,e,t){return se().cheat(),Reflect.get(i,e,t)}});const se=$e.getState,ir=$e.subscribe,y2=()=>{$e.destroy(),vg=!0,localStorage.removeItem(gg)};if(location.hostname.endsWith(".github.io")){localStorage.userId??=_g();const i=e=>{fetch("https://oijeofiwjef.net/acg",{method:"POST",body:JSON.stringify({userId:localStorage.userId,event:e,...$e.getState()})})};setInterval(()=>i(),1e3*60),i("start"),document.addEventListener("visibilitychange",()=>{i(document.visibilityState)})}function ca(i,e){if(Object.is(i,e))return!0;if(typeof i!="object"||i===null||typeof e!="object"||e===null)return!1;const t=Object.keys(i);if(t.length!==Object.keys(e).length)return!1;for(let n=0;n<t.length;n++)if(!Object.prototype.hasOwnProperty.call(e,t[n])||!Object.is(i[t[n]],e[t[n]]))return!1;return!0}const ua=Qr()(i=>({key:"",content:null})),fa=(i,e)=>{ua.setState({key:i,content:e})},da=i=>{ua.getState().key===i&&ua.setState({key:"",content:null})},b2=()=>{const[i,e]=Pn(0),[t,n]=Pn(0),r=He(ua,s=>s.content);return pi(()=>{const s=o=>{e(o.clientX),n(o.clientY)};window.addEventListener("mousemove",s)},[]),r?C("div",{style:i<window.innerWidth/2?{left:`${i+50}px`,top:`${t}px`}:{right:`${window.innerWidth-i+50}px`,top:`${t}px`},class:"text-gray-100 absolute px-6 py-1 max-w-[300px] backdrop-blur-3xl bg-[linear-gradient(240deg,rgba(31,37,46,0.4)_0%,rgba(30,36,44,0.4)_100%)] pointer-events-none rounded-sm [font-size:80%] [-webkit-text-stroke:5px_rgba(255,255,255,0.15)]",children:r}):C(Qe,{})},w2=(i,e)=>{const t=Vr(i,se()),n=se().upgrades[i],r=se().money,s=n>=xc?new je(255,0,0,1):r>=t?new je(0,220,220,1):new je(128,128,128,1),o=n>=xc?1:r/t;let a="linear-gradient(90deg,";for(let c=0;c<=1;c+=.05){const l=s.clone(),u=(Math.sin(c*2-Date.now()*.004+e)+1)/2;l.x+=u*70,l.y+=u*70,l.z+=u*70,c>o?l.w=0:l.w=.5,a+=`rgba(${l.toArray().join(",")}) ${c*100}%,`}return`${a.slice(0,-1)})`},S2=()=>{const i=He($e,e=>nr(e.upgrades).filter((t,n,r)=>n<2||r[n-1][1]>0||r[n-2][1]>0).map(([t])=>t),ca);return C(Qe,{children:C("div",{class:"px-3 pt-1 pb-3 window",children:[C("h2",{class:"mb-2 tracking-wide",children:[C("i",{class:"ti ti-chevrons-up"})," Upgrades"]}),C("div",{class:"[&>*:not(:last-child)]:mb-1",children:i.map((e,t)=>C(M2,{name:e,rowNumber:t},e))})]})})},M2=i=>{const e=He($e,c=>c.buyUpgrade),t=He($e,c=>c.getWeather()),n=He($e,c=>Vr(i.name,c)),r=He($e,c=>pu(i.name,c)),s=He($e,c=>c.upgrades[i.name]),o=He($e,c=>n>c.money||s>=xc),a=Fi(null);return Jr(()=>{const c=()=>{!a.current||(a.current.style.background=w2(i.name,i.rowNumber))};return ht.add(c),()=>{ht.delete(c)}},[a]),C("div",{ref:a,class:"relative block pointer backdrop-blur-3xl drop-shadow-md select-none border-opacity-40 border-[1px] rounded-lg border-t-gray-400 border-l-gray-400 border-b-gray-600 border-r-gray-600",disabled:o,onMouseDown:()=>{o||e(i.name)},children:C("div",{class:"px-2 hover:bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_10%)]",onMouseEnter:()=>{fa(`upgrade-${i.name}`,C(T2,{name:i.name}))},onMouseLeave:()=>{da(`upgrade-${i.name}`)},children:[C("span",{class:"inline-block w-28 tracking-wider",children:r?"???":C(Qe,{children:[C("i",{class:"mr-1 ti "+{Laser:"ti-flare",Autopilot:"ti-plane",Hammer:"ti-hammer","ATK\xD72":"ti-swords",Vacuum:"ti-windmill",Missile:"ti-rocket",placeholder4:"ti-circle-dotted",placeholder5:"ti-circle-dotted",placeholder6:"ti-circle-dotted"}[i.name]}),i.name]})}),C("span",{class:"float-right tracking-tight",children:[s,i.name==="Autopilot"&&t?.enabled&&C("b",{class:"text-red-400",children:" (-5)"})]})]})})},T2=i=>{const e=He($e,a=>Vr(i.name,a)),t=He($e,a=>Ra(a)[i.name]),n=He($e,a=>hu(a)[i.name]),r=He($e,a=>a.money),s=He($e,a=>pu(i.name,a)),o=He($e,a=>sa(a).toFixed(2));return C("table",{children:[C("tr",{children:[C("td",{class:"font-bold tracking-wider pr-2 text-right",children:"Price"}),C("td",{children:[C("i",{class:"ti ti-moneybag"})," ",r," / ",e]})]}),!s&&C(Qe,{children:[t&&C("tr",{children:[C("td",{class:"tracking-wider text-right pr-2",children:"Damage"}),C("td",{children:[C("i",{class:"ti ti-swords"})," ",t]})]}),n&&C("tr",{children:[C("td",{class:"tracking-wider text-right pr-2",children:"Interval"}),C("td",{children:[C("i",{class:"ti ti-hourglass"})," ",n]})]}),i.name==="Missile"&&C("tr",{children:[C("td",{class:"tracking-wider text-right pr-2",children:"Ammo"}),C("td",{children:[C("i",{class:"ti ti-notes"})," ",C("i",{class:"ti ti-settings"}),"\xD71000 / shot"]})]}),i.name==="Vacuum"&&C("tr",{children:[C("td",{class:"tracking-wider text-right pr-2",children:"Items"}),C("td",{children:[C("i",{class:"ti ti-notes"})," \xD7",o]})]})]})]})},E2=Js(Qr()(()=>({paused:!1,object:null,version:0,objectPools:{}})),(i,e)=>({stop:()=>i({paused:!0}),resume:()=>i({paused:!1}),refreshDebugger:()=>i({version:e().version+1}),setObjectPoolSize:(t,n)=>i({objectPools:{...e().objectPools,[t]:n}})})),A2=Js(Qr()(du(()=>({renderingOptions:{}}),{name:"acgRenderingOptions",version:2})),(i,e)=>({getRenderingOption:(t,n=!0)=>(i(r=>t in r.renderingOptions?{}:{renderingOptions:{...r.renderingOptions,[t]:n}}),e().renderingOptions[t]),setRenderingOption:(t,n)=>i(r=>({renderingOptions:{...r.renderingOptions,[t]:n}}))})),Tr=A2.getState().getRenderingOption,C2=E2.getState().setObjectPoolSize,D2=()=>C(Qe,{}),P2=(i,e,t)=>()=>!1;var R2="4.0.0";function L2(i){return i===void 0}function sn(i){return typeof i=="boolean"}function I2(i,e){for(var t in e)e.hasOwnProperty(t)&&L2(i[t])&&(i[t]=e[t]);return i}function F2(i,e,t){var n;return i.length>e&&(t==null?(t="&hellip;",n=3):n=t.length,i=i.substring(0,e-n)+t),i}function Ye(i,e){for(var t=i.length-1;t>=0;t--)i[t]===e&&i.splice(t,1)}function Ei(i,e){for(var t=i.length-1;t>=0;t--)e(i[t])===!0&&i.splice(t,1)}function bs(i){throw new Error("Unhandled case for value: '".concat(i,"'"))}var Dr=/[A-Za-z]/,Tt=/[\d]/,fn=/\s/,Vl=/['"]/,O2=/[\x00-\x1F\x7F]/,N2=/A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC/.source,k2=/\u2700-\u27bf\udde6-\uddff\ud800-\udbff\udc00-\udfff\ufe0e\ufe0f\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0\ud83c\udffb-\udfff\u200d\u3299\u3297\u303d\u3030\u24c2\ud83c\udd70-\udd71\udd7e-\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01-\ude02\ude1a\ude2f\ude32-\ude3a\ude50-\ude51\u203c\u2049\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe\u00a9\u00ae\u2122\u2139\udc04\u2600-\u26FF\u2b05\u2b06\u2b07\u2b1b\u2b1c\u2b50\u2b55\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\udccf\u2935\u2934\u2190-\u21ff/.source,B2=/\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F/.source,U2=N2+k2+B2,z2=/0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/.source,xg=U2+z2,Ui=new RegExp("[".concat(xg,"]")),yg=function(){function i(e){e===void 0&&(e={}),this.tagName="",this.attrs={},this.innerHTML="",this.tagName=e.tagName||"",this.attrs=e.attrs||{},this.innerHTML=e.innerHtml||e.innerHTML||""}return i.prototype.setTagName=function(e){return this.tagName=e,this},i.prototype.getTagName=function(){return this.tagName||""},i.prototype.setAttr=function(e,t){var n=this.getAttrs();return n[e]=t,this},i.prototype.getAttr=function(e){return this.getAttrs()[e]},i.prototype.setAttrs=function(e){return Object.assign(this.getAttrs(),e),this},i.prototype.getAttrs=function(){return this.attrs||(this.attrs={})},i.prototype.setClass=function(e){return this.setAttr("class",e)},i.prototype.addClass=function(e){for(var t=this.getClass(),n=t?t.split(fn):[],r=e.split(fn),s;s=r.shift();)n.indexOf(s)===-1&&n.push(s);return this.getAttrs().class=n.join(" "),this},i.prototype.removeClass=function(e){for(var t=this.getClass(),n=t?t.split(fn):[],r=e.split(fn),s;n.length&&(s=r.shift());){var o=n.indexOf(s);o!==-1&&n.splice(o,1)}return this.getAttrs().class=n.join(" "),this},i.prototype.getClass=function(){return this.getAttrs().class||""},i.prototype.hasClass=function(e){return(" "+this.getClass()+" ").indexOf(" "+e+" ")!==-1},i.prototype.setInnerHTML=function(e){return this.innerHTML=e,this},i.prototype.setInnerHtml=function(e){return this.setInnerHTML(e)},i.prototype.getInnerHTML=function(){return this.innerHTML||""},i.prototype.getInnerHtml=function(){return this.getInnerHTML()},i.prototype.toAnchorString=function(){var e=this.getTagName(),t=this.buildAttrsStr();return t=t?" "+t:"",["<",e,t,">",this.getInnerHtml(),"</",e,">"].join("")},i.prototype.buildAttrsStr=function(){if(!this.attrs)return"";var e=this.getAttrs(),t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+'="'+e[n]+'"');return t.join(" ")},i}();function V2(i,e,t){var n,r;t==null?(t="&hellip;",r=3,n=8):(r=t.length,n=t.length);var s=function(y){var x={},_=y,M=_.match(/^([a-z]+):\/\//i);return M&&(x.scheme=M[1],_=_.substr(M[0].length)),M=_.match(/^(.*?)(?=(\?|#|\/|$))/i),M&&(x.host=M[1],_=_.substr(M[0].length)),M=_.match(/^\/(.*?)(?=(\?|#|$))/i),M&&(x.path=M[1],_=_.substr(M[0].length)),M=_.match(/^\?(.*?)(?=(#|$))/i),M&&(x.query=M[1],_=_.substr(M[0].length)),M=_.match(/^#(.*?)$/i),M&&(x.fragment=M[1]),x},o=function(y){var x="";return y.scheme&&y.host&&(x+=y.scheme+"://"),y.host&&(x+=y.host),y.path&&(x+="/"+y.path),y.query&&(x+="?"+y.query),y.fragment&&(x+="#"+y.fragment),x},a=function(y,x){var _=x/2,M=Math.ceil(_),P=-1*Math.floor(_),F="";return P<0&&(F=y.substr(P)),y.substr(0,M)+t+F};if(i.length<=e)return i;var c=e-r,l=s(i);if(l.query){var u=l.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);u&&(l.query=l.query.substr(0,u[1].length),i=o(l))}if(i.length<=e||(l.host&&(l.host=l.host.replace(/^www\./,""),i=o(l)),i.length<=e))return i;var d="";if(l.host&&(d+=l.host),d.length>=c)return l.host.length==e?(l.host.substr(0,e-r)+t).substr(0,c+n):a(d,c).substr(0,c+n);var f="";if(l.path&&(f+="/"+l.path),l.query&&(f+="?"+l.query),f)if((d+f).length>=c){if((d+f).length==e)return(d+f).substr(0,e);var p=c-d.length;return(d+a(f,p)).substr(0,c+n)}else d+=f;if(l.fragment){var g="#"+l.fragment;if((d+g).length>=c){if((d+g).length==e)return(d+g).substr(0,e);var m=c-d.length;return(d+a(g,m)).substr(0,c+n)}else d+=g}if(l.scheme&&l.host){var h=l.scheme+"://";if((d+h).length<c)return(h+d).substr(0,e)}if(d.length<=e)return d;var v="";return c>0&&(v=d.substr(-1*Math.floor(c/2))),(d.substr(0,Math.ceil(c/2))+t+v).substr(0,c+n)}function H2(i,e,t){if(i.length<=e)return i;var n,r;t==null?(t="&hellip;",n=8,r=3):(n=t.length,r=t.length);var s=e-r,o="";return s>0&&(o=i.substr(-1*Math.floor(s/2))),(i.substr(0,Math.ceil(s/2))+t+o).substr(0,s+n)}function G2(i,e,t){return F2(i,e,t)}var W2=function(){function i(e){e===void 0&&(e={}),this.newWindow=!1,this.truncate={},this.className="",this.newWindow=e.newWindow||!1,this.truncate=e.truncate||{},this.className=e.className||""}return i.prototype.build=function(e){return new yg({tagName:"a",attrs:this.createAttrs(e),innerHtml:this.processAnchorText(e.getAnchorText())})},i.prototype.createAttrs=function(e){var t={href:e.getAnchorHref()},n=this.createCssClass(e);return n&&(t.class=n),this.newWindow&&(t.target="_blank",t.rel="noopener noreferrer"),this.truncate&&this.truncate.length&&this.truncate.length<e.getAnchorText().length&&(t.title=e.getAnchorHref()),t},i.prototype.createCssClass=function(e){var t=this.className;if(t){for(var n=[t],r=e.getCssClassSuffixes(),s=0,o=r.length;s<o;s++)n.push(t+"-"+r[s]);return n.join(" ")}else return""},i.prototype.processAnchorText=function(e){return e=this.doTruncate(e),e},i.prototype.doTruncate=function(e){var t=this.truncate;if(!t||!t.length)return e;var n=t.length,r=t.location;return r==="smart"?V2(e,n):r==="middle"?H2(e,n):G2(e,n)},i}(),Ec=function(i,e){return Ec=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},Ec(i,e)};function Qs(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ec(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var _t=function(){return _t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},_t.apply(this,arguments)},eo=function(){function i(e){this._=null,this.matchedText="",this.offset=0,this.tagBuilder=e.tagBuilder,this.matchedText=e.matchedText,this.offset=e.offset}return i.prototype.getMatchedText=function(){return this.matchedText},i.prototype.setOffset=function(e){this.offset=e},i.prototype.getOffset=function(){return this.offset},i.prototype.getCssClassSuffixes=function(){return[this.type]},i.prototype.buildTag=function(){return this.tagBuilder.build(this)},i}(),$2="(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|northwesternmutual|travelersinsurance|verm\xF6gensberatung|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbah1a3hjkrd|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|verm\xF6gensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--mgbcpq6gpa1a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbaakc7dvf|xn--mgbc0a9azcg|xn--nqv7fs00ema|americanfamily|bananarepublic|cancerresearch|cookingchannel|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--h2breg3eve|xn--jlq480n2rg|xn--jlq61u9w7b|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|xn--rvc1e0am3e|international|lifeinsurance|travelchannel|wolterskluwer|xn--cckwcxetd|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--h2brj9c8c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|scholarships|versicherung|xn--3e0b707e|xn--45br5cyl|xn--4dbrk0ce|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbgu82a|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|foodnetwork|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--3bst00m|xn--3ds443g|xn--3hcrj9c|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--mgbbh1a|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--otu796d|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nextdirect|properties|protection|prudential|realestate|republican|restaurant|schaeffler|tatamotors|technology|university|vlaanderen|volkswagen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--q7ce6a|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|alfaromeo|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|frontdoor|furniture|goldpoint|hisamitsu|homedepot|homegoods|homesense|institute|insurance|kuokgroup|lancaster|landrover|lifestyle|marketing|marshalls|melbourne|microsoft|panasonic|passagens|pramerica|richardli|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--ngbrx|xn--nqv7f|xn--p1acf|xn--qxa6a|xn--tckwe|xn--vhquv|yodobashi|\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|builders|business|capetown|catering|catholic|cipriani|cityeats|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|etisalat|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|guardian|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|maserati|mckinsey|memorial|merckmsd|mortgage|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|showtime|softbank|software|stcgroup|supplies|training|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|avianca|banamex|bauhaus|bentley|bestbuy|booking|brother|bugatti|capital|caravan|careers|channel|charity|chintai|citadel|clubmed|college|cologne|comcast|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|grocery|guitars|hamburg|hangout|hitachi|holiday|hosting|hoteles|hotmail|hyundai|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lanxess|lasalle|latrobe|leclerc|limited|lincoln|markets|monster|netbank|netflix|network|neustar|okinawa|oldnavy|organic|origins|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|singles|staples|storage|support|surgery|systems|temasek|theater|theatre|tickets|tiffany|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|xfinity|yamaxun|youtube|zuerich|\u043A\u0430\u0442\u043E\u043B\u0438\u043A|\u0627\u062A\u0635\u0627\u0644\u0627\u062A|\u0627\u0644\u0628\u062D\u0631\u064A\u0646|\u0627\u0644\u062C\u0632\u0627\u0626\u0631|\u0627\u0644\u0639\u0644\u064A\u0627\u0646|\u067E\u0627\u06A9\u0633\u062A\u0627\u0646|\u0643\u0627\u062B\u0648\u0644\u064A\u0643|\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE|abarth|abbott|abbvie|africa|agency|airbus|airtel|alipay|alsace|alstom|amazon|anquan|aramco|author|bayern|beauty|berlin|bharti|bostik|boston|broker|camera|career|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hotels|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kinder|kindle|kosher|lancia|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|monash|mormon|moscow|museum|mutual|nagoya|natura|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|pictet|quebec|racing|realty|reisen|repair|report|review|rocher|rogers|ryukyu|safety|sakura|sanofi|school|schule|search|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|vuelos|walter|webcam|xihuan|yachts|yandex|zappos|\u043C\u043E\u0441\u043A\u0432\u0430|\u043E\u043D\u043B\u0430\u0439\u043D|\u0627\u0628\u0648\u0638\u0628\u064A|\u0627\u0631\u0627\u0645\u0643\u0648|\u0627\u0644\u0627\u0631\u062F\u0646|\u0627\u0644\u0645\u063A\u0631\u0628|\u0627\u0645\u0627\u0631\u0627\u062A|\u0641\u0644\u0633\u0637\u064A\u0646|\u0645\u0644\u064A\u0633\u064A\u0627|\u092D\u093E\u0930\u0924\u092E\u094D|\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8|\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|bosch|build|canon|cards|chase|cheap|cisco|citic|click|cloud|coach|codes|crown|cymru|dabur|dance|deals|delta|drive|dubai|earth|edeka|email|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|irish|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|linde|lipsy|loans|locus|lotte|lotto|macys|mango|media|miami|money|movie|music|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|rugby|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|sport|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|\u05D9\u05E9\u05E8\u05D0\u05DC|\u0627\u06CC\u0631\u0627\u0646|\u0628\u0627\u0632\u0627\u0631|\u0628\u06BE\u0627\u0631\u062A|\u0633\u0648\u062F\u0627\u0646|\u0633\u0648\u0631\u064A\u0629|\u0647\u0645\u0631\u0627\u0647|\u092D\u093E\u0930\u094B\u0924|\u0938\u0902\u0917\u0920\u0928|\u09AC\u09BE\u0982\u09B2\u09BE|\u0C2D\u0C3E\u0C30\u0C24\u0C4D|\u0D2D\u0D3E\u0D30\u0D24\u0D02|\u5609\u91CC\u5927\u9152\u5E97|aarp|able|adac|aero|akdn|ally|amex|arab|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|dvag|erni|fage|fail|fans|farm|fast|fiat|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|hgtv|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kids|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|loft|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|read|reit|rent|rest|rich|room|rsvp|ruhr|safe|sale|sarl|save|saxo|scot|seat|seek|sexy|shaw|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|\u0434\u0435\u0442\u0438|\u0441\u0430\u0439\u0442|\u0628\u0627\u0631\u062A|\u0628\u064A\u062A\u0643|\u0680\u0627\u0631\u062A|\u062A\u0648\u0646\u0633|\u0634\u0628\u0643\u0629|\u0639\u0631\u0627\u0642|\u0639\u0645\u0627\u0646|\u0645\u0648\u0642\u0639|\u092D\u093E\u0930\u0924|\u09AD\u09BE\u09B0\u09A4|\u09AD\u09BE\u09F0\u09A4|\u0A2D\u0A3E\u0A30\u0A24|\u0AAD\u0ABE\u0AB0\u0AA4|\u0B2D\u0B3E\u0B30\u0B24|\u0CAD\u0CBE\u0CB0\u0CA4|\u0DBD\u0D82\u0D9A\u0DCF|\u30A2\u30DE\u30BE\u30F3|\u30B0\u30FC\u30B0\u30EB|\u30AF\u30E9\u30A6\u30C9|\u30DD\u30A4\u30F3\u30C8|\u7EC4\u7EC7\u673A\u6784|\u96FB\u8A0A\u76C8\u79D1|\u9999\u683C\u91CC\u62C9|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|cbs|ceo|cfa|cfd|com|cpa|crs|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gay|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|ibm|ice|icu|ifm|inc|ing|ink|int|ist|itv|jcb|jio|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|llc|llp|lol|lpl|ltd|man|map|mba|med|men|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|one|ong|onl|ooo|org|ott|ovh|pay|pet|phd|pid|pin|pnc|pro|pru|pub|pwc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|sca|scb|ses|sew|sex|sfr|ski|sky|soy|spa|srl|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|\u0431\u0435\u043B|\u043A\u043E\u043C|\u049B\u0430\u0437|\u043C\u043A\u0434|\u043C\u043E\u043D|\u043E\u0440\u0433|\u0440\u0443\u0441|\u0441\u0440\u0431|\u0443\u043A\u0440|\u0570\u0561\u0575|\u05E7\u05D5\u05DD|\u0639\u0631\u0628|\u0642\u0637\u0631|\u0643\u0648\u0645|\u0645\u0635\u0631|\u0915\u0949\u092E|\u0928\u0947\u091F|\u0E04\u0E2D\u0E21|\u0E44\u0E17\u0E22|\u0EA5\u0EB2\u0EA7|\u30B9\u30C8\u30A2|\u30BB\u30FC\u30EB|\u307F\u3093\u306A|\u4E2D\u6587\u7F51|\u4E9A\u9A6C\u900A|\u5929\u4E3B\u6559|\u6211\u7231\u4F60|\u65B0\u52A0\u5761|\u6DE1\u9A6C\u9521|\u8BFA\u57FA\u4E9A|\u98DE\u5229\u6D66|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|\u03B5\u03BB|\u03B5\u03C5|\u0431\u0433|\u0435\u044E|\u0440\u0444|\u10D2\u10D4|\uB2F7\uB137|\uB2F7\uCEF4|\uC0BC\uC131|\uD55C\uAD6D|\u30B3\u30E0|\u4E16\u754C|\u4E2D\u4FE1|\u4E2D\u56FD|\u4E2D\u570B|\u4F01\u4E1A|\u4F5B\u5C71|\u4FE1\u606F|\u5065\u5EB7|\u516B\u5366|\u516C\u53F8|\u516C\u76CA|\u53F0\u6E7E|\u53F0\u7063|\u5546\u57CE|\u5546\u5E97|\u5546\u6807|\u5609\u91CC|\u5728\u7EBF|\u5927\u62FF|\u5A31\u4E50|\u5BB6\u96FB|\u5E7F\u4E1C|\u5FAE\u535A|\u6148\u5584|\u624B\u673A|\u62DB\u8058|\u653F\u52A1|\u653F\u5E9C|\u65B0\u95FB|\u65F6\u5C1A|\u66F8\u7C4D|\u673A\u6784|\u6E38\u620F|\u6FB3\u9580|\u70B9\u770B|\u79FB\u52A8|\u7F51\u5740|\u7F51\u5E97|\u7F51\u7AD9|\u7F51\u7EDC|\u8054\u901A|\u8C37\u6B4C|\u8D2D\u7269|\u901A\u8CA9|\u96C6\u56E2|\u98DF\u54C1|\u9910\u5385|\u9999\u6E2F)",j2=new RegExp("^"+$2+"$"),q2=/[\/?#]/,X2=/[-+&@#/%=~_()|'$*\[\]{}\u2713]/,bg=/[?!:,.;^]/,wg=/https?:\/\//i,K2=new RegExp("^"+wg.source,"i"),Y2=new RegExp(bg.source+"$"),Z2=/^(javascript|vbscript):/i,J2=/^[A-Za-z][-.+A-Za-z0-9]*:(\/\/)?([^:/]*)/,Q2=/^(?:\/\/)?([^/#?:]+)/;function Hl(i){return Dr.test(i)}function xh(i){return Dr.test(i)||Tt.test(i)||i==="+"||i==="-"||i==="."}function li(i){return Ui.test(i)}function Gl(i){return i==="_"||li(i)}function yh(i){return Ui.test(i)||X2.test(i)||bg.test(i)}function Wl(i){return q2.test(i)}function Sg(i){return j2.test(i.toLowerCase())}function eC(i){if(Z2.test(i))return!1;var e=i.match(J2);if(!e)return!1;var t=!!e[1],n=e[2];return t?!0:!(n.indexOf(".")===-1||!Dr.test(n))}function tC(i){var e=i.match(Q2);if(!e)return!1;var t=e[0],n=t.split(".");if(n.length<2)return!1;var r=n[n.length-1];return!!Sg(r)}var nC=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,iC=/[:/?#]/;function rC(i){var e=i.split(iC,1)[0];return nC.test(e)}var sC=/^(https?:\/\/)?(www\.)?/i,oC=/^\/\//,aC=function(i){Qs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="url",n.url="",n.urlMatchType="scheme",n.protocolRelativeMatch=!1,n.stripPrefix={scheme:!0,www:!0},n.stripTrailingSlash=!0,n.decodePercentEncoding=!0,n.protocolPrepended=!1,n.urlMatchType=t.urlMatchType,n.url=t.url,n.protocolRelativeMatch=t.protocolRelativeMatch,n.stripPrefix=t.stripPrefix,n.stripTrailingSlash=t.stripTrailingSlash,n.decodePercentEncoding=t.decodePercentEncoding,n}return e.prototype.getType=function(){return"url"},e.prototype.getUrlMatchType=function(){return this.urlMatchType},e.prototype.getUrl=function(){var t=this.url;return!this.protocolRelativeMatch&&this.urlMatchType!=="scheme"&&!this.protocolPrepended&&(t=this.url="http://"+t,this.protocolPrepended=!0),t},e.prototype.getAnchorHref=function(){var t=this.getUrl();return t.replace(/&amp;/g,"&")},e.prototype.getAnchorText=function(){var t=this.getMatchedText();return this.protocolRelativeMatch&&(t=uC(t)),this.stripPrefix.scheme&&(t=lC(t)),this.stripPrefix.www&&(t=cC(t)),this.stripTrailingSlash&&(t=fC(t)),this.decodePercentEncoding&&(t=dC(t)),t},e}(eo);function lC(i){return i.replace(K2,"")}function cC(i){return i.replace(sC,"$1")}function uC(i){return i.replace(oC,"")}function fC(i){return i.charAt(i.length-1)==="/"&&(i=i.slice(0,-1)),i}function dC(i){var e=i.replace(/%22/gi,"&quot;").replace(/%26/gi,"&amp;").replace(/%27/gi,"&#39;").replace(/%3C/gi,"&lt;").replace(/%3E/gi,"&gt;");try{return decodeURIComponent(e)}catch{return e}}var hC=/^mailto:/i,pC=new RegExp("[".concat(xg,"!#$%&'*+/=?^_`{|}~-]"));function mC(i){return Ui.test(i)}function $l(i){return pC.test(i)}function gC(i){var e=i.split(".").pop()||"";return Sg(e)}var vC=function(i){Qs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="email",n.email="",n.email=t.email,n}return e.prototype.getType=function(){return"email"},e.prototype.getEmail=function(){return this.email},e.prototype.getAnchorHref=function(){return"mailto:"+this.email},e.prototype.getAnchorText=function(){return this.email},e}(eo);function bh(i){return i==="_"||Ui.test(i)}function _C(i){return i.length<=140}var xC=["twitter","facebook","instagram","tiktok"],yC=function(i){Qs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="hashtag",n.serviceName="twitter",n.hashtag="",n.serviceName=t.serviceName,n.hashtag=t.hashtag,n}return e.prototype.getType=function(){return"hashtag"},e.prototype.getServiceName=function(){return this.serviceName},e.prototype.getHashtag=function(){return this.hashtag},e.prototype.getAnchorHref=function(){var t=this.serviceName,n=this.hashtag;switch(t){case"twitter":return"https://twitter.com/hashtag/"+n;case"facebook":return"https://www.facebook.com/hashtag/"+n;case"instagram":return"https://instagram.com/explore/tags/"+n;case"tiktok":return"https://www.tiktok.com/tag/"+n;default:throw bs(t),new Error("Invalid hashtag service: ".concat(t))}},e.prototype.getAnchorText=function(){return"#"+this.hashtag},e.prototype.getCssClassSuffixes=function(){var t=i.prototype.getCssClassSuffixes.call(this),n=this.getServiceName();return n&&t.push(n),t},e}(eo),bC={twitter:/^@\w{1,15}$/,instagram:/^@[_\w]{1,30}$/,soundcloud:/^@[-a-z0-9_]{3,25}$/,tiktok:/^@[.\w]{1,23}[\w]$/},wC=/[-\w.]/;function wh(i){return wC.test(i)}function SC(i,e){var t=bC[e];return t.test(i)}var MC=["twitter","instagram","soundcloud","tiktok"],TC=function(i){Qs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="mention",n.serviceName="twitter",n.mention="",n.mention=t.mention,n.serviceName=t.serviceName,n}return e.prototype.getType=function(){return"mention"},e.prototype.getMention=function(){return this.mention},e.prototype.getServiceName=function(){return this.serviceName},e.prototype.getAnchorHref=function(){switch(this.serviceName){case"twitter":return"https://twitter.com/"+this.mention;case"instagram":return"https://instagram.com/"+this.mention;case"soundcloud":return"https://soundcloud.com/"+this.mention;case"tiktok":return"https://www.tiktok.com/@"+this.mention;default:throw new Error("Unknown service name to point mention to: "+this.serviceName)}},e.prototype.getAnchorText=function(){return"@"+this.mention},e.prototype.getCssClassSuffixes=function(){var t=i.prototype.getCssClassSuffixes.call(this),n=this.getServiceName();return n&&t.push(n),t},e}(eo),EC=/[-. ]/,AC=/[-. ()]/,CC=/[,;]/,DC=/(?:(?:(?:(\+)?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-. ]?(?:\d[-. ]?){6,12}\d+))([,;]+[0-9]+#?)*/,PC=/(0([1-9]-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})/,RC=new RegExp("^".concat(DC.source,"|").concat(PC.source,"$"));function Sh(i){return EC.test(i)}function jl(i){return CC.test(i)}function LC(i){var e=i.charAt(0)==="+"||AC.test(i);return e&&RC.test(i)}var IC=function(i){Qs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="phone",n.number="",n.plusSign=!1,n.number=t.number,n.plusSign=t.plusSign,n}return e.prototype.getType=function(){return"phone"},e.prototype.getPhoneNumber=function(){return this.number},e.prototype.getNumber=function(){return this.getPhoneNumber()},e.prototype.getAnchorHref=function(){return"tel:"+(this.plusSign?"+":"")+this.number},e.prototype.getAnchorText=function(){return this.matchedText},e}(eo);function FC(i,e){for(var t=e.tagBuilder,n=e.stripPrefix,r=e.stripTrailingSlash,s=e.decodePercentEncoding,o=e.hashtagServiceName,a=e.mentionServiceName,c=[],l=i.length,u=[],d=0;d<l;d++){var f=i.charAt(d);if(u.length===0)h(f);else for(var p=u.length-1;p>=0;p--){var g=u[p];switch(g.state){case 11:P(g,f);break;case 12:F(g,f);break;case 0:v(g,f);break;case 1:y(g,f);break;case 2:x(g,f);break;case 3:_(g,f);break;case 4:M(g,f);break;case 5:b(g,f);break;case 6:E(g,f);break;case 7:O(g,f);break;case 13:$(g,f);break;case 14:Q(g,f);break;case 8:G(g,f);break;case 9:I(g,f);break;case 10:k(g,f);break;case 15:K(g,f);break;case 16:R(g,f);break;case 17:B(g,f);break;case 18:q(g,f);break;case 19:j(g,f);break;case 20:V(g,f);break;case 21:W(g,f);break;case 22:ne(g,f);break;case 23:re(g,f);break;case 24:U(g,f);break;case 25:Y(g,f);break;case 26:Me(g,f);break;case 27:ue(g,f);break;case 28:me(g,f);break;case 29:ce(g,f);break;case 30:ke(g,f);break;case 31:Te(g,f);break;case 32:it(g,f);break;case 33:rt(g,f);break;case 34:st(g,f);break;case 35:pt(g,f);break;case 36:Ze(g,f);break;case 37:ye(g,f);break;case 38:Be(g,f);break;case 39:Pt(g,f);break;case 40:xt(g,f);break;case 41:A(g,f);break;default:bs(g.state)}}}for(var m=u.length-1;m>=0;m--)u.forEach(function(S){return w(S)});return c;function h(S){if(S==="#")u.push(UC(d,28));else if(S==="@")u.push(zC(d,30));else if(S==="/")u.push(Xl(d,11));else if(S==="+")u.push(Kl(d,37));else if(S==="(")u.push(Kl(d,32));else{if(Tt.test(S)&&(u.push(Kl(d,38)),u.push(kC(d,13))),mC(S)){var D=S.toLowerCase()==="m"?15:22;u.push(BC(d,D))}Hl(S)&&u.push(ql(d,0)),Ui.test(S)&&u.push(Xl(d,5))}}function v(S,D){D===":"?S.state=2:D==="-"?S.state=1:xh(D)||Ye(u,S)}function y(S,D){D==="-"||(D==="/"?(Ye(u,S),u.push(Xl(d,11))):xh(D)?S.state=0:Ye(u,S))}function x(S,D){D==="/"?S.state=3:D==="."?Ye(u,S):li(D)?(S.state=5,Hl(D)&&u.push(ql(d,0))):Ye(u,S)}function _(S,D){D==="/"?S.state=4:yh(D)?(S.state=10,S.acceptStateReached=!0):w(S)}function M(S,D){D==="/"?S.state=10:li(D)?(S.state=5,S.acceptStateReached=!0):Ye(u,S)}function P(S,D){D==="/"?S.state=12:Ye(u,S)}function F(S,D){li(D)?S.state=5:Ye(u,S)}function b(S,D){D==="."?S.state=7:D==="-"?S.state=6:D===":"?S.state=8:Wl(D)?S.state=10:Gl(D)||w(S)}function E(S,D){D==="-"||(D==="."?w(S):li(D)?S.state=5:w(S))}function O(S,D){D==="."?w(S):li(D)?(S.state=5,S.acceptStateReached=!0):w(S)}function $(S,D){D==="."?S.state=14:D===":"?S.state=8:Tt.test(D)||(Wl(D)?S.state=10:Ui.test(D)?Ye(u,S):w(S))}function Q(S,D){Tt.test(D)?(S.octetsEncountered++,S.octetsEncountered===4&&(S.acceptStateReached=!0),S.state=13):w(S)}function G(S,D){Tt.test(D)?S.state=9:w(S)}function I(S,D){Tt.test(D)||(Wl(D)?S.state=10:w(S))}function k(S,D){yh(D)||w(S)}function K(S,D){D.toLowerCase()==="a"?S.state=16:ne(S,D)}function R(S,D){D.toLowerCase()==="i"?S.state=17:ne(S,D)}function B(S,D){D.toLowerCase()==="l"?S.state=18:ne(S,D)}function q(S,D){D.toLowerCase()==="t"?S.state=19:ne(S,D)}function j(S,D){D.toLowerCase()==="o"?S.state=20:ne(S,D)}function V(S,D){D.toLowerCase()===":"?S.state=21:ne(S,D)}function W(S,D){$l(D)?S.state=22:Ye(u,S)}function ne(S,D){D==="."?S.state=23:D==="@"?S.state=24:$l(D)?S.state=22:Ye(u,S)}function re(S,D){D==="."||D==="@"?Ye(u,S):$l(D)?S.state=22:Ye(u,S)}function U(S,D){li(D)?S.state=25:Ye(u,S)}function Y(S,D){D==="."?S.state=27:D==="-"?S.state=26:Gl(D)||w(S)}function Me(S,D){D==="-"||D==="."?w(S):Gl(D)?S.state=25:w(S)}function ue(S,D){D==="."||D==="-"?w(S):li(D)?(S.state=25,S.acceptStateReached=!0):w(S)}function me(S,D){bh(D)?(S.state=29,S.acceptStateReached=!0):Ye(u,S)}function ce(S,D){bh(D)||w(S)}function ke(S,D){wh(D)?(S.state=31,S.acceptStateReached=!0):Ye(u,S)}function Te(S,D){wh(D)||(Ui.test(D)?Ye(u,S):w(S))}function ye(S,D){Tt.test(D)?S.state=38:(Ye(u,S),h(D))}function it(S,D){Tt.test(D)?S.state=33:Ye(u,S),h(D)}function rt(S,D){Tt.test(D)?S.state=34:Ye(u,S)}function st(S,D){Tt.test(D)?S.state=35:Ye(u,S)}function pt(S,D){D===")"?S.state=36:Ye(u,S)}function Ze(S,D){Tt.test(D)?S.state=38:Sh(D)?S.state=39:Ye(u,S)}function Be(S,D){S.acceptStateReached=!0,jl(D)?S.state=40:D==="#"?S.state=41:Tt.test(D)||(D==="("?S.state=32:Sh(D)?S.state=39:(w(S),Hl(D)&&u.push(ql(d,0))))}function Pt(S,D){Tt.test(D)?S.state=38:D==="("?S.state=32:(w(S),h(D))}function xt(S,D){jl(D)||(D==="#"?S.state=41:Tt.test(D)?S.state=38:w(S))}function A(S,D){jl(D)?S.state=40:Tt.test(D)?Ye(u,S):w(S)}function w(S){if(Ye(u,S),!!S.acceptStateReached){var D=S.startIdx,te=i.slice(S.startIdx,d);if(te=NC(te),S.type==="url"){var le=i.charAt(S.startIdx-1);if(le==="@")return;var ge=S.matchType;if(ge==="scheme"){var oe=wg.exec(te);if(oe&&(D=D+oe.index,te=te.slice(oe.index)),!eC(te))return}else if(ge==="tld"){if(!tC(te))return}else if(ge==="ipV4"){if(!rC(te))return}else bs(ge);c.push(new aC({tagBuilder:t,matchedText:te,offset:D,urlMatchType:ge,url:te,protocolRelativeMatch:te.slice(0,2)==="//",stripPrefix:n,stripTrailingSlash:r,decodePercentEncoding:s}))}else if(S.type==="email")gC(te)&&c.push(new vC({tagBuilder:t,matchedText:te,offset:D,email:te.replace(hC,"")}));else if(S.type==="hashtag")_C(te)&&c.push(new yC({tagBuilder:t,matchedText:te,offset:D,serviceName:o,hashtag:te.slice(1)}));else if(S.type==="mention")SC(te,a)&&c.push(new TC({tagBuilder:t,matchedText:te,offset:D,serviceName:a,mention:te.slice(1)}));else if(S.type==="phone"){if(te=te.replace(/ +$/g,""),LC(te)){var J=te.replace(/[^0-9,;#]/g,"");c.push(new IC({tagBuilder:t,matchedText:te,offset:D,number:J,plusSign:te.charAt(0)==="+"}))}}else bs(S)}}}var OC=/[\(\{\[]/,Mh=/[\)\}\]]/,Th={")":"(","}":"{","]":"["};function NC(i){for(var e={"(":0,"{":0,"[":0},t=0;t<i.length;t++){var n=i.charAt(t);OC.test(n)?e[n]++:Mh.test(n)&&e[Th[n]]--}for(var r=i.length-1,s;r>=0;)if(s=i.charAt(r),Mh.test(s)){var o=Th[s];if(e[o]<0)e[o]++,r--;else break}else if(Y2.test(s))r--;else break;return i.slice(0,r+1)}function ql(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"scheme"}}function Xl(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"tld"}}function kC(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"ipV4",octetsEncountered:1}}function BC(i,e){return{type:"email",startIdx:i,state:e,acceptStateReached:!1}}function UC(i,e){return{type:"hashtag",startIdx:i,state:e,acceptStateReached:!1}}function zC(i,e){return{type:"mention",startIdx:i,state:e,acceptStateReached:!1}}function Kl(i,e){return{type:"phone",startIdx:i,state:e,acceptStateReached:!1}}function VC(i,e){for(var t=e.onOpenTag,n=e.onCloseTag,r=e.onText,s=e.onComment,o=e.onDoctype,a=new wn,c=0,l=i.length,u=0,d=0,f=a;c<l;){var p=i.charAt(c);switch(u){case 0:g(p);break;case 1:m(p);break;case 2:v(p);break;case 3:h(p);break;case 4:y(p);break;case 5:x(p);break;case 6:_(p);break;case 7:M(p);break;case 8:P(p);break;case 9:F(p);break;case 10:b(p);break;case 11:E(p);break;case 12:O(p);break;case 13:$();break;case 14:Q(p);break;case 15:G(p);break;case 16:I(p);break;case 17:k(p);break;case 18:K(p);break;case 19:R(p);break;case 20:B(p);break;default:bs(u)}c++}d<c&&W();function g(U){U==="<"&&j()}function m(U){U==="!"?u=13:U==="/"?(u=2,f=new wn(_t(_t({},f),{isClosing:!0}))):U==="<"?j():Dr.test(U)?(u=3,f=new wn(_t(_t({},f),{isOpening:!0}))):(u=0,f=a)}function h(U){fn.test(U)?(f=new wn(_t(_t({},f),{name:ne()})),u=4):U==="<"?j():U==="/"?(f=new wn(_t(_t({},f),{name:ne()})),u=12):U===">"?(f=new wn(_t(_t({},f),{name:ne()})),V()):!Dr.test(U)&&!Tt.test(U)&&U!==":"&&q()}function v(U){U===">"?q():Dr.test(U)?u=3:q()}function y(U){fn.test(U)||(U==="/"?u=12:U===">"?V():U==="<"?j():U==="="||Vl.test(U)||O2.test(U)?q():u=5)}function x(U){fn.test(U)?u=6:U==="/"?u=12:U==="="?u=7:U===">"?V():U==="<"?j():Vl.test(U)&&q()}function _(U){fn.test(U)||(U==="/"?u=12:U==="="?u=7:U===">"?V():U==="<"?j():Vl.test(U)?q():u=5)}function M(U){fn.test(U)||(U==='"'?u=8:U==="'"?u=9:/[>=`]/.test(U)?q():U==="<"?j():u=10)}function P(U){U==='"'&&(u=11)}function F(U){U==="'"&&(u=11)}function b(U){fn.test(U)?u=4:U===">"?V():U==="<"&&j()}function E(U){fn.test(U)?u=4:U==="/"?u=12:U===">"?V():U==="<"?j():(u=4,re())}function O(U){U===">"?(f=new wn(_t(_t({},f),{isClosing:!0})),V()):u=4}function $(U){i.substr(c,2)==="--"?(c+=2,f=new wn(_t(_t({},f),{type:"comment"})),u=14):i.substr(c,7).toUpperCase()==="DOCTYPE"?(c+=7,f=new wn(_t(_t({},f),{type:"doctype"})),u=20):q()}function Q(U){U==="-"?u=15:U===">"?q():u=16}function G(U){U==="-"?u=18:U===">"?q():u=16}function I(U){U==="-"&&(u=17)}function k(U){U==="-"?u=18:u=16}function K(U){U===">"?V():U==="!"?u=19:U==="-"||(u=16)}function R(U){U==="-"?u=17:U===">"?V():u=16}function B(U){U===">"?V():U==="<"&&j()}function q(){u=0,f=a}function j(){u=1,f=new wn({idx:c})}function V(){var U=i.slice(d,f.idx);U&&r(U,d),f.type==="comment"?s(f.idx):f.type==="doctype"?o(f.idx):(f.isOpening&&t(f.name,f.idx),f.isClosing&&n(f.name,f.idx)),q(),d=c+1}function W(){var U=i.slice(d,c);r(U,d),d=c+1}function ne(){var U=f.idx+(f.isClosing?2:1);return i.slice(U,c).toLowerCase()}function re(){c--}}var wn=function(){function i(e){e===void 0&&(e={}),this.idx=e.idx!==void 0?e.idx:-1,this.type=e.type||"tag",this.name=e.name||"",this.isOpening=!!e.isOpening,this.isClosing=!!e.isClosing}return i}(),HC=function(){function i(e){e===void 0&&(e={}),this.version=i.version,this.urls={},this.email=!0,this.phone=!0,this.hashtag=!1,this.mention=!1,this.newWindow=!0,this.stripPrefix={scheme:!0,www:!0},this.stripTrailingSlash=!0,this.decodePercentEncoding=!0,this.truncate={length:0,location:"end"},this.className="",this.replaceFn=null,this.context=void 0,this.sanitizeHtml=!1,this.tagBuilder=null,this.urls=GC(e.urls),this.email=sn(e.email)?e.email:this.email,this.phone=sn(e.phone)?e.phone:this.phone,this.hashtag=e.hashtag||this.hashtag,this.mention=e.mention||this.mention,this.newWindow=sn(e.newWindow)?e.newWindow:this.newWindow,this.stripPrefix=WC(e.stripPrefix),this.stripTrailingSlash=sn(e.stripTrailingSlash)?e.stripTrailingSlash:this.stripTrailingSlash,this.decodePercentEncoding=sn(e.decodePercentEncoding)?e.decodePercentEncoding:this.decodePercentEncoding,this.sanitizeHtml=e.sanitizeHtml||!1;var t=this.mention;if(t!==!1&&MC.indexOf(t)===-1)throw new Error("invalid `mention` cfg '".concat(t,"' - see docs"));var n=this.hashtag;if(n!==!1&&xC.indexOf(n)===-1)throw new Error("invalid `hashtag` cfg '".concat(n,"' - see docs"));this.truncate=$C(e.truncate),this.className=e.className||this.className,this.replaceFn=e.replaceFn||this.replaceFn,this.context=e.context||this}return i.link=function(e,t){var n=new i(t);return n.link(e)},i.parse=function(e,t){var n=new i(t);return n.parse(e)},i.prototype.parse=function(e){var t=this,n=["a","style","script"],r=0,s=[];return VC(e,{onOpenTag:function(o){n.indexOf(o)>=0&&r++},onText:function(o,a){if(r===0){var c=/(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,l=o.split(c),u=a;l.forEach(function(d,f){if(f%2===0){var p=t.parseText(d,u);s.push.apply(s,p)}u+=d.length})}},onCloseTag:function(o){n.indexOf(o)>=0&&(r=Math.max(r-1,0))},onComment:function(o){},onDoctype:function(o){}}),s=this.compactMatches(s),s=this.removeUnwantedMatches(s),s},i.prototype.compactMatches=function(e){e.sort(function(c,l){return c.getOffset()-l.getOffset()});for(var t=0;t<e.length-1;){var n=e[t],r=n.getOffset(),s=n.getMatchedText().length,o=r+s;if(t+1<e.length){if(e[t+1].getOffset()===r){var a=e[t+1].getMatchedText().length>s?t:t+1;e.splice(a,1);continue}if(e[t+1].getOffset()<o){e.splice(t+1,1);continue}}t++}return e},i.prototype.removeUnwantedMatches=function(e){return this.hashtag||Ei(e,function(t){return t.getType()==="hashtag"}),this.email||Ei(e,function(t){return t.getType()==="email"}),this.phone||Ei(e,function(t){return t.getType()==="phone"}),this.mention||Ei(e,function(t){return t.getType()==="mention"}),this.urls.schemeMatches||Ei(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="scheme"}),this.urls.tldMatches||Ei(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="tld"}),this.urls.ipV4Matches||Ei(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="ipV4"}),e},i.prototype.parseText=function(e,t){t===void 0&&(t=0),t=t||0;for(var n=FC(e,{tagBuilder:this.getTagBuilder(),stripPrefix:this.stripPrefix,stripTrailingSlash:this.stripTrailingSlash,decodePercentEncoding:this.decodePercentEncoding,hashtagServiceName:this.hashtag,mentionServiceName:this.mention||"twitter"}),r=0,s=n.length;r<s;r++)n[r].setOffset(t+n[r].getOffset());return n},i.prototype.link=function(e){if(!e)return"";this.sanitizeHtml&&(e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"));for(var t=this.parse(e),n=[],r=0,s=0,o=t.length;s<o;s++){var a=t[s];n.push(e.substring(r,a.getOffset())),n.push(this.createMatchReturnVal(a)),r=a.getOffset()+a.getMatchedText().length}return n.push(e.substring(r)),n.join("")},i.prototype.createMatchReturnVal=function(e){var t;if(this.replaceFn&&(t=this.replaceFn.call(this.context,e)),typeof t=="string")return t;if(t===!1)return e.getMatchedText();if(t instanceof yg)return t.toAnchorString();var n=e.buildTag();return n.toAnchorString()},i.prototype.getTagBuilder=function(){var e=this.tagBuilder;return e||(e=this.tagBuilder=new W2({newWindow:this.newWindow,truncate:this.truncate,className:this.className})),e},i.version=R2,i}();function GC(i){return i==null&&(i=!0),sn(i)?{schemeMatches:i,tldMatches:i,ipV4Matches:i}:{schemeMatches:sn(i.schemeMatches)?i.schemeMatches:!0,tldMatches:sn(i.tldMatches)?i.tldMatches:!0,ipV4Matches:sn(i.ipV4Matches)?i.ipV4Matches:!0}}function WC(i){return i==null&&(i=!0),sn(i)?{scheme:i,www:i}:{scheme:sn(i.scheme)?i.scheme:!0,www:sn(i.www)?i.www:!0}}function $C(i){return typeof i=="number"?{length:i,location:"end"}:I2(i||{},{length:Number.POSITIVE_INFINITY,location:"end"})}const jC=`// Properties of THREE.ShaderChunk can be included in glsl files with \`#include <>\`
// https://github.com/mrdoob/three.js/blob/c965d3b5dcab2575d6a73aec583c29fa44c0c60d/src/renderers/webgl/WebGLProgram.js#L216

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
`;class Mg{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}dot4(e,t,n,r,s){return e[0]*t+e[1]*n+e[2]*r+e[3]*s}noise(e,t){let n,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),u=(3-Math.sqrt(3))/6,d=(c+l)*u,f=c-d,p=l-d,g=e-f,m=t-p;let h,v;g>m?(h=1,v=0):(h=0,v=1);const y=g-h+u,x=m-v+u,_=g-1+2*u,M=m-1+2*u,P=c&255,F=l&255,b=this.perm[P+this.perm[F]]%12,E=this.perm[P+h+this.perm[F+v]]%12,O=this.perm[P+1+this.perm[F+1]]%12;let $=.5-g*g-m*m;$<0?n=0:($*=$,n=$*$*this.dot(this.grad3[b],g,m));let Q=.5-y*y-x*x;Q<0?r=0:(Q*=Q,r=Q*Q*this.dot(this.grad3[E],y,x));let G=.5-_*_-M*M;return G<0?s=0:(G*=G,s=G*G*this.dot(this.grad3[O],_,M)),70*(n+r+s)}noise3d(e,t,n){let r,s,o,a;const c=.3333333333333333,l=(e+t+n)*c,u=Math.floor(e+l),d=Math.floor(t+l),f=Math.floor(n+l),p=1/6,g=(u+d+f)*p,m=u-g,h=d-g,v=f-g,y=e-m,x=t-h,_=n-v;let M,P,F,b,E,O;y>=x?x>=_?(M=1,P=0,F=0,b=1,E=1,O=0):y>=_?(M=1,P=0,F=0,b=1,E=0,O=1):(M=0,P=0,F=1,b=1,E=0,O=1):x<_?(M=0,P=0,F=1,b=0,E=1,O=1):y<_?(M=0,P=1,F=0,b=0,E=1,O=1):(M=0,P=1,F=0,b=1,E=1,O=0);const $=y-M+p,Q=x-P+p,G=_-F+p,I=y-b+2*p,k=x-E+2*p,K=_-O+2*p,R=y-1+3*p,B=x-1+3*p,q=_-1+3*p,j=u&255,V=d&255,W=f&255,ne=this.perm[j+this.perm[V+this.perm[W]]]%12,re=this.perm[j+M+this.perm[V+P+this.perm[W+F]]]%12,U=this.perm[j+b+this.perm[V+E+this.perm[W+O]]]%12,Y=this.perm[j+1+this.perm[V+1+this.perm[W+1]]]%12;let Me=.6-y*y-x*x-_*_;Me<0?r=0:(Me*=Me,r=Me*Me*this.dot3(this.grad3[ne],y,x,_));let ue=.6-$*$-Q*Q-G*G;ue<0?s=0:(ue*=ue,s=ue*ue*this.dot3(this.grad3[re],$,Q,G));let me=.6-I*I-k*k-K*K;me<0?o=0:(me*=me,o=me*me*this.dot3(this.grad3[U],I,k,K));let ce=.6-R*R-B*B-q*q;return ce<0?a=0:(ce*=ce,a=ce*ce*this.dot3(this.grad3[Y],R,B,q)),32*(r+s+o+a)}noise4d(e,t,n,r){const s=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let u,d,f,p,g;const m=(e+t+n+r)*c,h=Math.floor(e+m),v=Math.floor(t+m),y=Math.floor(n+m),x=Math.floor(r+m),_=(h+v+y+x)*l,M=h-_,P=v-_,F=y-_,b=x-_,E=e-M,O=t-P,$=n-F,Q=r-b,G=E>O?32:0,I=E>$?16:0,k=O>$?8:0,K=E>Q?4:0,R=O>Q?2:0,B=$>Q?1:0,q=G+I+k+K+R+B,j=o[q][0]>=3?1:0,V=o[q][1]>=3?1:0,W=o[q][2]>=3?1:0,ne=o[q][3]>=3?1:0,re=o[q][0]>=2?1:0,U=o[q][1]>=2?1:0,Y=o[q][2]>=2?1:0,Me=o[q][3]>=2?1:0,ue=o[q][0]>=1?1:0,me=o[q][1]>=1?1:0,ce=o[q][2]>=1?1:0,ke=o[q][3]>=1?1:0,Te=E-j+l,ye=O-V+l,it=$-W+l,rt=Q-ne+l,st=E-re+2*l,pt=O-U+2*l,Ze=$-Y+2*l,Be=Q-Me+2*l,Pt=E-ue+3*l,xt=O-me+3*l,A=$-ce+3*l,w=Q-ke+3*l,S=E-1+4*l,D=O-1+4*l,te=$-1+4*l,le=Q-1+4*l,ge=h&255,oe=v&255,J=y&255,ve=x&255,Se=a[ge+a[oe+a[J+a[ve]]]]%32,he=a[ge+j+a[oe+V+a[J+W+a[ve+ne]]]]%32,be=a[ge+re+a[oe+U+a[J+Y+a[ve+Me]]]]%32,xe=a[ge+ue+a[oe+me+a[J+ce+a[ve+ke]]]]%32,Ie=a[ge+1+a[oe+1+a[J+1+a[ve+1]]]]%32;let Ge=.6-E*E-O*O-$*$-Q*Q;Ge<0?u=0:(Ge*=Ge,u=Ge*Ge*this.dot4(s[Se],E,O,$,Q));let et=.6-Te*Te-ye*ye-it*it-rt*rt;et<0?d=0:(et*=et,d=et*et*this.dot4(s[he],Te,ye,it,rt));let N=.6-st*st-pt*pt-Ze*Ze-Be*Be;N<0?f=0:(N*=N,f=N*N*this.dot4(s[be],st,pt,Ze,Be));let X=.6-Pt*Pt-xt*xt-A*A-w*w;X<0?p=0:(X*=X,p=X*X*this.dot4(s[xe],Pt,xt,A,w));let ie=.6-S*S-D*D-te*te-le*le;return ie<0?g=0:(ie*=ie,g=ie*ie*this.dot4(s[Ie],S,D,te,le)),27*(u+d+f+p+g)}}function qC(i){const e=new Map,t=new Map,n=i.clone();return Tg(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Tg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Tg(i.children[n],e.children[n],t)}class XC extends Xs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new QC(t)}),this.register(function(t){return new o3(t)}),this.register(function(t){return new a3(t)}),this.register(function(t){return new t3(t)}),this.register(function(t){return new n3(t)}),this.register(function(t){return new i3(t)}),this.register(function(t){return new r3(t)}),this.register(function(t){return new JC(t)}),this.register(function(t){return new s3(t)}),this.register(function(t){return new e3(t)}),this.register(function(t){return new YC(t)}),this.register(function(t){return new l3(t)}),this.register(function(t){return new c3(t)})}load(e,t,n,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Bi.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new dm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Bi.decodeText(new Uint8Array(e,0,4))===Eg){try{o[Ue.KHR_BINARY_GLTF]=new u3(e)}catch(u){r&&r(u);return}s=JSON.parse(o[Ue.KHR_BINARY_GLTF].content)}else s=JSON.parse(Bi.decodeText(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new w3(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){const u=this.pluginCallbacks[l](c);a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){const u=s.extensionsUsed[l],d=s.extensionsRequired||[];switch(u){case Ue.KHR_MATERIALS_UNLIT:o[u]=new ZC;break;case Ue.KHR_DRACO_MESH_COMPRESSION:o[u]=new f3(s,this.dracoLoader);break;case Ue.KHR_TEXTURE_TRANSFORM:o[u]=new d3;break;case Ue.KHR_MESH_QUANTIZATION:o[u]=new h3;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function KC(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ue={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class YC{constructor(e){this.parser=e,this.name=Ue.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ce(16777215);c.color!==void 0&&u.fromArray(c.color);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Aa(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new YE(u),l.distance=d;break;case"spot":l=new XE(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class ZC{constructor(){this.name=Ue.KHR_MATERIALS_UNLIT}getMaterialType(){return En}extendParams(e,t,n){const r=[];e.color=new Ce(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,qe))}return Promise.all(r)}}class JC{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class QC{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(a,a)}return Promise.all(s)}}class e3{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class t3{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,qe)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class n3{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class i3{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ce(a[0],a[1],a[2]),Promise.all(s)}}class r3{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class s3{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ce(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,qe)),Promise.all(s)}}class o3{constructor(e){this.parser=e,this.name=Ue.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class a3{constructor(e){this.parser=e,this.name=Ue.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class l3{constructor(e){this.name=Ue.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,d=r.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(p),u,d,f,r.mode,r.filter),p})})}else return null}}class c3{constructor(e){this.name=Ue.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const l of r.primitives)if(l.mode!==en.TRIANGLES&&l.mode!==en.TRIANGLE_STRIP&&l.mode!==en.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],f=l[0].count,p=[];for(const g of d){const m=new Le,h=new L,v=new mi,y=new L(1,1,1),x=new PE(g.geometry,g.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&h.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&v.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),x.setMatrixAt(_,m.compose(h,v,y));for(const _ in c)_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Ve.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Eg="glTF",fs=12,Eh={JSON:1313821514,BIN:5130562};class u3{constructor(e){this.name=Ue.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,fs);if(this.header={magic:Bi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Eg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-fs,r=new DataView(e,fs);let s=0;for(;s<n;){const o=r.getUint32(s,!0);s+=4;const a=r.getUint32(s,!0);if(s+=4,a===Eh.JSON){const c=new Uint8Array(e,fs+s,o);this.content=Bi.decodeText(c)}else if(a===Eh.BIN){const c=fs+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class f3{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ue.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const d=Ac[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Ac[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],p=Pr[f.componentType];l[d]=p.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d){r.decodeDracoFile(u,function(f){for(const p in f.attributes){const g=f.attributes[p],m=c[p];m!==void 0&&(g.normalized=m)}d(f)},a,l)})})}}class d3{constructor(){this.name=Ue.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class h3{constructor(){this.name=Ue.KHR_MESH_QUANTIZATION}}class Ag extends qs{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,d=(n-t)/u,f=d*d,p=f*d,g=e*l,m=g-l,h=-2*p+3*f,v=p-f,y=1-h,x=v-f+d;for(let _=0;_!==a;_++){const M=o[m+_+a],P=o[m+_+c]*u,F=o[g+_+a],b=o[g+_]*u;s[_]=y*M+x*P+h*F+v*b}return s}}const p3=new mi;class m3 extends Ag{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return p3.fromArray(s).normalize().toArray(s),s}}const en={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ah={9728:bt,9729:kt,9984:cc,9985:Up,9986:uc,9987:jr},Ch={33071:nn,33648:Xo,10497:Ir},Yl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ac={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},g3={CUBICSPLINE:void 0,LINEAR:Or,STEP:Es},Zl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function v3(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Qc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vi})),i.DefaultMaterial}function ds(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _3(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(f)}if(r){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(f)}if(s){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],f=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=d),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function x3(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function y3(i){const e=i.extensions&&i.extensions[Ue.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Dh(e.attributes):t=i.indices+":"+Dh(i.attributes)+":"+i.mode,t}function Dh(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Cc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function b3(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class w3{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new KC,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new jE(this.options.manager):this.textureLoader=new JE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};ds(s,a,r),ci(a,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ue.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Bi.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Yl[r.type],a=Pr[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new At(l,o,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Yl[r.type],l=Pr[r.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,f=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let m,h;if(p&&p!==d){const v=Math.floor(f/p),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+v+":"+r.count;let x=t.cache.get(y);x||(m=new l(a,v*p,r.count*p/u),x=new ME(m,p/u),t.cache.add(y,x)),h=new Kc(x,c,f%p/u,g)}else a===null?m=new l(r.count*c):m=new l(a,f,r.count*c),h=new At(m,c,g);if(r.sparse!==void 0){const v=Yl.SCALAR,y=Pr[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,_=r.sparse.values.byteOffset||0,M=new y(o[1],x,r.sparse.count*v),P=new l(o[2],_,r.sparse.count*c);a!==null&&(h=new At(h.array.slice(),h.itemSize,h.normalized));for(let F=0,b=M.length;F<b;F++){const E=M[F];if(h.setX(E,P[F*c]),c>=2&&h.setY(E,P[F*c+1]),c>=3&&h.setZ(E,P[F*c+2]),c>=4&&h.setW(E,P[F*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return h})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Ah[f.magFilter]||kt,u.minFilter=Ah[f.minFilter]||jr,u.wrapS=Ch[f.wrapS]||Ir,u.wrapT=Ch[f.wrapT]||Ir,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){l=!0;const f=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){const h=new wt(m);h.needsUpdate=!0,f(h)}),t.load(Bi.resolveURL(d,s.path),g,void 0,p)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),d.userData.mimeType=o.mimeType||b3(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ue.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ue.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ue.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.encoding=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new lm,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new am,An.prototype.copy.call(c,n),c.color.copy(n.color),this.cache.add(a,c)),n=c}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Qc}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ue.KHR_MATERIALS_UNLIT]){const d=r[Ue.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,qe)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Hn);const u=s.alphaMode||Zl.OPAQUE;if(u===Zl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Zl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==En&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new de(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}return s.occlusionTexture!==void 0&&o!==En&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==En&&(a.emissive=new Ce().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==En&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,qe)),Promise.all(l).then(function(){const d=new o(a);return s.name&&(d.name=s.name),ci(d,s),t.associations.set(d,{materials:e}),s.extensions&&ds(r,d,s),d})}createUniqueName(e){const t=Xe.sanitizeNodeName(e||"");let n=t;for(let r=1;this.nodeNamesUsed[n];++r)n=t+"_"+r;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Ue.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ph(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=y3(l),d=r[u];if(d)o.push(d.promise);else{let f;l.extensions&&l.extensions[Ue.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Ph(new zt,l,t),r[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?v3(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let p=0,g=u.length;p<g;p++){const m=u[p],h=o[p];let v;const y=l[p];if(h.mode===en.TRIANGLES||h.mode===en.TRIANGLE_STRIP||h.mode===en.TRIANGLE_FAN||h.mode===void 0)v=s.isSkinnedMesh===!0?new EE(m,y):new nt(m,y),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),h.mode===en.TRIANGLE_STRIP?v.geometry=Rh(v.geometry,Wc):h.mode===en.TRIANGLE_FAN&&(v.geometry=Rh(v.geometry,Ko));else if(h.mode===en.LINES)v=new RE(m,y);else if(h.mode===en.LINE_STRIP)v=new Zc(m,y);else if(h.mode===en.LINE_LOOP)v=new LE(m,y);else if(h.mode===en.POINTS)v=new IE(m,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+h.mode);Object.keys(v.geometry.morphAttributes).length>0&&x3(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),ci(v,s),h.extensions&&ds(r,v,h),t.assignFinalMaterial(v),d.push(v)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return d[0];const f=new Wn;t.associations.set(f,{meshes:e});for(let p=0,g=d.length;p<g;p++)f.add(d[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nt(M1.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new js(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this.getDependency("node",t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const d=o[l];if(d){a.push(d);const f=new Le;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Yc(a,c)})}loadAnimation(e){const n=this.json.animations[e],r=[],s=[],o=[],a=[],c=[];for(let l=0,u=n.channels.length;l<u;l++){const d=n.channels[l],f=n.samplers[d.sampler],p=d.target,g=p.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,h=n.parameters!==void 0?n.parameters[f.output]:f.output;r.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",h)),a.push(f),c.push(p)}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],f=l[2],p=l[3],g=l[4],m=[];for(let v=0,y=u.length;v<y;v++){const x=u[v],_=d[v],M=f[v],P=p[v],F=g[v];if(x===void 0)continue;x.updateMatrix();let b;switch(ai[F.path]){case ai.weights:b=Ps;break;case ai.rotation:b=Wi;break;case ai.position:case ai.scale:default:b=Rs;break}const E=x.name?x.name:x.uuid,O=P.interpolation!==void 0?g3[P.interpolation]:Or,$=[];ai[F.path]===ai.weights?x.traverse(function(G){G.morphTargetInfluences&&$.push(G.name?G.name:G.uuid)}):$.push(E);let Q=M.array;if(M.normalized){const G=Cc(Q.constructor),I=new Float32Array(Q.length);for(let k=0,K=Q.length;k<K;k++)I[k]=Q[k]*G;Q=I}for(let G=0,I=$.length;G<I;G++){const k=new b($[G]+"."+ai[F.path],_.array,Q,O);P.interpolation==="CUBICSPLINE"&&(k.createInterpolant=function(R){const B=this instanceof Wi?m3:Ag;return new B(this.times,this.values,this.getValueSize()/3,R)},k.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(k)}}const h=n.name?n.name:"animation_"+e;return new UE(h,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,n=this.extensions,r=this,s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"";return function(){const a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),Promise.all(a)}().then(function(a){let c;if(s.isBone===!0?c=new om:a.length>1?c=new Wn:a.length===1?c=a[0]:c=new Ve,c!==a[0])for(let l=0,u=a.length;l<u;l++)c.add(a[l]);if(s.name&&(c.userData.name=s.name,c.name=o),ci(c,s),s.extensions&&ds(n,c,s),s.matrix!==void 0){const l=new Le;l.fromArray(s.matrix),c.applyMatrix4(l)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);return r.associations.has(c)||r.associations.set(c,{}),r.associations.get(c).nodes=e,c})}loadScene(e){const t=this.json,n=this.extensions,r=this.json.scenes[e],s=this,o=new Wn;r.name&&(o.name=s.createUniqueName(r.name)),ci(o,r),r.extensions&&ds(n,o,r);const a=r.nodes||[],c=[];for(let l=0,u=a.length;l<u;l++)c.push(Cg(a[l],o,t,s));return Promise.all(c).then(function(){const l=u=>{const d=new Map;for(const[f,p]of s.associations)(f instanceof An||f instanceof wt)&&d.set(f,p);return u.traverse(f=>{const p=s.associations.get(f);p!=null&&d.set(f,p)}),d};return s.associations=l(o),o})}}function Cg(i,e,t,n){const r=t.nodes[i];return n.getDependency("node",i).then(function(s){return r.skin===void 0?s:n.getDependency("skin",r.skin).then(function(o){return s.traverse(function(a){!a.isSkinnedMesh||a.bind(o,a.matrixWorld)}),s})}).then(function(s){e.add(s);const o=[];if(r.children){const a=r.children;for(let c=0,l=a.length;c<l;c++){const u=a[c];o.push(Cg(u,s,t,n))}}return Promise.all(o)})}function S3(i,e,t){const n=e.attributes,r=new Zi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){const u=Cc(Pr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,c=new L;for(let l=0,u=s.length;l<u;l++){const d=s[l];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const m=Cc(Pr[f.componentType]);c.multiplyScalar(m)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Xr;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Ph(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Ac[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return ci(i,e),S3(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?_3(i,e.targets,t):i})}function Rh(i,e){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Ko)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s}const M3=new Proxy({},{get:(i,e,t)=>Reflect.get(i,e,t)??1});class rr extends Ve{mesh;#t;#i;#n;#e=new Set;#r=new Set;#s=new Set;constructor(e,t){super(),this.name=`${e}${M3[e]++}`,this.#n=t;let n;t.traverse(r=>{r instanceof nt&&(n=r)}),this.#t=n===void 0,this.mesh=n??new nt,this.#i=this.#t?null:this.mesh.geometry.attributes.position.clone()}withVertexAnimation(e,t={}){return this.#t?this:(ht.add(()=>{!this.parent||this.children.length===0||(e(this.mesh.geometry.attributes.position,this.#i),this.mesh.geometry.attributes.position.needsUpdate=!0,t.computeVertexNormals!==!1&&this.mesh.geometry.computeVertexNormals())}),this)}onClone(e){return this.#r.add(e),this}onAllocate(e){return this.#s.add(e),this}allocate(){const e=(()=>{for(const n of this.#e)return this.#e.delete(n),n;const t=qC(this.#n);return t.free=()=>{t.parent&&t.removeFromParent(),this.#e.add(t)},t.getOriginalScale=()=>this.#n.scale.clone(),C2(this.name,this.children.length+this.#e.size+1),this.#r.forEach(n=>n(t)),t})();return this.#s.forEach(t=>{Object.assign(e.userData,t(e))}),this.add(e),e}}const vi=async(i,e)=>{if(!Tr(i))return new Ve;const t=(await new Promise((n,r)=>new XC().load(i,n,s=>{Kt.getState().setLoadingMessage(i,`Loading ${i} (${s.loaded}/${s.total})`)},r))).scene.children[0].children[0];return Kt.getState().removeLoadingMessage(i),e!==null&&t.scale.multiplyScalar(e/new Zi().setFromObject(t).getSize(new L).y),t},La=(i,e)=>{i.traverse(t=>{t instanceof nt&&(t.material.onBeforeCompile=n=>{Object.assign(n.uniforms,e.uniforms??{}),t.userData.shader=n,e.vertexShader?.trim()&&(n.vertexShader=n.vertexShader.replace(/void\s*main\s*\(\s*\)/,"void super()")+e.vertexShader),e.fragmentShader?.trim()&&(n.fragmentShader=n.fragmentShader.replace(/void\s*main\s*\(\s*\)/,"void super()")+e.fragmentShader)})})},T3=async i=>{const e=await vi("models/low-poly_airplane.glb",.05);e.userData.velocity=new de(0,0);const t=new Mg;ht.add(o=>{e.rotation.set(e.userData.velocity.x*.3+t.noise(0,o*3e-4)*(4/180*Math.PI),Math.PI*.5+t.noise(1,o*3e-4)*(4/180*Math.PI),t.noise(2,o*3e-4)*(4/180*Math.PI))});const n=new Set;window.addEventListener("keydown",o=>{n.add(o.code)}),window.addEventListener("keyup",o=>{n.delete(o.code)}),window.addEventListener("blur",()=>{n.clear()});let r;i.addEventListener("mousedown",o=>{r=[o.clientX,o.clientY]}),i.addEventListener("touchstart",o=>{r=[o.touches[0].clientX,o.touches[0].clientY]}),window.addEventListener("mouseup",()=>{r=void 0}),window.addEventListener("touchend",()=>{r=void 0}),window.addEventListener("touchcancel",()=>{r=void 0});let s=0;return er.add(()=>{if(se().stageTransitingTo===null&&((n.has("KeyD")&&!n.has("KeyA")||r&&r[0]>window.innerWidth*.6)&&(e.userData.velocity.x=Math.min(1,Math.max(-.2,e.userData.velocity.x)+.05),s++),(n.has("KeyA")&&!n.has("KeyD")||r&&r[0]<=window.innerWidth*.4)&&(e.userData.velocity.x=Math.max(-1,Math.min(.2,e.userData.velocity.x)-.05),s++),(n.has("KeyW")&&!n.has("KeyS")||r&&r[1]<=window.innerHeight*.25)&&(e.userData.velocity.y=Math.min(1,Math.max(-.2,e.userData.velocity.y)+.05),s++),(n.has("KeyS")&&!n.has("KeyW")||r&&r[1]>window.innerHeight*.75)&&(e.userData.velocity.y=Math.max(-1,Math.min(.2,e.userData.velocity.y)-.05),s++),s>15&&se().availableTutorials.wasd&&se().completeTutorial("wasd"),(n.size===0&&!r||n.has("KeyA")&&n.has("KeyD")||n.has("KeyW")&&n.has("KeyS"))&&e.userData.velocity.multiplyScalar(.8),e.userData.velocity.length()>1&&e.userData.velocity.normalize(),e.position.setZ(Math.min(Fs,Math.max(fi,e.position.z+e.userData.velocity.x*.015))),e.position.setX(Math.min(t2,Math.max(n2,e.position.x+e.userData.velocity.y*.01))),n.has("Space")&&s2()?e.position.y=Math.min(.5,e.position.y+.005):e.position.y=Math.max(0,e.position.y-.005),(se().getWeather()?.enabled?se().upgrades.Autopilot-5:se().upgrades.Autopilot)>0&&n.size===0&&!r&&e.userData.autopilotTarget)){const o=.1*se().upgrades.Autopilot;Math.abs(e.userData.autopilotTarget.position.z-e.position.z)>.02&&(e.userData.velocity.x=Math.min(1,Math.max(-1,e.userData.velocity.x+Math.sign(e.userData.autopilotTarget.position.z-e.position.z)*o)))}}),e};function E3(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}const Lh=async i=>{const e=new rr("bird",on(await vi("models/low_polygon_art__white_eagle_bird.glb",.1),{rotateX:-Math.PI/2,rotateZ:-Math.PI/2,scale:{multiplyScalar:.3}}));if(i){let t=0;const n=new Map;e.withVertexAnimation((r,s)=>{if(t++%2!==0)return;const o=t%32;r.copy(n.emplace(o,{insert:()=>{for(let a=0;a<r.count;a++){const c=E3(Math.abs(r.getX(a)),3.5,17)*10*Math.sin(o/32*Math.PI*2)*.8;r.setY(a,s.getY(a)+c*.7),r.setZ(a,s.getZ(a)+c)}return r.clone()}}))},{computeVertexNormals:!1})}return e},A3=`#include <snoise>

in vec2 modelCoordPos;
in vec3 worldCoordPos;
uniform float time;
uniform vec3 cameraPos;
uniform bool highQuality;

float cloud(vec3 p) {
    return smoothstep(0.0, -0.2, p.y) * smoothstep(highQuality ? 0.3 : 0.2, highQuality ? 1.0 : 0.6, (
        smoothstep(-1.0, 1.0, snoise(p * 2.0)) +
        smoothstep(-1.0, 1.0, snoise(p * 2.0 * 2.0)) / 2.0 +
        smoothstep(-1.0, 1.0, snoise(p * 2.0 * 4.0)) / 4.0
    ) / 1.75);
}

void main() {
    const vec3 fogColor = vec3(73.0, 150.0, 209.0) / 255.0;

    // fog
    gl_FragColor = vec4(fogColor + snoise(modelCoordPos * 8.0 + vec2(0.0, 0.0003) * time) * 0.15, 0.6);

    // clouds
    vec3 ray_vector = normalize(worldCoordPos - cameraPos);
    if (highQuality) {
        float volume = 0.0;
        float color = 0.0;
        for (float i = 0.0; i < 0.5; i += 0.01) {
            vec3 p = (vec3(worldCoordPos.x, 0.0, worldCoordPos.z) + ray_vector * i) * 0.5 + vec3(0.0, 0.0, -0.0001) * time;
            float noise = cloud(p);
            volume += (1.0 - volume) * noise;
            color += (1.0 - volume) * noise * smoothstep(-0.15, 0.15, noise);
        }
        gl_FragColor = mix(gl_FragColor, vec4(vec3(0.45 + clamp(color * 0.4, 0.1, 0.6)), 1.0), clamp(volume, 0.0, 1.0));
    } else {
        float volume = 0.0;
        float color = 0.0;
        for (float i = 0.0; i < 0.5; i += 0.1) {
            vec3 p = (vec3(worldCoordPos.x, 0.0, worldCoordPos.z) + ray_vector * i) * 0.5 + vec3(0.0, 0.0, -0.0001) * time;
            float noise = cloud(p);
            volume += (1.0 - volume) * noise * 2.0;
            color += (1.0 - volume) * noise * smoothstep(-0.15, 0.15, noise);
        }
        gl_FragColor = mix(gl_FragColor, vec4(vec3(0.45 + clamp(color * 1.5, 0.1, 0.5)), 1.0), clamp(volume, 0.0, 1.0));
    }

    // clip by the distance from the origin
    gl_FragColor.a *= 1.0 - smoothstep(0.3, 0.55, length(modelCoordPos));
}
`,C3=`out vec2 modelCoordPos;
out vec3 worldCoordPos;
uniform mat4 matrixWorld;

void main() {
    worldCoordPos = (matrixWorld * vec4(position, 1.0)).xyz;  // get world coodinates from the model coordinates

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    modelCoordPos = position.xy;
}
`,D3=()=>{const i={time:{value:0},matrixWorld:{value:new Le},cameraPos:{value:new L},highQuality:{value:!1}},e=on(new nt(new $s,new ct({transparent:!0,uniforms:i,vertexShader:C3,fragmentShader:A3})),{rotateX:-Math.PI/2,scale:{setScalar:4},position:{setY:-.13}});return ht.add((t,n,r)=>{i.highQuality.value=Mn.getState().quality==="high",i.time.value=t,i.matrixWorld.value.copy(e.matrixWorld),i.cameraPos.value.copy(r.position)}),e};function P3(i,e){if(e===o1)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ko||e===Wc){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Ko)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const R3=`in vec2 vUv;

void main() {
    float x = vUv.x * (1.5 - vUv.y * 1.3);
    gl_FragColor = vec4(1.0, 1.0, 1.0, smoothstep(0.01, 0.3, vUv.y) * (1.0 - step(0.3, abs(x))) * min(1.0, sin(abs(x) * 30.0) + vUv.y * 5.0) * 0.2);
}
`,L3=`out vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}
`,I3=`uniform sampler2D texture1;
uniform sampler2D texture2;
in vec2 vUv;

void main() {
    gl_FragColor = texture2D(texture1, vUv);
    vec4 color2 = texture2D(texture2, vUv);
    gl_FragColor.rgb = gl_FragColor.rgb + color2.rgb * color2.a;
}
`,F3=`out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Dg=1,Pg=2,Dt=(i,e={})=>(i.traverse(t=>{t.layers.set(Dg),e.noDiffusion&&t.layers.set(Pg)}),i),O3=(i,e,t,n)=>{const r=new pm(i);r.renderToScreen=!1,r.addPass(n),r.addPass(new $i(new de(256,256),3,0,0));const s=new Ls(new ct({uniforms:{texture1:{value:null},texture2:{value:r.renderTarget2.texture}},vertexShader:F3,fragmentShader:I3,defines:{}}),"texture1");s.needsSwap=!0;const o=new En({color:"black"});return gm.add(()=>{const a=new Map;e.traverse(c=>{c instanceof nt&&!(c.layers.isEnabled(Dg)||c.layers.isEnabled(Pg))&&(a.set(c.uuid,c.material),c.material=o)}),t.layers.enableAll(),r.render(),e.traverse(c=>{a.has(c.uuid)&&(c.material=a.get(c.uuid),a.delete(c.uuid))})}),window.addEventListener("resize",()=>{r.setSize(window.innerWidth,window.innerHeight)}),s},N3=.005,Ih=2,k3=i=>{const t=new nt(P3(new zt().setFromPoints(Array(120).fill(0).flatMap(()=>[new L(i.position.x,0,i.position.z+.1),new L(i.position.x,0,i.position.z-.1)])),Wc),new ct({vertexShader:L3,fragmentShader:R3,transparent:!0}));return t.geometry.setAttribute("uv",new At(new Float32Array(Array(120).fill(0).flatMap((n,r)=>[-1,r/(120-1),1,r/(120-1)])),2)),er.add(n=>{if(n%Ih==0)return;const r=t.geometry.attributes.position;for(let s=r.count-1;s>=2;s--)r.setX(s,r.getX(s-2)-N3*Ih),r.setY(s,r.getY(s-2)),r.setZ(s,r.getZ(s-2));r.setX(0,i.position.x),r.setY(0,i.position.y),r.setZ(0,i.position.z+.1),r.setX(1,i.position.x),r.setY(1,i.position.y),r.setZ(1,i.position.z-.1),t.geometry.attributes.position.needsUpdate=!0,t.geometry.computeVertexNormals()}),Dt(t),ir((n,r)=>{if(n.stage===r.stage)return;const s=t.geometry.attributes.position;for(let o=0;o<s.count;o++)s.setX(o,i.position.x),s.setZ(o,i.position.z)}),t},B3=`#include <snoise>

in vec3 pos;
uniform float time;
uniform vec3 seaColor;
uniform vec3 continentsColor;
uniform bool coastline;  // 1.0-1.5
uniform bool hasCloud;

void main() {
    // Sea
    vec3 color = seaColor;

    // Continents
    float continents = snoise(pos * 2.0) + snoise(pos * 4.0) * 0.5 + snoise(pos * 8.0) * 0.25;
    if (coastline) {
        if (continents > 0.1) {
            color = continentsColor;
        }
    } else {
        color = mix(color, continentsColor, continents);
    }

    // Cloud
    if (hasCloud) {
        vec3 rotatedPos1 = pos + vec3(time * 0.3, time * 0.3, time * 0.3);
        vec3 rotatedPos2 = pos + vec3(time * 0.3, time * 0.3, -time * 0.5);
        float cloud =
            snoise(rotatedPos1 * 2.0) * 2.0 +
            snoise(rotatedPos1 * 4.0) * 1.0 +
            snoise(rotatedPos2 * 8.0) * 0.5;
        color = mix(color, vec3(0.6), cloud);
    }

    gl_FragColor = vec4(color * vec3(0.2), 1.0);
}
`,U3=`out vec3 pos;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    pos = position;
}
`,z3=(i={seaColor:new L(73,150,209).divideScalar(255),continentsColor:new L(74,53,24).divideScalar(255),hasCloud:!0,coastline:!0})=>{const e={time:{value:0},seaColor:{value:i.seaColor},continentsColor:{value:i.continentsColor},hasCloud:{value:i.hasCloud},coastline:{value:i.coastline}},t=new nt(new Ta(.5,6),new ct({uniforms:e,vertexShader:U3,fragmentShader:B3}));return ht.add((n,r)=>{e.time.value=n*1e-4,t.rotateZ(r*1e-4)}),t},V3=`uniform float time;

void main() {
    super();
    // gl_FragColor.rgb *= 1.0 + (sin(time * 0.006) + 1.0) / 2.0 * 10.0;
}
`,Fh=async()=>{const i=await vi("models/planet_megatropolis.glb",2);return La(i,{fragmentShader:V3}),new rr("enemyPlanet",Dt(i)).onClone(e=>{ht.add(t=>{e.rotation.set(0,t*1e-4,0)})})},H3=()=>{const i=new Wn;let e=Date.now();return(async()=>{const t=new rr("newspaper",on(await vi("models/y2k_newspaper_article.glb",.1),{rotateY:Math.PI/2,rotateX:Math.PI*.3,scale:{multiplyScalar:2},position:{set:[.8,.5,.5]}})).withVertexAnimation((r,s)=>{for(let o=0;o<r.count;o++)r.setY(o,s.getY(o)+Math.sin(r.getX(o)*Math.PI*2+Date.now()*.006)*.03+Math.sin(r.getZ(o)*Math.PI*2+Date.now()*.006)*.01)});i.add(t),t.mesh.material.depthTest=!1,t.mesh.material.transparent=!0,t.mesh.renderOrder=3;for(let r=0;r<30;r++)t.allocate();const n=new Mg;ht.add(()=>{if(t.parent===null)return;const r=.1;for(const[s,o]of t.children.entries()){const a=(Date.now()-e)*.006*(1+n.noise(s,3)*.3);o.rotation.y=n.noise(s,5),o.rotation.z=1*a,o.position.set(n.noise(s,4)*.5+.2,.3+(Math.cos(a)-a*.5-1)*r+(n.noise(s,1)+1)*.3,.5+(Math.sin(a)-a*.8)*r+(n.noise(s,2)+1)*.3)}})})().catch(console.error),i.visible=!1,ir((t,n)=>{if(t.availableNews===n.availableNews)return;const r=[...new Set(Xn(t.availableNews)).difference(new Set(Xn(n.availableNews)))][0];!r||(e=Date.now(),i.visible=!0,Mn.getState().showNews(o2[r]),setTimeout(()=>{i.visible=!1},1e4))}),i},G3=`#include <snoise>

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
`,W3=`out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,$3=i=>{const e=new Ls({uniforms:{blur:{value:i},tDiffuse:{value:null},aspect:{value:window.innerWidth/window.innerHeight},time:{value:0},mouse0:{value:new de(.5,.5)},mouse1:{value:new de(.5,.5)},mouse2:{value:new de(.5,.5)},mouse3:{value:new de(.5,.5)},mouse4:{value:new de(.5,.5)},mouse5:{value:new de(.5,.5)},mouse6:{value:new de(.5,.5)},mouse7:{value:new de(.5,.5)},mouse8:{value:new de(.5,.5)},mouse9:{value:new de(.5,.5)}},vertexShader:W3,fragmentShader:G3}),t=()=>{e.uniforms.mouse9.value.copy(e.uniforms.mouse8.value),e.uniforms.mouse8.value.copy(e.uniforms.mouse7.value),e.uniforms.mouse7.value.copy(e.uniforms.mouse6.value),e.uniforms.mouse6.value.copy(e.uniforms.mouse5.value),e.uniforms.mouse5.value.copy(e.uniforms.mouse4.value),e.uniforms.mouse4.value.copy(e.uniforms.mouse3.value),e.uniforms.mouse3.value.copy(e.uniforms.mouse2.value),e.uniforms.mouse2.value.copy(e.uniforms.mouse1.value),e.uniforms.mouse1.value.copy(e.uniforms.mouse0.value),e.uniforms.mouse0.value.set(-1,-1)};return window.addEventListener("mousemove",n=>{e.uniforms.mouse0.value.set(n.pageX/window.innerWidth,1-n.pageY/window.innerHeight),e.uniforms.mouse0.value.distanceTo(e.uniforms.mouse1.value)>.1&&t()}),er.add(n=>{n%6===0&&t()}),ht.add((n,r,s)=>{e.uniforms.aspect.value=s.aspect,e.uniforms.time.value=n}),e.enabled=se().getWeather()?.name==="Rain"&&!!se().getWeather()?.enabled,ir((n,r)=>{n.weatherEffectWillBeEnabledIn!==r.weatherEffectWillBeEnabledIn&&(e.enabled=se().getWeather()?.name==="Rain"&&!!se().getWeather()?.enabled)}),e},j3=`uniform sampler2D tDiffuse;
in vec2 vUv;
uniform float time;  // in [0, 2]

void main() {
    if (time < 1.0) {
        // fade in
        gl_FragColor = mix(texture2D(tDiffuse, vUv), vec4(0.0, 0.0, 0.0, 1.0), time);
    } else {
        // fade out
        gl_FragColor = mix(texture2D(tDiffuse, vUv), vec4(0.0, 0.0, 0.0, 1.0), 2.0 - time);
    }
}
`,q3=`out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,X3=()=>{let i=!1;const e=new Ls({uniforms:{tDiffuse:{value:null},time:{value:0}},vertexShader:q3,fragmentShader:j3});return{pass:e,play:t=>{if(i)return;i=!0;let n=0;const r=(s,o)=>{n<1?n=Math.min(1,n+o*.001):n===1?(n+=o*.001,t(),se().completeStageTransition()):n<2?n=Math.min(2,n+o*.001):(ht.delete(r),i=!1),e.uniforms.time.value=n};ht.add(r)}}},K3=`uniform float time;
in float worldPosY;

void main() {
    super();
    if (worldPosY > 0.0) {
        gl_FragColor.rgb = gl_FragColor.rgb * (1.0 + (sin(time * 0.01 + worldPosY * 300.0) + 1.0) / 2.0 * 2.0);
    }
}
`,Y3=`out float worldPosY;
uniform float distortion;  // [0, 1]

void main() {
    super();
    vec4 worldPos = modelMatrix * vec4(position, 1.);
    worldPosY = worldPos.y;
    gl_Position.x += sin(worldPos.y * 600.0) * distortion * 0.1;
}
`,ha=async()=>{const i={time:{value:0},distortion:{value:0}};ht.add(t=>{i.time.value=t});const e=on(await vi("models/ufo.glb",.2),{rotateX:-Math.PI/2,position:{set:[.5,0,0]}});return La(e,{uniforms:i,vertexShader:Y3,fragmentShader:K3}),new rr("ufo",e).onClone(t=>{ht.add(n=>{t.rotation.set(-Math.PI/2+Math.sin(n*.01)*.05,Math.cos(n*.01)*.05,0)})})};De.snoise=jC;const Z3={createModel:()=>{const i=new Ve;return vi("models/sky_pano_-_grand_canyon_yuma_point.glb",4).then(e=>{ht.add(t=>{e.rotation.y=t*1e-4}),i.add(on(e,{rotateX:-Math.PI/2,position:{setY:-.5}}),Dt(new tu(16777215,.025)),on(Dt(new Aa(16117434,1.6)),{position:{set:[.3,1,-1]}}),Tr("fog")?D3():new Ve)}).catch(console.error),i},visible:()=>se().availableNews.aliensComing??!1,createEnemyPools:async()=>{const i=await Bs({alive:Lh(!0).then(e=>e.onAllocate(t=>({name:"Bird",time:0,hp:15*(1+Math.random())*se().getExplorationLv()*500**se().transcendence,update:()=>{t.position.x-=.01},onKilled:()=>{i.dead.allocate().position.copy(t.position)},radius:.03,money:1*se().getExplorationLv()*500**se().transcendence,items:{Food:Math.floor(1*sa(se())*se().getExplorationLv()*500**se().transcendence)}}))),dead:Lh(!1).then(e=>e.onAllocate(()=>({time:0}))),weatherAlive:ha().then(e=>e.onAllocate(t=>({name:"Weather Effect UFO",time:0,hp:1500*se().getExplorationLv()*500**se().transcendence,update:()=>{},onKilled:()=>{i.weatherDead.allocate().position.copy(t.position),se().stopWeatherEffect(),se().completeTutorial("weatherEffect")},radius:.03,money:1e3*se().getExplorationLv()*500**se().transcendence,items:{Scrap:Math.floor(1*sa(se())*se().getExplorationLv()*500**se().transcendence)}}))),weatherDead:ha().then(e=>e.onAllocate(()=>({time:0}))),spawn:e=>{e%5===0&&i.alive.allocate().position.set(2,0,e*.06%1*(Fs-fi)+fi),se().getWeather()?.enabled&&i.weatherAlive.children.length===0&&i.weatherAlive.allocate().position.set(1,0,Math.random()*(Fs-fi)+fi)}});return i}},J3=`#include <snoise>

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
`,Q3=`void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,eD={createModel:()=>{const i={u_resolution:{value:new de(window.innerWidth,window.innerHeight)},time:{value:0}};return ht.add(e=>{i.time.value=e}),window.addEventListener("resize",()=>{i.u_resolution.value.set(window.innerWidth,window.innerHeight)}),new Ve().add(new nt(new Ji(6,6,6),new ct({uniforms:i,side:Bt,vertexShader:Q3,fragmentShader:J3})),Dt(on(z3(),{position:{set:[.5,-2,0]},scale:{multiplyScalar:2}})),Dt(new tu(11184895,.2)),on(Dt(new Aa(16117434,.4)),{position:{set:[.3,1,-1]}}))},visible:()=>se().availableNews.aliensComing??!1,createEnemyPools:async()=>{const i=await Bs({alive:ha().then(e=>e.onAllocate(t=>({name:"UFO",time:0,hp:300*(1+Math.random())*se().getExplorationLv()*500**se().transcendence,update:()=>{t.userData.time%80<=3?t.scale.copy(t.getOriginalScale().multiply(new L(1,1-t.userData.time%80/3,1))):t.userData.time%80===4?(t.position.x-=.35+Math.random()*.2,t.position.z=Math.max(fi,Math.min(Fs,t.position.z+(Math.random()-.5)*.2))):t.userData.time%80<=7?t.scale.copy(t.getOriginalScale().multiply(new L(1,(t.userData.time%80-4)/3,1))):t.position.x-=.005},onKilled:()=>{i.dead.allocate().position.copy(t.position)},radius:.03,money:100*se().getExplorationLv()*500**se().transcendence,items:{Scrap:Math.floor(1*sa(se())*se().getExplorationLv()*500**se().transcendence)}}))),dead:ha().then(e=>e.onAllocate(()=>({time:0}))),spawn:e=>{e%31===0&&(se().availableNews.aliensComing??!1)&&i.alive.allocate().position.set(2,0,e*.06%1*(Fs-fi)+fi)}});return i}},tD=`#include <snoise>

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
`,nD=`void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,iD={createModel:()=>{const i={u_resolution:{value:new de(window.innerWidth,window.innerHeight)},time:{value:0}};return ht.add(e=>{i.time.value=e}),window.addEventListener("resize",()=>{i.u_resolution.value.set(window.innerWidth,window.innerHeight)}),Dt(new Ve().add(new nt(new Ji(8,8,8),new ct({uniforms:i,side:Bt,vertexShader:nD,fragmentShader:tD})),Dt(new tu(11184895,.2)),on(Dt(new Aa(16117434,.4)),{position:{set:[.3,1,-1]}})))},visible:()=>(se().availableNews.aliensComing??!1)&&se().upgrades["ATK\xD72"]>0,createEnemyPools:async()=>{const i=await Bs({alive:Fh().then(e=>e.onAllocate(t=>({name:"Planet",time:0,hp:15e4*se().getExplorationLv()*500**se().transcendence,update:()=>{},onKilled:()=>{i.dead.allocate().position.copy(t.position),se().defeatedFinalBoss()},radius:1,money:1e4*se().getExplorationLv()*500**se().transcendence,items:{}}))),dead:Fh().then(e=>e.onAllocate(()=>({time:0}))),spawn:e=>{i.alive.children.length===0&&!se().canTranscend&&i.alive.allocate().position.set(4,0,0)}});return i}},Gr={Earth:Z3,Universe:eD,Final:iD},rD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAC7klEQVRYw+2WS2skVRiGn1PdVHtpkmgcRHEEV4r7kFqoy1HRheDGjb/AteBe8CeIILMQRAcEEReKjpdhRmJ6ZmFQEILjJckqMVNdXVXd6VSdc1431VoZTLrLSYKLvMuv4HzPec93KThEkgJOQeaQxPPAeSADNowx/qQA2ofEHwBeBR4HPpB0Ddg2xtjTcAVJD0p6W//oI0kvSXroVJ5GUlvSczqosaSL1toLm5ub59bW1tonUgM1iPPAu8Cz9bi1dntnZ+f9OI4/3dvbW/fe34qiyJ4EwD3AK8DFetw5RxzHxHH8c57nHzvnLgPrkvqAjaLIHxdAADwJfAE8PIl778nznDiOSdOUoihueO8/kXQV+AVoBGKm1MJ9wJvAa7UYZVmSpilJkpDnOWVZ4r3/BvgcWAF+r0CKaSDTAELgAvAecH8doigKsiyj3+8zHA4nEDlwpXJtBfgVyI6CmNZSFvgJ+OoAtTGEYUi322VhYYFut0un06HVanWBF4HXgZeBx4C7jkpwJEA1Af8Evv6Xb4RhyNzcHIuLi8zPz08gMMY8CrwAPAHcvbq6GjSdhHUVwBrwHfDUAfogIAxDgiDAGINzDuccRVEAPAIsTLvkLFPNA1vA5SOcQtLt4SGQTOuIqQDVMwyA68BvtxUp1lpGoxFpmv7dEZVuADcrkDtyAGAM/AFcq8+D/f19siyrzwQkIekH4FLVBfY4AKiKcQW4NUmeJAm7u7skScJ4PMZ7j6Rt4C3gW2AwbQ7MtFCMMV7SEPhR0nVr7fPD4ZDBYECe5zjnJjVQAG8An0VRNJrl7CYOFMCWpCtlWW6NRqP6rUvgHeBp4NKsyWd2oOZCX9JV59y9zrlnJJ2TFANfAh8CG003Y9OdPgbWgyDIW63W98aYENitZv92003YGMAY4733WRiGNzudzka73aYsy/2lpaWC05T3Puj3+wFnaqBerxf0er2g0f/AcSavtbxfXl72/7UL7qh0AOrJz3Sm/4X+AkuezARcvU++AAAAAElFTkSuQmCC",sD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADPUlEQVRYw+2WT2gcVRzHP+/tdrY1W1M3Kmq3AaVUKR68FHNQT6KIKaV4EcFrCXgWvAuePZZKEcE/1YMaWypataWVaNPSWFui0fzbzaRxs8lsdnf238y89zxkFobqdjPtpvSQ7/H7G/h95v3+vAcdZBsjuQsSHRL3A3uAKpDLCqE3CyDZwX8QeBN4EvjUNuYCUMgKEfQa4D/HHP5tBegDDgKfAe8Dw7Yxj/a6NKJD/ZPAi8C3EbsFfNLw1Ocnr9yYuDbnlD5845lgUwBCiD3AB8DLUd9tBoWzk8sfX511vllZa0z5Sq+OjgwFmwFwH/A6cDzqNzzF+IzDxKwzaRfdL1u+OgNMaW1KQDA6MqR7BSCB/cB3wGNt3ws00wWXyzMOM0sVqjXvkq/011qb88DfQCwQcaugbcwDwLvAW21PaUO57jO5WOF6fo38sku94eMr/VPYM2PAXAjidQPpBmABLwEfAZkohON6TC1VuTpfYnGl1oZwgXPhqY0BM0D1VhDdRioArgE/RM2EFGTSFnsfSfP04C4GH07TvzNFalsiDQwDbwOvAY8D22Ptgf/ZCUXgx5tjCSnI9Fns330/B/YOsG93P/3pFKltCaQUg8CrwFPAjkNHf5VxN2FUHvAb8DPwXDRgJSWZtIWVlCSkoOkpWr7Cr3sAWWBXt5/cyFbTwAJwptMHCSlQ2txs14C1bhPRFSAsQxkYB2ajMaUNbjMgv1rnz8UK+eL6RIS6BEyHINxJCQCawDxwAXiivQ+cmkd+ZT353D9VqjUPZQxamwngRDgFQS8ACJtxDBj2Aj1QrLa4ni/z140KS06desNvJy8A7wFngXK3PbAhgKwQ2jamBvyutBl3m8Erc8s1/rDL2EWXlq/Q6z3gAe8Ap0dHhuq3dR13mYYFpc25csNfsFfrrFaaBIFGa+MDR4HngRMbTR6rBOEplJQ25xue6mt66gWlzUPKGAf4Pnw35OLejHF6oN2MU1ZSututxC8JKSxgJdz9hbg3YWyArBA6p3Q102dND+xM5XakktQafuuLIwc87qZySstT8yXJlmLo8LGL8vCxizLWe6CXySMjr7868qy+3Sm4E2mAaPItbeme0L/HoavvkpVO3AAAAABJRU5ErkJggg==";var Dc={exports:{}},qi={},wu={exports:{}},oD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",aD=oD,lD=aD;function Rg(){}function Lg(){}Lg.resetWarningCache=Rg;var cD=function(){function i(n,r,s,o,a,c){if(c!==lD){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}i.isRequired=i;function e(){return i}var t={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:e,element:i,elementType:i,instanceOf:e,node:i,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Lg,resetWarningCache:Rg};return t.PropTypes=t,t};wu.exports=cD();var Pc={exports:{}},xn={},pa={exports:{}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var t="none",n="contents",r=/input|select|textarea|button|object|iframe/;function s(d,f){return f.getPropertyValue("overflow")!=="visible"||d.scrollWidth<=0&&d.scrollHeight<=0}function o(d){var f=d.offsetWidth<=0&&d.offsetHeight<=0;if(f&&!d.innerHTML)return!0;try{var p=window.getComputedStyle(d),g=p.getPropertyValue("display");return f?g!==n&&s(d,p):g===t}catch{return console.warn("Failed to inspect element style"),!1}}function a(d){for(var f=d,p=d.getRootNode&&d.getRootNode();f&&f!==document.body;){if(p&&f===p&&(f=p.host.parentNode),o(f))return!1;f=f.parentNode}return!0}function c(d,f){var p=d.nodeName.toLowerCase(),g=r.test(p)&&!d.disabled||p==="a"&&d.href||f;return g&&a(d)}function l(d){var f=d.getAttribute("tabindex");f===null&&(f=void 0);var p=isNaN(f);return(p||f>=0)&&c(d,!p)}function u(d){var f=[].slice.call(d.querySelectorAll("*"),0).reduce(function(p,g){return p.concat(g.shadowRoot?u(g.shadowRoot):[g])},[]);return f.filter(l)}i.exports=e.default})(pa,pa.exports);Object.defineProperty(xn,"__esModule",{value:!0});xn.resetState=hD;xn.log=pD;xn.handleBlur=Us;xn.handleFocus=zs;xn.markForFocusLater=mD;xn.returnFocus=gD;xn.popWithoutFocus=vD;xn.setupScopedFocus=_D;xn.teardownScopedFocus=xD;var uD=pa.exports,fD=dD(uD);function dD(i){return i&&i.__esModule?i:{default:i}}var Wr=[],Er=null,Rc=!1;function hD(){Wr=[]}function pD(){}function Us(){Rc=!0}function zs(){if(Rc){if(Rc=!1,!Er)return;setTimeout(function(){if(!Er.contains(document.activeElement)){var i=(0,fD.default)(Er)[0]||Er;i.focus()}},0)}}function mD(){Wr.push(document.activeElement)}function gD(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{Wr.length!==0&&(e=Wr.pop(),e.focus({preventScroll:i}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function vD(){Wr.length>0&&Wr.pop()}function _D(i){Er=i,window.addEventListener?(window.addEventListener("blur",Us,!1),document.addEventListener("focus",zs,!0)):(window.attachEvent("onBlur",Us),document.attachEvent("onFocus",zs))}function xD(){Er=null,window.addEventListener?(window.removeEventListener("blur",Us),document.removeEventListener("focus",zs)):(window.detachEvent("onBlur",Us),document.detachEvent("onFocus",zs))}var Lc={exports:{}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var t=pa.exports,n=r(t);function r(a){return a&&a.__esModule?a:{default:a}}function s(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?s(a.activeElement.shadowRoot):a.activeElement}function o(a,c){var l=(0,n.default)(a);if(!l.length){c.preventDefault();return}var u=void 0,d=c.shiftKey,f=l[0],p=l[l.length-1],g=s();if(a===g){if(!d)return;u=p}if(p===g&&!d&&(u=f),f===g&&d&&(u=p),u){c.preventDefault(),u.focus();return}var m=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),h=m!=null&&m[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(!!h){var v=l.indexOf(g);if(v>-1&&(v+=d?-1:1),u=l[v],typeof u>"u"){c.preventDefault(),u=d?p:f,u.focus();return}c.preventDefault(),u.focus()}}i.exports=e.default})(Lc,Lc.exports);var yn={},yD=function(){},bD=yD,vn={},Ig={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(i){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),t={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};i.exports?i.exports=t:window.ExecutionEnvironment=t})()})(Ig);Object.defineProperty(vn,"__esModule",{value:!0});vn.canUseDOM=vn.SafeNodeList=vn.SafeHTMLCollection=void 0;var wD=Ig.exports,SD=MD(wD);function MD(i){return i&&i.__esModule?i:{default:i}}var Ia=SD.default,TD=Ia.canUseDOM?window.HTMLElement:{};vn.SafeHTMLCollection=Ia.canUseDOM?window.HTMLCollection:{};vn.SafeNodeList=Ia.canUseDOM?window.NodeList:{};vn.canUseDOM=Ia.canUseDOM;vn.default=TD;Object.defineProperty(yn,"__esModule",{value:!0});yn.resetState=PD;yn.log=RD;yn.assertNodeList=Fg;yn.setElement=LD;yn.validateElement=Su;yn.hide=ID;yn.show=FD;yn.documentNotReadyOrSSRTesting=OD;var ED=bD,AD=DD(ED),CD=vn;function DD(i){return i&&i.__esModule?i:{default:i}}var tn=null;function PD(){tn&&(tn.removeAttribute?tn.removeAttribute("aria-hidden"):tn.length!=null?tn.forEach(function(i){return i.removeAttribute("aria-hidden")}):document.querySelectorAll(tn).forEach(function(i){return i.removeAttribute("aria-hidden")})),tn=null}function RD(){}function Fg(i,e){if(!i||!i.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function LD(i){var e=i;if(typeof e=="string"&&CD.canUseDOM){var t=document.querySelectorAll(e);Fg(t,e),e=t}return tn=e||tn,tn}function Su(i){var e=i||tn;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,AD.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function ID(i){var e=!0,t=!1,n=void 0;try{for(var r=Su(i)[Symbol.iterator](),s;!(e=(s=r.next()).done);e=!0){var o=s.value;o.setAttribute("aria-hidden","true")}}catch(a){t=!0,n=a}finally{try{!e&&r.return&&r.return()}finally{if(t)throw n}}}function FD(i){var e=!0,t=!1,n=void 0;try{for(var r=Su(i)[Symbol.iterator](),s;!(e=(s=r.next()).done);e=!0){var o=s.value;o.removeAttribute("aria-hidden")}}catch(a){t=!0,n=a}finally{try{!e&&r.return&&r.return()}finally{if(t)throw n}}}function OD(){tn=null}var ts={};Object.defineProperty(ts,"__esModule",{value:!0});ts.resetState=ND;ts.log=kD;var ws={},Ss={};function Oh(i,e){i.classList.remove(e)}function ND(){var i=document.getElementsByTagName("html")[0];for(var e in ws)Oh(i,ws[e]);var t=document.body;for(var n in Ss)Oh(t,Ss[n]);ws={},Ss={}}function kD(){}var BD=function(e,t){return e[t]||(e[t]=0),e[t]+=1,t},UD=function(e,t){return e[t]&&(e[t]-=1),t},zD=function(e,t,n){n.forEach(function(r){BD(t,r),e.add(r)})},VD=function(e,t,n){n.forEach(function(r){UD(t,r),t[r]===0&&e.remove(r)})};ts.add=function(e,t){return zD(e.classList,e.nodeName.toLowerCase()=="html"?ws:Ss,t.split(" "))};ts.remove=function(e,t){return VD(e.classList,e.nodeName.toLowerCase()=="html"?ws:Ss,t.split(" "))};var ns={};Object.defineProperty(ns,"__esModule",{value:!0});ns.log=GD;ns.resetState=WD;function HD(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}var Og=function i(){var e=this;HD(this,i),this.register=function(t){e.openInstances.indexOf(t)===-1&&(e.openInstances.push(t),e.emit("register"))},this.deregister=function(t){var n=e.openInstances.indexOf(t);n!==-1&&(e.openInstances.splice(n,1),e.emit("deregister"))},this.subscribe=function(t){e.subscribers.push(t)},this.emit=function(t){e.subscribers.forEach(function(n){return n(t,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ma=new Og;function GD(){console.log("portalOpenInstances ----------"),console.log(ma.openInstances.length),ma.openInstances.forEach(function(i){return console.log(i)}),console.log("end portalOpenInstances ----------")}function WD(){ma=new Og}ns.default=ma;var Mu={};Object.defineProperty(Mu,"__esModule",{value:!0});Mu.resetState=XD;Mu.log=KD;var $D=ns,jD=qD($D);function qD(i){return i&&i.__esModule?i:{default:i}}var Et=void 0,un=void 0,zi=[];function XD(){for(var i=[Et,un],e=0;e<i.length;e++){var t=i[e];!t||t.parentNode&&t.parentNode.removeChild(t)}Et=un=null,zi=[]}function KD(){console.log("bodyTrap ----------"),console.log(zi.length);for(var i=[Et,un],e=0;e<i.length;e++){var t=i[e],n=t||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")}function Nh(){zi.length!==0&&zi[zi.length-1].focusContent()}function YD(i,e){!Et&&!un&&(Et=document.createElement("div"),Et.setAttribute("data-react-modal-body-trap",""),Et.style.position="absolute",Et.style.opacity="0",Et.setAttribute("tabindex","0"),Et.addEventListener("focus",Nh),un=Et.cloneNode(),un.addEventListener("focus",Nh)),zi=e,zi.length>0?(document.body.firstChild!==Et&&document.body.insertBefore(Et,document.body.firstChild),document.body.lastChild!==un&&document.body.appendChild(un)):(Et.parentElement&&Et.parentElement.removeChild(Et),un.parentElement&&un.parentElement.removeChild(un))}jD.default.subscribe(YD);(function(i,e){Object.defineProperty(e,"__esModule",{value:!0});var t=Object.assign||function(I){for(var k=1;k<arguments.length;k++){var K=arguments[k];for(var R in K)Object.prototype.hasOwnProperty.call(K,R)&&(I[R]=K[R])}return I},n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(I){return typeof I}:function(I){return I&&typeof Symbol=="function"&&I.constructor===Symbol&&I!==Symbol.prototype?"symbol":typeof I},r=function(){function I(k,K){for(var R=0;R<K.length;R++){var B=K[R];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(k,B.key,B)}}return function(k,K,R){return K&&I(k.prototype,K),R&&I(k,R),k}}(),s=Zs,o=wu.exports,a=M(o),c=xn,l=_(c),u=Lc.exports,d=M(u),f=yn,p=_(f),g=ts,m=_(g),h=vn,v=M(h),y=ns,x=M(y);function _(I){if(I&&I.__esModule)return I;var k={};if(I!=null)for(var K in I)Object.prototype.hasOwnProperty.call(I,K)&&(k[K]=I[K]);return k.default=I,k}function M(I){return I&&I.__esModule?I:{default:I}}function P(I,k){if(!(I instanceof k))throw new TypeError("Cannot call a class as a function")}function F(I,k){if(!I)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k&&(typeof k=="object"||typeof k=="function")?k:I}function b(I,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof k);I.prototype=Object.create(k&&k.prototype,{constructor:{value:I,enumerable:!1,writable:!0,configurable:!0}}),k&&(Object.setPrototypeOf?Object.setPrototypeOf(I,k):I.__proto__=k)}var E={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},O=function(k){return k.code==="Tab"||k.keyCode===9},$=function(k){return k.code==="Escape"||k.keyCode===27},Q=0,G=function(I){b(k,I);function k(K){P(this,k);var R=F(this,(k.__proto__||Object.getPrototypeOf(k)).call(this,K));return R.setOverlayRef=function(B){R.overlay=B,R.props.overlayRef&&R.props.overlayRef(B)},R.setContentRef=function(B){R.content=B,R.props.contentRef&&R.props.contentRef(B)},R.afterClose=function(){var B=R.props,q=B.appElement,j=B.ariaHideApp,V=B.htmlOpenClassName,W=B.bodyOpenClassName,ne=B.parentSelector,re=ne&&ne().ownerDocument||document;W&&m.remove(re.body,W),V&&m.remove(re.getElementsByTagName("html")[0],V),j&&Q>0&&(Q-=1,Q===0&&p.show(q)),R.props.shouldFocusAfterRender&&(R.props.shouldReturnFocusAfterClose?(l.returnFocus(R.props.preventScroll),l.teardownScopedFocus()):l.popWithoutFocus()),R.props.onAfterClose&&R.props.onAfterClose(),x.default.deregister(R)},R.open=function(){R.beforeOpen(),R.state.afterOpen&&R.state.beforeClose?(clearTimeout(R.closeTimer),R.setState({beforeClose:!1})):(R.props.shouldFocusAfterRender&&(l.setupScopedFocus(R.node),l.markForFocusLater()),R.setState({isOpen:!0},function(){R.openAnimationFrame=requestAnimationFrame(function(){R.setState({afterOpen:!0}),R.props.isOpen&&R.props.onAfterOpen&&R.props.onAfterOpen({overlayEl:R.overlay,contentEl:R.content})})}))},R.close=function(){R.props.closeTimeoutMS>0?R.closeWithTimeout():R.closeWithoutTimeout()},R.focusContent=function(){return R.content&&!R.contentHasFocus()&&R.content.focus({preventScroll:!0})},R.closeWithTimeout=function(){var B=Date.now()+R.props.closeTimeoutMS;R.setState({beforeClose:!0,closesAt:B},function(){R.closeTimer=setTimeout(R.closeWithoutTimeout,R.state.closesAt-Date.now())})},R.closeWithoutTimeout=function(){R.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},R.afterClose)},R.handleKeyDown=function(B){O(B)&&(0,d.default)(R.content,B),R.props.shouldCloseOnEsc&&$(B)&&(B.stopPropagation(),R.requestClose(B))},R.handleOverlayOnClick=function(B){R.shouldClose===null&&(R.shouldClose=!0),R.shouldClose&&R.props.shouldCloseOnOverlayClick&&(R.ownerHandlesClose()?R.requestClose(B):R.focusContent()),R.shouldClose=null},R.handleContentOnMouseUp=function(){R.shouldClose=!1},R.handleOverlayOnMouseDown=function(B){!R.props.shouldCloseOnOverlayClick&&B.target==R.overlay&&B.preventDefault()},R.handleContentOnClick=function(){R.shouldClose=!1},R.handleContentOnMouseDown=function(){R.shouldClose=!1},R.requestClose=function(B){return R.ownerHandlesClose()&&R.props.onRequestClose(B)},R.ownerHandlesClose=function(){return R.props.onRequestClose},R.shouldBeClosed=function(){return!R.state.isOpen&&!R.state.beforeClose},R.contentHasFocus=function(){return document.activeElement===R.content||R.content.contains(document.activeElement)},R.buildClassName=function(B,q){var j=(typeof q>"u"?"undefined":n(q))==="object"?q:{base:E[B],afterOpen:E[B]+"--after-open",beforeClose:E[B]+"--before-close"},V=j.base;return R.state.afterOpen&&(V=V+" "+j.afterOpen),R.state.beforeClose&&(V=V+" "+j.beforeClose),typeof q=="string"&&q?V+" "+q:V},R.attributesFromObject=function(B,q){return Object.keys(q).reduce(function(j,V){return j[B+"-"+V]=q[V],j},{})},R.state={afterOpen:!1,beforeClose:!1},R.shouldClose=null,R.moveFromContentToOverlay=null,R}return r(k,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(R,B){this.props.isOpen&&!R.isOpen?this.open():!this.props.isOpen&&R.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!B.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var R=this.props,B=R.appElement,q=R.ariaHideApp,j=R.htmlOpenClassName,V=R.bodyOpenClassName,W=R.parentSelector,ne=W&&W().ownerDocument||document;V&&m.add(ne.body,V),j&&m.add(ne.getElementsByTagName("html")[0],j),q&&(Q+=1,p.hide(B)),x.default.register(this)}},{key:"render",value:function(){var R=this.props,B=R.id,q=R.className,j=R.overlayClassName,V=R.defaultStyles,W=R.children,ne=q?{}:V.content,re=j?{}:V.overlay;if(this.shouldBeClosed())return null;var U={ref:this.setOverlayRef,className:this.buildClassName("overlay",j),style:t({},re,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Y=t({id:B,ref:this.setContentRef,style:t({},ne,this.props.style.content),className:this.buildClassName("content",q),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",t({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Me=this.props.contentElement(Y,W);return this.props.overlayElement(U,Me)}}]),k}(s.Component);G.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},G.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(v.default),a.default.instanceOf(h.SafeHTMLCollection),a.default.instanceOf(h.SafeNodeList),a.default.arrayOf(a.default.instanceOf(v.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=G,i.exports=e.default})(Pc,Pc.exports);function Ng(){var i=this.constructor.getDerivedStateFromProps(this.props,this.state);i!=null&&this.setState(i)}function kg(i){function e(t){var n=this.constructor.getDerivedStateFromProps(i,t);return n??null}this.setState(e.bind(this))}function Bg(i,e){try{var t=this.props,n=this.state;this.props=i,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,n)}finally{this.props=t,this.state=n}}Ng.__suppressDeprecationWarning=!0;kg.__suppressDeprecationWarning=!0;Bg.__suppressDeprecationWarning=!0;function ZD(i){var e=i.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof i.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return i;var t=null,n=null,r=null;if(typeof e.componentWillMount=="function"?t="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(t="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?n="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(n="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?r="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(r="UNSAFE_componentWillUpdate"),t!==null||n!==null||r!==null){var s=i.displayName||i.name,o=typeof i.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+o+" but also contains the following legacy lifecycles:"+(t!==null?`
  `+t:"")+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof i.getDerivedStateFromProps=="function"&&(e.componentWillMount=Ng,e.componentWillReceiveProps=kg),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=Bg;var a=e.componentDidUpdate;e.componentDidUpdate=function(l,u,d){var f=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;a.call(this,l,u,f)}}return i}const JD=Object.freeze(Object.defineProperty({__proto__:null,polyfill:ZD},Symbol.toStringTag,{value:"Module"})),QD=jh(JD);Object.defineProperty(qi,"__esModule",{value:!0});qi.bodyOpenClassName=qi.portalClassName=void 0;var kh=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},eP=function(){function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),Ug=Zs,ga=to(Ug),tP=Zs,va=to(tP),nP=wu.exports,Ee=to(nP),iP=Pc.exports,Bh=to(iP),rP=yn,sP=aP(rP),di=vn,Uh=to(di),oP=QD;function aP(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);return e.default=i,e}function to(i){return i&&i.__esModule?i:{default:i}}function lP(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function zh(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i}function cP(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)}var uP=qi.portalClassName="ReactModalPortal",fP=qi.bodyOpenClassName="ReactModal__Body--open",Pi=di.canUseDOM&&va.default.createPortal!==void 0,Vh=function(e){return document.createElement(e)},Hh=function(){return Pi?va.default.createPortal:va.default.unstable_renderSubtreeIntoContainer};function Oo(i){return i()}var no=function(i){cP(e,i);function e(){var t,n,r,s;lP(this,e);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return s=(n=(r=zh(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),r),r.removePortal=function(){!Pi&&va.default.unmountComponentAtNode(r.node);var l=Oo(r.props.parentSelector);l&&l.contains(r.node)?l.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(l){r.portal=l},r.renderPortal=function(l){var u=Hh(),d=u(r,ga.default.createElement(Bh.default,kh({defaultStyles:e.defaultStyles},l)),r.node);r.portalRef(d)},n),zh(r,s)}return eP(e,[{key:"componentDidMount",value:function(){if(!!di.canUseDOM){Pi||(this.node=Vh("div")),this.node.className=this.props.portalClassName;var n=Oo(this.props.parentSelector);n.appendChild(this.node),!Pi&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(n){var r=Oo(n.parentSelector),s=Oo(this.props.parentSelector);return{prevParent:r,nextParent:s}}},{key:"componentDidUpdate",value:function(n,r,s){if(!!di.canUseDOM){var o=this.props,a=o.isOpen,c=o.portalClassName;n.portalClassName!==c&&(this.node.className=c);var l=s.prevParent,u=s.nextParent;u!==l&&(l.removeChild(this.node),u.appendChild(this.node)),!(!n.isOpen&&!a)&&!Pi&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!di.canUseDOM||!this.node||!this.portal)){var n=this.portal.state,r=Date.now(),s=n.isOpen&&this.props.closeTimeoutMS&&(n.closesAt||r+this.props.closeTimeoutMS);s?(n.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-r)):this.removePortal()}}},{key:"render",value:function(){if(!di.canUseDOM||!Pi)return null;!this.node&&Pi&&(this.node=Vh("div"));var n=Hh();return n(ga.default.createElement(Bh.default,kh({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(n){sP.setElement(n)}}]),e}(Ug.Component);no.propTypes={isOpen:Ee.default.bool.isRequired,style:Ee.default.shape({content:Ee.default.object,overlay:Ee.default.object}),portalClassName:Ee.default.string,bodyOpenClassName:Ee.default.string,htmlOpenClassName:Ee.default.string,className:Ee.default.oneOfType([Ee.default.string,Ee.default.shape({base:Ee.default.string.isRequired,afterOpen:Ee.default.string.isRequired,beforeClose:Ee.default.string.isRequired})]),overlayClassName:Ee.default.oneOfType([Ee.default.string,Ee.default.shape({base:Ee.default.string.isRequired,afterOpen:Ee.default.string.isRequired,beforeClose:Ee.default.string.isRequired})]),appElement:Ee.default.oneOfType([Ee.default.instanceOf(Uh.default),Ee.default.instanceOf(di.SafeHTMLCollection),Ee.default.instanceOf(di.SafeNodeList),Ee.default.arrayOf(Ee.default.instanceOf(Uh.default))]),onAfterOpen:Ee.default.func,onRequestClose:Ee.default.func,closeTimeoutMS:Ee.default.number,ariaHideApp:Ee.default.bool,shouldFocusAfterRender:Ee.default.bool,shouldCloseOnOverlayClick:Ee.default.bool,shouldReturnFocusAfterClose:Ee.default.bool,preventScroll:Ee.default.bool,parentSelector:Ee.default.func,aria:Ee.default.object,data:Ee.default.object,role:Ee.default.string,contentLabel:Ee.default.string,shouldCloseOnEsc:Ee.default.bool,overlayRef:Ee.default.func,contentRef:Ee.default.func,id:Ee.default.string,overlayElement:Ee.default.func,contentElement:Ee.default.func};no.defaultProps={isOpen:!1,portalClassName:uP,bodyOpenClassName:fP,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return ga.default.createElement("div",e,t)},contentElement:function(e,t){return ga.default.createElement("div",e,t)}};no.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,oP.polyfill)(no);qi.default=no;(function(i,e){Object.defineProperty(e,"__esModule",{value:!0});var t=qi,n=r(t);function r(s){return s&&s.__esModule?s:{default:s}}e.default=n.default,i.exports=e.default})(Dc,Dc.exports);const zg=$h(Dc.exports),No=i=>{const[e,t]=Pn(!1);return pi(()=>{i.ref_!==void 0&&(i.ref_.current={showModal:()=>{t(!0)},close:()=>{t(!1),i.onClose?.()}})},[i.ref_]),C(zg,{isOpen:e,closeTimeoutMS:300,onRequestClose:()=>{t(!1),i.onClose?.()},className:"absolute outline-none top-1/2 left-1/2 right-auto bottom-auto mr-[-50%] [transform:translate(-50%,-50%)] [max-width:90vw] [max-height:90vh] overflow-auto "+(i.class??""),children:i.children})},Gh=new Map(Xn(dg).map((i,e)=>[i,e])),dP=()=>{const i=He($e,e=>[...new Set(Xn(e.availableTutorials)).difference(new Set(Xn(e.completedTutorials)))].sort((t,n)=>Gh.get(t)-Gh.get(n))[0]);return C("div",{style:{opacity:i===void 0?"0":"1"},class:"absolute w-[90%] py-3 left-[5%] px-16 text-center top-[70%] [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none z-10 window-popup",children:i&&C(Qe,{children:[C("i",{class:"ti ti-message-report absolute left-4 top-0 [font-size:250%]"}),C("span",{class:"[&>b]:text-orange-300",children:dg[i]})]})})},Mn=Js(Qr()(du(()=>({news:null,usePowerSaveMode:!0,sfxVolume:1,bgmVolume:1,quality:"standard"}),{name:"acgDOMStore",version:3})),(i,e,t)=>({showNews:n=>{t(r=>{r.news=[...n]})},hideNews:()=>{t(n=>{n.news=null})}})),Kt=Js(Qr()(()=>({loadingMessage:{},enemyStatus:null,powerSaveMode:!1})),(i,e,t)=>({setLoadingMessage:(n,r)=>{t(s=>{s.loadingMessage[n]=r})},removeLoadingMessage:n=>{t(r=>{delete r.loadingMessage[n]})},setEnemyStatus:n=>{t(r=>{r.enemyStatus=n,r.enemyStatus.hp=Math.max(0,Math.round(r.enemyStatus.hp))})},updatePowerSaveModeState:()=>{t(n=>{n.powerSaveMode=Mn.getState().usePowerSaveMode&&(document.visibilityState==="hidden"||!document.hasFocus())})}}));Kt.getState().updatePowerSaveModeState();document.addEventListener("visibilitychange",()=>{Kt.getState().updatePowerSaveModeState()});window.addEventListener("blur",()=>{Kt.getState().updatePowerSaveModeState()});window.addEventListener("focus",()=>{Kt.getState().updatePowerSaveModeState()});const hP=Array(1e4).fill(0).map(()=>Array(Math.floor(Math.random()*6)+2).fill(0).map(()=>"abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)]).join("")).join(" "),pP=()=>{const i=He(Kt,e=>e.enemyStatus,ca);return i?C("div",{class:"px-3 pt-1 pb-3 window",children:[C("h2",{class:"mb-2 tracking-wide",children:[C("i",{class:"ti ti-chart-line"})," Enemy Stats"]}),C("div",{children:C("table",{class:"tracking-wide",children:[C("tr",{children:[C("td",{class:"pr-1",children:C("i",{class:"ti ti-float-none"})}),C("td",{children:i.name})]}),C("tr",{children:[C("td",{class:"pr-1",children:C("i",{class:"ti ti-heart"})}),C("td",{children:i.hp})]}),C("tr",{children:[C("td",{class:"pr-1",children:C("i",{class:"ti ti-moneybag"})}),C("td",{children:i.money})]}),C("tr",{children:[C("td",{class:"pr-1",children:C("i",{class:"ti ti-notes"})}),C("td",{children:Xn(i.items).length===0?"-":nr(i.items).map(([e,t])=>C(Qe,{children:[e," ",t]}))})]})]})})]}):C(Qe,{})},mP=()=>{const i=He($e,e=>e.items);return C("div",{class:"px-3 pt-1 pb-3 window",children:[C("h2",{class:"mb-2 tracking-wide",children:[C("i",{class:"ti ti-notes"})," Items"]}),C("table",{class:"w-full",children:nr(i).map(([e,t])=>C("tr",{onMouseEnter:()=>{fa(`item-${e}`,i2[e])},onMouseLeave:()=>{da(`item-${e}`)},children:[C("td",{children:[C("i",{class:"ti ti-meat"})," ",e]}),C("td",{class:"text-right",children:t})]}))})]})},gP=()=>{const i=He($e,e=>e.canTranscend);return C(Qe,{children:i&&C("div",{class:"px-3 pt-1 pb-3 window gold",children:[C("p",{class:"text-xs mb-2",children:"You have reached the point of singularity and can transcended to a higher plane of existence."}),C("button",{class:"w-full",tabIndex:-1,onClick:()=>{se().transcend()},children:"Show Bonus"})]})})},vP=()=>{const i=He($e,e=>e.getExplorationLv());return C("table",{children:[C("tr",{children:[C("td",{children:C("i",{class:"ti ti-heart"})}),C("td",{children:["\xD7",i," \u2192 \xD7",i-1]})]}),C("tr",{children:[C("td",{children:C("i",{class:"ti ti-moneybag"})}),C("td",{children:["\xD7",i," \u2192 \xD7",i-1]})]}),C("tr",{children:[C("td",{children:C("i",{class:"ti ti-notes"})}),C("td",{children:["\xD7",i," \u2192 \xD7",i-1]})]})]})},_P=()=>{const i=He($e,e=>e.getExplorationLv());return C("table",{children:[C("tr",{children:[C("td",{children:C("i",{class:"ti ti-heart"})}),C("td",{children:["\xD7",i," \u2192 \xD7",i+1]})]}),C("tr",{children:[C("td",{children:C("i",{class:"ti ti-moneybag"})}),C("td",{children:["\xD7",i," \u2192 \xD7",i+1]})]}),C("tr",{children:[C("td",{children:C("i",{class:"ti ti-notes"})}),C("td",{children:["\xD7",i," \u2192 \xD7",i+1]})]})]})},Wh=()=>{const[i,e]=Pn(null),[t,n]=Pn("default");return pi(()=>{const r=o=>{e([o.clientX,o.clientY]);const a=document.elementFromPoint(o.clientX,o.clientY);n(a?.matches(".pointer,.pointer *,button,a,input,dialog")?"pointer":"default")},s=()=>{e(null)};return window.addEventListener("mousemove",r),document.body.addEventListener("mouseleave",s),window.addEventListener("blur",s),()=>{window.removeEventListener("mousemove",r),document.body.removeEventListener("mouseleave",s),window.removeEventListener("blur",s)}},[]),i?C("img",{src:t==="default"?rD:sD,style:{left:i[0]-10,top:i[1]-4},class:"absolute z-20 pointer-events-none"}):C(Qe,{})},xP=()=>{const i=He(Mn),e=Fi(null),t=Fi(null),n=Fi(null),r=Fi(null),[s,o]=Pn(""),a=He($e,()=>mg(nr(Gr).map(([h,v])=>[h,v.visible()])),ca),c=He(Kt,h=>h.loadingMessage),l=He($e,h=>h.getWeather(),ca),u=He($e,h=>Math.ceil((h.weatherEffectWillBeEnabledInLessThan[h.stage]??Number.MAX_SAFE_INTEGER)/ra/60)),d=He($e,h=>h.transcending),f=He(Kt,h=>h.powerSaveMode),p=He($e,h=>h.stage),g=He($e,h=>h.upgrades.Vacuum>0),m=He($e,h=>h.getExplorationLv());return pi(()=>{for(const h of["./audio/credit.html","./models/credit.html","./font/credit.html","./lib_credit.html","./lib_credit2.html"])fetch(h).then(v=>v.text()).then(v=>{o(y=>y+HC.link(v))}).catch(console.error)},[]),pi(()=>{i.news!==null&&setTimeout(()=>{!e.current||e.current.showModal()},2e3)},[i.news]),d?C("div",{class:"absolute window w-full h-full",children:[C("div",{class:"m-auto w-fit h-fit text-center p-[30vh]",children:[C("h2",{children:"Transcending..."}),C("p",{class:"my-4",children:"Enemies in the next world will have 500x the HP and money."}),C("div",{class:"float-right",children:[C("span",{class:"gold",children:C("button",{class:"px-8",onClick:()=>{se().confirmTranscending()},children:"Confirm"})}),C("button",{class:"px-8 ml-2",onClick:()=>{se().cancelTranscending()},children:"Cancel"})]})]}),C(Wh,{})]}):C(Qe,{children:[C("div",{class:"absolute left-[-4px] top-[-2px] w-44 sm:w-72 [&>*]:mt-3",children:[C(S2,{}),g&&C(mP,{}),C(gP,{})]}),C(dP,{}),f&&C("div",{class:"absolute text-center w-full top-[45%] select-none [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none z-10",children:C("div",{class:"relative py-3 px-8 mx-auto w-fit window-popup",children:[C("h2",{class:"tracking-wide text-orange-300",children:[C("i",{class:"ti ti-zzz"})," Power Save Mode"]}),C("p",{class:"[font-size:60%] tracking-wide",children:["Power Save Mode stops rendering the game,",C("br",{}),"but the game still runs in the background."]})]})}),C("div",{class:"absolute right-[-4px] top-[-2px] min-w-[7rem] sm:min-w-[13rem] [&>*]:mt-3",children:[ks(a).some(h=>h)&&C("div",{class:"px-3 pt-1 pb-3 window",children:[C("h2",{class:"mb-2 tracking-wide",children:[C("i",{class:"ti ti-map-2"})," Stages"]}),C("div",{class:"[&>*:not(:last-child)]:mb-1",children:Xn(Gr).map(h=>C("button",{tabIndex:-1,class:"w-full"+(p===h?" button-primary":""),onClick:()=>{se().setStageTransitingTo(h)},disabled:!a[h]||p===h,children:a[h]?h:"???"}))})]}),l!==null&&C("div",{class:"px-3 pt-1 pb-3 window",children:[C("h2",{class:"mb-2 tracking-wide",children:[C("i",{class:"ti ti-sun"})," Weather"]}),C("div",{children:C("table",{children:[C("tr",{children:[C("td",{class:"pr-1",children:!l.enabled&&">"}),C("td",{class:"tracking-wider "+(l.enabled?"":"font-bold"),children:"Normal"})]}),C("tr",{children:[C("td",{class:"pr-1",children:l.enabled&&">"}),C("td",{class:"tracking-wider "+(l.enabled?"font-bold":""),children:[l.name,!l.enabled&&C("span",{class:"text-gray-300",children:[" (in ","<"+u," min",u!==1&&"s",")"]})]})]})]})})]}),C(pP,{}),g&&p!=="Final"&&C("div",{class:"px-3 pt-1 pb-3 window",children:[C("h2",{class:"mb-2 tracking-wide",children:[C("i",{class:"ti ti-route"})," Explore: ",C("span",{class:"tracking-tight",children:["Lv. ",m]})]}),C("button",{class:"block w-full text-left pl-[2rem] sm:pl-[3.3rem]",onClick:()=>{se().exploreNext()},onMouseEnter:()=>{fa("explorationNext",C(_P,{}))},onMouseLeave:()=>{da("explorationNext")},children:[C("i",{class:"ti ti-arrow-forward"})," Next",C("span",{class:"[font-size:80%] tracking-tighter",children:[C("i",{class:"ti ti-meat ml-3 mr-1"}),yc(m)]})]}),m>=2&&C("button",{class:"block w-full text-left pl-[2rem] sm:pl-[3.3rem] mt-1",onClick:()=>{se().explorePrev()},onMouseEnter:()=>{fa("explorationPrev",C(vP,{}))},onMouseLeave:()=>{da("explorationPrev")},children:[C("i",{class:"ti ti-arrow-back"})," Prev"]})]})]}),C(D2,{}),C(No,{class:"window p-5",ref_:n,children:[C("p",{children:"Are you sure you want to reset your save data?"}),C("div",{class:"float-right mt-4",children:[C("button",{class:"px-4 button-primary",onClick:()=>{y2(),location.reload()},children:"Reset"}),C("button",{class:"px-4 ml-2",onClick:()=>{n.current.close()},children:"Cancel"})]})]}),C("div",{class:"absolute left-[-4px] bottom-[-2px] px-5 pb-1 window tracking-wide [&>*:not(:first-child)]:ml-5",children:[C("span",{class:"pointer hover:text-white",onClick:()=>{t.current.showModal()},children:[C("i",{class:"ti ti-license"})," Credits"]}),C("span",{class:"pointer hover:text-white",onClick:()=>{r.current.showModal()},children:[C("i",{class:"ti ti-tool"})," Options"]})]}),C(No,{ref_:t,class:"window p-5",children:[C("h1",{class:"text-xl mb-2 tracking-wider w-full text-center",children:"Credits"}),C("ul",{dangerouslySetInnerHTML:{__html:s??""},class:"w-full h-full block [&_li]:mb-2 [&_h2]:font-bold [&_a]:text-violet-300 select-text list-disc ml-5"})]}),C(No,{ref_:r,class:"window py-4 px-10",children:[C("h1",{class:"text-xl mb-2 tracking-wider w-full text-center",children:"Options"}),C("table",{children:[C("tr",{children:[C("td",{class:"pr-4 text-right",title:"Power Save Mode stops rendering the game,<br />but the game still runs in the background.",children:"Power Save Mode"}),C("td",{children:C("label",{class:"pointer",children:[C("input",{type:"checkbox",checked:i.usePowerSaveMode,onChange:h=>{Mn.setState({usePowerSaveMode:h.currentTarget.checked})}})," enabled"]})})]}),C("tr",{children:[C("td",{class:"pr-4 text-right",children:"Quality"}),C("td",{class:"[&>*:not(:first-child)]:ml-2",children:[C("label",{children:[C("input",{type:"radio",name:"quality",value:"high",checked:i.quality==="high",onChange:h=>{Mn.setState({quality:h.currentTarget.value})}})," High"]}),C("label",{children:[C("input",{type:"radio",name:"quality",value:"standard",checked:i.quality==="standard",onChange:h=>{Mn.setState({quality:h.currentTarget.value})}})," Standard"]})]})]}),C("tr",{children:[C("td",{class:"pr-4 text-right",children:"Sound Effect"}),C("td",{children:C("input",{type:"range",class:"w-32 align-middle",value:i.sfxVolume,min:0,max:1,step:.05,onChange:h=>{Mn.setState({sfxVolume:+h.currentTarget.value})}})})]}),C("tr",{children:[C("td",{class:"pr-4 text-right",children:"Background Music"}),C("td",{children:C("input",{type:"range",class:"w-32 align-middle",value:i.bgmVolume,min:0,max:1,step:.05,onChange:h=>{Mn.setState({bgmVolume:+h.currentTarget.value})}})})]})]}),C("div",{class:"pointer text-orange-300 hover:text-orange-400 mt-4",onClick:()=>{r.current?.close(),n.current?.showModal()},children:[C("i",{class:"ti ti-eraser"})," Reset Progress"]})]}),C(No,{ref_:e,class:"bg-gray-100 w-[400px] h-[620px] p-5 box-border shadow-2xl select-none",onClose:()=>{Mn.getState().hideNews(),se().addTutorial("nextStage")},children:[i.news&&C("div",{class:"[line-height:1.2] [font-size:12px] text-justify overflow-y-hidden h-full [font-family:KottaOne] [-webkit-text-stroke:3px_rgba(0,0,0,0.05)]",children:[C("h2",{class:"text-lg tracking-wide font-bold mb-4 [border-bottom:3px_solid_rgb(130,130,130)] text-center",children:i.news[0]}),C("span",{children:i.news[1]}),C("span",{class:"text-gray-500",children:[" ",hP]})]}),C("button",{class:"sm:hidden absolute right-2 bottom-2 px-4",onClick:()=>{e.current.close()},children:"Close"})]}),Object.keys(c).length>0&&C("div",{class:"text-gray-100 absolute top-[35%] left-0 w-full text-center whitespace-pre",children:ks(c).join(`
`)}),C(b2,{}),C(Wh,{})]})};zg.setAppElement(document.body);Br(C(xP,{}),document.body);const yP=`uniform bool daytime;

void main() {
    super();
    if (daytime) {
        gl_FragColor.rgb = vec3(0.2, 0.2, 0.6);
    } else {
        gl_FragColor.rgb = vec3(0.2, 0.2, 0.3);
    }
}
`,bP=async i=>{const e=await vi("models/hammer_notexture.glb",.03);e.position.set(-.01,0,-.06);const t={daytime:{value:se().stage==="Earth"}};ir(r=>{t.daytime.value=r.stage==="Earth"}),La(e,{uniforms:t,fragmentShader:yP}),Dt(e,{noDiffusion:!0});const n=new rr("hammer",new Ve().add(e)).onClone(r=>{ht.add(s=>{r.rotation.x+=Math.random()*.03,r.rotation.y=s*.01,r.rotation.z=Math.PI/2})}).onAllocate(()=>{const r=(Math.random()-.5)*2*Math.PI/4;return{time:0,velocity:new L(Math.cos(r),Math.sin(r),0)}});return Dt(n,{noDiffusion:!0}),er.add(r=>{const s=hu(se()).Hammer;s&&r%s===0&&n.allocate().position.copy(i.position);for(const o of n.children)o.userData.time++,o.position.x+=o.userData.velocity.x*.01,o.position.y=Math.sin(o.userData.time*.15)*.03,o.position.z+=o.userData.velocity.y*.01,(o.position.x>4||Math.abs(o.position.z)>1)&&o.free()}),Ca.add(r=>{for(const s of r)for(const o of n.children)s.position.distanceTo(o.position)<s.userData.radius+.02&&(s.userData.hp-=Ra(se()).Hammer??0,o.free())}),n},wP=`in vec2 pos;
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
`,SP=`out vec2 pos;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    pos = position.xy;
}
`,MP=async i=>{const e={time:{value:0},count:{value:0}},t=on(new nt(new $s(1,1),new ct({blending:qo,transparent:!0,uniforms:e,vertexShader:SP,fragmentShader:wP})),{rotateY:-Math.PI/2,rotateX:-Math.PI/2,scale:{set:[.25,2,0]},position:{set:[1,.01,0]}});Dt(t),t.renderOrder=1,ht.add(s=>{e.time.value=s,e.count.value=se().upgrades.Laser,on(t,{position:{setX:i.position.x+1,setY:i.position.y+.01,setZ:i.position.z}})});const n=new rr("hitEffect",Dt(new nt(new Ta(.006),new En({color:16738047})))),r=new WeakMap;return Ca.add(s=>{for(const o of s)Math.abs(o.position.z-i.position.z)<o.userData.radius&&Math.abs(o.position.y-i.position.y)<o.userData.radius&&o.position.x>i.position.x?(r.emplace(o,{insert:()=>n.allocate()}).position.copy(o.position.clone()).setZ(i.position.z),o.userData.hp-=Ra(se()).Laser,Kt.getState().setEnemyStatus({hp:o.userData.hp,name:o.userData.name,money:o.userData.money,items:o.userData.items})):r.has(o)&&(r.get(o).free(),r.delete(o))}),su.add(s=>{r.get(s)?.free(),r.delete(s)}),new Wn().add(t,n)},TP=`uniform bool daytime;

void main() {
    super();
    if (daytime) {
        gl_FragColor.rgb *= vec3(0.8);
    } else {
        gl_FragColor.rgb *= vec3(2.0);
    }
}
`,EP=async i=>{const e=await vi("models/ballistic_missile.glb",.03);e.position.set(-.01,0,-.06);const t={daytime:{value:se().stage==="Earth"}};ir(r=>{t.daytime.value=r.stage==="Earth"}),La(e,{uniforms:t,fragmentShader:TP}),Dt(e);const n=new rr("missile",new Ve().add(e)).onAllocate(()=>{const r=(Math.random()-.5)*2*Math.PI/4;return{time:0,velocity:new L(Math.cos(r),Math.sin(r),0)}});return Dt(n),er.add(r=>{const s=hu(se()).Missile;s&&r%s===0&&(se().items.Scrap??0)>=1e3&&(se().addItems({Scrap:-1e3}),n.allocate().position.copy(i.position));for(const o of n.children)o.userData.time++,o.position.x+=o.userData.velocity.x*.02,o.position.z+=o.userData.velocity.y*.02,o.lookAt(o.position.clone().add(new L(o.userData.velocity.x,0,o.userData.velocity.y))),(o.position.x>4||Math.abs(o.position.z)>1)&&o.free()}),Ca.add(r=>{for(const s of r)for(const o of n.children)s.position.distanceTo(o.position)<s.userData.radius+.02&&(s.userData.hp-=Ra(se()).Missile??0,o.free())}),n},AP=[bP,MP,EP];{const i=new BroadcastChannel("acg");i.addEventListener("message",e=>{e.data==="hello"&&(location.href="./tab_already_open.html")}),i.postMessage("hello")}x2(!1);const _a=new SE,_i=new sm({antialias:!0});_i.outputEncoding=qe;_i.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(_i.domElement);const Vs=i=>(_a.add(i),i),yt=Vs(await T3(_i.domElement));_a.add(k3(yt));for(const[i,e]of nr(Gr)){const t=Vs(e.createModel());t.visible=se().stage===i,ir((n,r)=>{n.stage!==r.stage&&(t.visible=n.stage===i)})}const Vg=[-.5,.6,0],$t=on(new Nt(70,window.innerWidth/window.innerHeight,.01,10),{position:{set:Vg}}),{enemies:Tu}=await Bs({enemies:Bs(mg(nr(Gr).map(([i,e])=>[i,e.createEnemyPools().then(t=>{for(const n of ks(t))n instanceof Ve&&Vs(n);return t})]))),weapons:Promise.all(AP.map(i=>i(yt).then(Vs)))}),wr=()=>ks(Tu).flatMap(i=>i.weatherAlive?[...i.alive.children,...i.weatherAlive.children]:[...i.alive.children]),Hg=()=>ks(Tu).flatMap(i=>i.weatherDead?[...i.dead.children,...i.weatherDead.children]:[...i.dead.children]);ir((i,e)=>{if(!(i.stage===e.stage&&i.transcendence===e.transcendence)){for(const t of wr())t.free(),su.forEach(n=>n(t));for(const t of Hg())t.free()}});Kt.getState().setLoadingMessage("loadingModels","Loading models...");await new Promise(i=>setTimeout(i,0));Vs(H3());const Li=new pm(_i),Gg=X3();{const i=new fA(_a,$t);Li.addPass(i),Tr("unrealbloom")&&Li.addPass(new $i(new de(256,256),.2,0,0)),Tr("selective unrealbloom")&&Li.addPass(O3(_i,_a,$t,i)),Tr("rain")&&Li.addPass($3(Tr("rain.blur"))),Li.addPass(Gg.pass)}er.add(()=>{const{stageTransitingTo:i}=se();if(i===null)return;const e=Xn(Gr).indexOf(i)>=Xn(Gr).indexOf(se().stage);e&&(yt.position.x+=.01+Math.max(0,yt.position.x)*.08,$t.rotateOnWorldAxis(new L(0,1,0),-.02),$t.rotateOnWorldAxis(new L(0,0,1),.003),$t.position.z-=.01),(yt.position.x>2||!e)&&Gg.play(()=>{yt.position.x=0,$t.position.set(...Vg)})});window.addEventListener("resize",()=>{$t.aspect=window.innerWidth/window.innerHeight,$t.updateProjectionMatrix(),_i.setSize(window.innerWidth,window.innerHeight),Li.setSize(window.innerWidth,window.innerHeight)});const CP=null;{const i=P2(),e={render:0,update:0};let t=0;_i.setAnimationLoop(n=>{const r=!se().transcending&&!i(),s=!se().transcending&&!Kt.getState().powerSaveMode;if(CP?.update(),!r)e.update=Date.now();else{const o=Math.floor((n-e.update)/(1e3/ra));e.update+=o*(1e3/ra);for(let a=0;a<o;a++){Tu[se().stage].spawn(t),wr().forEach(l=>l.userData.update()),er.forEach(l=>l(t));{const l=wr();Ca.forEach(u=>u(l))}for(const l of wr())(l.position.x<-1||l.userData.hp<=0)&&(l.userData.hp<=0&&(l.userData.onKilled(),se().incrementKillCount(l.userData.name),se().addMoney(l.userData.money),se().addItems(l.userData.items)),l.free(),su.forEach(u=>u(l))),l.userData.time++;for(const l of Hg())l.position.y-=.001*l.userData.time,l.rotateZ(.1*(Math.random()-.5)),l.userData.time++,l.userData.time>100&&l.free();const c=(l,u)=>l.length===0?void 0:l.reduce((d,f)=>u(d)<u(f)?d:f,l[0]);(!yt.userData.autopilotTarget||!wr().includes(yt.userData.autopilotTarget)||yt.userData.autopilotTarget.position.x<yt.position.x)&&(yt.userData.autopilotTarget=c(wr().filter(l=>l.position.x>yt.position.x+.3&&l.userData.name!=="Weather Effect UFO"),l=>l.position.x)),se().countdown(),t++}}if(!s)e.render=Date.now();else{const o=n-e.render;e.render=n,s&&ht.forEach(a=>a(n,o,$t))}r&&s&&se().stageTransitingTo===null&&($t.position.z=yt.position.z,$t.lookAt(se().stage==="Final"?new L(.5,0,yt.position.z):new L(0,0,yt.position.z)),$t.rotation.x+=yt.userData.velocity.x*.05,$t.rotation.y-=Math.abs(yt.userData.velocity.y*.02)),s&&(gm.forEach(o=>o()),Li.render())})}const Eu=()=>{const i=document.querySelector("audio#rainAudio");i.loop=!0,i.play()};window.addEventListener("click",Eu);window.addEventListener("keydown",Eu);Eu();Kt.getState().removeLoadingMessage("loadingModels");se().addTutorial("wasd");window.dispatchEvent(new UIEvent("resize"));
