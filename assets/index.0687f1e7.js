/* empty css              */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var oc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function l0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function c0(i){var e=i.default;if(typeof e=="function"){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var ao=function(i){return i&&i.Math==Math&&i},qn=ao(typeof globalThis=="object"&&globalThis)||ao(typeof window=="object"&&window)||ao(typeof self=="object"&&self)||ao(typeof oc=="object"&&oc)||function(){return this}()||Function("return this")(),$c={},Yn=function(i){try{return!!i()}catch{return!0}},u0=Yn,Yi=!u0(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),h0=Yn,Xc=!h0(function(){var i=function(){}.bind();return typeof i!="function"||i.hasOwnProperty("prototype")}),f0=Xc,lo=Function.prototype.call,qt=f0?lo.bind(lo):function(){return lo.apply(lo,arguments)},rp={},sp={}.propertyIsEnumerable,op=Object.getOwnPropertyDescriptor,d0=op&&!sp.call({1:2},1);rp.f=d0?function(e){var t=op(this,e);return!!t&&t.enumerable}:sp;var ap=function(i,e){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:e}},lp=Xc,cp=Function.prototype,ac=cp.call,p0=lp&&cp.bind.bind(ac,ac),Pn=lp?p0:function(i){return function(){return ac.apply(i,arguments)}},up=Pn,m0=up({}.toString),g0=up("".slice),qc=function(i){return g0(m0(i),8,-1)},v0=Pn,_0=Yn,x0=qc,Wa=Object,y0=v0("".split),b0=_0(function(){return!Wa("z").propertyIsEnumerable(0)})?function(i){return x0(i)=="String"?y0(i,""):Wa(i)}:Wa,Ea=function(i){return i==null},w0=Ea,M0=TypeError,hp=function(i){if(w0(i))throw M0("Can't call method on "+i);return i},S0=b0,T0=hp,Yc=function(i){return S0(T0(i))},lc=typeof document=="object"&&document.all,E0=typeof lc>"u"&&lc!==void 0,fp={all:lc,IS_HTMLDDA:E0},dp=fp,A0=dp.all,Yt=dp.IS_HTMLDDA?function(i){return typeof i=="function"||i===A0}:function(i){return typeof i=="function"},Ou=Yt,pp=fp,C0=pp.all,Ys=pp.IS_HTMLDDA?function(i){return typeof i=="object"?i!==null:Ou(i)||i===C0}:function(i){return typeof i=="object"?i!==null:Ou(i)},ja=qn,D0=Yt,P0=function(i){return D0(i)?i:void 0},Kn=function(i,e){return arguments.length<2?P0(ja[i]):ja[i]&&ja[i][e]},R0=Pn,mp=R0({}.isPrototypeOf),L0=Kn,I0=L0("navigator","userAgent")||"",gp=qn,$a=I0,Nu=gp.process,Bu=gp.Deno,ku=Nu&&Nu.versions||Bu&&Bu.version,Uu=ku&&ku.v8,fn,ea;Uu&&(fn=Uu.split("."),ea=fn[0]>0&&fn[0]<4?1:+(fn[0]+fn[1]));!ea&&$a&&(fn=$a.match(/Edge\/(\d+)/),(!fn||fn[1]>=74)&&(fn=$a.match(/Chrome\/(\d+)/),fn&&(ea=+fn[1])));var F0=ea,zu=F0,O0=Yn,vp=!!Object.getOwnPropertySymbols&&!O0(function(){var i=Symbol();return!String(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&zu&&zu<41}),N0=vp,_p=N0&&!Symbol.sham&&typeof Symbol.iterator=="symbol",B0=Kn,k0=Yt,U0=mp,z0=_p,H0=Object,xp=z0?function(i){return typeof i=="symbol"}:function(i){var e=B0("Symbol");return k0(e)&&U0(e.prototype,H0(i))},V0=String,Aa=function(i){try{return V0(i)}catch{return"Object"}},G0=Yt,W0=Aa,j0=TypeError,_n=function(i){if(G0(i))return i;throw j0(W0(i)+" is not a function")},$0=_n,X0=Ea,Kc=function(i,e){var t=i[e];return X0(t)?void 0:$0(t)},Xa=qt,qa=Yt,Ya=Ys,q0=TypeError,Y0=function(i,e){var t,n;if(e==="string"&&qa(t=i.toString)&&!Ya(n=Xa(t,i))||qa(t=i.valueOf)&&!Ya(n=Xa(t,i))||e!=="string"&&qa(t=i.toString)&&!Ya(n=Xa(t,i)))return n;throw q0("Can't convert object to primitive value")},Zc={exports:{}},Hu=qn,K0=Object.defineProperty,Qc=function(i,e){try{K0(Hu,i,{value:e,configurable:!0,writable:!0})}catch{Hu[i]=e}return e},Z0=qn,Q0=Qc,Vu="__core-js_shared__",J0=Z0[Vu]||Q0(Vu,{}),Jc=J0,Gu=Jc;(Zc.exports=function(i,e){return Gu[i]||(Gu[i]=e!==void 0?e:{})})("versions",[]).push({version:"3.26.1",mode:"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"});var ev=hp,tv=Object,nv=function(i){return tv(ev(i))},iv=Pn,rv=nv,sv=iv({}.hasOwnProperty),Ki=Object.hasOwn||function(e,t){return sv(rv(e),t)},ov=Pn,av=0,lv=Math.random(),cv=ov(1 .toString),yp=function(i){return"Symbol("+(i===void 0?"":i)+")_"+cv(++av+lv,36)},uv=qn,hv=Zc.exports,Wu=Ki,fv=yp,ju=vp,bp=_p,or=hv("wks"),Ni=uv.Symbol,$u=Ni&&Ni.for,dv=bp?Ni:Ni&&Ni.withoutSetter||fv,Xr=function(i){if(!Wu(or,i)||!(ju||typeof or[i]=="string")){var e="Symbol."+i;ju&&Wu(Ni,i)?or[i]=Ni[i]:bp&&$u?or[i]=$u(e):or[i]=dv(e)}return or[i]},pv=qt,Xu=Ys,qu=xp,mv=Kc,gv=Y0,vv=Xr,_v=TypeError,xv=vv("toPrimitive"),yv=function(i,e){if(!Xu(i)||qu(i))return i;var t=mv(i,xv),n;if(t){if(e===void 0&&(e="default"),n=pv(t,i,e),!Xu(n)||qu(n))return n;throw _v("Can't convert object to primitive value")}return e===void 0&&(e="number"),gv(i,e)},bv=yv,wv=xp,wp=function(i){var e=bv(i,"string");return wv(e)?e:e+""},Mv=qn,Yu=Ys,cc=Mv.document,Sv=Yu(cc)&&Yu(cc.createElement),Tv=function(i){return Sv?cc.createElement(i):{}},Ev=Yi,Av=Yn,Cv=Tv,Mp=!Ev&&!Av(function(){return Object.defineProperty(Cv("div"),"a",{get:function(){return 7}}).a!=7}),Dv=Yi,Pv=qt,Rv=rp,Lv=ap,Iv=Yc,Fv=wp,Ov=Ki,Nv=Mp,Ku=Object.getOwnPropertyDescriptor;$c.f=Dv?Ku:function(e,t){if(e=Iv(e),t=Fv(t),Nv)try{return Ku(e,t)}catch{}if(Ov(e,t))return Lv(!Pv(Rv.f,e,t),e[t])};var Ca={},Bv=Yi,kv=Yn,Uv=Bv&&kv(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),zv=Ys,Hv=String,Vv=TypeError,Gt=function(i){if(zv(i))return i;throw Vv(Hv(i)+" is not an object")},Gv=Yi,Wv=Mp,jv=Uv,co=Gt,Zu=wp,$v=TypeError,Ka=Object.defineProperty,Xv=Object.getOwnPropertyDescriptor,Za="enumerable",Qa="configurable",Ja="writable";Ca.f=Gv?jv?function(e,t,n){if(co(e),t=Zu(t),co(n),typeof e=="function"&&t==="prototype"&&"value"in n&&Ja in n&&!n[Ja]){var r=Xv(e,t);r&&r[Ja]&&(e[t]=n.value,n={configurable:Qa in n?n[Qa]:r[Qa],enumerable:Za in n?n[Za]:r[Za],writable:!1})}return Ka(e,t,n)}:Ka:function(e,t,n){if(co(e),t=Zu(t),co(n),Wv)try{return Ka(e,t,n)}catch{}if("get"in n||"set"in n)throw $v("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var qv=Yi,Yv=Ca,Kv=ap,Sp=qv?function(i,e,t){return Yv.f(i,e,Kv(1,t))}:function(i,e,t){return i[e]=t,i},Tp={exports:{}},uc=Yi,Zv=Ki,Ep=Function.prototype,Qv=uc&&Object.getOwnPropertyDescriptor,eu=Zv(Ep,"name"),Jv=eu&&function(){}.name==="something",e_=eu&&(!uc||uc&&Qv(Ep,"name").configurable),t_={EXISTS:eu,PROPER:Jv,CONFIGURABLE:e_},n_=Pn,i_=Yt,hc=Jc,r_=n_(Function.toString);i_(hc.inspectSource)||(hc.inspectSource=function(i){return r_(i)});var Ap=hc.inspectSource,s_=qn,o_=Yt,Qu=s_.WeakMap,a_=o_(Qu)&&/native code/.test(String(Qu)),l_=Zc.exports,c_=yp,Ju=l_("keys"),u_=function(i){return Ju[i]||(Ju[i]=c_(i))},Cp={},h_=a_,Dp=qn,f_=Ys,d_=Sp,el=Ki,tl=Jc,p_=u_,m_=Cp,eh="Object already initialized",fc=Dp.TypeError,g_=Dp.WeakMap,ta,Ls,na,v_=function(i){return na(i)?Ls(i):ta(i,{})},__=function(i){return function(e){var t;if(!f_(e)||(t=Ls(e)).type!==i)throw fc("Incompatible receiver, "+i+" required");return t}};if(h_||tl.state){var yn=tl.state||(tl.state=new g_);yn.get=yn.get,yn.has=yn.has,yn.set=yn.set,ta=function(i,e){if(yn.has(i))throw fc(eh);return e.facade=i,yn.set(i,e),e},Ls=function(i){return yn.get(i)||{}},na=function(i){return yn.has(i)}}else{var ar=p_("state");m_[ar]=!0,ta=function(i,e){if(el(i,ar))throw fc(eh);return e.facade=i,d_(i,ar,e),e},Ls=function(i){return el(i,ar)?i[ar]:{}},na=function(i){return el(i,ar)}}var x_={set:ta,get:Ls,has:na,enforce:v_,getterFor:__},y_=Yn,b_=Yt,uo=Ki,dc=Yi,w_=t_.CONFIGURABLE,M_=Ap,Pp=x_,S_=Pp.enforce,T_=Pp.get,Wo=Object.defineProperty,E_=dc&&!y_(function(){return Wo(function(){},"length",{value:8}).length!==8}),A_=String(String).split("String"),C_=Tp.exports=function(i,e,t){String(e).slice(0,7)==="Symbol("&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!uo(i,"name")||w_&&i.name!==e)&&(dc?Wo(i,"name",{value:e,configurable:!0}):i.name=e),E_&&t&&uo(t,"arity")&&i.length!==t.arity&&Wo(i,"length",{value:t.arity});try{t&&uo(t,"constructor")&&t.constructor?dc&&Wo(i,"prototype",{writable:!1}):i.prototype&&(i.prototype=void 0)}catch{}var n=S_(i);return uo(n,"source")||(n.source=A_.join(typeof e=="string"?e:"")),i};Function.prototype.toString=C_(function(){return b_(this)&&T_(this).source||M_(this)},"toString");var D_=Yt,P_=Ca,R_=Tp.exports,L_=Qc,I_=function(i,e,t,n){n||(n={});var r=n.enumerable,s=n.name!==void 0?n.name:e;if(D_(t)&&R_(t,s,n),n.global)r?i[e]=t:L_(e,t);else{try{n.unsafe?i[e]&&(r=!0):delete i[e]}catch{}r?i[e]=t:P_.f(i,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return i},Rp={},F_=Math.ceil,O_=Math.floor,N_=Math.trunc||function(e){var t=+e;return(t>0?O_:F_)(t)},B_=N_,Lp=function(i){var e=+i;return e!==e||e===0?0:B_(e)},k_=Lp,U_=Math.max,z_=Math.min,H_=function(i,e){var t=k_(i);return t<0?U_(t+e,0):z_(t,e)},V_=Lp,G_=Math.min,W_=function(i){return i>0?G_(V_(i),9007199254740991):0},j_=W_,Ip=function(i){return j_(i.length)},$_=Yc,X_=H_,q_=Ip,th=function(i){return function(e,t,n){var r=$_(e),s=q_(r),o=X_(n,s),a;if(i&&t!=t){for(;s>o;)if(a=r[o++],a!=a)return!0}else for(;s>o;o++)if((i||o in r)&&r[o]===t)return i||o||0;return!i&&-1}},Y_={includes:th(!0),indexOf:th(!1)},K_=Pn,nl=Ki,Z_=Yc,Q_=Y_.indexOf,J_=Cp,nh=K_([].push),ex=function(i,e){var t=Z_(i),n=0,r=[],s;for(s in t)!nl(J_,s)&&nl(t,s)&&nh(r,s);for(;e.length>n;)nl(t,s=e[n++])&&(~Q_(r,s)||nh(r,s));return r},tx=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],nx=ex,ix=tx,rx=ix.concat("length","prototype");Rp.f=Object.getOwnPropertyNames||function(e){return nx(e,rx)};var Fp={};Fp.f=Object.getOwnPropertySymbols;var sx=Kn,ox=Pn,ax=Rp,lx=Fp,cx=Gt,ux=ox([].concat),hx=sx("Reflect","ownKeys")||function(e){var t=ax.f(cx(e)),n=lx.f;return n?ux(t,n(e)):t},ih=Ki,fx=hx,dx=$c,px=Ca,mx=function(i,e,t){for(var n=fx(e),r=px.f,s=dx.f,o=0;o<n.length;o++){var a=n[o];!ih(i,a)&&!(t&&ih(t,a))&&r(i,a,s(e,a))}},gx=Yn,vx=Yt,_x=/#|\.prototype\./,Ks=function(i,e){var t=yx[xx(i)];return t==wx?!0:t==bx?!1:vx(e)?gx(e):!!e},xx=Ks.normalize=function(i){return String(i).replace(_x,".").toLowerCase()},yx=Ks.data={},bx=Ks.NATIVE="N",wx=Ks.POLYFILL="P",Mx=Ks,il=qn,Sx=$c.f,Tx=Sp,Ex=I_,Ax=Qc,Cx=mx,Dx=Mx,Zn=function(i,e){var t=i.target,n=i.global,r=i.stat,s,o,a,c,u,l;if(n?o=il:r?o=il[t]||Ax(t,{}):o=(il[t]||{}).prototype,o)for(a in e){if(u=e[a],i.dontCallGetSet?(l=Sx(o,a),c=l&&l.value):c=o[a],s=Dx(n?a:t+(r?".":"#")+a,i.forced),!s&&c!==void 0){if(typeof u==typeof c)continue;Cx(u,c)}(i.sham||c&&c.sham)&&Tx(u,"sham",!0),Ex(o,a,u,i)}},ho=qt,rl=_n,Px=Gt,Op=function(e,t){var n=Px(this),r=rl(n.get),s=rl(n.has),o=rl(n.set),a,c;return ho(s,n,e)?(a=ho(r,n,e),"update"in t&&(a=t.update(a,e,n),ho(o,n,e,a)),a):(c=t.insert(e,n),ho(o,n,e,c),c)},Rx=Zn,Lx=Op;Rx({target:"Map",proto:!0,real:!0,forced:!0},{emplace:Lx});var Ix=Zn,Fx=Op;Ix({target:"WeakMap",proto:!0,real:!0,forced:!0},{emplace:Fx});var Ox=Xr,Nx=Ox("toStringTag"),Np={};Np[Nx]="z";var Bx=String(Np)==="[object z]",kx=Bx,Ux=Yt,jo=qc,zx=Xr,Hx=zx("toStringTag"),Vx=Object,Gx=jo(function(){return arguments}())=="Arguments",Wx=function(i,e){try{return i[e]}catch{}},Bp=kx?jo:function(i){var e,t,n;return i===void 0?"Undefined":i===null?"Null":typeof(t=Wx(e=Vx(i),Hx))=="string"?t:Gx?jo(e):(n=jo(e))=="Object"&&Ux(e.callee)?"Arguments":n},jx=Pn,$x=Yn,kp=Yt,Xx=Bp,qx=Kn,Yx=Ap,Up=function(){},Kx=[],zp=qx("Reflect","construct"),tu=/^\s*(?:class|function)\b/,Zx=jx(tu.exec),Qx=!tu.exec(Up),cs=function(e){if(!kp(e))return!1;try{return zp(Up,Kx,e),!0}catch{return!1}},Hp=function(e){if(!kp(e))return!1;switch(Xx(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Qx||!!Zx(tu,Yx(e))}catch{return!0}};Hp.sham=!0;var Jx=!zp||$x(function(){var i;return cs(cs.call)||!cs(Object)||!cs(function(){i=!0})||i})?Hp:cs,ey=Jx,ty=Aa,ny=TypeError,iy=function(i){if(ey(i))return i;throw ny(ty(i)+" is not a constructor")},rh=Gt,ry=iy,sy=Ea,oy=Xr,ay=oy("species"),Da=function(i,e){var t=rh(i).constructor,n;return t===void 0||sy(n=rh(t)[ay])?e:ry(n)},ly=qc,cy=Pn,uy=function(i){if(ly(i)==="Function")return cy(i)},sh=uy,hy=_n,fy=Xc,dy=sh(sh.bind),py=function(i,e){return hy(i),e===void 0?i:fy?dy(i,e):function(){return i.apply(e,arguments)}},Vp={},my=Xr,gy=Vp,vy=my("iterator"),_y=Array.prototype,xy=function(i){return i!==void 0&&(gy.Array===i||_y[vy]===i)},yy=Bp,oh=Kc,by=Ea,wy=Vp,My=Xr,Sy=My("iterator"),Gp=function(i){if(!by(i))return oh(i,Sy)||oh(i,"@@iterator")||wy[yy(i)]},Ty=qt,Ey=_n,Ay=Gt,Cy=Aa,Dy=Gp,Py=TypeError,Wp=function(i,e){var t=arguments.length<2?Dy(i):e;if(Ey(t))return Ay(Ty(t,i));throw Py(Cy(i)+" is not iterable")},Ry=qt,ah=Gt,Ly=Kc,Iy=function(i,e,t){var n,r;ah(i);try{if(n=Ly(i,"return"),!n){if(e==="throw")throw t;return t}n=Ry(n,i)}catch(s){r=!0,n=s}if(e==="throw")throw t;if(r)throw n;return ah(n),t},Fy=py,Oy=qt,Ny=Gt,By=Aa,ky=xy,Uy=Ip,lh=mp,zy=Wp,Hy=Gp,ch=Iy,Vy=TypeError,$o=function(i,e){this.stopped=i,this.result=e},uh=$o.prototype,Zi=function(i,e,t){var n=t&&t.that,r=!!(t&&t.AS_ENTRIES),s=!!(t&&t.IS_RECORD),o=!!(t&&t.IS_ITERATOR),a=!!(t&&t.INTERRUPTED),c=Fy(e,n),u,l,h,f,d,g,m,p=function(_){return u&&ch(u,"normal",_),new $o(!0,_)},v=function(_){return r?(Ny(_),a?c(_[0],_[1],p):c(_[0],_[1])):a?c(_,p):c(_)};if(s)u=i.iterator;else if(o)u=i;else{if(l=Hy(i),!l)throw Vy(By(i)+" is not iterable");if(ky(l)){for(h=0,f=Uy(i);f>h;h++)if(d=v(i[h]),d&&lh(uh,d))return d;return new $o(!1)}u=zy(i,l)}for(g=s?i.next:u.next;!(m=Oy(g,u)).done;){try{d=v(m.value)}catch(_){ch(u,"throw",_)}if(typeof d=="object"&&d&&lh(uh,d))return d}return new $o(!1)},Gy=Zn,Wy=Kn,jy=qt,$y=_n,Xy=Gt,qy=Da,Yy=Zi;Gy({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(e){var t=Xy(this),n=new(qy(t,Wy("Set")))(t),r=$y(n.delete);return Yy(e,function(s){jy(r,n,s)}),n}});var Ky=Zn,Zy=Kn,hh=qt,fh=_n,Qy=Gt,Jy=Da,eb=Zi;Ky({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(e){var t=Qy(this),n=new(Jy(t,Zy("Set"))),r=fh(t.has),s=fh(n.add);return eb(e,function(o){hh(r,t,o)&&hh(s,n,o)}),n}});var tb=Zn,nb=qt,ib=_n,rb=Gt,sb=Zi;tb({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(e){var t=rb(this),n=ib(t.has);return!sb(e,function(r,s){if(nb(n,t,r)===!0)return s()},{INTERRUPTED:!0}).stopped}});var ob=Zn,ab=Kn,lb=qt,cb=_n,ub=Yt,hb=Gt,fb=Wp,db=Zi;ob({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(e){var t=fb(this),n=hb(e),r=n.has;return ub(r)||(n=new(ab("Set"))(e),r=cb(n.has)),!db(t,function(s,o){if(lb(r,n,s)===!1)return o()},{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}});var pb=Zn,mb=qt,gb=_n,vb=Gt,_b=Zi;pb({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(e){var t=vb(this),n=gb(t.has);return!_b(e,function(r,s){if(mb(n,t,r)===!1)return s()},{INTERRUPTED:!0}).stopped}});var xb=Zn,yb=Kn,bb=_n,wb=Gt,Mb=Da,Sb=Zi;xb({target:"Set",proto:!0,real:!0,forced:!0},{union:function(e){var t=wb(this),n=new(Mb(t,yb("Set")))(t);return Sb(e,bb(n.add),{that:n}),n}});var Tb=Zn,Eb=Kn,dh=qt,ph=_n,Ab=Gt,Cb=Da,Db=Zi;Tb({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(e){var t=Ab(this),n=new(Cb(t,Eb("Set")))(t),r=ph(n.delete),s=ph(n.add);return Db(e,function(o){dh(r,n,o)||dh(s,n,o)}),n}});var Pb={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(oc,function(){var t=function(){function n(d){return o.appendChild(d.dom),d}function r(d){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===d?"block":"none";s=d}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(d){d.preventDefault(),r(++s%o.children.length)},!1);var a=(performance||Date).now(),c=a,u=0,l=n(new t.Panel("FPS","#0ff","#002")),h=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=n(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:n,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){u++;var d=(performance||Date).now();if(h.update(d-a,200),d>c+1e3&&(l.update(1e3*u/(d-c),100),c=d,u=0,f)){var g=performance.memory;f.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:o,setMode:r}};return t.Panel=function(n,r,s){var o=1/0,a=0,c=Math.round,u=c(window.devicePixelRatio||1),l=80*u,h=48*u,f=3*u,d=2*u,g=3*u,m=15*u,p=74*u,v=30*u,_=document.createElement("canvas");_.width=l,_.height=h,_.style.cssText="width:80px;height:48px";var y=_.getContext("2d");return y.font="bold "+9*u+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=s,y.fillRect(0,0,l,h),y.fillStyle=r,y.fillText(n,f,d),y.fillRect(g,m,p,v),y.fillStyle=s,y.globalAlpha=.9,y.fillRect(g,m,p,v),{dom:_,update:function(x,w){o=Math.min(o,x),a=Math.max(a,x),y.fillStyle=s,y.globalAlpha=1,y.fillRect(0,0,l,m),y.fillStyle=r,y.fillText(c(x)+" "+n+" ("+c(o)+"-"+c(a)+")",f,d),y.drawImage(_,g+u,m,p-u,v,g,m,p-u,v),y.fillRect(g+p-u,m,u,v),y.fillStyle=s,y.globalAlpha=.9,y.fillRect(g+p-u,m,u,c((1-x/w)*v))}}},t})})(Pb);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nu="146",lr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rb=0,mh=1,Lb=2,jp=1,Ib=2,ys=3,Gi=0,Vt=1,Tn=2,pi=0,Dr=1,ia=2,gh=3,vh=4,Fb=5,Sr=100,Ob=101,Nb=102,_h=103,xh=104,Bb=200,kb=201,Ub=202,zb=203,$p=204,Xp=205,Hb=206,Vb=207,Gb=208,Wb=209,jb=210,$b=0,Xb=1,qb=2,pc=3,Yb=4,Kb=5,Zb=6,Qb=7,qp=0,Jb=1,e1=2,jn=0,t1=1,n1=2,i1=3,r1=4,s1=5,Yp=300,Lr=301,Ir=302,mc=303,gc=304,Pa=306,Fr=1e3,en=1001,ra=1002,Et=1003,vc=1004,_c=1005,Ht=1006,Kp=1007,qr=1008,Wi=1009,o1=1010,a1=1011,Zp=1012,l1=1013,Fi=1014,ui=1015,Is=1016,c1=1017,u1=1018,Pr=1020,h1=1021,f1=1022,tn=1023,d1=1024,p1=1025,Bi=1026,Or=1027,m1=1028,g1=1029,v1=1030,_1=1031,x1=1033,sl=33776,ol=33777,al=33778,ll=33779,yh=35840,bh=35841,wh=35842,Mh=35843,y1=36196,Sh=37492,Th=37496,Eh=37808,Ah=37809,Ch=37810,Dh=37811,Ph=37812,Rh=37813,Lh=37814,Ih=37815,Fh=37816,Oh=37817,Nh=37818,Bh=37819,kh=37820,Uh=37821,zh=36492,Fs=2300,Nr=2301,cl=2302,Hh=2400,Vh=2401,Gh=2402,b1=2500,w1=0,iu=1,sa=2,ji=3e3,je=3001,M1=3200,S1=3201,ru=0,T1=1,Un="srgb",Oi="srgb-linear",ul=7680,E1=519,xc=35044,Wh="300 es",yc=1035;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jh=1234567;const Ts=Math.PI/180,Os=180/Math.PI;function pn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function su(i,e){return(i%e+e)%e}function A1(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function C1(i,e,t){return i!==e?(t-i)/(e-i):0}function Es(i,e,t){return(1-t)*i+t*e}function D1(i,e,t,n){return Es(i,e,1-Math.exp(-t*n))}function P1(i,e=1){return e-Math.abs(su(i,e*2)-e)}function R1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function L1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function I1(i,e){return i+Math.floor(Math.random()*(e-i+1))}function F1(i,e){return i+Math.random()*(e-i)}function O1(i){return i*(.5-Math.random())}function N1(i){i!==void 0&&(jh=i);let e=jh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function B1(i){return i*Ts}function k1(i){return i*Os}function bc(i){return(i&i-1)===0&&i!==0}function Qp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function oa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function U1(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),u=s((e+n)/2),l=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*l,c*h,c*f,a*u);break;case"YZY":i.set(c*f,a*l,c*h,a*u);break;case"ZXZ":i.set(c*h,c*f,a*l,a*u);break;case"XZX":i.set(a*l,c*g,c*d,a*u);break;case"YXY":i.set(c*d,a*l,c*g,a*u);break;case"ZYZ":i.set(c*g,c*d,a*l,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var z1=Object.freeze({__proto__:null,DEG2RAD:Ts,RAD2DEG:Os,generateUUID:pn,clamp:Rt,euclideanModulo:su,mapLinear:A1,inverseLerp:C1,lerp:Es,damp:D1,pingpong:P1,smoothstep:R1,smootherstep:L1,randInt:I1,randFloat:F1,randFloatSpread:O1,seededRandom:N1,degToRad:B1,radToDeg:k1,isPowerOfTwo:bc,ceilPowerOfTwo:Qp,floorPowerOfTwo:oa,setQuaternionFromProperEuler:U1,normalize:Ze,denormalize:Gn});class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sn{constructor(){sn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,c,u){const l=this.elements;return l[0]=e,l[1]=r,l[2]=a,l[3]=t,l[4]=s,l[5]=c,l[6]=n,l[7]=o,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],l=n[4],h=n[7],f=n[2],d=n[5],g=n[8],m=r[0],p=r[3],v=r[6],_=r[1],y=r[4],x=r[7],w=r[2],A=r[5],L=r[8];return s[0]=o*m+a*_+c*w,s[3]=o*p+a*y+c*A,s[6]=o*v+a*x+c*L,s[1]=u*m+l*_+h*w,s[4]=u*p+l*y+h*A,s[7]=u*v+l*x+h*L,s[2]=f*m+d*_+g*w,s[5]=f*p+d*y+g*A,s[8]=f*v+d*x+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],l=e[8];return t*o*l-t*a*u-n*s*l+n*a*c+r*s*u-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],l=e[8],h=l*o-a*u,f=a*c-l*s,d=u*s-o*c,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(r*u-l*n)*m,e[2]=(a*n-r*o)*m,e[3]=f*m,e[4]=(l*t-r*c)*m,e[5]=(r*s-a*t)*m,e[6]=d*m,e[7]=(n*c-u*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-r*u,r*c,-r*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],u=r[4],l=r[7];return r[0]=t*s+n*c,r[3]=t*o+n*u,r[6]=t*a+n*l,r[1]=-n*s+t*c,r[4]=-n*o+t*u,r[7]=-n*a+t*l,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Jp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const hl={[Un]:{[Oi]:ki},[Oi]:{[Un]:Xo}},on={legacyMode:!0,get workingColorSpace(){return Oi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(hl[e]&&hl[e][t]!==void 0){const n=hl[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gt={r:0,g:0,b:0},an={h:0,s:0,l:0},fo={h:0,s:0,l:0};function fl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function po(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,on.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Oi){return this.r=e,this.g=t,this.b=n,on.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Oi){if(e=su(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=fl(o,s,e+1/3),this.g=fl(o,s,e),this.b=fl(o,s,e-1/3)}return on.toWorkingColorSpace(this,r),this}setStyle(e,t=Un){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,on.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,on.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,u=parseFloat(s[2])/100,l=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,u,l,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,on.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,on.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Un){const n=em[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return on.fromWorkingColorSpace(po(this,gt),e),Rt(gt.r*255,0,255)<<16^Rt(gt.g*255,0,255)<<8^Rt(gt.b*255,0,255)<<0}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Oi){on.fromWorkingColorSpace(po(this,gt),t);const n=gt.r,r=gt.g,s=gt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,u;const l=(a+o)/2;if(a===o)c=0,u=0;else{const h=o-a;switch(u=l<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=l,e}getRGB(e,t=Oi){return on.fromWorkingColorSpace(po(this,gt),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Un){return on.fromWorkingColorSpace(po(this,gt),e),e!==Un?`color(${e} ${gt.r} ${gt.g} ${gt.b})`:`rgb(${gt.r*255|0},${gt.g*255|0},${gt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=n,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(fo);const n=Es(an.h,fo.h,t),r=Es(an.s,fo.s,t),s=Es(an.l,fo.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Te.NAMES=em;let ur;class tm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ur===void 0&&(ur=Ns("canvas")),ur.width=e.width,ur.height=e.height;const n=ur.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ki(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class nm{constructor(e=null){this.isSource=!0,this.uuid=pn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dl(r[o].image)):s.push(dl(r[o]))}else s=dl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let H1=0;class Ut extends Qi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=en,r=en,s=Ht,o=qr,a=tn,c=Wi,u=1,l=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=pn(),this.name="",this.source=new nm(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new sn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fr:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fr:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Yp;class Xe{constructor(e=0,t=0,n=0,r=1){Xe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,u=c[0],l=c[4],h=c[8],f=c[1],d=c[5],g=c[9],m=c[2],p=c[6],v=c[10];if(Math.abs(l-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(l+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(u+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,x=(d+1)/2,w=(v+1)/2,A=(l+f)/4,L=(h+m)/4,b=(g+p)/4;return y>x&&y>w?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=A/n,s=L/n):x>w?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=A/r,s=b/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=L/s,r=b/s),this.set(n,r,s,t),this}let _=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-l)*(f-l));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(h-m)/_,this.z=(f-l)/_,this.w=Math.acos((u+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mn extends Qi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Ut(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ht,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class im extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class V1 extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ft{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],u=n[r+1],l=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=c,e[t+1]=u,e[t+2]=l,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h!==m||c!==f||u!==d||l!==g){let p=1-a;const v=c*f+u*d+l*g+h*m,_=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){const w=Math.sqrt(y),A=Math.atan2(w,v*_);p=Math.sin(p*A)/w,a=Math.sin(a*A)/w}const x=a*_;if(c=c*p+f*x,u=u*p+d*x,l=l*p+g*x,h=h*p+m*x,p===1-a){const w=1/Math.sqrt(c*c+u*u+l*l+h*h);c*=w,u*=w,l*=w,h*=w}}e[t]=c,e[t+1]=u,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],u=n[r+2],l=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+l*h+c*d-u*f,e[t+1]=c*g+l*f+u*h-a*d,e[t+2]=u*g+l*d+a*f-c*h,e[t+3]=l*g-a*h-c*f-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),l=a(r/2),h=a(s/2),f=c(n/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*l*h+u*d*g,this._y=u*d*h-f*l*g,this._z=u*l*g+f*d*h,this._w=u*l*h-f*d*g;break;case"YXZ":this._x=f*l*h+u*d*g,this._y=u*d*h-f*l*g,this._z=u*l*g-f*d*h,this._w=u*l*h+f*d*g;break;case"ZXY":this._x=f*l*h-u*d*g,this._y=u*d*h+f*l*g,this._z=u*l*g+f*d*h,this._w=u*l*h-f*d*g;break;case"ZYX":this._x=f*l*h-u*d*g,this._y=u*d*h+f*l*g,this._z=u*l*g-f*d*h,this._w=u*l*h+f*d*g;break;case"YZX":this._x=f*l*h+u*d*g,this._y=u*d*h+f*l*g,this._z=u*l*g-f*d*h,this._w=u*l*h-f*d*g;break;case"XZY":this._x=f*l*h-u*d*g,this._y=u*d*h-f*l*g,this._z=u*l*g+f*d*h,this._w=u*l*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],u=t[2],l=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(l-c)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(l-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+l)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(c+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,u=t._z,l=t._w;return this._x=n*l+o*a+r*u-s*c,this._y=r*l+o*c+s*a-n*u,this._z=s*l+o*u+n*c-r*a,this._w=o*l-n*a-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),l=Math.atan2(u,a),h=Math.sin((1-t)*l)/u,f=Math.sin(t*l)/u;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($h.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,u=c*t+o*r-a*n,l=c*n+a*t-s*r,h=c*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=u*c+f*-s+l*-a-h*-o,this.y=l*c+f*-o+h*-s-u*-a,this.z=h*c+f*-a+u*-o-l*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pl.copy(this).projectOnVector(e),this.sub(pl)}reflect(e){return this.sub(pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pl=new D,$h=new ft;class Ji{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,u=e.length;c<u;c+=3){const l=e[c],h=e[c+1],f=e[c+2];l<t&&(t=l),h<n&&(n=h),f<r&&(r=f),l>s&&(s=l),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,u=e.count;c<u;c++){const l=e.getX(c),h=e.getY(c),f=e.getZ(c);l<t&&(t=l),h<n&&(n=h),f<r&&(r=f),l>s&&(s=l),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)bi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(bi)}else n.boundingBox===null&&n.computeBoundingBox(),ml.copy(n.boundingBox),ml.applyMatrix4(e.matrixWorld),this.union(ml);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),mo.subVectors(this.max,us),hr.subVectors(e.a,us),fr.subVectors(e.b,us),dr.subVectors(e.c,us),Jn.subVectors(fr,hr),ei.subVectors(dr,fr),wi.subVectors(hr,dr);let t=[0,-Jn.z,Jn.y,0,-ei.z,ei.y,0,-wi.z,wi.y,Jn.z,0,-Jn.x,ei.z,0,-ei.x,wi.z,0,-wi.x,-Jn.y,Jn.x,0,-ei.y,ei.x,0,-wi.y,wi.x,0];return!gl(t,hr,fr,dr,mo)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,hr,fr,dr,mo))?!1:(go.crossVectors(Jn,ei),t=[go.x,go.y,go.z],gl(t,hr,fr,dr,mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return bi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new D,new D,new D,new D,new D,new D,new D,new D],bi=new D,ml=new Ji,hr=new D,fr=new D,dr=new D,Jn=new D,ei=new D,wi=new D,us=new D,mo=new D,go=new D,Mi=new D;function gl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Mi.fromArray(i,s);const a=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),c=e.dot(Mi),u=t.dot(Mi),l=n.dot(Mi);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>a)return!1}return!0}const G1=new Ji,hs=new D,vl=new D;class Yr{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):G1.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(hs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(vl)),this.expandByPoint(hs.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new D,_l=new D,vo=new D,ti=new D,xl=new D,_o=new D,yl=new D;class Ra{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.direction).multiplyScalar(t).add(this.origin),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_l.copy(e).add(t).multiplyScalar(.5),vo.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(_l);const s=e.distanceTo(t)*.5,o=-this.direction.dot(vo),a=ti.dot(this.direction),c=-ti.dot(vo),u=ti.lengthSq(),l=Math.abs(1-o*o);let h,f,d,g;if(l>0)if(h=o*c-a,f=o*a-c,g=s*l,h>=0)if(f>=-g)if(f<=g){const m=1/l;h*=m,f*=m,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+u}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+u;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+u;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+u;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(vo).multiplyScalar(f).add(_l),d}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),r=Fn.dot(Fn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const u=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),l>=0?(s=(e.min.y-f.y)*l,o=(e.max.y-f.y)*l):(s=(e.max.y-f.y)*l,o=(e.min.y-f.y)*l),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,r,s){xl.subVectors(t,e),_o.subVectors(n,e),yl.crossVectors(xl,_o);let o=this.direction.dot(yl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);const c=a*this.direction.dot(_o.crossVectors(ti,_o));if(c<0)return null;const u=a*this.direction.dot(xl.cross(ti));if(u<0||c+u>o)return null;const l=-a*ti.dot(yl);return l<0?null:this.at(l/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,c,u,l,h,f,d,g,m,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=c,v[2]=u,v[6]=l,v[10]=h,v[14]=f,v[3]=d,v[7]=g,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/pr.setFromMatrixColumn(e,0).length(),s=1/pr.setFromMatrixColumn(e,1).length(),o=1/pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),u=Math.sin(r),l=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*l,d=o*h,g=a*l,m=a*h;t[0]=c*l,t[4]=-c*h,t[8]=u,t[1]=d+g*u,t[5]=f-m*u,t[9]=-a*c,t[2]=m-f*u,t[6]=g+d*u,t[10]=o*c}else if(e.order==="YXZ"){const f=c*l,d=c*h,g=u*l,m=u*h;t[0]=f+m*a,t[4]=g*a-d,t[8]=o*u,t[1]=o*h,t[5]=o*l,t[9]=-a,t[2]=d*a-g,t[6]=m+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*l,d=c*h,g=u*l,m=u*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*l,t[9]=m-f*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*l,d=o*h,g=a*l,m=a*h;t[0]=c*l,t[4]=g*u-d,t[8]=f*u+m,t[1]=c*h,t[5]=m*u+f,t[9]=d*u-g,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*u,g=a*c,m=a*u;t[0]=c*l,t[4]=m-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*l,t[9]=-a*l,t[2]=-u*l,t[6]=d*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*c,d=o*u,g=a*c,m=a*u;t[0]=c*l,t[4]=-h,t[8]=u*l,t[1]=f*h+m,t[5]=o*l,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*l,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W1,e,j1)}lookAt(e,t,n){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ni.crossVectors(n,jt),ni.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ni.crossVectors(n,jt)),ni.normalize(),xo.crossVectors(jt,ni),r[0]=ni.x,r[4]=xo.x,r[8]=jt.x,r[1]=ni.y,r[5]=xo.y,r[9]=jt.y,r[2]=ni.z,r[6]=xo.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],l=n[1],h=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],v=n[14],_=n[3],y=n[7],x=n[11],w=n[15],A=r[0],L=r[4],b=r[8],T=r[12],I=r[1],W=r[5],j=r[9],U=r[13],N=r[2],V=r[6],K=r[10],te=r[14],$=r[3],F=r[7],B=r[11],ne=r[15];return s[0]=o*A+a*I+c*N+u*$,s[4]=o*L+a*W+c*V+u*F,s[8]=o*b+a*j+c*K+u*B,s[12]=o*T+a*U+c*te+u*ne,s[1]=l*A+h*I+f*N+d*$,s[5]=l*L+h*W+f*V+d*F,s[9]=l*b+h*j+f*K+d*B,s[13]=l*T+h*U+f*te+d*ne,s[2]=g*A+m*I+p*N+v*$,s[6]=g*L+m*W+p*V+v*F,s[10]=g*b+m*j+p*K+v*B,s[14]=g*T+m*U+p*te+v*ne,s[3]=_*A+y*I+x*N+w*$,s[7]=_*L+y*W+x*V+w*F,s[11]=_*b+y*j+x*K+w*B,s[15]=_*T+y*U+x*te+w*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],u=e[13],l=e[2],h=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],v=e[15];return g*(+s*c*h-r*u*h-s*a*f+n*u*f+r*a*d-n*c*d)+m*(+t*c*d-t*u*f+s*o*f-r*o*d+r*u*l-s*c*l)+p*(+t*u*h-t*a*d-s*o*h+n*o*d+s*a*l-n*u*l)+v*(-r*a*l-t*c*h+t*a*f+r*o*h-n*o*f+n*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],l=e[8],h=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],v=e[15],_=h*p*u-m*f*u+m*c*d-a*p*d-h*c*v+a*f*v,y=g*f*u-l*p*u-g*c*d+o*p*d+l*c*v-o*f*v,x=l*m*u-g*h*u+g*a*d-o*m*d-l*a*v+o*h*v,w=g*h*c-l*m*c-g*a*f+o*m*f+l*a*p-o*h*p,A=t*_+n*y+r*x+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=_*L,e[1]=(m*f*s-h*p*s-m*r*d+n*p*d+h*r*v-n*f*v)*L,e[2]=(a*p*s-m*c*s+m*r*u-n*p*u-a*r*v+n*c*v)*L,e[3]=(h*c*s-a*f*s-h*r*u+n*f*u+a*r*d-n*c*d)*L,e[4]=y*L,e[5]=(l*p*s-g*f*s+g*r*d-t*p*d-l*r*v+t*f*v)*L,e[6]=(g*c*s-o*p*s-g*r*u+t*p*u+o*r*v-t*c*v)*L,e[7]=(o*f*s-l*c*s+l*r*u-t*f*u-o*r*d+t*c*d)*L,e[8]=x*L,e[9]=(g*h*s-l*m*s-g*n*d+t*m*d+l*n*v-t*h*v)*L,e[10]=(o*m*s-g*a*s+g*n*u-t*m*u-o*n*v+t*a*v)*L,e[11]=(l*a*s-o*h*s-l*n*u+t*h*u+o*n*d-t*a*d)*L,e[12]=w*L,e[13]=(l*m*r-g*h*r+g*n*f-t*m*f-l*n*p+t*h*p)*L,e[14]=(g*a*r-o*m*r-g*n*c+t*m*c+o*n*p-t*a*p)*L,e[15]=(o*h*r-l*a*r+l*n*c-t*h*c-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,u=s*o,l=s*a;return this.set(u*o+n,u*a-r*c,u*c+r*a,0,u*a+r*c,l*a+n,l*c-r*o,0,u*c-r*a,l*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,u=s+s,l=o+o,h=a+a,f=s*u,d=s*l,g=s*h,m=o*l,p=o*h,v=a*h,_=c*u,y=c*l,x=c*h,w=n.x,A=n.y,L=n.z;return r[0]=(1-(m+v))*w,r[1]=(d+x)*w,r[2]=(g-y)*w,r[3]=0,r[4]=(d-x)*A,r[5]=(1-(f+v))*A,r[6]=(p+_)*A,r[7]=0,r[8]=(g+y)*L,r[9]=(p-_)*L,r[10]=(1-(f+m))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=pr.set(r[0],r[1],r[2]).length();const o=pr.set(r[4],r[5],r[6]).length(),a=pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ln.copy(this);const u=1/s,l=1/o,h=1/a;return ln.elements[0]*=u,ln.elements[1]*=u,ln.elements[2]*=u,ln.elements[4]*=l,ln.elements[5]*=l,ln.elements[6]*=l,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,c=2*s/(t-e),u=2*s/(n-r),l=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=l,a[12]=0,a[1]=0,a[5]=u,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,c=1/(t-e),u=1/(n-r),l=1/(o-s),h=(t+e)*c,f=(n+r)*u,d=(o+s)*l;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*l,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pr=new D,ln=new Fe,W1=new D(0,0,0),j1=new D(1,1,1),ni=new D,xo=new D,jt=new D,Xh=new Fe,qh=new ft;class Kr{constructor(e=0,t=0,n=0,r=Kr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],u=r[5],l=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-l,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Kr.DefaultOrder="XYZ";Kr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $1=0;const Yh=new D,mr=new ft,On=new Fe,yo=new D,fs=new D,X1=new D,q1=new ft,Kh=new D(1,0,0),Zh=new D(0,1,0),Qh=new D(0,0,1),Y1={type:"added"},Jh={type:"removed"};class ze extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DefaultUp.clone();const e=new D,t=new Kr,n=new ft,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new sn}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=ze.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ze.DefaultMatrixWorldAutoUpdate,this.layers=new ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis(Qh,e)}translateOnAxis(e,t){return Yh.copy(e).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis(Qh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yo.copy(e):yo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(fs,yo,this.up):On.lookAt(yo,fs,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),mr.setFromRotationMatrix(On),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Y1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Jh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,X1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,q1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){const h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),u=o(e.textures),l=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const u in a){const l=a[u];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ze.DefaultUp=new D(0,1,0);ze.DefaultMatrixAutoUpdate=!0;ze.DefaultMatrixWorldAutoUpdate=!0;const cn=new D,Nn=new D,bl=new D,Bn=new D,gr=new D,vr=new D,ef=new D,wl=new D,Ml=new D,Sl=new D;class Hn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),cn.subVectors(e,t),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){cn.subVectors(r,t),Nn.subVectors(n,t),bl.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(Nn),c=cn.dot(bl),u=Nn.dot(Nn),l=Nn.dot(bl),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(u*c-a*l)*f,g=(o*l-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Bn),c.set(0,0),c.addScaledVector(s,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c}static isFrontFacing(e,t,n,r){return cn.subVectors(n,t),Nn.subVectors(e,t),cn.cross(Nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),cn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Hn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;gr.subVectors(r,n),vr.subVectors(s,n),wl.subVectors(e,n);const c=gr.dot(wl),u=vr.dot(wl);if(c<=0&&u<=0)return t.copy(n);Ml.subVectors(e,r);const l=gr.dot(Ml),h=vr.dot(Ml);if(l>=0&&h<=l)return t.copy(r);const f=c*h-l*u;if(f<=0&&c>=0&&l<=0)return o=c/(c-l),t.copy(n).addScaledVector(gr,o);Sl.subVectors(e,s);const d=gr.dot(Sl),g=vr.dot(Sl);if(g>=0&&d<=g)return t.copy(s);const m=d*u-c*g;if(m<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(n).addScaledVector(vr,a);const p=l*g-d*h;if(p<=0&&h-l>=0&&d-g>=0)return ef.subVectors(s,r),a=(h-l)/(h-l+(d-g)),t.copy(r).addScaledVector(ef,a);const v=1/(p+m+f);return o=m*v,a=f*v,t.copy(n).addScaledVector(gr,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let K1=0;class En extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=Dr,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=$p,this.blendDst=Xp,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=pc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ul,this.stencilZFail=ul,this.stencilZPass=ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dn extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new D,bo=new he;class kt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=xc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class rm extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sm extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Z1=0;const Qt=new Fe,Tl=new ze,_r=new D,$t=new Ji,ds=new Ji,wt=new D;class pt extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jp(e)?sm:rm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new sn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ye(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors($t.min,ds.min),$t.expandByPoint(wt),wt.addVectors($t.max,ds.max),$t.expandByPoint(wt)):($t.expandByPoint(ds.min),$t.expandByPoint(ds.max))}$t.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let u=0,l=a.count;u<l;u++)wt.fromBufferAttribute(a,u),c&&(_r.fromBufferAttribute(e,u),wt.add(_r)),r=Math.max(r,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,u=[],l=[];for(let I=0;I<a;I++)u[I]=new D,l[I]=new D;const h=new D,f=new D,d=new D,g=new he,m=new he,p=new he,v=new D,_=new D;function y(I,W,j){h.fromArray(r,I*3),f.fromArray(r,W*3),d.fromArray(r,j*3),g.fromArray(o,I*2),m.fromArray(o,W*2),p.fromArray(o,j*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);const U=1/(m.x*p.y-p.x*m.y);!isFinite(U)||(v.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(U),_.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(U),u[I].add(v),u[W].add(v),u[j].add(v),l[I].add(_),l[W].add(_),l[j].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let I=0,W=x.length;I<W;++I){const j=x[I],U=j.start,N=j.count;for(let V=U,K=U+N;V<K;V+=3)y(n[V+0],n[V+1],n[V+2])}const w=new D,A=new D,L=new D,b=new D;function T(I){L.fromArray(s,I*3),b.copy(L);const W=u[I];w.copy(W),w.sub(L.multiplyScalar(L.dot(W))).normalize(),A.crossVectors(b,W);const U=A.dot(l[I])<0?-1:1;c[I*4]=w.x,c[I*4+1]=w.y,c[I*4+2]=w.z,c[I*4+3]=U}for(let I=0,W=x.length;I<W;++I){const j=x[I],U=j.start,N=j.count;for(let V=U,K=U+N;V<K;V+=3)T(n[V+0]),T(n[V+1]),T(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,c=new D,u=new D,l=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),l.subVectors(o,s),h.subVectors(r,s),l.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),u.fromBufferAttribute(n,p),a.add(l),c.add(l),u.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),l.subVectors(o,s),h.subVectors(r,s),l.cross(h),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,c){const u=a.array,l=a.itemSize,h=a.normalized,f=new u.constructor(c.length*l);let d=0,g=0;for(let m=0,p=c.length;m<p;m++){a.isInterleavedBufferAttribute?d=c[m]*a.data.stride+a.offset:d=c[m]*l;for(let v=0;v<l;v++)f[g++]=u[d++]}return new kt(f,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],u=e(c,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const c=[],u=s[a];for(let l=0,h=u.length;l<h;l++){const f=u[l],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],l=[];for(let h=0,f=u.length;h<f;h++){const d=u[h];l.push(d.toJSON(e.data))}l.length>0&&(r[c]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const l=r[u];this.setAttribute(u,l.clone(t))}const s=e.morphAttributes;for(const u in s){const l=[],h=s[u];for(let f=0,d=h.length;f<d;f++)l.push(h[f].clone(t));this.morphAttributes[u]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,l=o.length;u<l;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const tf=new Fe,xr=new Ra,El=new Yr,ii=new D,ri=new D,si=new D,Al=new D,Cl=new D,Dl=new D,wo=new D,Mo=new D,So=new D,To=new he,Eo=new he,Ao=new he,Pl=new D,Co=new D;class se extends ze{constructor(e=new pt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(s),e.ray.intersectsSphere(El)===!1)||(tf.copy(s).invert(),xr.copy(e.ray).applyMatrix4(tf),n.boundingBox!==null&&xr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,u=n.morphAttributes.position,l=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const v=d[m],_=r[v.materialIndex],y=Math.max(v.start,g.start),x=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let w=y,A=x;w<A;w+=3){const L=a.getX(w),b=a.getX(w+1),T=a.getX(w+2);o=Do(this,_,e,xr,c,u,l,h,f,L,b,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let v=m,_=p;v<_;v+=3){const y=a.getX(v),x=a.getX(v+1),w=a.getX(v+2);o=Do(this,r,e,xr,c,u,l,h,f,y,x,w),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const v=d[m],_=r[v.materialIndex],y=Math.max(v.start,g.start),x=Math.min(c.count,Math.min(v.start+v.count,g.start+g.count));for(let w=y,A=x;w<A;w+=3){const L=w,b=w+1,T=w+2;o=Do(this,_,e,xr,c,u,l,h,f,L,b,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(c.count,g.start+g.count);for(let v=m,_=p;v<_;v+=3){const y=v,x=v+1,w=v+2;o=Do(this,r,e,xr,c,u,l,h,f,y,x,w),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function Q1(i,e,t,n,r,s,o,a){let c;if(e.side===Vt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side!==Tn,a),c===null)return null;Co.copy(a),Co.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Co);return u<t.near||u>t.far?null:{distance:u,point:Co.clone(),object:i}}function Do(i,e,t,n,r,s,o,a,c,u,l,h){ii.fromBufferAttribute(r,u),ri.fromBufferAttribute(r,l),si.fromBufferAttribute(r,h);const f=i.morphTargetInfluences;if(s&&f){wo.set(0,0,0),Mo.set(0,0,0),So.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=f[g],v=s[g];p!==0&&(Al.fromBufferAttribute(v,u),Cl.fromBufferAttribute(v,l),Dl.fromBufferAttribute(v,h),o?(wo.addScaledVector(Al,p),Mo.addScaledVector(Cl,p),So.addScaledVector(Dl,p)):(wo.addScaledVector(Al.sub(ii),p),Mo.addScaledVector(Cl.sub(ri),p),So.addScaledVector(Dl.sub(si),p)))}ii.add(wo),ri.add(Mo),si.add(So)}i.isSkinnedMesh&&(i.boneTransform(u,ii),i.boneTransform(l,ri),i.boneTransform(h,si));const d=Q1(i,e,t,n,ii,ri,si,Pl);if(d){a&&(To.fromBufferAttribute(a,u),Eo.fromBufferAttribute(a,l),Ao.fromBufferAttribute(a,h),d.uv=Hn.getUV(Pl,ii,ri,si,To,Eo,Ao,new he)),c&&(To.fromBufferAttribute(c,u),Eo.fromBufferAttribute(c,l),Ao.fromBufferAttribute(c,h),d.uv2=Hn.getUV(Pl,ii,ri,si,To,Eo,Ao,new he));const g={a:u,b:l,c:h,normal:new D,materialIndex:0};Hn.getNormal(ii,ri,si,g.normal),d.face=g}return d}class lt extends pt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],l=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(h,2));function g(m,p,v,_,y,x,w,A,L,b,T){const I=x/L,W=w/b,j=x/2,U=w/2,N=A/2,V=L+1,K=b+1;let te=0,$=0;const F=new D;for(let B=0;B<K;B++){const ne=B*W-U;for(let ee=0;ee<V;ee++){const re=ee*I-j;F[m]=re*_,F[p]=ne*y,F[v]=N,u.push(F.x,F.y,F.z),F[m]=0,F[p]=0,F[v]=A>0?1:-1,l.push(F.x,F.y,F.z),h.push(ee/L),h.push(1-B/b),te+=1}}for(let B=0;B<b;B++)for(let ne=0;ne<L;ne++){const ee=f+ne+V*B,re=f+ne+V*(B+1),ue=f+(ne+1)+V*(B+1),G=f+(ne+1)+V*B;c.push(ee,re,G),c.push(re,ue,G),$+=6}a.addGroup(d,$,T),d+=$,f+=te}}static fromJSON(e){return new lt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Br(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=Br(i[t]);for(const r in n)e[r]=n[r]}return e}function J1(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const aa={clone:Br,merge:Nt};var ew=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dt extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ew,this.fragmentShader=tw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=J1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class om extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends om{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/u,r*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yr=90,br=1;class nw extends ze{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Bt(yr,br,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(1,0,0)),this.add(r);const s=new Bt(yr,br,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const o=new Bt(yr,br,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new Bt(yr,br,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const c=new Bt(yr,br,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,1)),this.add(c);const u=new Bt(yr,br,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new D(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,c,u]=this.children,l=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=jn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(l),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class am extends Ut{constructor(e,t,n,r,s,o,a,c,u,l){e=e!==void 0?e:[],t=t!==void 0?t:Lr,super(e,t,n,r,s,o,a,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iw extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new am(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new lt(5,5,5),s=new dt({name:"CubemapFromEquirect",uniforms:Br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:pi});s.uniforms.tEquirect.value=t;const o=new se(r,s),a=t.minFilter;return t.minFilter===qr&&(t.minFilter=Ht),new nw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Rl=new D,rw=new D,sw=new sn;class Ei{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Rl.subVectors(n,t).cross(rw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Rl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sw.getNormalMatrix(e),r=this.coplanarPoint(Rl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new Yr,Po=new D;class au{constructor(e=new Ei,t=new Ei,n=new Ei,r=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],c=n[4],u=n[5],l=n[6],h=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],v=n[13],_=n[14],y=n[15];return t[0].setComponents(a-r,h-c,m-f,y-p).normalize(),t[1].setComponents(a+r,h+c,m+f,y+p).normalize(),t[2].setComponents(a+s,h+u,m+d,y+v).normalize(),t[3].setComponents(a-s,h-u,m-d,y-v).normalize(),t[4].setComponents(a-o,h-l,m-g,y-_).normalize(),t[5].setComponents(a+o,h+l,m+g,y+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lm(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ow(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,l){const h=u.array,f=u.usage,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,h,f),u.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,l,h){const f=l.array,d=l.updateRange;i.bindBuffer(h,u),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const l=n.get(u);l&&(i.deleteBuffer(l.buffer),n.delete(u))}function c(u,l){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h===void 0?n.set(u,r(u,l)):h.version<u.version&&(s(h.buffer,u,l),h.version=u.version)}return{get:o,remove:a,update:c}}class Zr extends pt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),u=a+1,l=c+1,h=e/a,f=t/c,d=[],g=[],m=[],p=[];for(let v=0;v<l;v++){const _=v*f-o;for(let y=0;y<u;y++){const x=y*h-s;g.push(x,-_,0),m.push(0,0,1),p.push(y/a),p.push(1-v/c)}}for(let v=0;v<c;v++)for(let _=0;_<a;_++){const y=_+u*v,x=_+u*(v+1),w=_+1+u*(v+1),A=_+1+u*v;d.push(y,x,A),d.push(x,w,A)}this.setIndex(d),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(m,3)),this.setAttribute("uv",new Ye(p,2))}static fromJSON(e){return new Zr(e.width,e.height,e.widthSegments,e.heightSegments)}}var aw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,lw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,uw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dw="vec3 transformed = vec3( position );",pw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mw=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,gw=`#ifdef USE_IRIDESCENCE
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
#endif`,vw=`#ifdef USE_BUMPMAP
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
#endif`,_w=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ww=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ew=`#define PI 3.141592653589793
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
}`,Aw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cw=`vec3 transformedNormal = objectNormal;
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
#endif`,Dw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Rw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fw=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ow=`#ifdef USE_ENVMAP
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
#endif`,Nw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bw=`#ifdef USE_ENVMAP
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
#endif`,kw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uw=`#ifdef USE_ENVMAP
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
#endif`,zw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ww=`#ifdef USE_GRADIENTMAP
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
}`,jw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$w=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qw=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Yw=`uniform bool receiveShadow;
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
#endif`,Kw=`#if defined( USE_ENVMAP )
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
#endif`,Zw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qw=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Jw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,tM=`PhysicalMaterial material;
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
#endif`,nM=`struct PhysicalMaterial {
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
}`,iM=`
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
#endif`,rM=`#if defined( RE_IndirectDiffuse )
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
#endif`,sM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,oM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vM=`#ifdef USE_MORPHNORMALS
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
#endif`,_M=`#ifdef USE_MORPHTARGETS
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
#endif`,xM=`#ifdef USE_MORPHTARGETS
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
#endif`,yM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,bM=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,wM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TM=`#ifdef USE_NORMALMAP
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
#endif`,EM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,AM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,CM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,DM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zM=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HM=`float getShadowMask() {
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
}`,VM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GM=`#ifdef USE_SKINNING
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
#endif`,WM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jM=`#ifdef USE_SKINNING
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
#endif`,$M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KM=`#ifdef USE_TRANSMISSION
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
#endif`,ZM=`#ifdef USE_TRANSMISSION
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
#endif`,QM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,JM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,eS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,tS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,nS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,iS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,rS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hS=`#include <common>
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
}`,fS=`#if DEPTH_PACKING == 3200
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
}`,dS=`#define DISTANCE
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
}`,pS=`#define DISTANCE
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
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vS=`uniform float scale;
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
}`,_S=`uniform vec3 diffuse;
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
}`,xS=`#include <common>
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
}`,yS=`uniform vec3 diffuse;
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
}`,bS=`#define LAMBERT
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
}`,wS=`#define LAMBERT
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
}`,MS=`#define MATCAP
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
}`,SS=`#define MATCAP
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
}`,TS=`#define NORMAL
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
}`,ES=`#define NORMAL
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
}`,AS=`#define PHONG
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
}`,CS=`#define PHONG
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
}`,DS=`#define STANDARD
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
}`,PS=`#define STANDARD
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
}`,RS=`#define TOON
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
}`,LS=`#define TOON
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
}`,IS=`uniform float size;
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
}`,FS=`uniform vec3 diffuse;
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
}`,OS=`#include <common>
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
}`,NS=`uniform vec3 color;
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
}`,BS=`uniform float rotation;
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
}`,kS=`uniform vec3 diffuse;
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
}`,Pe={alphamap_fragment:aw,alphamap_pars_fragment:lw,alphatest_fragment:cw,alphatest_pars_fragment:uw,aomap_fragment:hw,aomap_pars_fragment:fw,begin_vertex:dw,beginnormal_vertex:pw,bsdfs:mw,iridescence_fragment:gw,bumpmap_pars_fragment:vw,clipping_planes_fragment:_w,clipping_planes_pars_fragment:xw,clipping_planes_pars_vertex:yw,clipping_planes_vertex:bw,color_fragment:ww,color_pars_fragment:Mw,color_pars_vertex:Sw,color_vertex:Tw,common:Ew,cube_uv_reflection_fragment:Aw,defaultnormal_vertex:Cw,displacementmap_pars_vertex:Dw,displacementmap_vertex:Pw,emissivemap_fragment:Rw,emissivemap_pars_fragment:Lw,encodings_fragment:Iw,encodings_pars_fragment:Fw,envmap_fragment:Ow,envmap_common_pars_fragment:Nw,envmap_pars_fragment:Bw,envmap_pars_vertex:kw,envmap_physical_pars_fragment:Kw,envmap_vertex:Uw,fog_vertex:zw,fog_pars_vertex:Hw,fog_fragment:Vw,fog_pars_fragment:Gw,gradientmap_pars_fragment:Ww,lightmap_fragment:jw,lightmap_pars_fragment:$w,lights_lambert_fragment:Xw,lights_lambert_pars_fragment:qw,lights_pars_begin:Yw,lights_toon_fragment:Zw,lights_toon_pars_fragment:Qw,lights_phong_fragment:Jw,lights_phong_pars_fragment:eM,lights_physical_fragment:tM,lights_physical_pars_fragment:nM,lights_fragment_begin:iM,lights_fragment_maps:rM,lights_fragment_end:sM,logdepthbuf_fragment:oM,logdepthbuf_pars_fragment:aM,logdepthbuf_pars_vertex:lM,logdepthbuf_vertex:cM,map_fragment:uM,map_pars_fragment:hM,map_particle_fragment:fM,map_particle_pars_fragment:dM,metalnessmap_fragment:pM,metalnessmap_pars_fragment:mM,morphcolor_vertex:gM,morphnormal_vertex:vM,morphtarget_pars_vertex:_M,morphtarget_vertex:xM,normal_fragment_begin:yM,normal_fragment_maps:bM,normal_pars_fragment:wM,normal_pars_vertex:MM,normal_vertex:SM,normalmap_pars_fragment:TM,clearcoat_normal_fragment_begin:EM,clearcoat_normal_fragment_maps:AM,clearcoat_pars_fragment:CM,iridescence_pars_fragment:DM,output_fragment:PM,packing:RM,premultiplied_alpha_fragment:LM,project_vertex:IM,dithering_fragment:FM,dithering_pars_fragment:OM,roughnessmap_fragment:NM,roughnessmap_pars_fragment:BM,shadowmap_pars_fragment:kM,shadowmap_pars_vertex:UM,shadowmap_vertex:zM,shadowmask_pars_fragment:HM,skinbase_vertex:VM,skinning_pars_vertex:GM,skinning_vertex:WM,skinnormal_vertex:jM,specularmap_fragment:$M,specularmap_pars_fragment:XM,tonemapping_fragment:qM,tonemapping_pars_fragment:YM,transmission_fragment:KM,transmission_pars_fragment:ZM,uv_pars_fragment:QM,uv_pars_vertex:JM,uv_vertex:eS,uv2_pars_fragment:tS,uv2_pars_vertex:nS,uv2_vertex:iS,worldpos_vertex:rS,background_vert:sS,background_frag:oS,backgroundCube_vert:aS,backgroundCube_frag:lS,cube_vert:cS,cube_frag:uS,depth_vert:hS,depth_frag:fS,distanceRGBA_vert:dS,distanceRGBA_frag:pS,equirect_vert:mS,equirect_frag:gS,linedashed_vert:vS,linedashed_frag:_S,meshbasic_vert:xS,meshbasic_frag:yS,meshlambert_vert:bS,meshlambert_frag:wS,meshmatcap_vert:MS,meshmatcap_frag:SS,meshnormal_vert:TS,meshnormal_frag:ES,meshphong_vert:AS,meshphong_frag:CS,meshphysical_vert:DS,meshphysical_frag:PS,meshtoon_vert:RS,meshtoon_frag:LS,points_vert:IS,points_frag:FS,shadow_vert:OS,shadow_frag:NS,sprite_vert:BS,sprite_frag:kS},oe={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new sn},uv2Transform:{value:new sn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new sn}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new sn}}},Sn={basic:{uniforms:Nt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Nt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Nt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Nt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Nt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Nt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Nt([oe.points,oe.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Nt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Nt([oe.common,oe.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Nt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Nt([oe.sprite,oe.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new sn},t2D:{value:null}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Nt([oe.common,oe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Nt([oe.lights,oe.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Sn.physical={uniforms:Nt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new he(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};function US(i,e,t,n,r,s,o){const a=new Te(0);let c=s===!0?0:1,u,l,h=null,f=0,d=null;function g(p,v){let _=!1,y=v.isScene===!0?v.background:null;y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y));const x=i.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(y=null),y===null?m(a,c):y&&y.isColor&&(m(y,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Pa)?(l===void 0&&(l=new se(new lt(1,1,1),new dt({name:"BackgroundCubeMaterial",uniforms:Br(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,L,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,(h!==y||f!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new se(new Zr(2,2),new dt({name:"BackgroundMaterial",uniforms:Br(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function m(p,v){n.buffers.color.setClear(p.r,p.g,p.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(p,v=1){a.set(p),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,m(a,c)},render:g}}function zS(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=p(null);let u=c,l=!1;function h(N,V,K,te,$){let F=!1;if(o){const B=m(te,K,V);u!==B&&(u=B,d(u.object)),F=v(N,te,K,$),F&&_(N,te,K,$)}else{const B=V.wireframe===!0;(u.geometry!==te.id||u.program!==K.id||u.wireframe!==B)&&(u.geometry=te.id,u.program=K.id,u.wireframe=B,F=!0)}$!==null&&t.update($,34963),(F||l)&&(l=!1,b(N,V,K,te),$!==null&&i.bindBuffer(34963,t.get($).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function m(N,V,K){const te=K.wireframe===!0;let $=a[N.id];$===void 0&&($={},a[N.id]=$);let F=$[V.id];F===void 0&&(F={},$[V.id]=F);let B=F[te];return B===void 0&&(B=p(f()),F[te]=B),B}function p(N){const V=[],K=[],te=[];for(let $=0;$<r;$++)V[$]=0,K[$]=0,te[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:te,object:N,attributes:{},index:null}}function v(N,V,K,te){const $=u.attributes,F=V.attributes;let B=0;const ne=K.getAttributes();for(const ee in ne)if(ne[ee].location>=0){const ue=$[ee];let G=F[ee];if(G===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),ue===void 0||ue.attribute!==G||G&&ue.data!==G.data)return!0;B++}return u.attributesNum!==B||u.index!==te}function _(N,V,K,te){const $={},F=V.attributes;let B=0;const ne=K.getAttributes();for(const ee in ne)if(ne[ee].location>=0){let ue=F[ee];ue===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(ue=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(ue=N.instanceColor));const G={};G.attribute=ue,ue&&ue.data&&(G.data=ue.data),$[ee]=G,B++}u.attributes=$,u.attributesNum=B,u.index=te}function y(){const N=u.newAttributes;for(let V=0,K=N.length;V<K;V++)N[V]=0}function x(N){w(N,0)}function w(N,V){const K=u.newAttributes,te=u.enabledAttributes,$=u.attributeDivisors;K[N]=1,te[N]===0&&(i.enableVertexAttribArray(N),te[N]=1),$[N]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,V),$[N]=V)}function A(){const N=u.newAttributes,V=u.enabledAttributes;for(let K=0,te=V.length;K<te;K++)V[K]!==N[K]&&(i.disableVertexAttribArray(K),V[K]=0)}function L(N,V,K,te,$,F){n.isWebGL2===!0&&(K===5124||K===5125)?i.vertexAttribIPointer(N,V,K,$,F):i.vertexAttribPointer(N,V,K,te,$,F)}function b(N,V,K,te){if(n.isWebGL2===!1&&(N.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const $=te.attributes,F=K.getAttributes(),B=V.defaultAttributeValues;for(const ne in F){const ee=F[ne];if(ee.location>=0){let re=$[ne];if(re===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(re=N.instanceColor)),re!==void 0){const ue=re.normalized,G=re.itemSize,Z=t.get(re);if(Z===void 0)continue;const Ce=Z.buffer,_e=Z.type,ye=Z.bytesPerElement;if(re.isInterleavedBufferAttribute){const le=re.data,ke=le.stride,Ee=re.offset;if(le.isInstancedInterleavedBuffer){for(let be=0;be<ee.locationSize;be++)w(ee.location+be,le.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let be=0;be<ee.locationSize;be++)x(ee.location+be);i.bindBuffer(34962,Ce);for(let be=0;be<ee.locationSize;be++)L(ee.location+be,G/ee.locationSize,_e,ue,ke*ye,(Ee+G/ee.locationSize*be)*ye)}else{if(re.isInstancedBufferAttribute){for(let le=0;le<ee.locationSize;le++)w(ee.location+le,re.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let le=0;le<ee.locationSize;le++)x(ee.location+le);i.bindBuffer(34962,Ce);for(let le=0;le<ee.locationSize;le++)L(ee.location+le,G/ee.locationSize,_e,ue,G*ye,G/ee.locationSize*le*ye)}}else if(B!==void 0){const ue=B[ne];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(ee.location,ue);break;case 3:i.vertexAttrib3fv(ee.location,ue);break;case 4:i.vertexAttrib4fv(ee.location,ue);break;default:i.vertexAttrib1fv(ee.location,ue)}}}}A()}function T(){j();for(const N in a){const V=a[N];for(const K in V){const te=V[K];for(const $ in te)g(te[$].object),delete te[$];delete V[K]}delete a[N]}}function I(N){if(a[N.id]===void 0)return;const V=a[N.id];for(const K in V){const te=V[K];for(const $ in te)g(te[$].object),delete te[$];delete V[K]}delete a[N.id]}function W(N){for(const V in a){const K=a[V];if(K[N.id]===void 0)continue;const te=K[N.id];for(const $ in te)g(te[$].object),delete te[$];delete K[N.id]}}function j(){U(),l=!0,u!==c&&(u=c,d(u.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:j,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:W,initAttributes:y,enableAttribute:x,disableUnusedAttributes:A}}function HS(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,l){i.drawArrays(s,u,l),t.update(l,s,1)}function c(u,l,h){if(h===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,u,l,h),t.update(l,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function VS(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const u=o||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),p=i.getParameter(36347),v=i.getParameter(36348),_=i.getParameter(36349),y=f>0,x=o||e.has("OES_texture_float"),w=y&&x,A=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:A}}function GS(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ei,a=new sn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||r;return r=f,t=l(h,d,0),n=h.length,g},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1,u()},this.setState=function(h,f,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,v=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?l(null):u();else{const _=s?0:n,y=_*4;let x=v.clippingState||null;c.value=x,x=l(g,f,y,d);for(let w=0;w!==y;++w)x[w]=t[w];v.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,f,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=c.value,g!==!0||p===null){const v=d+m*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<v)&&(p=new Float32Array(v));for(let y=0,x=d;y!==m;++y,x+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function WS(i){let e=new WeakMap;function t(o,a){return a===mc?o.mapping=Lr:a===gc&&(o.mapping=Ir),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===mc||a===gc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new iw(c.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Zs extends om{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Tr=4,nf=[.125,.215,.35,.446,.526,.582],Pi=20,Ll=new Zs,rf=new Te;let Il=null;const Ai=(1+Math.sqrt(5))/2,Mr=1/Ai,sf=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ai,Mr),new D(0,Ai,-Mr),new D(Mr,0,Ai),new D(-Mr,0,Ai),new D(Ai,Mr,0),new D(-Ai,Mr,0)];class of{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Il=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Il),e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Is,format:tn,encoding:ji,depthBuffer:!1},r=af(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=af(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jS(s)),this._blurMaterial=$S(s,e,t)}return r}_compileMaterial(e){const t=new se(this._lodPlanes[0],e);this._renderer.compile(t,Ll)}_sceneToCubeUV(e,t,n,r){const a=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,f=l.toneMapping;l.getClearColor(rf),l.toneMapping=jn,l.autoClear=!1;const d=new dn({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new se(new lt,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(rf),m=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(a.up.set(0,c[v],0),a.lookAt(u[v],0,0)):_===1?(a.up.set(0,0,c[v]),a.lookAt(0,u[v],0)):(a.up.set(0,c[v],0),a.lookAt(0,0,u[v]));const y=this._cubeSize;Ro(r,_*y,v>2?y:0,y,y),l.setRenderTarget(r),m&&l.render(g,a),l.render(e,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=f,l.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Lr||e.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ro(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ll)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=sf[(r-1)%sf.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,h=new se(this._lodPlanes[r],u),f=u.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Pi-1),m=s/g,p=isFinite(s)?1+Math.floor(l*m):Pi;p>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pi}`);const v=[];let _=0;for(let L=0;L<Pi;++L){const b=L/m,T=Math.exp(-b*b/2);v.push(T),L===0?_+=T:L<p&&(_+=2*T)}for(let L=0;L<v.length;L++)v[L]=v[L]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const x=this._sizeLods[r],w=3*x*(r>y-Tr?r-y+Tr:0),A=4*(this._cubeSize-x);Ro(t,w,A,3*x,2*x),c.setRenderTarget(t),c.render(h,Ll)}}function jS(i){const e=[],t=[],n=[];let r=i;const s=i-Tr+1+nf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Tr?c=nf[o-i+Tr-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),l=-u,h=1+u,f=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,g=6,m=3,p=2,v=1,_=new Float32Array(m*g*d),y=new Float32Array(p*g*d),x=new Float32Array(v*g*d);for(let A=0;A<d;A++){const L=A%3*2/3-1,b=A>2?0:-1,T=[L,b,0,L+2/3,b,0,L+2/3,b+1,0,L,b,0,L+2/3,b+1,0,L,b+1,0];_.set(T,m*g*A),y.set(f,p*g*A);const I=[A,A,A,A,A,A];x.set(I,v*g*A)}const w=new pt;w.setAttribute("position",new kt(_,m)),w.setAttribute("uv",new kt(y,p)),w.setAttribute("faceIndex",new kt(x,v)),e.push(w),r>Tr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function af(i,e,t){const n=new mn(i,e,t);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $S(i,e,t){const n=new Float32Array(Pi),r=new D(0,1,0);return new dt({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lu(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function lf(){return new dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function cf(){return new dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function lu(){return`

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
	`}function XS(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===mc||c===gc,l=c===Lr||c===Ir;if(u||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new of(i)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||l&&h&&r(h)){t===null&&(t=new of(i));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0;const u=6;for(let l=0;l<u;l++)a[l]!==void 0&&c++;return c===u}function s(a){const c=a.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function qS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function YS(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,v=m.length;p<v;p++)e.update(m[p],34962)}}function u(h){const f=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const _=d.array;m=d.version;for(let y=0,x=_.length;y<x;y+=3){const w=_[y+0],A=_[y+1],L=_[y+2];f.push(w,A,A,L,L,w)}}else{const _=g.array;m=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const w=y+0,A=y+1,L=y+2;f.push(w,A,A,L,L,w)}}const p=new(Jp(f)?sm:rm)(f,1);p.version=m;const v=s.get(h);v&&e.remove(v),s.set(h,p)}function l(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:l}}function KS(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,c;function u(f){a=f.type,c=f.bytesPerElement}function l(f,d){i.drawElements(s,d,a,f*c),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let m,p;if(r)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,a,f*c,g),t.update(d,s,g)}this.setMode=o,this.setIndex=u,this.render=l,this.renderInstances=h}function ZS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function QS(i,e){return i[0]-e[0]}function JS(i,e){return Math.abs(e[1])-Math.abs(i[1])}function eT(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Xe,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function c(u,l,h,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=g!==void 0?g.length:0;let p=s.get(l);if(p===void 0||p.count!==m){let V=function(){U.dispose(),s.delete(l),l.removeEventListener("dispose",V)};p!==void 0&&p.texture.dispose();const y=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,w=l.morphAttributes.color!==void 0,A=l.morphAttributes.position||[],L=l.morphAttributes.normal||[],b=l.morphAttributes.color||[];let T=0;y===!0&&(T=1),x===!0&&(T=2),w===!0&&(T=3);let I=l.attributes.position.count*T,W=1;I>e.maxTextureSize&&(W=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const j=new Float32Array(I*W*4*m),U=new im(j,I,W,m);U.type=ui,U.needsUpdate=!0;const N=T*4;for(let K=0;K<m;K++){const te=A[K],$=L[K],F=b[K],B=I*W*4*K;for(let ne=0;ne<te.count;ne++){const ee=ne*N;y===!0&&(o.fromBufferAttribute(te,ne),j[B+ee+0]=o.x,j[B+ee+1]=o.y,j[B+ee+2]=o.z,j[B+ee+3]=0),x===!0&&(o.fromBufferAttribute($,ne),j[B+ee+4]=o.x,j[B+ee+5]=o.y,j[B+ee+6]=o.z,j[B+ee+7]=0),w===!0&&(o.fromBufferAttribute(F,ne),j[B+ee+8]=o.x,j[B+ee+9]=o.y,j[B+ee+10]=o.z,j[B+ee+11]=F.itemSize===4?o.w:1)}}p={count:m,texture:U,size:new he(I,W)},s.set(l,p),l.addEventListener("dispose",V)}let v=0;for(let y=0;y<d.length;y++)v+=d[y];const _=l.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",_),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let m=n[l.id];if(m===void 0||m.length!==g){m=[];for(let x=0;x<g;x++)m[x]=[x,0];n[l.id]=m}for(let x=0;x<g;x++){const w=m[x];w[0]=x,w[1]=d[x]}m.sort(JS);for(let x=0;x<8;x++)x<g&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(QS);const p=l.morphAttributes.position,v=l.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const w=a[x],A=w[0],L=w[1];A!==Number.MAX_SAFE_INTEGER&&L?(p&&l.getAttribute("morphTarget"+x)!==p[A]&&l.setAttribute("morphTarget"+x,p[A]),v&&l.getAttribute("morphNormal"+x)!==v[A]&&l.setAttribute("morphNormal"+x,v[A]),r[x]=L,_+=L):(p&&l.hasAttribute("morphTarget"+x)===!0&&l.deleteAttribute("morphTarget"+x),v&&l.hasAttribute("morphNormal"+x)===!0&&l.deleteAttribute("morphNormal"+x),r[x]=0)}const y=l.morphTargetsRelative?1:1-_;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function tT(i,e,t,n){let r=new WeakMap;function s(c){const u=n.render.frame,l=c.geometry,h=e.get(c,l);return r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const cm=new Ut,um=new im,hm=new V1,fm=new am,uf=[],hf=[],ff=new Float32Array(16),df=new Float32Array(9),pf=new Float32Array(4);function Qr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=uf[r];if(s===void 0&&(s=new Float32Array(r),uf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function La(i,e){let t=hf[e];t===void 0&&(t=new Int32Array(e),hf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function iT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function rT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function sT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function oT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;pf.set(n),i.uniformMatrix2fv(this.addr,!1,pf),_t(t,n)}}function aT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;df.set(n),i.uniformMatrix3fv(this.addr,!1,df),_t(t,n)}}function lT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;ff.set(n),i.uniformMatrix4fv(this.addr,!1,ff),_t(t,n)}}function cT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function uT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function hT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function fT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function dT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function mT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function gT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function vT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||cm,r)}function _T(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||hm,r)}function xT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fm,r)}function yT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||um,r)}function bT(i){switch(i){case 5126:return nT;case 35664:return iT;case 35665:return rT;case 35666:return sT;case 35674:return oT;case 35675:return aT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return hT;case 35669:case 35673:return fT;case 5125:return dT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return yT}}function wT(i,e){i.uniform1fv(this.addr,e)}function MT(i,e){const t=Qr(e,this.size,2);i.uniform2fv(this.addr,t)}function ST(i,e){const t=Qr(e,this.size,3);i.uniform3fv(this.addr,t)}function TT(i,e){const t=Qr(e,this.size,4);i.uniform4fv(this.addr,t)}function ET(i,e){const t=Qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function AT(i,e){const t=Qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function CT(i,e){const t=Qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function DT(i,e){i.uniform1iv(this.addr,e)}function PT(i,e){i.uniform2iv(this.addr,e)}function RT(i,e){i.uniform3iv(this.addr,e)}function LT(i,e){i.uniform4iv(this.addr,e)}function IT(i,e){i.uniform1uiv(this.addr,e)}function FT(i,e){i.uniform2uiv(this.addr,e)}function OT(i,e){i.uniform3uiv(this.addr,e)}function NT(i,e){i.uniform4uiv(this.addr,e)}function BT(i,e,t){const n=this.cache,r=e.length,s=La(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||cm,s[o])}function kT(i,e,t){const n=this.cache,r=e.length,s=La(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||hm,s[o])}function UT(i,e,t){const n=this.cache,r=e.length,s=La(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||fm,s[o])}function zT(i,e,t){const n=this.cache,r=e.length,s=La(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||um,s[o])}function HT(i){switch(i){case 5126:return wT;case 35664:return MT;case 35665:return ST;case 35666:return TT;case 35674:return ET;case 35675:return AT;case 35676:return CT;case 5124:case 35670:return DT;case 35667:case 35671:return PT;case 35668:case 35672:return RT;case 35669:case 35673:return LT;case 5125:return IT;case 36294:return FT;case 36295:return OT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return zT}}class VT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=bT(t.type)}}class GT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=HT(t.type)}}class WT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Fl=/(\w+)(\])?(\[|\.)?/g;function mf(i,e){i.seq.push(e),i.map[e.id]=e}function jT(i,e,t){const n=i.name,r=n.length;for(Fl.lastIndex=0;;){const s=Fl.exec(n),o=Fl.lastIndex;let a=s[1];const c=s[2]==="]",u=s[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===r){mf(t,u===void 0?new VT(a,i,e):new GT(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new WT(a),mf(t,h)),t=h}}}class qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);jT(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function gf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let $T=0;function XT(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function qT(i){switch(i){case ji:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function vf(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+XT(i.getShaderSource(e),o)}else return r}function YT(i,e){const t=qT(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function KT(i,e){let t;switch(e){case t1:t="Linear";break;case n1:t="Reinhard";break;case i1:t="OptimizedCineon";break;case r1:t="ACESFilmic";break;case s1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ZT(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function QT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function JT(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function bs(i){return i!==""}function _f(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eE=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(eE,tE)}function tE(i,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wc(t)}const nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(i){return i.replace(nE,iE)}function iE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ib?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ys&&(e="SHADOWMAP_TYPE_VSM"),e}function sE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Lr:case Ir:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function aE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qp:e="ENVMAP_BLENDING_MULTIPLY";break;case Jb:e="ENVMAP_BLENDING_MIX";break;case e1:e="ENVMAP_BLENDING_ADD";break}return e}function lE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cE(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=rE(t),u=sE(t),l=oE(t),h=aE(t),f=lE(t),d=t.isWebGL2?"":ZT(t),g=QT(s),m=r.createProgram();let p,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(bs).join(`
`),p.length>0&&(p+=`
`),v=[d,g].filter(bs).join(`
`),v.length>0&&(v+=`
`)):(p=[bf(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),v=[d,bf(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==jn?KT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,YT("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),o=wc(o),o=_f(o,t),o=xf(o,t),a=wc(a),a=_f(a,t),a=xf(a,t),o=yf(o),a=yf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=_+p+o,x=_+v+a,w=gf(r,35633,y),A=gf(r,35632,x);if(r.attachShader(m,w),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),i.debug.checkShaderErrors){const T=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(w).trim(),W=r.getShaderInfoLog(A).trim();let j=!0,U=!0;if(r.getProgramParameter(m,35714)===!1){j=!1;const N=vf(r,w,"vertex"),V=vf(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+T+`
`+N+`
`+V)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||W==="")&&(U=!1);U&&(this.diagnostics={runnable:j,programLog:T,vertexShader:{log:I,prefix:p},fragmentShader:{log:W,prefix:v}})}r.deleteShader(w),r.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new qo(r,m)),L};let b;return this.getAttributes=function(){return b===void 0&&(b=JT(r,m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=$T++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}let uE=0;class hE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fE(e),t.set(e,n)),n}}class fE{constructor(e){this.id=uE++,this.code=e,this.usedTimes=0}}function dE(i,e,t,n,r,s,o){const a=new ou,c=new hE,u=[],l=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,T,I,W,j){const U=W.fog,N=j.geometry,V=b.isMeshStandardMaterial?W.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),te=!!K&&K.mapping===Pa?K.image.height:null,$=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const F=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,B=F!==void 0?F.length:0;let ne=0;N.morphAttributes.position!==void 0&&(ne=1),N.morphAttributes.normal!==void 0&&(ne=2),N.morphAttributes.color!==void 0&&(ne=3);let ee,re,ue,G;if($){const ke=Sn[$];ee=ke.vertexShader,re=ke.fragmentShader}else ee=b.vertexShader,re=b.fragmentShader,c.update(b),ue=c.getVertexShaderID(b),G=c.getFragmentShaderID(b);const Z=i.getRenderTarget(),Ce=b.alphaTest>0,_e=b.clearcoat>0,ye=b.iridescence>0;return{isWebGL2:l,shaderID:$,shaderName:b.type,vertexShader:ee,fragmentShader:re,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:G,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Z===null?i.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:ji,map:!!b.map,matcap:!!b.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:te,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===T1,tangentSpaceNormalMap:b.normalMapType===ru,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===je,clearcoat:_e,clearcoatMap:_e&&!!b.clearcoatMap,clearcoatRoughnessMap:_e&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!b.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!b.iridescenceMap,iridescenceThicknessMap:ye&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Dr,alphaMap:!!b.alphaMap,alphaTest:Ce,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!N.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!U,useFog:b.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:jn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Tn,flipSided:b.side===Vt,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)T.push(I),T.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(v(T,b),_(T,b),T.push(i.outputEncoding)),T.push(b.customProgramCacheKey),T.join()}function v(b,T){b.push(T.precision),b.push(T.outputEncoding),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.combine),b.push(T.vertexUvs),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function _(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),b.push(a.mask)}function y(b){const T=g[b.type];let I;if(T){const W=Sn[T];I=aa.clone(W.uniforms)}else I=b.uniforms;return I}function x(b,T){let I;for(let W=0,j=u.length;W<j;W++){const U=u[W];if(U.cacheKey===T){I=U,++I.usedTimes;break}}return I===void 0&&(I=new cE(i,T,b,s),u.push(I)),I}function w(b){if(--b.usedTimes===0){const T=u.indexOf(b);u[T]=u[u.length-1],u.pop(),b.destroy()}}function A(b){c.remove(b)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:x,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:L}}function pE(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function mE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,g,m,p){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},i[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=d,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=m,v.group=p),e++,v}function a(h,f,d,g,m,p){const v=o(h,f,d,g,m,p);d.transmission>0?n.push(v):d.transparent===!0?r.push(v):t.push(v)}function c(h,f,d,g,m,p){const v=o(h,f,d,g,m,p);d.transmission>0?n.unshift(v):d.transparent===!0?r.unshift(v):t.unshift(v)}function u(h,f){t.length>1&&t.sort(h||mE),n.length>1&&n.sort(f||wf),r.length>1&&r.sort(f||wf)}function l(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:l,sort:u}}function gE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Mf,i.set(n,[o])):r>=s.length?(o=new Mf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function vE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Te};break;case"SpotLight":t={position:new D,direction:new D,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function _E(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xE=0;function yE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bE(i,e){const t=new vE,n=_E(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)r.probe.push(new D);const s=new D,o=new Fe,a=new Fe;function c(l,h){let f=0,d=0,g=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let m=0,p=0,v=0,_=0,y=0,x=0,w=0,A=0,L=0,b=0;l.sort(yE);const T=h!==!0?Math.PI:1;for(let W=0,j=l.length;W<j;W++){const U=l[W],N=U.color,V=U.intensity,K=U.distance,te=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=N.r*V*T,d+=N.g*V*T,g+=N.b*V*T;else if(U.isLightProbe)for(let $=0;$<9;$++)r.probe[$].addScaledVector(U.sh.coefficients[$],V);else if(U.isDirectionalLight){const $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const F=U.shadow,B=n.get(U);B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,r.directionalShadow[m]=B,r.directionalShadowMap[m]=te,r.directionalShadowMatrix[m]=U.shadow.matrix,x++}r.directional[m]=$,m++}else if(U.isSpotLight){const $=t.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(N).multiplyScalar(V*T),$.distance=K,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,r.spot[v]=$;const F=U.shadow;if(U.map&&(r.spotLightMap[L]=U.map,L++,F.updateMatrices(U),U.castShadow&&b++),r.spotLightMatrix[v]=F.matrix,U.castShadow){const B=n.get(U);B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,r.spotShadow[v]=B,r.spotShadowMap[v]=te,A++}v++}else if(U.isRectAreaLight){const $=t.get(U);$.color.copy(N).multiplyScalar(V),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),r.rectArea[_]=$,_++}else if(U.isPointLight){const $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity*T),$.distance=U.distance,$.decay=U.decay,U.castShadow){const F=U.shadow,B=n.get(U);B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,B.shadowCameraNear=F.camera.near,B.shadowCameraFar=F.camera.far,r.pointShadow[p]=B,r.pointShadowMap[p]=te,r.pointShadowMatrix[p]=U.shadow.matrix,w++}r.point[p]=$,p++}else if(U.isHemisphereLight){const $=t.get(U);$.skyColor.copy(U.color).multiplyScalar(V*T),$.groundColor.copy(U.groundColor).multiplyScalar(V*T),r.hemi[y]=$,y++}}_>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const I=r.hash;(I.directionalLength!==m||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==_||I.hemiLength!==y||I.numDirectionalShadows!==x||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==L)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=_,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=A+L-b,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=b,I.directionalLength=m,I.pointLength=p,I.spotLength=v,I.rectAreaLength=_,I.hemiLength=y,I.numDirectionalShadows=x,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=L,r.version=xE++)}function u(l,h){let f=0,d=0,g=0,m=0,p=0;const v=h.matrixWorldInverse;for(let _=0,y=l.length;_<y;_++){const x=l[_];if(x.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),f++}else if(x.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),g++}else if(x.isRectAreaLight){const w=r.rectArea[m];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(v),a.identity(),o.copy(x.matrixWorld),o.premultiply(v),a.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const w=r.point[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(v),d++}else if(x.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(v),p++}}}return{setup:c,setupView:u,state:r}}function Sf(i,e){const t=new bE(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function c(h){t.setup(n,h)}function u(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a}}function wE(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Sf(i,e),t.set(s,[c])):o>=a.length?(c=new Sf(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class ME extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SE extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EE=`uniform sampler2D shadow_pass;
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
}`;function AE(i,e,t){let n=new au;const r=new he,s=new he,o=new Xe,a=new ME({depthPacking:S1}),c=new SE,u={},l=t.maxTextureSize,h={0:Vt,1:Gi,2:Tn},f=new dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:TE,fragmentShader:EE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new se(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jp,this.render=function(x,w,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const L=i.getRenderTarget(),b=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),I=i.state;I.setBlending(pi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let W=0,j=x.length;W<j;W++){const U=x[W],N=U.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const V=N.getFrameExtents();if(r.multiply(V),s.copy(N.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/V.x),r.x=s.x*V.x,N.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/V.y),r.y=s.y*V.y,N.mapSize.y=s.y)),N.map===null){const te=this.type!==ys?{minFilter:Et,magFilter:Et}:{};N.map=new mn(r.x,r.y,te),N.map.texture.name=U.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const K=N.getViewportCount();for(let te=0;te<K;te++){const $=N.getViewport(te);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),I.viewport(o),N.updateMatrices(U,te),n=N.getFrustum(),y(w,A,N.camera,U,this.type)}N.isPointLightShadow!==!0&&this.type===ys&&v(N,A),N.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(L,b,T)};function v(x,w){const A=e.update(m);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new mn(r.x,r.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(w,null,A,f,m,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(w,null,A,d,m,null)}function _(x,w,A,L,b,T){let I=null;const W=A.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(W!==void 0?I=W:I=A.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const j=I.uuid,U=w.uuid;let N=u[j];N===void 0&&(N={},u[j]=N);let V=N[U];V===void 0&&(V=I.clone(),N[U]=V),I=V}return I.visible=w.visible,I.wireframe=w.wireframe,T===ys?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:h[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaTest,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(A.matrixWorld),I.nearDistance=L,I.farDistance=b),I}function y(x,w,A,L,b){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&b===ys)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);const W=e.update(x),j=x.material;if(Array.isArray(j)){const U=W.groups;for(let N=0,V=U.length;N<V;N++){const K=U[N],te=j[K.materialIndex];if(te&&te.visible){const $=_(x,te,L,A.near,A.far,b);i.renderBufferDirect(A,null,W,$,x,K)}}}else if(j.visible){const U=_(x,j,L,A.near,A.far,b);i.renderBufferDirect(A,null,W,U,x,null)}}const I=x.children;for(let W=0,j=I.length;W<j;W++)y(I[W],w,A,L,b)}}function CE(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const X=new Xe;let ie=null;const pe=new Xe(0,0,0,0);return{setMask:function(we){ie!==we&&!O&&(i.colorMask(we,we,we,we),ie=we)},setLocked:function(we){O=we},setClear:function(we,Ve,bt,At,_i){_i===!0&&(we*=At,Ve*=At,bt*=At),X.set(we,Ve,bt,At),pe.equals(X)===!1&&(i.clearColor(we,Ve,bt,At),pe.copy(X))},reset:function(){O=!1,ie=null,pe.set(-1,0,0,0)}}}function s(){let O=!1,X=null,ie=null,pe=null;return{setTest:function(we){we?Ce(2929):_e(2929)},setMask:function(we){X!==we&&!O&&(i.depthMask(we),X=we)},setFunc:function(we){if(ie!==we){switch(we){case $b:i.depthFunc(512);break;case Xb:i.depthFunc(519);break;case qb:i.depthFunc(513);break;case pc:i.depthFunc(515);break;case Yb:i.depthFunc(514);break;case Kb:i.depthFunc(518);break;case Zb:i.depthFunc(516);break;case Qb:i.depthFunc(517);break;default:i.depthFunc(515)}ie=we}},setLocked:function(we){O=we},setClear:function(we){pe!==we&&(i.clearDepth(we),pe=we)},reset:function(){O=!1,X=null,ie=null,pe=null}}}function o(){let O=!1,X=null,ie=null,pe=null,we=null,Ve=null,bt=null,At=null,_i=null;return{setTest:function(rt){O||(rt?Ce(2960):_e(2960))},setMask:function(rt){X!==rt&&!O&&(i.stencilMask(rt),X=rt)},setFunc:function(rt,Ln,Kt){(ie!==rt||pe!==Ln||we!==Kt)&&(i.stencilFunc(rt,Ln,Kt),ie=rt,pe=Ln,we=Kt)},setOp:function(rt,Ln,Kt){(Ve!==rt||bt!==Ln||At!==Kt)&&(i.stencilOp(rt,Ln,Kt),Ve=rt,bt=Ln,At=Kt)},setLocked:function(rt){O=rt},setClear:function(rt){_i!==rt&&(i.clearStencil(rt),_i=rt)},reset:function(){O=!1,X=null,ie=null,pe=null,we=null,Ve=null,bt=null,At=null,_i=null}}}const a=new r,c=new s,u=new o,l=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,m=[],p=null,v=!1,_=null,y=null,x=null,w=null,A=null,L=null,b=null,T=!1,I=null,W=null,j=null,U=null,N=null;const V=i.getParameter(35661);let K=!1,te=0;const $=i.getParameter(7938);$.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec($)[1]),K=te>=1):$.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=te>=2);let F=null,B={};const ne=i.getParameter(3088),ee=i.getParameter(2978),re=new Xe().fromArray(ne),ue=new Xe().fromArray(ee);function G(O,X,ie){const pe=new Uint8Array(4),we=i.createTexture();i.bindTexture(O,we),i.texParameteri(O,10241,9728),i.texParameteri(O,10240,9728);for(let Ve=0;Ve<ie;Ve++)i.texImage2D(X+Ve,0,6408,1,1,0,6408,5121,pe);return we}const Z={};Z[3553]=G(3553,3553,1),Z[34067]=G(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Ce(2929),c.setFunc(pc),et(!1),mt(mh),Ce(2884),Qe(pi);function Ce(O){f[O]!==!0&&(i.enable(O),f[O]=!0)}function _e(O){f[O]!==!1&&(i.disable(O),f[O]=!1)}function ye(O,X){return d[O]!==X?(i.bindFramebuffer(O,X),d[O]=X,n&&(O===36009&&(d[36160]=X),O===36160&&(d[36009]=X)),!0):!1}function le(O,X){let ie=m,pe=!1;if(O)if(ie=g.get(X),ie===void 0&&(ie=[],g.set(X,ie)),O.isWebGLMultipleRenderTargets){const we=O.texture;if(ie.length!==we.length||ie[0]!==36064){for(let Ve=0,bt=we.length;Ve<bt;Ve++)ie[Ve]=36064+Ve;ie.length=we.length,pe=!0}}else ie[0]!==36064&&(ie[0]=36064,pe=!0);else ie[0]!==1029&&(ie[0]=1029,pe=!0);pe&&(t.isWebGL2?i.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function ke(O){return p!==O?(i.useProgram(O),p=O,!0):!1}const Ee={[Sr]:32774,[Ob]:32778,[Nb]:32779};if(n)Ee[_h]=32775,Ee[xh]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(Ee[_h]=O.MIN_EXT,Ee[xh]=O.MAX_EXT)}const be={[Bb]:0,[kb]:1,[Ub]:768,[$p]:770,[jb]:776,[Gb]:774,[Hb]:772,[zb]:769,[Xp]:771,[Wb]:775,[Vb]:773};function Qe(O,X,ie,pe,we,Ve,bt,At){if(O===pi){v===!0&&(_e(3042),v=!1);return}if(v===!1&&(Ce(3042),v=!0),O!==Fb){if(O!==_||At!==T){if((y!==Sr||A!==Sr)&&(i.blendEquation(32774),y=Sr,A=Sr),At)switch(O){case Dr:i.blendFuncSeparate(1,771,1,771);break;case ia:i.blendFunc(1,1);break;case gh:i.blendFuncSeparate(0,769,0,1);break;case vh:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Dr:i.blendFuncSeparate(770,771,1,771);break;case ia:i.blendFunc(770,1);break;case gh:i.blendFuncSeparate(0,769,0,1);break;case vh:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,w=null,L=null,b=null,_=O,T=At}return}we=we||X,Ve=Ve||ie,bt=bt||pe,(X!==y||we!==A)&&(i.blendEquationSeparate(Ee[X],Ee[we]),y=X,A=we),(ie!==x||pe!==w||Ve!==L||bt!==b)&&(i.blendFuncSeparate(be[ie],be[pe],be[Ve],be[bt]),x=ie,w=pe,L=Ve,b=bt),_=O,T=null}function it(O,X){O.side===Tn?_e(2884):Ce(2884);let ie=O.side===Vt;X&&(ie=!ie),et(ie),O.blending===Dr&&O.transparent===!1?Qe(pi):Qe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),a.setMask(O.colorWrite);const pe=O.stencilWrite;u.setTest(pe),pe&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Be(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ce(32926):_e(32926)}function et(O){I!==O&&(O?i.frontFace(2304):i.frontFace(2305),I=O)}function mt(O){O!==Rb?(Ce(2884),O!==W&&(O===mh?i.cullFace(1029):O===Lb?i.cullFace(1028):i.cullFace(1032))):_e(2884),W=O}function tt(O){O!==j&&(K&&i.lineWidth(O),j=O)}function Be(O,X,ie){O?(Ce(32823),(U!==X||N!==ie)&&(i.polygonOffset(X,ie),U=X,N=ie)):_e(32823)}function xt(O){O?Ce(3089):_e(3089)}function yt(O){O===void 0&&(O=33984+V-1),F!==O&&(i.activeTexture(O),F=O)}function C(O,X,ie){ie===void 0&&(F===null?ie=33984+V-1:ie=F);let pe=B[ie];pe===void 0&&(pe={type:void 0,texture:void 0},B[ie]=pe),(pe.type!==O||pe.texture!==X)&&(F!==ie&&(i.activeTexture(ie),F=ie),i.bindTexture(O,X||Z[O]),pe.type=O,pe.texture=X)}function M(){const O=B[F];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function P(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function R(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function k(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(O){re.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),re.copy(O))}function ge(O){ue.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ue.copy(O))}function Oe(O,X){let ie=h.get(X);ie===void 0&&(ie=new WeakMap,h.set(X,ie));let pe=ie.get(O);pe===void 0&&(pe=i.getUniformBlockIndex(X,O.name),ie.set(O,pe))}function De(O,X){const pe=h.get(X).get(O);l.get(O)!==pe&&(i.uniformBlockBinding(X,pe,O.__bindingPointIndex),l.set(O,pe))}function Ue(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},F=null,B={},d={},g=new WeakMap,m=[],p=null,v=!1,_=null,y=null,x=null,w=null,A=null,L=null,b=null,T=!1,I=null,W=null,j=null,U=null,N=null,re.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:Ce,disable:_e,bindFramebuffer:ye,drawBuffers:le,useProgram:ke,setBlending:Qe,setMaterial:it,setFlipSided:et,setCullFace:mt,setLineWidth:tt,setPolygonOffset:Be,setScissorTest:xt,activeTexture:yt,bindTexture:C,unbindTexture:M,compressedTexImage2D:S,compressedTexImage3D:P,texImage2D:de,texImage3D:fe,updateUBOMapping:Oe,uniformBlockBinding:De,texStorage2D:k,texStorage3D:ce,texSubImage2D:J,texSubImage3D:ae,compressedTexSubImage2D:me,compressedTexSubImage3D:R,scissor:ve,viewport:ge,reset:Ue}}function DE(i,e,t,n,r,s,o){const a=r.isWebGL2,c=r.maxTextures,u=r.maxCubemapSize,l=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return v?new OffscreenCanvas(C,M):Ns("canvas")}function y(C,M,S,P){let J=1;if((C.width>P||C.height>P)&&(J=P/Math.max(C.width,C.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ae=M?oa:Math.floor,me=ae(J*C.width),R=ae(J*C.height);m===void 0&&(m=_(me,R));const k=S?_(me,R):m;return k.width=me,k.height=R,k.getContext("2d").drawImage(C,0,0,me,R),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+me+"x"+R+")."),k}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return bc(C.width)&&bc(C.height)}function w(C){return a?!1:C.wrapS!==en||C.wrapT!==en||C.minFilter!==Et&&C.minFilter!==Ht}function A(C,M){return C.generateMipmaps&&M&&C.minFilter!==Et&&C.minFilter!==Ht}function L(C){i.generateMipmap(C)}function b(C,M,S,P,J=!1){if(a===!1)return M;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae=M;return M===6403&&(S===5126&&(ae=33326),S===5131&&(ae=33325),S===5121&&(ae=33321)),M===33319&&(S===5126&&(ae=33328),S===5131&&(ae=33327),S===5121&&(ae=33323)),M===6408&&(S===5126&&(ae=34836),S===5131&&(ae=34842),S===5121&&(ae=P===je&&J===!1?35907:32856),S===32819&&(ae=32854),S===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function T(C,M,S){return A(C,S)===!0||C.isFramebufferTexture&&C.minFilter!==Et&&C.minFilter!==Ht?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function I(C){return C===Et||C===vc||C===_c?9728:9729}function W(C){const M=C.target;M.removeEventListener("dispose",W),U(M),M.isVideoTexture&&g.delete(M)}function j(C){const M=C.target;M.removeEventListener("dispose",j),V(M)}function U(C){const M=n.get(C);if(M.__webglInit===void 0)return;const S=C.source,P=p.get(S);if(P){const J=P[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(C),Object.keys(P).length===0&&p.delete(S)}n.remove(C)}function N(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const S=C.source,P=p.get(S);delete P[M.__cacheKey],o.memory.textures--}function V(C){const M=C.texture,S=n.get(C),P=n.get(M);if(P.__webglTexture!==void 0&&(i.deleteTexture(P.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]),S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J]);else{if(i.deleteFramebuffer(S.__webglFramebuffer),S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let J=0,ae=M.length;J<ae;J++){const me=n.get(M[J]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(M[J])}n.remove(M),n.remove(C)}let K=0;function te(){K=0}function $(){const C=K;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),K+=1,C}function F(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.encoding),M.join()}function B(C,M){const S=n.get(C);if(C.isVideoTexture&&xt(C),C.isRenderTargetTexture===!1&&C.version>0&&S.__version!==C.version){const P=C.image;if(P===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(S,C,M);return}}t.bindTexture(3553,S.__webglTexture,33984+M)}function ne(C,M){const S=n.get(C);if(C.version>0&&S.__version!==C.version){_e(S,C,M);return}t.bindTexture(35866,S.__webglTexture,33984+M)}function ee(C,M){const S=n.get(C);if(C.version>0&&S.__version!==C.version){_e(S,C,M);return}t.bindTexture(32879,S.__webglTexture,33984+M)}function re(C,M){const S=n.get(C);if(C.version>0&&S.__version!==C.version){ye(S,C,M);return}t.bindTexture(34067,S.__webglTexture,33984+M)}const ue={[Fr]:10497,[en]:33071,[ra]:33648},G={[Et]:9728,[vc]:9984,[_c]:9986,[Ht]:9729,[Kp]:9985,[qr]:9987};function Z(C,M,S){if(S?(i.texParameteri(C,10242,ue[M.wrapS]),i.texParameteri(C,10243,ue[M.wrapT]),(C===32879||C===35866)&&i.texParameteri(C,32882,ue[M.wrapR]),i.texParameteri(C,10240,G[M.magFilter]),i.texParameteri(C,10241,G[M.minFilter])):(i.texParameteri(C,10242,33071),i.texParameteri(C,10243,33071),(C===32879||C===35866)&&i.texParameteri(C,32882,33071),(M.wrapS!==en||M.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,10240,I(M.magFilter)),i.texParameteri(C,10241,I(M.minFilter)),M.minFilter!==Et&&M.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");if(M.type===ui&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Is&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(C,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Ce(C,M){let S=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",W));const P=M.source;let J=p.get(P);J===void 0&&(J={},p.set(P,J));const ae=F(M);if(ae!==C.__cacheKey){J[ae]===void 0&&(J[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,S=!0),J[ae].usedTimes++;const me=J[C.__cacheKey];me!==void 0&&(J[C.__cacheKey].usedTimes--,me.usedTimes===0&&N(M)),C.__cacheKey=ae,C.__webglTexture=J[ae].texture}return S}function _e(C,M,S){let P=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(P=35866),M.isData3DTexture&&(P=32879);const J=Ce(C,M),ae=M.source;t.bindTexture(P,C.__webglTexture,33984+S);const me=n.get(ae);if(ae.version!==me.__version||J===!0){t.activeTexture(33984+S),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const R=w(M)&&x(M.image)===!1;let k=y(M.image,R,!1,l);k=yt(M,k);const ce=x(k)||a,de=s.convert(M.format,M.encoding);let fe=s.convert(M.type),ve=b(M.internalFormat,de,fe,M.encoding,M.isVideoTexture);Z(P,M,ce);let ge;const Oe=M.mipmaps,De=a&&M.isVideoTexture!==!0,Ue=me.__version===void 0||J===!0,O=T(M,k,ce);if(M.isDepthTexture)ve=6402,a?M.type===ui?ve=36012:M.type===Fi?ve=33190:M.type===Pr?ve=35056:ve=33189:M.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Bi&&ve===6402&&M.type!==Zp&&M.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Fi,fe=s.convert(M.type)),M.format===Or&&ve===6402&&(ve=34041,M.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Pr,fe=s.convert(M.type))),Ue&&(De?t.texStorage2D(3553,1,ve,k.width,k.height):t.texImage2D(3553,0,ve,k.width,k.height,0,de,fe,null));else if(M.isDataTexture)if(Oe.length>0&&ce){De&&Ue&&t.texStorage2D(3553,O,ve,Oe[0].width,Oe[0].height);for(let X=0,ie=Oe.length;X<ie;X++)ge=Oe[X],De?t.texSubImage2D(3553,X,0,0,ge.width,ge.height,de,fe,ge.data):t.texImage2D(3553,X,ve,ge.width,ge.height,0,de,fe,ge.data);M.generateMipmaps=!1}else De?(Ue&&t.texStorage2D(3553,O,ve,k.width,k.height),t.texSubImage2D(3553,0,0,0,k.width,k.height,de,fe,k.data)):t.texImage2D(3553,0,ve,k.width,k.height,0,de,fe,k.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){De&&Ue&&t.texStorage3D(35866,O,ve,Oe[0].width,Oe[0].height,k.depth);for(let X=0,ie=Oe.length;X<ie;X++)ge=Oe[X],M.format!==tn?de!==null?De?t.compressedTexSubImage3D(35866,X,0,0,0,ge.width,ge.height,k.depth,de,ge.data,0,0):t.compressedTexImage3D(35866,X,ve,ge.width,ge.height,k.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(35866,X,0,0,0,ge.width,ge.height,k.depth,de,fe,ge.data):t.texImage3D(35866,X,ve,ge.width,ge.height,k.depth,0,de,fe,ge.data)}else{De&&Ue&&t.texStorage2D(3553,O,ve,Oe[0].width,Oe[0].height);for(let X=0,ie=Oe.length;X<ie;X++)ge=Oe[X],M.format!==tn?de!==null?De?t.compressedTexSubImage2D(3553,X,0,0,ge.width,ge.height,de,ge.data):t.compressedTexImage2D(3553,X,ve,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(3553,X,0,0,ge.width,ge.height,de,fe,ge.data):t.texImage2D(3553,X,ve,ge.width,ge.height,0,de,fe,ge.data)}else if(M.isDataArrayTexture)De?(Ue&&t.texStorage3D(35866,O,ve,k.width,k.height,k.depth),t.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,de,fe,k.data)):t.texImage3D(35866,0,ve,k.width,k.height,k.depth,0,de,fe,k.data);else if(M.isData3DTexture)De?(Ue&&t.texStorage3D(32879,O,ve,k.width,k.height,k.depth),t.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,de,fe,k.data)):t.texImage3D(32879,0,ve,k.width,k.height,k.depth,0,de,fe,k.data);else if(M.isFramebufferTexture){if(Ue)if(De)t.texStorage2D(3553,O,ve,k.width,k.height);else{let X=k.width,ie=k.height;for(let pe=0;pe<O;pe++)t.texImage2D(3553,pe,ve,X,ie,0,de,fe,null),X>>=1,ie>>=1}}else if(Oe.length>0&&ce){De&&Ue&&t.texStorage2D(3553,O,ve,Oe[0].width,Oe[0].height);for(let X=0,ie=Oe.length;X<ie;X++)ge=Oe[X],De?t.texSubImage2D(3553,X,0,0,de,fe,ge):t.texImage2D(3553,X,ve,de,fe,ge);M.generateMipmaps=!1}else De?(Ue&&t.texStorage2D(3553,O,ve,k.width,k.height),t.texSubImage2D(3553,0,0,0,de,fe,k)):t.texImage2D(3553,0,ve,de,fe,k);A(M,ce)&&L(P),me.__version=ae.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ye(C,M,S){if(M.image.length!==6)return;const P=Ce(C,M),J=M.source;t.bindTexture(34067,C.__webglTexture,33984+S);const ae=n.get(J);if(J.version!==ae.__version||P===!0){t.activeTexture(33984+S),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const me=M.isCompressedTexture||M.image[0].isCompressedTexture,R=M.image[0]&&M.image[0].isDataTexture,k=[];for(let X=0;X<6;X++)!me&&!R?k[X]=y(M.image[X],!1,!0,u):k[X]=R?M.image[X].image:M.image[X],k[X]=yt(M,k[X]);const ce=k[0],de=x(ce)||a,fe=s.convert(M.format,M.encoding),ve=s.convert(M.type),ge=b(M.internalFormat,fe,ve,M.encoding),Oe=a&&M.isVideoTexture!==!0,De=ae.__version===void 0||P===!0;let Ue=T(M,ce,de);Z(34067,M,de);let O;if(me){Oe&&De&&t.texStorage2D(34067,Ue,ge,ce.width,ce.height);for(let X=0;X<6;X++){O=k[X].mipmaps;for(let ie=0;ie<O.length;ie++){const pe=O[ie];M.format!==tn?fe!==null?Oe?t.compressedTexSubImage2D(34069+X,ie,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(34069+X,ie,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+X,ie,0,0,pe.width,pe.height,fe,ve,pe.data):t.texImage2D(34069+X,ie,ge,pe.width,pe.height,0,fe,ve,pe.data)}}}else{O=M.mipmaps,Oe&&De&&(O.length>0&&Ue++,t.texStorage2D(34067,Ue,ge,k[0].width,k[0].height));for(let X=0;X<6;X++)if(R){Oe?t.texSubImage2D(34069+X,0,0,0,k[X].width,k[X].height,fe,ve,k[X].data):t.texImage2D(34069+X,0,ge,k[X].width,k[X].height,0,fe,ve,k[X].data);for(let ie=0;ie<O.length;ie++){const we=O[ie].image[X].image;Oe?t.texSubImage2D(34069+X,ie+1,0,0,we.width,we.height,fe,ve,we.data):t.texImage2D(34069+X,ie+1,ge,we.width,we.height,0,fe,ve,we.data)}}else{Oe?t.texSubImage2D(34069+X,0,0,0,fe,ve,k[X]):t.texImage2D(34069+X,0,ge,fe,ve,k[X]);for(let ie=0;ie<O.length;ie++){const pe=O[ie];Oe?t.texSubImage2D(34069+X,ie+1,0,0,fe,ve,pe.image[X]):t.texImage2D(34069+X,ie+1,ge,fe,ve,pe.image[X])}}}A(M,de)&&L(34067),ae.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function le(C,M,S,P,J){const ae=s.convert(S.format,S.encoding),me=s.convert(S.type),R=b(S.internalFormat,ae,me,S.encoding);n.get(M).__hasExternalTextures||(J===32879||J===35866?t.texImage3D(J,0,R,M.width,M.height,M.depth,0,ae,me,null):t.texImage2D(J,0,R,M.width,M.height,0,ae,me,null)),t.bindFramebuffer(36160,C),Be(M)?f.framebufferTexture2DMultisampleEXT(36160,P,J,n.get(S).__webglTexture,0,tt(M)):(J===3553||J>=34069&&J<=34074)&&i.framebufferTexture2D(36160,P,J,n.get(S).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(C,M,S){if(i.bindRenderbuffer(36161,C),M.depthBuffer&&!M.stencilBuffer){let P=33189;if(S||Be(M)){const J=M.depthTexture;J&&J.isDepthTexture&&(J.type===ui?P=36012:J.type===Fi&&(P=33190));const ae=tt(M);Be(M)?f.renderbufferStorageMultisampleEXT(36161,ae,P,M.width,M.height):i.renderbufferStorageMultisample(36161,ae,P,M.width,M.height)}else i.renderbufferStorage(36161,P,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,C)}else if(M.depthBuffer&&M.stencilBuffer){const P=tt(M);S&&Be(M)===!1?i.renderbufferStorageMultisample(36161,P,35056,M.width,M.height):Be(M)?f.renderbufferStorageMultisampleEXT(36161,P,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,C)}else{const P=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0;J<P.length;J++){const ae=P[J],me=s.convert(ae.format,ae.encoding),R=s.convert(ae.type),k=b(ae.internalFormat,me,R,ae.encoding),ce=tt(M);S&&Be(M)===!1?i.renderbufferStorageMultisample(36161,ce,k,M.width,M.height):Be(M)?f.renderbufferStorageMultisampleEXT(36161,ce,k,M.width,M.height):i.renderbufferStorage(36161,k,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function Ee(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const P=n.get(M.depthTexture).__webglTexture,J=tt(M);if(M.depthTexture.format===Bi)Be(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,P,0,J):i.framebufferTexture2D(36160,36096,3553,P,0);else if(M.depthTexture.format===Or)Be(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,P,0,J):i.framebufferTexture2D(36160,33306,3553,P,0);else throw new Error("Unknown depthTexture format")}function be(C){const M=n.get(C),S=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(S)throw new Error("target.depthTexture not supported in Cube render targets");Ee(M.__webglFramebuffer,C)}else if(S){M.__webglDepthbuffer=[];for(let P=0;P<6;P++)t.bindFramebuffer(36160,M.__webglFramebuffer[P]),M.__webglDepthbuffer[P]=i.createRenderbuffer(),ke(M.__webglDepthbuffer[P],C,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),ke(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Qe(C,M,S){const P=n.get(C);M!==void 0&&le(P.__webglFramebuffer,C,C.texture,36064,3553),S!==void 0&&be(C)}function it(C){const M=C.texture,S=n.get(C),P=n.get(M);C.addEventListener("dispose",j),C.isWebGLMultipleRenderTargets!==!0&&(P.__webglTexture===void 0&&(P.__webglTexture=i.createTexture()),P.__version=M.version,o.memory.textures++);const J=C.isWebGLCubeRenderTarget===!0,ae=C.isWebGLMultipleRenderTargets===!0,me=x(C)||a;if(J){S.__webglFramebuffer=[];for(let R=0;R<6;R++)S.__webglFramebuffer[R]=i.createFramebuffer()}else{if(S.__webglFramebuffer=i.createFramebuffer(),ae)if(r.drawBuffers){const R=C.texture;for(let k=0,ce=R.length;k<ce;k++){const de=n.get(R[k]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Be(C)===!1){const R=ae?M:[M];S.__webglMultisampledFramebuffer=i.createFramebuffer(),S.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,S.__webglMultisampledFramebuffer);for(let k=0;k<R.length;k++){const ce=R[k];S.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(36161,S.__webglColorRenderbuffer[k]);const de=s.convert(ce.format,ce.encoding),fe=s.convert(ce.type),ve=b(ce.internalFormat,de,fe,ce.encoding,C.isXRRenderTarget===!0),ge=tt(C);i.renderbufferStorageMultisample(36161,ge,ve,C.width,C.height),i.framebufferRenderbuffer(36160,36064+k,36161,S.__webglColorRenderbuffer[k])}i.bindRenderbuffer(36161,null),C.depthBuffer&&(S.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(S.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(J){t.bindTexture(34067,P.__webglTexture),Z(34067,M,me);for(let R=0;R<6;R++)le(S.__webglFramebuffer[R],C,M,36064,34069+R);A(M,me)&&L(34067),t.unbindTexture()}else if(ae){const R=C.texture;for(let k=0,ce=R.length;k<ce;k++){const de=R[k],fe=n.get(de);t.bindTexture(3553,fe.__webglTexture),Z(3553,de,me),le(S.__webglFramebuffer,C,de,36064+k,3553),A(de,me)&&L(3553)}t.unbindTexture()}else{let R=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?R=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(R,P.__webglTexture),Z(R,M,me),le(S.__webglFramebuffer,C,M,36064,R),A(M,me)&&L(R),t.unbindTexture()}C.depthBuffer&&be(C)}function et(C){const M=x(C)||a,S=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let P=0,J=S.length;P<J;P++){const ae=S[P];if(A(ae,M)){const me=C.isWebGLCubeRenderTarget?34067:3553,R=n.get(ae).__webglTexture;t.bindTexture(me,R),L(me),t.unbindTexture()}}}function mt(C){if(a&&C.samples>0&&Be(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],S=C.width,P=C.height;let J=16384;const ae=[],me=C.stencilBuffer?33306:36096,R=n.get(C),k=C.isWebGLMultipleRenderTargets===!0;if(k)for(let ce=0;ce<M.length;ce++)t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,R.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,R.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,R.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){ae.push(36064+ce),C.depthBuffer&&ae.push(me);const de=R.__ignoreDepthValues!==void 0?R.__ignoreDepthValues:!1;if(de===!1&&(C.depthBuffer&&(J|=256),C.stencilBuffer&&(J|=1024)),k&&i.framebufferRenderbuffer(36008,36064,36161,R.__webglColorRenderbuffer[ce]),de===!0&&(i.invalidateFramebuffer(36008,[me]),i.invalidateFramebuffer(36009,[me])),k){const fe=n.get(M[ce]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,fe,0)}i.blitFramebuffer(0,0,S,P,0,0,S,P,J,9728),d&&i.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),k)for(let ce=0;ce<M.length;ce++){t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ce,36161,R.__webglColorRenderbuffer[ce]);const de=n.get(M[ce]).__webglTexture;t.bindFramebuffer(36160,R.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ce,3553,de,0)}t.bindFramebuffer(36009,R.__webglMultisampledFramebuffer)}}function tt(C){return Math.min(h,C.samples)}function Be(C){const M=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function xt(C){const M=o.render.frame;g.get(C)!==M&&(g.set(C,M),C.update())}function yt(C,M){const S=C.encoding,P=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===yc||S!==ji&&(S===je?a===!1?e.has("EXT_sRGB")===!0&&P===tn?(C.format=yc,C.minFilter=Ht,C.generateMipmaps=!1):M=tm.sRGBToLinear(M):(P!==tn||J!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",S)),M}this.allocateTextureUnit=$,this.resetTextureUnits=te,this.setTexture2D=B,this.setTexture2DArray=ne,this.setTexture3D=ee,this.setTextureCube=re,this.rebindTextures=Qe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Be}function PE(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Wi)return 5121;if(s===c1)return 32819;if(s===u1)return 32820;if(s===o1)return 5120;if(s===a1)return 5122;if(s===Zp)return 5123;if(s===l1)return 5124;if(s===Fi)return 5125;if(s===ui)return 5126;if(s===Is)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===h1)return 6406;if(s===tn)return 6408;if(s===d1)return 6409;if(s===p1)return 6410;if(s===Bi)return 6402;if(s===Or)return 34041;if(s===m1)return 6403;if(s===f1)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===yc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===g1)return 36244;if(s===v1)return 33319;if(s===_1)return 33320;if(s===x1)return 36249;if(s===sl||s===ol||s===al||s===ll)if(o===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===sl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===sl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ol)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===al)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ll)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yh||s===bh||s===wh||s===Mh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===yh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Mh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===y1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sh||s===Th)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sh)return o===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Th)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Eh||s===Ah||s===Ch||s===Dh||s===Ph||s===Rh||s===Lh||s===Ih||s===Fh||s===Oh||s===Nh||s===Bh||s===kh||s===Uh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Eh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ah)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ch)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ph)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Lh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ih)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Oh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===zh)return o===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Pr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class RE extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hi extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LE={type:"move"};class Ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n);if(u.joints[m.jointName]===void 0){const _=new hi;_.matrixAutoUpdate=!1,_.visible=!1,u.joints[m.jointName]=_,u.add(_)}const v=u.joints[m.jointName];p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const l=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=l.position.distanceTo(h.position),d=.02,g=.005;u.inputState.pinching&&f>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(LE)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class IE extends Ut{constructor(e,t,n,r,s,o,a,c,u,l){if(l=l!==void 0?l:Bi,l!==Bi&&l!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Bi&&(n=Fi),n===void 0&&l===Or&&(n=Pr),super(null,r,s,o,a,c,l,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=c!==void 0?c:Et,this.flipY=!1,this.generateMipmaps=!1}}class FE extends Qi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=null,u=null,l=null,h=null,f=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const v=[],_=[],y=new Bt;y.layers.enable(1),y.viewport=new Xe;const x=new Bt;x.layers.enable(2),x.viewport=new Xe;const w=[y,x],A=new RE;A.layers.enable(1),A.layers.enable(2);let L=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let B=v[F];return B===void 0&&(B=new Ol,v[F]=B),B.getTargetRaySpace()},this.getControllerGrip=function(F){let B=v[F];return B===void 0&&(B=new Ol,v[F]=B),B.getGripSpace()},this.getHand=function(F){let B=v[F];return B===void 0&&(B=new Ol,v[F]=B),B.getHandSpace()};function T(F){const B=_.indexOf(F.inputSource);if(B===-1)return;const ne=v[B];ne!==void 0&&ne.dispatchEvent({type:F.type,data:F.inputSource})}function I(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",W);for(let F=0;F<v.length;F++){const B=_[F];B!==null&&(_[F]=null,v[F].disconnect(B))}L=null,b=null,e.setRenderTarget(m),f=null,h=null,l=null,r=null,p=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return l},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",I),r.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,B),r.updateRenderState({baseLayer:f}),p=new mn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Wi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let B=null,ne=null,ee=null;g.depth&&(ee=g.stencil?35056:33190,B=g.stencil?Or:Bi,ne=g.stencil?Pr:Fi);const re={colorFormat:32856,depthFormat:ee,scaleFactor:s};l=new XRWebGLBinding(r,t),h=l.createProjectionLayer(re),r.updateRenderState({layers:[h]}),p=new mn(h.textureWidth,h.textureHeight,{format:tn,type:Wi,depthTexture:new IE(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ue=e.properties.get(p);ue.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await r.requestReferenceSpace(a),$.setContext(r),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function W(F){for(let B=0;B<F.removed.length;B++){const ne=F.removed[B],ee=_.indexOf(ne);ee>=0&&(_[ee]=null,v[ee].dispatchEvent({type:"disconnected",data:ne}))}for(let B=0;B<F.added.length;B++){const ne=F.added[B];let ee=_.indexOf(ne);if(ee===-1){for(let ue=0;ue<v.length;ue++)if(ue>=_.length){_.push(ne),ee=ue;break}else if(_[ue]===null){_[ue]=ne,ee=ue;break}if(ee===-1)break}const re=v[ee];re&&re.dispatchEvent({type:"connected",data:ne})}}const j=new D,U=new D;function N(F,B,ne){j.setFromMatrixPosition(B.matrixWorld),U.setFromMatrixPosition(ne.matrixWorld);const ee=j.distanceTo(U),re=B.projectionMatrix.elements,ue=ne.projectionMatrix.elements,G=re[14]/(re[10]-1),Z=re[14]/(re[10]+1),Ce=(re[9]+1)/re[5],_e=(re[9]-1)/re[5],ye=(re[8]-1)/re[0],le=(ue[8]+1)/ue[0],ke=G*ye,Ee=G*le,be=ee/(-ye+le),Qe=be*-ye;B.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Qe),F.translateZ(be),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const it=G+be,et=Z+be,mt=ke-Qe,tt=Ee+(ee-Qe),Be=Ce*Z/et*it,xt=_e*Z/et*it;F.projectionMatrix.makePerspective(mt,tt,Be,xt,it,et)}function V(F,B){B===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(B.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;A.near=x.near=y.near=F.near,A.far=x.far=y.far=F.far,(L!==A.near||b!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,b=A.far);const B=F.parent,ne=A.cameras;V(A,B);for(let re=0;re<ne.length;re++)V(ne[re],B);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),F.matrix.copy(A.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const ee=F.children;for(let re=0,ue=ee.length;re<ue;re++)ee[re].updateMatrixWorld(!0);ne.length===2?N(A,y,x):A.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(F){h!==null&&(h.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)};let K=null;function te(F,B){if(u=B.getViewerPose(c||o),d=B,u!==null){const ne=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ee=!1;ne.length!==A.cameras.length&&(A.cameras.length=0,ee=!0);for(let re=0;re<ne.length;re++){const ue=ne[re];let G=null;if(f!==null)G=f.getViewport(ue);else{const Ce=l.getViewSubImage(h,ue);G=Ce.viewport,re===0&&(e.setRenderTargetTextures(p,Ce.colorTexture,h.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(p))}let Z=w[re];Z===void 0&&(Z=new Bt,Z.layers.enable(re),Z.viewport=new Xe,w[re]=Z),Z.matrix.fromArray(ue.transform.matrix),Z.projectionMatrix.fromArray(ue.projectionMatrix),Z.viewport.set(G.x,G.y,G.width,G.height),re===0&&A.matrix.copy(Z.matrix),ee===!0&&A.cameras.push(Z)}}for(let ne=0;ne<v.length;ne++){const ee=_[ne],re=v[ne];ee!==null&&re!==void 0&&re.update(ee,B,c||o)}K&&K(F,B),d=null}const $=new lm;$.setAnimationLoop(te),this.setAnimationLoop=function(F){K=F},this.dispose=function(){}}}function OE(i,e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),l(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uv2Transform.value.copy(y.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function NE(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function c(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function u(_,y){let x=r[_.id];x===void 0&&(g(_),x=l(_),r[_.id]=x,_.addEventListener("dispose",p));const w=y.program;n.updateUBOMapping(_,w);const A=e.render.frame;s[_.id]!==A&&(f(_),s[_.id]=A)}function l(_){const y=h();_.__bindingPointIndex=y;const x=i.createBuffer(),w=_.__size,A=_.usage;return i.bindBuffer(35345,x),i.bufferData(35345,w,A),i.bindBuffer(35345,null),i.bindBufferBase(35345,y,x),x}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const y=r[_.id],x=_.uniforms,w=_.__cache;i.bindBuffer(35345,y);for(let A=0,L=x.length;A<L;A++){const b=x[A];if(d(b,A,w)===!0){const T=b.value,I=b.__offset;typeof T=="number"?(b.__data[0]=T,i.bufferSubData(35345,I,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):T.toArray(b.__data),i.bufferSubData(35345,I,b.__data))}}i.bindBuffer(35345,null)}function d(_,y,x){const w=_.value;if(x[y]===void 0)return typeof w=="number"?x[y]=w:x[y]=w.clone(),!0;if(typeof w=="number"){if(x[y]!==w)return x[y]=w,!0}else{const A=x[y];if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(_){const y=_.uniforms;let x=0;const w=16;let A=0;for(let L=0,b=y.length;L<b;L++){const T=y[L],I=m(T);if(T.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=x,L>0){A=x%w;const W=w-A;A!==0&&W-I.boundary<0&&(x+=w-A,T.__offset=x)}x+=I.storage}return A=x%w,A>0&&(x+=w-A),_.__size=x,_.__cache={},this}function m(_){const y=_.value,x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(_){const y=_.target;y.removeEventListener("dispose",p);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function v(){for(const _ in r)i.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:c,update:u,dispose:v}}function BE(){const i=Ns("canvas");return i.style.display="block",i}function dm(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:BE(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",u=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let l;t!==null?l=t.getContextAttributes().alpha:l=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ji,this.physicallyCorrectLights=!1,this.toneMapping=jn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let p=!1,v=0,_=0,y=null,x=-1,w=null;const A=new Xe,L=new Xe;let b=null,T=e.width,I=e.height,W=1,j=null,U=null;const N=new Xe(0,0,T,I),V=new Xe(0,0,T,I);let K=!1;const te=new au;let $=!1,F=!1,B=null;const ne=new Fe,ee=new he,re=new D,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function G(){return y===null?W:1}let Z=t;function Ce(E,H){for(let Y=0;Y<E.length;Y++){const z=E[Y],Q=e.getContext(z,H);if(Q!==null)return Q}return null}try{const E={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nu}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),Z===null){const H=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&H.shift(),Z=Ce(H,E),Z===null)throw Ce(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let _e,ye,le,ke,Ee,be,Qe,it,et,mt,tt,Be,xt,yt,C,M,S,P,J,ae,me,R,k,ce;function de(){_e=new qS(Z),ye=new VS(Z,_e,i),_e.init(ye),R=new PE(Z,_e,ye),le=new CE(Z,_e,ye),ke=new ZS,Ee=new pE,be=new DE(Z,_e,le,Ee,ye,R,ke),Qe=new WS(m),it=new XS(m),et=new ow(Z,ye),k=new zS(Z,_e,et,ye),mt=new YS(Z,et,ke,k),tt=new tT(Z,mt,et,ke),J=new eT(Z,ye,be),M=new GS(Ee),Be=new dE(m,Qe,it,_e,ye,k,M),xt=new OE(m,Ee),yt=new gE,C=new wE(_e,ye),P=new US(m,Qe,it,le,tt,l,o),S=new AE(m,tt,ye),ce=new NE(Z,ke,ye,le),ae=new HS(Z,_e,ke,ye),me=new KS(Z,_e,ke,ye),ke.programs=Be.programs,m.capabilities=ye,m.extensions=_e,m.properties=Ee,m.renderLists=yt,m.shadowMap=S,m.state=le,m.info=ke}de();const fe=new FE(m,Z);this.xr=fe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const E=_e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=_e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(T,I,!1))},this.getSize=function(E){return E.set(T,I)},this.setSize=function(E,H,Y){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,I=H,e.width=Math.floor(E*W),e.height=Math.floor(H*W),Y!==!1&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(T*W,I*W).floor()},this.setDrawingBufferSize=function(E,H,Y){T=E,I=H,W=Y,e.width=Math.floor(E*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,H,Y,z){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,H,Y,z),le.viewport(A.copy(N).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(V)},this.setScissor=function(E,H,Y,z){E.isVector4?V.set(E.x,E.y,E.z,E.w):V.set(E,H,Y,z),le.scissor(L.copy(V).multiplyScalar(W).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(E){le.setScissorTest(K=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor.apply(P,arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha.apply(P,arguments)},this.clear=function(E=!0,H=!0,Y=!0){let z=0;E&&(z|=16384),H&&(z|=256),Y&&(z|=1024),Z.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),yt.dispose(),C.dispose(),Ee.dispose(),Qe.dispose(),it.dispose(),tt.dispose(),k.dispose(),ce.dispose(),Be.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",pe),fe.removeEventListener("sessionend",we),B&&(B.dispose(),B=null),Ve.stop()};function ve(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=ke.autoReset,H=S.enabled,Y=S.autoUpdate,z=S.needsUpdate,Q=S.type;de(),ke.autoReset=E,S.enabled=H,S.autoUpdate=Y,S.needsUpdate=z,S.type=Q}function Oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function De(E){const H=E.target;H.removeEventListener("dispose",De),Ue(H)}function Ue(E){O(E),Ee.remove(E)}function O(E){const H=Ee.get(E).programs;H!==void 0&&(H.forEach(function(Y){Be.releaseProgram(Y)}),E.isShaderMaterial&&Be.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,Y,z,Q,Se){H===null&&(H=ue);const Ae=Q.isMesh&&Q.matrixWorld.determinant()<0,Le=r0(E,H,Y,z,Q);le.setMaterial(z,Ae);let Re=Y.index;const Ge=Y.attributes.position;if(Re===null){if(Ge===void 0||Ge.count===0)return}else if(Re.count===0)return;let Ne=1;z.wireframe===!0&&(Re=mt.getWireframeAttribute(Y),Ne=2),k.setup(Q,z,Le,Y,Re);let He,at=ae;Re!==null&&(He=et.get(Re),at=me,at.setIndex(He));const xi=Re!==null?Re.count:Ge.count,ir=Y.drawRange.start*Ne,rr=Y.drawRange.count*Ne,xn=Se!==null?Se.start*Ne:0,We=Se!==null?Se.count*Ne:1/0,sr=Math.max(ir,xn),ut=Math.min(xi,ir+rr,xn+We)-1,Zt=Math.max(0,ut-sr+1);if(Zt!==0){if(Q.isMesh)z.wireframe===!0?(le.setLineWidth(z.wireframeLinewidth*G()),at.setMode(1)):at.setMode(4);else if(Q.isLine){let Qn=z.linewidth;Qn===void 0&&(Qn=1),le.setLineWidth(Qn*G()),Q.isLineSegments?at.setMode(1):Q.isLineLoop?at.setMode(2):at.setMode(3)}else Q.isPoints?at.setMode(0):Q.isSprite&&at.setMode(4);if(Q.isInstancedMesh)at.renderInstances(sr,Zt,Q.count);else if(Y.isInstancedBufferGeometry){const Qn=Math.min(Y.instanceCount,Y._maxInstanceCount);at.renderInstances(sr,Zt,Qn)}else at.render(sr,Zt)}},this.compile=function(E,H){function Y(z,Q,Se){z.transparent===!0&&z.side===Tn?(z.side=Vt,z.needsUpdate=!0,Kt(z,Q,Se),z.side=Gi,z.needsUpdate=!0,Kt(z,Q,Se),z.side=Tn):Kt(z,Q,Se)}f=C.get(E),f.init(),g.push(f),E.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(m.physicallyCorrectLights),E.traverse(function(z){const Q=z.material;if(Q)if(Array.isArray(Q))for(let Se=0;Se<Q.length;Se++){const Ae=Q[Se];Y(Ae,E,z)}else Y(Q,E,z)}),g.pop(),f=null};let X=null;function ie(E){X&&X(E)}function pe(){Ve.stop()}function we(){Ve.start()}const Ve=new lm;Ve.setAnimationLoop(ie),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(E){X=E,fe.setAnimationLoop(E),E===null?Ve.stop():Ve.start()},fe.addEventListener("sessionstart",pe),fe.addEventListener("sessionend",we),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(H),H=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,H,y),f=C.get(E,g.length),f.init(),g.push(f),ne.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),te.setFromProjectionMatrix(ne),F=this.localClippingEnabled,$=M.init(this.clippingPlanes,F,H),h=yt.get(E,d.length),h.init(),d.push(h),bt(E,H,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(j,U),$===!0&&M.beginShadows();const Y=f.state.shadowsArray;if(S.render(Y,E,H),$===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),P.render(h,E),f.setupLights(m.physicallyCorrectLights),H.isArrayCamera){const z=H.cameras;for(let Q=0,Se=z.length;Q<Se;Q++){const Ae=z[Q];At(h,E,Ae,Ae.viewport)}}else At(h,E,H);y!==null&&(be.updateMultisampleRenderTarget(y),be.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(m,E,H),k.resetDefaultState(),x=-1,w=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function bt(E,H,Y,z){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){z&&re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ne);const Ae=tt.update(E),Le=E.material;Le.visible&&h.push(E,Ae,Le,Y,re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ke.render.frame&&(E.skeleton.update(),E.skeleton.frame=ke.render.frame),!E.frustumCulled||te.intersectsObject(E))){z&&re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ne);const Ae=tt.update(E),Le=E.material;if(Array.isArray(Le)){const Re=Ae.groups;for(let Ge=0,Ne=Re.length;Ge<Ne;Ge++){const He=Re[Ge],at=Le[He.materialIndex];at&&at.visible&&h.push(E,Ae,at,Y,re.z,He)}}else Le.visible&&h.push(E,Ae,Le,Y,re.z,null)}}const Se=E.children;for(let Ae=0,Le=Se.length;Ae<Le;Ae++)bt(Se[Ae],H,Y,z)}function At(E,H,Y,z){const Q=E.opaque,Se=E.transmissive,Ae=E.transparent;f.setupLightsView(Y),Se.length>0&&_i(Q,H,Y),z&&le.viewport(A.copy(z)),Q.length>0&&rt(Q,H,Y),Se.length>0&&rt(Se,H,Y),Ae.length>0&&rt(Ae,H,Y),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function _i(E,H,Y){const z=ye.isWebGL2;B===null&&(B=new mn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Is:Wi,minFilter:qr,samples:z&&s===!0?4:0})),m.getDrawingBufferSize(ee),z?B.setSize(ee.x,ee.y):B.setSize(oa(ee.x),oa(ee.y));const Q=m.getRenderTarget();m.setRenderTarget(B),m.clear();const Se=m.toneMapping;m.toneMapping=jn,rt(E,H,Y),m.toneMapping=Se,be.updateMultisampleRenderTarget(B),be.updateRenderTargetMipmap(B),m.setRenderTarget(Q)}function rt(E,H,Y){const z=H.isScene===!0?H.overrideMaterial:null;for(let Q=0,Se=E.length;Q<Se;Q++){const Ae=E[Q],Le=Ae.object,Re=Ae.geometry,Ge=z===null?Ae.material:z,Ne=Ae.group;Le.layers.test(Y.layers)&&Ln(Le,H,Y,Re,Ge,Ne)}}function Ln(E,H,Y,z,Q,Se){E.onBeforeRender(m,H,Y,z,Q,Se),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Q.onBeforeRender(m,H,Y,z,E,Se),Q.transparent===!0&&Q.side===Tn?(Q.side=Vt,Q.needsUpdate=!0,m.renderBufferDirect(Y,H,z,Q,E,Se),Q.side=Gi,Q.needsUpdate=!0,m.renderBufferDirect(Y,H,z,Q,E,Se),Q.side=Tn):m.renderBufferDirect(Y,H,z,Q,E,Se),E.onAfterRender(m,H,Y,z,Q,Se)}function Kt(E,H,Y){H.isScene!==!0&&(H=ue);const z=Ee.get(E),Q=f.state.lights,Se=f.state.shadowsArray,Ae=Q.state.version,Le=Be.getParameters(E,Q.state,Se,H,Y),Re=Be.getProgramCacheKey(Le);let Ge=z.programs;z.environment=E.isMeshStandardMaterial?H.environment:null,z.fog=H.fog,z.envMap=(E.isMeshStandardMaterial?it:Qe).get(E.envMap||z.environment),Ge===void 0&&(E.addEventListener("dispose",De),Ge=new Map,z.programs=Ge);let Ne=Ge.get(Re);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===Ae)return Iu(E,Le),Ne}else Le.uniforms=Be.getUniforms(E),E.onBuild(Y,Le,m),E.onBeforeCompile(Le,m),Ne=Be.acquireProgram(Le,Re),Ge.set(Re,Ne),z.uniforms=Le.uniforms;const He=z.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=M.uniform),Iu(E,Le),z.needsLights=o0(E),z.lightsStateVersion=Ae,z.needsLights&&(He.ambientLightColor.value=Q.state.ambient,He.lightProbe.value=Q.state.probe,He.directionalLights.value=Q.state.directional,He.directionalLightShadows.value=Q.state.directionalShadow,He.spotLights.value=Q.state.spot,He.spotLightShadows.value=Q.state.spotShadow,He.rectAreaLights.value=Q.state.rectArea,He.ltc_1.value=Q.state.rectAreaLTC1,He.ltc_2.value=Q.state.rectAreaLTC2,He.pointLights.value=Q.state.point,He.pointLightShadows.value=Q.state.pointShadow,He.hemisphereLights.value=Q.state.hemi,He.directionalShadowMap.value=Q.state.directionalShadowMap,He.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,He.spotShadowMap.value=Q.state.spotShadowMap,He.spotLightMatrix.value=Q.state.spotLightMatrix,He.spotLightMap.value=Q.state.spotLightMap,He.pointShadowMap.value=Q.state.pointShadowMap,He.pointShadowMatrix.value=Q.state.pointShadowMatrix);const at=Ne.getUniforms(),xi=qo.seqWithValue(at.seq,He);return z.currentProgram=Ne,z.uniformsList=xi,Ne}function Iu(E,H){const Y=Ee.get(E);Y.outputEncoding=H.outputEncoding,Y.instancing=H.instancing,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function r0(E,H,Y,z,Q){H.isScene!==!0&&(H=ue),be.resetTextureUnits();const Se=H.fog,Ae=z.isMeshStandardMaterial?H.environment:null,Le=y===null?m.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:ji,Re=(z.isMeshStandardMaterial?it:Qe).get(z.envMap||Ae),Ge=z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ne=!!z.normalMap&&!!Y.attributes.tangent,He=!!Y.morphAttributes.position,at=!!Y.morphAttributes.normal,xi=!!Y.morphAttributes.color,ir=z.toneMapped?m.toneMapping:jn,rr=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xn=rr!==void 0?rr.length:0,We=Ee.get(z),sr=f.state.lights;if($===!0&&(F===!0||E!==w)){const Wt=E===w&&z.id===x;M.setState(z,E,Wt)}let ut=!1;z.version===We.__version?(We.needsLights&&We.lightsStateVersion!==sr.state.version||We.outputEncoding!==Le||Q.isInstancedMesh&&We.instancing===!1||!Q.isInstancedMesh&&We.instancing===!0||Q.isSkinnedMesh&&We.skinning===!1||!Q.isSkinnedMesh&&We.skinning===!0||We.envMap!==Re||z.fog===!0&&We.fog!==Se||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==M.numPlanes||We.numIntersection!==M.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==Ne||We.morphTargets!==He||We.morphNormals!==at||We.morphColors!==xi||We.toneMapping!==ir||ye.isWebGL2===!0&&We.morphTargetsCount!==xn)&&(ut=!0):(ut=!0,We.__version=z.version);let Zt=We.currentProgram;ut===!0&&(Zt=Kt(z,H,Q));let Qn=!1,ls=!1,Ha=!1;const Ft=Zt.getUniforms(),yi=We.uniforms;if(le.useProgram(Zt.program)&&(Qn=!0,ls=!0,Ha=!0),z.id!==x&&(x=z.id,ls=!0),Qn||w!==E){if(Ft.setValue(Z,"projectionMatrix",E.projectionMatrix),ye.logarithmicDepthBuffer&&Ft.setValue(Z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),w!==E&&(w=E,ls=!0,Ha=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Wt=Ft.map.cameraPosition;Wt!==void 0&&Wt.setValue(Z,re.setFromMatrixPosition(E.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ft.setValue(Z,"isOrthographic",E.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Q.isSkinnedMesh)&&Ft.setValue(Z,"viewMatrix",E.matrixWorldInverse)}if(Q.isSkinnedMesh){Ft.setOptional(Z,Q,"bindMatrix"),Ft.setOptional(Z,Q,"bindMatrixInverse");const Wt=Q.skeleton;Wt&&(ye.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),Ft.setValue(Z,"boneTexture",Wt.boneTexture,be),Ft.setValue(Z,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Va=Y.morphAttributes;if((Va.position!==void 0||Va.normal!==void 0||Va.color!==void 0&&ye.isWebGL2===!0)&&J.update(Q,Y,z,Zt),(ls||We.receiveShadow!==Q.receiveShadow)&&(We.receiveShadow=Q.receiveShadow,Ft.setValue(Z,"receiveShadow",Q.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(yi.envMap.value=Re,yi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ls&&(Ft.setValue(Z,"toneMappingExposure",m.toneMappingExposure),We.needsLights&&s0(yi,Ha),Se&&z.fog===!0&&xt.refreshFogUniforms(yi,Se),xt.refreshMaterialUniforms(yi,z,W,I,B),qo.upload(Z,We.uniformsList,yi,be)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(qo.upload(Z,We.uniformsList,yi,be),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ft.setValue(Z,"center",Q.center),Ft.setValue(Z,"modelViewMatrix",Q.modelViewMatrix),Ft.setValue(Z,"normalMatrix",Q.normalMatrix),Ft.setValue(Z,"modelMatrix",Q.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Wt=z.uniformsGroups;for(let Ga=0,a0=Wt.length;Ga<a0;Ga++)if(ye.isWebGL2){const Fu=Wt[Ga];ce.update(Fu,Zt),ce.bind(Fu,Zt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zt}function s0(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function o0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,H,Y){Ee.get(E.texture).__webglTexture=H,Ee.get(E.depthTexture).__webglTexture=Y;const z=Ee.get(E);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=Y===void 0,z.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,H){const Y=Ee.get(E);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,Y=0){y=E,v=H,_=Y;let z=!0,Q=null,Se=!1,Ae=!1;if(E){const Re=Ee.get(E);Re.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),z=!1):Re.__webglFramebuffer===void 0?be.setupRenderTarget(E):Re.__hasExternalTextures&&be.rebindTextures(E,Ee.get(E.texture).__webglTexture,Ee.get(E.depthTexture).__webglTexture);const Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ae=!0);const Ne=Ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Q=Ne[H],Se=!0):ye.isWebGL2&&E.samples>0&&be.useMultisampledRTT(E)===!1?Q=Ee.get(E).__webglMultisampledFramebuffer:Q=Ne,A.copy(E.viewport),L.copy(E.scissor),b=E.scissorTest}else A.copy(N).multiplyScalar(W).floor(),L.copy(V).multiplyScalar(W).floor(),b=K;if(le.bindFramebuffer(36160,Q)&&ye.drawBuffers&&z&&le.drawBuffers(E,Q),le.viewport(A),le.scissor(L),le.setScissorTest(b),Se){const Re=Ee.get(E.texture);Z.framebufferTexture2D(36160,36064,34069+H,Re.__webglTexture,Y)}else if(Ae){const Re=Ee.get(E.texture),Ge=H||0;Z.framebufferTextureLayer(36160,36064,Re.__webglTexture,Y||0,Ge)}x=-1},this.readRenderTargetPixels=function(E,H,Y,z,Q,Se,Ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){le.bindFramebuffer(36160,Le);try{const Re=E.texture,Ge=Re.format,Ne=Re.type;if(Ge!==tn&&R.convert(Ge)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ne===Is&&(_e.has("EXT_color_buffer_half_float")||ye.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ne!==Wi&&R.convert(Ne)!==Z.getParameter(35738)&&!(Ne===ui&&(ye.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-z&&Y>=0&&Y<=E.height-Q&&Z.readPixels(H,Y,z,Q,R.convert(Ge),R.convert(Ne),Se)}finally{const Re=y!==null?Ee.get(y).__webglFramebuffer:null;le.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(E,H,Y=0){const z=Math.pow(2,-Y),Q=Math.floor(H.image.width*z),Se=Math.floor(H.image.height*z);be.setTexture2D(H,0),Z.copyTexSubImage2D(3553,Y,0,0,E.x,E.y,Q,Se),le.unbindTexture()},this.copyTextureToTexture=function(E,H,Y,z=0){const Q=H.image.width,Se=H.image.height,Ae=R.convert(Y.format),Le=R.convert(Y.type);be.setTexture2D(Y,0),Z.pixelStorei(37440,Y.flipY),Z.pixelStorei(37441,Y.premultiplyAlpha),Z.pixelStorei(3317,Y.unpackAlignment),H.isDataTexture?Z.texSubImage2D(3553,z,E.x,E.y,Q,Se,Ae,Le,H.image.data):H.isCompressedTexture?Z.compressedTexSubImage2D(3553,z,E.x,E.y,H.mipmaps[0].width,H.mipmaps[0].height,Ae,H.mipmaps[0].data):Z.texSubImage2D(3553,z,E.x,E.y,Ae,Le,H.image),z===0&&Y.generateMipmaps&&Z.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(E,H,Y,z,Q=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=E.max.x-E.min.x+1,Ae=E.max.y-E.min.y+1,Le=E.max.z-E.min.z+1,Re=R.convert(z.format),Ge=R.convert(z.type);let Ne;if(z.isData3DTexture)be.setTexture3D(z,0),Ne=32879;else if(z.isDataArrayTexture)be.setTexture2DArray(z,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,z.flipY),Z.pixelStorei(37441,z.premultiplyAlpha),Z.pixelStorei(3317,z.unpackAlignment);const He=Z.getParameter(3314),at=Z.getParameter(32878),xi=Z.getParameter(3316),ir=Z.getParameter(3315),rr=Z.getParameter(32877),xn=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;Z.pixelStorei(3314,xn.width),Z.pixelStorei(32878,xn.height),Z.pixelStorei(3316,E.min.x),Z.pixelStorei(3315,E.min.y),Z.pixelStorei(32877,E.min.z),Y.isDataTexture||Y.isData3DTexture?Z.texSubImage3D(Ne,Q,H.x,H.y,H.z,Se,Ae,Le,Re,Ge,xn.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Ne,Q,H.x,H.y,H.z,Se,Ae,Le,Re,xn.data)):Z.texSubImage3D(Ne,Q,H.x,H.y,H.z,Se,Ae,Le,Re,Ge,xn),Z.pixelStorei(3314,He),Z.pixelStorei(32878,at),Z.pixelStorei(3316,xi),Z.pixelStorei(3315,ir),Z.pixelStorei(32877,rr),Q===0&&z.generateMipmaps&&Z.generateMipmap(Ne),le.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?be.setTextureCube(E,0):E.isData3DTexture?be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?be.setTexture2DArray(E,0):be.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){v=0,_=0,y=null,le.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class kE extends dm{}kE.prototype.isWebGL1Renderer=!0;class UE extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class zE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new D;class cu{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Tf=new D,Ef=new Xe,Af=new Xe,HE=new D,Cf=new Fe;class VE extends se{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;Ef.fromBufferAttribute(r.attributes.skinIndex,e),Af.fromBufferAttribute(r.attributes.skinWeight,e),Tf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Af.getComponent(s);if(o!==0){const a=Ef.getComponent(s);Cf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(HE.copy(Tf).applyMatrix4(Cf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pm extends ze{constructor(){super(),this.isBone=!0,this.type="Bone"}}class GE extends Ut{constructor(e=null,t=1,n=1,r,s,o,a,c,u=Et,l=Et,h,f){super(null,o,a,c,u,l,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Df=new Fe,WE=new Fe;class uu{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:WE;Df.multiplyMatrices(a,t[s]),Df.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new uu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Qp(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new GE(t,e,e,tn,ui);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new pm),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Pf extends kt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rf=new Fe,Lf=new Fe,Lo=[],jE=new Fe,ps=new se;class $E extends se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pf(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let r=0;r<n;r++)this.setMatrixAt(r,jE)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,Rf),Lf.multiplyMatrices(n,Rf),ps.matrixWorld=Lf,ps.raycast(e,Lo);for(let o=0,a=Lo.length;o<a;o++){const c=Lo[o];c.instanceId=s,c.object=this,t.push(c)}Lo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ia extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const If=new D,Ff=new D,Of=new Fe,Nl=new Ra,Io=new Yr;class un extends ze{constructor(e=new pt,t=new Ia){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)If.fromBufferAttribute(t,r-1),Ff.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=If.distanceTo(Ff);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;Of.copy(r).invert(),Nl.copy(e.ray).applyMatrix4(Of);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=new D,l=new D,h=new D,f=new D,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let y=v,x=_-1;y<x;y+=d){const w=g.getX(y),A=g.getX(y+1);if(u.fromBufferAttribute(p,w),l.fromBufferAttribute(p,A),Nl.distanceSqToSegment(u,l,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let y=v,x=_-1;y<x;y+=d){if(u.fromBufferAttribute(p,y),l.fromBufferAttribute(p,y+1),Nl.distanceSqToSegment(u,l,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Nf=new D,Bf=new D;class mm extends un{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Nf.fromBufferAttribute(t,r),Bf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Nf.distanceTo(Bf);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class XE extends un{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gm extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kf=new Fe,Mc=new Ra,Fo=new Yr,Oo=new D;class qE extends ze{constructor(e=new pt,t=new gm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),Fo.radius+=s,e.ray.intersectsSphere(Fo)===!1)return;kf.copy(r).invert(),Mc.copy(e.ray).applyMatrix4(kf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,m=d;g<m;g++){const p=u.getX(g);Oo.fromBufferAttribute(h,p),Uf(Oo,p,c,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,m=d;g<m;g++)Oo.fromBufferAttribute(h,g),Uf(Oo,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Uf(i,e,t,n,r,s,o){const a=Mc.distanceSqToPoint(i);if(a<t){const c=new D;Mc.closestPointToPoint(i,c),c.applyMatrix4(n);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Dt extends pt{constructor(e=1,t=1,n=1,r=8,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const l=[],h=[],f=[],d=[];let g=0;const m=[],p=n/2;let v=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(l),this.setAttribute("position",new Ye(h,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(d,2));function _(){const x=new D,w=new D;let A=0;const L=(t-e)/n;for(let b=0;b<=s;b++){const T=[],I=b/s,W=I*(t-e)+e;for(let j=0;j<=r;j++){const U=j/r,N=U*c+a,V=Math.sin(N),K=Math.cos(N);w.x=W*V,w.y=-I*n+p,w.z=W*K,h.push(w.x,w.y,w.z),x.set(V,L,K).normalize(),f.push(x.x,x.y,x.z),d.push(U,1-I),T.push(g++)}m.push(T)}for(let b=0;b<r;b++)for(let T=0;T<s;T++){const I=m[T][b],W=m[T+1][b],j=m[T+1][b+1],U=m[T][b+1];l.push(I,W,U),l.push(W,j,U),A+=6}u.addGroup(v,A,0),v+=A}function y(x){const w=g,A=new he,L=new D;let b=0;const T=x===!0?e:t,I=x===!0?1:-1;for(let j=1;j<=r;j++)h.push(0,p*I,0),f.push(0,I,0),d.push(.5,.5),g++;const W=g;for(let j=0;j<=r;j++){const N=j/r*c+a,V=Math.cos(N),K=Math.sin(N);L.x=T*K,L.y=p*I,L.z=T*V,h.push(L.x,L.y,L.z),f.push(0,I,0),A.x=V*.5+.5,A.y=K*.5*I+.5,d.push(A.x,A.y),g++}for(let j=0;j<r;j++){const U=w+j,N=W+j;x===!0?l.push(N,N+1,U):l.push(N+1,N,U),b+=3}u.addGroup(v,b,x===!0?1:2),v+=b}}static fromJSON(e){return new Dt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fa extends pt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),u(n),l(),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(s.slice(),3)),this.setAttribute("uv",new Ye(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new D,x=new D,w=new D;for(let A=0;A<t.length;A+=3)d(t[A+0],y),d(t[A+1],x),d(t[A+2],w),c(y,x,w,_)}function c(_,y,x,w){const A=w+1,L=[];for(let b=0;b<=A;b++){L[b]=[];const T=_.clone().lerp(x,b/A),I=y.clone().lerp(x,b/A),W=A-b;for(let j=0;j<=W;j++)j===0&&b===A?L[b][j]=T:L[b][j]=T.clone().lerp(I,j/W)}for(let b=0;b<A;b++)for(let T=0;T<2*(A-b)-1;T++){const I=Math.floor(T/2);T%2===0?(f(L[b][I+1]),f(L[b+1][I]),f(L[b][I])):(f(L[b][I+1]),f(L[b+1][I+1]),f(L[b+1][I]))}}function u(_){const y=new D;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(_),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function l(){const _=new D;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const x=p(_)/2/Math.PI+.5,w=v(_)/Math.PI+.5;o.push(x,1-w)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){const y=o[_+0],x=o[_+2],w=o[_+4],A=Math.max(y,x,w),L=Math.min(y,x,w);A>.9&&L<.1&&(y<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function d(_,y){const x=_*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const _=new D,y=new D,x=new D,w=new D,A=new he,L=new he,b=new he;for(let T=0,I=0;T<s.length;T+=9,I+=6){_.set(s[T+0],s[T+1],s[T+2]),y.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),A.set(o[I+0],o[I+1]),L.set(o[I+2],o[I+3]),b.set(o[I+4],o[I+5]),w.copy(_).add(y).add(x).divideScalar(3);const W=p(w);m(A,I+0,_,W),m(L,I+2,y,W),m(b,I+4,x,W)}}function m(_,y,x,w){w<0&&_.x===1&&(o[y]=_.x-1),x.x===0&&x.z===0&&(o[y]=w/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function v(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}static fromJSON(e){return new Fa(e.vertices,e.indices,e.radius,e.details)}}class hu extends Fa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hu(e.radius,e.detail)}}class Er extends Fa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Er(e.radius,e.detail)}}class fu extends pt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let u=0;const l=[],h=new D,f=new D,d=[],g=[],m=[],p=[];for(let v=0;v<=n;v++){const _=[],y=v/n;let x=0;v==0&&o==0?x=.5/t:v==n&&c==Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const A=w/t;h.x=-e*Math.cos(r+A*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),m.push(f.x,f.y,f.z),p.push(A+x,1-y),_.push(u++)}l.push(_)}for(let v=0;v<n;v++)for(let _=0;_<t;_++){const y=l[v][_+1],x=l[v][_],w=l[v+1][_],A=l[v+1][_+1];(v!==0||o>0)&&d.push(y,x,A),(v!==n-1||c<Math.PI)&&d.push(x,w,A)}this.setIndex(d),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(m,3)),this.setAttribute("uv",new Ye(p,2))}static fromJSON(e){return new fu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ri extends pt{constructor(e=1,t=.4,n=8,r=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],u=[],l=new D,h=new D,f=new D;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){const m=g/r*s,p=d/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(m),h.y=(e+t*Math.cos(p))*Math.sin(m),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),l.x=e*Math.cos(m),l.y=e*Math.sin(m),f.subVectors(h,l).normalize(),c.push(f.x,f.y,f.z),u.push(g/r),u.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){const m=(r+1)*d+g-1,p=(r+1)*(d-1)+g-1,v=(r+1)*(d-1)+g,_=(r+1)*d+g;o.push(m,p,_),o.push(p,v,_)}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(u,2))}static fromJSON(e){return new Ri(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Oa extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class er extends Oa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function oi(i,e,t){return vm(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function No(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function vm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function YE(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function zf(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=i[a+c]}return r}function _m(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Qs{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class KE extends Qs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vh:s=e,a=2*t-n;break;case Gh:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Vh:o=e,c=2*n-t;break;case Gh:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}const u=(n-t)*.5,l=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(c-n),this._offsetPrev=s*l,this._offsetNext=o*l}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,l=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),m=g*g,p=m*g,v=-f*p+2*f*m-f*g,_=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,y=(-1-d)*p+(1.5+d)*m+.5*g,x=d*p-d*m;for(let w=0;w!==a;++w)s[w]=v*o[l+w]+_*o[u+w]+y*o[c+w]+x*o[h+w];return s}}class ZE extends Qs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,l=(n-t)/(r-t),h=1-l;for(let f=0;f!==a;++f)s[f]=o[u+f]*h+o[c+f]*l;return s}}class QE extends Qs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=No(t,this.TimeBufferType),this.values=No(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:No(e.times,Array),values:No(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new QE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ZE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new KE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case Nr:t=this.InterpolantFactoryMethodLinear;break;case cl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=oi(n,s,o),this.values=oi(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&vm(r))for(let a=0,c=r.length;a!==c;++a){const u=r[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=oi(this.times),t=oi(this.values),n=this.getValueSize(),r=this.getInterpolation()===cl,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const u=e[a],l=e[a+1];if(u!==l&&(a!==1||u!==e[0]))if(r)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[a+u];++o}return o!==e.length?(this.times=oi(e,0,o),this.values=oi(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=oi(this.times,0),t=oi(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Nr;class Jr extends Rn{}Jr.prototype.ValueTypeName="bool";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=Fs;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;class xm extends Rn{}xm.prototype.ValueTypeName="color";class Bs extends Rn{}Bs.prototype.ValueTypeName="number";class JE extends Qs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t);let u=e*a;for(let l=u+a;u!==l;u+=4)ft.slerpFlat(s,0,o,u-a,o,u,c);return s}}class $i extends Rn{InterpolantFactoryMethodLinear(e){return new JE(this.times,this.values,this.getValueSize(),e)}}$i.prototype.ValueTypeName="quaternion";$i.prototype.DefaultInterpolation=Nr;$i.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends Rn{}es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Fs;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends Rn{}ks.prototype.ValueTypeName="vector";class e2{constructor(e,t=-1,n,r=b1){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(n2(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Rn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],u=[];c.push((a+s-1)%s,a,(a+1)%s),u.push(0,1,0);const l=YE(c);c=zf(c,1,l),u=zf(u,1,l),!r&&c[0]===0&&(c.push(s),u.push(u[0])),o.push(new Bs(".morphTargetInfluences["+t[a].name+"]",c,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const u=e[a],l=u.name.match(s);if(l&&l.length>1){const h=l[1];let f=r[h];f||(r[h]=f=[]),f.push(u)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,m){if(d.length!==0){const p=[],v=[];_m(d,p,v,g),p.length!==0&&m.push(new h(f,p,v))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let h=0;h<u.length;h++){const f=u[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(const m in d){const p=[],v=[];for(let _=0;_!==f[g].morphTargets.length;++_){const y=f[g];p.push(y.time),v.push(y.morphTarget===m?1:0)}r.push(new Bs(".morphTargetInfluence["+m+"]",p,v))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(ks,d+".position",f,"pos",r),n($i,d+".quaternion",f,"rot",r),n(ks,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function t2(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bs;case"vector":case"vector2":case"vector3":case"vector4":return ks;case"color":return xm;case"quaternion":return $i;case"bool":case"boolean":return Jr;case"string":return es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function n2(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=t2(i.type);if(i.times===void 0){const t=[],n=[];_m(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const kr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class i2{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){a++,s===!1&&r.onStart!==void 0&&r.onStart(l,o,a),s=!0},this.itemEnd=function(l){o++,r.onProgress!==void 0&&r.onProgress(l,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,h){return u.push(l,h),this},this.removeHandler=function(l){const h=u.indexOf(l);return h!==-1&&u.splice(h,2),this},this.getHandler=function(l){for(let h=0,f=u.length;h<f;h+=2){const d=u[h],g=u[h+1];if(d.global&&(d.lastIndex=0),d.test(l))return g}return null}}}const r2=new i2;class Js{constructor(e){this.manager=e!==void 0?e:r2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const kn={};class s2 extends Error{constructor(e,t){super(e),this.response=t}}class ym extends Js{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=kr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:r});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const l=kn[e],h=u.body.getReader(),f=u.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(v){_();function _(){h.read().then(({done:y,value:x})=>{if(y)v.close();else{m+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let A=0,L=l.length;A<L;A++){const b=l[A];b.onProgress&&b.onProgress(w)}v.enqueue(x),_()}})}}});return new Response(p)}else throw new s2(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(l=>new DOMParser().parseFromString(l,a));case"json":return u.json();default:if(a===void 0)return u.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return u.arrayBuffer().then(g=>d.decode(g))}}}).then(u=>{kr.add(e,u);const l=kn[e];delete kn[e];for(let h=0,f=l.length;h<f;h++){const d=l[h];d.onLoad&&d.onLoad(u)}}).catch(u=>{const l=kn[e];if(l===void 0)throw this.manager.itemError(e),u;delete kn[e];for(let h=0,f=l.length;h<f;h++){const d=l[h];d.onError&&d.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class o2 extends Js{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=kr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ns("img");function c(){l(),kr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(h){l(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class a2 extends Js{constructor(e){super(e)}load(e,t,n,r){const s=new Ut,o=new o2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Na extends ze{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Bl=new Fe,Hf=new D,Vf=new D;class du{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new au,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hf),Vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vf),t.updateMatrixWorld(),Bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class l2 extends du{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Os*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class c2 extends Na{constructor(e,t,n=0,r=Math.PI/3,s=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ze.DefaultUp),this.updateMatrix(),this.target=new ze,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new l2}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gf=new Fe,ms=new D,kl=new D;class u2 extends du{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ms.setFromMatrixPosition(e.matrixWorld),n.position.copy(ms),kl.copy(n.position),kl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kl),n.updateMatrixWorld(),r.makeTranslation(-ms.x,-ms.y,-ms.z),Gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gf)}}class h2 extends Na{constructor(e,t,n=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new u2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class f2 extends du{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ba extends Na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DefaultUp),this.updateMatrix(),this.target=new ze,this.shadow=new f2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pu extends Na{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ui{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class d2 extends Js{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=kr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){kr.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class p2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wf(){return(typeof performance>"u"?Date:performance).now()}const mu="\\[\\]\\.:\\/",m2=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",g2="[^"+mu.replace("\\.","")+"]",v2=/((?:WC+[\/:])*)/.source.replace("WC",gu),_2=/(WCOD+)?/.source.replace("WCOD",g2),x2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),y2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),b2=new RegExp("^"+v2+_2+x2+y2+"$"),w2=["material","materials","bones","map"];class M2{constructor(e,t,n){const r=n||qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class qe{constructor(e,t,n){this.path=t,this.parsedPath=n||qe.parseTrackName(t),this.node=qe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new qe.Composite(e,t,n):new qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m2,"")}static parseTrackName(e){const t=b2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);w2.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=qe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===u){u=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[r];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qe.Composite=M2;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class bm{constructor(e,t,n=0,r=1/0){this.ray=new Ra(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ou,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Sc(e,this,n,t),n.sort(jf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Sc(e[r],this,n,t);return n.sort(jf),n}}function jf(i,e){return i.distance-e.distance}function Sc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Sc(r[s],e,t,!0)}}class $f{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class S2 extends mm{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new pt;r.setAttribute("position",new Ye(t,3)),r.setAttribute("color",new Ye(n,3));const s=new Ia({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new Te,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nu);const la={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class eo{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const T2=new Zs(-1,1,1,-1,0,1),vu=new pt;vu.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3));vu.setAttribute("uv",new Ye([0,2,0,0,2,0],2));class wm{constructor(e){this._mesh=new se(vu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,T2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Us extends eo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=aa.clone(e.uniforms),this.material=new dt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new wm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xf extends eo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class E2 extends eo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Mm{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new he);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],la===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Us===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Us(la),this.clock=new p2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xf!==void 0&&(o instanceof Xf?n=!0:o instanceof E2&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Zs(-1,1,1,-1,0,1);const Sm=new pt;Sm.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3));Sm.setAttribute("uv",new Ye([0,2,0,0,2,0],2));class A2 extends eo{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const qf={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Xi extends eo{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(s,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new mn(s,o);f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new mn(s,o);d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}qf===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const a=qf;this.highPassUniforms=aa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new he(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,la===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const l=la;this.copyUniforms=aa.clone(l.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new dt({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:ia,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new dn,this.fsQuad=new wm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.texSize.value=new he(n,r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Xi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Xi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new dt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Xi.BlurDirectionX=new he(1,0);Xi.BlurDirectionY=new he(0,1);const Lt=new Set,Tm=new Set,ts=new Set,Yf=i=>{let e;const t=new Set,n=(c,u)=>{const l=typeof c=="function"?c(e):c;if(!Object.is(l,e)){const h=e;e=u??typeof l!="object"?l:Object.assign({},e,l),t.forEach(f=>f(e,h))}},r=()=>e,a={setState:n,getState:r,subscribe:c=>(t.add(c),()=>t.delete(c)),destroy:()=>t.clear()};return e=i(n,r,a),a},C2=i=>i?Yf(i):Yf;var to,xe,Em,As,Kf,Am,ca={},Cm=[],D2=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Wn(i,e){for(var t in e)i[t]=e[t];return i}function Dm(i){var e=i.parentNode;e&&e.removeChild(i)}function Cn(i,e,t){var n,r,s,o={};for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?to.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(s in i.defaultProps)o[s]===void 0&&(o[s]=i.defaultProps[s]);return Cs(i,o,n,r,null)}function Cs(i,e,t,n,r){var s={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++Em};return r==null&&xe.vnode!=null&&xe.vnode(s),s}function Pm(){return{current:null}}function It(i){return i.children}function gn(i,e){this.props=i,this.context=e}function zs(i,e){if(e==null)return i.__?zs(i.__,i.__.__k.indexOf(i)+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?zs(i):null}function Rm(i){var e,t;if((i=i.__)!=null&&i.__c!=null){for(i.__e=i.__c.base=null,e=0;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null){i.__e=i.__c.base=t.__e;break}return Rm(i)}}function Tc(i){(!i.__d&&(i.__d=!0)&&As.push(i)&&!ua.__r++||Kf!==xe.debounceRendering)&&((Kf=xe.debounceRendering)||setTimeout)(ua)}function ua(){for(var i;ua.__r=As.length;)i=As.sort(function(e,t){return e.__v.__b-t.__v.__b}),As=[],i.some(function(e){var t,n,r,s,o,a;e.__d&&(o=(s=(t=e).__v).__e,(a=t.__P)&&(n=[],(r=Wn({},s)).__v=s.__v+1,_u(a,s,r,t.__n,a.ownerSVGElement!==void 0,s.__h!=null?[o]:null,n,o??zs(s),s.__h),Om(n,s),s.__e!=o&&Rm(s)))})}function Lm(i,e,t,n,r,s,o,a,c,u){var l,h,f,d,g,m,p,v=n&&n.__k||Cm,_=v.length;for(t.__k=[],l=0;l<e.length;l++)if((d=t.__k[l]=(d=e[l])==null||typeof d=="boolean"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?Cs(null,d,null,null,d):Array.isArray(d)?Cs(It,{children:d},null,null,null):d.__b>0?Cs(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)!=null){if(d.__=t,d.__b=t.__b+1,(f=v[l])===null||f&&d.key==f.key&&d.type===f.type)v[l]=void 0;else for(h=0;h<_;h++){if((f=v[h])&&d.key==f.key&&d.type===f.type){v[h]=void 0;break}f=null}_u(i,d,f=f||ca,r,s,o,a,c,u),g=d.__e,(h=d.ref)&&f.ref!=h&&(p||(p=[]),f.ref&&p.push(f.ref,null,d),p.push(h,d.__c||g,d)),g!=null?(m==null&&(m=g),typeof d.type=="function"&&d.__k===f.__k?d.__d=c=Im(d,c,i):c=Fm(i,d,f,v,g,c),typeof t.type=="function"&&(t.__d=c)):c&&f.__e==c&&c.parentNode!=i&&(c=zs(f))}for(t.__e=m,l=_;l--;)v[l]!=null&&Bm(v[l],v[l]);if(p)for(l=0;l<p.length;l++)Nm(p[l],p[++l],p[++l])}function Im(i,e,t){for(var n,r=i.__k,s=0;r&&s<r.length;s++)(n=r[s])&&(n.__=i,e=typeof n.type=="function"?Im(n,e,t):Fm(t,n,n,r,n.__e,e));return e}function $n(i,e){return e=e||[],i==null||typeof i=="boolean"||(Array.isArray(i)?i.some(function(t){$n(t,e)}):e.push(i)),e}function Fm(i,e,t,n,r,s){var o,a,c;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(t==null||r!=s||r.parentNode==null)e:if(s==null||s.parentNode!==i)i.appendChild(r),o=null;else{for(a=s,c=0;(a=a.nextSibling)&&c<n.length;c+=1)if(a==r)break e;i.insertBefore(r,s),o=s}return o!==void 0?o:r.nextSibling}function P2(i,e,t,n,r){var s;for(s in t)s==="children"||s==="key"||s in e||ha(i,s,null,t[s],n);for(s in e)r&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||t[s]===e[s]||ha(i,s,e[s],t[s],n)}function Zf(i,e,t){e[0]==="-"?i.setProperty(e,t):i[e]=t==null?"":typeof t!="number"||D2.test(e)?t:t+"px"}function ha(i,e,t,n,r){var s;e:if(e==="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||Zf(i.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||Zf(i.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in i?e.toLowerCase().slice(2):e.slice(2),i.l||(i.l={}),i.l[e+s]=t,t?n||i.addEventListener(e,s?Jf:Qf,s):i.removeEventListener(e,s?Jf:Qf,s);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e.indexOf("-")==-1?i.removeAttribute(e):i.setAttribute(e,t))}}function Qf(i){this.l[i.type+!1](xe.event?xe.event(i):i)}function Jf(i){this.l[i.type+!0](xe.event?xe.event(i):i)}function _u(i,e,t,n,r,s,o,a,c){var u,l,h,f,d,g,m,p,v,_,y,x,w,A,L,b=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(c=t.__h,a=e.__e=t.__e,e.__h=null,s=[a]),(u=xe.__b)&&u(e);try{e:if(typeof b=="function"){if(p=e.props,v=(u=b.contextType)&&n[u.__c],_=u?v?v.props.value:u.__:n,t.__c?m=(l=e.__c=t.__c).__=l.__E:("prototype"in b&&b.prototype.render?e.__c=l=new b(p,_):(e.__c=l=new gn(p,_),l.constructor=b,l.render=L2),v&&v.sub(l),l.props=p,l.state||(l.state={}),l.context=_,l.__n=n,h=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),b.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Wn({},l.__s)),Wn(l.__s,b.getDerivedStateFromProps(p,l.__s))),f=l.props,d=l.state,h)b.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(b.getDerivedStateFromProps==null&&p!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(p,_),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(p,l.__s,_)===!1||e.__v===t.__v){for(l.props=p,l.state=l.__s,e.__v!==t.__v&&(l.__d=!1),l.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(T){T&&(T.__=e)}),y=0;y<l._sb.length;y++)l.__h.push(l._sb[y]);l._sb=[],l.__h.length&&o.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(p,l.__s,_),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,d,g)})}if(l.context=_,l.props=p,l.__v=e,l.__P=i,x=xe.__r,w=0,"prototype"in b&&b.prototype.render){for(l.state=l.__s,l.__d=!1,x&&x(e),u=l.render(l.props,l.state,l.context),A=0;A<l._sb.length;A++)l.__h.push(l._sb[A]);l._sb=[]}else do l.__d=!1,x&&x(e),u=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++w<25);l.state=l.__s,l.getChildContext!=null&&(n=Wn(Wn({},n),l.getChildContext())),h||l.getSnapshotBeforeUpdate==null||(g=l.getSnapshotBeforeUpdate(f,d)),L=u!=null&&u.type===It&&u.key==null?u.props.children:u,Lm(i,Array.isArray(L)?L:[L],e,t,n,r,s,o,a,c),l.base=e.__e,e.__h=null,l.__h.length&&o.push(l),m&&(l.__E=l.__=null),l.__e=!1}else s==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=R2(t.__e,e,t,n,r,s,o,c);(u=xe.diffed)&&u(e)}catch(T){e.__v=null,(c||s!=null)&&(e.__e=a,e.__h=!!c,s[s.indexOf(a)]=null),xe.__e(T,e,t)}}function Om(i,e){xe.__c&&xe.__c(e,i),i.some(function(t){try{i=t.__h,t.__h=[],i.some(function(n){n.call(t)})}catch(n){xe.__e(n,t.__v)}})}function R2(i,e,t,n,r,s,o,a){var c,u,l,h=t.props,f=e.props,d=e.type,g=0;if(d==="svg"&&(r=!0),s!=null){for(;g<s.length;g++)if((c=s[g])&&"setAttribute"in c==!!d&&(d?c.localName===d:c.nodeType===3)){i=c,s[g]=null;break}}if(i==null){if(d===null)return document.createTextNode(f);i=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,f.is&&f),s=null,a=!1}if(d===null)h===f||a&&i.data===f||(i.data=f);else{if(s=s&&to.call(i.childNodes),u=(h=t.props||ca).dangerouslySetInnerHTML,l=f.dangerouslySetInnerHTML,!a){if(s!=null)for(h={},g=0;g<i.attributes.length;g++)h[i.attributes[g].name]=i.attributes[g].value;(l||u)&&(l&&(u&&l.__html==u.__html||l.__html===i.innerHTML)||(i.innerHTML=l&&l.__html||""))}if(P2(i,f,h,r,a),l)e.__k=[];else if(g=e.props.children,Lm(i,Array.isArray(g)?g:[g],e,t,n,r&&d!=="foreignObject",s,o,s?s[0]:t.__k&&zs(t,0),a),s!=null)for(g=s.length;g--;)s[g]!=null&&Dm(s[g]);a||("value"in f&&(g=f.value)!==void 0&&(g!==i.value||d==="progress"&&!g||d==="option"&&g!==h.value)&&ha(i,"value",g,h.value,!1),"checked"in f&&(g=f.checked)!==void 0&&g!==i.checked&&ha(i,"checked",g,h.checked,!1))}return i}function Nm(i,e,t){try{typeof i=="function"?i(e):i.current=e}catch(n){xe.__e(n,t)}}function Bm(i,e,t){var n,r;if(xe.unmount&&xe.unmount(i),(n=i.ref)&&(n.current&&n.current!==i.__e||Nm(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){xe.__e(s,e)}n.base=n.__P=null,i.__c=void 0}if(n=i.__k)for(r=0;r<n.length;r++)n[r]&&Bm(n[r],e,t||typeof i.type!="function");t||i.__e==null||Dm(i.__e),i.__=i.__e=i.__d=void 0}function L2(i,e,t){return this.constructor(i,t)}function Ur(i,e,t){var n,r,s;xe.__&&xe.__(i,e),r=(n=typeof t=="function")?null:t&&t.__k||e.__k,s=[],_u(e,i=(!n&&t||e).__k=Cn(It,null,[i]),r||ca,ca,e.ownerSVGElement!==void 0,!n&&t?[t]:r?null:e.firstChild?to.call(e.childNodes):null,s,!n&&t?t:r?r.__e:e.firstChild,n),Om(s,i)}function km(i,e){Ur(i,e,km)}function I2(i,e,t){var n,r,s,o=Wn({},i.props);for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:o[s]=e[s];return arguments.length>2&&(o.children=arguments.length>3?to.call(arguments,2):t),Cs(i.type,o,n||i.key,r||i.ref,null)}function Um(i,e){var t={__c:e="__cC"+Am++,__:i,Consumer:function(n,r){return n.children(r)},Provider:function(n){var r,s;return this.getChildContext||(r=[],(s={})[e]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&r.some(Tc)},this.sub=function(o){r.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){r.splice(r.indexOf(o),1),a&&a.call(o)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}to=Cm.slice,xe={__e:function(i,e,t,n){for(var r,s,o;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(i)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(i,n||{}),o=r.__d),o)return r.__E=r}catch(a){i=a}throw i}},Em=0,gn.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Wn({},this.state),typeof i=="function"&&(i=i(Wn({},t),this.props)),i&&Wn(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),Tc(this))},gn.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),Tc(this))},gn.prototype.render=It,As=[],ua.__r=0,Am=0;var vi,nt,Ul,ed,zr=0,zm=[],Yo=[],td=xe.__b,nd=xe.__r,id=xe.diffed,rd=xe.__c,sd=xe.unmount;function tr(i,e){xe.__h&&xe.__h(nt,i,zr||e),zr=0;var t=nt.__H||(nt.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({__V:Yo}),t.__[i]}function ns(i){return zr=1,xu(jm,i)}function xu(i,e,t){var n=tr(vi++,2);if(n.t=i,!n.__c&&(n.__=[t?t(e):jm(void 0,e),function(s){var o=n.__N?n.__N[0]:n.__[0],a=n.t(o,s);o!==a&&(n.__N=[a,n.__[1]],n.__c.setState({}))}],n.__c=nt,!nt.u)){nt.u=!0;var r=nt.shouldComponentUpdate;nt.shouldComponentUpdate=function(s,o,a){if(!n.__c.__H)return!0;var c=n.__c.__H.__.filter(function(l){return l.__c});if(c.every(function(l){return!l.__N}))return!r||r.call(this,s,o,a);var u=!1;return c.forEach(function(l){if(l.__N){var h=l.__[0];l.__=l.__N,l.__N=void 0,h!==l.__[0]&&(u=!0)}}),!(!u&&n.__c.props===s)&&(!r||r.call(this,s,o,a))}}return n.__N||n.__}function Hs(i,e){var t=tr(vi++,3);!xe.__s&&bu(t.__H,e)&&(t.__=i,t.i=e,nt.__H.__h.push(t))}function is(i,e){var t=tr(vi++,4);!xe.__s&&bu(t.__H,e)&&(t.__=i,t.i=e,nt.__h.push(t))}function Vs(i){return zr=5,ka(function(){return{current:i}},[])}function Hm(i,e,t){zr=6,is(function(){return typeof i=="function"?(i(e()),function(){return i(null)}):i?(i.current=e(),function(){return i.current=null}):void 0},t==null?t:t.concat(i))}function ka(i,e){var t=tr(vi++,7);return bu(t.__H,e)?(t.__V=i(),t.i=e,t.__h=i,t.__V):t.__}function Vm(i,e){return zr=8,ka(function(){return i},e)}function Gm(i){var e=nt.context[i.__c],t=tr(vi++,9);return t.c=i,e?(t.__==null&&(t.__=!0,e.sub(nt)),e.props.value):i.__}function yu(i,e){xe.useDebugValue&&xe.useDebugValue(e?e(i):i)}function F2(i){var e=tr(vi++,10),t=ns();return e.__=i,nt.componentDidCatch||(nt.componentDidCatch=function(n,r){e.__&&e.__(n,r),t[1](n)}),[t[0],function(){t[1](void 0)}]}function Wm(){var i=tr(vi++,11);if(!i.__){for(var e=nt.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var t=e.__m||(e.__m=[0,0]);i.__="P"+t[0]+"-"+t[1]++}return i.__}function O2(){for(var i;i=zm.shift();)if(i.__P&&i.__H)try{i.__H.__h.forEach(Ko),i.__H.__h.forEach(Ec),i.__H.__h=[]}catch(e){i.__H.__h=[],xe.__e(e,i.__v)}}xe.__b=function(i){nt=null,td&&td(i)},xe.__r=function(i){nd&&nd(i),vi=0;var e=(nt=i.__c).__H;e&&(Ul===nt?(e.__h=[],nt.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=Yo,t.__N=t.i=void 0})):(e.__h.forEach(Ko),e.__h.forEach(Ec),e.__h=[])),Ul=nt},xe.diffed=function(i){id&&id(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(zm.push(e)!==1&&ed===xe.requestAnimationFrame||((ed=xe.requestAnimationFrame)||N2)(O2)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==Yo&&(t.__=t.__V),t.i=void 0,t.__V=Yo})),Ul=nt=null},xe.__c=function(i,e){e.some(function(t){try{t.__h.forEach(Ko),t.__h=t.__h.filter(function(n){return!n.__||Ec(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],xe.__e(n,t.__v)}}),rd&&rd(i,e)},xe.unmount=function(i){sd&&sd(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{Ko(n)}catch(r){e=r}}),t.__H=void 0,e&&xe.__e(e,t.__v))};var od=typeof requestAnimationFrame=="function";function N2(i){var e,t=function(){clearTimeout(n),od&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,100);od&&(e=requestAnimationFrame(t))}function Ko(i){var e=nt,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),nt=e}function Ec(i){var e=nt;i.__c=i.__(),nt=e}function bu(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function jm(i,e){return typeof e=="function"?e(i):e}function $m(i,e){for(var t in e)i[t]=e[t];return i}function Ac(i,e){for(var t in i)if(t!=="__source"&&!(t in e))return!0;for(var n in e)if(n!=="__source"&&i[n]!==e[n])return!0;return!1}function zl(i,e){return i===e&&(i!==0||1/i==1/e)||i!=i&&e!=e}function fa(i){this.props=i}function Xm(i,e){function t(r){var s=this.props.ref,o=s==r.ref;return!o&&s&&(s.call?s(null):s.current=null),e?!e(this.props,r)||!o:Ac(this.props,r)}function n(r){return this.shouldComponentUpdate=t,Cn(i,r)}return n.displayName="Memo("+(i.displayName||i.name)+")",n.prototype.isReactComponent=!0,n.__f=!0,n}(fa.prototype=new gn).isPureReactComponent=!0,fa.prototype.shouldComponentUpdate=function(i,e){return Ac(this.props,i)||Ac(this.state,e)};var ad=xe.__b;xe.__b=function(i){i.type&&i.type.__f&&i.ref&&(i.props.ref=i.ref,i.ref=null),ad&&ad(i)};var B2=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function qm(i){function e(t){var n=$m({},t);return delete n.ref,i(n,t.ref||null)}return e.$$typeof=B2,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(i.displayName||i.name)+")",e}var ld=function(i,e){return i==null?null:$n($n(i).map(e))},Ym={map:ld,forEach:ld,count:function(i){return i?$n(i).length:0},only:function(i){var e=$n(i);if(e.length!==1)throw"Children.only";return e[0]},toArray:$n},k2=xe.__e;xe.__e=function(i,e,t,n){if(i.then){for(var r,s=e;s=s.__;)if((r=s.__c)&&r.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),r.__c(i,e)}k2(i,e,t,n)};var cd=xe.unmount;function Km(i,e,t){return i&&(i.__c&&i.__c.__H&&(i.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),i.__c.__H=null),(i=$m({},i)).__c!=null&&(i.__c.__P===t&&(i.__c.__P=e),i.__c=null),i.__k=i.__k&&i.__k.map(function(n){return Km(n,e,t)})),i}function Zm(i,e,t){return i&&(i.__v=null,i.__k=i.__k&&i.__k.map(function(n){return Zm(n,e,t)}),i.__c&&i.__c.__P===e&&(i.__e&&t.insertBefore(i.__e,i.__d),i.__c.__e=!0,i.__c.__P=t)),i}function Ds(){this.__u=0,this.t=null,this.__b=null}function Qm(i){var e=i.__.__c;return e&&e.__a&&e.__a(i)}function Jm(i){var e,t,n;function r(s){if(e||(e=i()).then(function(o){t=o.default||o},function(o){n=o}),n)throw n;if(!t)throw e;return Cn(t,s)}return r.displayName="Lazy",r.__f=!0,r}function Ar(){this.u=null,this.o=null}xe.unmount=function(i){var e=i.__c;e&&e.__R&&e.__R(),e&&i.__h===!0&&(i.type=null),cd&&cd(i)},(Ds.prototype=new gn).__c=function(i,e){var t=e.__c,n=this;n.t==null&&(n.t=[]),n.t.push(t);var r=Qm(n.__v),s=!1,o=function(){s||(s=!0,t.__R=null,r?r(a):a())};t.__R=o;var a=function(){if(!--n.__u){if(n.state.__a){var u=n.state.__a;n.__v.__k[0]=Zm(u,u.__c.__P,u.__c.__O)}var l;for(n.setState({__a:n.__b=null});l=n.t.pop();)l.forceUpdate()}},c=e.__h===!0;n.__u++||c||n.setState({__a:n.__b=n.__v.__k[0]}),i.then(o,o)},Ds.prototype.componentWillUnmount=function(){this.t=[]},Ds.prototype.render=function(i,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=Km(this.__b,t,n.__O=n.__P)}this.__b=null}var r=e.__a&&Cn(It,null,i.fallback);return r&&(r.__h=null),[Cn(It,null,e.__a?null:i.children),r]};var ud=function(i,e,t){if(++t[1]===t[0]&&i.o.delete(e),i.props.revealOrder&&(i.props.revealOrder[0]!=="t"||!i.o.size))for(t=i.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;i.u=t=t[2]}};function U2(i){return this.getChildContext=function(){return i.context},i.children}function z2(i){var e=this,t=i.i;e.componentWillUnmount=function(){Ur(null,e.l),e.l=null,e.i=null},e.i&&e.i!==t&&e.componentWillUnmount(),i.__v?(e.l||(e.i=t,e.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,r){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),Ur(Cn(U2,{context:e.context},i.__v),e.l)):e.l&&e.componentWillUnmount()}function eg(i,e){var t=Cn(z2,{__v:i,i:e});return t.containerInfo=e,t}(Ar.prototype=new gn).__a=function(i){var e=this,t=Qm(e.__v),n=e.o.get(i);return n[0]++,function(r){var s=function(){e.props.revealOrder?(n.push(r),ud(e,i,n)):r()};t?t(s):s()}},Ar.prototype.render=function(i){this.u=null,this.o=new Map;var e=$n(i.children);i.revealOrder&&i.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return i.children},Ar.prototype.componentDidUpdate=Ar.prototype.componentDidMount=function(){var i=this;this.o.forEach(function(e,t){ud(i,t,e)})};var tg=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,H2=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V2=typeof document<"u",G2=function(i){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(i)};function ng(i,e,t){return e.__k==null&&(e.textContent=""),Ur(i,e),typeof t=="function"&&t(),i?i.__c:null}function ig(i,e,t){return km(i,e),typeof t=="function"&&t(),i?i.__c:null}gn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(i){Object.defineProperty(gn.prototype,i,{configurable:!0,get:function(){return this["UNSAFE_"+i]},set:function(e){Object.defineProperty(this,i,{configurable:!0,writable:!0,value:e})}})});var hd=xe.event;function W2(){}function j2(){return this.cancelBubble}function $2(){return this.defaultPrevented}xe.event=function(i){return hd&&(i=hd(i)),i.persist=W2,i.isPropagationStopped=j2,i.isDefaultPrevented=$2,i.nativeEvent=i};var rg,fd={configurable:!0,get:function(){return this.class}},dd=xe.vnode;xe.vnode=function(i){var e=i.type,t=i.props,n=t;if(typeof e=="string"){var r=e.indexOf("-")===-1;for(var s in n={},t){var o=t[s];V2&&s==="children"&&e==="noscript"||s==="value"&&"defaultValue"in t&&o==null||(s==="defaultValue"&&"value"in t&&t.value==null?s="value":s==="download"&&o===!0?o="":/ondoubleclick/i.test(s)?s="ondblclick":/^onchange(textarea|input)/i.test(s+e)&&!G2(t.type)?s="oninput":/^onfocus$/i.test(s)?s="onfocusin":/^onblur$/i.test(s)?s="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s)?s=s.toLowerCase():r&&H2.test(s)?s=s.replace(/[A-Z0-9]/g,"-$&").toLowerCase():o===null&&(o=void 0),/^oninput$/i.test(s)&&(s=s.toLowerCase(),n[s]&&(s="oninputCapture")),n[s]=o)}e=="select"&&n.multiple&&Array.isArray(n.value)&&(n.value=$n(t.children).forEach(function(a){a.props.selected=n.value.indexOf(a.props.value)!=-1})),e=="select"&&n.defaultValue!=null&&(n.value=$n(t.children).forEach(function(a){a.props.selected=n.multiple?n.defaultValue.indexOf(a.props.value)!=-1:n.defaultValue==a.props.value})),i.props=n,t.class!=t.className&&(fd.enumerable="className"in t,t.className!=null&&(n.class=t.className),Object.defineProperty(n,"className",fd))}i.$$typeof=tg,dd&&dd(i)};var pd=xe.__r;xe.__r=function(i){pd&&pd(i),rg=i.__c};var sg={ReactCurrentDispatcher:{current:{readContext:function(i){return rg.__n[i.__c].props.value}}}},X2="17.0.2";function og(i){return Cn.bind(null,i)}function wu(i){return!!i&&i.$$typeof===tg}function ag(i){return wu(i)?I2.apply(null,arguments):i}function lg(i){return!!i.__k&&(Ur(null,i),!0)}function cg(i){return i&&(i.base||i.nodeType===1&&i)||null}var ug=function(i,e){return i(e)},hg=function(i,e){return i(e)},fg=It;function Mu(i){i()}function dg(i){return i}function pg(){return[!1,Mu]}var mg=is;function gg(i,e){var t=e(),n=ns({h:{__:t,v:e}}),r=n[0].h,s=n[1];return is(function(){r.__=t,r.v=e,zl(r.__,e())||s({h:r})},[i,t,e]),Hs(function(){return zl(r.__,r.v())||s({h:r}),i(function(){zl(r.__,r.v())||s({h:r})})},[i]),t}var q2={useState:ns,useId:Wm,useReducer:xu,useEffect:Hs,useLayoutEffect:is,useInsertionEffect:mg,useTransition:pg,useDeferredValue:dg,useSyncExternalStore:gg,startTransition:Mu,useRef:Vs,useImperativeHandle:Hm,useMemo:ka,useCallback:Vm,useContext:Gm,useDebugValue:yu,version:"17.0.2",Children:Ym,render:ng,hydrate:ig,unmountComponentAtNode:lg,createPortal:eg,createElement:Cn,createContext:Um,createFactory:og,cloneElement:ag,createRef:Pm,Fragment:It,isValidElement:wu,findDOMNode:cg,Component:gn,PureComponent:fa,memo:Xm,forwardRef:qm,flushSync:hg,unstable_batchedUpdates:ug,StrictMode:fg,Suspense:Ds,SuspenseList:Ar,lazy:Jm,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:sg};const Y2=Object.freeze(Object.defineProperty({__proto__:null,Children:Ym,PureComponent:fa,StrictMode:fg,Suspense:Ds,SuspenseList:Ar,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:sg,cloneElement:ag,createFactory:og,createPortal:eg,default:q2,findDOMNode:cg,flushSync:hg,forwardRef:qm,hydrate:ig,isValidElement:wu,lazy:Jm,memo:Xm,render:ng,startTransition:Mu,unmountComponentAtNode:lg,unstable_batchedUpdates:ug,useDeferredValue:dg,useInsertionEffect:mg,useSyncExternalStore:gg,useTransition:pg,version:X2,Component:gn,Fragment:It,createContext:Um,createElement:Cn,createRef:Pm,useCallback:Vm,useContext:Gm,useDebugValue:yu,useEffect:Hs,useErrorBoundary:F2,useId:Wm,useImperativeHandle:Hm,useLayoutEffect:is,useMemo:ka,useReducer:xu,useRef:Vs,useState:ns},Symbol.toStringTag,{value:"Module"}));var vg={exports:{}},_g={};const xg=c0(Y2);var yg={exports:{}},bg={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=xg;function K2(i,e){return i===e&&(i!==0||1/i===1/e)||i!==i&&e!==e}var Z2=typeof Object.is=="function"?Object.is:K2,Q2=Hr.useState,J2=Hr.useEffect,eA=Hr.useLayoutEffect,tA=Hr.useDebugValue;function nA(i,e){var t=e(),n=Q2({inst:{value:t,getSnapshot:e}}),r=n[0].inst,s=n[1];return eA(function(){r.value=t,r.getSnapshot=e,Hl(r)&&s({inst:r})},[i,t,e]),J2(function(){return Hl(r)&&s({inst:r}),i(function(){Hl(r)&&s({inst:r})})},[i]),tA(t),t}function Hl(i){var e=i.getSnapshot;i=i.value;try{var t=e();return!Z2(i,t)}catch{return!0}}function iA(i,e){return e()}var rA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?iA:nA;bg.useSyncExternalStore=Hr.useSyncExternalStore!==void 0?Hr.useSyncExternalStore:rA;(function(i){i.exports=bg})(yg);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=xg,sA=yg.exports;function oA(i,e){return i===e&&(i!==0||1/i===1/e)||i!==i&&e!==e}var aA=typeof Object.is=="function"?Object.is:oA,lA=sA.useSyncExternalStore,cA=Ua.useRef,uA=Ua.useEffect,hA=Ua.useMemo,fA=Ua.useDebugValue;_g.useSyncExternalStoreWithSelector=function(i,e,t,n,r){var s=cA(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=hA(function(){function c(d){if(!u){if(u=!0,l=d,d=n(d),r!==void 0&&o.hasValue){var g=o.value;if(r(g,d))return h=g}return h=d}if(g=h,aA(l,d))return g;var m=n(d);return r!==void 0&&r(g,m)?g:(l=d,h=m)}var u=!1,l,h,f=t===void 0?null:t;return[function(){return c(e())},f===null?void 0:function(){return c(f())}]},[e,t,n,r]);var a=lA(i,s[0],s[1]);return uA(function(){o.hasValue=!0,o.value=a},[a]),fA(a),a};(function(i){i.exports=_g})(vg);const dA=l0(vg.exports),{useSyncExternalStoreWithSelector:pA}=dA;function ot(i,e=i.getState,t){const n=pA(i.subscribe,i.getState,i.getServerState||i.getState,e,t);return yu(n),n}const md=i=>{const e=typeof i=="function"?C2(i):i,t=(n,r)=>ot(e,n,r);return Object.assign(t,e),t},no=i=>i?md(i):md,da=i=>e=>{try{const t=i(e);return t instanceof Promise?t:{then(n){return da(n)(t)},catch(n){return this}}}catch(t){return{then(n){return this},catch(n){return da(n)(t)}}}},mA=(i,e)=>(t,n,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:p=>p,version:0,merge:(p,v)=>({...v,...p}),...e},o=!1;const a=new Set,c=new Set;let u;try{u=s.getStorage()}catch{}if(!u)return i((...p)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(...p)},n,r);const l=da(s.serialize),h=()=>{const p=s.partialize({...n()});let v;const _=l({state:p,version:s.version}).then(y=>u.setItem(s.name,y)).catch(y=>{v=y});if(v)throw v;return _},f=r.setState;r.setState=(p,v)=>{f(p,v),h()};const d=i((...p)=>{t(...p),h()},n,r);let g;const m=()=>{var p;if(!u)return;o=!1,a.forEach(_=>_(n()));const v=((p=s.onRehydrateStorage)==null?void 0:p.call(s,n()))||void 0;return da(u.getItem.bind(u))(s.name).then(_=>{if(_)return s.deserialize(_)}).then(_=>{if(_)if(typeof _.version=="number"&&_.version!==s.version){if(s.migrate)return s.migrate(_.state,_.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return _.state}).then(_=>{var y;return g=s.merge(_,(y=n())!=null?y:d),t(g,!0),h()}).then(()=>{v?.(g,void 0),o=!0,c.forEach(_=>_(g))}).catch(_=>{v?.(void 0,_)})};return r.persist={setOptions:p=>{s={...s,...p},p.getStorage&&(u=p.getStorage())},clearStorage:()=>{u?.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>m(),hasHydrated:()=>o,onHydrate:p=>(a.add(p),()=>{a.delete(p)}),onFinishHydration:p=>(c.add(p),()=>{c.delete(p)})},m(),g||d},Su=mA;function nn(i){for(var e=arguments.length,t=Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+i+(t.length?" "+t.map(function(r){return"'"+r+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Vr(i){return!!i&&!!i[$e]}function Xn(i){var e;return!!i&&(function(t){if(!t||typeof t!="object")return!1;var n=Object.getPrototypeOf(t);if(n===null)return!0;var r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===SA}(i)||Array.isArray(i)||!!i[wd]||!!(!((e=i.constructor)===null||e===void 0)&&e[wd])||Tu(i)||Eu(i))}function Gr(i,e,t){t===void 0&&(t=!1),rs(i)===0?(t?Object.keys:Ru)(i).forEach(function(n){t&&typeof n=="symbol"||e(n,i[n],i)}):i.forEach(function(n,r){return e(r,n,i)})}function rs(i){var e=i[$e];return e?e.i>3?e.i-4:e.i:Array.isArray(i)?1:Tu(i)?2:Eu(i)?3:0}function Cc(i,e){return rs(i)===2?i.has(e):Object.prototype.hasOwnProperty.call(i,e)}function gA(i,e){return rs(i)===2?i.get(e):i[e]}function wg(i,e,t){var n=rs(i);n===2?i.set(e,t):n===3?(i.delete(e),i.add(t)):i[e]=t}function vA(i,e){return i===e?i!==0||1/i==1/e:i!=i&&e!=e}function Tu(i){return wA&&i instanceof Map}function Eu(i){return MA&&i instanceof Set}function St(i){return i.o||i.t}function Au(i){if(Array.isArray(i))return Array.prototype.slice.call(i);var e=TA(i);delete e[$e];for(var t=Ru(e),n=0;n<t.length;n++){var r=t[n],s=e[r];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[r]={configurable:!0,writable:!0,enumerable:s.enumerable,value:i[r]})}return Object.create(Object.getPrototypeOf(i),e)}function Cu(i,e){return e===void 0&&(e=!1),Du(i)||Vr(i)||!Xn(i)||(rs(i)>1&&(i.set=i.add=i.clear=i.delete=_A),Object.freeze(i),e&&Gr(i,function(t,n){return Cu(n,!0)},!0)),i}function _A(){nn(2)}function Du(i){return i==null||typeof i!="object"||Object.isFrozen(i)}function An(i){var e=Pc[i];return e||nn(18,i),e}function xA(i,e){Pc[i]||(Pc[i]=e)}function pa(){return Ws}function Vl(i,e){e&&(An("Patches"),i.u=[],i.s=[],i.v=e)}function ma(i){Dc(i),i.p.forEach(yA),i.p=null}function Dc(i){i===Ws&&(Ws=i.l)}function gd(i){return Ws={p:[],l:Ws,h:i,m:!0,_:0}}function yA(i){var e=i[$e];e.i===0||e.i===1?e.j():e.O=!0}function Gl(i,e){e._=e.p.length;var t=e.p[0],n=i!==void 0&&i!==t;return e.h.g||An("ES5").S(e,i,n),n?(t[$e].P&&(ma(e),nn(4)),Xn(i)&&(i=ga(e,i),e.l||va(e,i)),e.u&&An("Patches").M(t[$e].t,i,e.u,e.s)):i=ga(e,t,[]),ma(e),e.u&&e.v(e.u,e.s),i!==Sg?i:void 0}function ga(i,e,t){if(Du(e))return e;var n=e[$e];if(!n)return Gr(e,function(s,o){return vd(i,n,e,s,o,t)},!0),e;if(n.A!==i)return e;if(!n.P)return va(i,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var r=n.i===4||n.i===5?n.o=Au(n.k):n.o;Gr(n.i===3?new Set(r):r,function(s,o){return vd(i,n,r,s,o,t)}),va(i,r,!1),t&&i.u&&An("Patches").R(n,t,i.u,i.s)}return n.o}function vd(i,e,t,n,r,s){if(Vr(r)){var o=ga(i,r,s&&e&&e.i!==3&&!Cc(e.D,n)?s.concat(n):void 0);if(wg(t,n,o),!Vr(o))return;i.m=!1}if(Xn(r)&&!Du(r)){if(!i.h.F&&i._<1)return;ga(i,r),e&&e.A.l||va(i,r)}}function va(i,e,t){t===void 0&&(t=!1),i.h.F&&i.m&&Cu(e,t)}function Wl(i,e){var t=i[$e];return(t?St(t):i)[e]}function _d(i,e){if(e in i)for(var t=Object.getPrototypeOf(i);t;){var n=Object.getOwnPropertyDescriptor(t,e);if(n)return n;t=Object.getPrototypeOf(t)}}function zn(i){i.P||(i.P=!0,i.l&&zn(i.l))}function jl(i){i.o||(i.o=Au(i.t))}function Gs(i,e,t){var n=Tu(e)?An("MapSet").N(e,t):Eu(e)?An("MapSet").T(e,t):i.g?function(r,s){var o=Array.isArray(r),a={i:o?1:0,A:s?s.A:pa(),P:!1,I:!1,D:{},l:s,t:r,k:null,o:null,j:null,C:!1},c=a,u=Rc;o&&(c=[a],u=ws);var l=Proxy.revocable(c,u),h=l.revoke,f=l.proxy;return a.k=f,a.j=h,f}(e,t):An("ES5").J(e,t);return(t?t.A:pa()).p.push(n),n}function bA(i){return Vr(i)||nn(22,i),function e(t){if(!Xn(t))return t;var n,r=t[$e],s=rs(t);if(r){if(!r.P&&(r.i<4||!An("ES5").K(r)))return r.t;r.I=!0,n=xd(t,s),r.I=!1}else n=xd(t,s);return Gr(n,function(o,a){r&&gA(r.t,o)===a||wg(n,o,e(a))}),s===3?new Set(n):n}(i)}function xd(i,e){switch(e){case 2:return new Map(i);case 3:return Array.from(i)}return Au(i)}function Mg(){function i(a,c){function u(){this.constructor=a}r(a,c),a.prototype=(u.prototype=c.prototype,new u)}function e(a){a.o||(a.D=new Map,a.o=new Map(a.t))}function t(a){a.o||(a.o=new Set,a.t.forEach(function(c){if(Xn(c)){var u=Gs(a.A.h,c,a);a.p.set(c,u),a.o.add(u)}else a.o.add(c)}))}function n(a){a.O&&nn(3,JSON.stringify(St(a)))}var r=function(a,c){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,l){u.__proto__=l}||function(u,l){for(var h in l)l.hasOwnProperty(h)&&(u[h]=l[h])})(a,c)},s=function(){function a(u,l){return this[$e]={i:2,l,A:l?l.A:pa(),P:!1,I:!1,o:void 0,D:void 0,t:u,k:this,C:!1,O:!1},this}i(a,Map);var c=a.prototype;return Object.defineProperty(c,"size",{get:function(){return St(this[$e]).size}}),c.has=function(u){return St(this[$e]).has(u)},c.set=function(u,l){var h=this[$e];return n(h),St(h).has(u)&&St(h).get(u)===l||(e(h),zn(h),h.D.set(u,!0),h.o.set(u,l),h.D.set(u,!0)),this},c.delete=function(u){if(!this.has(u))return!1;var l=this[$e];return n(l),e(l),zn(l),l.t.has(u)?l.D.set(u,!1):l.D.delete(u),l.o.delete(u),!0},c.clear=function(){var u=this[$e];n(u),St(u).size&&(e(u),zn(u),u.D=new Map,Gr(u.t,function(l){u.D.set(l,!1)}),u.o.clear())},c.forEach=function(u,l){var h=this;St(this[$e]).forEach(function(f,d){u.call(l,h.get(d),d,h)})},c.get=function(u){var l=this[$e];n(l);var h=St(l).get(u);if(l.I||!Xn(h)||h!==l.t.get(u))return h;var f=Gs(l.A.h,h,l);return e(l),l.o.set(u,f),f},c.keys=function(){return St(this[$e]).keys()},c.values=function(){var u,l=this,h=this.keys();return(u={})[Bo]=function(){return l.values()},u.next=function(){var f=h.next();return f.done?f:{done:!1,value:l.get(f.value)}},u},c.entries=function(){var u,l=this,h=this.keys();return(u={})[Bo]=function(){return l.entries()},u.next=function(){var f=h.next();if(f.done)return f;var d=l.get(f.value);return{done:!1,value:[f.value,d]}},u},c[Bo]=function(){return this.entries()},a}(),o=function(){function a(u,l){return this[$e]={i:3,l,A:l?l.A:pa(),P:!1,I:!1,o:void 0,t:u,k:this,p:new Map,O:!1,C:!1},this}i(a,Set);var c=a.prototype;return Object.defineProperty(c,"size",{get:function(){return St(this[$e]).size}}),c.has=function(u){var l=this[$e];return n(l),l.o?!!l.o.has(u)||!(!l.p.has(u)||!l.o.has(l.p.get(u))):l.t.has(u)},c.add=function(u){var l=this[$e];return n(l),this.has(u)||(t(l),zn(l),l.o.add(u)),this},c.delete=function(u){if(!this.has(u))return!1;var l=this[$e];return n(l),t(l),zn(l),l.o.delete(u)||!!l.p.has(u)&&l.o.delete(l.p.get(u))},c.clear=function(){var u=this[$e];n(u),St(u).size&&(t(u),zn(u),u.o.clear())},c.values=function(){var u=this[$e];return n(u),t(u),u.o.values()},c.entries=function(){var u=this[$e];return n(u),t(u),u.o.entries()},c.keys=function(){return this.values()},c[Bo]=function(){return this.values()},c.forEach=function(u,l){for(var h=this.values(),f=h.next();!f.done;)u.call(l,f.value,f.value,this),f=h.next()},a}();xA("MapSet",{N:function(a,c){return new s(a,c)},T:function(a,c){return new o(a,c)}})}var yd,Ws,Pu=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",wA=typeof Map<"u",MA=typeof Set<"u",bd=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Sg=Pu?Symbol.for("immer-nothing"):((yd={})["immer-nothing"]=!0,yd),wd=Pu?Symbol.for("immer-draftable"):"__$immer_draftable",$e=Pu?Symbol.for("immer-state"):"__$immer_state",Bo=typeof Symbol<"u"&&Symbol.iterator||"@@iterator",SA=""+Object.prototype.constructor,Ru=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(i){return Object.getOwnPropertyNames(i).concat(Object.getOwnPropertySymbols(i))}:Object.getOwnPropertyNames,TA=Object.getOwnPropertyDescriptors||function(i){var e={};return Ru(i).forEach(function(t){e[t]=Object.getOwnPropertyDescriptor(i,t)}),e},Pc={},Rc={get:function(i,e){if(e===$e)return i;var t=St(i);if(!Cc(t,e))return function(r,s,o){var a,c=_d(s,o);return c?"value"in c?c.value:(a=c.get)===null||a===void 0?void 0:a.call(r.k):void 0}(i,t,e);var n=t[e];return i.I||!Xn(n)?n:n===Wl(i.t,e)?(jl(i),i.o[e]=Gs(i.A.h,n,i)):n},has:function(i,e){return e in St(i)},ownKeys:function(i){return Reflect.ownKeys(St(i))},set:function(i,e,t){var n=_d(St(i),e);if(n?.set)return n.set.call(i.k,t),!0;if(!i.P){var r=Wl(St(i),e),s=r?.[$e];if(s&&s.t===t)return i.o[e]=t,i.D[e]=!1,!0;if(vA(t,r)&&(t!==void 0||Cc(i.t,e)))return!0;jl(i),zn(i)}return i.o[e]===t&&typeof t!="number"&&(t!==void 0||e in i.o)||(i.o[e]=t,i.D[e]=!0,!0)},deleteProperty:function(i,e){return Wl(i.t,e)!==void 0||e in i.t?(i.D[e]=!1,jl(i),zn(i)):delete i.D[e],i.o&&delete i.o[e],!0},getOwnPropertyDescriptor:function(i,e){var t=St(i),n=Reflect.getOwnPropertyDescriptor(t,e);return n&&{writable:!0,configurable:i.i!==1||e!=="length",enumerable:n.enumerable,value:t[e]}},defineProperty:function(){nn(11)},getPrototypeOf:function(i){return Object.getPrototypeOf(i.t)},setPrototypeOf:function(){nn(12)}},ws={};Gr(Rc,function(i,e){ws[i]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),ws.deleteProperty=function(i,e){return ws.set.call(this,i,e,void 0)},ws.set=function(i,e,t){return Rc.set.call(this,i[0],e,t,i[0])};var EA=function(){function i(t){var n=this;this.g=bd,this.F=!0,this.produce=function(r,s,o){if(typeof r=="function"&&typeof s!="function"){var a=s;s=r;var c=n;return function(m){var p=this;m===void 0&&(m=a);for(var v=arguments.length,_=Array(v>1?v-1:0),y=1;y<v;y++)_[y-1]=arguments[y];return c.produce(m,function(x){var w;return(w=s).call.apply(w,[p,x].concat(_))})}}var u;if(typeof s!="function"&&nn(6),o!==void 0&&typeof o!="function"&&nn(7),Xn(r)){var l=gd(n),h=Gs(n,r,void 0),f=!0;try{u=s(h),f=!1}finally{f?ma(l):Dc(l)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(m){return Vl(l,o),Gl(m,l)},function(m){throw ma(l),m}):(Vl(l,o),Gl(u,l))}if(!r||typeof r!="object"){if((u=s(r))===void 0&&(u=r),u===Sg&&(u=void 0),n.F&&Cu(u,!0),o){var d=[],g=[];An("Patches").M(r,u,d,g),o(d,g)}return u}nn(21,r)},this.produceWithPatches=function(r,s){if(typeof r=="function")return function(u){for(var l=arguments.length,h=Array(l>1?l-1:0),f=1;f<l;f++)h[f-1]=arguments[f];return n.produceWithPatches(u,function(d){return r.apply(void 0,[d].concat(h))})};var o,a,c=n.produce(r,s,function(u,l){o=u,a=l});return typeof Promise<"u"&&c instanceof Promise?c.then(function(u){return[u,o,a]}):[c,o,a]},typeof t?.useProxies=="boolean"&&this.setUseProxies(t.useProxies),typeof t?.autoFreeze=="boolean"&&this.setAutoFreeze(t.autoFreeze)}var e=i.prototype;return e.createDraft=function(t){Xn(t)||nn(8),Vr(t)&&(t=bA(t));var n=gd(this),r=Gs(this,t,void 0);return r[$e].C=!0,Dc(n),r},e.finishDraft=function(t,n){var r=t&&t[$e],s=r.A;return Vl(s,n),Gl(void 0,s)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!bd&&nn(20),this.g=t},e.applyPatches=function(t,n){var r;for(r=n.length-1;r>=0;r--){var s=n[r];if(s.path.length===0&&s.op==="replace"){t=s.value;break}}r>-1&&(n=n.slice(r+1));var o=An("Patches").$;return Vr(t)?o(t,n):this.produce(t,function(a){return o(a,n)})},i}(),Xt=new EA,AA=Xt.produce;Xt.produceWithPatches.bind(Xt);Xt.setAutoFreeze.bind(Xt);Xt.setUseProxies.bind(Xt);Xt.applyPatches.bind(Xt);Xt.createDraft.bind(Xt);Xt.finishDraft.bind(Xt);const CA=i=>(e,t,n)=>(n.setState=(r,s,...o)=>{const a=typeof r=="function"?AA(r):r;return e(a,s,...o)},i(n.setState,t,n)),io=CA;var DA=function(){function i(){this.keyToValue=new Map,this.valueToKey=new Map}return i.prototype.set=function(e,t){this.keyToValue.set(e,t),this.valueToKey.set(t,e)},i.prototype.getByKey=function(e){return this.keyToValue.get(e)},i.prototype.getByValue=function(e){return this.valueToKey.get(e)},i.prototype.clear=function(){this.keyToValue.clear(),this.valueToKey.clear()},i}(),Tg=function(){function i(e){this.generateIdentifier=e,this.kv=new DA}return i.prototype.register=function(e,t){this.kv.getByValue(e)||(t||(t=this.generateIdentifier(e)),this.kv.set(t,e))},i.prototype.clear=function(){this.kv.clear()},i.prototype.getIdentifier=function(e){return this.kv.getByValue(e)},i.prototype.getValue=function(e){return this.kv.getByKey(e)},i}(),PA=globalThis&&globalThis.__extends||function(){var i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])},i(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");i(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),RA=function(i){PA(e,i);function e(){var t=i.call(this,function(n){return n.name})||this;return t.classToAllowedProps=new Map,t}return e.prototype.register=function(t,n){typeof n=="object"?(n.allowProps&&this.classToAllowedProps.set(t,n.allowProps),i.prototype.register.call(this,t,n.identifier)):i.prototype.register.call(this,t,n)},e.prototype.getAllowedProps=function(t){return this.classToAllowedProps.get(t)},e}(Tg),LA=globalThis&&globalThis.__read||function(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s};function IA(i){if("values"in Object)return Object.values(i);var e=[];for(var t in i)i.hasOwnProperty(t)&&e.push(i[t]);return e}function FA(i,e){var t=IA(i);if("find"in t)return t.find(e);for(var n=t,r=0;r<n.length;r++){var s=n[r];if(e(s))return s}}function Wr(i,e){Object.entries(i).forEach(function(t){var n=LA(t,2),r=n[0],s=n[1];return e(s,r)})}function Zo(i,e){return i.indexOf(e)!==-1}function Md(i,e){for(var t=0;t<i.length;t++){var n=i[t];if(e(n))return n}}var OA=function(){function i(){this.transfomers={}}return i.prototype.register=function(e){this.transfomers[e.name]=e},i.prototype.findApplicable=function(e){return FA(this.transfomers,function(t){return t.isApplicable(e)})},i.prototype.findByName=function(e){return this.transfomers[e]},i}(),NA=function(i){return Object.prototype.toString.call(i).slice(8,-1)},Eg=function(i){return typeof i>"u"},BA=function(i){return i===null},js=function(i){return typeof i!="object"||i===null||i===Object.prototype?!1:Object.getPrototypeOf(i)===null?!0:i.constructor===Object&&Object.getPrototypeOf(i)===Object.prototype},Lc=function(i){return js(i)&&Object.keys(i).length===0},mi=function(i){return Array.isArray(i)},kA=function(i){return typeof i=="string"},UA=function(i){return typeof i=="number"&&!isNaN(i)},zA=function(i){return typeof i=="boolean"},HA=function(i){return i instanceof RegExp},_a=function(i){return i instanceof Map},xa=function(i){return i instanceof Set},Ag=function(i){return NA(i)==="Symbol"},VA=function(i){return i instanceof Date&&!isNaN(i.valueOf())},GA=function(i){return i instanceof Error},Sd=function(i){return typeof i=="number"&&isNaN(i)},Td=function(i){return zA(i)||BA(i)||Eg(i)||UA(i)||kA(i)||Ag(i)},WA=function(i){return typeof i=="bigint"},jA=function(i){return i===1/0||i===-1/0},$A=function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},XA=function(i){return i instanceof URL},Cg=function(i){return i.replace(/\./g,"\\.")},$l=function(i){return i.map(String).map(Cg).join(".")},Ps=function(i){for(var e=[],t="",n=0;n<i.length;n++){var r=i.charAt(n),s=r==="\\"&&i.charAt(n+1)===".";if(s){t+=".",n++;continue}var o=r===".";if(o){e.push(t),t="";continue}t+=r}var a=t;return e.push(a),e},Ic=globalThis&&globalThis.__assign||function(){return Ic=Object.assign||function(i){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i},Ic.apply(this,arguments)},Fc=globalThis&&globalThis.__read||function(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s},Oc=globalThis&&globalThis.__spreadArray||function(i,e){for(var t=0,n=e.length,r=i.length;t<n;t++,r++)i[r]=e[t];return i};function bn(i,e,t,n){return{isApplicable:i,annotation:e,transform:t,untransform:n}}var Dg=[bn(Eg,"undefined",function(){return null},function(){}),bn(WA,"bigint",function(i){return i.toString()},function(i){return typeof BigInt<"u"?BigInt(i):(console.error("Please add a BigInt polyfill."),i)}),bn(VA,"Date",function(i){return i.toISOString()},function(i){return new Date(i)}),bn(GA,"Error",function(i,e){var t={name:i.name,message:i.message};return e.allowedErrorProps.forEach(function(n){t[n]=i[n]}),t},function(i,e){var t=new Error(i.message);return t.name=i.name,t.stack=i.stack,e.allowedErrorProps.forEach(function(n){t[n]=i[n]}),t}),bn(HA,"regexp",function(i){return""+i},function(i){var e=i.slice(1,i.lastIndexOf("/")),t=i.slice(i.lastIndexOf("/")+1);return new RegExp(e,t)}),bn(xa,"set",function(i){return Oc([],Fc(i.values()))},function(i){return new Set(i)}),bn(_a,"map",function(i){return Oc([],Fc(i.entries()))},function(i){return new Map(i)}),bn(function(i){return Sd(i)||jA(i)},"number",function(i){return Sd(i)?"NaN":i>0?"Infinity":"-Infinity"},Number),bn(function(i){return i===0&&1/i===-1/0},"number",function(){return"-0"},Number),bn(XA,"URL",function(i){return i.toString()},function(i){return new URL(i)})];function za(i,e,t,n){return{isApplicable:i,annotation:e,transform:t,untransform:n}}var Pg=za(function(i,e){if(Ag(i)){var t=!!e.symbolRegistry.getIdentifier(i);return t}return!1},function(i,e){var t=e.symbolRegistry.getIdentifier(i);return["symbol",t]},function(i){return i.description},function(i,e,t){var n=t.symbolRegistry.getValue(e[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),qA=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce(function(i,e){return i[e.name]=e,i},{}),Rg=za($A,function(i){return["typed-array",i.constructor.name]},function(i){return Oc([],Fc(i))},function(i,e){var t=qA[e[1]];if(!t)throw new Error("Trying to deserialize unknown typed array");return new t(i)});function Lg(i,e){if(i?.constructor){var t=!!e.classRegistry.getIdentifier(i.constructor);return t}return!1}var Ig=za(Lg,function(i,e){var t=e.classRegistry.getIdentifier(i.constructor);return["class",t]},function(i,e){var t=e.classRegistry.getAllowedProps(i.constructor);if(!t)return Ic({},i);var n={};return t.forEach(function(r){n[r]=i[r]}),n},function(i,e,t){var n=t.classRegistry.getValue(e[1]);if(!n)throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");return Object.assign(Object.create(n.prototype),i)}),Fg=za(function(i,e){return!!e.customTransformerRegistry.findApplicable(i)},function(i,e){var t=e.customTransformerRegistry.findApplicable(i);return["custom",t.name]},function(i,e){var t=e.customTransformerRegistry.findApplicable(i);return t.serialize(i)},function(i,e,t){var n=t.customTransformerRegistry.findByName(e[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(i)}),YA=[Ig,Pg,Fg,Rg],Ed=function(i,e){var t=Md(YA,function(r){return r.isApplicable(i,e)});if(t)return{value:t.transform(i,e),type:t.annotation(i,e)};var n=Md(Dg,function(r){return r.isApplicable(i,e)});if(n)return{value:n.transform(i,e),type:n.annotation}},Og={};Dg.forEach(function(i){Og[i.annotation]=i});var KA=function(i,e,t){if(mi(e))switch(e[0]){case"symbol":return Pg.untransform(i,e,t);case"class":return Ig.untransform(i,e,t);case"custom":return Fg.untransform(i,e,t);case"typed-array":return Rg.untransform(i,e,t);default:throw new Error("Unknown transformation: "+e)}else{var n=Og[e];if(!n)throw new Error("Unknown transformation: "+e);return n.untransform(i,t)}},ko=function(i,e){for(var t=i.keys();e>0;)t.next(),e--;return t.next().value};function Ng(i){if(Zo(i,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(Zo(i,"prototype"))throw new Error("prototype is not allowed as a property");if(Zo(i,"constructor"))throw new Error("constructor is not allowed as a property")}var ZA=function(i,e){return Ng(e),e.forEach(function(t){i=i[t]}),i},Nc=function(i,e,t){if(Ng(e),e.length===0)return t(i);for(var n=i,r=0;r<e.length-1;r++){var s=e[r];if(mi(n)){var o=+s;n=n[o]}else if(js(n))n=n[s];else if(xa(n)){var a=+s;n=ko(n,a)}else if(_a(n)){var c=r===e.length-2;if(c)break;var a=+s,u=+e[++r]==0?"key":"value",l=ko(n,a);switch(u){case"key":n=l;break;case"value":n=n.get(l);break}}}var h=e[e.length-1];if((mi(n)||js(n))&&(n[h]=t(n[h])),xa(n)){var f=ko(n,+h),d=t(f);f!==d&&(n.delete(f),n.add(d))}if(_a(n)){var a=+e[e.length-2],g=ko(n,a),u=+h==0?"key":"value";switch(u){case"key":{var m=t(g);n.set(m,n.get(g)),m!==g&&n.delete(g);break}case"value":{n.set(g,t(n.get(g)));break}}}return i},Vn=globalThis&&globalThis.__read||function(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s},fi=globalThis&&globalThis.__spreadArray||function(i,e){for(var t=0,n=e.length,r=i.length;t<n;t++,r++)i[r]=e[t];return i};function Bc(i,e,t){if(t===void 0&&(t=[]),!!i){if(!mi(i)){Wr(i,function(o,a){return Bc(o,e,fi(fi([],Vn(t)),Vn(Ps(a))))});return}var n=Vn(i,2),r=n[0],s=n[1];s&&Wr(s,function(o,a){Bc(o,e,fi(fi([],Vn(t)),Vn(Ps(a))))}),e(r,t)}}function QA(i,e,t){return Bc(e,function(n,r){i=Nc(i,r,function(s){return KA(s,n,t)})}),i}function JA(i,e){function t(o,a){var c=ZA(i,Ps(a));o.map(Ps).forEach(function(u){i=Nc(i,u,function(){return c})})}if(mi(e)){var n=Vn(e,2),r=n[0],s=n[1];r.forEach(function(o){i=Nc(i,Ps(o),function(){return i})}),s&&Wr(s,t)}else Wr(e,t);return i}var e3=function(i,e){return js(i)||mi(i)||_a(i)||xa(i)||Lg(i,e)};function t3(i,e,t){var n=t.get(i);n?n.push(e):t.set(i,[e])}function n3(i){var e={},t=void 0;return i.forEach(function(n){if(!(n.length<=1)){var r=Vn(n.map(function(a){return a.map(String)}).sort(function(a,c){return a.length-c.length})),s=r[0],o=r.slice(1);s.length===0?t=o.map($l):e[$l(s)]=o.map($l)}}),t?Lc(e)?[t]:[t,e]:Lc(e)?void 0:e}var Bg=function(i,e,t,n,r){var s;if(n===void 0&&(n=[]),r===void 0&&(r=[]),Td(i)||t3(i,n,e),!e3(i,t)){var o=Ed(i,t);return o?{transformedValue:o.value,annotations:[o.type]}:{transformedValue:i}}if(Zo(r,i))return{transformedValue:null};var a=Ed(i,t),c=(s=a?.value)!==null&&s!==void 0?s:i;Td(i)||(r=fi(fi([],Vn(r)),[i]));var u=mi(c)?[]:{},l={};return Wr(c,function(h,f){var d=Bg(h,e,t,fi(fi([],Vn(n)),[f]),r);u[f]=d.transformedValue,mi(d.annotations)?l[f]=d.annotations:js(d.annotations)&&Wr(d.annotations,function(g,m){l[Cg(f)+"."+m]=g})}),Lc(l)?{transformedValue:u,annotations:a?[a.type]:void 0}:{transformedValue:u,annotations:a?[a.type,l]:l}};function kg(i){return Object.prototype.toString.call(i).slice(8,-1)}function i3(i){return kg(i)!=="Object"?!1:i.constructor===Object&&Object.getPrototypeOf(i)===Object.prototype}function Ad(i){return kg(i)==="Array"}function r3(i,e,t,n,r){const s={}.propertyIsEnumerable.call(n,e)?"enumerable":"nonenumerable";s==="enumerable"&&(i[e]=t),r&&s==="nonenumerable"&&Object.defineProperty(i,e,{value:t,enumerable:!1,writable:!0,configurable:!0})}function kc(i,e={}){if(Ad(i))return i.map(r=>kc(r,e));if(!i3(i))return i;const t=Object.getOwnPropertyNames(i),n=Object.getOwnPropertySymbols(i);return[...t,...n].reduce((r,s)=>{if(Ad(e.props)&&!e.props.includes(s))return r;const o=i[s],a=kc(o,e);return r3(r,s,a,i,e.nonenumerable),r},{})}var Li=globalThis&&globalThis.__assign||function(){return Li=Object.assign||function(i){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i},Li.apply(this,arguments)},s3=globalThis&&globalThis.__read||function(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s},o3=globalThis&&globalThis.__spreadArray||function(i,e){for(var t=0,n=e.length,r=i.length;t<n;t++,r++)i[r]=e[t];return i},Dn=function(){function i(){this.classRegistry=new RA,this.symbolRegistry=new Tg(function(e){var t;return(t=e.description)!==null&&t!==void 0?t:""}),this.customTransformerRegistry=new OA,this.allowedErrorProps=[]}return i.prototype.serialize=function(e){var t=new Map,n=Bg(e,t,this),r={json:n.transformedValue};n.annotations&&(r.meta=Li(Li({},r.meta),{values:n.annotations}));var s=n3(t);return s&&(r.meta=Li(Li({},r.meta),{referentialEqualities:s})),r},i.prototype.deserialize=function(e){var t=e.json,n=e.meta,r=kc(t);return n?.values&&(r=QA(r,n.values,this)),n?.referentialEqualities&&(r=JA(r,n.referentialEqualities)),r},i.prototype.stringify=function(e){return JSON.stringify(this.serialize(e))},i.prototype.parse=function(e){return this.deserialize(JSON.parse(e))},i.prototype.registerClass=function(e,t){this.classRegistry.register(e,t)},i.prototype.registerSymbol=function(e,t){this.symbolRegistry.register(e,t)},i.prototype.registerCustom=function(e,t){this.customTransformerRegistry.register(Li({name:t},e))},i.prototype.allowErrorProps=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];(e=this.allowedErrorProps).push.apply(e,o3([],s3(t)))},i.defaultInstance=new i,i.serialize=i.defaultInstance.serialize.bind(i.defaultInstance),i.deserialize=i.defaultInstance.deserialize.bind(i.defaultInstance),i.stringify=i.defaultInstance.stringify.bind(i.defaultInstance),i.parse=i.defaultInstance.parse.bind(i.defaultInstance),i.registerClass=i.defaultInstance.registerClass.bind(i.defaultInstance),i.registerSymbol=i.defaultInstance.registerSymbol.bind(i.defaultInstance),i.registerCustom=i.defaultInstance.registerCustom.bind(i.defaultInstance),i.allowErrorProps=i.defaultInstance.allowErrorProps.bind(i.defaultInstance),i}();Dn.serialize;Dn.deserialize;Dn.stringify;Dn.parse;const[$s,di,a3,l3]=[.5,-.5,.3,-.3],ya=30,Cd=["Laser","Autopilot","Hammer","ATK\xD72","placeholder2","placeholder3","placeholder4","placeholder5","placeholder6"],c3={Laser:15,Autopilot:100,Hammer:100*15,"ATK\xD72":100*15**2,placeholder2:100*15**3,placeholder3:100*15**4,placeholder4:100*15**5,placeholder5:100*15**6,placeholder6:100*15**7},Uc=({upgrades:i})=>({Laser:i.Laser+1*(i["ATK\xD72"]+1),Autopilot:void 0,Hammer:i.Hammer===0?void 0:2e3*(i["ATK\xD72"]+1),"ATK\xD72":void 0,placeholder2:void 0,placeholder3:void 0,placeholder4:void 0,placeholder5:void 0,placeholder6:void 0}),Ug=({upgrades:i})=>({Laser:1,Autopilot:void 0,Hammer:i.Hammer===0?void 0:Math.ceil(50/i.Hammer),"ATK\xD72":void 0,placeholder2:void 0,placeholder3:void 0,placeholder4:void 0,placeholder5:void 0,placeholder6:void 0}),Lu=(i,e)=>e.upgrades[i]===0&&e.money<jr(i,e)*2/3,Dd=i=>i.completedTutorials.has("nextStage"),u3=()=>!1,jr=(i,{upgrades:e})=>c3[i]*2**e[i],zg={wasd:'You have become a <b>fighter</b> pilot that shoots <b>laser</b> beams. This world is peaceful, so your first mission is to protect farmers from harmful <b>birds</b>.<br>The controls are simple, <b><i class="ti ti-keyboard"></i> WASD to move</b> and aim your targets.',upgrade:'You can now buy <b><i class="ti ti-chevrons-up"></i> upgrades</b> for your aircraft! To do so, <b>click</b> on the button in the <b>top left</b> corner of the screen.',nextStage:'You can now move on to the <b><i class="ti ti-map-2"></i> next stage</b>! To do so, <b>click</b> the button in the <b>top right</b> corner of the screen.',backToPreviousStage:"If you're finding this stage too <b>difficult</b>, go back to the previous stage and <b>try again</b> after you get more upgrades.",weatherEffect:'We need to kill a <b><i class="ti ti-ufo"></i> UFO</b> in order to stop the <b><i class="ti ti-cloud-rain"></i> rain</b>. The UFO has a device that can manipulate the weather, and the rain is interfering with the <b>autopilot</b> system.'},h3={aliensComing:["Aliens Are Coming To Invade Earth","According to recent reports, aliens are planning to invade Earth. We should be prepared to fight against them and protect our planet. There are many reasons why aliens would want to invade Earth. Our planet is abundant in resources that they may need, and they may view us as a threat to their own species. Whatever their reasons, we cannot allow them to take over our planet. We need to be prepared to fight against the aliens when they come. We should have weapons and defences ready, and we should all be trained in how to use them. We also need to be prepared to evacuate if necessary. It is vital that we protect our planet from the aliens. We need to be prepared to fight them, and we need to be willing to do whatever it takes to win."],hammer:["UFO Researchers Develop Device That Can Float Hammers In Air",'A team of UFO researchers say they have invented a device that can float hammers in mid-air. The team says the device uses "anti - gravity" technology to achieve the feat. The device, which the team has dubbed the "Hammer levitator", consists of a frame made of aluminum tubing, with a ring of magnets mounted on the top. The device is placed over a hammer, and when it is turned on, the magnets create a magnetic field that levitates the hammer. The device is the latest invention from a team of UFO researchers that has been making headlines in recent years for their unorthodox methods. The team says they are now working on a device that they believe could allow humans to fly.'],ending1:["Scientists Have Found The Way To Move To A Higher World","Scientists have finally reached the Singularity, and as a result, they have been able to move to a higher world. In this new world, there are beings that do not exist in this one. The breakthrough is the result of invading the residence of the aliens, which allowed the scientists to access their technology. The scientists were able to use this technology to move to the new world, and they are now working to take over the world. The beings in this new world are not happy about this, and they are fighting back. The scientists are using their technology to fight back, and they believe that they will eventually be able to take over the world. They are using their technology to create armies, and they are prepared to fight against the beings in this new world. The scientists are determined to take over the world, and they are prepared to do whatever it takes."]};Mg();const Hg="acgSaveData";let Vg=!1;const Uo=(i=Math.random())=>i*ya*60*6,ct=no()(Su(io((i,e)=>({gameSessionId:crypto.randomUUID(),stage:"Earth",stageTransitingTo:null,money:0,upgrades:Object.fromEntries(Cd.map(t=>[t,0])),completedTutorials:new Set,availableNews:new Set,openedNews:new Set,availableTutorials:new Set,weatherEffectWillBeEnabledIn:{},weatherEffectWillBeEnabledInLessThan:{},canTranscend:!1,transcending:!1,transcendence:0,cheated:!1,addMoney:t=>{i(n=>{n.money+=t}),e().money>=jr(Cd[0],e())&&e().addTutorial("upgrade"),Lu("Hammer",e())||e().addNews("hammer")},buyUpgrade:t=>{i(n=>{n.money-=jr(t,e()),n.upgrades[t]++}),e().upgrades.Autopilot>0&&e().addNews("aliensComing"),e().completeTutorial("upgrade")},completeTutorial:t=>{i(n=>{n.completedTutorials.add(t),t==="nextStage"&&n.availableTutorials.add("backToPreviousStage")})},addNews:t=>{e().availableNews.has(t)||i(n=>{n.availableNews.add(t)})},addTutorial:t=>{i(n=>{n.availableTutorials.add(t)})},setStageTransitingTo:t=>{e().stage!==t&&i(n=>{n.stageTransitingTo=t})},completeStageTransition:()=>{i(t=>{t.stageTransitingTo!==null&&(t.stage=t.stageTransitingTo,t.stageTransitingTo=null)}),e().stage==="Earth"?e().completeTutorial("backToPreviousStage"):e().stage==="Universe"&&e().completeTutorial("nextStage")},countdown:()=>{!Dd(e())||(i(t=>{t.weatherEffectWillBeEnabledIn[t.stage]??=Uo(),t.weatherEffectWillBeEnabledInLessThan[t.stage]??=Uo(1),t.weatherEffectWillBeEnabledIn[t.stage]--,t.weatherEffectWillBeEnabledInLessThan[t.stage]--}),e().getWeather()?.enabled&&e().addTutorial("weatherEffect"))},getWeather:()=>{if(!Dd(e()))return null;const t=(e().weatherEffectWillBeEnabledIn[e().stage]??Number.MAX_SAFE_INTEGER)<=0;return e().stage==="Earth"?{name:"Rain",enabled:t}:null},stopWeatherEffect:()=>{i(t=>{t.weatherEffectWillBeEnabledIn[t.stage]=Uo(),t.weatherEffectWillBeEnabledInLessThan[t.stage]=Uo(1)})},defeatedFinalBoss:()=>{e().addNews("ending1"),i(t=>{t.canTranscend=!0})},transcend:()=>{i(t=>{t.transcending=!0})},cancelTranscending:()=>{i(t=>{t.transcending=!1})},confirmTranscending:()=>{i(t=>{!t.transcending||(t.stageTransitingTo=null,t.stage="Earth",t.transcending=!1,t.transcendence++,t.canTranscend=!1)})},cheat:()=>{i(t=>{t.cheated=!0})}})),{name:Hg,version:6,serialize:i=>{if(Vg)throw new Error("destroyed");return Dn.stringify(i)},deserialize:i=>Dn.parse(i)}));window.store=new Proxy(ct,{get(i,e,t){return Me().cheat(),Reflect.get(i,e,t)}});const Me=ct.getState,ss=ct.subscribe,f3=()=>{ct.destroy(),Vg=!0,localStorage.removeItem(Hg)};if(location.hostname.endsWith(".github.io")){localStorage.userId??=crypto.randomUUID();const i=e=>{fetch("https://oijeofiwjef.net/acg",{method:"POST",body:JSON.stringify({userId:localStorage.userId,event:e,...ct.getState()})})};setInterval(()=>i(),1e3*60),i("start"),document.addEventListener("visibilitychange",()=>{i(document.visibilityState)})}const ro=i=>Object.entries(i),ba=i=>Object.values(i),wa=i=>Object.keys(i),Gg=i=>Object.fromEntries(i),Xs=async i=>{const e={};for(const[t,n]of Object.entries(i))e[t]=await n;return e},vn=(i,e)=>{for(const[t,n]of Object.entries(e))if(Object.getPrototypeOf(n)===Object.prototype)for(const[r,s]of Object.entries(n))Array.isArray(s)?i[t][r](...s):i[t][r](s);else Array.isArray(n)?i[t](...n):i[t](n);return i};function Ma(i,e){if(Object.is(i,e))return!0;if(typeof i!="object"||i===null||typeof e!="object"||e===null)return!1;const t=Object.keys(i);if(t.length!==Object.keys(e).length)return!1;for(let n=0;n<t.length;n++)if(!Object.prototype.hasOwnProperty.call(e,t[n])||!Object.is(i[t[n]],e[t[n]]))return!1;return!0}var d3=0;function q(i,e,t,n,r){var s,o,a={};for(o in e)o=="ref"?s=e[o]:a[o]=e[o];var c={type:i,props:a,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--d3,__source:r,__self:n};if(typeof i=="function"&&(s=i.defaultProps))for(o in s)a[o]===void 0&&(a[o]=s[o]);return xe.vnode&&xe.vnode(c),c}const zc=25,p3=(i,e)=>{const t=jr(i,Me()),n=Me().upgrades[i],r=Me().money,s=n>=zc?new Xe(255,0,0,1):r>=t?new Xe(0,220,220,1):new Xe(128,128,128,1),o=n>=zc?1:r/t;let a="linear-gradient(90deg,";for(let c=0;c<=1;c+=.05){const u=s.clone(),l=(Math.sin(c*2-Date.now()*.004+e)+1)/2;u.x+=l*70,u.y+=l*70,u.z+=l*70,c>o?u.w=0:u.w=.5,a+=`rgba(${u.toArray().join(",")}) ${c*100}%,`}return`${a.slice(0,-1)})`},m3=()=>{const i=ot(ct,e=>ro(e.upgrades).filter((t,n,r)=>n<2||r[n-1][1]>0||r[n-2][1]>0).map(([t])=>t),Ma);return q("div",{class:"absolute left-1 top-1 w-56",children:[q("div",{class:"px-3 pt-1 pb-3 window",children:[q("h2",{class:"mb-2",children:[q("i",{class:"ti ti-chevrons-up"})," Upgrades"]}),i.map((e,t)=>q(g3,{name:e,rowNumber:t},e))]}),Me().canTranscend&&q("div",{class:"px-3 pt-1 pb-3 window gold mt-1",children:[q("p",{class:"text-xs mb-2",children:"You have reached the point of singularity and can transcended to a higher plane of existence."}),q("button",{class:"w-full",tabIndex:-1,onClick:()=>{Me().transcend()},children:"Show Bonus"})]})]})},g3=i=>{const e=ot(ct,l=>l.buyUpgrade),[t,n]=ns(!1),r=ot(ct,l=>l.getWeather()),s=ot(ct,l=>jr(i.name,l)),o=ot(ct,l=>Lu(i.name,l)),a=ot(ct,l=>l.upgrades[i.name]),c=ot(ct,l=>s>l.money||a>=zc),u=Vs(null);return is(()=>{const l=setInterval(()=>{!u.current||(u.current.style.background=p3(i.name,i.rowNumber))},16.666666666666668);return()=>{clearTimeout(l)}},[u]),q("div",{ref:u,class:"relative block hover:cursor-pointer mb-1 backdrop-blur-3xl drop-shadow-md select-none border-opacity-40 border-[1px] border-t-gray-400 border-l-gray-400 border-b-gray-600 border-r-gray-600",disabled:c,onMouseDown:()=>{c||e(i.name)},onMouseEnter:()=>{n(!0)},onMouseLeave:()=>{n(!1)},children:[q("div",{class:"px-2 hover:bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_10%)]",children:[q("span",{class:"inline-block w-28",children:o?"???":i.name}),q("span",{class:"float-right",children:[a,i.name==="Autopilot"&&r?.enabled&&q("b",{class:"text-red-400",children:" (-5)"})]})]}),t&&q(v3,{name:i.name})]})},v3=i=>{const e=ot(ct,o=>jr(i.name,o)),t=ot(ct,o=>Uc(o)[i.name]),n=ot(ct,o=>Ug(o)[i.name]),r=ot(ct,o=>o.money),s=ot(ct,o=>Lu(i.name,o));return q("div",{class:"absolute left-full top-0 ml-1 px-3 tooltip whitespace-nowrap pointer-events-none",children:[q("div",{class:"font-bold",children:["Price: ",r," / ",e]}),!s&&q(It,{children:[t&&q("div",{children:["Damage: ",t]}),n&&q("div",{children:["Interval: ",n]})]})]})},Si=new bm,zt=new D,ai=new D,st=new ft,Pd={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},Xl={type:"change"},Rd={type:"mouseDown"},Ld={type:"mouseUp",mode:null},Id={type:"objectChange"};class _3 extends ze{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new S3;this._gizmo=n,this.add(n);const r=new T3;this._plane=r,this.add(r);const s=this;function o(_,y){let x=y;Object.defineProperty(s,_,{get:function(){return x!==void 0?x:y},set:function(w){x!==w&&(x=w,r[_]=w,n[_]=w,s.dispatchEvent({type:_+"-changed",value:w}),s.dispatchEvent(Xl))}}),s[_]=y,r[_]=y,n[_]=y}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new D,c=new D,u=new ft,l=new ft,h=new D,f=new ft,d=new D,g=new D,m=new D,p=0,v=new D;o("worldPosition",a),o("worldPositionStart",c),o("worldQuaternion",u),o("worldQuaternionStart",l),o("cameraPosition",h),o("cameraQuaternion",f),o("pointStart",d),o("pointEnd",g),o("rotationAxis",m),o("rotationAngle",p),o("eye",v),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new ft,this._parentQuaternionInv=new ft,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new ft,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new ft,this._scaleStart=new D,this._getPointer=x3.bind(this),this._onPointerDown=b3.bind(this),this._onPointerHover=y3.bind(this),this._onPointerMove=w3.bind(this),this._onPointerUp=M3.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;Si.setFromCamera(e,this.camera);const t=ql(this._gizmo.picker[this.mode],Si);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){Si.setFromCamera(e,this.camera);const t=ql(this._plane,Si,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Rd.mode=this.mode,this.dispatchEvent(Rd)}}pointerMove(e){const t=this.axis,n=this.mode,r=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e.button!==-1)return;Si.setFromCamera(e,this.camera);const o=ql(this._plane,Si,!0);if(!!o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(st.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(zt.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(zt.setFromMatrixPosition(r.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ai.set(a,a,a)}else zt.copy(this.pointStart),ai.copy(this.pointEnd),zt.applyQuaternion(this._worldQuaternionInv),ai.applyQuaternion(this._worldQuaternionInv),ai.divide(zt),t.search("X")===-1&&(ai.x=1),t.search("Y")===-1&&(ai.y=1),t.search("Z")===-1&&(ai.z=1);r.scale.copy(this._scaleStart).multiply(ai),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(zt.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(zt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Pd[t]),zt.copy(Pd[t]),s==="local"&&zt.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(zt.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(st.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(st.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Xl),this.dispatchEvent(Id)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(Ld.mode=this.mode,this.dispatchEvent(Ld)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Xl),this.dispatchEvent(Id),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Si}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function x3(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function y3(i){if(!!this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function b3(i){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function w3(i){!this.enabled||this.pointerMove(this._getPointer(i))}function M3(i){!this.enabled||(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function ql(i,e,t){const n=e.intersectObject(i,!0);for(let r=0;r<n.length;r++)if(n[r].object.visible||t)return n[r];return!1}const zo=new Kr,Ke=new D(0,1,0),Fd=new D(0,0,0),Od=new Fe,Ho=new ft,Qo=new ft,wn=new D,Nd=new Fe,Ms=new D(1,0,0),Ci=new D(0,1,0),Ss=new D(0,0,1),Vo=new D,gs=new D,vs=new D;class S3 extends ze{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new dn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Ia({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const u=e.clone();u.color.setHex(65280),u.opacity=.5;const l=e.clone();l.color.setHex(255),l.opacity=.5;const h=e.clone();h.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const m=new Dt(0,.04,.1,12);m.translate(0,.05,0);const p=new lt(.08,.08,.08);p.translate(0,.04,0);const v=new pt;v.setAttribute("position",new Ye([0,0,0,1,0,0],3));const _=new Dt(.0075,.0075,.5,3);_.translate(0,.25,0);function y(V,K){const te=new Ri(V,.0075,3,64,K*Math.PI*2);return te.rotateY(Math.PI/2),te.rotateX(Math.PI/2),te}function x(){const V=new pt;return V.setAttribute("position",new Ye([0,0,0,1,1,1],3)),V}const w={X:[[new se(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new se(m,s),[-.5,0,0],[0,0,Math.PI/2]],[new se(_,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new se(m,o),[0,.5,0]],[new se(m,o),[0,-.5,0],[Math.PI,0,0]],[new se(_,o)]],Z:[[new se(m,a),[0,0,.5],[Math.PI/2,0,0]],[new se(m,a),[0,0,-.5],[-Math.PI/2,0,0]],[new se(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new se(new Er(.1,0),h.clone()),[0,0,0]]],XY:[[new se(new lt(.15,.15,.01),l.clone()),[.15,.15,0]]],YZ:[[new se(new lt(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new se(new lt(.15,.15,.01),u.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new se(new Dt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new se(new Dt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new se(new Dt(.2,0,.6,4),n),[0,.3,0]],[new se(new Dt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new se(new Dt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new se(new Dt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new se(new Er(.2,0),n)]],XY:[[new se(new lt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new se(new lt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new se(new lt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},L={START:[[new se(new Er(.01,2),r),null,null,null,"helper"]],END:[[new se(new Er(.01,2),r),null,null,null,"helper"]],DELTA:[[new un(x(),r),null,null,null,"helper"]],X:[[new un(v,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new un(v,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new un(v,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},b={XYZE:[[new se(y(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new se(y(.5,.5),s)]],Y:[[new se(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new se(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new se(y(.75,1),f),null,[0,Math.PI/2,0]]]},T={AXIS:[[new un(v,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},I={XYZE:[[new se(new fu(.25,10,8),n)]],X:[[new se(new Ri(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new se(new Ri(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new se(new Ri(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new se(new Ri(.75,.1,2,24),n)]]},W={X:[[new se(p,s),[.5,0,0],[0,0,-Math.PI/2]],[new se(_,s),[0,0,0],[0,0,-Math.PI/2]],[new se(p,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new se(p,o),[0,.5,0]],[new se(_,o)],[new se(p,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new se(p,a),[0,0,.5],[Math.PI/2,0,0]],[new se(_,a),[0,0,0],[Math.PI/2,0,0]],[new se(p,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new se(new lt(.15,.15,.01),l),[.15,.15,0]]],YZ:[[new se(new lt(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new se(new lt(.15,.15,.01),u),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new se(new lt(.1,.1,.1),h.clone())]]},j={X:[[new se(new Dt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new se(new Dt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new se(new Dt(.2,0,.6,4),n),[0,.3,0]],[new se(new Dt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new se(new Dt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new se(new Dt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new se(new lt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new se(new lt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new se(new lt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new se(new lt(.2,.2,.2),n),[0,0,0]]]},U={X:[[new un(v,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new un(v,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new un(v,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function N(V){const K=new ze;for(const te in V)for(let $=V[te].length;$--;){const F=V[te][$][0].clone(),B=V[te][$][1],ne=V[te][$][2],ee=V[te][$][3],re=V[te][$][4];F.name=te,F.tag=re,B&&F.position.set(B[0],B[1],B[2]),ne&&F.rotation.set(ne[0],ne[1],ne[2]),ee&&F.scale.set(ee[0],ee[1],ee[2]),F.updateMatrix();const ue=F.geometry.clone();ue.applyMatrix4(F.matrix),F.geometry=ue,F.renderOrder=1/0,F.position.set(0,0,0),F.rotation.set(0,0,0),F.scale.set(1,1,1),K.add(F)}return K}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=N(w)),this.add(this.gizmo.rotate=N(b)),this.add(this.gizmo.scale=N(W)),this.add(this.picker.translate=N(A)),this.add(this.picker.rotate=N(I)),this.add(this.picker.scale=N(j)),this.add(this.helper.translate=N(L)),this.add(this.helper.rotate=N(T)),this.add(this.helper.scale=N(U)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Qo;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.position.copy(this.worldPositionStart),o.visible=!!this.axis,this.axis==="X"&&(st.setFromEuler(zo.set(0,0,0)),o.quaternion.copy(n).multiply(st),Math.abs(Ke.copy(Ms).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(st.setFromEuler(zo.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(st),Math.abs(Ke.copy(Ci).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(st.setFromEuler(zo.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(st),Math.abs(Ke.copy(Ss).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(st.setFromEuler(zo.set(0,Math.PI/2,0)),Ke.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Od.lookAt(Fd,Ke,Ci)),o.quaternion.multiply(st),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),zt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),zt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(zt),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Ke.copy(Ms).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Ke.copy(Ci).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Ke.copy(Ss).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Ke.copy(Ss).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Ke.copy(Ms).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Ke.copy(Ci).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Ho.copy(n),Ke.copy(this.eye).applyQuaternion(st.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Od.lookAt(this.eye,Fd,Ci)),o.name==="X"&&(st.setFromAxisAngle(Ms,Math.atan2(-Ke.y,Ke.z)),st.multiplyQuaternions(Ho,st),o.quaternion.copy(st)),o.name==="Y"&&(st.setFromAxisAngle(Ci,Math.atan2(Ke.x,Ke.z)),st.multiplyQuaternions(Ho,st),o.quaternion.copy(st)),o.name==="Z"&&(st.setFromAxisAngle(Ss,Math.atan2(Ke.y,Ke.x)),st.multiplyQuaternions(Ho,st),o.quaternion.copy(st))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class T3 extends se{constructor(){super(new Zr(1e5,1e5,2,2),new dn({visible:!1,wireframe:!0,side:Tn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Vo.copy(Ms).applyQuaternion(t==="local"?this.worldQuaternion:Qo),gs.copy(Ci).applyQuaternion(t==="local"?this.worldQuaternion:Qo),vs.copy(Ss).applyQuaternion(t==="local"?this.worldQuaternion:Qo),Ke.copy(gs),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ke.copy(this.eye).cross(Vo),wn.copy(Vo).cross(Ke);break;case"Y":Ke.copy(this.eye).cross(gs),wn.copy(gs).cross(Ke);break;case"Z":Ke.copy(this.eye).cross(vs),wn.copy(vs).cross(Ke);break;case"XY":wn.copy(vs);break;case"YZ":wn.copy(Vo);break;case"XZ":Ke.copy(vs),wn.copy(gs);break;case"XYZ":case"E":wn.set(0,0,0);break}break;case"rotate":default:wn.set(0,0,0)}wn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Nd.lookAt(zt.set(0,0,0),wn,Ke),this.quaternion.setFromRotationMatrix(Nd)),super.updateMatrixWorld(e)}}const Bd={type:"change"},Yl={type:"start"},kd={type:"end"};class E3 extends Qi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:lr.ROTATE,MIDDLE:lr.DOLLY,RIGHT:lr.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",yt),this._domElementKeyEvents=R},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Bd),n.update(),s=r.NONE},this.update=function(){const R=new D,k=new ft().setFromUnitVectors(e.up,new D(0,1,0)),ce=k.clone().invert(),de=new D,fe=new ft,ve=2*Math.PI;return function(){const Oe=n.object.position;R.copy(Oe).sub(n.target),R.applyQuaternion(k),a.setFromVector3(R),n.autoRotate&&s===r.NONE&&T(L()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let De=n.minAzimuthAngle,Ue=n.maxAzimuthAngle;return isFinite(De)&&isFinite(Ue)&&(De<-Math.PI?De+=ve:De>Math.PI&&(De-=ve),Ue<-Math.PI?Ue+=ve:Ue>Math.PI&&(Ue-=ve),De<=Ue?a.theta=Math.max(De,Math.min(Ue,a.theta)):a.theta=a.theta>(De+Ue)/2?Math.max(De,a.theta):Math.min(Ue,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(l,n.dampingFactor):n.target.add(l),R.setFromSpherical(a),R.applyQuaternion(ce),Oe.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,l.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),l.set(0,0,0)),u=1,h||de.distanceToSquared(n.object.position)>o||8*(1-fe.dot(n.object.quaternion))>o?(n.dispatchEvent(Bd),de.copy(n.object.position),fe.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",S),n.domElement.removeEventListener("pointerdown",Qe),n.domElement.removeEventListener("pointercancel",mt),n.domElement.removeEventListener("wheel",xt),n.domElement.removeEventListener("pointermove",it),n.domElement.removeEventListener("pointerup",et),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",yt)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new $f,c=new $f;let u=1;const l=new D;let h=!1;const f=new he,d=new he,g=new he,m=new he,p=new he,v=new he,_=new he,y=new he,x=new he,w=[],A={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function T(R){c.theta-=R}function I(R){c.phi-=R}const W=function(){const R=new D;return function(ce,de){R.setFromMatrixColumn(de,0),R.multiplyScalar(-ce),l.add(R)}}(),j=function(){const R=new D;return function(ce,de){n.screenSpacePanning===!0?R.setFromMatrixColumn(de,1):(R.setFromMatrixColumn(de,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(ce),l.add(R)}}(),U=function(){const R=new D;return function(ce,de){const fe=n.domElement;if(n.object.isPerspectiveCamera){const ve=n.object.position;R.copy(ve).sub(n.target);let ge=R.length();ge*=Math.tan(n.object.fov/2*Math.PI/180),W(2*ce*ge/fe.clientHeight,n.object.matrix),j(2*de*ge/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(ce*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),j(de*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(R){n.object.isPerspectiveCamera?u/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(R){n.object.isPerspectiveCamera?u*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(R){f.set(R.clientX,R.clientY)}function te(R){_.set(R.clientX,R.clientY)}function $(R){m.set(R.clientX,R.clientY)}function F(R){d.set(R.clientX,R.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;T(2*Math.PI*g.x/k.clientHeight),I(2*Math.PI*g.y/k.clientHeight),f.copy(d),n.update()}function B(R){y.set(R.clientX,R.clientY),x.subVectors(y,_),x.y>0?N(b()):x.y<0&&V(b()),_.copy(y),n.update()}function ne(R){p.set(R.clientX,R.clientY),v.subVectors(p,m).multiplyScalar(n.panSpeed),U(v.x,v.y),m.copy(p),n.update()}function ee(R){R.deltaY<0?V(b()):R.deltaY>0&&N(b()),n.update()}function re(R){let k=!1;switch(R.code){case n.keys.UP:U(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:U(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:U(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:U(-n.keyPanSpeed,0),k=!0;break}k&&(R.preventDefault(),n.update())}function ue(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const R=.5*(w[0].pageX+w[1].pageX),k=.5*(w[0].pageY+w[1].pageY);f.set(R,k)}}function G(){if(w.length===1)m.set(w[0].pageX,w[0].pageY);else{const R=.5*(w[0].pageX+w[1].pageX),k=.5*(w[0].pageY+w[1].pageY);m.set(R,k)}}function Z(){const R=w[0].pageX-w[1].pageX,k=w[0].pageY-w[1].pageY,ce=Math.sqrt(R*R+k*k);_.set(0,ce)}function Ce(){n.enableZoom&&Z(),n.enablePan&&G()}function _e(){n.enableZoom&&Z(),n.enableRotate&&ue()}function ye(R){if(w.length==1)d.set(R.pageX,R.pageY);else{const ce=me(R),de=.5*(R.pageX+ce.x),fe=.5*(R.pageY+ce.y);d.set(de,fe)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;T(2*Math.PI*g.x/k.clientHeight),I(2*Math.PI*g.y/k.clientHeight),f.copy(d)}function le(R){if(w.length===1)p.set(R.pageX,R.pageY);else{const k=me(R),ce=.5*(R.pageX+k.x),de=.5*(R.pageY+k.y);p.set(ce,de)}v.subVectors(p,m).multiplyScalar(n.panSpeed),U(v.x,v.y),m.copy(p)}function ke(R){const k=me(R),ce=R.pageX-k.x,de=R.pageY-k.y,fe=Math.sqrt(ce*ce+de*de);y.set(0,fe),x.set(0,Math.pow(y.y/_.y,n.zoomSpeed)),N(x.y),_.copy(y)}function Ee(R){n.enableZoom&&ke(R),n.enablePan&&le(R)}function be(R){n.enableZoom&&ke(R),n.enableRotate&&ye(R)}function Qe(R){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",it),n.domElement.addEventListener("pointerup",et)),P(R),R.pointerType==="touch"?C(R):tt(R))}function it(R){n.enabled!==!1&&(R.pointerType==="touch"?M(R):Be(R))}function et(R){J(R),w.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",it),n.domElement.removeEventListener("pointerup",et)),n.dispatchEvent(kd),s=r.NONE}function mt(R){J(R)}function tt(R){let k;switch(R.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case lr.DOLLY:if(n.enableZoom===!1)return;te(R),s=r.DOLLY;break;case lr.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;$(R),s=r.PAN}else{if(n.enableRotate===!1)return;K(R),s=r.ROTATE}break;case lr.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;K(R),s=r.ROTATE}else{if(n.enablePan===!1)return;$(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Yl)}function Be(R){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;F(R);break;case r.DOLLY:if(n.enableZoom===!1)return;B(R);break;case r.PAN:if(n.enablePan===!1)return;ne(R);break}}function xt(R){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(R.preventDefault(),n.dispatchEvent(Yl),ee(R),n.dispatchEvent(kd))}function yt(R){n.enabled===!1||n.enablePan===!1||re(R)}function C(R){switch(ae(R),w.length){case 1:switch(n.touches.ONE){case cr.ROTATE:if(n.enableRotate===!1)return;ue(),s=r.TOUCH_ROTATE;break;case cr.PAN:if(n.enablePan===!1)return;G(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case cr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(),s=r.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Yl)}function M(R){switch(ae(R),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(R),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;le(R),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(R),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(R),n.update();break;default:s=r.NONE}}function S(R){n.enabled!==!1&&R.preventDefault()}function P(R){w.push(R)}function J(R){delete A[R.pointerId];for(let k=0;k<w.length;k++)if(w[k].pointerId==R.pointerId){w.splice(k,1);return}}function ae(R){let k=A[R.pointerId];k===void 0&&(k=new he,A[R.pointerId]=k),k.set(R.pageX,R.pageY)}function me(R){const k=R.pointerId===w[0].pointerId?w[1]:w[0];return A[k.pointerId]}n.domElement.addEventListener("contextmenu",S),n.domElement.addEventListener("pointerdown",Qe),n.domElement.addEventListener("pointercancel",mt),n.domElement.addEventListener("wheel",xt,{passive:!1}),this.update()}}const Jo=no()(io(i=>({paused:!1,object:null,version:0,setObject:e=>{i(t=>{t.object=e})},stop:()=>{i(e=>{e.paused=!0})},resume:()=>{i(e=>{e.paused=!1})},refreshDebugger:()=>{i(e=>{e.version++})}}))),Wg=no()(Su(io((i,e)=>({renderingOptions:{},getRenderingOption:(t,n=!0)=>(i(r=>{t in r.renderingOptions||(r.renderingOptions[t]=n)}),e().renderingOptions[t]),setRenderingOption:(t,n)=>{i(r=>{r.renderingOptions[t]=n})}})),{name:"acgRenderingOptions",version:1,serialize:i=>Dn.stringify(i),deserialize:i=>Dn.parse(i)})),Cr=Wg.getState().getRenderingOption,A3=()=>{const{object:i,resume:e,stop:t,paused:n,refreshDebugger:r}=ot(Jo),{renderingOptions:s,setRenderingOption:o}=ot(Wg);return q("div",{class:"absolute right-56 bottom-1 [font-size:50%]",children:[q("div",{class:"px-3 pt-1 pb-3 window mb-1",children:[q("h2",{children:"[Debug] Rendering"}),q("div",{children:ro(s).map(([a,c])=>q("label",{class:"block",children:[q("input",{type:"checkbox",class:"mr-1",checked:c,onClick:()=>{o(a,!c)}}),q("span",{children:a})]}))}),q("button",{class:"px-4 hover:bg-opacity-60",onClick:()=>{location.reload()},children:"Apply"}),q("button",{class:"px-4 hover:bg-opacity-60",onClick:()=>{wa(s).forEach(a=>o(a,!0))},children:"Enable All"}),q("button",{class:"px-4 hover:bg-opacity-60",onClick:()=>{wa(s).forEach(a=>o(a,!1))},children:"Disable All"})]}),q("div",{class:"px-3 pt-1 pb-3 window",children:[q("h2",{children:"[Debug] 3D Models"}),q("div",{children:[!n&&q("button",{class:"px-2",onClick:()=>{t()},children:"\u{1F6D1} Stop"}),n&&q("button",{class:"px-2 ml-1",onClick:()=>{e()},children:"\u25B6\uFE0F Resume"})]}),n&&(i===null?q(It,{children:"Double click on objects."}):q(It,{children:[q("h3",{children:i.name}),q("table",{children:[q("tr",{children:[q("td",{children:"pos"}),q("td",{children:q("input",{class:"w-10 mr-1",value:i.position.x,onBlur:a=>{!i||(i.position.x=+a.currentTarget.value,r())}})}),q("td",{children:q("input",{class:"w-10 mr-1",value:i.position.y,onBlur:a=>{!i||(i.position.y=+a.currentTarget.value,r())}})}),q("td",{children:q("input",{class:"w-10 mr-1",value:i.position.z,onBlur:a=>{!i||(i.position.z=+a.currentTarget.value,r())}})})]}),q("tr",{children:[q("td",{children:"rot\xB0"}),q("td",{children:q("input",{class:"w-10 mr-1",value:i.rotation.x/Math.PI*180,onBlur:a=>{!i||(i.rotation.x=+a.currentTarget.value/180*Math.PI,r())}})}),q("td",{children:q("input",{class:"w-10 mr-1",value:i.rotation.y/Math.PI*180,onBlur:a=>{!i||(i.rotation.y=+a.currentTarget.value/180*Math.PI,r())}})}),q("td",{children:q("input",{class:"w-10 mr-1",value:i.rotation.z/Math.PI*180,onBlur:a=>{!i||(i.rotation.z=+a.currentTarget.value/180*Math.PI,r())}})})]})]})]}))]})]})},C3=(i,e,t)=>{const n=new E3(i,e.domElement);n.listenToKeyEvents(window);const r=new _3(i,e.domElement);return t.add(new S2,r),r.addEventListener("dragging-changed",s=>{n.enabled=!s.value}),r.addEventListener("objectChange",()=>{Jo.getState().refreshDebugger()}),e.domElement.addEventListener("dblclick",s=>{r.detach();const o=new bm;o.setFromCamera({x:s.clientX/window.innerWidth*2-1,y:-s.clientY/window.innerHeight*2+1},i);const a=[];t.traverseVisible(u=>{u.name&&a.push(u)});const c=o.intersectObjects(a,!0);c[0]?.object!==void 0&&(r.attach(c[0].object),Jo.getState().setObject(c[0].object))}),()=>Jo.getState().paused};var D3="4.0.0";function P3(i){return i===void 0}function rn(i){return typeof i=="boolean"}function R3(i,e){for(var t in e)e.hasOwnProperty(t)&&P3(i[t])&&(i[t]=e[t]);return i}function L3(i,e,t){var n;return i.length>e&&(t==null?(t="&hellip;",n=3):n=t.length,i=i.substring(0,e-n)+t),i}function Je(i,e){for(var t=i.length-1;t>=0;t--)i[t]===e&&i.splice(t,1)}function Ti(i,e){for(var t=i.length-1;t>=0;t--)e(i[t])===!0&&i.splice(t,1)}function Rs(i){throw new Error("Unhandled case for value: '".concat(i,"'"))}var Rr=/[A-Za-z]/,Pt=/[\d]/,hn=/\s/,Kl=/['"]/,I3=/[\x00-\x1F\x7F]/,F3=/A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC/.source,O3=/\u2700-\u27bf\udde6-\uddff\ud800-\udbff\udc00-\udfff\ufe0e\ufe0f\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0\ud83c\udffb-\udfff\u200d\u3299\u3297\u303d\u3030\u24c2\ud83c\udd70-\udd71\udd7e-\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01-\ude02\ude1a\ude2f\ude32-\ude3a\ude50-\ude51\u203c\u2049\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe\u00a9\u00ae\u2122\u2139\udc04\u2600-\u26FF\u2b05\u2b06\u2b07\u2b1b\u2b1c\u2b50\u2b55\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\udccf\u2935\u2934\u2190-\u21ff/.source,N3=/\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F/.source,B3=F3+O3+N3,k3=/0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/.source,jg=B3+k3,zi=new RegExp("[".concat(jg,"]")),$g=function(){function i(e){e===void 0&&(e={}),this.tagName="",this.attrs={},this.innerHTML="",this.tagName=e.tagName||"",this.attrs=e.attrs||{},this.innerHTML=e.innerHtml||e.innerHTML||""}return i.prototype.setTagName=function(e){return this.tagName=e,this},i.prototype.getTagName=function(){return this.tagName||""},i.prototype.setAttr=function(e,t){var n=this.getAttrs();return n[e]=t,this},i.prototype.getAttr=function(e){return this.getAttrs()[e]},i.prototype.setAttrs=function(e){return Object.assign(this.getAttrs(),e),this},i.prototype.getAttrs=function(){return this.attrs||(this.attrs={})},i.prototype.setClass=function(e){return this.setAttr("class",e)},i.prototype.addClass=function(e){for(var t=this.getClass(),n=t?t.split(hn):[],r=e.split(hn),s;s=r.shift();)n.indexOf(s)===-1&&n.push(s);return this.getAttrs().class=n.join(" "),this},i.prototype.removeClass=function(e){for(var t=this.getClass(),n=t?t.split(hn):[],r=e.split(hn),s;n.length&&(s=r.shift());){var o=n.indexOf(s);o!==-1&&n.splice(o,1)}return this.getAttrs().class=n.join(" "),this},i.prototype.getClass=function(){return this.getAttrs().class||""},i.prototype.hasClass=function(e){return(" "+this.getClass()+" ").indexOf(" "+e+" ")!==-1},i.prototype.setInnerHTML=function(e){return this.innerHTML=e,this},i.prototype.setInnerHtml=function(e){return this.setInnerHTML(e)},i.prototype.getInnerHTML=function(){return this.innerHTML||""},i.prototype.getInnerHtml=function(){return this.getInnerHTML()},i.prototype.toAnchorString=function(){var e=this.getTagName(),t=this.buildAttrsStr();return t=t?" "+t:"",["<",e,t,">",this.getInnerHtml(),"</",e,">"].join("")},i.prototype.buildAttrsStr=function(){if(!this.attrs)return"";var e=this.getAttrs(),t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+'="'+e[n]+'"');return t.join(" ")},i}();function U3(i,e,t){var n,r;t==null?(t="&hellip;",r=3,n=8):(r=t.length,n=t.length);var s=function(_){var y={},x=_,w=x.match(/^([a-z]+):\/\//i);return w&&(y.scheme=w[1],x=x.substr(w[0].length)),w=x.match(/^(.*?)(?=(\?|#|\/|$))/i),w&&(y.host=w[1],x=x.substr(w[0].length)),w=x.match(/^\/(.*?)(?=(\?|#|$))/i),w&&(y.path=w[1],x=x.substr(w[0].length)),w=x.match(/^\?(.*?)(?=(#|$))/i),w&&(y.query=w[1],x=x.substr(w[0].length)),w=x.match(/^#(.*?)$/i),w&&(y.fragment=w[1]),y},o=function(_){var y="";return _.scheme&&_.host&&(y+=_.scheme+"://"),_.host&&(y+=_.host),_.path&&(y+="/"+_.path),_.query&&(y+="?"+_.query),_.fragment&&(y+="#"+_.fragment),y},a=function(_,y){var x=y/2,w=Math.ceil(x),A=-1*Math.floor(x),L="";return A<0&&(L=_.substr(A)),_.substr(0,w)+t+L};if(i.length<=e)return i;var c=e-r,u=s(i);if(u.query){var l=u.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);l&&(u.query=u.query.substr(0,l[1].length),i=o(u))}if(i.length<=e||(u.host&&(u.host=u.host.replace(/^www\./,""),i=o(u)),i.length<=e))return i;var h="";if(u.host&&(h+=u.host),h.length>=c)return u.host.length==e?(u.host.substr(0,e-r)+t).substr(0,c+n):a(h,c).substr(0,c+n);var f="";if(u.path&&(f+="/"+u.path),u.query&&(f+="?"+u.query),f)if((h+f).length>=c){if((h+f).length==e)return(h+f).substr(0,e);var d=c-h.length;return(h+a(f,d)).substr(0,c+n)}else h+=f;if(u.fragment){var g="#"+u.fragment;if((h+g).length>=c){if((h+g).length==e)return(h+g).substr(0,e);var m=c-h.length;return(h+a(g,m)).substr(0,c+n)}else h+=g}if(u.scheme&&u.host){var p=u.scheme+"://";if((h+p).length<c)return(p+h).substr(0,e)}if(h.length<=e)return h;var v="";return c>0&&(v=h.substr(-1*Math.floor(c/2))),(h.substr(0,Math.ceil(c/2))+t+v).substr(0,c+n)}function z3(i,e,t){if(i.length<=e)return i;var n,r;t==null?(t="&hellip;",n=8,r=3):(n=t.length,r=t.length);var s=e-r,o="";return s>0&&(o=i.substr(-1*Math.floor(s/2))),(i.substr(0,Math.ceil(s/2))+t+o).substr(0,s+n)}function H3(i,e,t){return L3(i,e,t)}var V3=function(){function i(e){e===void 0&&(e={}),this.newWindow=!1,this.truncate={},this.className="",this.newWindow=e.newWindow||!1,this.truncate=e.truncate||{},this.className=e.className||""}return i.prototype.build=function(e){return new $g({tagName:"a",attrs:this.createAttrs(e),innerHtml:this.processAnchorText(e.getAnchorText())})},i.prototype.createAttrs=function(e){var t={href:e.getAnchorHref()},n=this.createCssClass(e);return n&&(t.class=n),this.newWindow&&(t.target="_blank",t.rel="noopener noreferrer"),this.truncate&&this.truncate.length&&this.truncate.length<e.getAnchorText().length&&(t.title=e.getAnchorHref()),t},i.prototype.createCssClass=function(e){var t=this.className;if(t){for(var n=[t],r=e.getCssClassSuffixes(),s=0,o=r.length;s<o;s++)n.push(t+"-"+r[s]);return n.join(" ")}else return""},i.prototype.processAnchorText=function(e){return e=this.doTruncate(e),e},i.prototype.doTruncate=function(e){var t=this.truncate;if(!t||!t.length)return e;var n=t.length,r=t.location;return r==="smart"?U3(e,n):r==="middle"?z3(e,n):H3(e,n)},i}(),Hc=function(i,e){return Hc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},Hc(i,e)};function so(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Hc(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Mt=function(){return Mt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Mt.apply(this,arguments)},oo=function(){function i(e){this._=null,this.matchedText="",this.offset=0,this.tagBuilder=e.tagBuilder,this.matchedText=e.matchedText,this.offset=e.offset}return i.prototype.getMatchedText=function(){return this.matchedText},i.prototype.setOffset=function(e){this.offset=e},i.prototype.getOffset=function(){return this.offset},i.prototype.getCssClassSuffixes=function(){return[this.type]},i.prototype.buildTag=function(){return this.tagBuilder.build(this)},i}(),G3="(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|northwesternmutual|travelersinsurance|verm\xF6gensberatung|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbah1a3hjkrd|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|verm\xF6gensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--mgbcpq6gpa1a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbaakc7dvf|xn--mgbc0a9azcg|xn--nqv7fs00ema|americanfamily|bananarepublic|cancerresearch|cookingchannel|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--h2breg3eve|xn--jlq480n2rg|xn--jlq61u9w7b|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|xn--rvc1e0am3e|international|lifeinsurance|travelchannel|wolterskluwer|xn--cckwcxetd|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--h2brj9c8c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|scholarships|versicherung|xn--3e0b707e|xn--45br5cyl|xn--4dbrk0ce|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbgu82a|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|foodnetwork|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--3bst00m|xn--3ds443g|xn--3hcrj9c|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--mgbbh1a|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--otu796d|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nextdirect|properties|protection|prudential|realestate|republican|restaurant|schaeffler|tatamotors|technology|university|vlaanderen|volkswagen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--q7ce6a|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|alfaromeo|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|frontdoor|furniture|goldpoint|hisamitsu|homedepot|homegoods|homesense|institute|insurance|kuokgroup|lancaster|landrover|lifestyle|marketing|marshalls|melbourne|microsoft|panasonic|passagens|pramerica|richardli|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--ngbrx|xn--nqv7f|xn--p1acf|xn--qxa6a|xn--tckwe|xn--vhquv|yodobashi|\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|builders|business|capetown|catering|catholic|cipriani|cityeats|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|etisalat|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|guardian|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|maserati|mckinsey|memorial|merckmsd|mortgage|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|showtime|softbank|software|stcgroup|supplies|training|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|avianca|banamex|bauhaus|bentley|bestbuy|booking|brother|bugatti|capital|caravan|careers|channel|charity|chintai|citadel|clubmed|college|cologne|comcast|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|grocery|guitars|hamburg|hangout|hitachi|holiday|hosting|hoteles|hotmail|hyundai|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lanxess|lasalle|latrobe|leclerc|limited|lincoln|markets|monster|netbank|netflix|network|neustar|okinawa|oldnavy|organic|origins|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|singles|staples|storage|support|surgery|systems|temasek|theater|theatre|tickets|tiffany|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|xfinity|yamaxun|youtube|zuerich|\u043A\u0430\u0442\u043E\u043B\u0438\u043A|\u0627\u062A\u0635\u0627\u0644\u0627\u062A|\u0627\u0644\u0628\u062D\u0631\u064A\u0646|\u0627\u0644\u062C\u0632\u0627\u0626\u0631|\u0627\u0644\u0639\u0644\u064A\u0627\u0646|\u067E\u0627\u06A9\u0633\u062A\u0627\u0646|\u0643\u0627\u062B\u0648\u0644\u064A\u0643|\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE|abarth|abbott|abbvie|africa|agency|airbus|airtel|alipay|alsace|alstom|amazon|anquan|aramco|author|bayern|beauty|berlin|bharti|bostik|boston|broker|camera|career|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hotels|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kinder|kindle|kosher|lancia|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|monash|mormon|moscow|museum|mutual|nagoya|natura|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|pictet|quebec|racing|realty|reisen|repair|report|review|rocher|rogers|ryukyu|safety|sakura|sanofi|school|schule|search|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|vuelos|walter|webcam|xihuan|yachts|yandex|zappos|\u043C\u043E\u0441\u043A\u0432\u0430|\u043E\u043D\u043B\u0430\u0439\u043D|\u0627\u0628\u0648\u0638\u0628\u064A|\u0627\u0631\u0627\u0645\u0643\u0648|\u0627\u0644\u0627\u0631\u062F\u0646|\u0627\u0644\u0645\u063A\u0631\u0628|\u0627\u0645\u0627\u0631\u0627\u062A|\u0641\u0644\u0633\u0637\u064A\u0646|\u0645\u0644\u064A\u0633\u064A\u0627|\u092D\u093E\u0930\u0924\u092E\u094D|\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8|\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|bosch|build|canon|cards|chase|cheap|cisco|citic|click|cloud|coach|codes|crown|cymru|dabur|dance|deals|delta|drive|dubai|earth|edeka|email|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|irish|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|linde|lipsy|loans|locus|lotte|lotto|macys|mango|media|miami|money|movie|music|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|rugby|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|sport|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|\u05D9\u05E9\u05E8\u05D0\u05DC|\u0627\u06CC\u0631\u0627\u0646|\u0628\u0627\u0632\u0627\u0631|\u0628\u06BE\u0627\u0631\u062A|\u0633\u0648\u062F\u0627\u0646|\u0633\u0648\u0631\u064A\u0629|\u0647\u0645\u0631\u0627\u0647|\u092D\u093E\u0930\u094B\u0924|\u0938\u0902\u0917\u0920\u0928|\u09AC\u09BE\u0982\u09B2\u09BE|\u0C2D\u0C3E\u0C30\u0C24\u0C4D|\u0D2D\u0D3E\u0D30\u0D24\u0D02|\u5609\u91CC\u5927\u9152\u5E97|aarp|able|adac|aero|akdn|ally|amex|arab|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|dvag|erni|fage|fail|fans|farm|fast|fiat|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|hgtv|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kids|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|loft|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|read|reit|rent|rest|rich|room|rsvp|ruhr|safe|sale|sarl|save|saxo|scot|seat|seek|sexy|shaw|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|\u0434\u0435\u0442\u0438|\u0441\u0430\u0439\u0442|\u0628\u0627\u0631\u062A|\u0628\u064A\u062A\u0643|\u0680\u0627\u0631\u062A|\u062A\u0648\u0646\u0633|\u0634\u0628\u0643\u0629|\u0639\u0631\u0627\u0642|\u0639\u0645\u0627\u0646|\u0645\u0648\u0642\u0639|\u092D\u093E\u0930\u0924|\u09AD\u09BE\u09B0\u09A4|\u09AD\u09BE\u09F0\u09A4|\u0A2D\u0A3E\u0A30\u0A24|\u0AAD\u0ABE\u0AB0\u0AA4|\u0B2D\u0B3E\u0B30\u0B24|\u0CAD\u0CBE\u0CB0\u0CA4|\u0DBD\u0D82\u0D9A\u0DCF|\u30A2\u30DE\u30BE\u30F3|\u30B0\u30FC\u30B0\u30EB|\u30AF\u30E9\u30A6\u30C9|\u30DD\u30A4\u30F3\u30C8|\u7EC4\u7EC7\u673A\u6784|\u96FB\u8A0A\u76C8\u79D1|\u9999\u683C\u91CC\u62C9|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|cbs|ceo|cfa|cfd|com|cpa|crs|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gay|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|ibm|ice|icu|ifm|inc|ing|ink|int|ist|itv|jcb|jio|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|llc|llp|lol|lpl|ltd|man|map|mba|med|men|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|one|ong|onl|ooo|org|ott|ovh|pay|pet|phd|pid|pin|pnc|pro|pru|pub|pwc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|sca|scb|ses|sew|sex|sfr|ski|sky|soy|spa|srl|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|\u0431\u0435\u043B|\u043A\u043E\u043C|\u049B\u0430\u0437|\u043C\u043A\u0434|\u043C\u043E\u043D|\u043E\u0440\u0433|\u0440\u0443\u0441|\u0441\u0440\u0431|\u0443\u043A\u0440|\u0570\u0561\u0575|\u05E7\u05D5\u05DD|\u0639\u0631\u0628|\u0642\u0637\u0631|\u0643\u0648\u0645|\u0645\u0635\u0631|\u0915\u0949\u092E|\u0928\u0947\u091F|\u0E04\u0E2D\u0E21|\u0E44\u0E17\u0E22|\u0EA5\u0EB2\u0EA7|\u30B9\u30C8\u30A2|\u30BB\u30FC\u30EB|\u307F\u3093\u306A|\u4E2D\u6587\u7F51|\u4E9A\u9A6C\u900A|\u5929\u4E3B\u6559|\u6211\u7231\u4F60|\u65B0\u52A0\u5761|\u6DE1\u9A6C\u9521|\u8BFA\u57FA\u4E9A|\u98DE\u5229\u6D66|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|\u03B5\u03BB|\u03B5\u03C5|\u0431\u0433|\u0435\u044E|\u0440\u0444|\u10D2\u10D4|\uB2F7\uB137|\uB2F7\uCEF4|\uC0BC\uC131|\uD55C\uAD6D|\u30B3\u30E0|\u4E16\u754C|\u4E2D\u4FE1|\u4E2D\u56FD|\u4E2D\u570B|\u4F01\u4E1A|\u4F5B\u5C71|\u4FE1\u606F|\u5065\u5EB7|\u516B\u5366|\u516C\u53F8|\u516C\u76CA|\u53F0\u6E7E|\u53F0\u7063|\u5546\u57CE|\u5546\u5E97|\u5546\u6807|\u5609\u91CC|\u5728\u7EBF|\u5927\u62FF|\u5A31\u4E50|\u5BB6\u96FB|\u5E7F\u4E1C|\u5FAE\u535A|\u6148\u5584|\u624B\u673A|\u62DB\u8058|\u653F\u52A1|\u653F\u5E9C|\u65B0\u95FB|\u65F6\u5C1A|\u66F8\u7C4D|\u673A\u6784|\u6E38\u620F|\u6FB3\u9580|\u70B9\u770B|\u79FB\u52A8|\u7F51\u5740|\u7F51\u5E97|\u7F51\u7AD9|\u7F51\u7EDC|\u8054\u901A|\u8C37\u6B4C|\u8D2D\u7269|\u901A\u8CA9|\u96C6\u56E2|\u98DF\u54C1|\u9910\u5385|\u9999\u6E2F)",W3=new RegExp("^"+G3+"$"),j3=/[\/?#]/,$3=/[-+&@#/%=~_()|'$*\[\]{}\u2713]/,Xg=/[?!:,.;^]/,qg=/https?:\/\//i,X3=new RegExp("^"+qg.source,"i"),q3=new RegExp(Xg.source+"$"),Y3=/^(javascript|vbscript):/i,K3=/^[A-Za-z][-.+A-Za-z0-9]*:(\/\/)?([^:/]*)/,Z3=/^(?:\/\/)?([^/#?:]+)/;function Zl(i){return Rr.test(i)}function Ud(i){return Rr.test(i)||Pt.test(i)||i==="+"||i==="-"||i==="."}function ci(i){return zi.test(i)}function Ql(i){return i==="_"||ci(i)}function zd(i){return zi.test(i)||$3.test(i)||Xg.test(i)}function Jl(i){return j3.test(i)}function Yg(i){return W3.test(i.toLowerCase())}function Q3(i){if(Y3.test(i))return!1;var e=i.match(K3);if(!e)return!1;var t=!!e[1],n=e[2];return t?!0:!(n.indexOf(".")===-1||!Rr.test(n))}function J3(i){var e=i.match(Z3);if(!e)return!1;var t=e[0],n=t.split(".");if(n.length<2)return!1;var r=n[n.length-1];return!!Yg(r)}var eC=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,tC=/[:/?#]/;function nC(i){var e=i.split(tC,1)[0];return eC.test(e)}var iC=/^(https?:\/\/)?(www\.)?/i,rC=/^\/\//,sC=function(i){so(e,i);function e(t){var n=i.call(this,t)||this;return n.type="url",n.url="",n.urlMatchType="scheme",n.protocolRelativeMatch=!1,n.stripPrefix={scheme:!0,www:!0},n.stripTrailingSlash=!0,n.decodePercentEncoding=!0,n.protocolPrepended=!1,n.urlMatchType=t.urlMatchType,n.url=t.url,n.protocolRelativeMatch=t.protocolRelativeMatch,n.stripPrefix=t.stripPrefix,n.stripTrailingSlash=t.stripTrailingSlash,n.decodePercentEncoding=t.decodePercentEncoding,n}return e.prototype.getType=function(){return"url"},e.prototype.getUrlMatchType=function(){return this.urlMatchType},e.prototype.getUrl=function(){var t=this.url;return!this.protocolRelativeMatch&&this.urlMatchType!=="scheme"&&!this.protocolPrepended&&(t=this.url="http://"+t,this.protocolPrepended=!0),t},e.prototype.getAnchorHref=function(){var t=this.getUrl();return t.replace(/&amp;/g,"&")},e.prototype.getAnchorText=function(){var t=this.getMatchedText();return this.protocolRelativeMatch&&(t=lC(t)),this.stripPrefix.scheme&&(t=oC(t)),this.stripPrefix.www&&(t=aC(t)),this.stripTrailingSlash&&(t=cC(t)),this.decodePercentEncoding&&(t=uC(t)),t},e}(oo);function oC(i){return i.replace(X3,"")}function aC(i){return i.replace(iC,"$1")}function lC(i){return i.replace(rC,"")}function cC(i){return i.charAt(i.length-1)==="/"&&(i=i.slice(0,-1)),i}function uC(i){var e=i.replace(/%22/gi,"&quot;").replace(/%26/gi,"&amp;").replace(/%27/gi,"&#39;").replace(/%3C/gi,"&lt;").replace(/%3E/gi,"&gt;");try{return decodeURIComponent(e)}catch{return e}}var hC=/^mailto:/i,fC=new RegExp("[".concat(jg,"!#$%&'*+/=?^_`{|}~-]"));function dC(i){return zi.test(i)}function ec(i){return fC.test(i)}function pC(i){var e=i.split(".").pop()||"";return Yg(e)}var mC=function(i){so(e,i);function e(t){var n=i.call(this,t)||this;return n.type="email",n.email="",n.email=t.email,n}return e.prototype.getType=function(){return"email"},e.prototype.getEmail=function(){return this.email},e.prototype.getAnchorHref=function(){return"mailto:"+this.email},e.prototype.getAnchorText=function(){return this.email},e}(oo);function Hd(i){return i==="_"||zi.test(i)}function gC(i){return i.length<=140}var vC=["twitter","facebook","instagram","tiktok"],_C=function(i){so(e,i);function e(t){var n=i.call(this,t)||this;return n.type="hashtag",n.serviceName="twitter",n.hashtag="",n.serviceName=t.serviceName,n.hashtag=t.hashtag,n}return e.prototype.getType=function(){return"hashtag"},e.prototype.getServiceName=function(){return this.serviceName},e.prototype.getHashtag=function(){return this.hashtag},e.prototype.getAnchorHref=function(){var t=this.serviceName,n=this.hashtag;switch(t){case"twitter":return"https://twitter.com/hashtag/"+n;case"facebook":return"https://www.facebook.com/hashtag/"+n;case"instagram":return"https://instagram.com/explore/tags/"+n;case"tiktok":return"https://www.tiktok.com/tag/"+n;default:throw Rs(t),new Error("Invalid hashtag service: ".concat(t))}},e.prototype.getAnchorText=function(){return"#"+this.hashtag},e.prototype.getCssClassSuffixes=function(){var t=i.prototype.getCssClassSuffixes.call(this),n=this.getServiceName();return n&&t.push(n),t},e}(oo),xC={twitter:/^@\w{1,15}$/,instagram:/^@[_\w]{1,30}$/,soundcloud:/^@[-a-z0-9_]{3,25}$/,tiktok:/^@[.\w]{1,23}[\w]$/},yC=/[-\w.]/;function Vd(i){return yC.test(i)}function bC(i,e){var t=xC[e];return t.test(i)}var wC=["twitter","instagram","soundcloud","tiktok"],MC=function(i){so(e,i);function e(t){var n=i.call(this,t)||this;return n.type="mention",n.serviceName="twitter",n.mention="",n.mention=t.mention,n.serviceName=t.serviceName,n}return e.prototype.getType=function(){return"mention"},e.prototype.getMention=function(){return this.mention},e.prototype.getServiceName=function(){return this.serviceName},e.prototype.getAnchorHref=function(){switch(this.serviceName){case"twitter":return"https://twitter.com/"+this.mention;case"instagram":return"https://instagram.com/"+this.mention;case"soundcloud":return"https://soundcloud.com/"+this.mention;case"tiktok":return"https://www.tiktok.com/@"+this.mention;default:throw new Error("Unknown service name to point mention to: "+this.serviceName)}},e.prototype.getAnchorText=function(){return"@"+this.mention},e.prototype.getCssClassSuffixes=function(){var t=i.prototype.getCssClassSuffixes.call(this),n=this.getServiceName();return n&&t.push(n),t},e}(oo),SC=/[-. ]/,TC=/[-. ()]/,EC=/[,;]/,AC=/(?:(?:(?:(\+)?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-. ]?(?:\d[-. ]?){6,12}\d+))([,;]+[0-9]+#?)*/,CC=/(0([1-9]-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})/,DC=new RegExp("^".concat(AC.source,"|").concat(CC.source,"$"));function Gd(i){return SC.test(i)}function tc(i){return EC.test(i)}function PC(i){var e=i.charAt(0)==="+"||TC.test(i);return e&&DC.test(i)}var RC=function(i){so(e,i);function e(t){var n=i.call(this,t)||this;return n.type="phone",n.number="",n.plusSign=!1,n.number=t.number,n.plusSign=t.plusSign,n}return e.prototype.getType=function(){return"phone"},e.prototype.getPhoneNumber=function(){return this.number},e.prototype.getNumber=function(){return this.getPhoneNumber()},e.prototype.getAnchorHref=function(){return"tel:"+(this.plusSign?"+":"")+this.number},e.prototype.getAnchorText=function(){return this.matchedText},e}(oo);function LC(i,e){for(var t=e.tagBuilder,n=e.stripPrefix,r=e.stripTrailingSlash,s=e.decodePercentEncoding,o=e.hashtagServiceName,a=e.mentionServiceName,c=[],u=i.length,l=[],h=0;h<u;h++){var f=i.charAt(h);if(l.length===0)p(f);else for(var d=l.length-1;d>=0;d--){var g=l[d];switch(g.state){case 11:A(g,f);break;case 12:L(g,f);break;case 0:v(g,f);break;case 1:_(g,f);break;case 2:y(g,f);break;case 3:x(g,f);break;case 4:w(g,f);break;case 5:b(g,f);break;case 6:T(g,f);break;case 7:I(g,f);break;case 13:W(g,f);break;case 14:j(g,f);break;case 8:U(g,f);break;case 9:N(g,f);break;case 10:V(g,f);break;case 15:K(g,f);break;case 16:te(g,f);break;case 17:$(g,f);break;case 18:F(g,f);break;case 19:B(g,f);break;case 20:ne(g,f);break;case 21:ee(g,f);break;case 22:re(g,f);break;case 23:ue(g,f);break;case 24:G(g,f);break;case 25:Z(g,f);break;case 26:Ce(g,f);break;case 27:_e(g,f);break;case 28:ye(g,f);break;case 29:le(g,f);break;case 30:ke(g,f);break;case 31:Ee(g,f);break;case 32:Qe(g,f);break;case 33:it(g,f);break;case 34:et(g,f);break;case 35:mt(g,f);break;case 36:tt(g,f);break;case 37:be(g,f);break;case 38:Be(g,f);break;case 39:xt(g,f);break;case 40:yt(g,f);break;case 41:C(g,f);break;default:Rs(g.state)}}}for(var m=l.length-1;m>=0;m--)l.forEach(function(S){return M(S)});return c;function p(S){if(S==="#")l.push(BC(h,28));else if(S==="@")l.push(kC(h,30));else if(S==="/")l.push(ic(h,11));else if(S==="+")l.push(rc(h,37));else if(S==="(")l.push(rc(h,32));else{if(Pt.test(S)&&(l.push(rc(h,38)),l.push(OC(h,13))),dC(S)){var P=S.toLowerCase()==="m"?15:22;l.push(NC(h,P))}Zl(S)&&l.push(nc(h,0)),zi.test(S)&&l.push(ic(h,5))}}function v(S,P){P===":"?S.state=2:P==="-"?S.state=1:Ud(P)||Je(l,S)}function _(S,P){P==="-"||(P==="/"?(Je(l,S),l.push(ic(h,11))):Ud(P)?S.state=0:Je(l,S))}function y(S,P){P==="/"?S.state=3:P==="."?Je(l,S):ci(P)?(S.state=5,Zl(P)&&l.push(nc(h,0))):Je(l,S)}function x(S,P){P==="/"?S.state=4:zd(P)?(S.state=10,S.acceptStateReached=!0):M(S)}function w(S,P){P==="/"?S.state=10:ci(P)?(S.state=5,S.acceptStateReached=!0):Je(l,S)}function A(S,P){P==="/"?S.state=12:Je(l,S)}function L(S,P){ci(P)?S.state=5:Je(l,S)}function b(S,P){P==="."?S.state=7:P==="-"?S.state=6:P===":"?S.state=8:Jl(P)?S.state=10:Ql(P)||M(S)}function T(S,P){P==="-"||(P==="."?M(S):ci(P)?S.state=5:M(S))}function I(S,P){P==="."?M(S):ci(P)?(S.state=5,S.acceptStateReached=!0):M(S)}function W(S,P){P==="."?S.state=14:P===":"?S.state=8:Pt.test(P)||(Jl(P)?S.state=10:zi.test(P)?Je(l,S):M(S))}function j(S,P){Pt.test(P)?(S.octetsEncountered++,S.octetsEncountered===4&&(S.acceptStateReached=!0),S.state=13):M(S)}function U(S,P){Pt.test(P)?S.state=9:M(S)}function N(S,P){Pt.test(P)||(Jl(P)?S.state=10:M(S))}function V(S,P){zd(P)||M(S)}function K(S,P){P.toLowerCase()==="a"?S.state=16:re(S,P)}function te(S,P){P.toLowerCase()==="i"?S.state=17:re(S,P)}function $(S,P){P.toLowerCase()==="l"?S.state=18:re(S,P)}function F(S,P){P.toLowerCase()==="t"?S.state=19:re(S,P)}function B(S,P){P.toLowerCase()==="o"?S.state=20:re(S,P)}function ne(S,P){P.toLowerCase()===":"?S.state=21:re(S,P)}function ee(S,P){ec(P)?S.state=22:Je(l,S)}function re(S,P){P==="."?S.state=23:P==="@"?S.state=24:ec(P)?S.state=22:Je(l,S)}function ue(S,P){P==="."||P==="@"?Je(l,S):ec(P)?S.state=22:Je(l,S)}function G(S,P){ci(P)?S.state=25:Je(l,S)}function Z(S,P){P==="."?S.state=27:P==="-"?S.state=26:Ql(P)||M(S)}function Ce(S,P){P==="-"||P==="."?M(S):Ql(P)?S.state=25:M(S)}function _e(S,P){P==="."||P==="-"?M(S):ci(P)?(S.state=25,S.acceptStateReached=!0):M(S)}function ye(S,P){Hd(P)?(S.state=29,S.acceptStateReached=!0):Je(l,S)}function le(S,P){Hd(P)||M(S)}function ke(S,P){Vd(P)?(S.state=31,S.acceptStateReached=!0):Je(l,S)}function Ee(S,P){Vd(P)||(zi.test(P)?Je(l,S):M(S))}function be(S,P){Pt.test(P)?S.state=38:(Je(l,S),p(P))}function Qe(S,P){Pt.test(P)?S.state=33:Je(l,S),p(P)}function it(S,P){Pt.test(P)?S.state=34:Je(l,S)}function et(S,P){Pt.test(P)?S.state=35:Je(l,S)}function mt(S,P){P===")"?S.state=36:Je(l,S)}function tt(S,P){Pt.test(P)?S.state=38:Gd(P)?S.state=39:Je(l,S)}function Be(S,P){S.acceptStateReached=!0,tc(P)?S.state=40:P==="#"?S.state=41:Pt.test(P)||(P==="("?S.state=32:Gd(P)?S.state=39:(M(S),Zl(P)&&l.push(nc(h,0))))}function xt(S,P){Pt.test(P)?S.state=38:P==="("?S.state=32:(M(S),p(P))}function yt(S,P){tc(P)||(P==="#"?S.state=41:Pt.test(P)?S.state=38:M(S))}function C(S,P){tc(P)?S.state=40:Pt.test(P)?Je(l,S):M(S)}function M(S){if(Je(l,S),!!S.acceptStateReached){var P=S.startIdx,J=i.slice(S.startIdx,h);if(J=FC(J),S.type==="url"){var ae=i.charAt(S.startIdx-1);if(ae==="@")return;var me=S.matchType;if(me==="scheme"){var R=qg.exec(J);if(R&&(P=P+R.index,J=J.slice(R.index)),!Q3(J))return}else if(me==="tld"){if(!J3(J))return}else if(me==="ipV4"){if(!nC(J))return}else Rs(me);c.push(new sC({tagBuilder:t,matchedText:J,offset:P,urlMatchType:me,url:J,protocolRelativeMatch:J.slice(0,2)==="//",stripPrefix:n,stripTrailingSlash:r,decodePercentEncoding:s}))}else if(S.type==="email")pC(J)&&c.push(new mC({tagBuilder:t,matchedText:J,offset:P,email:J.replace(hC,"")}));else if(S.type==="hashtag")gC(J)&&c.push(new _C({tagBuilder:t,matchedText:J,offset:P,serviceName:o,hashtag:J.slice(1)}));else if(S.type==="mention")bC(J,a)&&c.push(new MC({tagBuilder:t,matchedText:J,offset:P,serviceName:a,mention:J.slice(1)}));else if(S.type==="phone"){if(J=J.replace(/ +$/g,""),PC(J)){var k=J.replace(/[^0-9,;#]/g,"");c.push(new RC({tagBuilder:t,matchedText:J,offset:P,number:k,plusSign:J.charAt(0)==="+"}))}}else Rs(S)}}}var IC=/[\(\{\[]/,Wd=/[\)\}\]]/,jd={")":"(","}":"{","]":"["};function FC(i){for(var e={"(":0,"{":0,"[":0},t=0;t<i.length;t++){var n=i.charAt(t);IC.test(n)?e[n]++:Wd.test(n)&&e[jd[n]]--}for(var r=i.length-1,s;r>=0;)if(s=i.charAt(r),Wd.test(s)){var o=jd[s];if(e[o]<0)e[o]++,r--;else break}else if(q3.test(s))r--;else break;return i.slice(0,r+1)}function nc(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"scheme"}}function ic(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"tld"}}function OC(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"ipV4",octetsEncountered:1}}function NC(i,e){return{type:"email",startIdx:i,state:e,acceptStateReached:!1}}function BC(i,e){return{type:"hashtag",startIdx:i,state:e,acceptStateReached:!1}}function kC(i,e){return{type:"mention",startIdx:i,state:e,acceptStateReached:!1}}function rc(i,e){return{type:"phone",startIdx:i,state:e,acceptStateReached:!1}}function UC(i,e){for(var t=e.onOpenTag,n=e.onCloseTag,r=e.onText,s=e.onComment,o=e.onDoctype,a=new Mn,c=0,u=i.length,l=0,h=0,f=a;c<u;){var d=i.charAt(c);switch(l){case 0:g(d);break;case 1:m(d);break;case 2:v(d);break;case 3:p(d);break;case 4:_(d);break;case 5:y(d);break;case 6:x(d);break;case 7:w(d);break;case 8:A(d);break;case 9:L(d);break;case 10:b(d);break;case 11:T(d);break;case 12:I(d);break;case 13:W();break;case 14:j(d);break;case 15:U(d);break;case 16:N(d);break;case 17:V(d);break;case 18:K(d);break;case 19:te(d);break;case 20:$(d);break;default:Rs(l)}c++}h<c&&ee();function g(G){G==="<"&&B()}function m(G){G==="!"?l=13:G==="/"?(l=2,f=new Mn(Mt(Mt({},f),{isClosing:!0}))):G==="<"?B():Rr.test(G)?(l=3,f=new Mn(Mt(Mt({},f),{isOpening:!0}))):(l=0,f=a)}function p(G){hn.test(G)?(f=new Mn(Mt(Mt({},f),{name:re()})),l=4):G==="<"?B():G==="/"?(f=new Mn(Mt(Mt({},f),{name:re()})),l=12):G===">"?(f=new Mn(Mt(Mt({},f),{name:re()})),ne()):!Rr.test(G)&&!Pt.test(G)&&G!==":"&&F()}function v(G){G===">"?F():Rr.test(G)?l=3:F()}function _(G){hn.test(G)||(G==="/"?l=12:G===">"?ne():G==="<"?B():G==="="||Kl.test(G)||I3.test(G)?F():l=5)}function y(G){hn.test(G)?l=6:G==="/"?l=12:G==="="?l=7:G===">"?ne():G==="<"?B():Kl.test(G)&&F()}function x(G){hn.test(G)||(G==="/"?l=12:G==="="?l=7:G===">"?ne():G==="<"?B():Kl.test(G)?F():l=5)}function w(G){hn.test(G)||(G==='"'?l=8:G==="'"?l=9:/[>=`]/.test(G)?F():G==="<"?B():l=10)}function A(G){G==='"'&&(l=11)}function L(G){G==="'"&&(l=11)}function b(G){hn.test(G)?l=4:G===">"?ne():G==="<"&&B()}function T(G){hn.test(G)?l=4:G==="/"?l=12:G===">"?ne():G==="<"?B():(l=4,ue())}function I(G){G===">"?(f=new Mn(Mt(Mt({},f),{isClosing:!0})),ne()):l=4}function W(G){i.substr(c,2)==="--"?(c+=2,f=new Mn(Mt(Mt({},f),{type:"comment"})),l=14):i.substr(c,7).toUpperCase()==="DOCTYPE"?(c+=7,f=new Mn(Mt(Mt({},f),{type:"doctype"})),l=20):F()}function j(G){G==="-"?l=15:G===">"?F():l=16}function U(G){G==="-"?l=18:G===">"?F():l=16}function N(G){G==="-"&&(l=17)}function V(G){G==="-"?l=18:l=16}function K(G){G===">"?ne():G==="!"?l=19:G==="-"||(l=16)}function te(G){G==="-"?l=17:G===">"?ne():l=16}function $(G){G===">"?ne():G==="<"&&B()}function F(){l=0,f=a}function B(){l=1,f=new Mn({idx:c})}function ne(){var G=i.slice(h,f.idx);G&&r(G,h),f.type==="comment"?s(f.idx):f.type==="doctype"?o(f.idx):(f.isOpening&&t(f.name,f.idx),f.isClosing&&n(f.name,f.idx)),F(),h=c+1}function ee(){var G=i.slice(h,c);r(G,h),h=c+1}function re(){var G=f.idx+(f.isClosing?2:1);return i.slice(G,c).toLowerCase()}function ue(){c--}}var Mn=function(){function i(e){e===void 0&&(e={}),this.idx=e.idx!==void 0?e.idx:-1,this.type=e.type||"tag",this.name=e.name||"",this.isOpening=!!e.isOpening,this.isClosing=!!e.isClosing}return i}(),zC=function(){function i(e){e===void 0&&(e={}),this.version=i.version,this.urls={},this.email=!0,this.phone=!0,this.hashtag=!1,this.mention=!1,this.newWindow=!0,this.stripPrefix={scheme:!0,www:!0},this.stripTrailingSlash=!0,this.decodePercentEncoding=!0,this.truncate={length:0,location:"end"},this.className="",this.replaceFn=null,this.context=void 0,this.sanitizeHtml=!1,this.tagBuilder=null,this.urls=HC(e.urls),this.email=rn(e.email)?e.email:this.email,this.phone=rn(e.phone)?e.phone:this.phone,this.hashtag=e.hashtag||this.hashtag,this.mention=e.mention||this.mention,this.newWindow=rn(e.newWindow)?e.newWindow:this.newWindow,this.stripPrefix=VC(e.stripPrefix),this.stripTrailingSlash=rn(e.stripTrailingSlash)?e.stripTrailingSlash:this.stripTrailingSlash,this.decodePercentEncoding=rn(e.decodePercentEncoding)?e.decodePercentEncoding:this.decodePercentEncoding,this.sanitizeHtml=e.sanitizeHtml||!1;var t=this.mention;if(t!==!1&&wC.indexOf(t)===-1)throw new Error("invalid `mention` cfg '".concat(t,"' - see docs"));var n=this.hashtag;if(n!==!1&&vC.indexOf(n)===-1)throw new Error("invalid `hashtag` cfg '".concat(n,"' - see docs"));this.truncate=GC(e.truncate),this.className=e.className||this.className,this.replaceFn=e.replaceFn||this.replaceFn,this.context=e.context||this}return i.link=function(e,t){var n=new i(t);return n.link(e)},i.parse=function(e,t){var n=new i(t);return n.parse(e)},i.prototype.parse=function(e){var t=this,n=["a","style","script"],r=0,s=[];return UC(e,{onOpenTag:function(o){n.indexOf(o)>=0&&r++},onText:function(o,a){if(r===0){var c=/(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,u=o.split(c),l=a;u.forEach(function(h,f){if(f%2===0){var d=t.parseText(h,l);s.push.apply(s,d)}l+=h.length})}},onCloseTag:function(o){n.indexOf(o)>=0&&(r=Math.max(r-1,0))},onComment:function(o){},onDoctype:function(o){}}),s=this.compactMatches(s),s=this.removeUnwantedMatches(s),s},i.prototype.compactMatches=function(e){e.sort(function(c,u){return c.getOffset()-u.getOffset()});for(var t=0;t<e.length-1;){var n=e[t],r=n.getOffset(),s=n.getMatchedText().length,o=r+s;if(t+1<e.length){if(e[t+1].getOffset()===r){var a=e[t+1].getMatchedText().length>s?t:t+1;e.splice(a,1);continue}if(e[t+1].getOffset()<o){e.splice(t+1,1);continue}}t++}return e},i.prototype.removeUnwantedMatches=function(e){return this.hashtag||Ti(e,function(t){return t.getType()==="hashtag"}),this.email||Ti(e,function(t){return t.getType()==="email"}),this.phone||Ti(e,function(t){return t.getType()==="phone"}),this.mention||Ti(e,function(t){return t.getType()==="mention"}),this.urls.schemeMatches||Ti(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="scheme"}),this.urls.tldMatches||Ti(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="tld"}),this.urls.ipV4Matches||Ti(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="ipV4"}),e},i.prototype.parseText=function(e,t){t===void 0&&(t=0),t=t||0;for(var n=LC(e,{tagBuilder:this.getTagBuilder(),stripPrefix:this.stripPrefix,stripTrailingSlash:this.stripTrailingSlash,decodePercentEncoding:this.decodePercentEncoding,hashtagServiceName:this.hashtag,mentionServiceName:this.mention||"twitter"}),r=0,s=n.length;r<s;r++)n[r].setOffset(t+n[r].getOffset());return n},i.prototype.link=function(e){if(!e)return"";this.sanitizeHtml&&(e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"));for(var t=this.parse(e),n=[],r=0,s=0,o=t.length;s<o;s++){var a=t[s];n.push(e.substring(r,a.getOffset())),n.push(this.createMatchReturnVal(a)),r=a.getOffset()+a.getMatchedText().length}return n.push(e.substring(r)),n.join("")},i.prototype.createMatchReturnVal=function(e){var t;if(this.replaceFn&&(t=this.replaceFn.call(this.context,e)),typeof t=="string")return t;if(t===!1)return e.getMatchedText();if(t instanceof $g)return t.toAnchorString();var n=e.buildTag();return n.toAnchorString()},i.prototype.getTagBuilder=function(){var e=this.tagBuilder;return e||(e=this.tagBuilder=new V3({newWindow:this.newWindow,truncate:this.truncate,className:this.className})),e},i.version=D3,i}();function HC(i){return i==null&&(i=!0),rn(i)?{schemeMatches:i,tldMatches:i,ipV4Matches:i}:{schemeMatches:rn(i.schemeMatches)?i.schemeMatches:!0,tldMatches:rn(i.tldMatches)?i.tldMatches:!0,ipV4Matches:rn(i.ipV4Matches)?i.ipV4Matches:!0}}function VC(i){return i==null&&(i=!0),rn(i)?{scheme:i,www:i}:{scheme:rn(i.scheme)?i.scheme:!0,www:rn(i.www)?i.www:!0}}function GC(i){return typeof i=="number"?{length:i,location:"end"}:R3(i||{},{length:Number.POSITIVE_INFINITY,location:"end"})}Pe.snoise=`
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
`;class Kg{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}dot4(e,t,n,r,s){return e[0]*t+e[1]*n+e[2]*r+e[3]*s}noise(e,t){let n,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),u=Math.floor(t+a),l=(3-Math.sqrt(3))/6,h=(c+u)*l,f=c-h,d=u-h,g=e-f,m=t-d;let p,v;g>m?(p=1,v=0):(p=0,v=1);const _=g-p+l,y=m-v+l,x=g-1+2*l,w=m-1+2*l,A=c&255,L=u&255,b=this.perm[A+this.perm[L]]%12,T=this.perm[A+p+this.perm[L+v]]%12,I=this.perm[A+1+this.perm[L+1]]%12;let W=.5-g*g-m*m;W<0?n=0:(W*=W,n=W*W*this.dot(this.grad3[b],g,m));let j=.5-_*_-y*y;j<0?r=0:(j*=j,r=j*j*this.dot(this.grad3[T],_,y));let U=.5-x*x-w*w;return U<0?s=0:(U*=U,s=U*U*this.dot(this.grad3[I],x,w)),70*(n+r+s)}noise3d(e,t,n){let r,s,o,a;const c=.3333333333333333,u=(e+t+n)*c,l=Math.floor(e+u),h=Math.floor(t+u),f=Math.floor(n+u),d=1/6,g=(l+h+f)*d,m=l-g,p=h-g,v=f-g,_=e-m,y=t-p,x=n-v;let w,A,L,b,T,I;_>=y?y>=x?(w=1,A=0,L=0,b=1,T=1,I=0):_>=x?(w=1,A=0,L=0,b=1,T=0,I=1):(w=0,A=0,L=1,b=1,T=0,I=1):y<x?(w=0,A=0,L=1,b=0,T=1,I=1):_<x?(w=0,A=1,L=0,b=0,T=1,I=1):(w=0,A=1,L=0,b=1,T=1,I=0);const W=_-w+d,j=y-A+d,U=x-L+d,N=_-b+2*d,V=y-T+2*d,K=x-I+2*d,te=_-1+3*d,$=y-1+3*d,F=x-1+3*d,B=l&255,ne=h&255,ee=f&255,re=this.perm[B+this.perm[ne+this.perm[ee]]]%12,ue=this.perm[B+w+this.perm[ne+A+this.perm[ee+L]]]%12,G=this.perm[B+b+this.perm[ne+T+this.perm[ee+I]]]%12,Z=this.perm[B+1+this.perm[ne+1+this.perm[ee+1]]]%12;let Ce=.6-_*_-y*y-x*x;Ce<0?r=0:(Ce*=Ce,r=Ce*Ce*this.dot3(this.grad3[re],_,y,x));let _e=.6-W*W-j*j-U*U;_e<0?s=0:(_e*=_e,s=_e*_e*this.dot3(this.grad3[ue],W,j,U));let ye=.6-N*N-V*V-K*K;ye<0?o=0:(ye*=ye,o=ye*ye*this.dot3(this.grad3[G],N,V,K));let le=.6-te*te-$*$-F*F;return le<0?a=0:(le*=le,a=le*le*this.dot3(this.grad3[Z],te,$,F)),32*(r+s+o+a)}noise4d(e,t,n,r){const s=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20;let l,h,f,d,g;const m=(e+t+n+r)*c,p=Math.floor(e+m),v=Math.floor(t+m),_=Math.floor(n+m),y=Math.floor(r+m),x=(p+v+_+y)*u,w=p-x,A=v-x,L=_-x,b=y-x,T=e-w,I=t-A,W=n-L,j=r-b,U=T>I?32:0,N=T>W?16:0,V=I>W?8:0,K=T>j?4:0,te=I>j?2:0,$=W>j?1:0,F=U+N+V+K+te+$,B=o[F][0]>=3?1:0,ne=o[F][1]>=3?1:0,ee=o[F][2]>=3?1:0,re=o[F][3]>=3?1:0,ue=o[F][0]>=2?1:0,G=o[F][1]>=2?1:0,Z=o[F][2]>=2?1:0,Ce=o[F][3]>=2?1:0,_e=o[F][0]>=1?1:0,ye=o[F][1]>=1?1:0,le=o[F][2]>=1?1:0,ke=o[F][3]>=1?1:0,Ee=T-B+u,be=I-ne+u,Qe=W-ee+u,it=j-re+u,et=T-ue+2*u,mt=I-G+2*u,tt=W-Z+2*u,Be=j-Ce+2*u,xt=T-_e+3*u,yt=I-ye+3*u,C=W-le+3*u,M=j-ke+3*u,S=T-1+4*u,P=I-1+4*u,J=W-1+4*u,ae=j-1+4*u,me=p&255,R=v&255,k=_&255,ce=y&255,de=a[me+a[R+a[k+a[ce]]]]%32,fe=a[me+B+a[R+ne+a[k+ee+a[ce+re]]]]%32,ve=a[me+ue+a[R+G+a[k+Z+a[ce+Ce]]]]%32,ge=a[me+_e+a[R+ye+a[k+le+a[ce+ke]]]]%32,Oe=a[me+1+a[R+1+a[k+1+a[ce+1]]]]%32;let De=.6-T*T-I*I-W*W-j*j;De<0?l=0:(De*=De,l=De*De*this.dot4(s[de],T,I,W,j));let Ue=.6-Ee*Ee-be*be-Qe*Qe-it*it;Ue<0?h=0:(Ue*=Ue,h=Ue*Ue*this.dot4(s[fe],Ee,be,Qe,it));let O=.6-et*et-mt*mt-tt*tt-Be*Be;O<0?f=0:(O*=O,f=O*O*this.dot4(s[ve],et,mt,tt,Be));let X=.6-xt*xt-yt*yt-C*C-M*M;X<0?d=0:(X*=X,d=X*X*this.dot4(s[ge],xt,yt,C,M));let ie=.6-S*S-P*P-J*J-ae*ae;return ie<0?g=0:(ie*=ie,g=ie*ie*this.dot4(s[Oe],S,P,J,ae)),27*(l+h+f+d+g)}}class WC extends Js{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new YC(t)}),this.register(function(t){return new nD(t)}),this.register(function(t){return new iD(t)}),this.register(function(t){return new ZC(t)}),this.register(function(t){return new QC(t)}),this.register(function(t){return new JC(t)}),this.register(function(t){return new eD(t)}),this.register(function(t){return new qC(t)}),this.register(function(t){return new tD(t)}),this.register(function(t){return new KC(t)}),this.register(function(t){return new $C(t)}),this.register(function(t){return new rD(t)}),this.register(function(t){return new sD(t)})}load(e,t,n,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Ui.extractUrlBase(e),this.manager.itemStart(e);const a=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},c=new ym(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{s.parse(u,o,function(l){t(l),s.manager.itemEnd(e)},a)}catch(l){a(l)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Ui.decodeText(new Uint8Array(e,0,4))===Zg){try{o[Ie.KHR_BINARY_GLTF]=new oD(e)}catch(l){r&&r(l);return}s=JSON.parse(o[Ie.KHR_BINARY_GLTF].content)}else s=JSON.parse(Ui.decodeText(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new xD(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const l=this.pluginCallbacks[u](c);a[l.name]=l,o[l.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const l=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(l){case Ie.KHR_MATERIALS_UNLIT:o[l]=new XC;break;case Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[l]=new cD;break;case Ie.KHR_DRACO_MESH_COMPRESSION:o[l]=new aD(s,this.dracoLoader);break;case Ie.KHR_TEXTURE_TRANSFORM:o[l]=new lD;break;case Ie.KHR_MESH_QUANTIZATION:o[l]=new uD;break;default:h.indexOf(l)>=0&&a[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function jC(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ie={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $C{constructor(e){this.parser=e,this.name=Ie.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const l=new Te(16777215);c.color!==void 0&&l.fromArray(c.color);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new Ba(l),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new h2(l),u.distance=h;break;case"spot":u=new c2(l),u.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(u),t.cache.add(n,r),r}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class XC{constructor(){this.name=Ie.KHR_MATERIALS_UNLIT}getMaterialType(){return dn}extendParams(e,t,n){const r=[];e.color=new Te(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,je))}return Promise.all(r)}}class qC{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class YC{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(a,a)}return Promise.all(s)}}class KC{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class ZC{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,je)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class QC{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class JC{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te(a[0],a[1],a[2]),Promise.all(s)}}class eD{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class tD{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,je)),Promise.all(s)}}class nD{constructor(e){this.parser=e,this.name=Ie.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class iD{constructor(e){this.parser=e,this.name=Ie.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rD{constructor(e){this.name=Ie.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=r.byteOffset||0,u=r.byteLength||0,l=r.count,h=r.byteStride,f=new Uint8Array(a,c,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(l,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(l*h);return o.decodeGltfBuffer(new Uint8Array(d),l,h,f,r.mode,r.filter),d})})}else return null}}class sD{constructor(e){this.name=Ie.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const u of r.primitives)if(u.mode!==Jt.TRIANGLES&&u.mode!==Jt.TRIANGLE_STRIP&&u.mode!==Jt.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(l=>(c[u]=l,c[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const l=u.pop(),h=l.isGroup?l.children:[l],f=u[0].count,d=[];for(const g of h){const m=new Fe,p=new D,v=new ft,_=new D(1,1,1),y=new $E(g.geometry,g.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&v.fromBufferAttribute(c.ROTATION,x),c.SCALE&&_.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,m.compose(p,v,_));for(const x in c)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);ze.prototype.copy.call(y,g),y.frustumCulled=!1,this.parser.assignFinalMaterial(y),d.push(y)}return l.isGroup?(l.clear(),l.add(...d),l):d[0]}))}}const Zg="glTF",_s=12,$d={JSON:1313821514,BIN:5130562};class oD{constructor(e){this.name=Ie.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_s);if(this.header={magic:Ui.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-_s,r=new DataView(e,_s);let s=0;for(;s<n;){const o=r.getUint32(s,!0);s+=4;const a=r.getUint32(s,!0);if(s+=4,a===$d.JSON){const c=new Uint8Array(e,_s+s,o);this.content=Ui.decodeText(c)}else if(a===$d.BIN){const c=_s+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class aD{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ie.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},u={};for(const l in o){const h=Gc[l]||l.toLowerCase();a[h]=o[l]}for(const l in e.attributes){const h=Gc[l]||l.toLowerCase();if(o[l]!==void 0){const f=n.accessors[e.attributes[l]],d=qs[f.componentType];u[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(l){return new Promise(function(h){r.decodeDracoFile(l,function(f){for(const d in f.attributes){const g=f.attributes[d],m=c[d];m!==void 0&&(g.normalized=m)}h(f)},a,u)})})}}class lD{constructor(){this.name=Ie.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Vc extends Oa{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),r=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Te().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(c){for(const u in a)c.uniforms[u]=a[u];c.fragmentShader=c.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",r).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(c){a.specular.value=c}},specularMap:{get:function(){return a.specularMap.value},set:function(c){a.specularMap.value=c,c?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(c){a.glossiness.value=c}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(c){a.glossinessMap.value=c,c?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class cD{constructor(){this.name=Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Vc}extendParams(e,t,n){const r=t.extensions[this.name];e.color=new Te(1,1,1),e.opacity=1;const s=[];if(Array.isArray(r.diffuseFactor)){const o=r.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(r.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",r.diffuseTexture,je)),e.emissive=new Te(0,0,0),e.glossiness=r.glossinessFactor!==void 0?r.glossinessFactor:1,e.specular=new Te(1,1,1),Array.isArray(r.specularFactor)&&e.specular.fromArray(r.specularFactor),r.specularGlossinessTexture!==void 0){const o=r.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",o)),s.push(n.assignTexture(e,"specularMap",o,je))}return Promise.all(s)}createMaterial(e){const t=new Vc(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=ru,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class uD{constructor(){this.name=Ie.KHR_MESH_QUANTIZATION}}class Qg extends Qs{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,u=a*3,l=r-t,h=(n-t)/l,f=h*h,d=f*h,g=e*u,m=g-u,p=-2*d+3*f,v=d-f,_=1-p,y=v-f+h;for(let x=0;x!==a;x++){const w=o[m+x+a],A=o[m+x+c]*l,L=o[g+x+a],b=o[g+x]*l;s[x]=_*w+y*A+p*L+v*b}return s}}const hD=new ft;class fD extends Qg{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return hD.fromArray(s).normalize().toArray(s),s}}const Jt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xd={9728:Et,9729:Ht,9984:vc,9985:Kp,9986:_c,9987:qr},qd={33071:en,33648:ra,10497:Fr},Yd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dD={CUBICSPLINE:void 0,LINEAR:Nr,STEP:Fs},sc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pD(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Oa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),i.DefaultMaterial}function xs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Di(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mD(i,e,t){let n=!1,r=!1,s=!1;for(let u=0,l=e.length;u<l;u++){const h=e[u];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],c=[];for(let u=0,l=e.length;u<l;u++){const h=e[u];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(u){const l=u[0],h=u[1],f=u[2];return n&&(i.morphAttributes.position=l),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function gD(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vD(i){const e=i.extensions&&i.extensions[Ie.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Kd(e.attributes):t=i.indices+":"+Kd(i.attributes)+":"+i.mode,t}function Kd(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Wc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _D(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class xD{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jC,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new a2(this.options.manager):this.textureLoader=new d2(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ym(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};xs(s,a,r),Di(a,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[u,l]of o.children.entries())s(l,a.children[u])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ie.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Ui.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0)return Promise.resolve(null);const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Yd[r.type],u=qs[r.componentType],l=u.BYTES_PER_ELEMENT,h=l*c,f=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let m,p;if(d&&d!==h){const v=Math.floor(f/d),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+v+":"+r.count;let y=t.cache.get(_);y||(m=new u(a,v*d,r.count*d/l),y=new zE(m,d/l),t.cache.add(_,y)),p=new cu(y,c,f%d/l,g)}else a===null?m=new u(r.count*c):m=new u(a,f,r.count*c),p=new kt(m,c,g);if(r.sparse!==void 0){const v=Yd.SCALAR,_=qs[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,w=new _(o[1],y,r.sparse.count*v),A=new u(o[2],x,r.sparse.count*c);a!==null&&(p=new kt(p.array.slice(),p.itemSize,p.normalized));for(let L=0,b=w.length;L<b;L++){const T=w[L];if(p.setX(T,A[L*c]),c>=2&&p.setY(T,A[L*c+1]),c>=3&&p.setZ(T,A[L*c+2]),c>=4&&p.setW(T,A[L*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=o.name||a.name||"";const f=(s.samplers||{})[o.sampler]||{};return l.magFilter=Xd[f.magFilter]||Ht,l.minFilter=Xd[f.minFilter]||qr,l.wrapS=qd[f.wrapS]||Fr,l.wrapT=qd[f.wrapT]||Fr,r.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){u=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const l=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){const p=new Ut(m);p.needsUpdate=!0,f(p)}),t.load(Ui.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return u===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||_D(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ie.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ie.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ie.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.encoding=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new gm,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ia,En.prototype.copy.call(c,n),c.color.copy(n.color),this.cache.add(a,c)),n=c}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Oa}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},u=[];if(c[Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=r[Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=h.getMaterialType(),u.push(h.extendParams(a,s,t))}else if(c[Ie.KHR_MATERIALS_UNLIT]){const h=r[Ie.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),u.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",h.baseColorTexture,je)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Tn);const l=s.alphaMode||sc.OPAQUE;if(l===sc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,l===sc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==dn&&(u.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new he(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&o!==dn&&(u.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==dn&&(a.emissive=new Te().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==dn&&u.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,je)),Promise.all(u).then(function(){let h;return o===Vc?h=r[Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):h=new o(a),s.name&&(h.name=s.name),Di(h,s),t.associations.set(h,{materials:e}),s.extensions&&xs(r,h,s),h})}createUniqueName(e){const t=qe.sanitizeNodeName(e||"");let n=t;for(let r=1;this.nodeNamesUsed[n];++r)n=t+"_"+r;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Ie.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Zd(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const u=e[a],l=vD(u),h=r[l];if(h)o.push(h.promise);else{let f;u.extensions&&u.extensions[Ie.KHR_DRACO_MESH_COMPRESSION]?f=s(u):f=Zd(new pt,u,t),r[l]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,u=o.length;c<u;c++){const l=o[c].material===void 0?pD(this.cache):this.getDependency("material",o[c].material);a.push(l)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const u=c.slice(0,c.length-1),l=c[c.length-1],h=[];for(let d=0,g=l.length;d<g;d++){const m=l[d],p=o[d];let v;const _=u[d];if(p.mode===Jt.TRIANGLES||p.mode===Jt.TRIANGLE_STRIP||p.mode===Jt.TRIANGLE_FAN||p.mode===void 0)v=s.isSkinnedMesh===!0?new VE(m,_):new se(m,_),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),p.mode===Jt.TRIANGLE_STRIP?v.geometry=Qd(v.geometry,iu):p.mode===Jt.TRIANGLE_FAN&&(v.geometry=Qd(v.geometry,sa));else if(p.mode===Jt.LINES)v=new mm(m,_);else if(p.mode===Jt.LINE_STRIP)v=new un(m,_);else if(p.mode===Jt.LINE_LOOP)v=new XE(m,_);else if(p.mode===Jt.POINTS)v=new qE(m,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(v.geometry.morphAttributes).length>0&&gD(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),Di(v,s),p.extensions&&xs(r,v,p),t.assignFinalMaterial(v),h.push(v)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new hi;t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(z1.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Zs(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Di(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(r){return n.inverseBindMatrices=r,n})}loadAnimation(e){const n=this.json.animations[e],r=[],s=[],o=[],a=[],c=[];for(let u=0,l=n.channels.length;u<l;u++){const h=n.channels[u],f=n.samplers[h.sampler],d=h.target,g=d.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;r.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",p)),a.push(f),c.push(d)}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(u){const l=u[0],h=u[1],f=u[2],d=u[3],g=u[4],m=[];for(let v=0,_=l.length;v<_;v++){const y=l[v],x=h[v],w=f[v],A=d[v],L=g[v];if(y===void 0)continue;y.updateMatrix();let b;switch(li[L.path]){case li.weights:b=Bs;break;case li.rotation:b=$i;break;case li.position:case li.scale:default:b=ks;break}const T=y.name?y.name:y.uuid,I=A.interpolation!==void 0?dD[A.interpolation]:Nr,W=[];li[L.path]===li.weights?y.traverse(function(U){U.morphTargetInfluences&&W.push(U.name?U.name:U.uuid)}):W.push(T);let j=w.array;if(w.normalized){const U=Wc(j.constructor),N=new Float32Array(j.length);for(let V=0,K=j.length;V<K;V++)N[V]=j[V]*U;j=N}for(let U=0,N=W.length;U<N;U++){const V=new b(W[U]+"."+li[L.path],x.array,j,I);A.interpolation==="CUBICSPLINE"&&(V.createInterpolant=function(te){const $=this instanceof $i?fD:Qg;return new $(this.times,this.values,this.getValueSize()/3,te)},V.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(V)}}const p=n.name?n.name:"animation_"+e;return new e2(p,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let c=0,u=r.weights.length;c<u;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,n=this.extensions,r=this,s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"";return function(){const a=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),Promise.all(a)}().then(function(a){let c;if(s.isBone===!0?c=new pm:a.length>1?c=new hi:a.length===1?c=a[0]:c=new ze,c!==a[0])for(let u=0,l=a.length;u<l;u++)c.add(a[u]);if(s.name&&(c.userData.name=s.name,c.name=o),Di(c,s),s.extensions&&xs(n,c,s),s.matrix!==void 0){const u=new Fe;u.fromArray(s.matrix),c.applyMatrix4(u)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);return r.associations.has(c)||r.associations.set(c,{}),r.associations.get(c).nodes=e,c})}loadScene(e){const t=this.json,n=this.extensions,r=this.json.scenes[e],s=this,o=new hi;r.name&&(o.name=s.createUniqueName(r.name)),Di(o,r),r.extensions&&xs(n,o,r);const a=r.nodes||[],c=[];for(let u=0,l=a.length;u<l;u++)c.push(Jg(a[u],o,t,s));return Promise.all(c).then(function(){const u=l=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof En||f instanceof Ut)&&h.set(f,d);return l.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=u(o),o})}}function Jg(i,e,t,n){const r=t.nodes[i];return n.getDependency("node",i).then(function(s){if(r.skin===void 0)return s;let o;return n.getDependency("skin",r.skin).then(function(a){o=a;const c=[];for(let u=0,l=o.joints.length;u<l;u++)c.push(n.getDependency("node",o.joints[u]));return Promise.all(c)}).then(function(a){return s.traverse(function(c){if(!c.isMesh)return;const u=[],l=[];for(let h=0,f=a.length;h<f;h++){const d=a[h];if(d){u.push(d);const g=new Fe;o.inverseBindMatrices!==void 0&&g.fromArray(o.inverseBindMatrices.array,h*16),l.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[h])}c.bind(new uu(u,l),c.matrixWorld)}),s})}).then(function(s){e.add(s);const o=[];if(r.children){const a=r.children;for(let c=0,u=a.length;c<u;c++){const l=a[c];o.push(Jg(l,s,t,n))}}return Promise.all(o)})}function yD(i,e,t){const n=e.attributes,r=new Ji;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,u=a.max;if(c!==void 0&&u!==void 0){if(r.set(new D(c[0],c[1],c[2]),new D(u[0],u[1],u[2])),a.normalized){const l=Wc(qs[a.componentType]);r.min.multiplyScalar(l),r.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new D,c=new D;for(let u=0,l=s.length;u<l;u++){const h=s[u];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const m=Wc(qs[f.componentType]);c.multiplyScalar(m)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Yr;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Zd(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Gc[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return Di(i,e),yD(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?mD(i,e.targets,t):i})}function Qd(i,e){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===sa)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s}const nr=async(i,e)=>{if(!Cr(i))return new ze;const t=(await new Promise((n,r)=>new WC().load(i,n,s=>{qi.getState().setLoadingMessage(i,`Loading ${i} (${s.loaded}/${s.total})`)},r))).scene.children[0].children[0];return qi.getState().removeLoadingMessage(i),e!==null&&t.scale.multiplyScalar(e/new Ji().setFromObject(t).getSize(new D).y),t},bD=async()=>{const i=await nr("models/low-poly_airplane.glb",.05);i.userData.velocity=new he(0,0);const e=new Kg;Lt.add(n=>{i.rotation.set(i.userData.velocity.x*.3+e.noise(0,n*3e-4)*(4/180*Math.PI),Math.PI*.5+e.noise(1,n*3e-4)*(4/180*Math.PI),e.noise(2,n*3e-4)*(4/180*Math.PI))});const t=new Set;return window.addEventListener("keydown",n=>{t.add(n.code)}),window.addEventListener("keyup",n=>{t.delete(n.code)}),window.addEventListener("blur",()=>{t.clear()}),ts.add(()=>{if(Me().stageTransitingTo===null&&(t.has("KeyD")&&!t.has("KeyA")&&(i.userData.velocity.x=Math.min(1,Math.max(0,i.userData.velocity.x)+.3)),t.has("KeyA")&&!t.has("KeyD")&&(i.userData.velocity.x=Math.max(-1,Math.min(0,i.userData.velocity.x)-.3)),t.has("KeyW")&&!t.has("KeyS")&&(i.userData.velocity.y=Math.min(1,Math.max(0,i.userData.velocity.y)+.3)),t.has("KeyS")&&!t.has("KeyW")&&(i.userData.velocity.y=Math.max(-1,Math.min(0,i.userData.velocity.y)-.3)),(t.size===0||t.has("KeyA")&&t.has("KeyD")||t.has("KeyW")&&t.has("KeyS"))&&i.userData.velocity.multiplyScalar(.8),i.userData.velocity.length()>1&&i.userData.velocity.normalize(),i.position.setZ(Math.min($s,Math.max(di,i.position.z+i.userData.velocity.x*.015))),i.position.setX(Math.min(a3,Math.max(l3,i.position.x+i.userData.velocity.y*.01))),t.has("Space")&&u3()?i.position.y=Math.min(.5,i.position.y+.005):i.position.y=Math.max(0,i.position.y-.005),(Me().getWeather()?.enabled?Me().upgrades.Autopilot-5:Me().upgrades.Autopilot)>0&&t.size===0&&i.userData.autopilotTarget)){const n=.1*Me().upgrades.Autopilot;Math.abs(i.userData.autopilotTarget.position.z-i.position.z)>.02&&(i.userData.velocity.x=Math.min(1,Math.max(-1,i.userData.velocity.x+Math.sign(i.userData.autopilotTarget.position.z-i.position.z)*n)))}}),i};function wD(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function MD(i){const e=new Map,t=new Map,n=i.clone();return e0(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function e0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)e0(i.children[n],e.children[n],t)}class os extends ze{constructor(e){super(),this.model=e;let t;e.traverse(n=>{n instanceof se&&(t=n)}),this.noMesh=t===void 0,this.mesh=t??new se,this.originalPositions=this.noMesh?null:this.mesh.geometry.attributes.position.clone()}mesh;noMesh;originalPositions;pool=new Set;withVertexAnimation(e){return this.noMesh?this:(Lt.add(()=>{!this.parent||(e(this.mesh.geometry.attributes.position,this.originalPositions),this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.computeVertexNormals())}),this)}onCloneListeners=new Set;onAllocateListeners=new Set;onClone(e){return this.onCloneListeners.add(e),this}onAllocate(e){return this.onAllocateListeners.add(e),this}allocate(){const e=(()=>{for(const n of this.pool)return this.pool.delete(n),n;const t=MD(this.model);return t.free=()=>{t.parent&&t.removeFromParent(),this.pool.add(t)},t.getOriginalScale=()=>this.model.scale.clone(),this.onCloneListeners.forEach(n=>n(t)),t})();return this.onAllocateListeners.forEach(t=>{Object.assign(e.userData,t(e))}),this.add(e),e}}const Jd=async i=>{const e=new os(vn(await nr("models/low_polygon_art__white_eagle_bird.glb",.1),{rotateX:-Math.PI/2,rotateZ:-Math.PI/2,scale:{multiplyScalar:.3}}));return i&&e.withVertexAnimation((t,n)=>{for(let r=0;r<t.count;r++){const s=wD(Math.abs(t.getX(r)),3.5,17)*10*Math.sin(Date.now()*.01)*.8;t.setY(r,n.getY(r)+s*.7),t.setZ(r,n.getZ(r)+s)}}),e};function SD(i,e){if(e===w1)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===sa||e===iu){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===sa)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const TD=`
in vec2 vUv;

void main() {
    float x = vUv.x * (1.5 - vUv.y * 1.3);
    gl_FragColor = vec4(1.0, 1.0, 1.0, smoothstep(0.01, 0.3, vUv.y) * (1.0 - step(0.3, abs(x))) * min(1.0, sin(abs(x) * 30.0) + vUv.y * 5.0) * 0.2);
}
`,ED=`
out vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}
`,AD=`
uniform sampler2D texture1;
uniform sampler2D texture2;
in vec2 vUv;

void main() {
    gl_FragColor = texture2D(texture1, vUv);
    vec4 color2 = texture2D(texture2, vUv);
    gl_FragColor.rgb = pow(gl_FragColor.rgb + color2.rgb * color2.a, /* TODO: I don't know why but using this filter makes the canvas darker, so I've corrected it here. */vec3(1.0 / 1.9));
}
`,CD=`
out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,t0=1,as=i=>(i.traverse(e=>{e.layers.set(t0)}),i),DD=(i,e,t)=>{const n=new Mm(i);n.renderToScreen=!1,n.addPass(t),n.addPass(new Xi(new he(256,256),3,0,0));const r=new Us(new dt({uniforms:{texture1:{value:null},texture2:{value:n.renderTarget2.texture}},vertexShader:CD,fragmentShader:AD,defines:{}}),"texture1");return r.needsSwap=!0,Tm.add(()=>{e.layers.disableAll(),e.layers.enable(t0),n.render(),e.layers.enableAll()}),window.addEventListener("resize",()=>{n.setSize(window.innerWidth,window.innerHeight)}),r},PD=.005,ep=2,RD=i=>{const t=new se(SD(new pt().setFromPoints(Array(120).fill(0).flatMap(()=>[new D(i.position.x,0,i.position.z+.1),new D(i.position.x,0,i.position.z-.1)])),iu),new dt({vertexShader:ED,fragmentShader:TD,transparent:!0}));return t.geometry.setAttribute("uv",new kt(new Float32Array(Array(120).fill(0).flatMap((n,r)=>[-1,r/(120-1),1,r/(120-1)])),2)),ts.add(n=>{if(n%ep==0)return;const r=t.geometry.attributes.position;for(let s=r.count-1;s>=2;s--)r.setX(s,r.getX(s-2)-PD*ep),r.setY(s,r.getY(s-2)),r.setZ(s,r.getZ(s-2));r.setX(0,i.position.x),r.setY(0,i.position.y),r.setZ(0,i.position.z+.1),r.setX(1,i.position.x),r.setY(1,i.position.y),r.setZ(1,i.position.z-.1),t.geometry.attributes.position.needsUpdate=!0,t.geometry.computeVertexNormals()}),as(t),ss((n,r)=>{if(n.stage===r.stage)return;const s=t.geometry.attributes.position;for(let o=0;o<s.count;o++)s.setX(o,i.position.x),s.setZ(o,i.position.z)}),t},n0=(i,e)=>{i.traverse(t=>{t instanceof se&&(t.material.onBeforeCompile=n=>{Object.assign(n.uniforms,e.uniforms??{}),t.userData.shader=n,e.vertexShader?.trim()&&(n.vertexShader=n.vertexShader.replace(/void\s*main\s*\(\s*\)/,"void super()")+e.vertexShader),e.fragmentShader?.trim()&&(n.fragmentShader=n.fragmentShader.replace(/void\s*main\s*\(\s*\)/,"void super()")+e.fragmentShader)})})},LD=(i,e)=>{i.traverse(t=>{t instanceof se&&(t.material=e)})},tp=async()=>{const i=await nr("models/planet_megatropolis.glb",2);return n0(i,{fragmentShader:`
uniform float time;

void main() {
super();
// gl_FragColor.rgb *= 1.0 + (sin(time * 0.006) + 1.0) / 2.0 * 10.0;
}`}),new os(as(i)).onClone(e=>{Lt.add(t=>{e.rotation.set(0,t*1e-4,0)})})},ID=`
#include <snoise>

in vec2 pos;
uniform float time;

void main() {
    gl_FragColor = vec4(vec3(73.0, 150.0, 209.0) / 255.0 + snoise(pos * 8.0 + vec2(0.0, 0.0003) * time) * 0.15, 0.8 - smoothstep(0.3, 0.55, length(pos)));
}
`,FD=`
out vec2 pos;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    pos = position.xy;
}
`,OD=()=>{const i={time:{value:0}};return Lt.add(e=>{i.time.value=e}),vn(new se(new Zr,new dt({transparent:!0,uniforms:i,vertexShader:FD,fragmentShader:ID})),{rotateX:-Math.PI/2,scale:{setScalar:4},position:{setY:-.13}})},ND=`

void main() {
    gl_FragColor += vec4(0.1, 0.1, 0.15, 1.0);
}
`,BD=`

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,kD=async i=>{const e=await nr("models/hammer.glb",.03);e.position.set(-.01,0,-.06);const t={stage:{value:Me().stage}};ss(r=>{t.stage.value=r.stage}),LD(e,new dt({uniforms:t,vertexShader:BD,fragmentShader:ND})),as(e);const n=new os(new ze().add(e)).onClone(r=>{Lt.add(s=>{r.rotation.x+=Math.random()*.05,r.rotation.y=s*.01,r.rotation.z=Math.PI/2})}).onAllocate(()=>{const r=(Math.random()-.5)*2*Math.PI/4;return{time:0,velocity:new D(Math.cos(r),Math.sin(r),0)}});return ts.add(r=>{const s=Ug(Me()).Hammer;s&&r%s===0&&n.allocate().position.copy(i.position);for(const o of n.children)o.userData.time++,o.position.x+=o.userData.velocity.x*.01,o.position.y=Math.sin(o.userData.time*.15)*.03,o.position.z+=o.userData.velocity.y*.01,(o.position.x>4||Math.abs(o.position.z)>1)&&o.free()}),n},UD=`
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
`,zD=`
out vec2 pos;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    pos = position.xy;
}
`,HD=i=>{const e={time:{value:0},count:{value:0}};Lt.add(n=>{e.time.value=n,e.count.value=Me().upgrades.Laser,vn(t,{position:{setX:i.position.x+1,setY:i.position.y+.01,setZ:i.position.z}})});const t=vn(new se(new Zr(1,1),new dt({blending:ia,transparent:!0,uniforms:e,vertexShader:zD,fragmentShader:UD})),{rotateY:-Math.PI/2,rotateX:-Math.PI/2,scale:{set:[.25,2,0]},position:{set:[1,.01,0]}});return as(t),t.renderOrder=1,t},VD=()=>{const i=new hi;let e=Date.now();return(async()=>{const t=new os(vn(await nr("models/y2k_newspaper_article.glb",.1),{rotateY:Math.PI/2,rotateX:Math.PI*.3,scale:{multiplyScalar:2},position:{set:[.8,.5,.5]}})).withVertexAnimation((r,s)=>{for(let o=0;o<r.count;o++)r.setY(o,s.getY(o)+Math.sin(r.getX(o)*Math.PI*2+Date.now()*.006)*.03+Math.sin(r.getZ(o)*Math.PI*2+Date.now()*.006)*.01)});i.add(t),t.mesh.material.depthTest=!1,t.mesh.material.transparent=!0,t.mesh.renderOrder=3;for(let r=0;r<30;r++)t.allocate();const n=new Kg;Lt.add(()=>{if(t.parent===null)return;const r=.1;for(const[s,o]of t.children.entries()){const a=(Date.now()-e)*.006*(1+n.noise(s,3)*.3);o.rotation.y=n.noise(s,5),o.rotation.z=1*a,o.position.set(n.noise(s,4)*.5+.2,.3+(Math.cos(a)-a*.5-1)*r+(n.noise(s,1)+1)*.3,.5+(Math.sin(a)-a*.8)*r+(n.noise(s,2)+1)*.3)}})})().catch(console.error),i.visible=!1,ss((t,n)=>{if(t.availableNews===n.availableNews)return;const r=[...t.availableNews.difference(n.availableNews)][0];!r||(e=Date.now(),i.visible=!0,jc.getState().showNews(h3[r]),setTimeout(()=>{i.visible=!1},1e4))}),i},GD=`
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
`,WD=`
out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,jD=(i,e)=>{const t=new Us({uniforms:{blur:{value:e},tDiffuse:{value:null},aspect:{value:window.innerWidth/window.innerHeight},time:{value:0},mouse0:{value:new he(.5,.5)},mouse1:{value:new he(.5,.5)},mouse2:{value:new he(.5,.5)},mouse3:{value:new he(.5,.5)},mouse4:{value:new he(.5,.5)},mouse5:{value:new he(.5,.5)},mouse6:{value:new he(.5,.5)},mouse7:{value:new he(.5,.5)},mouse8:{value:new he(.5,.5)},mouse9:{value:new he(.5,.5)}},vertexShader:WD,fragmentShader:GD}),n=()=>{t.uniforms.mouse9.value.copy(t.uniforms.mouse8.value),t.uniforms.mouse8.value.copy(t.uniforms.mouse7.value),t.uniforms.mouse7.value.copy(t.uniforms.mouse6.value),t.uniforms.mouse6.value.copy(t.uniforms.mouse5.value),t.uniforms.mouse5.value.copy(t.uniforms.mouse4.value),t.uniforms.mouse4.value.copy(t.uniforms.mouse3.value),t.uniforms.mouse3.value.copy(t.uniforms.mouse2.value),t.uniforms.mouse2.value.copy(t.uniforms.mouse1.value),t.uniforms.mouse1.value.copy(t.uniforms.mouse0.value),t.uniforms.mouse0.value.set(-1,-1)};return window.addEventListener("mousemove",r=>{t.uniforms.mouse0.value.set(r.pageX/window.innerWidth,1-r.pageY/window.innerHeight),t.uniforms.mouse0.value.distanceTo(t.uniforms.mouse1.value)>.1&&n()}),setInterval(()=>{n()},100),Lt.add(r=>{t.uniforms.aspect.value=i.aspect,t.uniforms.time.value=r}),t.enabled=Me().getWeather()?.name==="Rain"&&!!Me().getWeather()?.enabled,ss((r,s)=>{r.weatherEffectWillBeEnabledIn!==s.weatherEffectWillBeEnabledIn&&(t.enabled=Me().getWeather()?.name==="Rain"&&!!Me().getWeather()?.enabled)}),t},$D=`
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
`,XD=`
out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,qD=()=>{let i=!1;const e=new Us({uniforms:{tDiffuse:{value:null},time:{value:0}},vertexShader:XD,fragmentShader:$D});return{pass:e,play:t=>{if(i)return;i=!0;let n=0;const r=(s,o)=>{n<1?n=Math.min(1,n+o*.001):n===1?(n+=o*.001,t(),Me().completeStageTransition()):n<2?n=Math.min(2,n+o*.001):(Lt.delete(r),i=!1),e.uniforms.time.value=n};Lt.add(r)}}},YD=`
uniform float time;
in float worldPosY;

void main() {
    super();
    if (worldPosY > 0.0) {
        gl_FragColor.rgb = gl_FragColor.rgb * (1.0 + (sin(time * 0.01 + worldPosY * 300.0) + 1.0) / 2.0 * 2.0);
    }
}
`,KD=`
out float worldPosY;
uniform float distortion;  // [0, 1]

void main() {
    super();
    vec4 worldPos = modelMatrix * vec4(position, 1.);
    worldPosY = worldPos.y;
    gl_Position.x += sin(worldPos.y * 600.0) * distortion * 0.1;
}
`,Sa=async()=>{const i={time:{value:0},distortion:{value:0}};Lt.add(t=>{i.time.value=t});const e=vn(await nr("models/ufo.glb",.2),{rotateX:-Math.PI/2,position:{set:[.5,0,0]}});return n0(e,{uniforms:i,vertexShader:KD,fragmentShader:YD}),new os(e).onClone(t=>{Lt.add(n=>{t.rotation.set(-Math.PI/2+Math.sin(n*.01)*.05,Math.cos(n*.01)*.05,0)})})},ZD={createModel:()=>{const i=new ze;return nr("models/sky_pano_-_grand_canyon_yuma_point.glb",4).then(e=>{Lt.add(t=>{e.rotation.y=t*1e-4}),i.add(vn(e,{rotateX:-Math.PI/2,position:{setY:-.5}}),new pu(16777215,.025),vn(new Ba(16117434,1.6),{position:{set:[.3,1,-1]}}),Cr("fog")?OD():new ze)}).catch(console.error),i},visible:()=>Me().availableNews.has("aliensComing"),createEnemyPools:async()=>{const i=await Xs({alive:Jd(!0).then(e=>e.onAllocate(t=>({name:"Bird",time:0,hp:15*(1+Math.random())*500**Me().transcendence,update:()=>{t.position.x-=.01},onKilled:()=>{i.dead.allocate().position.copy(t.position)},radius:.03,money:1*500**Me().transcendence}))),dead:Jd(!1).then(e=>e.onAllocate(()=>({time:0}))),weatherAlive:Sa().then(e=>e.onAllocate(t=>({name:"Weather Effect UFO",time:0,hp:1500*500**Me().transcendence,update:()=>{},onKilled:()=>{i.weatherDead.allocate().position.copy(t.position),Me().stopWeatherEffect(),Me().completeTutorial("weatherEffect")},radius:.03,money:1e3*500**Me().transcendence}))),weatherDead:Sa().then(e=>e.onAllocate(()=>({time:0}))),spawn:e=>{e%5===0&&i.alive.allocate().position.set(2,0,e*.06%1*($s-di)+di),Me().getWeather()?.enabled&&i.weatherAlive.children.length===0&&i.weatherAlive.allocate().position.set(1,0,Math.random()*($s-di)+di)}});return i}},QD=`
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
`,JD=`

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,eP={createModel:()=>{const i={u_resolution:{value:new he(window.innerWidth,window.innerHeight)},time:{value:0}};return Lt.add(e=>{i.time.value=e}),window.addEventListener("resize",()=>{i.u_resolution.value.set(window.innerWidth,window.innerHeight)}),new ze().add(new se(new lt(4,4,4),new dt({uniforms:i,side:Vt,vertexShader:JD,fragmentShader:QD})),new pu(11184895,.2),vn(new Ba(16117434,.4),{position:{set:[.3,1,-1]}}))},visible:()=>Me().availableNews.has("aliensComing"),createEnemyPools:async()=>{const i=await Xs({alive:Sa().then(e=>e.onAllocate(t=>({name:"UFO",time:0,hp:300*(1+Math.random())*500**Me().transcendence,update:()=>{t.userData.time%80<=3?t.scale.copy(t.getOriginalScale().multiply(new D(1,1-t.userData.time%80/3,1))):t.userData.time%80===4?(t.position.x-=.35+Math.random()*.2,t.position.z=Math.max(di,Math.min($s,t.position.z+(Math.random()-.5)*.2))):t.userData.time%80<=7?t.scale.copy(t.getOriginalScale().multiply(new D(1,(t.userData.time%80-4)/3,1))):t.position.x-=.005},onKilled:()=>{i.dead.allocate().position.copy(t.position)},radius:.03,money:100*500**Me().transcendence}))),dead:Sa().then(e=>e.onAllocate(()=>({time:0}))),spawn:e=>{e%31===0&&Me().availableNews.has("aliensComing")&&i.alive.allocate().position.set(2,0,e*.06%1*($s-di)+di)}});return i}},tP=`
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
`,nP=`

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,iP={createModel:()=>{const i={u_resolution:{value:new he(window.innerWidth,window.innerHeight)},time:{value:0}};return Lt.add(e=>{i.time.value=e}),window.addEventListener("resize",()=>{i.u_resolution.value.set(window.innerWidth,window.innerHeight)}),as(new ze().add(new se(new lt(8,8,8),new dt({uniforms:i,side:Vt,vertexShader:nP,fragmentShader:tP})),new pu(11184895,.2),vn(new Ba(16117434,.4),{position:{set:[.3,1,-1]}})))},visible:()=>Me().availableNews.has("aliensComing")&&Me().upgrades["ATK\xD72"]>0,createEnemyPools:async()=>{const i=await Xs({alive:tp().then(e=>e.onAllocate(t=>({name:"Planet",time:0,hp:15e4*500**Me().transcendence,update:()=>{},onKilled:()=>{i.dead.allocate().position.copy(t.position),Me().defeatedFinalBoss()},radius:1,money:1e4*500**Me().transcendence}))),dead:tp().then(e=>e.onAllocate(()=>({time:0}))),spawn:e=>{i.alive.children.length===0&&!Me().canTranscend&&i.alive.allocate().position.set(4,0,0)}});return i}},Ta={Earth:ZD,Universe:eP,Final:iP};Mg();const np=new Map(wa(zg).map((i,e)=>[i,e])),rP=()=>{const i=ot(ct,e=>[...e.availableTutorials.difference(e.completedTutorials)].sort((t,n)=>np.get(t)-np.get(n))[0]);return q("div",{style:{opacity:i===void 0?"0":"1"},class:"absolute w-full text-center top-[70%] text-white bg-slate-800 bg-opacity-70 select-none [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none z-10",children:i&&q(It,{children:[q("i",{class:"ti ti-message-report"})," ",q("span",{class:"[&>b]:text-orange-300",dangerouslySetInnerHTML:{__html:zg[i]}})]})})},jc=no()(Su(io((i,e)=>({news:null,showNews:t=>{i(n=>{n.news=[...t]})},hideNews:()=>{i(t=>{t.news=null})}})),{name:"acgDOMStore",version:1,serialize:i=>Dn.stringify(i),deserialize:i=>Dn.parse(i)})),qi=no()(io((i,e)=>({loadingMessage:new Map,enemyStatus:null,setLoadingMessage:(t,n)=>{i(r=>{r.loadingMessage.set(t,n)})},removeLoadingMessage:t=>{i(n=>{n.loadingMessage.delete(t)})},setEnemyStatus:t=>{i(n=>{n.enemyStatus=t,n.enemyStatus.hp=Math.max(0,Math.round(n.enemyStatus.hp))})}}))),ip=i=>{i.target===i.currentTarget&&i.currentTarget.close()},sP=Array(1e4).fill(0).map(()=>Array(Math.floor(Math.random()*6)+2).fill(0).map(()=>"abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)]).join("")).join(" "),oP=()=>{const i=ot(qi,e=>e.enemyStatus,Ma);return i?q("div",{class:"px-3 pt-1 pb-3 window mt-1 mb-1",children:[q("h2",{class:"mb-2",children:[q("i",{class:"ti ti-chart-line"})," Enemy Stats"]}),q("div",{children:q("table",{children:[q("tr",{children:[q("td",{class:"pr-1",children:q("i",{class:"ti ti-float-none"})}),q("td",{children:i.name})]}),q("tr",{children:[q("td",{class:"pr-1",children:q("i",{class:"ti ti-heart"})}),q("td",{children:i.hp})]}),q("tr",{children:[q("td",{class:"pr-1",children:q("i",{class:"ti ti-moneybag"})}),q("td",{children:i.money})]})]})})]}):q(It,{})},aP=()=>{const i=ot(jc),e=Vs(null),t=Vs(null),[n,r]=ns(""),s=ot(ct,()=>Gg(ro(Ta).map(([l,h])=>[l,h.visible()])),Ma),o=ot(qi,l=>l.loadingMessage),a=ot(ct,l=>l.getWeather(),Ma),c=ot(ct,l=>Math.ceil((l.weatherEffectWillBeEnabledInLessThan[l.stage]??Number.MAX_SAFE_INTEGER)/ya/60)),u=ot(ct,l=>l.transcending);return Hs(()=>{for(const l of["./audio/credit.html","./models/credit.html","./font/credit.html","./lib_credit.html","./lib_credit2.html"])fetch(l).then(h=>h.text()).then(h=>{r(f=>f+zC.link(h))}).catch(console.error)},[]),Hs(()=>{i.news!==null&&setTimeout(()=>{e.current.style.opacity="0",e.current.showModal(),e.current.style.opacity="1",e.current.addEventListener("close",()=>{jc.getState().hideNews(),Me().addTutorial("nextStage")},{once:!0})},2e3)},[i.news]),u?q("div",{class:"absolute window w-full h-full",children:q("div",{class:"m-auto w-fit h-fit text-center p-[30vh]",children:[q("h2",{children:"Transcending..."}),q("p",{class:"my-4",children:"Enemies in the next world will have 500x the HP and money."}),q("div",{class:"float-right",children:[q("span",{class:"gold",children:q("button",{class:"px-8",onClick:()=>{Me().confirmTranscending()},children:"Confirm"})}),q("button",{class:"px-8 ml-2",onClick:()=>{Me().cancelTranscending()},children:"Cancel"})]})]})}):q(It,{children:[q(m3,{}),q(rP,{}),q("div",{class:"absolute right-1 top-1 min-w-[13rem]",children:[ba(s).some(l=>l)&&q("div",{class:"px-3 pt-1 pb-3 window",children:[q("h2",{class:"mb-2",children:[q("i",{class:"ti ti-map-2"})," Stages"]}),q("div",{children:wa(Ta).map(l=>q("button",{tabIndex:-1,class:"w-full mb-1",onClick:()=>{Me().setStageTransitingTo(l)},disabled:!s[l],children:s[l]?l:"???"}))})]}),a!==null&&q("div",{class:"px-3 pt-1 pb-3 window mt-1 mb-1",children:[q("h2",{class:"mb-2",children:[q("i",{class:"ti ti-sun"})," Weather"]}),q("div",{children:q("table",{children:[q("tr",{children:[q("td",{class:"pr-1",children:!a.enabled&&">"}),q("td",{class:a.enabled?"":"font-bold",children:"Normal"})]}),q("tr",{children:[q("td",{class:"pr-1",children:a.enabled&&">"}),q("td",{class:a.enabled?"font-bold":"",children:[a.name,!a.enabled&&q(It,{children:[" (in ","<"+c," min",c!==1&&"s",")"]})]})]})]})})]}),q(oP,{})]}),q(A3,{}),q("div",{class:"absolute left-1 bottom-1 px-5 pb-1 window",children:[q("span",{class:"cursor-pointer",onClick:()=>{t.current.showModal()},children:[q("i",{class:"ti ti-license"})," Credit"]}),q("span",{class:"cursor-pointer text-red-400 ml-5",onClick:()=>{confirm("Are you sure you want to reset your save data?")&&(f3(),location.reload())},children:[q("i",{class:"ti ti-eraser"})," Reset Progress"]})]}),q("dialog",{ref:t,class:"window p-2",onClick:ip,children:q("div",{class:"p-5",children:[q("h1",{class:"text-xl mb-2",children:"Credits"}),q("ul",{dangerouslySetInnerHTML:{__html:n??""},class:"w-full h-full block [&_li]:mb-2 [&_h2]:font-bold [&_a]:text-violet-300 select-text list-disc ml-5"})]})}),q("dialog",{ref:e,class:"bg-gray-100 w-[400px] h-[620px] p-5 box-border shadow-2xl select-none [transition:opacity_ease_0.3s]",onClick:ip,children:i.news&&q("div",{class:"[line-height:1.2] [font-size:12px] text-justify overflow-y-hidden  h-full",children:[q("h2",{class:"text-lg font-bold mb-4 [border-bottom:3px_solid_rgb(130,130,130)] text-center",children:i.news[0]}),q("span",{children:i.news[1]}),q("span",{class:"text-gray-500",children:sP})]})}),o.size>0&&q("div",{class:"text-white absolute top-[35%] left-0 w-full text-center whitespace-pre",children:[...o.values()].join(`
`)})]})};Ur(q(aP,{}),document.body);{const i=new BroadcastChannel("acg");i.addEventListener("message",e=>{e.data==="hello"&&(location.href="./tab_already_open.html")}),i.postMessage("hello")}const Hi=new UE,$r=i=>(Hi.add(i),i),Tt=$r(await bD());Hi.add(RD(Tt),HD(Tt));for(const[i,e]of ro(Ta)){const t=$r(e.createModel());t.visible=Me().stage===i,ss((n,r)=>{n.stage!==r.stage&&(t.visible=n.stage===i)})}const Vi=vn(new Bt(70,window.innerWidth/window.innerHeight,.01,10),{position:{set:[-.5,.6,0]}}),Go=await Xs({hammers:kD(Tt).then($r),enemies:Xs(Gg(ro(Ta).map(([i,e])=>[i,e.createEnemyPools().then(t=>{for(const n of ba(t))n instanceof ze&&$r(n);return t})])))});{const i=ba(Go.enemies).flatMap(r=>r.weatherAlive?[r.alive,r.weatherAlive]:[r.alive]),e=ba(Go.enemies).flatMap(r=>r.weatherDead?[r.dead,r.weatherDead]:[r.dead]),t=$r(new os(as(new se(new hu(.006),new dn({color:16738047}))))),n=new WeakMap;ss((r,s)=>{if(!(r.stage===s.stage&&r.transcendence===s.transcendence)){for(const o of i.flatMap(a=>a.children))n.get(o)?.free();for(const o of[...i.flatMap(a=>a.children),...e.flatMap(a=>a.children)])o.free()}}),ts.add(r=>{Go.enemies[Me().stage].spawn(r);for(const o of i.flatMap(a=>a.children)){o.userData.update();for(const a of Go.hammers?.children??[])a.position.distanceTo(o.position)<o.userData.radius+.02&&(o.userData.hp-=Uc(Me()).Hammer??0,a.free());Math.abs(o.position.z-Tt.position.z)<o.userData.radius&&Math.abs(o.position.y-Tt.position.y)<o.userData.radius&&o.position.x>Tt.position.x?(n.emplace(o,{insert:()=>t.allocate()}).position.copy(o.position).setZ(Tt.position.z),o.userData.hp-=Uc(Me()).Laser,qi.getState().setEnemyStatus({hp:o.userData.hp,name:o.userData.name,money:o.userData.money})):n.has(o)&&(n.get(o).free(),n.delete(o)),(o.position.x<-1||o.userData.hp<=0)&&(o.userData.hp<=0&&(o.userData.onKilled(),Me().addMoney(o.userData.money)),o.free(),n.get(o)?.free(),n.delete(o)),o.userData.time++}for(const o of e.flatMap(a=>a.children))o.position.y-=.001*o.userData.time,o.rotateZ(.1*(Math.random()-.5)),o.userData.time++,o.userData.time>100&&o.free();const s=(o,a)=>o.length===0?void 0:o.reduce((c,u)=>a(c)<a(u)?c:u,o[0]);(!Tt.userData.autopilotTarget||!i.flatMap(o=>o.children).includes(Tt.userData.autopilotTarget)||Tt.userData.autopilotTarget.position.x<Tt.position.x)&&(Tt.userData.autopilotTarget=s(i.flatMap(o=>o.children).filter(o=>o.position.x>Tt.position.x+.3&&o.userData.name!=="Weather Effect UFO"),o=>o.position.x)),Me().countdown()})}qi.getState().setLoadingMessage("loadingModels","Loading models...");await new Promise(i=>setTimeout(i,0));$r(VD());const gi=new dm({antialias:!0});gi.outputEncoding=je;gi.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(gi.domElement);const Ii=new Mm(gi),i0=qD();{const i=new A2(Hi,Vi);Ii.addPass(i),Cr("unrealbloom")&&Ii.addPass(new Xi(new he(256,256),.2,0,0)),Cr("selective unrealbloom")&&Ii.addPass(DD(gi,Vi,i)),Cr("rain")&&Ii.addPass(jD(Vi,Cr("rain.blur"))),Ii.addPass(i0.pass)}ts.add(()=>{Me().stageTransitingTo!==null&&(Tt.position.x+=.01+Math.max(0,Tt.position.x)*.08,Hi.rotateY(.02),Hi.rotateZ(-.003),Tt.position.x>2&&i0.play(()=>{Tt.position.x=0,Hi.rotation.set(0,0,0)}))});window.addEventListener("resize",()=>{Vi.aspect=window.innerWidth/window.innerHeight,Vi.updateProjectionMatrix(),gi.setSize(window.innerWidth,window.innerHeight),Ii.setSize(window.innerWidth,window.innerHeight)});const lP=null;{const i=C3(Vi,gi,Hi),e={render:0,update:0};let t=0;gi.setAnimationLoop(n=>{if(Vi.lookAt(Me().stage==="Final"?new D(.5,0,0):new D(0,0,0)),lP?.update(),i()||Me().transcending)e.update=e.render=Date.now();else{const r=Math.floor((n-e.update)/(1e3/ya));e.update+=r*(1e3/ya);for(let o=0;o<r;o++)ts.forEach(a=>a(t)),t++;const s=n-e.render;e.render=n,Lt.forEach(o=>o(n,s))}Tm.forEach(r=>r()),Ii.render()})}qi.getState().removeLoadingMessage("loadingModels");Me().addTutorial("wasd");window.addEventListener("keyup",i=>{["KeyW","KeyS","KeyA","KeyD"].includes(i.code)&&Me().availableTutorials.has("wasd")&&Me().completeTutorial("wasd")});window.dispatchEvent(new UIEvent("resize"));
