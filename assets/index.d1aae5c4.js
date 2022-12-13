/* empty css              */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function of(i){var e=i.default;if(typeof e=="function"){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var Ws=function(i){return i&&i.Math==Math&&i},$n=Ws(typeof globalThis=="object"&&globalThis)||Ws(typeof window=="object"&&window)||Ws(typeof self=="object"&&self)||Ws(typeof Zc=="object"&&Zc)||function(){return this}()||Function("return this")(),sc={},jn=function(i){try{return!!i()}catch{return!0}},ag=jn,Wi=!ag(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),lg=jn,oc=!lg(function(){var i=function(){}.bind();return typeof i!="function"||i.hasOwnProperty("prototype")}),cg=oc,$s=Function.prototype.call,Xt=cg?$s.bind($s):function(){return $s.apply($s,arguments)},af={},lf={}.propertyIsEnumerable,cf=Object.getOwnPropertyDescriptor,ug=cf&&!lf.call({1:2},1);af.f=ug?function(e){var t=cf(this,e);return!!t&&t.enumerable}:lf;var uf=function(i,e){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:e}},df=oc,hf=Function.prototype,Cl=hf.call,dg=df&&hf.bind.bind(Cl,Cl),Cn=df?dg:function(i){return function(){return Cl.apply(i,arguments)}},ff=Cn,hg=ff({}.toString),fg=ff("".slice),ac=function(i){return fg(hg(i),8,-1)},pg=Cn,mg=jn,gg=ac,_a=Object,vg=pg("".split),_g=mg(function(){return!_a("z").propertyIsEnumerable(0)})?function(i){return gg(i)=="String"?vg(i,""):_a(i)}:_a,ea=function(i){return i==null},xg=ea,yg=TypeError,pf=function(i){if(xg(i))throw yg("Can't call method on "+i);return i},bg=_g,wg=pf,lc=function(i){return bg(wg(i))},Dl=typeof document=="object"&&document.all,Sg=typeof Dl>"u"&&Dl!==void 0,mf={all:Dl,IS_HTMLDDA:Sg},gf=mf,Mg=gf.all,Kt=gf.IS_HTMLDDA?function(i){return typeof i=="function"||i===Mg}:function(i){return typeof i=="function"},Jc=Kt,vf=mf,Tg=vf.all,Rs=vf.IS_HTMLDDA?function(i){return typeof i=="object"?i!==null:Jc(i)||i===Tg}:function(i){return typeof i=="object"?i!==null:Jc(i)},xa=$n,Eg=Kt,Ag=function(i){return Eg(i)?i:void 0},qn=function(i,e){return arguments.length<2?Ag(xa[i]):xa[i]&&xa[i][e]},Cg=Cn,_f=Cg({}.isPrototypeOf),Dg=qn,Rg=Dg("navigator","userAgent")||"",xf=$n,ya=Rg,Qc=xf.process,eu=xf.Deno,tu=Qc&&Qc.versions||eu&&eu.version,nu=tu&&tu.v8,un,Io;nu&&(un=nu.split("."),Io=un[0]>0&&un[0]<4?1:+(un[0]+un[1]));!Io&&ya&&(un=ya.match(/Edge\/(\d+)/),(!un||un[1]>=74)&&(un=ya.match(/Chrome\/(\d+)/),un&&(Io=+un[1])));var Lg=Io,iu=Lg,Pg=jn,yf=!!Object.getOwnPropertySymbols&&!Pg(function(){var i=Symbol();return!String(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&iu&&iu<41}),Ig=yf,bf=Ig&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Fg=qn,Ng=Kt,Og=_f,kg=bf,Bg=Object,wf=kg?function(i){return typeof i=="symbol"}:function(i){var e=Fg("Symbol");return Ng(e)&&Og(e.prototype,Bg(i))},Ug=String,ta=function(i){try{return Ug(i)}catch{return"Object"}},zg=Kt,Vg=ta,Hg=TypeError,gn=function(i){if(zg(i))return i;throw Hg(Vg(i)+" is not a function")},Gg=gn,Wg=ea,cc=function(i,e){var t=i[e];return Wg(t)?void 0:Gg(t)},ba=Xt,wa=Kt,Sa=Rs,$g=TypeError,jg=function(i,e){var t,n;if(e==="string"&&wa(t=i.toString)&&!Sa(n=ba(t,i))||wa(t=i.valueOf)&&!Sa(n=ba(t,i))||e!=="string"&&wa(t=i.toString)&&!Sa(n=ba(t,i)))return n;throw $g("Can't convert object to primitive value")},uc={exports:{}},ru=$n,qg=Object.defineProperty,dc=function(i,e){try{qg(ru,i,{value:e,configurable:!0,writable:!0})}catch{ru[i]=e}return e},Xg=$n,Kg=dc,su="__core-js_shared__",Yg=Xg[su]||Kg(su,{}),hc=Yg,ou=hc;(uc.exports=function(i,e){return ou[i]||(ou[i]=e!==void 0?e:{})})("versions",[]).push({version:"3.26.1",mode:"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Zg=pf,Jg=Object,Qg=function(i){return Jg(Zg(i))},e0=Cn,t0=Qg,n0=e0({}.hasOwnProperty),$i=Object.hasOwn||function(e,t){return n0(t0(e),t)},i0=Cn,r0=0,s0=Math.random(),o0=i0(1 .toString),Sf=function(i){return"Symbol("+(i===void 0?"":i)+")_"+o0(++r0+s0,36)},a0=$n,l0=uc.exports,au=$i,c0=Sf,lu=yf,Mf=bf,Qi=l0("wks"),Li=a0.Symbol,cu=Li&&Li.for,u0=Mf?Li:Li&&Li.withoutSetter||c0,Vr=function(i){if(!au(Qi,i)||!(lu||typeof Qi[i]=="string")){var e="Symbol."+i;lu&&au(Li,i)?Qi[i]=Li[i]:Mf&&cu?Qi[i]=cu(e):Qi[i]=u0(e)}return Qi[i]},d0=Xt,uu=Rs,du=wf,h0=cc,f0=jg,p0=Vr,m0=TypeError,g0=p0("toPrimitive"),v0=function(i,e){if(!uu(i)||du(i))return i;var t=h0(i,g0),n;if(t){if(e===void 0&&(e="default"),n=d0(t,i,e),!uu(n)||du(n))return n;throw m0("Can't convert object to primitive value")}return e===void 0&&(e="number"),f0(i,e)},_0=v0,x0=wf,Tf=function(i){var e=_0(i,"string");return x0(e)?e:e+""},y0=$n,hu=Rs,Rl=y0.document,b0=hu(Rl)&&hu(Rl.createElement),w0=function(i){return b0?Rl.createElement(i):{}},S0=Wi,M0=jn,T0=w0,Ef=!S0&&!M0(function(){return Object.defineProperty(T0("div"),"a",{get:function(){return 7}}).a!=7}),E0=Wi,A0=Xt,C0=af,D0=uf,R0=lc,L0=Tf,P0=$i,I0=Ef,fu=Object.getOwnPropertyDescriptor;sc.f=E0?fu:function(e,t){if(e=R0(e),t=L0(t),I0)try{return fu(e,t)}catch{}if(P0(e,t))return D0(!A0(C0.f,e,t),e[t])};var na={},F0=Wi,N0=jn,O0=F0&&N0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),k0=Rs,B0=String,U0=TypeError,zt=function(i){if(k0(i))return i;throw U0(B0(i)+" is not an object")},z0=Wi,V0=Ef,H0=O0,js=zt,pu=Tf,G0=TypeError,Ma=Object.defineProperty,W0=Object.getOwnPropertyDescriptor,Ta="enumerable",Ea="configurable",Aa="writable";na.f=z0?H0?function(e,t,n){if(js(e),t=pu(t),js(n),typeof e=="function"&&t==="prototype"&&"value"in n&&Aa in n&&!n[Aa]){var r=W0(e,t);r&&r[Aa]&&(e[t]=n.value,n={configurable:Ea in n?n[Ea]:r[Ea],enumerable:Ta in n?n[Ta]:r[Ta],writable:!1})}return Ma(e,t,n)}:Ma:function(e,t,n){if(js(e),t=pu(t),js(n),V0)try{return Ma(e,t,n)}catch{}if("get"in n||"set"in n)throw G0("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var $0=Wi,j0=na,q0=uf,Af=$0?function(i,e,t){return j0.f(i,e,q0(1,t))}:function(i,e,t){return i[e]=t,i},Cf={exports:{}},Ll=Wi,X0=$i,Df=Function.prototype,K0=Ll&&Object.getOwnPropertyDescriptor,fc=X0(Df,"name"),Y0=fc&&function(){}.name==="something",Z0=fc&&(!Ll||Ll&&K0(Df,"name").configurable),J0={EXISTS:fc,PROPER:Y0,CONFIGURABLE:Z0},Q0=Cn,ev=Kt,Pl=hc,tv=Q0(Function.toString);ev(Pl.inspectSource)||(Pl.inspectSource=function(i){return tv(i)});var Rf=Pl.inspectSource,nv=$n,iv=Kt,mu=nv.WeakMap,rv=iv(mu)&&/native code/.test(String(mu)),sv=uc.exports,ov=Sf,gu=sv("keys"),av=function(i){return gu[i]||(gu[i]=ov(i))},Lf={},lv=rv,Pf=$n,cv=Rs,uv=Af,Ca=$i,Da=hc,dv=av,hv=Lf,vu="Object already initialized",Il=Pf.TypeError,fv=Pf.WeakMap,Fo,gs,No,pv=function(i){return No(i)?gs(i):Fo(i,{})},mv=function(i){return function(e){var t;if(!cv(e)||(t=gs(e)).type!==i)throw Il("Incompatible receiver, "+i+" required");return t}};if(lv||Da.state){var xn=Da.state||(Da.state=new fv);xn.get=xn.get,xn.has=xn.has,xn.set=xn.set,Fo=function(i,e){if(xn.has(i))throw Il(vu);return e.facade=i,xn.set(i,e),e},gs=function(i){return xn.get(i)||{}},No=function(i){return xn.has(i)}}else{var er=dv("state");hv[er]=!0,Fo=function(i,e){if(Ca(i,er))throw Il(vu);return e.facade=i,uv(i,er,e),e},gs=function(i){return Ca(i,er)?i[er]:{}},No=function(i){return Ca(i,er)}}var gv={set:Fo,get:gs,has:No,enforce:pv,getterFor:mv},vv=jn,_v=Kt,qs=$i,Fl=Wi,xv=J0.CONFIGURABLE,yv=Rf,If=gv,bv=If.enforce,wv=If.get,Mo=Object.defineProperty,Sv=Fl&&!vv(function(){return Mo(function(){},"length",{value:8}).length!==8}),Mv=String(String).split("String"),Tv=Cf.exports=function(i,e,t){String(e).slice(0,7)==="Symbol("&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!qs(i,"name")||xv&&i.name!==e)&&(Fl?Mo(i,"name",{value:e,configurable:!0}):i.name=e),Sv&&t&&qs(t,"arity")&&i.length!==t.arity&&Mo(i,"length",{value:t.arity});try{t&&qs(t,"constructor")&&t.constructor?Fl&&Mo(i,"prototype",{writable:!1}):i.prototype&&(i.prototype=void 0)}catch{}var n=bv(i);return qs(n,"source")||(n.source=Mv.join(typeof e=="string"?e:"")),i};Function.prototype.toString=Tv(function(){return _v(this)&&wv(this).source||yv(this)},"toString");var Ev=Kt,Av=na,Cv=Cf.exports,Dv=dc,Rv=function(i,e,t,n){n||(n={});var r=n.enumerable,s=n.name!==void 0?n.name:e;if(Ev(t)&&Cv(t,s,n),n.global)r?i[e]=t:Dv(e,t);else{try{n.unsafe?i[e]&&(r=!0):delete i[e]}catch{}r?i[e]=t:Av.f(i,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return i},Ff={},Lv=Math.ceil,Pv=Math.floor,Iv=Math.trunc||function(e){var t=+e;return(t>0?Pv:Lv)(t)},Fv=Iv,Nf=function(i){var e=+i;return e!==e||e===0?0:Fv(e)},Nv=Nf,Ov=Math.max,kv=Math.min,Bv=function(i,e){var t=Nv(i);return t<0?Ov(t+e,0):kv(t,e)},Uv=Nf,zv=Math.min,Vv=function(i){return i>0?zv(Uv(i),9007199254740991):0},Hv=Vv,Of=function(i){return Hv(i.length)},Gv=lc,Wv=Bv,$v=Of,_u=function(i){return function(e,t,n){var r=Gv(e),s=$v(r),o=Wv(n,s),a;if(i&&t!=t){for(;s>o;)if(a=r[o++],a!=a)return!0}else for(;s>o;o++)if((i||o in r)&&r[o]===t)return i||o||0;return!i&&-1}},jv={includes:_u(!0),indexOf:_u(!1)},qv=Cn,Ra=$i,Xv=lc,Kv=jv.indexOf,Yv=Lf,xu=qv([].push),Zv=function(i,e){var t=Xv(i),n=0,r=[],s;for(s in t)!Ra(Yv,s)&&Ra(t,s)&&xu(r,s);for(;e.length>n;)Ra(t,s=e[n++])&&(~Kv(r,s)||xu(r,s));return r},Jv=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Qv=Zv,e_=Jv,t_=e_.concat("length","prototype");Ff.f=Object.getOwnPropertyNames||function(e){return Qv(e,t_)};var kf={};kf.f=Object.getOwnPropertySymbols;var n_=qn,i_=Cn,r_=Ff,s_=kf,o_=zt,a_=i_([].concat),l_=n_("Reflect","ownKeys")||function(e){var t=r_.f(o_(e)),n=s_.f;return n?a_(t,n(e)):t},yu=$i,c_=l_,u_=sc,d_=na,h_=function(i,e,t){for(var n=c_(e),r=d_.f,s=u_.f,o=0;o<n.length;o++){var a=n[o];!yu(i,a)&&!(t&&yu(t,a))&&r(i,a,s(e,a))}},f_=jn,p_=Kt,m_=/#|\.prototype\./,Ls=function(i,e){var t=v_[g_(i)];return t==x_?!0:t==__?!1:p_(e)?f_(e):!!e},g_=Ls.normalize=function(i){return String(i).replace(m_,".").toLowerCase()},v_=Ls.data={},__=Ls.NATIVE="N",x_=Ls.POLYFILL="P",y_=Ls,La=$n,b_=sc.f,w_=Af,S_=Rv,M_=dc,T_=h_,E_=y_,Xn=function(i,e){var t=i.target,n=i.global,r=i.stat,s,o,a,l,c,u;if(n?o=La:r?o=La[t]||M_(t,{}):o=(La[t]||{}).prototype,o)for(a in e){if(c=e[a],i.dontCallGetSet?(u=b_(o,a),l=u&&u.value):l=o[a],s=E_(n?a:t+(r?".":"#")+a,i.forced),!s&&l!==void 0){if(typeof c==typeof l)continue;T_(c,l)}(i.sham||l&&l.sham)&&w_(c,"sham",!0),S_(o,a,c,i)}},Xs=Xt,Pa=gn,A_=zt,Bf=function(e,t){var n=A_(this),r=Pa(n.get),s=Pa(n.has),o=Pa(n.set),a,l;return Xs(s,n,e)?(a=Xs(r,n,e),"update"in t&&(a=t.update(a,e,n),Xs(o,n,e,a)),a):(l=t.insert(e,n),Xs(o,n,e,l),l)},C_=Xn,D_=Bf;C_({target:"Map",proto:!0,real:!0,forced:!0},{emplace:D_});var R_=Xn,L_=Bf;R_({target:"WeakMap",proto:!0,real:!0,forced:!0},{emplace:L_});var P_=Vr,I_=P_("toStringTag"),Uf={};Uf[I_]="z";var F_=String(Uf)==="[object z]",N_=F_,O_=Kt,To=ac,k_=Vr,B_=k_("toStringTag"),U_=Object,z_=To(function(){return arguments}())=="Arguments",V_=function(i,e){try{return i[e]}catch{}},zf=N_?To:function(i){var e,t,n;return i===void 0?"Undefined":i===null?"Null":typeof(t=V_(e=U_(i),B_))=="string"?t:z_?To(e):(n=To(e))=="Object"&&O_(e.callee)?"Arguments":n},H_=Cn,G_=jn,Vf=Kt,W_=zf,$_=qn,j_=Rf,Hf=function(){},q_=[],Gf=$_("Reflect","construct"),pc=/^\s*(?:class|function)\b/,X_=H_(pc.exec),K_=!pc.exec(Hf),Zr=function(e){if(!Vf(e))return!1;try{return Gf(Hf,q_,e),!0}catch{return!1}},Wf=function(e){if(!Vf(e))return!1;switch(W_(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return K_||!!X_(pc,j_(e))}catch{return!0}};Wf.sham=!0;var Y_=!Gf||G_(function(){var i;return Zr(Zr.call)||!Zr(Object)||!Zr(function(){i=!0})||i})?Wf:Zr,Z_=Y_,J_=ta,Q_=TypeError,ex=function(i){if(Z_(i))return i;throw Q_(J_(i)+" is not a constructor")},bu=zt,tx=ex,nx=ea,ix=Vr,rx=ix("species"),ia=function(i,e){var t=bu(i).constructor,n;return t===void 0||nx(n=bu(t)[rx])?e:tx(n)},sx=ac,ox=Cn,ax=function(i){if(sx(i)==="Function")return ox(i)},wu=ax,lx=gn,cx=oc,ux=wu(wu.bind),dx=function(i,e){return lx(i),e===void 0?i:cx?ux(i,e):function(){return i.apply(e,arguments)}},$f={},hx=Vr,fx=$f,px=hx("iterator"),mx=Array.prototype,gx=function(i){return i!==void 0&&(fx.Array===i||mx[px]===i)},vx=zf,Su=cc,_x=ea,xx=$f,yx=Vr,bx=yx("iterator"),jf=function(i){if(!_x(i))return Su(i,bx)||Su(i,"@@iterator")||xx[vx(i)]},wx=Xt,Sx=gn,Mx=zt,Tx=ta,Ex=jf,Ax=TypeError,qf=function(i,e){var t=arguments.length<2?Ex(i):e;if(Sx(t))return Mx(wx(t,i));throw Ax(Tx(i)+" is not iterable")},Cx=Xt,Mu=zt,Dx=cc,Rx=function(i,e,t){var n,r;Mu(i);try{if(n=Dx(i,"return"),!n){if(e==="throw")throw t;return t}n=Cx(n,i)}catch(s){r=!0,n=s}if(e==="throw")throw t;if(r)throw n;return Mu(n),t},Lx=dx,Px=Xt,Ix=zt,Fx=ta,Nx=gx,Ox=Of,Tu=_f,kx=qf,Bx=jf,Eu=Rx,Ux=TypeError,Eo=function(i,e){this.stopped=i,this.result=e},Au=Eo.prototype,ji=function(i,e,t){var n=t&&t.that,r=!!(t&&t.AS_ENTRIES),s=!!(t&&t.IS_RECORD),o=!!(t&&t.IS_ITERATOR),a=!!(t&&t.INTERRUPTED),l=Lx(e,n),c,u,h,d,p,g,m,f=function(y){return c&&Eu(c,"normal",y),new Eo(!0,y)},v=function(y){return r?(Ix(y),a?l(y[0],y[1],f):l(y[0],y[1])):a?l(y,f):l(y)};if(s)c=i.iterator;else if(o)c=i;else{if(u=Bx(i),!u)throw Ux(Fx(i)+" is not iterable");if(Nx(u)){for(h=0,d=Ox(i);d>h;h++)if(p=v(i[h]),p&&Tu(Au,p))return p;return new Eo(!1)}c=kx(i,u)}for(g=s?i.next:c.next;!(m=Px(g,c)).done;){try{p=v(m.value)}catch(y){Eu(c,"throw",y)}if(typeof p=="object"&&p&&Tu(Au,p))return p}return new Eo(!1)},zx=Xn,Vx=qn,Hx=Xt,Gx=gn,Wx=zt,$x=ia,jx=ji;zx({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(e){var t=Wx(this),n=new($x(t,Vx("Set")))(t),r=Gx(n.delete);return jx(e,function(s){Hx(r,n,s)}),n}});var qx=Xn,Xx=qn,Cu=Xt,Du=gn,Kx=zt,Yx=ia,Zx=ji;qx({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(e){var t=Kx(this),n=new(Yx(t,Xx("Set"))),r=Du(t.has),s=Du(n.add);return Zx(e,function(o){Cu(r,t,o)&&Cu(s,n,o)}),n}});var Jx=Xn,Qx=Xt,ey=gn,ty=zt,ny=ji;Jx({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(e){var t=ty(this),n=ey(t.has);return!ny(e,function(r,s){if(Qx(n,t,r)===!0)return s()},{INTERRUPTED:!0}).stopped}});var iy=Xn,ry=qn,sy=Xt,oy=gn,ay=Kt,ly=zt,cy=qf,uy=ji;iy({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(e){var t=cy(this),n=ly(e),r=n.has;return ay(r)||(n=new(ry("Set"))(e),r=oy(n.has)),!uy(t,function(s,o){if(sy(r,n,s)===!1)return o()},{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}});var dy=Xn,hy=Xt,fy=gn,py=zt,my=ji;dy({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(e){var t=py(this),n=fy(t.has);return!my(e,function(r,s){if(hy(n,t,r)===!1)return s()},{INTERRUPTED:!0}).stopped}});var gy=Xn,vy=qn,_y=gn,xy=zt,yy=ia,by=ji;gy({target:"Set",proto:!0,real:!0,forced:!0},{union:function(e){var t=xy(this),n=new(yy(t,vy("Set")))(t);return by(e,_y(n.add),{that:n}),n}});var wy=Xn,Sy=qn,Ru=Xt,Lu=gn,My=zt,Ty=ia,Ey=ji;wy({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(e){var t=My(this),n=new(Ty(t,Sy("Set")))(t),r=Lu(n.delete),s=Lu(n.add);return Ey(e,function(o){Ru(r,n,o)||Ru(s,n,o)}),n}});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mc="147",Ay=0,Pu=1,Cy=2,Xf=1,Dy=2,os=3,ki=0,Ut=1,Un=2,di=0,yr=1,Oo=2,Iu=3,Fu=4,Ry=5,mr=100,Ly=101,Py=102,Nu=103,Ou=104,Iy=200,Fy=201,Ny=202,Oy=203,Kf=204,Yf=205,ky=206,By=207,Uy=208,zy=209,Vy=210,Hy=0,Gy=1,Wy=2,Nl=3,$y=4,jy=5,qy=6,Xy=7,Zf=0,Ky=1,Yy=2,Hn=0,Zy=1,Jy=2,Qy=3,eb=4,tb=5,Jf=300,Er=301,Ar=302,Ol=303,kl=304,ra=306,Cr=1e3,en=1001,ko=1002,wt=1003,Bl=1004,Ul=1005,Bt=1006,Qf=1007,Hr=1008,Bi=1009,nb=1010,ib=1011,ep=1012,rb=1013,Ri=1014,ai=1015,vs=1016,sb=1017,ob=1018,br=1020,ab=1021,lb=1022,tn=1023,cb=1024,ub=1025,Pi=1026,Dr=1027,db=1028,hb=1029,fb=1030,pb=1031,mb=1033,Ia=33776,Fa=33777,Na=33778,Oa=33779,ku=35840,Bu=35841,Uu=35842,zu=35843,gb=36196,Vu=37492,Hu=37496,Gu=37808,Wu=37809,$u=37810,ju=37811,qu=37812,Xu=37813,Ku=37814,Yu=37815,Zu=37816,Ju=37817,Qu=37818,ed=37819,td=37820,nd=37821,id=36492,_s=2300,Rr=2301,ka=2302,rd=2400,sd=2401,od=2402,vb=2500,_b=0,gc=1,Bo=2,Ui=3e3,qe=3001,xb=3200,yb=3201,tp=0,bb=1,bn="srgb",xs="srgb-linear",Ba=7680,wb=519,zl=35044,ad="300 es",Vl=1035;class Gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ld=1234567;const ls=Math.PI/180,ys=180/Math.PI;function dn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ot(i,e,t){return Math.max(e,Math.min(t,i))}function vc(i,e){return(i%e+e)%e}function Sb(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Mb(i,e,t){return i!==e?(t-i)/(e-i):0}function cs(i,e,t){return(1-t)*i+t*e}function Tb(i,e,t,n){return cs(i,e,1-Math.exp(-t*n))}function Eb(i,e=1){return e-Math.abs(vc(i,e*2)-e)}function Ab(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Db(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Rb(i,e){return i+Math.random()*(e-i)}function Lb(i){return i*(.5-Math.random())}function Pb(i){i!==void 0&&(ld=i);let e=ld+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ib(i){return i*ls}function Fb(i){return i*ys}function Hl(i){return(i&i-1)===0&&i!==0}function np(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Uo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nb(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ob=Object.freeze({__proto__:null,DEG2RAD:ls,RAD2DEG:ys,generateUUID:dn,clamp:Ot,euclideanModulo:vc,mapLinear:Sb,inverseLerp:Mb,lerp:cs,damp:Tb,pingpong:Eb,smoothstep:Ab,smootherstep:Cb,randInt:Db,randFloat:Rb,randFloatSpread:Lb,seededRandom:Pb,degToRad:Ib,radToDeg:Fb,isPowerOfTwo:Hl,ceilPowerOfTwo:np,floorPowerOfTwo:Uo,setQuaternionFromProperEuler:Nb,normalize:Ke,denormalize:zn});class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],m=r[0],f=r[3],v=r[6],y=r[1],b=r[4],_=r[7],M=r[2],R=r[5],F=r[8];return s[0]=o*m+a*y+l*M,s[3]=o*f+a*b+l*R,s[6]=o*v+a*_+l*F,s[1]=c*m+u*y+h*M,s[4]=c*f+u*b+h*R,s[7]=c*v+u*_+h*F,s[2]=d*m+p*y+g*M,s[5]=d*f+p*b+g*R,s[8]=d*v+p*_+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*h+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(r*c-u*n)*m,e[2]=(a*n-r*o)*m,e[3]=d*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new qt;function ip(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const za={[bn]:{[xs]:Ii},[xs]:{[bn]:Ao}},It={legacyMode:!0,get workingColorSpace(){return xs},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(za[e]&&za[e][t]!==void 0){const n=za[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dt={r:0,g:0,b:0},sn={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function Va(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ys(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=It.workingColorSpace){if(e=vc(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Va(o,s,e+1/3),this.g=Va(o,s,e),this.b=Va(o,s,e-1/3)}return It.toWorkingColorSpace(this,r),this}setStyle(e,t=bn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,It.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,It.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,It.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,It.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=bn){const n=rp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return It.fromWorkingColorSpace(Ys(this,dt),e),Ot(dt.r*255,0,255)<<16^Ot(dt.g*255,0,255)<<8^Ot(dt.b*255,0,255)<<0}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(Ys(this,dt),t);const n=dt.r,r=dt.g,s=dt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(Ys(this,dt),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=bn){return It.fromWorkingColorSpace(Ys(this,dt),e),e!==bn?`color(${e} ${dt.r} ${dt.g} ${dt.b})`:`rgb(${dt.r*255|0},${dt.g*255|0},${dt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(sn),sn.h+=e,sn.s+=t,sn.l+=n,this.setHSL(sn.h,sn.s,sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(Ks);const n=cs(sn.h,Ks.h,t),r=cs(sn.s,Ks.s,t),s=cs(sn.l,Ks.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ce.NAMES=rp;let tr;class sp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{tr===void 0&&(tr=bs("canvas")),tr.width=e.width,tr.height=e.height;const n=tr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ii(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class op{constructor(e=null){this.isSource=!0,this.uuid=dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ha(r[o].image)):s.push(Ha(r[o]))}else s=Ha(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kb=0;class St extends Gr{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=en,r=en,s=Bt,o=Hr,a=tn,l=Bi,c=St.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=dn(),this.name="",this.source=new op(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Jf;St.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,r=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],m=l[2],f=l[6],v=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,_=(p+1)/2,M=(v+1)/2,R=(u+d)/4,F=(h+m)/4,x=(g+f)/4;return b>_&&b>M?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=R/n,s=F/n):_>M?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=R/r,s=x/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=F/s,r=x/s),this.set(n,r,s,t),this}let y=Math.sqrt((f-g)*(f-g)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(h-m)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hn extends Gr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new St(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new op(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ap extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bb extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==d||c!==p||u!==g){let f=1-a;const v=l*d+c*p+u*g+h*m,y=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const M=Math.sqrt(b),R=Math.atan2(M,v*y);f=Math.sin(f*R)/M,a=Math.sin(a*R)/M}const _=a*y;if(l=l*f+d*_,c=c*f+p*_,u=u*f+g*_,h=h*f+m*_,f===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,d=-s*t-o*n-a*r;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new P,cd=new fi;class qi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)wi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(wi)}else n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox),Wa.applyMatrix4(e.matrixWorld),this.union(Wa);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),Zs.subVectors(this.max,Jr),nr.subVectors(e.a,Jr),ir.subVectors(e.b,Jr),rr.subVectors(e.c,Jr),Yn.subVectors(ir,nr),Zn.subVectors(rr,ir),Si.subVectors(nr,rr);let t=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-Si.z,Si.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,Si.z,0,-Si.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-Si.y,Si.x,0];return!$a(t,nr,ir,rr,Zs)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,nr,ir,rr,Zs))?!1:(Js.crossVectors(Yn,Zn),t=[Js.x,Js.y,Js.z],$a(t,nr,ir,rr,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return wi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new P,new P,new P,new P,new P,new P,new P,new P],wi=new P,Wa=new qi,nr=new P,ir=new P,rr=new P,Yn=new P,Zn=new P,Si=new P,Jr=new P,Zs=new P,Js=new P,Mi=new P;function $a(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Mi.fromArray(i,s);const a=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),u=n.dot(Mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ub=new qi,Qr=new P,ja=new P;class Wr{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ub.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);const t=Qr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Qr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(ja)),this.expandByPoint(Qr.copy(e.center).sub(ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new P,qa=new P,Qs=new P,Jn=new P,Xa=new P,eo=new P,Ka=new P;class _c{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.direction).multiplyScalar(t).add(this.origin),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qa.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(qa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Qs),a=Jn.dot(this.direction),l=-Jn.dot(Qs),c=Jn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const m=1/u;h*=m,d*=m,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Qs).multiplyScalar(d).add(qa),p}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),r=In.dot(In)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,r,s){Xa.subVectors(t,e),eo.subVectors(n,e),Ka.crossVectors(Xa,eo);let o=this.direction.dot(Ka),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const l=a*this.direction.dot(eo.crossVectors(Jn,eo));if(l<0)return null;const c=a*this.direction.dot(Xa.cross(Jn));if(c<0||l+c>o)return null;const u=-a*Jn.dot(Ka);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,h,d,p,g,m,f){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=d,v[3]=p,v[7]=g,v[11]=m,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,m=c*h;t[0]=d+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,m=c*h;t[0]=d-m*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+m,t[1]=l*h,t[5]=m*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-m*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+m,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zb,e,Vb)}lookAt(e,t,n){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Qn.crossVectors(n,Wt),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Qn.crossVectors(n,Wt)),Qn.normalize(),to.crossVectors(Wt,Qn),r[0]=Qn.x,r[4]=to.x,r[8]=Wt.x,r[1]=Qn.y,r[5]=to.y,r[9]=Wt.y,r[2]=Qn.z,r[6]=to.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],m=n[6],f=n[10],v=n[14],y=n[3],b=n[7],_=n[11],M=n[15],R=r[0],F=r[4],x=r[8],E=r[12],N=r[1],$=r[5],Q=r[9],G=r[13],I=r[2],k=r[6],K=r[10],L=r[14],B=r[3],q=r[7],j=r[11],V=r[15];return s[0]=o*R+a*N+l*I+c*B,s[4]=o*F+a*$+l*k+c*q,s[8]=o*x+a*Q+l*K+c*j,s[12]=o*E+a*G+l*L+c*V,s[1]=u*R+h*N+d*I+p*B,s[5]=u*F+h*$+d*k+p*q,s[9]=u*x+h*Q+d*K+p*j,s[13]=u*E+h*G+d*L+p*V,s[2]=g*R+m*N+f*I+v*B,s[6]=g*F+m*$+f*k+v*q,s[10]=g*x+m*Q+f*K+v*j,s[14]=g*E+m*G+f*L+v*V,s[3]=y*R+b*N+_*I+M*B,s[7]=y*F+b*$+_*k+M*q,s[11]=y*x+b*Q+_*K+M*j,s[15]=y*E+b*G+_*L+M*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],m=e[7],f=e[11],v=e[15];return g*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*p-n*l*p)+m*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+f*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+v*(-r*a*u-t*l*h+t*a*d+r*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],m=e[13],f=e[14],v=e[15],y=h*f*c-m*d*c+m*l*p-a*f*p-h*l*v+a*d*v,b=g*d*c-u*f*c-g*l*p+o*f*p+u*l*v-o*d*v,_=u*m*c-g*h*c+g*a*p-o*m*p-u*a*v+o*h*v,M=g*h*l-u*m*l-g*a*d+o*m*d+u*a*f-o*h*f,R=t*y+n*b+r*_+s*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/R;return e[0]=y*F,e[1]=(m*d*s-h*f*s-m*r*p+n*f*p+h*r*v-n*d*v)*F,e[2]=(a*f*s-m*l*s+m*r*c-n*f*c-a*r*v+n*l*v)*F,e[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*p-n*l*p)*F,e[4]=b*F,e[5]=(u*f*s-g*d*s+g*r*p-t*f*p-u*r*v+t*d*v)*F,e[6]=(g*l*s-o*f*s-g*r*c+t*f*c+o*r*v-t*l*v)*F,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*F,e[8]=_*F,e[9]=(g*h*s-u*m*s-g*n*p+t*m*p+u*n*v-t*h*v)*F,e[10]=(o*m*s-g*a*s+g*n*c-t*m*c-o*n*v+t*a*v)*F,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*F,e[12]=M*F,e[13]=(u*m*r-g*h*r+g*n*d-t*m*d-u*n*f+t*h*f)*F,e[14]=(g*a*r-o*m*r-g*n*l+t*m*l+o*n*f-t*a*f)*F,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*d+t*a*d)*F,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,m=o*u,f=o*h,v=a*h,y=l*c,b=l*u,_=l*h,M=n.x,R=n.y,F=n.z;return r[0]=(1-(m+v))*M,r[1]=(p+_)*M,r[2]=(g-b)*M,r[3]=0,r[4]=(p-_)*R,r[5]=(1-(d+v))*R,r[6]=(f+y)*R,r[7]=0,r[8]=(g+b)*F,r[9]=(f-y)*F,r[10]=(1-(d+m))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=sr.set(r[0],r[1],r[2]).length();const o=sr.set(r[4],r[5],r[6]).length(),a=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const c=1/s,u=1/o,h=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,d=(n+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const sr=new P,on=new Pe,zb=new P(0,0,0),Vb=new P(1,1,1),Qn=new P,to=new P,Wt=new P,ud=new Pe,dd=new fi;class Ps{constructor(e=0,t=0,n=0,r=Ps.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ud,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dd.setFromEuler(this),this.setFromQuaternion(dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ps.DefaultOrder="XYZ";Ps.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class lp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hb=0;const hd=new P,or=new fi,Fn=new Pe,no=new P,es=new P,Gb=new P,Wb=new fi,fd=new P(1,0,0),pd=new P(0,1,0),md=new P(0,0,1),$b={type:"added"},gd={type:"removed"};class ke extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DefaultUp.clone();const e=new P,t=new Ps,n=new fi,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pe},normalMatrix:{value:new qt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=ke.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ke.DefaultMatrixWorldAutoUpdate,this.layers=new lp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(fd,e)}rotateY(e){return this.rotateOnAxis(pd,e)}rotateZ(e){return this.rotateOnAxis(md,e)}translateOnAxis(e,t){return hd.copy(e).applyQuaternion(this.quaternion),this.position.add(hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fd,e)}translateY(e){return this.translateOnAxis(pd,e)}translateZ(e){return this.translateOnAxis(md,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?no.copy(e):no.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(es,no,this.up):Fn.lookAt(no,es,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),or.setFromRotationMatrix(Fn),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($b)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(gd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Gb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Wb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ke.DefaultUp=new P(0,1,0);ke.DefaultMatrixAutoUpdate=!0;ke.DefaultMatrixWorldAutoUpdate=!0;const an=new P,Nn=new P,Ya=new P,On=new P,ar=new P,lr=new P,vd=new P,Za=new P,Ja=new P,Qa=new P;class Bn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){an.subVectors(r,t),Nn.subVectors(n,t),Ya.subVectors(e,t);const o=an.dot(an),a=an.dot(Nn),l=an.dot(Ya),c=Nn.dot(Nn),u=Nn.dot(Ya),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,On),On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,On),l.set(0,0),l.addScaledVector(s,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l}static isFrontFacing(e,t,n,r){return an.subVectors(n,t),Nn.subVectors(e,t),an.cross(Nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),an.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Bn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ar.subVectors(r,n),lr.subVectors(s,n),Za.subVectors(e,n);const l=ar.dot(Za),c=lr.dot(Za);if(l<=0&&c<=0)return t.copy(n);Ja.subVectors(e,r);const u=ar.dot(Ja),h=lr.dot(Ja);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ar,o);Qa.subVectors(e,s);const p=ar.dot(Qa),g=lr.dot(Qa);if(g>=0&&p<=g)return t.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(lr,a);const f=u*g-p*h;if(f<=0&&h-u>=0&&p-g>=0)return vd.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(vd,a);const v=1/(f+m+d);return o=m*v,a=d*v,t.copy(n).addScaledVector(ar,o).addScaledVector(lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jb=0;class Tn extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=yr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Kf,this.blendDst=Yf,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mn extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new P,io=new he;class Dt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=zl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class cp extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class up extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qb=0;const Zt=new Pe,el=new ke,cr=new P,$t=new qi,ts=new qi,vt=new P;class Vt extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ip(e)?up:cp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors($t.min,ts.min),$t.expandByPoint(vt),vt.addVectors($t.max,ts.max),$t.expandByPoint(vt)):($t.expandByPoint(ts.min),$t.expandByPoint(ts.max))}$t.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),l&&(cr.fromBufferAttribute(e,c),vt.add(cr)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let N=0;N<a;N++)c[N]=new P,u[N]=new P;const h=new P,d=new P,p=new P,g=new he,m=new he,f=new he,v=new P,y=new P;function b(N,$,Q){h.fromArray(r,N*3),d.fromArray(r,$*3),p.fromArray(r,Q*3),g.fromArray(o,N*2),m.fromArray(o,$*2),f.fromArray(o,Q*2),d.sub(h),p.sub(h),m.sub(g),f.sub(g);const G=1/(m.x*f.y-f.x*m.y);!isFinite(G)||(v.copy(d).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(G),y.copy(p).multiplyScalar(m.x).addScaledVector(d,-f.x).multiplyScalar(G),c[N].add(v),c[$].add(v),c[Q].add(v),u[N].add(y),u[$].add(y),u[Q].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let N=0,$=_.length;N<$;++N){const Q=_[N],G=Q.start,I=Q.count;for(let k=G,K=G+I;k<K;k+=3)b(n[k+0],n[k+1],n[k+2])}const M=new P,R=new P,F=new P,x=new P;function E(N){F.fromArray(s,N*3),x.copy(F);const $=c[N];M.copy($),M.sub(F.multiplyScalar(F.dot($))).normalize(),R.crossVectors(x,$);const G=R.dot(u[N])<0?-1:1;l[N*4]=M.x,l[N*4+1]=M.y,l[N*4+2]=M.z,l[N*4+3]=G}for(let N=0,$=_.length;N<$;++N){const Q=_[N],G=Q.start,I=Q.count;for(let k=G,K=G+I;k<K;k+=3)E(n[k+0]),E(n[k+1]),E(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),m=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,f),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,f=l.length;m<f;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let v=0;v<u;v++)d[g++]=c[p++]}return new Dt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const _d=new Pe,ur=new _c,tl=new Wr,ei=new P,ti=new P,ni=new P,nl=new P,il=new P,rl=new P,ro=new P,so=new P,oo=new P,ao=new he,lo=new he,co=new he,sl=new P,uo=new P;class nt extends ke{constructor(e=new Vt,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(s),e.ray.intersectsSphere(tl)===!1)||(_d.copy(s).invert(),ur.copy(e.ray).applyMatrix4(_d),n.boundingBox!==null&&ur.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,f=p.length;m<f;m++){const v=p[m],y=r[v.materialIndex],b=Math.max(v.start,g.start),_=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let M=b,R=_;M<R;M+=3){const F=a.getX(M),x=a.getX(M+1),E=a.getX(M+2);o=ho(this,y,e,ur,l,c,u,h,d,F,x,E),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let v=m,y=f;v<y;v+=3){const b=a.getX(v),_=a.getX(v+1),M=a.getX(v+2);o=ho(this,r,e,ur,l,c,u,h,d,b,_,M),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,f=p.length;m<f;m++){const v=p[m],y=r[v.materialIndex],b=Math.max(v.start,g.start),_=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let M=b,R=_;M<R;M+=3){const F=M,x=M+1,E=M+2;o=ho(this,y,e,ur,l,c,u,h,d,F,x,E),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let v=m,y=f;v<y;v+=3){const b=v,_=v+1,M=v+2;o=ho(this,r,e,ur,l,c,u,h,d,b,_,M),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function Xb(i,e,t,n,r,s,o,a){let l;if(e.side===Ut?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==Un,a),l===null)return null;uo.copy(a),uo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(uo);return c<t.near||c>t.far?null:{distance:c,point:uo.clone(),object:i}}function ho(i,e,t,n,r,s,o,a,l,c,u,h){ei.fromBufferAttribute(r,c),ti.fromBufferAttribute(r,u),ni.fromBufferAttribute(r,h);const d=i.morphTargetInfluences;if(s&&d){ro.set(0,0,0),so.set(0,0,0),oo.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const f=d[g],v=s[g];f!==0&&(nl.fromBufferAttribute(v,c),il.fromBufferAttribute(v,u),rl.fromBufferAttribute(v,h),o?(ro.addScaledVector(nl,f),so.addScaledVector(il,f),oo.addScaledVector(rl,f)):(ro.addScaledVector(nl.sub(ei),f),so.addScaledVector(il.sub(ti),f),oo.addScaledVector(rl.sub(ni),f)))}ei.add(ro),ti.add(so),ni.add(oo)}i.isSkinnedMesh&&(i.boneTransform(c,ei),i.boneTransform(u,ti),i.boneTransform(h,ni));const p=Xb(i,e,t,n,ei,ti,ni,sl);if(p){a&&(ao.fromBufferAttribute(a,c),lo.fromBufferAttribute(a,u),co.fromBufferAttribute(a,h),p.uv=Bn.getUV(sl,ei,ti,ni,ao,lo,co,new he)),l&&(ao.fromBufferAttribute(l,c),lo.fromBufferAttribute(l,u),co.fromBufferAttribute(l,h),p.uv2=Bn.getUV(sl,ei,ti,ni,ao,lo,co,new he));const g={a:c,b:u,c:h,normal:new P,materialIndex:0};Bn.getNormal(ei,ti,ni,g.normal),p.face=g}return p}class Xi extends Vt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(h,2));function g(m,f,v,y,b,_,M,R,F,x,E){const N=_/F,$=M/x,Q=_/2,G=M/2,I=R/2,k=F+1,K=x+1;let L=0,B=0;const q=new P;for(let j=0;j<K;j++){const V=j*$-G;for(let W=0;W<k;W++){const ne=W*N-Q;q[m]=ne*y,q[f]=V*b,q[v]=I,c.push(q.x,q.y,q.z),q[m]=0,q[f]=0,q[v]=R>0?1:-1,u.push(q.x,q.y,q.z),h.push(W/F),h.push(1-j/x),L+=1}}for(let j=0;j<x;j++)for(let V=0;V<F;V++){const W=d+V+k*j,ne=d+V+k*(j+1),re=d+(V+1)+k*(j+1),U=d+(V+1)+k*j;l.push(W,ne,U),l.push(ne,re,U),B+=6}a.addGroup(p,B,E),p+=B,d+=L}}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=Lr(i[t]);for(const r in n)e[r]=n[r]}return e}function Kb(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dp(i){return i.getRenderTarget()===null&&i.outputEncoding===qe?bn:xs}const zo={clone:Lr,merge:Nt};var Yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ct extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yb,this.fragmentShader=Zb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=Kb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hp extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends hp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ls*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,hr=1;class Jb extends ke{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new kt(dr,hr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new kt(dr,hr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new kt(dr,hr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new kt(dr,hr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new kt(dr,hr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new kt(dr,hr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Hn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class fp extends St{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qb extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new fp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xi(5,5,5),s=new ct({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:di});s.uniforms.tEquirect.value=t;const o=new nt(r,s),a=t.minFilter;return t.minFilter===Hr&&(t.minFilter=Bt),new Jb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const ol=new P,e1=new P,t1=new qt;class Ei{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ol.subVectors(n,t).cross(e1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ol),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||t1.getNormalMatrix(e),r=this.coplanarPoint(ol).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Wr,fo=new P;class xc{constructor(e=new Ei,t=new Ei,n=new Ei,r=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],m=n[11],f=n[12],v=n[13],y=n[14],b=n[15];return t[0].setComponents(a-r,h-l,m-d,b-f).normalize(),t[1].setComponents(a+r,h+l,m+d,b+f).normalize(),t[2].setComponents(a+s,h+c,m+p,b+v).normalize(),t[3].setComponents(a-s,h-c,m-p,b-v).normalize(),t[4].setComponents(a-o,h-u,m-g,b-y).normalize(),t[5].setComponents(a+o,h+u,m+g,b+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(fo.x=r.normal.x>0?e.max.x:e.min.x,fo.y=r.normal.y>0?e.max.y:e.min.y,fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pp(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function n1(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,d=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Is extends Vt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],m=[],f=[];for(let v=0;v<u;v++){const y=v*d-o;for(let b=0;b<c;b++){const _=b*h-s;g.push(_,-y,0),m.push(0,0,1),f.push(b/a),f.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<a;y++){const b=y+c*v,_=y+c*(v+1),M=y+1+c*(v+1),R=y+1+c*v;p.push(b,_,R),p.push(_,M,R)}this.setIndex(p),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(m,3)),this.setAttribute("uv",new Rt(f,2))}static fromJSON(e){return new Is(e.width,e.height,e.widthSegments,e.heightSegments)}}var i1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,r1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,o1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c1="vec3 transformed = vec3( position );",u1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d1=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,h1=`#ifdef USE_IRIDESCENCE
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
#endif`,f1=`#ifdef USE_BUMPMAP
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
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,w1=`#define PI 3.141592653589793
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
}`,S1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M1=`vec3 transformedNormal = objectNormal;
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
#endif`,T1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D1="gl_FragColor = linearToOutputTexel( gl_FragColor );",R1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L1=`#ifdef USE_ENVMAP
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
#endif`,P1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I1=`#ifdef USE_ENVMAP
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
#endif`,F1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,O1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z1=`#ifdef USE_GRADIENTMAP
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
}`,V1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,H1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$1=`uniform bool receiveShadow;
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
#endif`,j1=`#if defined( USE_ENVMAP )
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
#endif`,q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z1=`PhysicalMaterial material;
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
#endif`,J1=`struct PhysicalMaterial {
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
}`,Q1=`
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
#endif`,ew=`#if defined( RE_IndirectDiffuse )
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
#endif`,tw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ow=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fw=`#ifdef USE_MORPHNORMALS
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
#endif`,pw=`#ifdef USE_MORPHTARGETS
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
#endif`,mw=`#ifdef USE_MORPHTARGETS
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
#endif`,gw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,vw=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,_w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bw=`#ifdef USE_NORMALMAP
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
#endif`,ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Sw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Tw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ew=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Aw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ow=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kw=`float getShadowMask() {
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
}`,Bw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uw=`#ifdef USE_SKINNING
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
#endif`,zw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vw=`#ifdef USE_SKINNING
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
#endif`,Hw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ww=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$w=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jw=`#ifdef USE_TRANSMISSION
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
#endif`,qw=`#ifdef USE_TRANSMISSION
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
#endif`,Xw=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Kw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Yw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Zw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Jw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Qw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,eS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nS=`uniform sampler2D t2D;
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,aS=`#include <common>
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
}`,lS=`#if DEPTH_PACKING == 3200
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
}`,cS=`#define DISTANCE
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
}`,uS=`#define DISTANCE
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fS=`uniform float scale;
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#include <common>
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
}`,gS=`uniform vec3 diffuse;
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
}`,vS=`#define LAMBERT
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
}`,_S=`#define LAMBERT
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
}`,xS=`#define MATCAP
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
}`,yS=`#define MATCAP
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
}`,bS=`#define NORMAL
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
}`,wS=`#define NORMAL
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
}`,SS=`#define PHONG
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
}`,MS=`#define PHONG
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
}`,TS=`#define STANDARD
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
}`,ES=`#define STANDARD
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
}`,AS=`#define TOON
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
}`,CS=`#define TOON
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
}`,DS=`uniform float size;
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
}`,RS=`uniform vec3 diffuse;
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
}`,LS=`#include <common>
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
}`,PS=`uniform vec3 color;
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
}`,IS=`uniform float rotation;
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
}`,FS=`uniform vec3 diffuse;
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
}`,De={alphamap_fragment:i1,alphamap_pars_fragment:r1,alphatest_fragment:s1,alphatest_pars_fragment:o1,aomap_fragment:a1,aomap_pars_fragment:l1,begin_vertex:c1,beginnormal_vertex:u1,bsdfs:d1,iridescence_fragment:h1,bumpmap_pars_fragment:f1,clipping_planes_fragment:p1,clipping_planes_pars_fragment:m1,clipping_planes_pars_vertex:g1,clipping_planes_vertex:v1,color_fragment:_1,color_pars_fragment:x1,color_pars_vertex:y1,color_vertex:b1,common:w1,cube_uv_reflection_fragment:S1,defaultnormal_vertex:M1,displacementmap_pars_vertex:T1,displacementmap_vertex:E1,emissivemap_fragment:A1,emissivemap_pars_fragment:C1,encodings_fragment:D1,encodings_pars_fragment:R1,envmap_fragment:L1,envmap_common_pars_fragment:P1,envmap_pars_fragment:I1,envmap_pars_vertex:F1,envmap_physical_pars_fragment:j1,envmap_vertex:N1,fog_vertex:O1,fog_pars_vertex:k1,fog_fragment:B1,fog_pars_fragment:U1,gradientmap_pars_fragment:z1,lightmap_fragment:V1,lightmap_pars_fragment:H1,lights_lambert_fragment:G1,lights_lambert_pars_fragment:W1,lights_pars_begin:$1,lights_toon_fragment:q1,lights_toon_pars_fragment:X1,lights_phong_fragment:K1,lights_phong_pars_fragment:Y1,lights_physical_fragment:Z1,lights_physical_pars_fragment:J1,lights_fragment_begin:Q1,lights_fragment_maps:ew,lights_fragment_end:tw,logdepthbuf_fragment:nw,logdepthbuf_pars_fragment:iw,logdepthbuf_pars_vertex:rw,logdepthbuf_vertex:sw,map_fragment:ow,map_pars_fragment:aw,map_particle_fragment:lw,map_particle_pars_fragment:cw,metalnessmap_fragment:uw,metalnessmap_pars_fragment:dw,morphcolor_vertex:hw,morphnormal_vertex:fw,morphtarget_pars_vertex:pw,morphtarget_vertex:mw,normal_fragment_begin:gw,normal_fragment_maps:vw,normal_pars_fragment:_w,normal_pars_vertex:xw,normal_vertex:yw,normalmap_pars_fragment:bw,clearcoat_normal_fragment_begin:ww,clearcoat_normal_fragment_maps:Sw,clearcoat_pars_fragment:Mw,iridescence_pars_fragment:Tw,output_fragment:Ew,packing:Aw,premultiplied_alpha_fragment:Cw,project_vertex:Dw,dithering_fragment:Rw,dithering_pars_fragment:Lw,roughnessmap_fragment:Pw,roughnessmap_pars_fragment:Iw,shadowmap_pars_fragment:Fw,shadowmap_pars_vertex:Nw,shadowmap_vertex:Ow,shadowmask_pars_fragment:kw,skinbase_vertex:Bw,skinning_pars_vertex:Uw,skinning_vertex:zw,skinnormal_vertex:Vw,specularmap_fragment:Hw,specularmap_pars_fragment:Gw,tonemapping_fragment:Ww,tonemapping_pars_fragment:$w,transmission_fragment:jw,transmission_pars_fragment:qw,uv_pars_fragment:Xw,uv_pars_vertex:Kw,uv_vertex:Yw,uv2_pars_fragment:Zw,uv2_pars_vertex:Jw,uv2_vertex:Qw,worldpos_vertex:eS,background_vert:tS,background_frag:nS,backgroundCube_vert:iS,backgroundCube_frag:rS,cube_vert:sS,cube_frag:oS,depth_vert:aS,depth_frag:lS,distanceRGBA_vert:cS,distanceRGBA_frag:uS,equirect_vert:dS,equirect_frag:hS,linedashed_vert:fS,linedashed_frag:pS,meshbasic_vert:mS,meshbasic_frag:gS,meshlambert_vert:vS,meshlambert_frag:_S,meshmatcap_vert:xS,meshmatcap_frag:yS,meshnormal_vert:bS,meshnormal_frag:wS,meshphong_vert:SS,meshphong_frag:MS,meshphysical_vert:TS,meshphysical_frag:ES,meshtoon_vert:AS,meshtoon_frag:CS,points_vert:DS,points_frag:RS,shadow_vert:LS,shadow_frag:PS,sprite_vert:IS,sprite_frag:FS},ae={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new qt},uv2Transform:{value:new qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}}},wn={basic:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Nt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Nt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Nt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Nt([ae.points,ae.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Nt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Nt([ae.common,ae.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Nt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Nt([ae.sprite,ae.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Nt([ae.common,ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Nt([ae.lights,ae.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};wn.physical={uniforms:Nt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new he(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const po={r:0,b:0,g:0};function NS(i,e,t,n,r,s,o){const a=new Ce(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(f,v){let y=!1,b=v.isScene===!0?v.background:null;b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b));const _=i.xr,M=_.getSession&&_.getSession();M&&M.environmentBlendMode==="additive"&&(b=null),b===null?m(a,l):b&&b.isColor&&(m(b,1),y=!0),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===ra)?(u===void 0&&(u=new nt(new Xi(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:Lr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,F,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,(h!==b||d!==b.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,p=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new nt(new Is(2,2),new ct({name:"BackgroundMaterial",uniforms:Lr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,p=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function m(f,v){f.getRGB(po,dp(i)),n.buffers.color.setClear(po.r,po.g,po.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(f,v=1){a.set(f),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,m(a,l)},render:g}}function OS(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,u=!1;function h(I,k,K,L,B){let q=!1;if(o){const j=m(L,K,k);c!==j&&(c=j,p(c.object)),q=v(I,L,K,B),q&&y(I,L,K,B)}else{const j=k.wireframe===!0;(c.geometry!==L.id||c.program!==K.id||c.wireframe!==j)&&(c.geometry=L.id,c.program=K.id,c.wireframe=j,q=!0)}B!==null&&t.update(B,34963),(q||u)&&(u=!1,x(I,k,K,L),B!==null&&i.bindBuffer(34963,t.get(B).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(I){return n.isWebGL2?i.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function m(I,k,K){const L=K.wireframe===!0;let B=a[I.id];B===void 0&&(B={},a[I.id]=B);let q=B[k.id];q===void 0&&(q={},B[k.id]=q);let j=q[L];return j===void 0&&(j=f(d()),q[L]=j),j}function f(I){const k=[],K=[],L=[];for(let B=0;B<r;B++)k[B]=0,K[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:L,object:I,attributes:{},index:null}}function v(I,k,K,L){const B=c.attributes,q=k.attributes;let j=0;const V=K.getAttributes();for(const W in V)if(V[W].location>=0){const re=B[W];let U=q[W];if(U===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(U=I.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;j++}return c.attributesNum!==j||c.index!==L}function y(I,k,K,L){const B={},q=k.attributes;let j=0;const V=K.getAttributes();for(const W in V)if(V[W].location>=0){let re=q[W];re===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(re=I.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),B[W]=U,j++}c.attributes=B,c.attributesNum=j,c.index=L}function b(){const I=c.newAttributes;for(let k=0,K=I.length;k<K;k++)I[k]=0}function _(I){M(I,0)}function M(I,k){const K=c.newAttributes,L=c.enabledAttributes,B=c.attributeDivisors;K[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),B[I]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),B[I]=k)}function R(){const I=c.newAttributes,k=c.enabledAttributes;for(let K=0,L=k.length;K<L;K++)k[K]!==I[K]&&(i.disableVertexAttribArray(K),k[K]=0)}function F(I,k,K,L,B,q){n.isWebGL2===!0&&(K===5124||K===5125)?i.vertexAttribIPointer(I,k,K,B,q):i.vertexAttribPointer(I,k,K,L,B,q)}function x(I,k,K,L){if(n.isWebGL2===!1&&(I.isInstancedMesh||L.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const B=L.attributes,q=K.getAttributes(),j=k.defaultAttributeValues;for(const V in q){const W=q[V];if(W.location>=0){let ne=B[V];if(ne===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),ne!==void 0){const re=ne.normalized,U=ne.itemSize,Y=t.get(ne);if(Y===void 0)continue;const Me=Y.buffer,ue=Y.type,me=Y.bytesPerElement;if(ne.isInterleavedBufferAttribute){const ce=ne.data,Be=ce.stride,Te=ne.offset;if(ce.isInstancedInterleavedBuffer){for(let ye=0;ye<W.locationSize;ye++)M(W.location+ye,ce.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ye=0;ye<W.locationSize;ye++)_(W.location+ye);i.bindBuffer(34962,Me);for(let ye=0;ye<W.locationSize;ye++)F(W.location+ye,U/W.locationSize,ue,re,Be*me,(Te+U/W.locationSize*ye)*me)}else{if(ne.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)M(W.location+ce,ne.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ce=0;ce<W.locationSize;ce++)_(W.location+ce);i.bindBuffer(34962,Me);for(let ce=0;ce<W.locationSize;ce++)F(W.location+ce,U/W.locationSize,ue,re,U*me,U/W.locationSize*ce*me)}}else if(j!==void 0){const re=j[V];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(W.location,re);break;case 3:i.vertexAttrib3fv(W.location,re);break;case 4:i.vertexAttrib4fv(W.location,re);break;default:i.vertexAttrib1fv(W.location,re)}}}}R()}function E(){Q();for(const I in a){const k=a[I];for(const K in k){const L=k[K];for(const B in L)g(L[B].object),delete L[B];delete k[K]}delete a[I]}}function N(I){if(a[I.id]===void 0)return;const k=a[I.id];for(const K in k){const L=k[K];for(const B in L)g(L[B].object),delete L[B];delete k[K]}delete a[I.id]}function $(I){for(const k in a){const K=a[k];if(K[I.id]===void 0)continue;const L=K[I.id];for(const B in L)g(L[B].object),delete L[B];delete K[I.id]}}function Q(){G(),u=!0,c!==l&&(c=l,p(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:G,dispose:E,releaseStatesOfGeometry:N,releaseStatesOfProgram:$,initAttributes:b,enableAttribute:_,disableUnusedAttributes:R}}function kS(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,p;if(r)d=i,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function BS(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),d=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),f=i.getParameter(36347),v=i.getParameter(36348),y=i.getParameter(36349),b=d>0,_=o||e.has("OES_texture_float"),M=b&&_,R=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:b,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:R}}function US(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ei,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,p){const g=h.length!==0||d||n!==0||r;return r=d,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,p){const g=h.clippingPlanes,m=h.clipIntersection,f=h.clipShadows,v=i.get(h);if(!r||g===null||g.length===0||s&&!f)s?u(null):c();else{const y=s?0:n,b=y*4;let _=v.clippingState||null;l.value=_,_=u(g,d,b,p);for(let M=0;M!==b;++M)_[M]=t[M];v.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const m=h!==null?h.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const v=p+m*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<v)&&(f=new Float32Array(v));for(let b=0,_=p;b!==m;++b,_+=4)o.copy(h[b]).applyMatrix4(y,a),o.normal.toArray(f,_),f[_+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function zS(i){let e=new WeakMap;function t(o,a){return a===Ol?o.mapping=Er:a===kl&&(o.mapping=Ar),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ol||a===kl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qb(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Fs extends hp{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gr=4,xd=[.125,.215,.35,.446,.526,.582],Di=20,al=new Fs,yd=new Ce;let ll=null;const Ai=(1+Math.sqrt(5))/2,pr=1/Ai,bd=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Ai,pr),new P(0,Ai,-pr),new P(pr,0,Ai),new P(-pr,0,Ai),new P(Ai,pr,0),new P(-Ai,pr,0)];class wd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ll=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ll),e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ll=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:vs,format:tn,encoding:Ui,depthBuffer:!1},r=Sd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VS(s)),this._blurMaterial=HS(s,e,t)}return r}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,al)}_sceneToCubeUV(e,t,n,r){const a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(yd),u.toneMapping=Hn,u.autoClear=!1;const p=new Mn({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new nt(new Xi,p);let m=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(yd),m=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):y===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const b=this._cubeSize;mo(r,y*b,v>2?b:0,b,b),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Er||e.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;mo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,al)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bd[(r-1)%bd.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new nt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Di-1),m=s/g,f=isFinite(s)?1+Math.floor(u*m):Di;f>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Di}`);const v=[];let y=0;for(let F=0;F<Di;++F){const x=F/m,E=Math.exp(-x*x/2);v.push(E),F===0?y+=E:F<f&&(y+=2*E)}for(let F=0;F<v.length;F++)v[F]=v[F]/y;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const _=this._sizeLods[r],M=3*_*(r>b-gr?r-b+gr:0),R=4*(this._cubeSize-_);mo(t,M,R,3*_,2*_),l.setRenderTarget(t),l.render(h,al)}}function VS(i){const e=[],t=[],n=[];let r=i;const s=i-gr+1+xd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-gr?l=xd[o-i+gr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,f=2,v=1,y=new Float32Array(m*g*p),b=new Float32Array(f*g*p),_=new Float32Array(v*g*p);for(let R=0;R<p;R++){const F=R%3*2/3-1,x=R>2?0:-1,E=[F,x,0,F+2/3,x,0,F+2/3,x+1,0,F,x,0,F+2/3,x+1,0,F,x+1,0];y.set(E,m*g*R),b.set(d,f*g*R);const N=[R,R,R,R,R,R];_.set(N,v*g*R)}const M=new Vt;M.setAttribute("position",new Dt(y,m)),M.setAttribute("uv",new Dt(b,f)),M.setAttribute("faceIndex",new Dt(_,v)),e.push(M),r>gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sd(i,e,t){const n=new hn(i,e,t);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function HS(i,e,t){const n=new Float32Array(Di),r=new P(0,1,0);return new ct({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Md(){return new ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Td(){return new ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function GS(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ol||l===kl,u=l===Er||l===Ar;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new wd(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new wd(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function WS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function $S(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let f=0,v=m.length;f<v;f++)e.update(m[f],34962)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const y=p.array;m=p.version;for(let b=0,_=y.length;b<_;b+=3){const M=y[b+0],R=y[b+1],F=y[b+2];d.push(M,R,R,F,F,M)}}else{const y=g.array;m=g.version;for(let b=0,_=y.length/3-1;b<_;b+=3){const M=b+0,R=b+1,F=b+2;d.push(M,R,R,F,F,M)}}const f=new(ip(d)?up:cp)(d,1);f.version=m;const v=s.get(h);v&&e.remove(v),s.set(h,f)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function jS(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){i.drawElements(s,p,a,d*l),t.update(p,s,1)}function h(d,p,g){if(g===0)return;let m,f;if(r)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,p,a,d*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function qS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function XS(i,e){return i[0]-e[0]}function KS(i,e){return Math.abs(e[1])-Math.abs(i[1])}function YS(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new je,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let f=s.get(u);if(f===void 0||f.count!==m){let k=function(){G.dispose(),s.delete(u),u.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();const b=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],F=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let E=0;b===!0&&(E=1),_===!0&&(E=2),M===!0&&(E=3);let N=u.attributes.position.count*E,$=1;N>e.maxTextureSize&&($=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const Q=new Float32Array(N*$*4*m),G=new ap(Q,N,$,m);G.type=ai,G.needsUpdate=!0;const I=E*4;for(let K=0;K<m;K++){const L=R[K],B=F[K],q=x[K],j=N*$*4*K;for(let V=0;V<L.count;V++){const W=V*I;b===!0&&(o.fromBufferAttribute(L,V),Q[j+W+0]=o.x,Q[j+W+1]=o.y,Q[j+W+2]=o.z,Q[j+W+3]=0),_===!0&&(o.fromBufferAttribute(B,V),Q[j+W+4]=o.x,Q[j+W+5]=o.y,Q[j+W+6]=o.z,Q[j+W+7]=0),M===!0&&(o.fromBufferAttribute(q,V),Q[j+W+8]=o.x,Q[j+W+9]=o.y,Q[j+W+10]=o.z,Q[j+W+11]=q.itemSize===4?o.w:1)}}f={count:m,texture:G,size:new he(N,$)},s.set(u,f),u.addEventListener("dispose",k)}let v=0;for(let b=0;b<p.length;b++)v+=p[b];const y=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",p),d.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const g=p===void 0?0:p.length;let m=n[u.id];if(m===void 0||m.length!==g){m=[];for(let _=0;_<g;_++)m[_]=[_,0];n[u.id]=m}for(let _=0;_<g;_++){const M=m[_];M[0]=_,M[1]=p[_]}m.sort(KS);for(let _=0;_<8;_++)_<g&&m[_][1]?(a[_][0]=m[_][0],a[_][1]=m[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(XS);const f=u.morphAttributes.position,v=u.morphAttributes.normal;let y=0;for(let _=0;_<8;_++){const M=a[_],R=M[0],F=M[1];R!==Number.MAX_SAFE_INTEGER&&F?(f&&u.getAttribute("morphTarget"+_)!==f[R]&&u.setAttribute("morphTarget"+_,f[R]),v&&u.getAttribute("morphNormal"+_)!==v[R]&&u.setAttribute("morphNormal"+_,v[R]),r[_]=F,y+=F):(f&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),v&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const b=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(i,"morphTargetBaseInfluence",b),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function ZS(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const mp=new St,gp=new ap,vp=new Bb,_p=new fp,Ed=[],Ad=[],Cd=new Float32Array(16),Dd=new Float32Array(9),Rd=new Float32Array(4);function $r(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ed[r];if(s===void 0&&(s=new Float32Array(r),Ed[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sa(i,e){let t=Ad[e];t===void 0&&(t=new Int32Array(e),Ad[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function JS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function QS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function eM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function tM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function nM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;Rd.set(n),i.uniformMatrix2fv(this.addr,!1,Rd),ft(t,n)}}function iM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;Dd.set(n),i.uniformMatrix3fv(this.addr,!1,Dd),ft(t,n)}}function rM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;Cd.set(n),i.uniformMatrix4fv(this.addr,!1,Cd),ft(t,n)}}function sM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function oM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function aM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function lM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function cM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function dM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function hM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function fM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||mp,r)}function pM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vp,r)}function mM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||_p,r)}function gM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||gp,r)}function vM(i){switch(i){case 5126:return JS;case 35664:return QS;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return rM;case 5124:case 35670:return sM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return uM;case 36295:return dM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function _M(i,e){i.uniform1fv(this.addr,e)}function xM(i,e){const t=$r(e,this.size,2);i.uniform2fv(this.addr,t)}function yM(i,e){const t=$r(e,this.size,3);i.uniform3fv(this.addr,t)}function bM(i,e){const t=$r(e,this.size,4);i.uniform4fv(this.addr,t)}function wM(i,e){const t=$r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function SM(i,e){const t=$r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function MM(i,e){const t=$r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function TM(i,e){i.uniform1iv(this.addr,e)}function EM(i,e){i.uniform2iv(this.addr,e)}function AM(i,e){i.uniform3iv(this.addr,e)}function CM(i,e){i.uniform4iv(this.addr,e)}function DM(i,e){i.uniform1uiv(this.addr,e)}function RM(i,e){i.uniform2uiv(this.addr,e)}function LM(i,e){i.uniform3uiv(this.addr,e)}function PM(i,e){i.uniform4uiv(this.addr,e)}function IM(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||mp,s[o])}function FM(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vp,s[o])}function NM(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_p,s[o])}function OM(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||gp,s[o])}function kM(i){switch(i){case 5126:return _M;case 35664:return xM;case 35665:return yM;case 35666:return bM;case 35674:return wM;case 35675:return SM;case 35676:return MM;case 5124:case 35670:return TM;case 35667:case 35671:return EM;case 35668:case 35672:return AM;case 35669:case 35673:return CM;case 5125:return DM;case 36294:return RM;case 36295:return LM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return OM}}class BM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=vM(t.type)}}class UM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=kM(t.type)}}class zM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function Ld(i,e){i.seq.push(e),i.map[e.id]=e}function VM(i,e,t){const n=i.name,r=n.length;for(cl.lastIndex=0;;){const s=cl.exec(n),o=cl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ld(t,c===void 0?new BM(a,i,e):new UM(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new zM(a),Ld(t,h)),t=h}}}class Co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);VM(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Pd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let HM=0;function GM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function WM(i){switch(i){case Ui:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Id(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+GM(i.getShaderSource(e),o)}else return r}function $M(i,e){const t=WM(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function jM(i,e){let t;switch(e){case Zy:t="Linear";break;case Jy:t="Reinhard";break;case Qy:t="OptimizedCineon";break;case eb:t="ACESFilmic";break;case tb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qM(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(as).join(`
`)}function XM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function KM(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function as(i){return i!==""}function Fd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(i){return i.replace(YM,ZM)}function ZM(i,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Gl(t)}const JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(i){return i.replace(JM,QM)}function QM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dy?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===os&&(e="SHADOWMAP_TYPE_VSM"),e}function tT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Er:case Ar:e="ENVMAP_TYPE_CUBE";break;case ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nT(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function iT(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zf:e="ENVMAP_BLENDING_MULTIPLY";break;case Ky:e="ENVMAP_BLENDING_MIX";break;case Yy:e="ENVMAP_BLENDING_ADD";break}return e}function rT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sT(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=eT(t),c=tT(t),u=nT(t),h=iT(t),d=rT(t),p=t.isWebGL2?"":qM(t),g=XM(s),m=r.createProgram();let f,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(as).join(`
`),f.length>0&&(f+=`
`),v=[p,g].filter(as).join(`
`),v.length>0&&(v+=`
`)):(f=[kd(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),v=[p,kd(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?De.tonemapping_pars_fragment:"",t.toneMapping!==Hn?jM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,$M("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),o=Gl(o),o=Fd(o,t),o=Nd(o,t),a=Gl(a),a=Fd(a,t),a=Nd(a,t),o=Od(o),a=Od(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",t.glslVersion===ad?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ad?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=y+f+o,_=y+v+a,M=Pd(r,35633,b),R=Pd(r,35632,_);if(r.attachShader(m,M),r.attachShader(m,R),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),i.debug.checkShaderErrors){const E=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(M).trim(),$=r.getShaderInfoLog(R).trim();let Q=!0,G=!0;if(r.getProgramParameter(m,35714)===!1){Q=!1;const I=Id(r,M,"vertex"),k=Id(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+I+`
`+k)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(N===""||$==="")&&(G=!1);G&&(this.diagnostics={runnable:Q,programLog:E,vertexShader:{log:N,prefix:f},fragmentShader:{log:$,prefix:v}})}r.deleteShader(M),r.deleteShader(R);let F;this.getUniforms=function(){return F===void 0&&(F=new Co(r,m)),F};let x;return this.getAttributes=function(){return x===void 0&&(x=KM(r,m)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=HM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=R,this}let oT=0;class aT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lT(e),t.set(e,n)),n}}class lT{constructor(e){this.id=oT++,this.code=e,this.usedTimes=0}}function cT(i,e,t,n,r,s,o){const a=new lp,l=new aT,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x,E,N,$,Q){const G=$.fog,I=Q.geometry,k=x.isMeshStandardMaterial?$.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),L=!!K&&K.mapping===ra?K.image.height:null,B=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=q!==void 0?q.length:0;let V=0;I.morphAttributes.position!==void 0&&(V=1),I.morphAttributes.normal!==void 0&&(V=2),I.morphAttributes.color!==void 0&&(V=3);let W,ne,re,U;if(B){const Be=wn[B];W=Be.vertexShader,ne=Be.fragmentShader}else W=x.vertexShader,ne=x.fragmentShader,l.update(x),re=l.getVertexShaderID(x),U=l.getFragmentShaderID(x);const Y=i.getRenderTarget(),Me=x.alphaTest>0,ue=x.clearcoat>0,me=x.iridescence>0;return{isWebGL2:u,shaderID:B,shaderName:x.type,vertexShader:W,fragmentShader:ne,defines:x.defines,customVertexShaderID:re,customFragmentShaderID:U,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:d,outputEncoding:Y===null?i.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Ui,map:!!x.map,matcap:!!x.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:L,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===bb,tangentSpaceNormalMap:x.normalMapType===tp,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===qe,clearcoat:ue,clearcoatMap:ue&&!!x.clearcoatMap,clearcoatRoughnessMap:ue&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!x.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!x.iridescenceMap,iridescenceThicknessMap:me&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===yr,alphaMap:!!x.alphaMap,alphaTest:Me,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!I.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!G,useFog:x.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:V,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:Hn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Un,flipSided:x.side===Ut,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)E.push(N),E.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(v(E,x),y(E,x),E.push(i.outputEncoding)),E.push(x.customProgramCacheKey),E.join()}function v(x,E){x.push(E.precision),x.push(E.outputEncoding),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.combine),x.push(E.vertexUvs),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function y(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),x.push(a.mask)}function b(x){const E=g[x.type];let N;if(E){const $=wn[E];N=zo.clone($.uniforms)}else N=x.uniforms;return N}function _(x,E){let N;for(let $=0,Q=c.length;$<Q;$++){const G=c[$];if(G.cacheKey===E){N=G,++N.usedTimes;break}}return N===void 0&&(N=new sT(i,E,x,s),c.push(N)),N}function M(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:_,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:F}}function uT(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function dT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Bd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ud(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,p,g,m,f){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:f},i[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=p,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=m,v.group=f),e++,v}function a(h,d,p,g,m,f){const v=o(h,d,p,g,m,f);p.transmission>0?n.push(v):p.transparent===!0?r.push(v):t.push(v)}function l(h,d,p,g,m,f){const v=o(h,d,p,g,m,f);p.transmission>0?n.unshift(v):p.transparent===!0?r.unshift(v):t.unshift(v)}function c(h,d){t.length>1&&t.sort(h||dT),n.length>1&&n.sort(d||Bd),r.length>1&&r.sort(d||Bd)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function hT(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ud,i.set(n,[o])):r>=s.length?(o=new Ud,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function fT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ce};break;case"SpotLight":t={position:new P,direction:new P,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function pT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let mT=0;function gT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vT(i,e){const t=new fT,n=pT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new P);const s=new P,o=new Pe,a=new Pe;function l(u,h){let d=0,p=0,g=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let m=0,f=0,v=0,y=0,b=0,_=0,M=0,R=0,F=0,x=0;u.sort(gT);const E=h!==!0?Math.PI:1;for(let $=0,Q=u.length;$<Q;$++){const G=u[$],I=G.color,k=G.intensity,K=G.distance,L=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)d+=I.r*k*E,p+=I.g*k*E,g+=I.b*k*E;else if(G.isLightProbe)for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],k);else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity*E),G.castShadow){const q=G.shadow,j=n.get(G);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.directionalShadow[m]=j,r.directionalShadowMap[m]=L,r.directionalShadowMatrix[m]=G.shadow.matrix,_++}r.directional[m]=B,m++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(I).multiplyScalar(k*E),B.distance=K,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[v]=B;const q=G.shadow;if(G.map&&(r.spotLightMap[F]=G.map,F++,q.updateMatrices(G),G.castShadow&&x++),r.spotLightMatrix[v]=q.matrix,G.castShadow){const j=n.get(G);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.spotShadow[v]=j,r.spotShadowMap[v]=L,R++}v++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy(I).multiplyScalar(k),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=B,y++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity*E),B.distance=G.distance,B.decay=G.decay,G.castShadow){const q=G.shadow,j=n.get(G);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,r.pointShadow[f]=j,r.pointShadowMap[f]=L,r.pointShadowMatrix[f]=G.shadow.matrix,M++}r.point[f]=B,f++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(k*E),B.groundColor.copy(G.groundColor).multiplyScalar(k*E),r.hemi[b]=B,b++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const N=r.hash;(N.directionalLength!==m||N.pointLength!==f||N.spotLength!==v||N.rectAreaLength!==y||N.hemiLength!==b||N.numDirectionalShadows!==_||N.numPointShadows!==M||N.numSpotShadows!==R||N.numSpotMaps!==F)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=y,r.point.length=f,r.hemi.length=b,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=R+F-x,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=x,N.directionalLength=m,N.pointLength=f,N.spotLength=v,N.rectAreaLength=y,N.hemiLength=b,N.numDirectionalShadows=_,N.numPointShadows=M,N.numSpotShadows=R,N.numSpotMaps=F,r.version=mT++)}function c(u,h){let d=0,p=0,g=0,m=0,f=0;const v=h.matrixWorldInverse;for(let y=0,b=u.length;y<b;y++){const _=u[y];if(_.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),d++}else if(_.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),g++}else if(_.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),a.identity(),o.copy(_.matrixWorld),o.premultiply(v),a.extractRotation(o),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),p++}else if(_.isHemisphereLight){const M=r.hemi[f];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(v),f++}}}return{setup:l,setupView:c,state:r}}function zd(i,e){const t=new vT(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function _T(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new zd(i,e),t.set(s,[l])):o>=a.length?(l=new zd(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class xT extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yT extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wT=`uniform sampler2D shadow_pass;
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
}`;function ST(i,e,t){let n=new xc;const r=new he,s=new he,o=new je,a=new xT({depthPacking:yb}),l=new yT,c={},u=t.maxTextureSize,h={0:Ut,1:ki,2:Un},d=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:bT,fragmentShader:wT}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new nt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xf,this.render=function(_,M,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||_.length===0)return;const F=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),N=i.state;N.setBlending(di),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let $=0,Q=_.length;$<Q;$++){const G=_[$],I=G.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const k=I.getFrameExtents();if(r.multiply(k),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,I.mapSize.y=s.y)),I.map===null){const L=this.type!==os?{minFilter:wt,magFilter:wt}:{};I.map=new hn(r.x,r.y,L),I.map.texture.name=G.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const K=I.getViewportCount();for(let L=0;L<K;L++){const B=I.getViewport(L);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),N.viewport(o),I.updateMatrices(G,L),n=I.getFrustum(),b(M,R,I.camera,G,this.type)}I.isPointLightShadow!==!0&&this.type===os&&v(I,R),I.needsUpdate=!1}f.needsUpdate=!1,i.setRenderTarget(F,x,E)};function v(_,M){const R=e.update(m);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,p.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new hn(r.x,r.y)),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,i.setRenderTarget(_.mapPass),i.clear(),i.renderBufferDirect(M,null,R,d,m,null),p.uniforms.shadow_pass.value=_.mapPass.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,i.setRenderTarget(_.map),i.clear(),i.renderBufferDirect(M,null,R,p,m,null)}function y(_,M,R,F,x,E){let N=null;const $=R.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if($!==void 0?N=$:N=R.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const Q=N.uuid,G=M.uuid;let I=c[Q];I===void 0&&(I={},c[Q]=I);let k=I[G];k===void 0&&(k=N.clone(),I[G]=k),N=k}return N.visible=M.visible,N.wireframe=M.wireframe,E===os?N.side=M.shadowSide!==null?M.shadowSide:M.side:N.side=M.shadowSide!==null?M.shadowSide:h[M.side],N.alphaMap=M.alphaMap,N.alphaTest=M.alphaTest,N.map=M.map,N.clipShadows=M.clipShadows,N.clippingPlanes=M.clippingPlanes,N.clipIntersection=M.clipIntersection,N.displacementMap=M.displacementMap,N.displacementScale=M.displacementScale,N.displacementBias=M.displacementBias,N.wireframeLinewidth=M.wireframeLinewidth,N.linewidth=M.linewidth,R.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(R.matrixWorld),N.nearDistance=F,N.farDistance=x),N}function b(_,M,R,F,x){if(_.visible===!1)return;if(_.layers.test(M.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&x===os)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,_.matrixWorld);const $=e.update(_),Q=_.material;if(Array.isArray(Q)){const G=$.groups;for(let I=0,k=G.length;I<k;I++){const K=G[I],L=Q[K.materialIndex];if(L&&L.visible){const B=y(_,L,F,R.near,R.far,x);i.renderBufferDirect(R,null,$,B,_,K)}}}else if(Q.visible){const G=y(_,Q,F,R.near,R.far,x);i.renderBufferDirect(R,null,$,G,_,null)}}const N=_.children;for(let $=0,Q=N.length;$<Q;$++)b(N[$],M,R,F,x)}}function MT(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const X=new je;let ie=null;const de=new je(0,0,0,0);return{setMask:function(_e){ie!==_e&&!O&&(i.colorMask(_e,_e,_e,_e),ie=_e)},setLocked:function(_e){O=_e},setClear:function(_e,$e,mt,Tt,_i){_i===!0&&(_e*=Tt,$e*=Tt,mt*=Tt),X.set(_e,$e,mt,Tt),de.equals(X)===!1&&(i.clearColor(_e,$e,mt,Tt),de.copy(X))},reset:function(){O=!1,ie=null,de.set(-1,0,0,0)}}}function s(){let O=!1,X=null,ie=null,de=null;return{setTest:function(_e){_e?Me(2929):ue(2929)},setMask:function(_e){X!==_e&&!O&&(i.depthMask(_e),X=_e)},setFunc:function(_e){if(ie!==_e){switch(_e){case Hy:i.depthFunc(512);break;case Gy:i.depthFunc(519);break;case Wy:i.depthFunc(513);break;case Nl:i.depthFunc(515);break;case $y:i.depthFunc(514);break;case jy:i.depthFunc(518);break;case qy:i.depthFunc(516);break;case Xy:i.depthFunc(517);break;default:i.depthFunc(515)}ie=_e}},setLocked:function(_e){O=_e},setClear:function(_e){de!==_e&&(i.clearDepth(_e),de=_e)},reset:function(){O=!1,X=null,ie=null,de=null}}}function o(){let O=!1,X=null,ie=null,de=null,_e=null,$e=null,mt=null,Tt=null,_i=null;return{setTest:function(et){O||(et?Me(2960):ue(2960))},setMask:function(et){X!==et&&!O&&(i.stencilMask(et),X=et)},setFunc:function(et,Rn,Yt){(ie!==et||de!==Rn||_e!==Yt)&&(i.stencilFunc(et,Rn,Yt),ie=et,de=Rn,_e=Yt)},setOp:function(et,Rn,Yt){($e!==et||mt!==Rn||Tt!==Yt)&&(i.stencilOp(et,Rn,Yt),$e=et,mt=Rn,Tt=Yt)},setLocked:function(et){O=et},setClear:function(et){_i!==et&&(i.clearStencil(et),_i=et)},reset:function(){O=!1,X=null,ie=null,de=null,_e=null,$e=null,mt=null,Tt=null,_i=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,m=[],f=null,v=!1,y=null,b=null,_=null,M=null,R=null,F=null,x=null,E=!1,N=null,$=null,Q=null,G=null,I=null;const k=i.getParameter(35661);let K=!1,L=0;const B=i.getParameter(7938);B.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(B)[1]),K=L>=1):B.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),K=L>=2);let q=null,j={};const V=i.getParameter(3088),W=i.getParameter(2978),ne=new je().fromArray(V),re=new je().fromArray(W);function U(O,X,ie){const de=new Uint8Array(4),_e=i.createTexture();i.bindTexture(O,_e),i.texParameteri(O,10241,9728),i.texParameteri(O,10240,9728);for(let $e=0;$e<ie;$e++)i.texImage2D(X+$e,0,6408,1,1,0,6408,5121,de);return _e}const Y={};Y[3553]=U(3553,3553,1),Y[34067]=U(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(2929),l.setFunc(Nl),st(!1),pt(Pu),Me(2884),it(di);function Me(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function ue(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function me(O,X){return p[O]!==X?(i.bindFramebuffer(O,X),p[O]=X,n&&(O===36009&&(p[36160]=X),O===36160&&(p[36009]=X)),!0):!1}function ce(O,X){let ie=m,de=!1;if(O)if(ie=g.get(X),ie===void 0&&(ie=[],g.set(X,ie)),O.isWebGLMultipleRenderTargets){const _e=O.texture;if(ie.length!==_e.length||ie[0]!==36064){for(let $e=0,mt=_e.length;$e<mt;$e++)ie[$e]=36064+$e;ie.length=_e.length,de=!0}}else ie[0]!==36064&&(ie[0]=36064,de=!0);else ie[0]!==1029&&(ie[0]=1029,de=!0);de&&(t.isWebGL2?i.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Be(O){return f!==O?(i.useProgram(O),f=O,!0):!1}const Te={[mr]:32774,[Ly]:32778,[Py]:32779};if(n)Te[Nu]=32775,Te[Ou]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(Te[Nu]=O.MIN_EXT,Te[Ou]=O.MAX_EXT)}const ye={[Iy]:0,[Fy]:1,[Ny]:768,[Kf]:770,[Vy]:776,[Uy]:774,[ky]:772,[Oy]:769,[Yf]:771,[zy]:775,[By]:773};function it(O,X,ie,de,_e,$e,mt,Tt){if(O===di){v===!0&&(ue(3042),v=!1);return}if(v===!1&&(Me(3042),v=!0),O!==Ry){if(O!==y||Tt!==E){if((b!==mr||R!==mr)&&(i.blendEquation(32774),b=mr,R=mr),Tt)switch(O){case yr:i.blendFuncSeparate(1,771,1,771);break;case Oo:i.blendFunc(1,1);break;case Iu:i.blendFuncSeparate(0,769,0,1);break;case Fu:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case yr:i.blendFuncSeparate(770,771,1,771);break;case Oo:i.blendFunc(770,1);break;case Iu:i.blendFuncSeparate(0,769,0,1);break;case Fu:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}_=null,M=null,F=null,x=null,y=O,E=Tt}return}_e=_e||X,$e=$e||ie,mt=mt||de,(X!==b||_e!==R)&&(i.blendEquationSeparate(Te[X],Te[_e]),b=X,R=_e),(ie!==_||de!==M||$e!==F||mt!==x)&&(i.blendFuncSeparate(ye[ie],ye[de],ye[$e],ye[mt]),_=ie,M=de,F=$e,x=mt),y=O,E=!1}function rt(O,X){O.side===Un?ue(2884):Me(2884);let ie=O.side===Ut;X&&(ie=!ie),st(ie),O.blending===yr&&O.transparent===!1?it(di):it(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const de=O.stencilWrite;c.setTest(de),de&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Me(32926):ue(32926)}function st(O){N!==O&&(O?i.frontFace(2304):i.frontFace(2305),N=O)}function pt(O){O!==Ay?(Me(2884),O!==$&&(O===Pu?i.cullFace(1029):O===Cy?i.cullFace(1028):i.cullFace(1032))):ue(2884),$=O}function Ze(O){O!==Q&&(K&&i.lineWidth(O),Q=O)}function Ue(O,X,ie){O?(Me(32823),(G!==X||I!==ie)&&(i.polygonOffset(X,ie),G=X,I=ie)):ue(32823)}function Lt(O){O?Me(3089):ue(3089)}function yt(O){O===void 0&&(O=33984+k-1),q!==O&&(i.activeTexture(O),q=O)}function A(O,X,ie){ie===void 0&&(q===null?ie=33984+k-1:ie=q);let de=j[ie];de===void 0&&(de={type:void 0,texture:void 0},j[ie]=de),(de.type!==O||de.texture!==X)&&(q!==ie&&(i.activeTexture(ie),q=ie),i.bindTexture(O,X||Y[O]),de.type=O,de.texture=X)}function w(){const O=j[q];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function D(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(O){ne.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ne.copy(O))}function xe(O){re.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Ie(O,X){let ie=h.get(X);ie===void 0&&(ie=new WeakMap,h.set(X,ie));let de=ie.get(O);de===void 0&&(de=i.getUniformBlockIndex(X,O.name),ie.set(O,de))}function We(O,X){const de=h.get(X).get(O);u.get(O)!==de&&(i.uniformBlockBinding(X,de,O.__bindingPointIndex),u.set(O,de))}function Qe(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},q=null,j={},p={},g=new WeakMap,m=[],f=null,v=!1,y=null,b=null,_=null,M=null,R=null,F=null,x=null,E=!1,N=null,$=null,Q=null,G=null,I=null,ne.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Me,disable:ue,bindFramebuffer:me,drawBuffers:ce,useProgram:Be,setBlending:it,setMaterial:rt,setFlipSided:st,setCullFace:pt,setLineWidth:Ze,setPolygonOffset:Ue,setScissorTest:Lt,activeTexture:yt,bindTexture:A,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:D,texImage2D:Se,texImage3D:fe,updateUBOMapping:Ie,uniformBlockBinding:We,texStorage2D:J,texStorage3D:ve,texSubImage2D:te,texSubImage3D:le,compressedTexSubImage2D:ge,compressedTexSubImage3D:oe,scissor:be,viewport:xe,reset:Qe}}function TT(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,w){return v?new OffscreenCanvas(A,w):bs("canvas")}function b(A,w,S,D){let te=1;if((A.width>D||A.height>D)&&(te=D/Math.max(A.width,A.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const le=w?Uo:Math.floor,ge=le(te*A.width),oe=le(te*A.height);m===void 0&&(m=y(ge,oe));const J=S?y(ge,oe):m;return J.width=ge,J.height=oe,J.getContext("2d").drawImage(A,0,0,ge,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ge+"x"+oe+")."),J}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function _(A){return Hl(A.width)&&Hl(A.height)}function M(A){return a?!1:A.wrapS!==en||A.wrapT!==en||A.minFilter!==wt&&A.minFilter!==Bt}function R(A,w){return A.generateMipmaps&&w&&A.minFilter!==wt&&A.minFilter!==Bt}function F(A){i.generateMipmap(A)}function x(A,w,S,D,te=!1){if(a===!1)return w;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le=w;return w===6403&&(S===5126&&(le=33326),S===5131&&(le=33325),S===5121&&(le=33321)),w===33319&&(S===5126&&(le=33328),S===5131&&(le=33327),S===5121&&(le=33323)),w===6408&&(S===5126&&(le=34836),S===5131&&(le=34842),S===5121&&(le=D===qe&&te===!1?35907:32856),S===32819&&(le=32854),S===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function E(A,w,S){return R(A,S)===!0||A.isFramebufferTexture&&A.minFilter!==wt&&A.minFilter!==Bt?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function N(A){return A===wt||A===Bl||A===Ul?9728:9729}function $(A){const w=A.target;w.removeEventListener("dispose",$),G(w),w.isVideoTexture&&g.delete(w)}function Q(A){const w=A.target;w.removeEventListener("dispose",Q),k(w)}function G(A){const w=n.get(A);if(w.__webglInit===void 0)return;const S=A.source,D=f.get(S);if(D){const te=D[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(A),Object.keys(D).length===0&&f.delete(S)}n.remove(A)}function I(A){const w=n.get(A);i.deleteTexture(w.__webglTexture);const S=A.source,D=f.get(S);delete D[w.__cacheKey],o.memory.textures--}function k(A){const w=A.texture,S=n.get(A),D=n.get(w);if(D.__webglTexture!==void 0&&(i.deleteTexture(D.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)i.deleteFramebuffer(S.__webglFramebuffer[te]),S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[te]);else{if(i.deleteFramebuffer(S.__webglFramebuffer),S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let te=0,le=w.length;te<le;te++){const ge=n.get(w[te]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(w[te])}n.remove(w),n.remove(A)}let K=0;function L(){K=0}function B(){const A=K;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),K+=1,A}function q(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function j(A,w){const S=n.get(A);if(A.isVideoTexture&&Lt(A),A.isRenderTargetTexture===!1&&A.version>0&&S.__version!==A.version){const D=A.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(S,A,w);return}}t.bindTexture(3553,S.__webglTexture,33984+w)}function V(A,w){const S=n.get(A);if(A.version>0&&S.__version!==A.version){ue(S,A,w);return}t.bindTexture(35866,S.__webglTexture,33984+w)}function W(A,w){const S=n.get(A);if(A.version>0&&S.__version!==A.version){ue(S,A,w);return}t.bindTexture(32879,S.__webglTexture,33984+w)}function ne(A,w){const S=n.get(A);if(A.version>0&&S.__version!==A.version){me(S,A,w);return}t.bindTexture(34067,S.__webglTexture,33984+w)}const re={[Cr]:10497,[en]:33071,[ko]:33648},U={[wt]:9728,[Bl]:9984,[Ul]:9986,[Bt]:9729,[Qf]:9985,[Hr]:9987};function Y(A,w,S){if(S?(i.texParameteri(A,10242,re[w.wrapS]),i.texParameteri(A,10243,re[w.wrapT]),(A===32879||A===35866)&&i.texParameteri(A,32882,re[w.wrapR]),i.texParameteri(A,10240,U[w.magFilter]),i.texParameteri(A,10241,U[w.minFilter])):(i.texParameteri(A,10242,33071),i.texParameteri(A,10243,33071),(A===32879||A===35866)&&i.texParameteri(A,32882,33071),(w.wrapS!==en||w.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,10240,N(w.magFilter)),i.texParameteri(A,10241,N(w.minFilter)),w.minFilter!==wt&&w.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");if(w.type===ai&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===vs&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(A,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Me(A,w){let S=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",$));const D=w.source;let te=f.get(D);te===void 0&&(te={},f.set(D,te));const le=q(w);if(le!==A.__cacheKey){te[le]===void 0&&(te[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,S=!0),te[le].usedTimes++;const ge=te[A.__cacheKey];ge!==void 0&&(te[A.__cacheKey].usedTimes--,ge.usedTimes===0&&I(w)),A.__cacheKey=le,A.__webglTexture=te[le].texture}return S}function ue(A,w,S){let D=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(D=35866),w.isData3DTexture&&(D=32879);const te=Me(A,w),le=w.source;t.bindTexture(D,A.__webglTexture,33984+S);const ge=n.get(le);if(le.version!==ge.__version||te===!0){t.activeTexture(33984+S),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);const oe=M(w)&&_(w.image)===!1;let J=b(w.image,oe,!1,u);J=yt(w,J);const ve=_(J)||a,Se=s.convert(w.format,w.encoding);let fe=s.convert(w.type),be=x(w.internalFormat,Se,fe,w.encoding,w.isVideoTexture);Y(D,w,ve);let xe;const Ie=w.mipmaps,We=a&&w.isVideoTexture!==!0,Qe=ge.__version===void 0||te===!0,O=E(w,J,ve);if(w.isDepthTexture)be=6402,a?w.type===ai?be=36012:w.type===Ri?be=33190:w.type===br?be=35056:be=33189:w.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Pi&&be===6402&&w.type!==ep&&w.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ri,fe=s.convert(w.type)),w.format===Dr&&be===6402&&(be=34041,w.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=br,fe=s.convert(w.type))),Qe&&(We?t.texStorage2D(3553,1,be,J.width,J.height):t.texImage2D(3553,0,be,J.width,J.height,0,Se,fe,null));else if(w.isDataTexture)if(Ie.length>0&&ve){We&&Qe&&t.texStorage2D(3553,O,be,Ie[0].width,Ie[0].height);for(let X=0,ie=Ie.length;X<ie;X++)xe=Ie[X],We?t.texSubImage2D(3553,X,0,0,xe.width,xe.height,Se,fe,xe.data):t.texImage2D(3553,X,be,xe.width,xe.height,0,Se,fe,xe.data);w.generateMipmaps=!1}else We?(Qe&&t.texStorage2D(3553,O,be,J.width,J.height),t.texSubImage2D(3553,0,0,0,J.width,J.height,Se,fe,J.data)):t.texImage2D(3553,0,be,J.width,J.height,0,Se,fe,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){We&&Qe&&t.texStorage3D(35866,O,be,Ie[0].width,Ie[0].height,J.depth);for(let X=0,ie=Ie.length;X<ie;X++)xe=Ie[X],w.format!==tn?Se!==null?We?t.compressedTexSubImage3D(35866,X,0,0,0,xe.width,xe.height,J.depth,Se,xe.data,0,0):t.compressedTexImage3D(35866,X,be,xe.width,xe.height,J.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(35866,X,0,0,0,xe.width,xe.height,J.depth,Se,fe,xe.data):t.texImage3D(35866,X,be,xe.width,xe.height,J.depth,0,Se,fe,xe.data)}else{We&&Qe&&t.texStorage2D(3553,O,be,Ie[0].width,Ie[0].height);for(let X=0,ie=Ie.length;X<ie;X++)xe=Ie[X],w.format!==tn?Se!==null?We?t.compressedTexSubImage2D(3553,X,0,0,xe.width,xe.height,Se,xe.data):t.compressedTexImage2D(3553,X,be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(3553,X,0,0,xe.width,xe.height,Se,fe,xe.data):t.texImage2D(3553,X,be,xe.width,xe.height,0,Se,fe,xe.data)}else if(w.isDataArrayTexture)We?(Qe&&t.texStorage3D(35866,O,be,J.width,J.height,J.depth),t.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,Se,fe,J.data)):t.texImage3D(35866,0,be,J.width,J.height,J.depth,0,Se,fe,J.data);else if(w.isData3DTexture)We?(Qe&&t.texStorage3D(32879,O,be,J.width,J.height,J.depth),t.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,Se,fe,J.data)):t.texImage3D(32879,0,be,J.width,J.height,J.depth,0,Se,fe,J.data);else if(w.isFramebufferTexture){if(Qe)if(We)t.texStorage2D(3553,O,be,J.width,J.height);else{let X=J.width,ie=J.height;for(let de=0;de<O;de++)t.texImage2D(3553,de,be,X,ie,0,Se,fe,null),X>>=1,ie>>=1}}else if(Ie.length>0&&ve){We&&Qe&&t.texStorage2D(3553,O,be,Ie[0].width,Ie[0].height);for(let X=0,ie=Ie.length;X<ie;X++)xe=Ie[X],We?t.texSubImage2D(3553,X,0,0,Se,fe,xe):t.texImage2D(3553,X,be,Se,fe,xe);w.generateMipmaps=!1}else We?(Qe&&t.texStorage2D(3553,O,be,J.width,J.height),t.texSubImage2D(3553,0,0,0,Se,fe,J)):t.texImage2D(3553,0,be,Se,fe,J);R(w,ve)&&F(D),ge.__version=le.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function me(A,w,S){if(w.image.length!==6)return;const D=Me(A,w),te=w.source;t.bindTexture(34067,A.__webglTexture,33984+S);const le=n.get(te);if(te.version!==le.__version||D===!0){t.activeTexture(33984+S),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);const ge=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,J=[];for(let X=0;X<6;X++)!ge&&!oe?J[X]=b(w.image[X],!1,!0,c):J[X]=oe?w.image[X].image:w.image[X],J[X]=yt(w,J[X]);const ve=J[0],Se=_(ve)||a,fe=s.convert(w.format,w.encoding),be=s.convert(w.type),xe=x(w.internalFormat,fe,be,w.encoding),Ie=a&&w.isVideoTexture!==!0,We=le.__version===void 0||D===!0;let Qe=E(w,ve,Se);Y(34067,w,Se);let O;if(ge){Ie&&We&&t.texStorage2D(34067,Qe,xe,ve.width,ve.height);for(let X=0;X<6;X++){O=J[X].mipmaps;for(let ie=0;ie<O.length;ie++){const de=O[ie];w.format!==tn?fe!==null?Ie?t.compressedTexSubImage2D(34069+X,ie,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(34069+X,ie,xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+X,ie,0,0,de.width,de.height,fe,be,de.data):t.texImage2D(34069+X,ie,xe,de.width,de.height,0,fe,be,de.data)}}}else{O=w.mipmaps,Ie&&We&&(O.length>0&&Qe++,t.texStorage2D(34067,Qe,xe,J[0].width,J[0].height));for(let X=0;X<6;X++)if(oe){Ie?t.texSubImage2D(34069+X,0,0,0,J[X].width,J[X].height,fe,be,J[X].data):t.texImage2D(34069+X,0,xe,J[X].width,J[X].height,0,fe,be,J[X].data);for(let ie=0;ie<O.length;ie++){const _e=O[ie].image[X].image;Ie?t.texSubImage2D(34069+X,ie+1,0,0,_e.width,_e.height,fe,be,_e.data):t.texImage2D(34069+X,ie+1,xe,_e.width,_e.height,0,fe,be,_e.data)}}else{Ie?t.texSubImage2D(34069+X,0,0,0,fe,be,J[X]):t.texImage2D(34069+X,0,xe,fe,be,J[X]);for(let ie=0;ie<O.length;ie++){const de=O[ie];Ie?t.texSubImage2D(34069+X,ie+1,0,0,fe,be,de.image[X]):t.texImage2D(34069+X,ie+1,xe,fe,be,de.image[X])}}}R(w,Se)&&F(34067),le.__version=te.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ce(A,w,S,D,te){const le=s.convert(S.format,S.encoding),ge=s.convert(S.type),oe=x(S.internalFormat,le,ge,S.encoding);n.get(w).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,oe,w.width,w.height,w.depth,0,le,ge,null):t.texImage2D(te,0,oe,w.width,w.height,0,le,ge,null)),t.bindFramebuffer(36160,A),Ue(w)?d.framebufferTexture2DMultisampleEXT(36160,D,te,n.get(S).__webglTexture,0,Ze(w)):(te===3553||te>=34069&&te<=34074)&&i.framebufferTexture2D(36160,D,te,n.get(S).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(A,w,S){if(i.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let D=33189;if(S||Ue(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===ai?D=36012:te.type===Ri&&(D=33190));const le=Ze(w);Ue(w)?d.renderbufferStorageMultisampleEXT(36161,le,D,w.width,w.height):i.renderbufferStorageMultisample(36161,le,D,w.width,w.height)}else i.renderbufferStorage(36161,D,w.width,w.height);i.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const D=Ze(w);S&&Ue(w)===!1?i.renderbufferStorageMultisample(36161,D,35056,w.width,w.height):Ue(w)?d.renderbufferStorageMultisampleEXT(36161,D,35056,w.width,w.height):i.renderbufferStorage(36161,34041,w.width,w.height),i.framebufferRenderbuffer(36160,33306,36161,A)}else{const D=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<D.length;te++){const le=D[te],ge=s.convert(le.format,le.encoding),oe=s.convert(le.type),J=x(le.internalFormat,ge,oe,le.encoding),ve=Ze(w);S&&Ue(w)===!1?i.renderbufferStorageMultisample(36161,ve,J,w.width,w.height):Ue(w)?d.renderbufferStorageMultisampleEXT(36161,ve,J,w.width,w.height):i.renderbufferStorage(36161,J,w.width,w.height)}}i.bindRenderbuffer(36161,null)}function Te(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const D=n.get(w.depthTexture).__webglTexture,te=Ze(w);if(w.depthTexture.format===Pi)Ue(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,D,0,te):i.framebufferTexture2D(36160,36096,3553,D,0);else if(w.depthTexture.format===Dr)Ue(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,D,0,te):i.framebufferTexture2D(36160,33306,3553,D,0);else throw new Error("Unknown depthTexture format")}function ye(A){const w=n.get(A),S=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(S)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,A)}else if(S){w.__webglDepthbuffer=[];for(let D=0;D<6;D++)t.bindFramebuffer(36160,w.__webglFramebuffer[D]),w.__webglDepthbuffer[D]=i.createRenderbuffer(),Be(w.__webglDepthbuffer[D],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),Be(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function it(A,w,S){const D=n.get(A);w!==void 0&&ce(D.__webglFramebuffer,A,A.texture,36064,3553),S!==void 0&&ye(A)}function rt(A){const w=A.texture,S=n.get(A),D=n.get(w);A.addEventListener("dispose",Q),A.isWebGLMultipleRenderTargets!==!0&&(D.__webglTexture===void 0&&(D.__webglTexture=i.createTexture()),D.__version=w.version,o.memory.textures++);const te=A.isWebGLCubeRenderTarget===!0,le=A.isWebGLMultipleRenderTargets===!0,ge=_(A)||a;if(te){S.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)S.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(S.__webglFramebuffer=i.createFramebuffer(),le)if(r.drawBuffers){const oe=A.texture;for(let J=0,ve=oe.length;J<ve;J++){const Se=n.get(oe[J]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ue(A)===!1){const oe=le?w:[w];S.__webglMultisampledFramebuffer=i.createFramebuffer(),S.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,S.__webglMultisampledFramebuffer);for(let J=0;J<oe.length;J++){const ve=oe[J];S.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(36161,S.__webglColorRenderbuffer[J]);const Se=s.convert(ve.format,ve.encoding),fe=s.convert(ve.type),be=x(ve.internalFormat,Se,fe,ve.encoding,A.isXRRenderTarget===!0),xe=Ze(A);i.renderbufferStorageMultisample(36161,xe,be,A.width,A.height),i.framebufferRenderbuffer(36160,36064+J,36161,S.__webglColorRenderbuffer[J])}i.bindRenderbuffer(36161,null),A.depthBuffer&&(S.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(S.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,D.__webglTexture),Y(34067,w,ge);for(let oe=0;oe<6;oe++)ce(S.__webglFramebuffer[oe],A,w,36064,34069+oe);R(w,ge)&&F(34067),t.unbindTexture()}else if(le){const oe=A.texture;for(let J=0,ve=oe.length;J<ve;J++){const Se=oe[J],fe=n.get(Se);t.bindTexture(3553,fe.__webglTexture),Y(3553,Se,ge),ce(S.__webglFramebuffer,A,Se,36064+J,3553),R(Se,ge)&&F(3553)}t.unbindTexture()}else{let oe=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?oe=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,D.__webglTexture),Y(oe,w,ge),ce(S.__webglFramebuffer,A,w,36064,oe),R(w,ge)&&F(oe),t.unbindTexture()}A.depthBuffer&&ye(A)}function st(A){const w=_(A)||a,S=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let D=0,te=S.length;D<te;D++){const le=S[D];if(R(le,w)){const ge=A.isWebGLCubeRenderTarget?34067:3553,oe=n.get(le).__webglTexture;t.bindTexture(ge,oe),F(ge),t.unbindTexture()}}}function pt(A){if(a&&A.samples>0&&Ue(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],S=A.width,D=A.height;let te=16384;const le=[],ge=A.stencilBuffer?33306:36096,oe=n.get(A),J=A.isWebGLMultipleRenderTargets===!0;if(J)for(let ve=0;ve<w.length;ve++)t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ve,36161,null),t.bindFramebuffer(36160,oe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ve,3553,null,0);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer);for(let ve=0;ve<w.length;ve++){le.push(36064+ve),A.depthBuffer&&le.push(ge);const Se=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Se===!1&&(A.depthBuffer&&(te|=256),A.stencilBuffer&&(te|=1024)),J&&i.framebufferRenderbuffer(36008,36064,36161,oe.__webglColorRenderbuffer[ve]),Se===!0&&(i.invalidateFramebuffer(36008,[ge]),i.invalidateFramebuffer(36009,[ge])),J){const fe=n.get(w[ve]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,fe,0)}i.blitFramebuffer(0,0,S,D,0,0,S,D,te,9728),p&&i.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),J)for(let ve=0;ve<w.length;ve++){t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ve,36161,oe.__webglColorRenderbuffer[ve]);const Se=n.get(w[ve]).__webglTexture;t.bindFramebuffer(36160,oe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ve,3553,Se,0)}t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}}function Ze(A){return Math.min(h,A.samples)}function Ue(A){const w=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Lt(A){const w=o.render.frame;g.get(A)!==w&&(g.set(A,w),A.update())}function yt(A,w){const S=A.encoding,D=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Vl||S!==Ui&&(S===qe?a===!1?e.has("EXT_sRGB")===!0&&D===tn?(A.format=Vl,A.minFilter=Bt,A.generateMipmaps=!1):w=sp.sRGBToLinear(w):(D!==tn||te!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",S)),w}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=ne,this.rebindTextures=it,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ue}function ET(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Bi)return 5121;if(s===sb)return 32819;if(s===ob)return 32820;if(s===nb)return 5120;if(s===ib)return 5122;if(s===ep)return 5123;if(s===rb)return 5124;if(s===Ri)return 5125;if(s===ai)return 5126;if(s===vs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ab)return 6406;if(s===tn)return 6408;if(s===cb)return 6409;if(s===ub)return 6410;if(s===Pi)return 6402;if(s===Dr)return 34041;if(s===lb)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Vl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===db)return 6403;if(s===hb)return 36244;if(s===fb)return 33319;if(s===pb)return 33320;if(s===mb)return 36249;if(s===Ia||s===Fa||s===Na||s===Oa)if(o===qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Oa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ku||s===Bu||s===Uu||s===zu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ku)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Uu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gb)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vu||s===Hu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vu)return o===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Hu)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gu||s===Wu||s===$u||s===ju||s===qu||s===Xu||s===Ku||s===Yu||s===Zu||s===Ju||s===Qu||s===ed||s===td||s===nd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Gu)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wu)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$u)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ju)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qu)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xu)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ku)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yu)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zu)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ju)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qu)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ed)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===td)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nd)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===id)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===id)return o===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===br?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class AT extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class li extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CT={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const f=t.getJointPose(m,n),v=this._getHandJoint(c,m);f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=f.radius),v.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(CT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new li;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class DT extends St{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Pi,u!==Pi&&u!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Pi&&(n=Ri),n===void 0&&u===Dr&&(n=br),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1}}class RT extends Gr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,d=null,p=null;const g=t.getContextAttributes();let m=null,f=null;const v=[],y=[],b=new Set,_=new Map,M=new kt;M.layers.enable(1),M.viewport=new je;const R=new kt;R.layers.enable(2),R.viewport=new je;const F=[M,R],x=new AT;x.layers.enable(1),x.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let W=v[V];return W===void 0&&(W=new ul,v[V]=W),W.getTargetRaySpace()},this.getControllerGrip=function(V){let W=v[V];return W===void 0&&(W=new ul,v[V]=W),W.getGripSpace()},this.getHand=function(V){let W=v[V];return W===void 0&&(W=new ul,v[V]=W),W.getHandSpace()};function $(V){const W=y.indexOf(V.inputSource);if(W===-1)return;const ne=v[W];ne!==void 0&&ne.dispatchEvent({type:V.type,data:V.inputSource})}function Q(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",G);for(let V=0;V<v.length;V++){const W=y[V];W!==null&&(y[V]=null,v[V].disconnect(W))}E=null,N=null,e.setRenderTarget(m),d=null,h=null,u=null,r=null,f=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:d}),f=new hn(d.framebufferWidth,d.framebufferHeight,{format:tn,type:Bi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let W=null,ne=null,re=null;g.depth&&(re=g.stencil?35056:33190,W=g.stencil?Dr:Pi,ne=g.stencil?br:Ri);const U={colorFormat:32856,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(U),r.updateRenderState({layers:[h]}),f=new hn(h.textureWidth,h.textureHeight,{format:tn,type:Bi,depthTexture:new DT(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Y=e.properties.get(f);Y.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),j.setContext(r),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function G(V){for(let W=0;W<V.removed.length;W++){const ne=V.removed[W],re=y.indexOf(ne);re>=0&&(y[re]=null,v[re].disconnect(ne))}for(let W=0;W<V.added.length;W++){const ne=V.added[W];let re=y.indexOf(ne);if(re===-1){for(let Y=0;Y<v.length;Y++)if(Y>=y.length){y.push(ne),re=Y;break}else if(y[Y]===null){y[Y]=ne,re=Y;break}if(re===-1)break}const U=v[re];U&&U.connect(ne)}}const I=new P,k=new P;function K(V,W,ne){I.setFromMatrixPosition(W.matrixWorld),k.setFromMatrixPosition(ne.matrixWorld);const re=I.distanceTo(k),U=W.projectionMatrix.elements,Y=ne.projectionMatrix.elements,Me=U[14]/(U[10]-1),ue=U[14]/(U[10]+1),me=(U[9]+1)/U[5],ce=(U[9]-1)/U[5],Be=(U[8]-1)/U[0],Te=(Y[8]+1)/Y[0],ye=Me*Be,it=Me*Te,rt=re/(-Be+Te),st=rt*-Be;W.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(st),V.translateZ(rt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const pt=Me+rt,Ze=ue+rt,Ue=ye-st,Lt=it+(re-st),yt=me*ue/Ze*pt,A=ce*ue/Ze*pt;V.projectionMatrix.makePerspective(Ue,Lt,yt,A,pt,Ze)}function L(V,W){W===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(W.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;x.near=R.near=M.near=V.near,x.far=R.far=M.far=V.far,(E!==x.near||N!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,N=x.far);const W=V.parent,ne=x.cameras;L(x,W);for(let U=0;U<ne.length;U++)L(ne[U],W);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),V.matrix.copy(x.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const re=V.children;for(let U=0,Y=re.length;U<Y;U++)re[U].updateMatrixWorld(!0);ne.length===2?K(x,M,R):x.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(V){h!==null&&(h.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.getPlanes=function(){return b};let B=null;function q(V,W){if(c=W.getViewerPose(l||o),p=W,c!==null){const ne=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let re=!1;ne.length!==x.cameras.length&&(x.cameras.length=0,re=!0);for(let U=0;U<ne.length;U++){const Y=ne[U];let Me=null;if(d!==null)Me=d.getViewport(Y);else{const me=u.getViewSubImage(h,Y);Me=me.viewport,U===0&&(e.setRenderTargetTextures(f,me.colorTexture,h.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(f))}let ue=F[U];ue===void 0&&(ue=new kt,ue.layers.enable(U),ue.viewport=new je,F[U]=ue),ue.matrix.fromArray(Y.transform.matrix),ue.projectionMatrix.fromArray(Y.projectionMatrix),ue.viewport.set(Me.x,Me.y,Me.width,Me.height),U===0&&x.matrix.copy(ue.matrix),re===!0&&x.cameras.push(ue)}}for(let ne=0;ne<v.length;ne++){const re=y[ne],U=v[ne];re!==null&&U!==void 0&&U.update(re,W,l||o)}if(B&&B(V,W),W.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:W.detectedPlanes});let ne=null;for(const re of b)W.detectedPlanes.has(re)||(ne===null&&(ne=[]),ne.push(re));if(ne!==null)for(const re of ne)b.delete(re),_.delete(re),n.dispatchEvent({type:"planeremoved",data:re});for(const re of W.detectedPlanes)if(!b.has(re))b.add(re),_.set(re,W.lastChangedTime),n.dispatchEvent({type:"planeadded",data:re});else{const U=_.get(re);re.lastChangedTime>U&&(_.set(re,re.lastChangedTime),n.dispatchEvent({type:"planechanged",data:re}))}}p=null}const j=new pp;j.setAnimationLoop(q),this.setAnimationLoop=function(V){B=V},this.dispose=function(){}}}function LT(i,e){function t(m,f){f.color.getRGB(m.fogColor.value,dp(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,v,y,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),c(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&d(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),p(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?a(m,f,v,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Ut&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Ut&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const _=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let y;f.map?y=f.map:f.specularMap?y=f.specularMap:f.displacementMap?y=f.displacementMap:f.normalMap?y=f.normalMap:f.bumpMap?y=f.bumpMap:f.roughnessMap?y=f.roughnessMap:f.metalnessMap?y=f.metalnessMap:f.alphaMap?y=f.alphaMap:f.emissiveMap?y=f.emissiveMap:f.clearcoatMap?y=f.clearcoatMap:f.clearcoatNormalMap?y=f.clearcoatNormalMap:f.clearcoatRoughnessMap?y=f.clearcoatRoughnessMap:f.iridescenceMap?y=f.iridescenceMap:f.iridescenceThicknessMap?y=f.iridescenceThicknessMap:f.specularIntensityMap?y=f.specularIntensityMap:f.specularColorMap?y=f.specularColorMap:f.transmissionMap?y=f.transmissionMap:f.thicknessMap?y=f.thicknessMap:f.sheenColorMap?y=f.sheenColorMap:f.sheenRoughnessMap&&(y=f.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let b;f.aoMap?b=f.aoMap:f.lightMap&&(b=f.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function a(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b;f.map?b=f.map:f.alphaMap&&(b=f.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ut&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function PT(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(y,b){const _=b.program;n.uniformBlockBinding(y,_)}function c(y,b){let _=r[y.id];_===void 0&&(g(y),_=u(y),r[y.id]=_,y.addEventListener("dispose",f));const M=b.program;n.updateUBOMapping(y,M);const R=e.render.frame;s[y.id]!==R&&(d(y),s[y.id]=R)}function u(y){const b=h();y.__bindingPointIndex=b;const _=i.createBuffer(),M=y.__size,R=y.usage;return i.bindBuffer(35345,_),i.bufferData(35345,M,R),i.bindBuffer(35345,null),i.bindBufferBase(35345,b,_),_}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=r[y.id],_=y.uniforms,M=y.__cache;i.bindBuffer(35345,b);for(let R=0,F=_.length;R<F;R++){const x=_[R];if(p(x,R,M)===!0){const E=x.value,N=x.__offset;typeof E=="number"?(x.__data[0]=E,i.bufferSubData(35345,N,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):E.toArray(x.__data),i.bufferSubData(35345,N,x.__data))}}i.bindBuffer(35345,null)}function p(y,b,_){const M=y.value;if(_[b]===void 0)return typeof M=="number"?_[b]=M:_[b]=M.clone(),!0;if(typeof M=="number"){if(_[b]!==M)return _[b]=M,!0}else{const R=_[b];if(R.equals(M)===!1)return R.copy(M),!0}return!1}function g(y){const b=y.uniforms;let _=0;const M=16;let R=0;for(let F=0,x=b.length;F<x;F++){const E=b[F],N=m(E);if(E.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=_,F>0){R=_%M;const $=M-R;R!==0&&$-N.boundary<0&&(_+=M-R,E.__offset=_)}_+=N.storage}return R=_%M,R>0&&(_+=M-R),y.__size=_,y.__cache={},this}function m(y){const b=y.value,_={boundary:0,storage:0};return typeof b=="number"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function f(y){const b=y.target;b.removeEventListener("dispose",f);const _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function v(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:v}}function IT(){const i=bs("canvas");return i.style.display="block",i}function xp(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:IT(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ui,this.physicallyCorrectLights=!1,this.toneMapping=Hn,this.toneMappingExposure=1;const m=this;let f=!1,v=0,y=0,b=null,_=-1,M=null;const R=new je,F=new je;let x=null,E=e.width,N=e.height,$=1,Q=null,G=null;const I=new je(0,0,E,N),k=new je(0,0,E,N);let K=!1;const L=new xc;let B=!1,q=!1,j=null;const V=new Pe,W=new he,ne=new P,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function U(){return b===null?$:1}let Y=t;function Me(T,H){for(let Z=0;Z<T.length;Z++){const z=T[Z],ee=e.getContext(z,H);if(ee!==null)return ee}return null}try{const T={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mc}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),Y===null){const H=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&H.shift(),Y=Me(H,T),Y===null)throw Me(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ue,me,ce,Be,Te,ye,it,rt,st,pt,Ze,Ue,Lt,yt,A,w,S,D,te,le,ge,oe,J,ve;function Se(){ue=new WS(Y),me=new BS(Y,ue,i),ue.init(me),oe=new ET(Y,ue,me),ce=new MT(Y,ue,me),Be=new qS,Te=new uT,ye=new TT(Y,ue,ce,Te,me,oe,Be),it=new zS(m),rt=new GS(m),st=new n1(Y,me),J=new OS(Y,ue,st,me),pt=new $S(Y,st,Be,J),Ze=new ZS(Y,pt,st,Be),te=new YS(Y,me,ye),w=new US(Te),Ue=new cT(m,it,rt,ue,me,J,w),Lt=new LT(m,Te),yt=new hT,A=new _T(ue,me),D=new NS(m,it,rt,ce,Ze,u,o),S=new ST(m,Ze,me),ve=new PT(Y,Be,me,ce),le=new kS(Y,ue,Be,me),ge=new jS(Y,ue,Be,me),Be.programs=Ue.programs,m.capabilities=me,m.extensions=ue,m.properties=Te,m.renderLists=yt,m.shadowMap=S,m.state=ce,m.info=Be}Se();const fe=new RT(m,Y);this.xr=fe,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(E,N,!1))},this.getSize=function(T){return T.set(E,N)},this.setSize=function(T,H,Z){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=T,N=H,e.width=Math.floor(T*$),e.height=Math.floor(H*$),Z!==!1&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(E*$,N*$).floor()},this.setDrawingBufferSize=function(T,H,Z){E=T,N=H,$=Z,e.width=Math.floor(T*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(I)},this.setViewport=function(T,H,Z,z){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,H,Z,z),ce.viewport(R.copy(I).multiplyScalar($).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,H,Z,z){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,H,Z,z),ce.scissor(F.copy(k).multiplyScalar($).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(T){ce.setScissorTest(K=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){G=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor.apply(D,arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha.apply(D,arguments)},this.clear=function(T=!0,H=!0,Z=!0){let z=0;T&&(z|=16384),H&&(z|=256),Z&&(z|=1024),Y.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),yt.dispose(),A.dispose(),Te.dispose(),it.dispose(),rt.dispose(),Ze.dispose(),J.dispose(),ve.dispose(),Ue.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",de),fe.removeEventListener("sessionend",_e),j&&(j.dispose(),j=null),$e.stop()};function be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const T=Be.autoReset,H=S.enabled,Z=S.autoUpdate,z=S.needsUpdate,ee=S.type;Se(),Be.autoReset=T,S.enabled=H,S.autoUpdate=Z,S.needsUpdate=z,S.type=ee}function Ie(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function We(T){const H=T.target;H.removeEventListener("dispose",We),Qe(H)}function Qe(T){O(T),Te.remove(T)}function O(T){const H=Te.get(T).programs;H!==void 0&&(H.forEach(function(Z){Ue.releaseProgram(Z)}),T.isShaderMaterial&&Ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Z,z,ee,we){H===null&&(H=re);const Ae=ee.isMesh&&ee.matrixWorld.determinant()<0,Re=ig(T,H,Z,z,ee);ce.setMaterial(z,Ae);let Le=Z.index,He=1;z.wireframe===!0&&(Le=pt.getWireframeAttribute(Z),He=2);const Fe=Z.drawRange,Ne=Z.attributes.position;let ot=Fe.start*He,Ht=(Fe.start+Fe.count)*He;we!==null&&(ot=Math.max(ot,we.start*He),Ht=Math.min(Ht,(we.start+we.count)*He)),Le!==null?(ot=Math.max(ot,0),Ht=Math.min(Ht,Le.count)):Ne!=null&&(ot=Math.max(ot,0),Ht=Math.min(Ht,Ne.count));const Ln=Ht-ot;if(Ln<0||Ln===1/0)return;J.setup(ee,z,Re,Z,Le);let xi,at=le;if(Le!==null&&(xi=st.get(Le),at=ge,at.setIndex(xi)),ee.isMesh)z.wireframe===!0?(ce.setLineWidth(z.wireframeLinewidth*U()),at.setMode(1)):at.setMode(4);else if(ee.isLine){let Oe=z.linewidth;Oe===void 0&&(Oe=1),ce.setLineWidth(Oe*U()),ee.isLineSegments?at.setMode(1):ee.isLineLoop?at.setMode(2):at.setMode(3)}else ee.isPoints?at.setMode(0):ee.isSprite&&at.setMode(4);if(ee.isInstancedMesh)at.renderInstances(ot,Ln,ee.count);else if(Z.isInstancedBufferGeometry){const Oe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,pa=Math.min(Z.instanceCount,Oe);at.renderInstances(ot,Ln,pa)}else at.render(ot,Ln)},this.compile=function(T,H){function Z(z,ee,we){z.transparent===!0&&z.side===Un?(z.side=Ut,z.needsUpdate=!0,Yt(z,ee,we),z.side=ki,z.needsUpdate=!0,Yt(z,ee,we),z.side=Un):Yt(z,ee,we)}d=A.get(T),d.init(),g.push(d),T.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(m.physicallyCorrectLights),T.traverse(function(z){const ee=z.material;if(ee)if(Array.isArray(ee))for(let we=0;we<ee.length;we++){const Ae=ee[we];Z(Ae,T,z)}else Z(ee,T,z)}),g.pop(),d=null};let X=null;function ie(T){X&&X(T)}function de(){$e.stop()}function _e(){$e.start()}const $e=new pp;$e.setAnimationLoop(ie),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(T){X=T,fe.setAnimationLoop(T),T===null?$e.stop():$e.start()},fe.addEventListener("sessionstart",de),fe.addEventListener("sessionend",_e),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(H),H=fe.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,H,b),d=A.get(T,g.length),d.init(),g.push(d),V.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),L.setFromProjectionMatrix(V),q=this.localClippingEnabled,B=w.init(this.clippingPlanes,q,H),h=yt.get(T,p.length),h.init(),p.push(h),mt(T,H,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(Q,G),B===!0&&w.beginShadows();const Z=d.state.shadowsArray;if(S.render(Z,T,H),B===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),D.render(h,T),d.setupLights(m.physicallyCorrectLights),H.isArrayCamera){const z=H.cameras;for(let ee=0,we=z.length;ee<we;ee++){const Ae=z[ee];Tt(h,T,Ae,Ae.viewport)}}else Tt(h,T,H);b!==null&&(ye.updateMultisampleRenderTarget(b),ye.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(m,T,H),J.resetDefaultState(),_=-1,M=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function mt(T,H,Z,z){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||L.intersectsSprite(T)){z&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const Ae=Ze.update(T),Re=T.material;Re.visible&&h.push(T,Ae,Re,Z,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Be.render.frame&&(T.skeleton.update(),T.skeleton.frame=Be.render.frame),!T.frustumCulled||L.intersectsObject(T))){z&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const Ae=Ze.update(T),Re=T.material;if(Array.isArray(Re)){const Le=Ae.groups;for(let He=0,Fe=Le.length;He<Fe;He++){const Ne=Le[He],ot=Re[Ne.materialIndex];ot&&ot.visible&&h.push(T,Ae,ot,Z,ne.z,Ne)}}else Re.visible&&h.push(T,Ae,Re,Z,ne.z,null)}}const we=T.children;for(let Ae=0,Re=we.length;Ae<Re;Ae++)mt(we[Ae],H,Z,z)}function Tt(T,H,Z,z){const ee=T.opaque,we=T.transmissive,Ae=T.transparent;d.setupLightsView(Z),we.length>0&&_i(ee,H,Z),z&&ce.viewport(R.copy(z)),ee.length>0&&et(ee,H,Z),we.length>0&&et(we,H,Z),Ae.length>0&&et(Ae,H,Z),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function _i(T,H,Z){const z=me.isWebGL2;j===null&&(j=new hn(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?vs:Bi,minFilter:Hr,samples:z&&s===!0?4:0})),m.getDrawingBufferSize(W),z?j.setSize(W.x,W.y):j.setSize(Uo(W.x),Uo(W.y));const ee=m.getRenderTarget();m.setRenderTarget(j),m.clear();const we=m.toneMapping;m.toneMapping=Hn,et(T,H,Z),m.toneMapping=we,ye.updateMultisampleRenderTarget(j),ye.updateRenderTargetMipmap(j),m.setRenderTarget(ee)}function et(T,H,Z){const z=H.isScene===!0?H.overrideMaterial:null;for(let ee=0,we=T.length;ee<we;ee++){const Ae=T[ee],Re=Ae.object,Le=Ae.geometry,He=z===null?Ae.material:z,Fe=Ae.group;Re.layers.test(Z.layers)&&Rn(Re,H,Z,Le,He,Fe)}}function Rn(T,H,Z,z,ee,we){T.onBeforeRender(m,H,Z,z,ee,we),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(m,H,Z,z,T,we),ee.transparent===!0&&ee.side===Un?(ee.side=Ut,ee.needsUpdate=!0,m.renderBufferDirect(Z,H,z,ee,T,we),ee.side=ki,ee.needsUpdate=!0,m.renderBufferDirect(Z,H,z,ee,T,we),ee.side=Un):m.renderBufferDirect(Z,H,z,ee,T,we),T.onAfterRender(m,H,Z,z,ee,we)}function Yt(T,H,Z){H.isScene!==!0&&(H=re);const z=Te.get(T),ee=d.state.lights,we=d.state.shadowsArray,Ae=ee.state.version,Re=Ue.getParameters(T,ee.state,we,H,Z),Le=Ue.getProgramCacheKey(Re);let He=z.programs;z.environment=T.isMeshStandardMaterial?H.environment:null,z.fog=H.fog,z.envMap=(T.isMeshStandardMaterial?rt:it).get(T.envMap||z.environment),He===void 0&&(T.addEventListener("dispose",We),He=new Map,z.programs=He);let Fe=He.get(Le);if(Fe!==void 0){if(z.currentProgram===Fe&&z.lightsStateVersion===Ae)return Xc(T,Re),Fe}else Re.uniforms=Ue.getUniforms(T),T.onBuild(Z,Re,m),T.onBeforeCompile(Re,m),Fe=Ue.acquireProgram(Re,Le),He.set(Le,Fe),z.uniforms=Re.uniforms;const Ne=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=w.uniform),Xc(T,Re),z.needsLights=sg(T),z.lightsStateVersion=Ae,z.needsLights&&(Ne.ambientLightColor.value=ee.state.ambient,Ne.lightProbe.value=ee.state.probe,Ne.directionalLights.value=ee.state.directional,Ne.directionalLightShadows.value=ee.state.directionalShadow,Ne.spotLights.value=ee.state.spot,Ne.spotLightShadows.value=ee.state.spotShadow,Ne.rectAreaLights.value=ee.state.rectArea,Ne.ltc_1.value=ee.state.rectAreaLTC1,Ne.ltc_2.value=ee.state.rectAreaLTC2,Ne.pointLights.value=ee.state.point,Ne.pointLightShadows.value=ee.state.pointShadow,Ne.hemisphereLights.value=ee.state.hemi,Ne.directionalShadowMap.value=ee.state.directionalShadowMap,Ne.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ne.spotShadowMap.value=ee.state.spotShadowMap,Ne.spotLightMatrix.value=ee.state.spotLightMatrix,Ne.spotLightMap.value=ee.state.spotLightMap,Ne.pointShadowMap.value=ee.state.pointShadowMap,Ne.pointShadowMatrix.value=ee.state.pointShadowMatrix);const ot=Fe.getUniforms(),Ht=Co.seqWithValue(ot.seq,Ne);return z.currentProgram=Fe,z.uniformsList=Ht,Fe}function Xc(T,H){const Z=Te.get(T);Z.outputEncoding=H.outputEncoding,Z.instancing=H.instancing,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function ig(T,H,Z,z,ee){H.isScene!==!0&&(H=re),ye.resetTextureUnits();const we=H.fog,Ae=z.isMeshStandardMaterial?H.environment:null,Re=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Ui,Le=(z.isMeshStandardMaterial?rt:it).get(z.envMap||Ae),He=z.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Fe=!!z.normalMap&&!!Z.attributes.tangent,Ne=!!Z.morphAttributes.position,ot=!!Z.morphAttributes.normal,Ht=!!Z.morphAttributes.color,Ln=z.toneMapped?m.toneMapping:Hn,xi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,at=xi!==void 0?xi.length:0,Oe=Te.get(z),pa=d.state.lights;if(B===!0&&(q===!0||T!==M)){const Gt=T===M&&z.id===_;w.setState(z,T,Gt)}let gt=!1;z.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==pa.state.version||Oe.outputEncoding!==Re||ee.isInstancedMesh&&Oe.instancing===!1||!ee.isInstancedMesh&&Oe.instancing===!0||ee.isSkinnedMesh&&Oe.skinning===!1||!ee.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Le||z.fog===!0&&Oe.fog!==we||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==w.numPlanes||Oe.numIntersection!==w.numIntersection)||Oe.vertexAlphas!==He||Oe.vertexTangents!==Fe||Oe.morphTargets!==Ne||Oe.morphNormals!==ot||Oe.morphColors!==Ht||Oe.toneMapping!==Ln||me.isWebGL2===!0&&Oe.morphTargetsCount!==at)&&(gt=!0):(gt=!0,Oe.__version=z.version);let yi=Oe.currentProgram;gt===!0&&(yi=Yt(z,H,ee));let Kc=!1,Yr=!1,ma=!1;const Pt=yi.getUniforms(),bi=Oe.uniforms;if(ce.useProgram(yi.program)&&(Kc=!0,Yr=!0,ma=!0),z.id!==_&&(_=z.id,Yr=!0),Kc||M!==T){if(Pt.setValue(Y,"projectionMatrix",T.projectionMatrix),me.logarithmicDepthBuffer&&Pt.setValue(Y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Yr=!0,ma=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Gt=Pt.map.cameraPosition;Gt!==void 0&&Gt.setValue(Y,ne.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Pt.setValue(Y,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||ee.isSkinnedMesh)&&Pt.setValue(Y,"viewMatrix",T.matrixWorldInverse)}if(ee.isSkinnedMesh){Pt.setOptional(Y,ee,"bindMatrix"),Pt.setOptional(Y,ee,"bindMatrixInverse");const Gt=ee.skeleton;Gt&&(me.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),Pt.setValue(Y,"boneTexture",Gt.boneTexture,ye),Pt.setValue(Y,"boneTextureSize",Gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ga=Z.morphAttributes;if((ga.position!==void 0||ga.normal!==void 0||ga.color!==void 0&&me.isWebGL2===!0)&&te.update(ee,Z,z,yi),(Yr||Oe.receiveShadow!==ee.receiveShadow)&&(Oe.receiveShadow=ee.receiveShadow,Pt.setValue(Y,"receiveShadow",ee.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(bi.envMap.value=Le,bi.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Yr&&(Pt.setValue(Y,"toneMappingExposure",m.toneMappingExposure),Oe.needsLights&&rg(bi,ma),we&&z.fog===!0&&Lt.refreshFogUniforms(bi,we),Lt.refreshMaterialUniforms(bi,z,$,N,j),Co.upload(Y,Oe.uniformsList,bi,ye)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Co.upload(Y,Oe.uniformsList,bi,ye),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Pt.setValue(Y,"center",ee.center),Pt.setValue(Y,"modelViewMatrix",ee.modelViewMatrix),Pt.setValue(Y,"normalMatrix",ee.normalMatrix),Pt.setValue(Y,"modelMatrix",ee.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Gt=z.uniformsGroups;for(let va=0,og=Gt.length;va<og;va++)if(me.isWebGL2){const Yc=Gt[va];ve.update(Yc,yi),ve.bind(Yc,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function rg(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function sg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,H,Z){Te.get(T.texture).__webglTexture=H,Te.get(T.depthTexture).__webglTexture=Z;const z=Te.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=Z===void 0,z.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const Z=Te.get(T);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Z=0){b=T,v=H,y=Z;let z=!0,ee=null,we=!1,Ae=!1;if(T){const Le=Te.get(T);Le.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),z=!1):Le.__webglFramebuffer===void 0?ye.setupRenderTarget(T):Le.__hasExternalTextures&&ye.rebindTextures(T,Te.get(T.texture).__webglTexture,Te.get(T.depthTexture).__webglTexture);const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);const Fe=Te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ee=Fe[H],we=!0):me.isWebGL2&&T.samples>0&&ye.useMultisampledRTT(T)===!1?ee=Te.get(T).__webglMultisampledFramebuffer:ee=Fe,R.copy(T.viewport),F.copy(T.scissor),x=T.scissorTest}else R.copy(I).multiplyScalar($).floor(),F.copy(k).multiplyScalar($).floor(),x=K;if(ce.bindFramebuffer(36160,ee)&&me.drawBuffers&&z&&ce.drawBuffers(T,ee),ce.viewport(R),ce.scissor(F),ce.setScissorTest(x),we){const Le=Te.get(T.texture);Y.framebufferTexture2D(36160,36064,34069+H,Le.__webglTexture,Z)}else if(Ae){const Le=Te.get(T.texture),He=H||0;Y.framebufferTextureLayer(36160,36064,Le.__webglTexture,Z||0,He)}_=-1},this.readRenderTargetPixels=function(T,H,Z,z,ee,we,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){ce.bindFramebuffer(36160,Re);try{const Le=T.texture,He=Le.format,Fe=Le.type;if(He!==tn&&oe.convert(He)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Fe===vs&&(ue.has("EXT_color_buffer_half_float")||me.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Fe!==Bi&&oe.convert(Fe)!==Y.getParameter(35738)&&!(Fe===ai&&(me.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-z&&Z>=0&&Z<=T.height-ee&&Y.readPixels(H,Z,z,ee,oe.convert(He),oe.convert(Fe),we)}finally{const Le=b!==null?Te.get(b).__webglFramebuffer:null;ce.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(T,H,Z=0){const z=Math.pow(2,-Z),ee=Math.floor(H.image.width*z),we=Math.floor(H.image.height*z);ye.setTexture2D(H,0),Y.copyTexSubImage2D(3553,Z,0,0,T.x,T.y,ee,we),ce.unbindTexture()},this.copyTextureToTexture=function(T,H,Z,z=0){const ee=H.image.width,we=H.image.height,Ae=oe.convert(Z.format),Re=oe.convert(Z.type);ye.setTexture2D(Z,0),Y.pixelStorei(37440,Z.flipY),Y.pixelStorei(37441,Z.premultiplyAlpha),Y.pixelStorei(3317,Z.unpackAlignment),H.isDataTexture?Y.texSubImage2D(3553,z,T.x,T.y,ee,we,Ae,Re,H.image.data):H.isCompressedTexture?Y.compressedTexSubImage2D(3553,z,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Ae,H.mipmaps[0].data):Y.texSubImage2D(3553,z,T.x,T.y,Ae,Re,H.image),z===0&&Z.generateMipmaps&&Y.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Z,z,ee=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=T.max.x-T.min.x+1,Ae=T.max.y-T.min.y+1,Re=T.max.z-T.min.z+1,Le=oe.convert(z.format),He=oe.convert(z.type);let Fe;if(z.isData3DTexture)ye.setTexture3D(z,0),Fe=32879;else if(z.isDataArrayTexture)ye.setTexture2DArray(z,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,z.flipY),Y.pixelStorei(37441,z.premultiplyAlpha),Y.pixelStorei(3317,z.unpackAlignment);const Ne=Y.getParameter(3314),ot=Y.getParameter(32878),Ht=Y.getParameter(3316),Ln=Y.getParameter(3315),xi=Y.getParameter(32877),at=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;Y.pixelStorei(3314,at.width),Y.pixelStorei(32878,at.height),Y.pixelStorei(3316,T.min.x),Y.pixelStorei(3315,T.min.y),Y.pixelStorei(32877,T.min.z),Z.isDataTexture||Z.isData3DTexture?Y.texSubImage3D(Fe,ee,H.x,H.y,H.z,we,Ae,Re,Le,He,at.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Fe,ee,H.x,H.y,H.z,we,Ae,Re,Le,at.data)):Y.texSubImage3D(Fe,ee,H.x,H.y,H.z,we,Ae,Re,Le,He,at),Y.pixelStorei(3314,Ne),Y.pixelStorei(32878,ot),Y.pixelStorei(3316,Ht),Y.pixelStorei(3315,Ln),Y.pixelStorei(32877,xi),ee===0&&z.generateMipmaps&&Y.generateMipmap(Fe),ce.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ye.setTextureCube(T,0):T.isData3DTexture?ye.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ye.setTexture2DArray(T,0):ye.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){v=0,y=0,b=null,ce.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class FT extends xp{}FT.prototype.isWebGL1Renderer=!0;class NT extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class OT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new P;class bc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vd=new P,Hd=new je,Gd=new je,kT=new P,Wd=new Pe;class BT extends nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;Hd.fromBufferAttribute(r.attributes.skinIndex,e),Gd.fromBufferAttribute(r.attributes.skinWeight,e),Vd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Gd.getComponent(s);if(o!==0){const a=Hd.getComponent(s);Wd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(kT.copy(Vd).applyMatrix4(Wd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yp extends ke{constructor(){super(),this.isBone=!0,this.type="Bone"}}class UT extends St{constructor(e=null,t=1,n=1,r,s,o,a,l,c=wt,u=wt,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $d=new Pe,zT=new Pe;class wc{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:zT;$d.multiplyMatrices(a,t[s]),$d.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new wc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=np(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new UT(t,e,e,tn,ai);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new yp),this.bones.push(o),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class jd extends Dt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qd=new Pe,Xd=new Pe,go=[],VT=new Pe,ns=new nt;class HT extends nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jd(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let r=0;r<n;r++)this.setMatrixAt(r,VT)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,qd),Xd.multiplyMatrices(n,qd),ns.matrixWorld=Xd,ns.raycast(e,go);for(let o=0,a=go.length;o<a;o++){const l=go[o];l.instanceId=s,l.object=this,t.push(l)}go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jd(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class bp extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kd=new P,Yd=new P,Zd=new Pe,dl=new _c,vo=new Wr;class Sc extends ke{constructor(e=new Vt,t=new bp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Kd.fromBufferAttribute(t,r-1),Yd.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Kd.distanceTo(Yd);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),vo.radius+=s,e.ray.intersectsSphere(vo)===!1)return;Zd.copy(r).invert(),dl.copy(e.ray).applyMatrix4(Zd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,u=new P,h=new P,d=new P,p=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let b=v,_=y-1;b<_;b+=p){const M=g.getX(b),R=g.getX(b+1);if(c.fromBufferAttribute(f,M),u.fromBufferAttribute(f,R),dl.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let b=v,_=y-1;b<_;b+=p){if(c.fromBufferAttribute(f,b),u.fromBufferAttribute(f,b+1),dl.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Jd=new P,Qd=new P;class GT extends Sc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Jd.fromBufferAttribute(t,r),Qd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Jd.distanceTo(Qd);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class WT extends Sc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wp extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const eh=new Pe,Wl=new _c,_o=new Wr,xo=new P;class $T extends ke{constructor(e=new Vt,t=new wp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),_o.radius+=s,e.ray.intersectsSphere(_o)===!1)return;eh.copy(r).invert(),Wl.copy(e.ray).applyMatrix4(eh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,m=p;g<m;g++){const f=c.getX(g);xo.fromBufferAttribute(h,f),th(xo,f,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,m=p;g<m;g++)xo.fromBufferAttribute(h,g),th(xo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function th(i,e,t,n,r,s,o){const a=Wl.distanceSqToPoint(i);if(a<t){const l=new P;Wl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Mc extends Vt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const b=new P,_=new P,M=new P;for(let R=0;R<t.length;R+=3)p(t[R+0],b),p(t[R+1],_),p(t[R+2],M),l(b,_,M,y)}function l(y,b,_,M){const R=M+1,F=[];for(let x=0;x<=R;x++){F[x]=[];const E=y.clone().lerp(_,x/R),N=b.clone().lerp(_,x/R),$=R-x;for(let Q=0;Q<=$;Q++)Q===0&&x===R?F[x][Q]=E:F[x][Q]=E.clone().lerp(N,Q/$)}for(let x=0;x<R;x++)for(let E=0;E<2*(R-x)-1;E++){const N=Math.floor(E/2);E%2===0?(d(F[x][N+1]),d(F[x+1][N]),d(F[x][N])):(d(F[x][N+1]),d(F[x+1][N+1]),d(F[x+1][N]))}}function c(y){const b=new P;for(let _=0;_<s.length;_+=3)b.x=s[_+0],b.y=s[_+1],b.z=s[_+2],b.normalize().multiplyScalar(y),s[_+0]=b.x,s[_+1]=b.y,s[_+2]=b.z}function u(){const y=new P;for(let b=0;b<s.length;b+=3){y.x=s[b+0],y.y=s[b+1],y.z=s[b+2];const _=f(y)/2/Math.PI+.5,M=v(y)/Math.PI+.5;o.push(_,1-M)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){const b=o[y+0],_=o[y+2],M=o[y+4],R=Math.max(b,_,M),F=Math.min(b,_,M);R>.9&&F<.1&&(b<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),M<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function p(y,b){const _=y*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){const y=new P,b=new P,_=new P,M=new P,R=new he,F=new he,x=new he;for(let E=0,N=0;E<s.length;E+=9,N+=6){y.set(s[E+0],s[E+1],s[E+2]),b.set(s[E+3],s[E+4],s[E+5]),_.set(s[E+6],s[E+7],s[E+8]),R.set(o[N+0],o[N+1]),F.set(o[N+2],o[N+3]),x.set(o[N+4],o[N+5]),M.copy(y).add(b).add(_).divideScalar(3);const $=f(M);m(R,N+0,y,$),m(F,N+2,b,$),m(x,N+4,_,$)}}function m(y,b,_,M){M<0&&y.x===1&&(o[b]=y.x-1),_.x===0&&_.z===0&&(o[b]=M/2/Math.PI+.5)}function f(y){return Math.atan2(y.z,-y.x)}function v(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(e){return new Mc(e.vertices,e.indices,e.radius,e.details)}}class oa extends Mc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oa(e.radius,e.detail)}}class Tc extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tp,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ki extends Tc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ii(i,e,t){return Sp(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function yo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function jT(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function nh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Mp(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Ns{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class qT extends Ns{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rd,endingEnd:rd}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case sd:s=e,a=2*t-n;break;case od:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sd:o=e,l=2*n-t;break;case od:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),m=g*g,f=m*g,v=-d*f+2*d*m-d*g,y=(1+d)*f+(-1.5-2*d)*m+(-.5+d)*g+1,b=(-1-p)*f+(1.5+p)*m+.5*g,_=p*f-p*m;for(let M=0;M!==a;++M)s[M]=v*o[u+M]+y*o[c+M]+b*o[l+M]+_*o[h+M];return s}}class XT extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class KT extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yo(t,this.TimeBufferType),this.values=yo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yo(e.times,Array),values:yo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new KT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new XT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _s:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case ka:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return ka}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=ii(n,s,o),this.values=ii(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Sp(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ii(this.times),t=ii(this.values),n=this.getValueSize(),r=this.getInterpolation()===ka,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[d+g]||m!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ii(e,0,o),this.values=ii(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ii(this.times,0),t=ii(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Rr;class jr extends Dn{}jr.prototype.ValueTypeName="bool";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=_s;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;class Tp extends Dn{}Tp.prototype.ValueTypeName="color";class ws extends Dn{}ws.prototype.ValueTypeName="number";class YT extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)fi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class zi extends Dn{InterpolantFactoryMethodLinear(e){return new YT(this.times,this.values,this.getValueSize(),e)}}zi.prototype.ValueTypeName="quaternion";zi.prototype.DefaultInterpolation=Rr;zi.prototype.InterpolantFactoryMethodSmooth=void 0;class qr extends Dn{}qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=_s;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends Dn{}Ss.prototype.ValueTypeName="vector";class ZT{constructor(e,t=-1,n,r=vb){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(QT(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Dn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=jT(l);l=nh(l,1,u),c=nh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ws(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,m){if(p.length!==0){const f=[],v=[];Mp(p,f,v,g),f.length!==0&&m.push(new h(d,f,v))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let m=0;m<d[g].morphTargets.length;m++)p[d[g].morphTargets[m]]=-1;for(const m in p){const f=[],v=[];for(let y=0;y!==d[g].morphTargets.length;++y){const b=d[g];f.push(b.time),v.push(b.morphTarget===m?1:0)}r.push(new ws(".morphTargetInfluence["+m+"]",f,v))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(Ss,p+".position",d,"pos",r),n(zi,p+".quaternion",d,"rot",r),n(Ss,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function JT(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ws;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return Tp;case"quaternion":return zi;case"bool":case"boolean":return jr;case"string":return qr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function QT(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=JT(i.type);if(i.times===void 0){const t=[],n=[];Mp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Pr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class eE{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const tE=new eE;class Os{constructor(e){this.manager=e!==void 0?e:tE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const kn={};class nE extends Error{constructor(e,t){super(e),this.response=t}}class Ep extends Os{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Pr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:r});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=kn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let m=0;const f=new ReadableStream({start(v){y();function y(){h.read().then(({done:b,value:_})=>{if(b)v.close();else{m+=_.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let R=0,F=u.length;R<F;R++){const x=u[R];x.onProgress&&x.onProgress(M)}v.enqueue(_),y()}})}}});return new Response(f)}else throw new nE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Pr.add(e,c);const u=kn[e];delete kn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=kn[e];if(u===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class iE extends Os{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=bs("img");function l(){u(),Pr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class rE extends Os{constructor(e){super(e)}load(e,t,n,r){const s=new St,o=new iE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class aa extends ke{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const hl=new Pe,ih=new P,rh=new P;class Ec{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xc,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(ih),rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rh),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sE extends Ec{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ys*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class oE extends aa{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new sE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const sh=new Pe,is=new P,fl=new P;class aE extends Ec{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),is.setFromMatrixPosition(e.matrixWorld),n.position.copy(is),fl.copy(n.position),fl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fl),n.updateMatrixWorld(),r.makeTranslation(-is.x,-is.y,-is.z),sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh)}}class lE extends aa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new aE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cE extends Ec{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class la extends aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.target=new ke,this.shadow=new cE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ac extends aa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class uE extends Os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Pr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class dE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=oh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function oh(){return(typeof performance>"u"?Date:performance).now()}const Cc="\\[\\]\\.:\\/",hE=new RegExp("["+Cc+"]","g"),Dc="[^"+Cc+"]",fE="[^"+Cc.replace("\\.","")+"]",pE=/((?:WC+[\/:])*)/.source.replace("WC",Dc),mE=/(WCOD+)?/.source.replace("WCOD",fE),gE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dc),vE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dc),_E=new RegExp("^"+pE+mE+gE+vE+"$"),xE=["material","materials","bones","map"];class yE{constructor(e,t,n){const r=n||Xe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Xe{constructor(e,t,n){this.path=t,this.parsedPath=n||Xe.parseTrackName(t),this.node=Xe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Xe.Composite(e,t,n):new Xe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hE,"")}static parseTrackName(e){const t=_E.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);xE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Xe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Xe.Composite=yE;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);const ah=i=>{let e;const t=new Set,n=(l,c)=>{const u=typeof l=="function"?l(e):l;if(!Object.is(u,e)){const h=e;e=c??typeof u!="object"?u:Object.assign({},e,u),t.forEach(d=>d(e,h))}},r=()=>e,a={setState:n,getState:r,subscribe:l=>(t.add(l),()=>t.delete(l)),destroy:()=>t.clear()};return e=i(n,r,a),a},bE=i=>i?ah(i):ah;var ks,pe,Ap,us,lh,Cp,Vo={},Dp=[],wE=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Vn(i,e){for(var t in e)i[t]=e[t];return i}function Rp(i){var e=i.parentNode;e&&e.removeChild(i)}function En(i,e,t){var n,r,s,o={};for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?ks.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(s in i.defaultProps)o[s]===void 0&&(o[s]=i.defaultProps[s]);return ds(i,o,n,r,null)}function ds(i,e,t,n,r){var s={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++Ap};return r==null&&pe.vnode!=null&&pe.vnode(s),s}function Lp(){return{current:null}}function tt(i){return i.children}function fn(i,e){this.props=i,this.context=e}function Ms(i,e){if(e==null)return i.__?Ms(i.__,i.__.__k.indexOf(i)+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?Ms(i):null}function Pp(i){var e,t;if((i=i.__)!=null&&i.__c!=null){for(i.__e=i.__c.base=null,e=0;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null){i.__e=i.__c.base=t.__e;break}return Pp(i)}}function $l(i){(!i.__d&&(i.__d=!0)&&us.push(i)&&!Ho.__r++||lh!==pe.debounceRendering)&&((lh=pe.debounceRendering)||setTimeout)(Ho)}function Ho(){for(var i;Ho.__r=us.length;)i=us.sort(function(e,t){return e.__v.__b-t.__v.__b}),us=[],i.some(function(e){var t,n,r,s,o,a;e.__d&&(o=(s=(t=e).__v).__e,(a=t.__P)&&(n=[],(r=Vn({},s)).__v=s.__v+1,Rc(a,s,r,t.__n,a.ownerSVGElement!==void 0,s.__h!=null?[o]:null,n,o??Ms(s),s.__h),Op(n,s),s.__e!=o&&Pp(s)))})}function Ip(i,e,t,n,r,s,o,a,l,c){var u,h,d,p,g,m,f,v=n&&n.__k||Dp,y=v.length;for(t.__k=[],u=0;u<e.length;u++)if((p=t.__k[u]=(p=e[u])==null||typeof p=="boolean"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?ds(null,p,null,null,p):Array.isArray(p)?ds(tt,{children:p},null,null,null):p.__b>0?ds(p.type,p.props,p.key,p.ref?p.ref:null,p.__v):p)!=null){if(p.__=t,p.__b=t.__b+1,(d=v[u])===null||d&&p.key==d.key&&p.type===d.type)v[u]=void 0;else for(h=0;h<y;h++){if((d=v[h])&&p.key==d.key&&p.type===d.type){v[h]=void 0;break}d=null}Rc(i,p,d=d||Vo,r,s,o,a,l,c),g=p.__e,(h=p.ref)&&d.ref!=h&&(f||(f=[]),d.ref&&f.push(d.ref,null,p),f.push(h,p.__c||g,p)),g!=null?(m==null&&(m=g),typeof p.type=="function"&&p.__k===d.__k?p.__d=l=Fp(p,l,i):l=Np(i,p,d,v,g,l),typeof t.type=="function"&&(t.__d=l)):l&&d.__e==l&&l.parentNode!=i&&(l=Ms(d))}for(t.__e=m,u=y;u--;)v[u]!=null&&Bp(v[u],v[u]);if(f)for(u=0;u<f.length;u++)kp(f[u],f[++u],f[++u])}function Fp(i,e,t){for(var n,r=i.__k,s=0;r&&s<r.length;s++)(n=r[s])&&(n.__=i,e=typeof n.type=="function"?Fp(n,e,t):Np(t,n,n,r,n.__e,e));return e}function Gn(i,e){return e=e||[],i==null||typeof i=="boolean"||(Array.isArray(i)?i.some(function(t){Gn(t,e)}):e.push(i)),e}function Np(i,e,t,n,r,s){var o,a,l;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(t==null||r!=s||r.parentNode==null)e:if(s==null||s.parentNode!==i)i.appendChild(r),o=null;else{for(a=s,l=0;(a=a.nextSibling)&&l<n.length;l+=1)if(a==r)break e;i.insertBefore(r,s),o=s}return o!==void 0?o:r.nextSibling}function SE(i,e,t,n,r){var s;for(s in t)s==="children"||s==="key"||s in e||Go(i,s,null,t[s],n);for(s in e)r&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||t[s]===e[s]||Go(i,s,e[s],t[s],n)}function ch(i,e,t){e[0]==="-"?i.setProperty(e,t):i[e]=t==null?"":typeof t!="number"||wE.test(e)?t:t+"px"}function Go(i,e,t,n,r){var s;e:if(e==="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||ch(i.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||ch(i.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in i?e.toLowerCase().slice(2):e.slice(2),i.l||(i.l={}),i.l[e+s]=t,t?n||i.addEventListener(e,s?dh:uh,s):i.removeEventListener(e,s?dh:uh,s);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e.indexOf("-")==-1?i.removeAttribute(e):i.setAttribute(e,t))}}function uh(i){this.l[i.type+!1](pe.event?pe.event(i):i)}function dh(i){this.l[i.type+!0](pe.event?pe.event(i):i)}function Rc(i,e,t,n,r,s,o,a,l){var c,u,h,d,p,g,m,f,v,y,b,_,M,R,F,x=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(l=t.__h,a=e.__e=t.__e,e.__h=null,s=[a]),(c=pe.__b)&&c(e);try{e:if(typeof x=="function"){if(f=e.props,v=(c=x.contextType)&&n[c.__c],y=c?v?v.props.value:c.__:n,t.__c?m=(u=e.__c=t.__c).__=u.__E:("prototype"in x&&x.prototype.render?e.__c=u=new x(f,y):(e.__c=u=new fn(f,y),u.constructor=x,u.render=TE),v&&v.sub(u),u.props=f,u.state||(u.state={}),u.context=y,u.__n=n,h=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),x.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Vn({},u.__s)),Vn(u.__s,x.getDerivedStateFromProps(f,u.__s))),d=u.props,p=u.state,h)x.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(x.getDerivedStateFromProps==null&&f!==d&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(f,y),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(f,u.__s,y)===!1||e.__v===t.__v){for(u.props=f,u.state=u.__s,e.__v!==t.__v&&(u.__d=!1),u.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(E){E&&(E.__=e)}),b=0;b<u._sb.length;b++)u.__h.push(u._sb[b]);u._sb=[],u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(f,u.__s,y),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(d,p,g)})}if(u.context=y,u.props=f,u.__v=e,u.__P=i,_=pe.__r,M=0,"prototype"in x&&x.prototype.render){for(u.state=u.__s,u.__d=!1,_&&_(e),c=u.render(u.props,u.state,u.context),R=0;R<u._sb.length;R++)u.__h.push(u._sb[R]);u._sb=[]}else do u.__d=!1,_&&_(e),c=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++M<25);u.state=u.__s,u.getChildContext!=null&&(n=Vn(Vn({},n),u.getChildContext())),h||u.getSnapshotBeforeUpdate==null||(g=u.getSnapshotBeforeUpdate(d,p)),F=c!=null&&c.type===tt&&c.key==null?c.props.children:c,Ip(i,Array.isArray(F)?F:[F],e,t,n,r,s,o,a,l),u.base=e.__e,e.__h=null,u.__h.length&&o.push(u),m&&(u.__E=u.__=null),u.__e=!1}else s==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=ME(t.__e,e,t,n,r,s,o,l);(c=pe.diffed)&&c(e)}catch(E){e.__v=null,(l||s!=null)&&(e.__e=a,e.__h=!!l,s[s.indexOf(a)]=null),pe.__e(E,e,t)}}function Op(i,e){pe.__c&&pe.__c(e,i),i.some(function(t){try{i=t.__h,t.__h=[],i.some(function(n){n.call(t)})}catch(n){pe.__e(n,t.__v)}})}function ME(i,e,t,n,r,s,o,a){var l,c,u,h=t.props,d=e.props,p=e.type,g=0;if(p==="svg"&&(r=!0),s!=null){for(;g<s.length;g++)if((l=s[g])&&"setAttribute"in l==!!p&&(p?l.localName===p:l.nodeType===3)){i=l,s[g]=null;break}}if(i==null){if(p===null)return document.createTextNode(d);i=r?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,d.is&&d),s=null,a=!1}if(p===null)h===d||a&&i.data===d||(i.data=d);else{if(s=s&&ks.call(i.childNodes),c=(h=t.props||Vo).dangerouslySetInnerHTML,u=d.dangerouslySetInnerHTML,!a){if(s!=null)for(h={},g=0;g<i.attributes.length;g++)h[i.attributes[g].name]=i.attributes[g].value;(u||c)&&(u&&(c&&u.__html==c.__html||u.__html===i.innerHTML)||(i.innerHTML=u&&u.__html||""))}if(SE(i,d,h,r,a),u)e.__k=[];else if(g=e.props.children,Ip(i,Array.isArray(g)?g:[g],e,t,n,r&&p!=="foreignObject",s,o,s?s[0]:t.__k&&Ms(t,0),a),s!=null)for(g=s.length;g--;)s[g]!=null&&Rp(s[g]);a||("value"in d&&(g=d.value)!==void 0&&(g!==i.value||p==="progress"&&!g||p==="option"&&g!==h.value)&&Go(i,"value",g,h.value,!1),"checked"in d&&(g=d.checked)!==void 0&&g!==i.checked&&Go(i,"checked",g,h.checked,!1))}return i}function kp(i,e,t){try{typeof i=="function"?i(e):i.current=e}catch(n){pe.__e(n,t)}}function Bp(i,e,t){var n,r;if(pe.unmount&&pe.unmount(i),(n=i.ref)&&(n.current&&n.current!==i.__e||kp(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){pe.__e(s,e)}n.base=n.__P=null,i.__c=void 0}if(n=i.__k)for(r=0;r<n.length;r++)n[r]&&Bp(n[r],e,t||typeof i.type!="function");t||i.__e==null||Rp(i.__e),i.__=i.__e=i.__d=void 0}function TE(i,e,t){return this.constructor(i,t)}function Ir(i,e,t){var n,r,s;pe.__&&pe.__(i,e),r=(n=typeof t=="function")?null:t&&t.__k||e.__k,s=[],Rc(e,i=(!n&&t||e).__k=En(tt,null,[i]),r||Vo,Vo,e.ownerSVGElement!==void 0,!n&&t?[t]:r?null:e.firstChild?ks.call(e.childNodes):null,s,!n&&t?t:r?r.__e:e.firstChild,n),Op(s,i)}function Up(i,e){Ir(i,e,Up)}function EE(i,e,t){var n,r,s,o=Vn({},i.props);for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:o[s]=e[s];return arguments.length>2&&(o.children=arguments.length>3?ks.call(arguments,2):t),ds(i.type,o,n||i.key,r||i.ref,null)}function zp(i,e){var t={__c:e="__cC"+Cp++,__:i,Consumer:function(n,r){return n.children(r)},Provider:function(n){var r,s;return this.getChildContext||(r=[],(s={})[e]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&r.some($l)},this.sub=function(o){r.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){r.splice(r.indexOf(o),1),a&&a.call(o)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}ks=Dp.slice,pe={__e:function(i,e,t,n){for(var r,s,o;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(i)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(i,n||{}),o=r.__d),o)return r.__E=r}catch(a){i=a}throw i}},Ap=0,fn.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Vn({},this.state),typeof i=="function"&&(i=i(Vn({},t),this.props)),i&&Vn(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),$l(this))},fn.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),$l(this))},fn.prototype.render=tt,us=[],Ho.__r=0,Cp=0;var pi,Je,pl,hh,Fr=0,Vp=[],Do=[],fh=pe.__b,ph=pe.__r,mh=pe.diffed,gh=pe.__c,vh=pe.unmount;function Yi(i,e){pe.__h&&pe.__h(Je,i,Fr||e),Fr=0;var t=Je.__H||(Je.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({__V:Do}),t.__[i]}function An(i){return Fr=1,Lc(jp,i)}function Lc(i,e,t){var n=Yi(pi++,2);if(n.t=i,!n.__c&&(n.__=[t?t(e):jp(void 0,e),function(s){var o=n.__N?n.__N[0]:n.__[0],a=n.t(o,s);o!==a&&(n.__N=[a,n.__[1]],n.__c.setState({}))}],n.__c=Je,!Je.u)){Je.u=!0;var r=Je.shouldComponentUpdate;Je.shouldComponentUpdate=function(s,o,a){if(!n.__c.__H)return!0;var l=n.__c.__H.__.filter(function(u){return u.__c});if(l.every(function(u){return!u.__N}))return!r||r.call(this,s,o,a);var c=!1;return l.forEach(function(u){if(u.__N){var h=u.__[0];u.__=u.__N,u.__N=void 0,h!==u.__[0]&&(c=!0)}}),!(!c&&n.__c.props===s)&&(!r||r.call(this,s,o,a))}}return n.__N||n.__}function hi(i,e){var t=Yi(pi++,3);!pe.__s&&Ic(t.__H,e)&&(t.__=i,t.i=e,Je.__H.__h.push(t))}function Zi(i,e){var t=Yi(pi++,4);!pe.__s&&Ic(t.__H,e)&&(t.__=i,t.i=e,Je.__h.push(t))}function ci(i){return Fr=5,ca(function(){return{current:i}},[])}function Hp(i,e,t){Fr=6,Zi(function(){return typeof i=="function"?(i(e()),function(){return i(null)}):i?(i.current=e(),function(){return i.current=null}):void 0},t==null?t:t.concat(i))}function ca(i,e){var t=Yi(pi++,7);return Ic(t.__H,e)?(t.__V=i(),t.i=e,t.__h=i,t.__V):t.__}function Gp(i,e){return Fr=8,ca(function(){return i},e)}function Wp(i){var e=Je.context[i.__c],t=Yi(pi++,9);return t.c=i,e?(t.__==null&&(t.__=!0,e.sub(Je)),e.props.value):i.__}function Pc(i,e){pe.useDebugValue&&pe.useDebugValue(e?e(i):i)}function AE(i){var e=Yi(pi++,10),t=An();return e.__=i,Je.componentDidCatch||(Je.componentDidCatch=function(n,r){e.__&&e.__(n,r),t[1](n)}),[t[0],function(){t[1](void 0)}]}function $p(){var i=Yi(pi++,11);if(!i.__){for(var e=Je.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var t=e.__m||(e.__m=[0,0]);i.__="P"+t[0]+"-"+t[1]++}return i.__}function CE(){for(var i;i=Vp.shift();)if(i.__P&&i.__H)try{i.__H.__h.forEach(Ro),i.__H.__h.forEach(jl),i.__H.__h=[]}catch(e){i.__H.__h=[],pe.__e(e,i.__v)}}pe.__b=function(i){Je=null,fh&&fh(i)},pe.__r=function(i){ph&&ph(i),pi=0;var e=(Je=i.__c).__H;e&&(pl===Je?(e.__h=[],Je.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=Do,t.__N=t.i=void 0})):(e.__h.forEach(Ro),e.__h.forEach(jl),e.__h=[])),pl=Je},pe.diffed=function(i){mh&&mh(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(Vp.push(e)!==1&&hh===pe.requestAnimationFrame||((hh=pe.requestAnimationFrame)||DE)(CE)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==Do&&(t.__=t.__V),t.i=void 0,t.__V=Do})),pl=Je=null},pe.__c=function(i,e){e.some(function(t){try{t.__h.forEach(Ro),t.__h=t.__h.filter(function(n){return!n.__||jl(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],pe.__e(n,t.__v)}}),gh&&gh(i,e)},pe.unmount=function(i){vh&&vh(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{Ro(n)}catch(r){e=r}}),t.__H=void 0,e&&pe.__e(e,t.__v))};var _h=typeof requestAnimationFrame=="function";function DE(i){var e,t=function(){clearTimeout(n),_h&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,100);_h&&(e=requestAnimationFrame(t))}function Ro(i){var e=Je,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),Je=e}function jl(i){var e=Je;i.__c=i.__(),Je=e}function Ic(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function jp(i,e){return typeof e=="function"?e(i):e}function qp(i,e){for(var t in e)i[t]=e[t];return i}function ql(i,e){for(var t in i)if(t!=="__source"&&!(t in e))return!0;for(var n in e)if(n!=="__source"&&i[n]!==e[n])return!0;return!1}function ml(i,e){return i===e&&(i!==0||1/i==1/e)||i!=i&&e!=e}function Wo(i){this.props=i}function Xp(i,e){function t(r){var s=this.props.ref,o=s==r.ref;return!o&&s&&(s.call?s(null):s.current=null),e?!e(this.props,r)||!o:ql(this.props,r)}function n(r){return this.shouldComponentUpdate=t,En(i,r)}return n.displayName="Memo("+(i.displayName||i.name)+")",n.prototype.isReactComponent=!0,n.__f=!0,n}(Wo.prototype=new fn).isPureReactComponent=!0,Wo.prototype.shouldComponentUpdate=function(i,e){return ql(this.props,i)||ql(this.state,e)};var xh=pe.__b;pe.__b=function(i){i.type&&i.type.__f&&i.ref&&(i.props.ref=i.ref,i.ref=null),xh&&xh(i)};var RE=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Kp(i){function e(t){var n=qp({},t);return delete n.ref,i(n,t.ref||null)}return e.$$typeof=RE,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(i.displayName||i.name)+")",e}var yh=function(i,e){return i==null?null:Gn(Gn(i).map(e))},Yp={map:yh,forEach:yh,count:function(i){return i?Gn(i).length:0},only:function(i){var e=Gn(i);if(e.length!==1)throw"Children.only";return e[0]},toArray:Gn},LE=pe.__e;pe.__e=function(i,e,t,n){if(i.then){for(var r,s=e;s=s.__;)if((r=s.__c)&&r.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),r.__c(i,e)}LE(i,e,t,n)};var bh=pe.unmount;function Zp(i,e,t){return i&&(i.__c&&i.__c.__H&&(i.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),i.__c.__H=null),(i=qp({},i)).__c!=null&&(i.__c.__P===t&&(i.__c.__P=e),i.__c=null),i.__k=i.__k&&i.__k.map(function(n){return Zp(n,e,t)})),i}function Jp(i,e,t){return i&&(i.__v=null,i.__k=i.__k&&i.__k.map(function(n){return Jp(n,e,t)}),i.__c&&i.__c.__P===e&&(i.__e&&t.insertBefore(i.__e,i.__d),i.__c.__e=!0,i.__c.__P=t)),i}function hs(){this.__u=0,this.t=null,this.__b=null}function Qp(i){var e=i.__.__c;return e&&e.__a&&e.__a(i)}function em(i){var e,t,n;function r(s){if(e||(e=i()).then(function(o){t=o.default||o},function(o){n=o}),n)throw n;if(!t)throw e;return En(t,s)}return r.displayName="Lazy",r.__f=!0,r}function vr(){this.u=null,this.o=null}pe.unmount=function(i){var e=i.__c;e&&e.__R&&e.__R(),e&&i.__h===!0&&(i.type=null),bh&&bh(i)},(hs.prototype=new fn).__c=function(i,e){var t=e.__c,n=this;n.t==null&&(n.t=[]),n.t.push(t);var r=Qp(n.__v),s=!1,o=function(){s||(s=!0,t.__R=null,r?r(a):a())};t.__R=o;var a=function(){if(!--n.__u){if(n.state.__a){var c=n.state.__a;n.__v.__k[0]=Jp(c,c.__c.__P,c.__c.__O)}var u;for(n.setState({__a:n.__b=null});u=n.t.pop();)u.forceUpdate()}},l=e.__h===!0;n.__u++||l||n.setState({__a:n.__b=n.__v.__k[0]}),i.then(o,o)},hs.prototype.componentWillUnmount=function(){this.t=[]},hs.prototype.render=function(i,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=Zp(this.__b,t,n.__O=n.__P)}this.__b=null}var r=e.__a&&En(tt,null,i.fallback);return r&&(r.__h=null),[En(tt,null,e.__a?null:i.children),r]};var wh=function(i,e,t){if(++t[1]===t[0]&&i.o.delete(e),i.props.revealOrder&&(i.props.revealOrder[0]!=="t"||!i.o.size))for(t=i.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;i.u=t=t[2]}};function PE(i){return this.getChildContext=function(){return i.context},i.children}function IE(i){var e=this,t=i.i;e.componentWillUnmount=function(){Ir(null,e.l),e.l=null,e.i=null},e.i&&e.i!==t&&e.componentWillUnmount(),i.__v?(e.l||(e.i=t,e.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,r){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),Ir(En(PE,{context:e.context},i.__v),e.l)):e.l&&e.componentWillUnmount()}function tm(i,e){var t=En(IE,{__v:i,i:e});return t.containerInfo=e,t}(vr.prototype=new fn).__a=function(i){var e=this,t=Qp(e.__v),n=e.o.get(i);return n[0]++,function(r){var s=function(){e.props.revealOrder?(n.push(r),wh(e,i,n)):r()};t?t(s):s()}},vr.prototype.render=function(i){this.u=null,this.o=new Map;var e=Gn(i.children);i.revealOrder&&i.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return i.children},vr.prototype.componentDidUpdate=vr.prototype.componentDidMount=function(){var i=this;this.o.forEach(function(e,t){wh(i,t,e)})};var nm=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,FE=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,NE=typeof document<"u",OE=function(i){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(i)};function im(i,e,t){return e.__k==null&&(e.textContent=""),Ir(i,e),typeof t=="function"&&t(),i?i.__c:null}function rm(i,e,t){return Up(i,e),typeof t=="function"&&t(),i?i.__c:null}fn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(i){Object.defineProperty(fn.prototype,i,{configurable:!0,get:function(){return this["UNSAFE_"+i]},set:function(e){Object.defineProperty(this,i,{configurable:!0,writable:!0,value:e})}})});var Sh=pe.event;function kE(){}function BE(){return this.cancelBubble}function UE(){return this.defaultPrevented}pe.event=function(i){return Sh&&(i=Sh(i)),i.persist=kE,i.isPropagationStopped=BE,i.isDefaultPrevented=UE,i.nativeEvent=i};var sm,Mh={configurable:!0,get:function(){return this.class}},Th=pe.vnode;pe.vnode=function(i){var e=i.type,t=i.props,n=t;if(typeof e=="string"){var r=e.indexOf("-")===-1;for(var s in n={},t){var o=t[s];NE&&s==="children"&&e==="noscript"||s==="value"&&"defaultValue"in t&&o==null||(s==="defaultValue"&&"value"in t&&t.value==null?s="value":s==="download"&&o===!0?o="":/ondoubleclick/i.test(s)?s="ondblclick":/^onchange(textarea|input)/i.test(s+e)&&!OE(t.type)?s="oninput":/^onfocus$/i.test(s)?s="onfocusin":/^onblur$/i.test(s)?s="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s)?s=s.toLowerCase():r&&FE.test(s)?s=s.replace(/[A-Z0-9]/g,"-$&").toLowerCase():o===null&&(o=void 0),/^oninput$/i.test(s)&&(s=s.toLowerCase(),n[s]&&(s="oninputCapture")),n[s]=o)}e=="select"&&n.multiple&&Array.isArray(n.value)&&(n.value=Gn(t.children).forEach(function(a){a.props.selected=n.value.indexOf(a.props.value)!=-1})),e=="select"&&n.defaultValue!=null&&(n.value=Gn(t.children).forEach(function(a){a.props.selected=n.multiple?n.defaultValue.indexOf(a.props.value)!=-1:n.defaultValue==a.props.value})),i.props=n,t.class!=t.className&&(Mh.enumerable="className"in t,t.className!=null&&(n.class=t.className),Object.defineProperty(n,"className",Mh))}i.$$typeof=nm,Th&&Th(i)};var Eh=pe.__r;pe.__r=function(i){Eh&&Eh(i),sm=i.__c};var om={ReactCurrentDispatcher:{current:{readContext:function(i){return sm.__n[i.__c].props.value}}}},zE="17.0.2";function am(i){return En.bind(null,i)}function Fc(i){return!!i&&i.$$typeof===nm}function lm(i){return Fc(i)?EE.apply(null,arguments):i}function cm(i){return!!i.__k&&(Ir(null,i),!0)}function um(i){return i&&(i.base||i.nodeType===1&&i)||null}var dm=function(i,e){return i(e)},hm=function(i,e){return i(e)},fm=tt;function Nc(i){i()}function pm(i){return i}function mm(){return[!1,Nc]}var gm=Zi;function vm(i,e){var t=e(),n=An({h:{__:t,v:e}}),r=n[0].h,s=n[1];return Zi(function(){r.__=t,r.v=e,ml(r.__,e())||s({h:r})},[i,t,e]),hi(function(){return ml(r.__,r.v())||s({h:r}),i(function(){ml(r.__,r.v())||s({h:r})})},[i]),t}var VE={useState:An,useId:$p,useReducer:Lc,useEffect:hi,useLayoutEffect:Zi,useInsertionEffect:gm,useTransition:mm,useDeferredValue:pm,useSyncExternalStore:vm,startTransition:Nc,useRef:ci,useImperativeHandle:Hp,useMemo:ca,useCallback:Gp,useContext:Wp,useDebugValue:Pc,version:"17.0.2",Children:Yp,render:im,hydrate:rm,unmountComponentAtNode:cm,createPortal:tm,createElement:En,createContext:zp,createFactory:am,cloneElement:lm,createRef:Lp,Fragment:tt,isValidElement:Fc,findDOMNode:um,Component:fn,PureComponent:Wo,memo:Xp,forwardRef:Kp,flushSync:hm,unstable_batchedUpdates:dm,StrictMode:fm,Suspense:hs,SuspenseList:vr,lazy:em,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:om};const HE=Object.freeze(Object.defineProperty({__proto__:null,Children:Yp,PureComponent:Wo,StrictMode:fm,Suspense:hs,SuspenseList:vr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:om,cloneElement:lm,createFactory:am,createPortal:tm,default:VE,findDOMNode:um,flushSync:hm,forwardRef:Kp,hydrate:rm,isValidElement:Fc,lazy:em,memo:Xp,render:im,startTransition:Nc,unmountComponentAtNode:cm,unstable_batchedUpdates:dm,useDeferredValue:pm,useInsertionEffect:gm,useSyncExternalStore:vm,useTransition:mm,version:zE,Component:fn,Fragment:tt,createContext:zp,createElement:En,createRef:Lp,useCallback:Gp,useContext:Wp,useDebugValue:Pc,useEffect:hi,useErrorBoundary:AE,useId:$p,useImperativeHandle:Hp,useLayoutEffect:Zi,useMemo:ca,useReducer:Lc,useRef:ci,useState:An},Symbol.toStringTag,{value:"Module"}));var _m={exports:{}},xm={};const Bs=of(HE);var ym={exports:{}},bm={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nr=Bs;function GE(i,e){return i===e&&(i!==0||1/i===1/e)||i!==i&&e!==e}var WE=typeof Object.is=="function"?Object.is:GE,$E=Nr.useState,jE=Nr.useEffect,qE=Nr.useLayoutEffect,XE=Nr.useDebugValue;function KE(i,e){var t=e(),n=$E({inst:{value:t,getSnapshot:e}}),r=n[0].inst,s=n[1];return qE(function(){r.value=t,r.getSnapshot=e,gl(r)&&s({inst:r})},[i,t,e]),jE(function(){return gl(r)&&s({inst:r}),i(function(){gl(r)&&s({inst:r})})},[i]),XE(t),t}function gl(i){var e=i.getSnapshot;i=i.value;try{var t=e();return!WE(i,t)}catch{return!0}}function YE(i,e){return e()}var ZE=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?YE:KE;bm.useSyncExternalStore=Nr.useSyncExternalStore!==void 0?Nr.useSyncExternalStore:ZE;(function(i){i.exports=bm})(ym);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Bs,JE=ym.exports;function QE(i,e){return i===e&&(i!==0||1/i===1/e)||i!==i&&e!==e}var e2=typeof Object.is=="function"?Object.is:QE,t2=JE.useSyncExternalStore,n2=ua.useRef,i2=ua.useEffect,r2=ua.useMemo,s2=ua.useDebugValue;xm.useSyncExternalStoreWithSelector=function(i,e,t,n,r){var s=n2(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=r2(function(){function l(p){if(!c){if(c=!0,u=p,p=n(p),r!==void 0&&o.hasValue){var g=o.value;if(r(g,p))return h=g}return h=p}if(g=h,e2(u,p))return g;var m=n(p);return r!==void 0&&r(g,m)?g:(u=p,h=m)}var c=!1,u,h,d=t===void 0?null:t;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,t,n,r]);var a=t2(i,s[0],s[1]);return i2(function(){o.hasValue=!0,o.value=a},[a]),s2(a),a};(function(i){i.exports=xm})(_m);const o2=sf(_m.exports),{useSyncExternalStoreWithSelector:a2}=o2;function ze(i,e=i.getState,t){const n=a2(i.subscribe,i.getState,i.getServerState||i.getState,e,t);return Pc(n),n}const Ah=i=>{const e=typeof i=="function"?bE(i):i,t=(n,r)=>ze(e,n,r);return Object.assign(t,e),t},wm=i=>i?Ah(i):Ah,$o=i=>e=>{try{const t=i(e);return t instanceof Promise?t:{then(n){return $o(n)(t)},catch(n){return this}}}catch(t){return{then(n){return this},catch(n){return $o(n)(t)}}}},l2=(i,e)=>(t,n,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:f=>f,version:0,merge:(f,v)=>({...v,...f}),...e},o=!1;const a=new Set,l=new Set;let c;try{c=s.getStorage()}catch{}if(!c)return i((...f)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(...f)},n,r);const u=$o(s.serialize),h=()=>{const f=s.partialize({...n()});let v;const y=u({state:f,version:s.version}).then(b=>c.setItem(s.name,b)).catch(b=>{v=b});if(v)throw v;return y},d=r.setState;r.setState=(f,v)=>{d(f,v),h()};const p=i((...f)=>{t(...f),h()},n,r);let g;const m=()=>{var f;if(!c)return;o=!1,a.forEach(y=>y(n()));const v=((f=s.onRehydrateStorage)==null?void 0:f.call(s,n()))||void 0;return $o(c.getItem.bind(c))(s.name).then(y=>{if(y)return s.deserialize(y)}).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==s.version){if(s.migrate)return s.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var b;return g=s.merge(y,(b=n())!=null?b:p),t(g,!0),h()}).then(()=>{v?.(g,void 0),o=!0,l.forEach(y=>y(g))}).catch(y=>{v?.(void 0,y)})};return r.persist={setOptions:f=>{s={...s,...f},f.getStorage&&(c=f.getStorage())},clearStorage:()=>{c?.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>m(),hasHydrated:()=>o,onHydrate:f=>(a.add(f),()=>{a.delete(f)}),onFinishHydration:f=>(l.add(f),()=>{l.delete(f)})},m(),g||p},c2=l2,Vi=i=>Object.entries(i),Or=i=>Object.values(i),Wn=i=>Object.keys(i),Oc=i=>Object.fromEntries(i),rn=(i,e)=>{for(const[t,n]of Object.entries(e))if(Object.getPrototypeOf(n)===Object.prototype)for(const[r,s]of Object.entries(n))Array.isArray(s)?i[t][r](...s):i[t][r](s);else Array.isArray(n)?i[t](...n):i[t](n);return i},kc=(i,e)=>wm()((t,n)=>({...i,...e(t,n)})),Bc=(i,e,t,n)=>{let r=!1;const s=wm()(c2((a,l)=>({...t,...n(a,l)}),{name:i,version:e,serialize:a=>{if(r)throw new Error("destroyed");return JSON.stringify(a)}})),o=s.destroy.bind(s);return s.destroy=()=>{r=!0,o()},s};var u2=0;function C(i,e,t,n,r){var s,o,a={};for(o in e)o=="ref"?s=e[o]:a[o]=e[o];var l={type:i,props:a,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--u2,__source:r,__self:n};if(typeof i=="function"&&(s=i.defaultProps))for(o in s)a[o]===void 0&&(a[o]=s[o]);return pe.vnode&&pe.vnode(l),l}const d2=kc({paused:!1,version:0,objectPools:{}},(i,e)=>({stop:()=>i({paused:!0}),resume:()=>i({paused:!1}),refreshDebugger:()=>i({version:e().version+1}),setObjectPoolSize:(t,n)=>i({objectPools:{...e().objectPools,[t]:n}})})),h2=Bc("acgRenderingOptions",2,{renderingOptions:{}},(i,e)=>({getRenderingOption:(t,n=!0)=>(i(r=>t in r.renderingOptions?{}:{renderingOptions:{...r.renderingOptions,[t]:n}}),e().renderingOptions[t]),setRenderingOption:(t,n)=>i(r=>({renderingOptions:{...r.renderingOptions,[t]:n}}))})),Uc=h2.getState().getRenderingOption,f2=d2.getState().setObjectPoolSize,p2=()=>C(tt,{}),m2=(i,e,t)=>()=>!1;class g2 extends Os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new b2(t)}),this.register(function(t){return new C2(t)}),this.register(function(t){return new D2(t)}),this.register(function(t){return new S2(t)}),this.register(function(t){return new M2(t)}),this.register(function(t){return new T2(t)}),this.register(function(t){return new E2(t)}),this.register(function(t){return new y2(t)}),this.register(function(t){return new A2(t)}),this.register(function(t){return new w2(t)}),this.register(function(t){return new _2(t)}),this.register(function(t){return new R2(t)}),this.register(function(t){return new L2(t)})}load(e,t,n,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Fi.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ep(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Fi.decodeText(new Uint8Array(e,0,4))===Sm){try{o[Ve.KHR_BINARY_GLTF]=new P2(e)}catch(u){r&&r(u);return}s=JSON.parse(o[Ve.KHR_BINARY_GLTF].content)}else s=JSON.parse(Fi.decodeText(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new W2(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const u=s.extensionsUsed[c],h=s.extensionsRequired||[];switch(u){case Ve.KHR_MATERIALS_UNLIT:o[u]=new x2;break;case Ve.KHR_DRACO_MESH_COMPRESSION:o[u]=new I2(s,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:o[u]=new F2;break;case Ve.KHR_MESH_QUANTIZATION:o[u]=new N2;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function v2(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _2{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ce(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new la(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new lE(u),c.distance=h;break;case"spot":c=new oE(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class x2{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Mn}extendParams(e,t,n){const r=[];e.color=new Ce(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,qe))}return Promise.all(r)}}class y2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class b2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(a,a)}return Promise.all(s)}}class w2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class S2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,qe)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class M2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class T2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ce(a[0],a[1],a[2]),Promise.all(s)}}class E2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class A2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ce(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,qe)),Promise.all(s)}}class C2{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class D2{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class R2{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,d,r.mode,r.filter),p})})}else return null}}class L2{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Jt.TRIANGLES&&c.mode!==Jt.TRIANGLE_STRIP&&c.mode!==Jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const m=new Pe,f=new P,v=new fi,y=new P(1,1,1),b=new HT(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),b.setMatrixAt(_,m.compose(f,v,y));for(const _ in l)_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);ke.prototype.copy.call(b,g),b.frustumCulled=!1,this.parser.assignFinalMaterial(b),p.push(b)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Sm="glTF",rs=12,Ch={JSON:1313821514,BIN:5130562};class P2{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,rs);if(this.header={magic:Fi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-rs,r=new DataView(e,rs);let s=0;for(;s<n;){const o=r.getUint32(s,!0);s+=4;const a=r.getUint32(s,!0);if(s+=4,a===Ch.JSON){const l=new Uint8Array(e,rs+s,o);this.content=Fi.decodeText(l)}else if(a===Ch.BIN){const l=rs+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class I2{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Xl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Xl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],p=wr[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){r.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}h(d)},a,c)})})}}class F2{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class N2{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class Mm extends Ns{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(n-t)/u,d=h*h,p=d*h,g=e*c,m=g-c,f=-2*p+3*d,v=p-d,y=1-f,b=v-d+h;for(let _=0;_!==a;_++){const M=o[m+_+a],R=o[m+_+l]*u,F=o[g+_+a],x=o[g+_]*u;s[_]=y*M+b*R+f*F+v*x}return s}}const O2=new fi;class k2 extends Mm{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return O2.fromArray(s).normalize().toArray(s),s}}const Jt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dh={9728:wt,9729:Bt,9984:Bl,9985:Qf,9986:Ul,9987:Hr},Rh={33071:en,33648:ko,10497:Cr},vl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},B2={CUBICSPLINE:void 0,LINEAR:Rr,STEP:_s},_l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function U2(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Tc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),i.DefaultMaterial}function ss(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function oi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function z2(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(r){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function V2(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function H2(i){const e=i.extensions&&i.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Lh(e.attributes):t=i.indices+":"+Lh(i.attributes)+":"+i.mode,t}function Lh(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Kl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function G2(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class W2{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new v2,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new rE(this.options.manager):this.textureLoader=new uE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ep(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};ss(s,a,r),oi(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Fi.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=vl[r.type],a=wr[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Dt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=vl[r.type],c=wr[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let m,f;if(p&&p!==h){const v=Math.floor(d/p),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+v+":"+r.count;let b=t.cache.get(y);b||(m=new c(a,v*p,r.count*p/u),b=new OT(m,p/u),t.cache.add(y,b)),f=new bc(b,l,d%p/u,g)}else a===null?m=new c(r.count*l):m=new c(a,d,r.count*l),f=new Dt(m,l,g);if(r.sparse!==void 0){const v=vl.SCALAR,y=wr[r.sparse.indices.componentType],b=r.sparse.indices.byteOffset||0,_=r.sparse.values.byteOffset||0,M=new y(o[1],b,r.sparse.count*v),R=new c(o[2],_,r.sparse.count*l);a!==null&&(f=new Dt(f.array.slice(),f.itemSize,f.normalized));for(let F=0,x=M.length;F<x;F++){const E=M[F];if(f.setX(E,R[F*l]),l>=2&&f.setY(E,R[F*l+1]),l>=3&&f.setZ(E,R[F*l+2]),l>=4&&f.setW(E,R[F*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Dh[d.magFilter]||Bt,u.minFilter=Dh[d.minFilter]||Hr,u.wrapS=Rh[d.wrapS]||Cr,u.wrapT=Rh[d.wrapT]||Cr,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(m){const f=new St(m);f.needsUpdate=!0,d(f)}),t.load(Fi.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||G2(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.encoding=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new wp,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new bp,Tn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Tc}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){const h=r[Ve.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,qe)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Un);const u=s.alphaMode||_l.OPAQUE;if(u===_l.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===_l.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Mn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new he(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&o!==Mn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Mn&&(a.emissive=new Ce().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==Mn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,qe)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),oi(h,s),t.associations.set(h,{materials:e}),s.extensions&&ss(r,h,s),h})}createUniqueName(e){const t=Xe.sanitizeNodeName(e||"");let n=t;for(let r=1;this.nodeNamesUsed[n];++r)n=t+"_"+r;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ph(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=H2(c),h=r[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Ph(new Vt,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?U2(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const m=u[p],f=o[p];let v;const y=c[p];if(f.mode===Jt.TRIANGLES||f.mode===Jt.TRIANGLE_STRIP||f.mode===Jt.TRIANGLE_FAN||f.mode===void 0)v=s.isSkinnedMesh===!0?new BT(m,y):new nt(m,y),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),f.mode===Jt.TRIANGLE_STRIP?v.geometry=Ih(v.geometry,gc):f.mode===Jt.TRIANGLE_FAN&&(v.geometry=Ih(v.geometry,Bo));else if(f.mode===Jt.LINES)v=new GT(m,y);else if(f.mode===Jt.LINE_STRIP)v=new Sc(m,y);else if(f.mode===Jt.LINE_LOOP)v=new WT(m,y);else if(f.mode===Jt.POINTS)v=new $T(m,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(v.geometry.morphAttributes).length>0&&V2(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),oi(v,s),f.extensions&&ss(r,v,f),t.assignFinalMaterial(v),h.push(v)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const d=new li;t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(Ob.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Fs(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),oi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this.getDependency("node",t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Pe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new wc(a,l)})}loadAnimation(e){const n=this.json.animations[e],r=[],s=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],d=n.samplers[h.sampler],p=h.target,g=p.node,m=n.parameters!==void 0?n.parameters[d.input]:d.input,f=n.parameters!==void 0?n.parameters[d.output]:d.output;r.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",f)),a.push(d),l.push(p)}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],p=c[3],g=c[4],m=[];for(let v=0,y=u.length;v<y;v++){const b=u[v],_=h[v],M=d[v],R=p[v],F=g[v];if(b===void 0)continue;b.updateMatrix();let x;switch(ri[F.path]){case ri.weights:x=ws;break;case ri.rotation:x=zi;break;case ri.position:case ri.scale:default:x=Ss;break}const E=b.name?b.name:b.uuid,N=R.interpolation!==void 0?B2[R.interpolation]:Rr,$=[];ri[F.path]===ri.weights?b.traverse(function(G){G.morphTargetInfluences&&$.push(G.name?G.name:G.uuid)}):$.push(E);let Q=M.array;if(M.normalized){const G=Kl(Q.constructor),I=new Float32Array(Q.length);for(let k=0,K=Q.length;k<K;k++)I[k]=Q[k]*G;Q=I}for(let G=0,I=$.length;G<I;G++){const k=new x($[G]+"."+ri[F.path],_.array,Q,N);R.interpolation==="CUBICSPLINE"&&(k.createInterpolant=function(L){const B=this instanceof zi?k2:Mm;return new B(this.times,this.values,this.getValueSize()/3,L)},k.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(k)}}const f=n.name?n.name:"animation_"+e;return new ZT(f,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,r=this,s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"";return function(){const a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new yp:a.length>1?l=new li:a.length===1?l=a[0]:l=new ke,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(s.name&&(l.userData.name=s.name,l.name=o),oi(l,s),s.extensions&&ss(n,l,s),s.matrix!==void 0){const c=new Pe;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return r.associations.has(l)||r.associations.set(l,{}),r.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,r=this.json.scenes[e],s=this,o=new li;r.name&&(o.name=s.createUniqueName(r.name)),oi(o,r),r.extensions&&ss(n,o,r);const a=r.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(Tm(a[c],o,t,s));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[d,p]of s.associations)(d instanceof Tn||d instanceof St)&&h.set(d,p);return u.traverse(d=>{const p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=c(o),o})}}function Tm(i,e,t,n){const r=t.nodes[i];return n.getDependency("node",i).then(function(s){return r.skin===void 0?s:n.getDependency("skin",r.skin).then(function(o){return s.traverse(function(a){!a.isSkinnedMesh||a.bind(o,a.matrixWorld)}),s})}).then(function(s){e.add(s);const o=[];if(r.children){const a=r.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];o.push(Tm(u,s,t,n))}}return Promise.all(o)})}function $2(i,e,t){const n=e.attributes,r=new qi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=Kl(wr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new P,l=new P;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const m=Kl(wr[d.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Wr;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Ph(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Xl[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return oi(i,e),$2(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?z2(i,e.targets,t):i})}function Ih(i,e){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Bo)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s}function Em(i){const e=new Map,t=new Map,n=i.clone();return Am(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Am(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Am(i.children[n],e.children[n],t)}const Sr={},Cm=(i,e)=>{const t=document.querySelector("div#loading-message");!t||(Sr[i]=e,t.style.display=Object.keys(Sr).length===0?"none":"block",t.innerText=Or(Sr).join(`
`))},Dm=i=>{const e=document.querySelector("div#loading-message");!e||(delete Sr[i],e.style.display=Object.keys(Sr).length===0?"none":"block",e.innerText=Or(Sr).join(`
`))},j2=async i=>{if(!Uc(i))return new ke;const e=(await new Promise((t,n)=>new g2().load(i,t,r=>{Cm(i,`Loading ${i} (${r.loaded}/${r.total})`)},n))).scene.children[0].children[0];return Dm(i),e},q2=["ballistic_missile.glb","hammer_notexture.glb","hammer.glb","low-poly_airplane.glb","low_polygon_art__white_eagle_bird.glb","planet_megatropolis.glb","ufo.glb","sky_pano_-_grand_canyon_yuma_point.glb","y2k_newspaper_article.glb"],X2=await Promise.all(q2.map(i=>(async()=>[i,await j2(`models/${i}`)])()));Cm("loadingModels","Loading models...");await new Promise(i=>setTimeout(i,0));const mi=Oc(X2.map(([i,e])=>[i,t=>{const n=Em(e);return t!==null&&n.scale.multiplyScalar(t/new qi().setFromObject(n).getSize(new P).y),n}])),K2=()=>{Dm("loadingModels")},jo={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Us{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Y2=new Fs(-1,1,1,-1,0,1),zc=new Vt;zc.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3));zc.setAttribute("uv",new Rt([0,2,0,0,2,0],2));class Rm{constructor(e){this._mesh=new nt(zc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Y2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class kr extends Us{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zo.clone(e.uniforms),this.material=new ct({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Rm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Fh extends Us{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Z2 extends Us{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Lm{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new he);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],jo===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),kr===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new kr(jo),this.clock=new dE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Fh!==void 0&&(o instanceof Fh?n=!0:o instanceof Z2&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Fs(-1,1,1,-1,0,1);const Pm=new Vt;Pm.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3));Pm.setAttribute("uv",new Rt([0,2,0,0,2,0],2));class J2 extends Us{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Nh={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Hi extends Us{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new Ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(s,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new hn(s,o);d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new hn(s,o);p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}Nh===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const a=Nh;this.highPassUniforms=zo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ct({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new he(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,jo===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=jo;this.copyUniforms=zo.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new ct({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Oo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ce,this.oldClearAlpha=1,this.basic=new Mn,this.fsQuad=new Rm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.texSize.value=new he(n,r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Hi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Hi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new ct({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}}Hi.BlurDirectionX=new he(1,0);Hi.BlurDirectionY=new he(0,1);const ut=new Set,Im=new Set,Kn=new Set,[Mr,Sn,Q2,eA]=[.5,-.5,.3,-.3],qo=30,Oh=["Laser","Autopilot","Hammer","ATK\xD72","Vacuum","Missile","placeholder4","placeholder5","placeholder6"],Yl=25,tA={Food:"On the trail, it's good to have a hearty meal ready to go. The right foods will give you the energy you need to explore new territory.",Scrap:"With a little ingenuity and a lot of scrap, we can make some missiles to take down our enemies."},Zl={Earth:"Rain",Universe:"Jamming",Mothership:null},Fm=(i,e)=>i==="Autopilot"&&e==="Rain"?-5:i==="Autopilot"&&e==="Jamming"?-15:i==="Hammer"&&e==="Jamming"?-3:0,nA={Laser:15,Autopilot:100,Hammer:100*15,"ATK\xD72":100*15**2,Vacuum:400*15**3,Missile:100*15**4,placeholder4:100*15**5,placeholder5:100*15**6,placeholder6:100*15**7},da=({getUpgrade:i})=>({Laser:(i("Laser")+1)*(i("ATK\xD72")+1),Autopilot:void 0,Hammer:i("Hammer")<=0?void 0:2e3*(i("ATK\xD72")+1),"ATK\xD72":void 0,Vacuum:void 0,Missile:i("Missile")===0?void 0:1e5*(i("ATK\xD72")+1),placeholder4:void 0,placeholder5:void 0,placeholder6:void 0}),Vc=({getUpgrade:i})=>({Laser:1,Autopilot:void 0,Hammer:i("Hammer")===0?void 0:Math.ceil(50/i("Hammer")),"ATK\xD72":void 0,Vacuum:void 0,Missile:i("Missile")===0?void 0:Math.ceil(200/i("Missile")),placeholder4:void 0,placeholder5:void 0,placeholder6:void 0}),Ts=({getUpgrade:i})=>1+.2*(i("Vacuum")-1),Hc=(i,e)=>e.upgrades[i]===0&&e.money<Br(i,e)*2/3,Jl=i=>i.completedTutorials.nextStage??!1,iA=()=>!1,bo=(i=Math.random())=>i*qo*60*6,Br=(i,{upgrades:e})=>nA[i]*2**e[i],Ql=i=>+(500*1.25**(i-1)).toPrecision(2),Nm={wasd:C(tt,{children:["You have become a ",C("b",{children:"fighter"})," pilot that shoots ",C("b",{children:"laser"})," beams. This world is peaceful, so your first mission is to protect farmers from harmful ",C("b",{children:"birds"}),".",C("br",{}),"The controls are simple, ",C("b",{children:[C("i",{class:"ti ti-keyboard"})," WASD"]})," or ",C("b",{children:[C("i",{class:"ti ti-hand-click"})," press"]})," the edge of the screen to move and aim your targets."]}),upgrade:C(tt,{children:["You can now buy ",C("b",{children:[C("i",{class:"ti ti-chevrons-up"})," upgrades"]})," for your aircraft! To do so, ",C("b",{children:"click"})," on the button in the ",C("b",{children:"top left"})," corner of the screen."]}),nextStage:C(tt,{children:["You can now move on to the ",C("b",{children:[C("i",{class:"ti ti-map-2"})," next stage"]}),"! To do so, ",C("b",{children:"click"})," the button in the ",C("b",{children:"top right"})," corner of the screen."]}),backToPreviousStage:C(tt,{children:["If you're finding this stage too ",C("b",{children:"difficult"}),", go back to the previous stage and ",C("b",{children:"try again"})," after you get more upgrades."]}),weatherEffect:C(tt,{children:["We need to destroy the ",C("b",{children:[C("i",{class:"ti ti-ufo"})," UFO"]})," that has a special device. This will stop the ",C("b",{children:[C("i",{class:"ti ti-cloud-rain"})," environmental effects"]})," that are interfering with the ",C("b",{children:"autopilot"})," system."]})},rA={aliensComing:["Aliens Are Coming To Invade Earth","According to recent reports, aliens are planning to invade Earth. We should be prepared to fight against them and protect our planet. There are many reasons why aliens would want to invade Earth. Our planet is abundant in resources that they may need, and they may view us as a threat to their own species. Whatever their reasons, we cannot allow them to take over our planet. We need to be prepared to fight against the aliens when they come. We should have weapons and defences ready, and we should all be trained in how to use them. We also need to be prepared to evacuate if necessary. It is vital that we protect our planet from the aliens. We need to be prepared to fight them, and we need to be willing to do whatever it takes to win."],hammer:["UFO Researchers Develop Device That Can Float Hammers In Air",'A team of UFO researchers say they have invented a device that can float hammers in mid-air. The team says the device uses "anti - gravity" technology to achieve the feat. The device, which the team has dubbed the "Hammer levitator", consists of a frame made of aluminum tubing, with a ring of magnets mounted on the top. The device is placed over a hammer, and when it is turned on, the magnets create a magnetic field that levitates the hammer. The device is the latest invention from a team of UFO researchers that has been making headlines in recent years for their unorthodox methods. The team says they are now working on a device that they believe could allow humans to fly.'],ending1:["Scientists Have Found The Way To Move To A Higher World","Scientists have finally reached the Singularity, and as a result, they have been able to move to a higher world. In this new world, there are beings that do not exist in this one. The breakthrough is the result of invading the residence of the aliens, which allowed the scientists to access their technology. The scientists were able to use this technology to move to the new world, and they are now working to take over the world. The beings in this new world are not happy about this, and they are fighting back. The scientists are using their technology to fight back, and they believe that they will eventually be able to take over the world. They are using their technology to create armies, and they are prepared to fight against the beings in this new world. The scientists are determined to take over the world, and they are prepared to do whatever it takes."]},Om="acgSaveData",sA=()=>crypto.randomUUID?.()??`insecure-${[...Array(12)].map(()=>Math.floor(Math.random()*16).toString(16)).join("")}`,Ge=Bc(Om,8,{stage:"Earth",stageTransitingTo:null,exploration:{},money:0,items:{},upgrades:Object.fromEntries(Oh.map(i=>[i,0])),completedTutorials:{},availableTutorials:{},availableNews:{},weatherEffectWillBeEnabledIn:{},weatherEffectWillBeEnabledInLessThan:{},canTranscend:!1,transcending:!1,transcendence:0,killCount:{},cheated:!1},(i,e)=>{const t=l=>{l in e().availableTutorials||i({availableTutorials:{...e().availableTutorials,[l]:!0}})},n=l=>{e().availableNews[l]||i({availableNews:{...e().availableNews,[l]:!0}})},r=l=>{i({money:Math.floor(e().money+l)}),e().money>=Br(Oh[0],e())&&t("upgrade"),Hc("Hammer",e())||n("hammer")},s=l=>{l in e().completedTutorials||(i({completedTutorials:{...e().completedTutorials,[l]:!0}}),l==="nextStage"&&i({availableTutorials:{...e().availableTutorials,backToPreviousStage:!0}}))},o=()=>!Jl(e())||(e().weatherEffectWillBeEnabledIn[e().stage]??Number.MAX_SAFE_INTEGER)>0?null:Zl[e().stage],a=()=>e().exploration[e().stage]??1;return{addTutorial:t,addNews:n,addMoney:r,completeTutorial:s,getWeather:o,getExplorationLv:a,getUpgrade:l=>e().upgrades[l]+Fm(l,o()),addItems:l=>{const c={...e().items};for(const[u,h]of Vi(l))c[u]=Math.floor((c[u]??0)+h);i({items:c})},buyUpgrade:l=>{r(-Br(l,e())),i({upgrades:{...e().upgrades,[l]:e().upgrades[l]+1}}),document.title=`ACG Final Project $${e().money}`,e().upgrades.Autopilot>0&&n("aliensComing"),s("upgrade")},setStageTransitingTo:l=>{e().stage!==l&&i({stageTransitingTo:l})},completeStageTransition:()=>{e().stageTransitingTo!==null&&(i({stage:e().stageTransitingTo,stageTransitingTo:null}),e().stage==="Earth"?s("backToPreviousStage"):e().stage==="Universe"&&s("nextStage"))},countdown:()=>{if(!Jl(e()))return;const l=e();i({weatherEffectWillBeEnabledIn:{...l.weatherEffectWillBeEnabledIn,[l.stage]:(l.weatherEffectWillBeEnabledIn[l.stage]??bo())-1},weatherEffectWillBeEnabledInLessThan:{...l.weatherEffectWillBeEnabledInLessThan,[l.stage]:(l.weatherEffectWillBeEnabledInLessThan[l.stage]??bo(1))-1}}),o()&&t("weatherEffect")},stopWeatherEffect:()=>{i({weatherEffectWillBeEnabledIn:{...e().weatherEffectWillBeEnabledIn,[e().stage]:bo()},weatherEffectWillBeEnabledInLessThan:{...e().weatherEffectWillBeEnabledInLessThan,[e().stage]:bo(1)}})},defeatedMothership:()=>{n("ending1"),i({canTranscend:!0})},transcend:()=>{i({transcending:!0})},cancelTranscending:()=>{i({transcending:!1})},confirmTranscending:()=>{!e().transcending||i({stageTransitingTo:null,stage:"Earth",transcending:!1,transcendence:e().transcendence+1,canTranscend:!1})},incrementKillCount:l=>{const c=`${e().stage}_${l}`;i({killCount:{...e().killCount,[c]:(e().killCount[c]??0)+1}}),(e().killCount.Universe_UFO??0>10)&&se().completeTutorial("backToPreviousStage")},cheat:()=>{i({cheated:!0})},exploreNext:()=>{const l=a();(e().items.Food??0)<Ql(l)||i({items:{...e().items,Food:(e().items.Food??0)-Ql(l)},exploration:{...e().exploration,[e().stage]:l+1}})},explorePrev:()=>{const l=a();if(l<=1)throw new Error;i({exploration:{...e().exploration,[e().stage]:l-1}})}}});window.store=new Proxy(Ge,{get(i,e,t){return se().cheat(),Reflect.get(i,e,t)}});const se=Ge.getState,gi=Ge.subscribe,oA=()=>{Ge.destroy(),localStorage.removeItem(Om)};if(location.hostname.endsWith(".github.io")){localStorage.userId??=sA();const i=e=>{fetch("https://oijeofiwjef.net/acg",{method:"POST",body:JSON.stringify({userId:localStorage.userId,event:e,...Ge.getState()})})};setInterval(()=>i(),1e3*60),i("start"),document.addEventListener("visibilitychange",()=>{i(document.visibilityState)})}function Gc(i,e){if(Object.is(i,e))return!0;if(typeof i!="object"||i===null||typeof e!="object"||e===null)return!1;const t=Object.keys(i);if(t.length!==Object.keys(e).length)return!1;for(let n=0;n<t.length;n++)if(!Object.prototype.hasOwnProperty.call(e,t[n])||!Object.is(i[t[n]],e[t[n]]))return!1;return!0}const Es=kc({key:"",content:null,visible:!1},()=>{}),Xo=(i,e)=>{Es.setState({key:i,content:e,visible:!0})},Ko=i=>{Es.getState().key===i&&Es.setState({key:"",visible:!1})},aA=()=>{const[i,e]=An(0),[t,n]=An(0),r=ze(Es,o=>o.content),s=ze(Es,o=>o.visible);return hi(()=>{const o=a=>{e(a.clientX),n(a.clientY)};window.addEventListener("mousemove",o)},[]),C("div",{style:{transform:s?"translateY(0%) scaleY(100%)":"translateY(-50%) scaleY(0%)",...i<window.innerWidth/2?{left:`${i+50}px`,top:`${t}px`}:{right:`${window.innerWidth-i+50}px`,top:`${t}px`}},class:"text-gray-100 absolute px-6 py-1 max-w-[300px] backdrop-blur-3xl bg-[linear-gradient(240deg,rgba(31,37,46,0.4)_0%,rgba(30,36,44,0.4)_100%)] pointer-events-none rounded-sm [font-size:80%] [-webkit-text-stroke:5px_rgba(255,255,255,0.15)] [transition:transform_0.1s_ease-out]",children:r})},lA=(i,e)=>{const t=Br(i,se()),n=se().upgrades[i],r=se().money,s=n>=Yl?new je(255,0,0,1):r>=t?new je(0,220,220,1):new je(128,128,128,1),o=n>=Yl?1:r/t;let a="linear-gradient(90deg,";for(let l=0;l<=1;l+=.05){const c=s.clone(),u=(Math.sin(l*2-Date.now()*.004+e)+1)/2;c.x+=u*70,c.y+=u*70,c.z+=u*70,l>o?c.w=0:c.w=.5,a+=`rgba(${c.toArray().join(",")}) ${l*100}%,`}return`${a.slice(0,-1)})`},cA=()=>{const i=ze(Ge,e=>Vi(e.upgrades).filter((t,n,r)=>n<2||r[n-1][1]>0||r[n-2][1]>0).map(([t])=>t),Gc);return C(tt,{children:C("div",{class:"pr-3 pl-4 pt-1 pb-3 window",children:[C("h2",{class:"mb-2 tracking-wide",children:[C("i",{class:"ti ti-chevrons-up"})," Upgrades"]}),C("div",{class:"[&>*:not(:last-child)]:mb-1",children:i.map((e,t)=>C(uA,{name:e,rowNumber:t},e))})]})})},uA=i=>{const e=ze(Ge,c=>c.buyUpgrade),t=ze(Ge,c=>c.getWeather()),n=ze(Ge,c=>Br(i.name,c)),r=ze(Ge,c=>Hc(i.name,c)),s=ze(Ge,c=>c.upgrades[i.name]),o=ze(Ge,c=>n>c.money||s>=Yl),a=ci(null);Zi(()=>{const c=()=>{!a.current||(a.current.style.background=lA(i.name,i.rowNumber))};return ut.add(c),()=>{ut.delete(c)}},[a]);const l=Fm(i.name,t);return C("div",{ref:a,class:"relative block pointer backdrop-blur-3xl drop-shadow-md select-none border-opacity-40 border-[1px] rounded-lg border-t-gray-400 border-l-gray-400 border-b-gray-600 border-r-gray-600 hover:scale-105 hover:[box-shadow:0_0_3px_rgba(255,255,255,0.5)]",disabled:o,onMouseDown:()=>{o||e(i.name)},children:C("div",{class:"px-2",onMouseEnter:()=>{Xo(`upgrade-${i.name}`,C(dA,{name:i.name}))},onMouseLeave:()=>{Ko(`upgrade-${i.name}`)},children:[C("span",{class:"inline-block w-28 tracking-wider whitespace-nowrap",children:r?"???":C(tt,{children:[C("i",{class:"mr-1 ti "+{Laser:"ti-flare",Autopilot:"ti-plane",Hammer:"ti-hammer","ATK\xD72":"ti-swords",Vacuum:"ti-windmill",Missile:"ti-rocket",placeholder4:"ti-circle-dotted",placeholder5:"ti-circle-dotted",placeholder6:"ti-circle-dotted"}[i.name]}),i.name]})}),C("span",{class:"float-right tracking-tight",children:[s,l!==0&&C("b",{class:"text-red-400",children:[" (",l,")"]})]})]})})},dA=i=>{const e=ze(Ge,a=>Br(i.name,a)),t=ze(Ge,a=>da(a)[i.name]),n=ze(Ge,a=>Vc(a)[i.name]),r=ze(Ge,a=>a.money),s=ze(Ge,a=>Hc(i.name,a)),o=ze(Ge,a=>Ts(a).toFixed(2));return C("table",{children:[C("tr",{children:[C("td",{class:"font-bold tracking-wider pr-2 text-right",children:"Price"}),C("td",{children:[C("i",{class:"ti ti-moneybag"})," ",r," / ",e]})]}),!s&&C(tt,{children:[t&&C("tr",{children:[C("td",{class:"tracking-wider text-right pr-2",children:"Damage"}),C("td",{children:[C("i",{class:"ti ti-swords"})," ",t]})]}),n&&C("tr",{children:[C("td",{class:"tracking-wider text-right pr-2",children:"Interval"}),C("td",{children:[C("i",{class:"ti ti-hourglass"})," ",n]})]}),i.name==="Missile"&&C("tr",{children:[C("td",{class:"tracking-wider text-right pr-2",children:"Ammo"}),C("td",{children:[C("i",{class:"ti ti-notes"})," ",C("i",{class:"ti ti-settings"}),"\xD71000 / shot"]})]}),i.name==="Vacuum"&&C("tr",{children:[C("td",{class:"tracking-wider text-right pr-2",children:"Items"}),C("td",{children:[C("i",{class:"ti ti-notes"})," \xD7",o]})]})]})]})};var hA="4.0.0";function fA(i){return i===void 0}function nn(i){return typeof i=="boolean"}function pA(i,e){for(var t in e)e.hasOwnProperty(t)&&fA(i[t])&&(i[t]=e[t]);return i}function mA(i,e,t){var n;return i.length>e&&(t==null?(t="&hellip;",n=3):n=t.length,i=i.substring(0,e-n)+t),i}function Ye(i,e){for(var t=i.length-1;t>=0;t--)i[t]===e&&i.splice(t,1)}function Ti(i,e){for(var t=i.length-1;t>=0;t--)e(i[t])===!0&&i.splice(t,1)}function fs(i){throw new Error("Unhandled case for value: '".concat(i,"'"))}var Tr=/[A-Za-z]/,At=/[\d]/,cn=/\s/,xl=/['"]/,gA=/[\x00-\x1F\x7F]/,vA=/A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC/.source,_A=/\u2700-\u27bf\udde6-\uddff\ud800-\udbff\udc00-\udfff\ufe0e\ufe0f\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0\ud83c\udffb-\udfff\u200d\u3299\u3297\u303d\u3030\u24c2\ud83c\udd70-\udd71\udd7e-\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01-\ude02\ude1a\ude2f\ude32-\ude3a\ude50-\ude51\u203c\u2049\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe\u00a9\u00ae\u2122\u2139\udc04\u2600-\u26FF\u2b05\u2b06\u2b07\u2b1b\u2b1c\u2b50\u2b55\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\udccf\u2935\u2934\u2190-\u21ff/.source,xA=/\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F/.source,yA=vA+_A+xA,bA=/0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/.source,km=yA+bA,Ni=new RegExp("[".concat(km,"]")),Bm=function(){function i(e){e===void 0&&(e={}),this.tagName="",this.attrs={},this.innerHTML="",this.tagName=e.tagName||"",this.attrs=e.attrs||{},this.innerHTML=e.innerHtml||e.innerHTML||""}return i.prototype.setTagName=function(e){return this.tagName=e,this},i.prototype.getTagName=function(){return this.tagName||""},i.prototype.setAttr=function(e,t){var n=this.getAttrs();return n[e]=t,this},i.prototype.getAttr=function(e){return this.getAttrs()[e]},i.prototype.setAttrs=function(e){return Object.assign(this.getAttrs(),e),this},i.prototype.getAttrs=function(){return this.attrs||(this.attrs={})},i.prototype.setClass=function(e){return this.setAttr("class",e)},i.prototype.addClass=function(e){for(var t=this.getClass(),n=t?t.split(cn):[],r=e.split(cn),s;s=r.shift();)n.indexOf(s)===-1&&n.push(s);return this.getAttrs().class=n.join(" "),this},i.prototype.removeClass=function(e){for(var t=this.getClass(),n=t?t.split(cn):[],r=e.split(cn),s;n.length&&(s=r.shift());){var o=n.indexOf(s);o!==-1&&n.splice(o,1)}return this.getAttrs().class=n.join(" "),this},i.prototype.getClass=function(){return this.getAttrs().class||""},i.prototype.hasClass=function(e){return(" "+this.getClass()+" ").indexOf(" "+e+" ")!==-1},i.prototype.setInnerHTML=function(e){return this.innerHTML=e,this},i.prototype.setInnerHtml=function(e){return this.setInnerHTML(e)},i.prototype.getInnerHTML=function(){return this.innerHTML||""},i.prototype.getInnerHtml=function(){return this.getInnerHTML()},i.prototype.toAnchorString=function(){var e=this.getTagName(),t=this.buildAttrsStr();return t=t?" "+t:"",["<",e,t,">",this.getInnerHtml(),"</",e,">"].join("")},i.prototype.buildAttrsStr=function(){if(!this.attrs)return"";var e=this.getAttrs(),t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+'="'+e[n]+'"');return t.join(" ")},i}();function wA(i,e,t){var n,r;t==null?(t="&hellip;",r=3,n=8):(r=t.length,n=t.length);var s=function(y){var b={},_=y,M=_.match(/^([a-z]+):\/\//i);return M&&(b.scheme=M[1],_=_.substr(M[0].length)),M=_.match(/^(.*?)(?=(\?|#|\/|$))/i),M&&(b.host=M[1],_=_.substr(M[0].length)),M=_.match(/^\/(.*?)(?=(\?|#|$))/i),M&&(b.path=M[1],_=_.substr(M[0].length)),M=_.match(/^\?(.*?)(?=(#|$))/i),M&&(b.query=M[1],_=_.substr(M[0].length)),M=_.match(/^#(.*?)$/i),M&&(b.fragment=M[1]),b},o=function(y){var b="";return y.scheme&&y.host&&(b+=y.scheme+"://"),y.host&&(b+=y.host),y.path&&(b+="/"+y.path),y.query&&(b+="?"+y.query),y.fragment&&(b+="#"+y.fragment),b},a=function(y,b){var _=b/2,M=Math.ceil(_),R=-1*Math.floor(_),F="";return R<0&&(F=y.substr(R)),y.substr(0,M)+t+F};if(i.length<=e)return i;var l=e-r,c=s(i);if(c.query){var u=c.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);u&&(c.query=c.query.substr(0,u[1].length),i=o(c))}if(i.length<=e||(c.host&&(c.host=c.host.replace(/^www\./,""),i=o(c)),i.length<=e))return i;var h="";if(c.host&&(h+=c.host),h.length>=l)return c.host.length==e?(c.host.substr(0,e-r)+t).substr(0,l+n):a(h,l).substr(0,l+n);var d="";if(c.path&&(d+="/"+c.path),c.query&&(d+="?"+c.query),d)if((h+d).length>=l){if((h+d).length==e)return(h+d).substr(0,e);var p=l-h.length;return(h+a(d,p)).substr(0,l+n)}else h+=d;if(c.fragment){var g="#"+c.fragment;if((h+g).length>=l){if((h+g).length==e)return(h+g).substr(0,e);var m=l-h.length;return(h+a(g,m)).substr(0,l+n)}else h+=g}if(c.scheme&&c.host){var f=c.scheme+"://";if((h+f).length<l)return(f+h).substr(0,e)}if(h.length<=e)return h;var v="";return l>0&&(v=h.substr(-1*Math.floor(l/2))),(h.substr(0,Math.ceil(l/2))+t+v).substr(0,l+n)}function SA(i,e,t){if(i.length<=e)return i;var n,r;t==null?(t="&hellip;",n=8,r=3):(n=t.length,r=t.length);var s=e-r,o="";return s>0&&(o=i.substr(-1*Math.floor(s/2))),(i.substr(0,Math.ceil(s/2))+t+o).substr(0,s+n)}function MA(i,e,t){return mA(i,e,t)}var TA=function(){function i(e){e===void 0&&(e={}),this.newWindow=!1,this.truncate={},this.className="",this.newWindow=e.newWindow||!1,this.truncate=e.truncate||{},this.className=e.className||""}return i.prototype.build=function(e){return new Bm({tagName:"a",attrs:this.createAttrs(e),innerHtml:this.processAnchorText(e.getAnchorText())})},i.prototype.createAttrs=function(e){var t={href:e.getAnchorHref()},n=this.createCssClass(e);return n&&(t.class=n),this.newWindow&&(t.target="_blank",t.rel="noopener noreferrer"),this.truncate&&this.truncate.length&&this.truncate.length<e.getAnchorText().length&&(t.title=e.getAnchorHref()),t},i.prototype.createCssClass=function(e){var t=this.className;if(t){for(var n=[t],r=e.getCssClassSuffixes(),s=0,o=r.length;s<o;s++)n.push(t+"-"+r[s]);return n.join(" ")}else return""},i.prototype.processAnchorText=function(e){return e=this.doTruncate(e),e},i.prototype.doTruncate=function(e){var t=this.truncate;if(!t||!t.length)return e;var n=t.length,r=t.location;return r==="smart"?wA(e,n):r==="middle"?SA(e,n):MA(e,n)},i}(),ec=function(i,e){return ec=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},ec(i,e)};function zs(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ec(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var _t=function(){return _t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},_t.apply(this,arguments)},Vs=function(){function i(e){this._=null,this.matchedText="",this.offset=0,this.tagBuilder=e.tagBuilder,this.matchedText=e.matchedText,this.offset=e.offset}return i.prototype.getMatchedText=function(){return this.matchedText},i.prototype.setOffset=function(e){this.offset=e},i.prototype.getOffset=function(){return this.offset},i.prototype.getCssClassSuffixes=function(){return[this.type]},i.prototype.buildTag=function(){return this.tagBuilder.build(this)},i}(),EA="(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|northwesternmutual|travelersinsurance|verm\xF6gensberatung|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbah1a3hjkrd|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|verm\xF6gensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--mgbcpq6gpa1a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbaakc7dvf|xn--mgbc0a9azcg|xn--nqv7fs00ema|americanfamily|bananarepublic|cancerresearch|cookingchannel|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--h2breg3eve|xn--jlq480n2rg|xn--jlq61u9w7b|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|xn--rvc1e0am3e|international|lifeinsurance|travelchannel|wolterskluwer|xn--cckwcxetd|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--h2brj9c8c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|scholarships|versicherung|xn--3e0b707e|xn--45br5cyl|xn--4dbrk0ce|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbgu82a|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|foodnetwork|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--3bst00m|xn--3ds443g|xn--3hcrj9c|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--mgbbh1a|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--otu796d|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nextdirect|properties|protection|prudential|realestate|republican|restaurant|schaeffler|tatamotors|technology|university|vlaanderen|volkswagen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--q7ce6a|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|alfaromeo|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|frontdoor|furniture|goldpoint|hisamitsu|homedepot|homegoods|homesense|institute|insurance|kuokgroup|lancaster|landrover|lifestyle|marketing|marshalls|melbourne|microsoft|panasonic|passagens|pramerica|richardli|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--ngbrx|xn--nqv7f|xn--p1acf|xn--qxa6a|xn--tckwe|xn--vhquv|yodobashi|\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|builders|business|capetown|catering|catholic|cipriani|cityeats|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|etisalat|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|guardian|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|maserati|mckinsey|memorial|merckmsd|mortgage|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|showtime|softbank|software|stcgroup|supplies|training|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|avianca|banamex|bauhaus|bentley|bestbuy|booking|brother|bugatti|capital|caravan|careers|channel|charity|chintai|citadel|clubmed|college|cologne|comcast|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|grocery|guitars|hamburg|hangout|hitachi|holiday|hosting|hoteles|hotmail|hyundai|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lanxess|lasalle|latrobe|leclerc|limited|lincoln|markets|monster|netbank|netflix|network|neustar|okinawa|oldnavy|organic|origins|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|singles|staples|storage|support|surgery|systems|temasek|theater|theatre|tickets|tiffany|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|xfinity|yamaxun|youtube|zuerich|\u043A\u0430\u0442\u043E\u043B\u0438\u043A|\u0627\u062A\u0635\u0627\u0644\u0627\u062A|\u0627\u0644\u0628\u062D\u0631\u064A\u0646|\u0627\u0644\u062C\u0632\u0627\u0626\u0631|\u0627\u0644\u0639\u0644\u064A\u0627\u0646|\u067E\u0627\u06A9\u0633\u062A\u0627\u0646|\u0643\u0627\u062B\u0648\u0644\u064A\u0643|\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE|abarth|abbott|abbvie|africa|agency|airbus|airtel|alipay|alsace|alstom|amazon|anquan|aramco|author|bayern|beauty|berlin|bharti|bostik|boston|broker|camera|career|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hotels|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kinder|kindle|kosher|lancia|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|monash|mormon|moscow|museum|mutual|nagoya|natura|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|pictet|quebec|racing|realty|reisen|repair|report|review|rocher|rogers|ryukyu|safety|sakura|sanofi|school|schule|search|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|vuelos|walter|webcam|xihuan|yachts|yandex|zappos|\u043C\u043E\u0441\u043A\u0432\u0430|\u043E\u043D\u043B\u0430\u0439\u043D|\u0627\u0628\u0648\u0638\u0628\u064A|\u0627\u0631\u0627\u0645\u0643\u0648|\u0627\u0644\u0627\u0631\u062F\u0646|\u0627\u0644\u0645\u063A\u0631\u0628|\u0627\u0645\u0627\u0631\u0627\u062A|\u0641\u0644\u0633\u0637\u064A\u0646|\u0645\u0644\u064A\u0633\u064A\u0627|\u092D\u093E\u0930\u0924\u092E\u094D|\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8|\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|bosch|build|canon|cards|chase|cheap|cisco|citic|click|cloud|coach|codes|crown|cymru|dabur|dance|deals|delta|drive|dubai|earth|edeka|email|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|irish|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|linde|lipsy|loans|locus|lotte|lotto|macys|mango|media|miami|money|movie|music|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|rugby|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|sport|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|\u05D9\u05E9\u05E8\u05D0\u05DC|\u0627\u06CC\u0631\u0627\u0646|\u0628\u0627\u0632\u0627\u0631|\u0628\u06BE\u0627\u0631\u062A|\u0633\u0648\u062F\u0627\u0646|\u0633\u0648\u0631\u064A\u0629|\u0647\u0645\u0631\u0627\u0647|\u092D\u093E\u0930\u094B\u0924|\u0938\u0902\u0917\u0920\u0928|\u09AC\u09BE\u0982\u09B2\u09BE|\u0C2D\u0C3E\u0C30\u0C24\u0C4D|\u0D2D\u0D3E\u0D30\u0D24\u0D02|\u5609\u91CC\u5927\u9152\u5E97|aarp|able|adac|aero|akdn|ally|amex|arab|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|dvag|erni|fage|fail|fans|farm|fast|fiat|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|hgtv|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kids|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|loft|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|read|reit|rent|rest|rich|room|rsvp|ruhr|safe|sale|sarl|save|saxo|scot|seat|seek|sexy|shaw|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|\u0434\u0435\u0442\u0438|\u0441\u0430\u0439\u0442|\u0628\u0627\u0631\u062A|\u0628\u064A\u062A\u0643|\u0680\u0627\u0631\u062A|\u062A\u0648\u0646\u0633|\u0634\u0628\u0643\u0629|\u0639\u0631\u0627\u0642|\u0639\u0645\u0627\u0646|\u0645\u0648\u0642\u0639|\u092D\u093E\u0930\u0924|\u09AD\u09BE\u09B0\u09A4|\u09AD\u09BE\u09F0\u09A4|\u0A2D\u0A3E\u0A30\u0A24|\u0AAD\u0ABE\u0AB0\u0AA4|\u0B2D\u0B3E\u0B30\u0B24|\u0CAD\u0CBE\u0CB0\u0CA4|\u0DBD\u0D82\u0D9A\u0DCF|\u30A2\u30DE\u30BE\u30F3|\u30B0\u30FC\u30B0\u30EB|\u30AF\u30E9\u30A6\u30C9|\u30DD\u30A4\u30F3\u30C8|\u7EC4\u7EC7\u673A\u6784|\u96FB\u8A0A\u76C8\u79D1|\u9999\u683C\u91CC\u62C9|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|cbs|ceo|cfa|cfd|com|cpa|crs|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gay|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|ibm|ice|icu|ifm|inc|ing|ink|int|ist|itv|jcb|jio|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|llc|llp|lol|lpl|ltd|man|map|mba|med|men|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|one|ong|onl|ooo|org|ott|ovh|pay|pet|phd|pid|pin|pnc|pro|pru|pub|pwc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|sca|scb|ses|sew|sex|sfr|ski|sky|soy|spa|srl|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|\u0431\u0435\u043B|\u043A\u043E\u043C|\u049B\u0430\u0437|\u043C\u043A\u0434|\u043C\u043E\u043D|\u043E\u0440\u0433|\u0440\u0443\u0441|\u0441\u0440\u0431|\u0443\u043A\u0440|\u0570\u0561\u0575|\u05E7\u05D5\u05DD|\u0639\u0631\u0628|\u0642\u0637\u0631|\u0643\u0648\u0645|\u0645\u0635\u0631|\u0915\u0949\u092E|\u0928\u0947\u091F|\u0E04\u0E2D\u0E21|\u0E44\u0E17\u0E22|\u0EA5\u0EB2\u0EA7|\u30B9\u30C8\u30A2|\u30BB\u30FC\u30EB|\u307F\u3093\u306A|\u4E2D\u6587\u7F51|\u4E9A\u9A6C\u900A|\u5929\u4E3B\u6559|\u6211\u7231\u4F60|\u65B0\u52A0\u5761|\u6DE1\u9A6C\u9521|\u8BFA\u57FA\u4E9A|\u98DE\u5229\u6D66|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|\u03B5\u03BB|\u03B5\u03C5|\u0431\u0433|\u0435\u044E|\u0440\u0444|\u10D2\u10D4|\uB2F7\uB137|\uB2F7\uCEF4|\uC0BC\uC131|\uD55C\uAD6D|\u30B3\u30E0|\u4E16\u754C|\u4E2D\u4FE1|\u4E2D\u56FD|\u4E2D\u570B|\u4F01\u4E1A|\u4F5B\u5C71|\u4FE1\u606F|\u5065\u5EB7|\u516B\u5366|\u516C\u53F8|\u516C\u76CA|\u53F0\u6E7E|\u53F0\u7063|\u5546\u57CE|\u5546\u5E97|\u5546\u6807|\u5609\u91CC|\u5728\u7EBF|\u5927\u62FF|\u5A31\u4E50|\u5BB6\u96FB|\u5E7F\u4E1C|\u5FAE\u535A|\u6148\u5584|\u624B\u673A|\u62DB\u8058|\u653F\u52A1|\u653F\u5E9C|\u65B0\u95FB|\u65F6\u5C1A|\u66F8\u7C4D|\u673A\u6784|\u6E38\u620F|\u6FB3\u9580|\u70B9\u770B|\u79FB\u52A8|\u7F51\u5740|\u7F51\u5E97|\u7F51\u7AD9|\u7F51\u7EDC|\u8054\u901A|\u8C37\u6B4C|\u8D2D\u7269|\u901A\u8CA9|\u96C6\u56E2|\u98DF\u54C1|\u9910\u5385|\u9999\u6E2F)",AA=new RegExp("^"+EA+"$"),CA=/[\/?#]/,DA=/[-+&@#/%=~_()|'$*\[\]{}\u2713]/,Um=/[?!:,.;^]/,zm=/https?:\/\//i,RA=new RegExp("^"+zm.source,"i"),LA=new RegExp(Um.source+"$"),PA=/^(javascript|vbscript):/i,IA=/^[A-Za-z][-.+A-Za-z0-9]*:(\/\/)?([^:/]*)/,FA=/^(?:\/\/)?([^/#?:]+)/;function yl(i){return Tr.test(i)}function kh(i){return Tr.test(i)||At.test(i)||i==="+"||i==="-"||i==="."}function si(i){return Ni.test(i)}function bl(i){return i==="_"||si(i)}function Bh(i){return Ni.test(i)||DA.test(i)||Um.test(i)}function wl(i){return CA.test(i)}function Vm(i){return AA.test(i.toLowerCase())}function NA(i){if(PA.test(i))return!1;var e=i.match(IA);if(!e)return!1;var t=!!e[1],n=e[2];return t?!0:!(n.indexOf(".")===-1||!Tr.test(n))}function OA(i){var e=i.match(FA);if(!e)return!1;var t=e[0],n=t.split(".");if(n.length<2)return!1;var r=n[n.length-1];return!!Vm(r)}var kA=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,BA=/[:/?#]/;function UA(i){var e=i.split(BA,1)[0];return kA.test(e)}var zA=/^(https?:\/\/)?(www\.)?/i,VA=/^\/\//,HA=function(i){zs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="url",n.url="",n.urlMatchType="scheme",n.protocolRelativeMatch=!1,n.stripPrefix={scheme:!0,www:!0},n.stripTrailingSlash=!0,n.decodePercentEncoding=!0,n.protocolPrepended=!1,n.urlMatchType=t.urlMatchType,n.url=t.url,n.protocolRelativeMatch=t.protocolRelativeMatch,n.stripPrefix=t.stripPrefix,n.stripTrailingSlash=t.stripTrailingSlash,n.decodePercentEncoding=t.decodePercentEncoding,n}return e.prototype.getType=function(){return"url"},e.prototype.getUrlMatchType=function(){return this.urlMatchType},e.prototype.getUrl=function(){var t=this.url;return!this.protocolRelativeMatch&&this.urlMatchType!=="scheme"&&!this.protocolPrepended&&(t=this.url="http://"+t,this.protocolPrepended=!0),t},e.prototype.getAnchorHref=function(){var t=this.getUrl();return t.replace(/&amp;/g,"&")},e.prototype.getAnchorText=function(){var t=this.getMatchedText();return this.protocolRelativeMatch&&(t=$A(t)),this.stripPrefix.scheme&&(t=GA(t)),this.stripPrefix.www&&(t=WA(t)),this.stripTrailingSlash&&(t=jA(t)),this.decodePercentEncoding&&(t=qA(t)),t},e}(Vs);function GA(i){return i.replace(RA,"")}function WA(i){return i.replace(zA,"$1")}function $A(i){return i.replace(VA,"")}function jA(i){return i.charAt(i.length-1)==="/"&&(i=i.slice(0,-1)),i}function qA(i){var e=i.replace(/%22/gi,"&quot;").replace(/%26/gi,"&amp;").replace(/%27/gi,"&#39;").replace(/%3C/gi,"&lt;").replace(/%3E/gi,"&gt;");try{return decodeURIComponent(e)}catch{return e}}var XA=/^mailto:/i,KA=new RegExp("[".concat(km,"!#$%&'*+/=?^_`{|}~-]"));function YA(i){return Ni.test(i)}function Sl(i){return KA.test(i)}function ZA(i){var e=i.split(".").pop()||"";return Vm(e)}var JA=function(i){zs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="email",n.email="",n.email=t.email,n}return e.prototype.getType=function(){return"email"},e.prototype.getEmail=function(){return this.email},e.prototype.getAnchorHref=function(){return"mailto:"+this.email},e.prototype.getAnchorText=function(){return this.email},e}(Vs);function Uh(i){return i==="_"||Ni.test(i)}function QA(i){return i.length<=140}var eC=["twitter","facebook","instagram","tiktok"],tC=function(i){zs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="hashtag",n.serviceName="twitter",n.hashtag="",n.serviceName=t.serviceName,n.hashtag=t.hashtag,n}return e.prototype.getType=function(){return"hashtag"},e.prototype.getServiceName=function(){return this.serviceName},e.prototype.getHashtag=function(){return this.hashtag},e.prototype.getAnchorHref=function(){var t=this.serviceName,n=this.hashtag;switch(t){case"twitter":return"https://twitter.com/hashtag/"+n;case"facebook":return"https://www.facebook.com/hashtag/"+n;case"instagram":return"https://instagram.com/explore/tags/"+n;case"tiktok":return"https://www.tiktok.com/tag/"+n;default:throw fs(t),new Error("Invalid hashtag service: ".concat(t))}},e.prototype.getAnchorText=function(){return"#"+this.hashtag},e.prototype.getCssClassSuffixes=function(){var t=i.prototype.getCssClassSuffixes.call(this),n=this.getServiceName();return n&&t.push(n),t},e}(Vs),nC={twitter:/^@\w{1,15}$/,instagram:/^@[_\w]{1,30}$/,soundcloud:/^@[-a-z0-9_]{3,25}$/,tiktok:/^@[.\w]{1,23}[\w]$/},iC=/[-\w.]/;function zh(i){return iC.test(i)}function rC(i,e){var t=nC[e];return t.test(i)}var sC=["twitter","instagram","soundcloud","tiktok"],oC=function(i){zs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="mention",n.serviceName="twitter",n.mention="",n.mention=t.mention,n.serviceName=t.serviceName,n}return e.prototype.getType=function(){return"mention"},e.prototype.getMention=function(){return this.mention},e.prototype.getServiceName=function(){return this.serviceName},e.prototype.getAnchorHref=function(){switch(this.serviceName){case"twitter":return"https://twitter.com/"+this.mention;case"instagram":return"https://instagram.com/"+this.mention;case"soundcloud":return"https://soundcloud.com/"+this.mention;case"tiktok":return"https://www.tiktok.com/@"+this.mention;default:throw new Error("Unknown service name to point mention to: "+this.serviceName)}},e.prototype.getAnchorText=function(){return"@"+this.mention},e.prototype.getCssClassSuffixes=function(){var t=i.prototype.getCssClassSuffixes.call(this),n=this.getServiceName();return n&&t.push(n),t},e}(Vs),aC=/[-. ]/,lC=/[-. ()]/,cC=/[,;]/,uC=/(?:(?:(?:(\+)?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-. ]?(?:\d[-. ]?){6,12}\d+))([,;]+[0-9]+#?)*/,dC=/(0([1-9]-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})/,hC=new RegExp("^".concat(uC.source,"|").concat(dC.source,"$"));function Vh(i){return aC.test(i)}function Ml(i){return cC.test(i)}function fC(i){var e=i.charAt(0)==="+"||lC.test(i);return e&&hC.test(i)}var pC=function(i){zs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="phone",n.number="",n.plusSign=!1,n.number=t.number,n.plusSign=t.plusSign,n}return e.prototype.getType=function(){return"phone"},e.prototype.getPhoneNumber=function(){return this.number},e.prototype.getNumber=function(){return this.getPhoneNumber()},e.prototype.getAnchorHref=function(){return"tel:"+(this.plusSign?"+":"")+this.number},e.prototype.getAnchorText=function(){return this.matchedText},e}(Vs);function mC(i,e){for(var t=e.tagBuilder,n=e.stripPrefix,r=e.stripTrailingSlash,s=e.decodePercentEncoding,o=e.hashtagServiceName,a=e.mentionServiceName,l=[],c=i.length,u=[],h=0;h<c;h++){var d=i.charAt(h);if(u.length===0)f(d);else for(var p=u.length-1;p>=0;p--){var g=u[p];switch(g.state){case 11:R(g,d);break;case 12:F(g,d);break;case 0:v(g,d);break;case 1:y(g,d);break;case 2:b(g,d);break;case 3:_(g,d);break;case 4:M(g,d);break;case 5:x(g,d);break;case 6:E(g,d);break;case 7:N(g,d);break;case 13:$(g,d);break;case 14:Q(g,d);break;case 8:G(g,d);break;case 9:I(g,d);break;case 10:k(g,d);break;case 15:K(g,d);break;case 16:L(g,d);break;case 17:B(g,d);break;case 18:q(g,d);break;case 19:j(g,d);break;case 20:V(g,d);break;case 21:W(g,d);break;case 22:ne(g,d);break;case 23:re(g,d);break;case 24:U(g,d);break;case 25:Y(g,d);break;case 26:Me(g,d);break;case 27:ue(g,d);break;case 28:me(g,d);break;case 29:ce(g,d);break;case 30:Be(g,d);break;case 31:Te(g,d);break;case 32:it(g,d);break;case 33:rt(g,d);break;case 34:st(g,d);break;case 35:pt(g,d);break;case 36:Ze(g,d);break;case 37:ye(g,d);break;case 38:Ue(g,d);break;case 39:Lt(g,d);break;case 40:yt(g,d);break;case 41:A(g,d);break;default:fs(g.state)}}}for(var m=u.length-1;m>=0;m--)u.forEach(function(S){return w(S)});return l;function f(S){if(S==="#")u.push(yC(h,28));else if(S==="@")u.push(bC(h,30));else if(S==="/")u.push(El(h,11));else if(S==="+")u.push(Al(h,37));else if(S==="(")u.push(Al(h,32));else{if(At.test(S)&&(u.push(Al(h,38)),u.push(_C(h,13))),YA(S)){var D=S.toLowerCase()==="m"?15:22;u.push(xC(h,D))}yl(S)&&u.push(Tl(h,0)),Ni.test(S)&&u.push(El(h,5))}}function v(S,D){D===":"?S.state=2:D==="-"?S.state=1:kh(D)||Ye(u,S)}function y(S,D){D==="-"||(D==="/"?(Ye(u,S),u.push(El(h,11))):kh(D)?S.state=0:Ye(u,S))}function b(S,D){D==="/"?S.state=3:D==="."?Ye(u,S):si(D)?(S.state=5,yl(D)&&u.push(Tl(h,0))):Ye(u,S)}function _(S,D){D==="/"?S.state=4:Bh(D)?(S.state=10,S.acceptStateReached=!0):w(S)}function M(S,D){D==="/"?S.state=10:si(D)?(S.state=5,S.acceptStateReached=!0):Ye(u,S)}function R(S,D){D==="/"?S.state=12:Ye(u,S)}function F(S,D){si(D)?S.state=5:Ye(u,S)}function x(S,D){D==="."?S.state=7:D==="-"?S.state=6:D===":"?S.state=8:wl(D)?S.state=10:bl(D)||w(S)}function E(S,D){D==="-"||(D==="."?w(S):si(D)?S.state=5:w(S))}function N(S,D){D==="."?w(S):si(D)?(S.state=5,S.acceptStateReached=!0):w(S)}function $(S,D){D==="."?S.state=14:D===":"?S.state=8:At.test(D)||(wl(D)?S.state=10:Ni.test(D)?Ye(u,S):w(S))}function Q(S,D){At.test(D)?(S.octetsEncountered++,S.octetsEncountered===4&&(S.acceptStateReached=!0),S.state=13):w(S)}function G(S,D){At.test(D)?S.state=9:w(S)}function I(S,D){At.test(D)||(wl(D)?S.state=10:w(S))}function k(S,D){Bh(D)||w(S)}function K(S,D){D.toLowerCase()==="a"?S.state=16:ne(S,D)}function L(S,D){D.toLowerCase()==="i"?S.state=17:ne(S,D)}function B(S,D){D.toLowerCase()==="l"?S.state=18:ne(S,D)}function q(S,D){D.toLowerCase()==="t"?S.state=19:ne(S,D)}function j(S,D){D.toLowerCase()==="o"?S.state=20:ne(S,D)}function V(S,D){D.toLowerCase()===":"?S.state=21:ne(S,D)}function W(S,D){Sl(D)?S.state=22:Ye(u,S)}function ne(S,D){D==="."?S.state=23:D==="@"?S.state=24:Sl(D)?S.state=22:Ye(u,S)}function re(S,D){D==="."||D==="@"?Ye(u,S):Sl(D)?S.state=22:Ye(u,S)}function U(S,D){si(D)?S.state=25:Ye(u,S)}function Y(S,D){D==="."?S.state=27:D==="-"?S.state=26:bl(D)||w(S)}function Me(S,D){D==="-"||D==="."?w(S):bl(D)?S.state=25:w(S)}function ue(S,D){D==="."||D==="-"?w(S):si(D)?(S.state=25,S.acceptStateReached=!0):w(S)}function me(S,D){Uh(D)?(S.state=29,S.acceptStateReached=!0):Ye(u,S)}function ce(S,D){Uh(D)||w(S)}function Be(S,D){zh(D)?(S.state=31,S.acceptStateReached=!0):Ye(u,S)}function Te(S,D){zh(D)||(Ni.test(D)?Ye(u,S):w(S))}function ye(S,D){At.test(D)?S.state=38:(Ye(u,S),f(D))}function it(S,D){At.test(D)?S.state=33:Ye(u,S),f(D)}function rt(S,D){At.test(D)?S.state=34:Ye(u,S)}function st(S,D){At.test(D)?S.state=35:Ye(u,S)}function pt(S,D){D===")"?S.state=36:Ye(u,S)}function Ze(S,D){At.test(D)?S.state=38:Vh(D)?S.state=39:Ye(u,S)}function Ue(S,D){S.acceptStateReached=!0,Ml(D)?S.state=40:D==="#"?S.state=41:At.test(D)||(D==="("?S.state=32:Vh(D)?S.state=39:(w(S),yl(D)&&u.push(Tl(h,0))))}function Lt(S,D){At.test(D)?S.state=38:D==="("?S.state=32:(w(S),f(D))}function yt(S,D){Ml(D)||(D==="#"?S.state=41:At.test(D)?S.state=38:w(S))}function A(S,D){Ml(D)?S.state=40:At.test(D)?Ye(u,S):w(S)}function w(S){if(Ye(u,S),!!S.acceptStateReached){var D=S.startIdx,te=i.slice(S.startIdx,h);if(te=vC(te),S.type==="url"){var le=i.charAt(S.startIdx-1);if(le==="@")return;var ge=S.matchType;if(ge==="scheme"){var oe=zm.exec(te);if(oe&&(D=D+oe.index,te=te.slice(oe.index)),!NA(te))return}else if(ge==="tld"){if(!OA(te))return}else if(ge==="ipV4"){if(!UA(te))return}else fs(ge);l.push(new HA({tagBuilder:t,matchedText:te,offset:D,urlMatchType:ge,url:te,protocolRelativeMatch:te.slice(0,2)==="//",stripPrefix:n,stripTrailingSlash:r,decodePercentEncoding:s}))}else if(S.type==="email")ZA(te)&&l.push(new JA({tagBuilder:t,matchedText:te,offset:D,email:te.replace(XA,"")}));else if(S.type==="hashtag")QA(te)&&l.push(new tC({tagBuilder:t,matchedText:te,offset:D,serviceName:o,hashtag:te.slice(1)}));else if(S.type==="mention")rC(te,a)&&l.push(new oC({tagBuilder:t,matchedText:te,offset:D,serviceName:a,mention:te.slice(1)}));else if(S.type==="phone"){if(te=te.replace(/ +$/g,""),fC(te)){var J=te.replace(/[^0-9,;#]/g,"");l.push(new pC({tagBuilder:t,matchedText:te,offset:D,number:J,plusSign:te.charAt(0)==="+"}))}}else fs(S)}}}var gC=/[\(\{\[]/,Hh=/[\)\}\]]/,Gh={")":"(","}":"{","]":"["};function vC(i){for(var e={"(":0,"{":0,"[":0},t=0;t<i.length;t++){var n=i.charAt(t);gC.test(n)?e[n]++:Hh.test(n)&&e[Gh[n]]--}for(var r=i.length-1,s;r>=0;)if(s=i.charAt(r),Hh.test(s)){var o=Gh[s];if(e[o]<0)e[o]++,r--;else break}else if(LA.test(s))r--;else break;return i.slice(0,r+1)}function Tl(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"scheme"}}function El(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"tld"}}function _C(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"ipV4",octetsEncountered:1}}function xC(i,e){return{type:"email",startIdx:i,state:e,acceptStateReached:!1}}function yC(i,e){return{type:"hashtag",startIdx:i,state:e,acceptStateReached:!1}}function bC(i,e){return{type:"mention",startIdx:i,state:e,acceptStateReached:!1}}function Al(i,e){return{type:"phone",startIdx:i,state:e,acceptStateReached:!1}}function wC(i,e){for(var t=e.onOpenTag,n=e.onCloseTag,r=e.onText,s=e.onComment,o=e.onDoctype,a=new yn,l=0,c=i.length,u=0,h=0,d=a;l<c;){var p=i.charAt(l);switch(u){case 0:g(p);break;case 1:m(p);break;case 2:v(p);break;case 3:f(p);break;case 4:y(p);break;case 5:b(p);break;case 6:_(p);break;case 7:M(p);break;case 8:R(p);break;case 9:F(p);break;case 10:x(p);break;case 11:E(p);break;case 12:N(p);break;case 13:$();break;case 14:Q(p);break;case 15:G(p);break;case 16:I(p);break;case 17:k(p);break;case 18:K(p);break;case 19:L(p);break;case 20:B(p);break;default:fs(u)}l++}h<l&&W();function g(U){U==="<"&&j()}function m(U){U==="!"?u=13:U==="/"?(u=2,d=new yn(_t(_t({},d),{isClosing:!0}))):U==="<"?j():Tr.test(U)?(u=3,d=new yn(_t(_t({},d),{isOpening:!0}))):(u=0,d=a)}function f(U){cn.test(U)?(d=new yn(_t(_t({},d),{name:ne()})),u=4):U==="<"?j():U==="/"?(d=new yn(_t(_t({},d),{name:ne()})),u=12):U===">"?(d=new yn(_t(_t({},d),{name:ne()})),V()):!Tr.test(U)&&!At.test(U)&&U!==":"&&q()}function v(U){U===">"?q():Tr.test(U)?u=3:q()}function y(U){cn.test(U)||(U==="/"?u=12:U===">"?V():U==="<"?j():U==="="||xl.test(U)||gA.test(U)?q():u=5)}function b(U){cn.test(U)?u=6:U==="/"?u=12:U==="="?u=7:U===">"?V():U==="<"?j():xl.test(U)&&q()}function _(U){cn.test(U)||(U==="/"?u=12:U==="="?u=7:U===">"?V():U==="<"?j():xl.test(U)?q():u=5)}function M(U){cn.test(U)||(U==='"'?u=8:U==="'"?u=9:/[>=`]/.test(U)?q():U==="<"?j():u=10)}function R(U){U==='"'&&(u=11)}function F(U){U==="'"&&(u=11)}function x(U){cn.test(U)?u=4:U===">"?V():U==="<"&&j()}function E(U){cn.test(U)?u=4:U==="/"?u=12:U===">"?V():U==="<"?j():(u=4,re())}function N(U){U===">"?(d=new yn(_t(_t({},d),{isClosing:!0})),V()):u=4}function $(U){i.substr(l,2)==="--"?(l+=2,d=new yn(_t(_t({},d),{type:"comment"})),u=14):i.substr(l,7).toUpperCase()==="DOCTYPE"?(l+=7,d=new yn(_t(_t({},d),{type:"doctype"})),u=20):q()}function Q(U){U==="-"?u=15:U===">"?q():u=16}function G(U){U==="-"?u=18:U===">"?q():u=16}function I(U){U==="-"&&(u=17)}function k(U){U==="-"?u=18:u=16}function K(U){U===">"?V():U==="!"?u=19:U==="-"||(u=16)}function L(U){U==="-"?u=17:U===">"?V():u=16}function B(U){U===">"?V():U==="<"&&j()}function q(){u=0,d=a}function j(){u=1,d=new yn({idx:l})}function V(){var U=i.slice(h,d.idx);U&&r(U,h),d.type==="comment"?s(d.idx):d.type==="doctype"?o(d.idx):(d.isOpening&&t(d.name,d.idx),d.isClosing&&n(d.name,d.idx)),q(),h=l+1}function W(){var U=i.slice(h,l);r(U,h),h=l+1}function ne(){var U=d.idx+(d.isClosing?2:1);return i.slice(U,l).toLowerCase()}function re(){l--}}var yn=function(){function i(e){e===void 0&&(e={}),this.idx=e.idx!==void 0?e.idx:-1,this.type=e.type||"tag",this.name=e.name||"",this.isOpening=!!e.isOpening,this.isClosing=!!e.isClosing}return i}(),SC=function(){function i(e){e===void 0&&(e={}),this.version=i.version,this.urls={},this.email=!0,this.phone=!0,this.hashtag=!1,this.mention=!1,this.newWindow=!0,this.stripPrefix={scheme:!0,www:!0},this.stripTrailingSlash=!0,this.decodePercentEncoding=!0,this.truncate={length:0,location:"end"},this.className="",this.replaceFn=null,this.context=void 0,this.sanitizeHtml=!1,this.tagBuilder=null,this.urls=MC(e.urls),this.email=nn(e.email)?e.email:this.email,this.phone=nn(e.phone)?e.phone:this.phone,this.hashtag=e.hashtag||this.hashtag,this.mention=e.mention||this.mention,this.newWindow=nn(e.newWindow)?e.newWindow:this.newWindow,this.stripPrefix=TC(e.stripPrefix),this.stripTrailingSlash=nn(e.stripTrailingSlash)?e.stripTrailingSlash:this.stripTrailingSlash,this.decodePercentEncoding=nn(e.decodePercentEncoding)?e.decodePercentEncoding:this.decodePercentEncoding,this.sanitizeHtml=e.sanitizeHtml||!1;var t=this.mention;if(t!==!1&&sC.indexOf(t)===-1)throw new Error("invalid `mention` cfg '".concat(t,"' - see docs"));var n=this.hashtag;if(n!==!1&&eC.indexOf(n)===-1)throw new Error("invalid `hashtag` cfg '".concat(n,"' - see docs"));this.truncate=EC(e.truncate),this.className=e.className||this.className,this.replaceFn=e.replaceFn||this.replaceFn,this.context=e.context||this}return i.link=function(e,t){var n=new i(t);return n.link(e)},i.parse=function(e,t){var n=new i(t);return n.parse(e)},i.prototype.parse=function(e){var t=this,n=["a","style","script"],r=0,s=[];return wC(e,{onOpenTag:function(o){n.indexOf(o)>=0&&r++},onText:function(o,a){if(r===0){var l=/(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,c=o.split(l),u=a;c.forEach(function(h,d){if(d%2===0){var p=t.parseText(h,u);s.push.apply(s,p)}u+=h.length})}},onCloseTag:function(o){n.indexOf(o)>=0&&(r=Math.max(r-1,0))},onComment:function(o){},onDoctype:function(o){}}),s=this.compactMatches(s),s=this.removeUnwantedMatches(s),s},i.prototype.compactMatches=function(e){e.sort(function(l,c){return l.getOffset()-c.getOffset()});for(var t=0;t<e.length-1;){var n=e[t],r=n.getOffset(),s=n.getMatchedText().length,o=r+s;if(t+1<e.length){if(e[t+1].getOffset()===r){var a=e[t+1].getMatchedText().length>s?t:t+1;e.splice(a,1);continue}if(e[t+1].getOffset()<o){e.splice(t+1,1);continue}}t++}return e},i.prototype.removeUnwantedMatches=function(e){return this.hashtag||Ti(e,function(t){return t.getType()==="hashtag"}),this.email||Ti(e,function(t){return t.getType()==="email"}),this.phone||Ti(e,function(t){return t.getType()==="phone"}),this.mention||Ti(e,function(t){return t.getType()==="mention"}),this.urls.schemeMatches||Ti(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="scheme"}),this.urls.tldMatches||Ti(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="tld"}),this.urls.ipV4Matches||Ti(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="ipV4"}),e},i.prototype.parseText=function(e,t){t===void 0&&(t=0),t=t||0;for(var n=mC(e,{tagBuilder:this.getTagBuilder(),stripPrefix:this.stripPrefix,stripTrailingSlash:this.stripTrailingSlash,decodePercentEncoding:this.decodePercentEncoding,hashtagServiceName:this.hashtag,mentionServiceName:this.mention||"twitter"}),r=0,s=n.length;r<s;r++)n[r].setOffset(t+n[r].getOffset());return n},i.prototype.link=function(e){if(!e)return"";this.sanitizeHtml&&(e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"));for(var t=this.parse(e),n=[],r=0,s=0,o=t.length;s<o;s++){var a=t[s];n.push(e.substring(r,a.getOffset())),n.push(this.createMatchReturnVal(a)),r=a.getOffset()+a.getMatchedText().length}return n.push(e.substring(r)),n.join("")},i.prototype.createMatchReturnVal=function(e){var t;if(this.replaceFn&&(t=this.replaceFn.call(this.context,e)),typeof t=="string")return t;if(t===!1)return e.getMatchedText();if(t instanceof Bm)return t.toAnchorString();var n=e.buildTag();return n.toAnchorString()},i.prototype.getTagBuilder=function(){var e=this.tagBuilder;return e||(e=this.tagBuilder=new TA({newWindow:this.newWindow,truncate:this.truncate,className:this.className})),e},i.version=hA,i}();function MC(i){return i==null&&(i=!0),nn(i)?{schemeMatches:i,tldMatches:i,ipV4Matches:i}:{schemeMatches:nn(i.schemeMatches)?i.schemeMatches:!0,tldMatches:nn(i.tldMatches)?i.tldMatches:!0,ipV4Matches:nn(i.ipV4Matches)?i.ipV4Matches:!0}}function TC(i){return i==null&&(i=!0),nn(i)?{scheme:i,www:i}:{scheme:nn(i.scheme)?i.scheme:!0,www:nn(i.www)?i.www:!0}}function EC(i){return typeof i=="number"?{length:i,location:"end"}:pA(i||{},{length:Number.POSITIVE_INFINITY,location:"end"})}const AC=`// Properties of THREE.ShaderChunk can be included in glsl files with \`#include <>\`
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
`;class Hm{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}dot4(e,t,n,r,s){return e[0]*t+e[1]*n+e[2]*r+e[3]*s}noise(e,t){let n,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,p=c-h,g=e-d,m=t-p;let f,v;g>m?(f=1,v=0):(f=0,v=1);const y=g-f+u,b=m-v+u,_=g-1+2*u,M=m-1+2*u,R=l&255,F=c&255,x=this.perm[R+this.perm[F]]%12,E=this.perm[R+f+this.perm[F+v]]%12,N=this.perm[R+1+this.perm[F+1]]%12;let $=.5-g*g-m*m;$<0?n=0:($*=$,n=$*$*this.dot(this.grad3[x],g,m));let Q=.5-y*y-b*b;Q<0?r=0:(Q*=Q,r=Q*Q*this.dot(this.grad3[E],y,b));let G=.5-_*_-M*M;return G<0?s=0:(G*=G,s=G*G*this.dot(this.grad3[N],_,M)),70*(n+r+s)}noise3d(e,t,n){let r,s,o,a;const l=.3333333333333333,c=(e+t+n)*l,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),p=1/6,g=(u+h+d)*p,m=u-g,f=h-g,v=d-g,y=e-m,b=t-f,_=n-v;let M,R,F,x,E,N;y>=b?b>=_?(M=1,R=0,F=0,x=1,E=1,N=0):y>=_?(M=1,R=0,F=0,x=1,E=0,N=1):(M=0,R=0,F=1,x=1,E=0,N=1):b<_?(M=0,R=0,F=1,x=0,E=1,N=1):y<_?(M=0,R=1,F=0,x=0,E=1,N=1):(M=0,R=1,F=0,x=1,E=1,N=0);const $=y-M+p,Q=b-R+p,G=_-F+p,I=y-x+2*p,k=b-E+2*p,K=_-N+2*p,L=y-1+3*p,B=b-1+3*p,q=_-1+3*p,j=u&255,V=h&255,W=d&255,ne=this.perm[j+this.perm[V+this.perm[W]]]%12,re=this.perm[j+M+this.perm[V+R+this.perm[W+F]]]%12,U=this.perm[j+x+this.perm[V+E+this.perm[W+N]]]%12,Y=this.perm[j+1+this.perm[V+1+this.perm[W+1]]]%12;let Me=.6-y*y-b*b-_*_;Me<0?r=0:(Me*=Me,r=Me*Me*this.dot3(this.grad3[ne],y,b,_));let ue=.6-$*$-Q*Q-G*G;ue<0?s=0:(ue*=ue,s=ue*ue*this.dot3(this.grad3[re],$,Q,G));let me=.6-I*I-k*k-K*K;me<0?o=0:(me*=me,o=me*me*this.dot3(this.grad3[U],I,k,K));let ce=.6-L*L-B*B-q*q;return ce<0?a=0:(ce*=ce,a=ce*ce*this.dot3(this.grad3[Y],L,B,q)),32*(r+s+o+a)}noise4d(e,t,n,r){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,d,p,g;const m=(e+t+n+r)*l,f=Math.floor(e+m),v=Math.floor(t+m),y=Math.floor(n+m),b=Math.floor(r+m),_=(f+v+y+b)*c,M=f-_,R=v-_,F=y-_,x=b-_,E=e-M,N=t-R,$=n-F,Q=r-x,G=E>N?32:0,I=E>$?16:0,k=N>$?8:0,K=E>Q?4:0,L=N>Q?2:0,B=$>Q?1:0,q=G+I+k+K+L+B,j=o[q][0]>=3?1:0,V=o[q][1]>=3?1:0,W=o[q][2]>=3?1:0,ne=o[q][3]>=3?1:0,re=o[q][0]>=2?1:0,U=o[q][1]>=2?1:0,Y=o[q][2]>=2?1:0,Me=o[q][3]>=2?1:0,ue=o[q][0]>=1?1:0,me=o[q][1]>=1?1:0,ce=o[q][2]>=1?1:0,Be=o[q][3]>=1?1:0,Te=E-j+c,ye=N-V+c,it=$-W+c,rt=Q-ne+c,st=E-re+2*c,pt=N-U+2*c,Ze=$-Y+2*c,Ue=Q-Me+2*c,Lt=E-ue+3*c,yt=N-me+3*c,A=$-ce+3*c,w=Q-Be+3*c,S=E-1+4*c,D=N-1+4*c,te=$-1+4*c,le=Q-1+4*c,ge=f&255,oe=v&255,J=y&255,ve=b&255,Se=a[ge+a[oe+a[J+a[ve]]]]%32,fe=a[ge+j+a[oe+V+a[J+W+a[ve+ne]]]]%32,be=a[ge+re+a[oe+U+a[J+Y+a[ve+Me]]]]%32,xe=a[ge+ue+a[oe+me+a[J+ce+a[ve+Be]]]]%32,Ie=a[ge+1+a[oe+1+a[J+1+a[ve+1]]]]%32;let We=.6-E*E-N*N-$*$-Q*Q;We<0?u=0:(We*=We,u=We*We*this.dot4(s[Se],E,N,$,Q));let Qe=.6-Te*Te-ye*ye-it*it-rt*rt;Qe<0?h=0:(Qe*=Qe,h=Qe*Qe*this.dot4(s[fe],Te,ye,it,rt));let O=.6-st*st-pt*pt-Ze*Ze-Ue*Ue;O<0?d=0:(O*=O,d=O*O*this.dot4(s[be],st,pt,Ze,Ue));let X=.6-Lt*Lt-yt*yt-A*A-w*w;X<0?p=0:(X*=X,p=X*X*this.dot4(s[xe],Lt,yt,A,w));let ie=.6-S*S-D*D-te*te-le*le;return ie<0?g=0:(ie*=ie,g=ie*ie*this.dot4(s[Ie],S,D,te,le)),27*(u+h+d+p+g)}}const CC=i=>{const e=mi["low-poly_airplane.glb"](.05);e.userData.velocity=new he(0,0);const t=new Hm;ut.add(o=>{e.rotation.set(e.userData.velocity.x*.3+t.noise(0,o*3e-4)*(4/180*Math.PI),Math.PI*.5+t.noise(1,o*3e-4)*(4/180*Math.PI),t.noise(2,o*3e-4)*(4/180*Math.PI))});const n=new Set;window.addEventListener("keydown",o=>{n.add(o.code)}),window.addEventListener("keyup",o=>{n.delete(o.code)}),window.addEventListener("blur",()=>{n.clear()});let r;i.addEventListener("mousedown",o=>{r=[o.clientX,o.clientY]}),i.addEventListener("touchstart",o=>{r=[o.touches[0].clientX,o.touches[0].clientY]}),window.addEventListener("mouseup",()=>{r=void 0}),window.addEventListener("touchend",()=>{r=void 0}),window.addEventListener("touchcancel",()=>{r=void 0});let s=0;return Kn.add(()=>{if(se().stageTransitingTo!==null)return;(n.has("KeyD")&&!n.has("KeyA")||r&&r[0]>window.innerWidth*.6)&&(e.userData.velocity.x=Math.min(1,Math.max(-.2,e.userData.velocity.x)+.05),s++),(n.has("KeyA")&&!n.has("KeyD")||r&&r[0]<=window.innerWidth*.4)&&(e.userData.velocity.x=Math.max(-1,Math.min(.2,e.userData.velocity.x)-.05),s++),(n.has("KeyW")&&!n.has("KeyS")||r&&r[1]<=window.innerHeight*.25)&&(e.userData.velocity.y=Math.min(1,Math.max(-.2,e.userData.velocity.y)+.05),s++),(n.has("KeyS")&&!n.has("KeyW")||r&&r[1]>window.innerHeight*.75)&&(e.userData.velocity.y=Math.max(-1,Math.min(.2,e.userData.velocity.y)-.05),s++),s>15&&se().availableTutorials.wasd&&se().completeTutorial("wasd"),(n.size===0&&!r||n.has("KeyA")&&n.has("KeyD")||n.has("KeyW")&&n.has("KeyS"))&&e.userData.velocity.multiplyScalar(.8),e.userData.velocity.length()>1&&e.userData.velocity.normalize(),e.position.setZ(Math.min(Mr,Math.max(Sn,e.position.z+e.userData.velocity.x*.015))),e.position.setX(Math.min(Q2,Math.max(eA,e.position.x+e.userData.velocity.y*.01))),n.has("Space")&&iA()?e.position.y=Math.min(.5,e.position.y+.005):e.position.y=Math.max(0,e.position.y-.005);const o=se().getUpgrade("Autopilot");o>0&&n.size===0&&!r&&e.userData.autopilotTarget&&Math.abs(e.userData.autopilotTarget.position.z-e.position.z)>.02&&(e.userData.velocity.x=Math.min(1,Math.max(-1,e.userData.velocity.x+Math.sign(e.userData.autopilotTarget.position.z-e.position.z)*.1*o)))}),e};function DC(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}const RC=new Proxy({},{get:(i,e,t)=>Reflect.get(i,e,t)??1});class Ji extends ke{mesh;#t;#i;#n;#e=new Set;#r=new Set;#s=new Set;constructor(e,t){super(),this.name=`${e}${RC[e]++}`,this.#n=t;let n;t.traverse(r=>{r instanceof nt&&(n=r)}),this.#t=n===void 0,this.mesh=n??new nt,this.#i=this.#t?null:this.mesh.geometry.attributes.position.clone()}withVertexAnimation(e,t={}){return this.#t?this:(ut.add(()=>{!this.parent||this.children.length===0||(e(this.mesh.geometry.attributes.position,this.#i),this.mesh.geometry.attributes.position.needsUpdate=!0,t.computeVertexNormals!==!1&&this.mesh.geometry.computeVertexNormals())}),this)}onClone(e){return this.#r.add(e),this}onAllocate(e){return this.#s.add(e),this}allocate(){const e=(()=>{for(const n of this.#e)return this.#e.delete(n),n;const t=Em(this.#n);return t.free=()=>{t.parent&&t.removeFromParent(),this.#e.add(t)},t.getOriginalScale=()=>this.#n.scale.clone(),f2(this.name,this.children.length+this.#e.size+1),this.#r.forEach(n=>n(t)),t})();return this.#s.forEach(t=>{Object.assign(e.userData,t(e))}),this.add(e),e}}const ha=(i,e)=>{i.traverse(t=>{t instanceof nt&&(t.material.onBeforeCompile=n=>{Object.assign(n.uniforms,e.uniforms??{}),e.vertexShader?.trim()&&(n.vertexShader=n.vertexShader.replace(/void\s*main\s*\(\s*\)/,"void super()")+e.vertexShader),e.fragmentShader?.trim()&&(n.fragmentShader=n.fragmentShader.replace(/void\s*main\s*\(\s*\)/,"void super()")+e.fragmentShader)})})},Wh=i=>{const e=new Ji("bird",rn(mi["low_polygon_art__white_eagle_bird.glb"](.1),{rotateX:-Math.PI/2,rotateZ:-Math.PI/2,scale:{multiplyScalar:.3}}));if(i){let t=0;const n=new Map;e.withVertexAnimation((r,s)=>{if(t++%2!==0)return;const o=t%32;r.copy(n.emplace(o,{insert:()=>{for(let a=0;a<r.count;a++){const l=DC(Math.abs(r.getX(a)),3.5,17)*10*Math.sin(o/32*Math.PI*2)*.8;r.setY(a,s.getY(a)+l*.7),r.setZ(a,s.getZ(a)+l)}return r.clone()}}))},{computeVertexNormals:!1})}return e},LC=`#include <snoise>

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
`,PC=`out vec2 modelCoordPos;
out vec3 worldCoordPos;
uniform mat4 matrixWorld;

void main() {
    worldCoordPos = (matrixWorld * vec4(position, 1.0)).xyz;  // get world coodinates from the model coordinates

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    modelCoordPos = position.xy;
}
`,IC=()=>{const i={time:{value:0},matrixWorld:{value:new Pe},cameraPos:{value:new P},highQuality:{value:!1}},e=rn(new nt(new Is,new ct({transparent:!0,uniforms:i,vertexShader:PC,fragmentShader:LC})),{rotateX:-Math.PI/2,scale:{setScalar:4},position:{setY:-.13}});return ut.add((t,n,r)=>{i.highQuality.value=bt.getState().quality==="high",i.time.value=t,i.matrixWorld.value.copy(e.matrixWorld),i.cameraPos.value.copy(r.position)}),e};function FC(i,e){if(e===_b)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Bo||e===gc){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Bo)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const NC=`in vec2 vUv;

void main() {
    float x = vUv.x * (1.5 - vUv.y * 1.3);
    gl_FragColor = vec4(1.0, 1.0, 1.0, smoothstep(0.01, 0.3, vUv.y) * (1.0 - step(0.3, abs(x))) * min(1.0, sin(abs(x) * 30.0) + vUv.y * 5.0) * 0.2);
}
`,OC=`out vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}
`,kC=`uniform sampler2D texture1;
uniform sampler2D texture2;
in vec2 vUv;

void main() {
    gl_FragColor = texture2D(texture1, vUv);
    vec4 color2 = texture2D(texture2, vUv);
    gl_FragColor.rgb = gl_FragColor.rgb + color2.rgb * color2.a;
}
`,BC=`out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Gm=1,Wm=2,Mt=(i,e={})=>(i.traverse(t=>{t.layers.set(Gm),e.noDiffusion&&t.layers.set(Wm)}),i),UC=(i,e,t,n)=>{const r=new Lm(i);r.renderToScreen=!1,r.addPass(n),r.addPass(new Hi(new he(256,256),3,0,0));const s=new kr(new ct({uniforms:{texture1:{value:null},texture2:{value:r.renderTarget2.texture}},vertexShader:BC,fragmentShader:kC,defines:{}}),"texture1");s.needsSwap=!0;const o=new Mn({color:"black"});return Im.add(()=>{const a=new Map;e.traverse(l=>{l instanceof nt&&!(l.layers.isEnabled(Gm)||l.layers.isEnabled(Wm))&&(a.set(l.uuid,l.material),l.material=o)}),t.layers.enableAll(),r.render(),e.traverse(l=>{a.has(l.uuid)&&(l.material=a.get(l.uuid),a.delete(l.uuid))})}),window.addEventListener("resize",()=>{r.setSize(window.innerWidth,window.innerHeight)}),s},zC=.005,$h=2,VC=i=>{const t=new nt(FC(new Vt().setFromPoints(Array(120).fill(0).flatMap(()=>[new P(i.position.x,0,i.position.z+.1),new P(i.position.x,0,i.position.z-.1)])),gc),new ct({vertexShader:OC,fragmentShader:NC,transparent:!0}));return t.geometry.setAttribute("uv",new Dt(new Float32Array(Array(120).fill(0).flatMap((n,r)=>[-1,r/(120-1),1,r/(120-1)])),2)),Kn.add(n=>{if(n%$h==0)return;const r=t.geometry.attributes.position;for(let s=r.count-1;s>=2;s--)r.setX(s,r.getX(s-2)-zC*$h),r.setY(s,r.getY(s-2)),r.setZ(s,r.getZ(s-2));r.setX(0,i.position.x),r.setY(0,i.position.y),r.setZ(0,i.position.z+.1),r.setX(1,i.position.x),r.setY(1,i.position.y),r.setZ(1,i.position.z-.1),t.geometry.attributes.position.needsUpdate=!0,t.geometry.computeVertexNormals()}),Mt(t),gi((n,r)=>{if(n.stage===r.stage)return;const s=t.geometry.attributes.position;for(let o=0;o<s.count;o++)s.setX(o,i.position.x),s.setZ(o,i.position.z)}),t},HC=`#include <snoise>

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
        vec3 rotatedPos1 = pos + vec3(time * 0.3, time * 0.3, time * 0.1);
        vec3 rotatedPos2 = pos + vec3(time * 0.3, time * 0.3, -time * 0.1);
        float cloud =
            smoothstep(0.0, 1.0, snoise(rotatedPos1 * 2.0)) *
            (0.9 +
             snoise(rotatedPos2 * 8.0) +
             snoise(rotatedPos2 * 16.0) +
             snoise(rotatedPos2 * 32.0));
        color = mix(color, vec3(0.6), clamp(cloud * 0.3, 0.0, 1.0) * 0.3);
    }

    gl_FragColor = vec4(color, 1.0);
}
`,GC=`out vec3 pos;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    pos = position;
}
`,WC=(i={seaColor:new P(73,300,800).divideScalar(255).multiplyScalar(.2),continentsColor:new P(74,53,24).divideScalar(255).multiplyScalar(.1),hasCloud:!0,coastline:!0})=>{const e={time:{value:0},seaColor:{value:i.seaColor},continentsColor:{value:i.continentsColor},hasCloud:{value:i.hasCloud},coastline:{value:i.coastline}},t=new nt(new oa(.5,6),new ct({uniforms:e,vertexShader:GC,fragmentShader:HC}));return ut.add((n,r)=>{e.time.value=n*1e-4,t.rotateZ(r*1e-4)}),t},$C=`#include <snoise>

uniform sampler2D tDiffuse;
uniform float aspect;
uniform float time;
in vec2 vUv;

void main() {
    gl_FragColor = texture2D(tDiffuse, vUv);
    vec2 st = vUv * vec2(aspect, 1.0);
    if (snoise(st * 300.0 + vec2(time)) < -0.5) {
        gl_FragColor.rg += vec2(0.3, 0.15);
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
}
`,jC=`out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,qC=()=>{const i=new kr({uniforms:{tDiffuse:{value:null},aspect:{value:window.innerWidth/window.innerHeight},time:{value:0}},vertexShader:jC,fragmentShader:$C});return ut.add((e,t,n)=>{i.uniforms.aspect.value=n.aspect,i.uniforms.time.value=e}),i.enabled=se().getWeather()==="Jamming",gi((e,t)=>{e.weatherEffectWillBeEnabledIn!==t.weatherEffectWillBeEnabledIn&&(i.enabled=se().getWeather()==="Jamming")}),i},XC=`uniform float time;

void main() {
    super();
    // gl_FragColor.rgb *= 1.0 + (sin(time * 0.006) + 1.0) / 2.0 * 10.0;
}
`,jh=()=>{const i=mi["planet_megatropolis.glb"](2);return ha(i,{fragmentShader:XC}),new Ji("mothership",Mt(i)).onClone(e=>{ut.add(t=>{e.rotation.set(0,t*1e-4,0)})})},KC=()=>{let i=Date.now();const e=new Ji("newspaper",rn(mi["y2k_newspaper_article.glb"](.1),{rotateY:Math.PI/2,rotateX:Math.PI*.3,scale:{multiplyScalar:2},position:{set:[.8,.5,.5]}})).withVertexAnimation((n,r)=>{for(let s=0;s<n.count;s++)n.setY(s,r.getY(s)+Math.sin(n.getX(s)*Math.PI*2+Date.now()*.006)*.03+Math.sin(n.getZ(s)*Math.PI*2+Date.now()*.006)*.01)});e.mesh.material.depthTest=!1,e.mesh.material.transparent=!0,e.mesh.renderOrder=3;for(let n=0;n<30;n++)e.allocate();const t=new Hm;return ut.add(()=>{if(e.parent===null)return;const n=.1;for(const[r,s]of e.children.entries()){const o=(Date.now()-i)*.006*(1+t.noise(r,3)*.3);s.rotation.y=t.noise(r,5),s.rotation.z=1*o,s.position.set(t.noise(r,4)*.5+.2,.3+(Math.cos(o)-o*.5-1)*n+(t.noise(r,1)+1)*.3,.5+(Math.sin(o)-o*.8)*n+(t.noise(r,2)+1)*.3)}}),e.visible=!1,gi((n,r)=>{if(n.availableNews===r.availableNews)return;const s=[...new Set(Wn(n.availableNews)).difference(new Set(Wn(r.availableNews)))][0];!s||(i=Date.now(),e.visible=!0,bt.getState().showNews(rA[s]),setTimeout(()=>{e.visible=!1},1e4))}),e},YC=`#include <snoise>

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
`,ZC=`out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,JC=i=>{const e=new kr({uniforms:{blur:{value:i},tDiffuse:{value:null},aspect:{value:window.innerWidth/window.innerHeight},time:{value:0},mouse0:{value:new he(.5,.5)},mouse1:{value:new he(.5,.5)},mouse2:{value:new he(.5,.5)},mouse3:{value:new he(.5,.5)},mouse4:{value:new he(.5,.5)},mouse5:{value:new he(.5,.5)},mouse6:{value:new he(.5,.5)},mouse7:{value:new he(.5,.5)},mouse8:{value:new he(.5,.5)},mouse9:{value:new he(.5,.5)}},vertexShader:ZC,fragmentShader:YC}),t=()=>{e.uniforms.mouse9.value.copy(e.uniforms.mouse8.value),e.uniforms.mouse8.value.copy(e.uniforms.mouse7.value),e.uniforms.mouse7.value.copy(e.uniforms.mouse6.value),e.uniforms.mouse6.value.copy(e.uniforms.mouse5.value),e.uniforms.mouse5.value.copy(e.uniforms.mouse4.value),e.uniforms.mouse4.value.copy(e.uniforms.mouse3.value),e.uniforms.mouse3.value.copy(e.uniforms.mouse2.value),e.uniforms.mouse2.value.copy(e.uniforms.mouse1.value),e.uniforms.mouse1.value.copy(e.uniforms.mouse0.value),e.uniforms.mouse0.value.set(-1,-1)};return window.addEventListener("mousemove",n=>{e.uniforms.mouse0.value.set(n.pageX/window.innerWidth,1-n.pageY/window.innerHeight),e.uniforms.mouse0.value.distanceTo(e.uniforms.mouse1.value)>.1&&t()}),Kn.add(n=>{n%6===0&&t()}),ut.add((n,r,s)=>{e.uniforms.aspect.value=s.aspect,e.uniforms.time.value=n}),e.enabled=se().getWeather()==="Rain",gi((n,r)=>{n.weatherEffectWillBeEnabledIn!==r.weatherEffectWillBeEnabledIn&&(e.enabled=se().getWeather()==="Rain")}),e},QC=`uniform sampler2D tDiffuse;
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
`,e3=`out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,t3=()=>{let i=!1;const e=new kr({uniforms:{tDiffuse:{value:null},time:{value:0}},vertexShader:e3,fragmentShader:QC});return{pass:e,play:t=>{if(i)return;i=!0;let n=0;const r=(s,o)=>{n<1?n=Math.min(1,n+o*.001):n===1?(n+=o*.001,t(),se().completeStageTransition()):n<2?n=Math.min(2,n+o*.001):(ut.delete(r),i=!1),e.uniforms.time.value=n};ut.add(r)}}},n3=`uniform float time;
in float worldPosY;

void main() {
    super();
    if (worldPosY > 0.0) {
        gl_FragColor.rgb = gl_FragColor.rgb * (1.0 + (sin(time * 0.01 + worldPosY * 300.0) + 1.0) / 2.0 * 2.0);
    }
}
`,i3=`out float worldPosY;
uniform float distortion;  // [0, 1]

void main() {
    super();
    vec4 worldPos = modelMatrix * vec4(position, 1.);
    worldPosY = worldPos.y;
    gl_Position.x += sin(worldPos.y * 600.0) * distortion * 0.1;
}
`,_r=()=>{const i={time:{value:0},distortion:{value:0}};ut.add(t=>{i.time.value=t});const e=Mt(rn(mi["ufo.glb"](.2),{rotateX:-Math.PI/2,position:{set:[.5,0,0]}}));return ha(e,{uniforms:i,vertexShader:i3,fragmentShader:n3}),new Ji("ufo",e).onClone(t=>{ut.add(n=>{t.rotation.set(-Math.PI/2+Math.sin(n*.01)*.05,Math.cos(n*.01)*.05,0)})})};De.snoise=AC;const r3={createModel:()=>{const i=new ke,e=mi["sky_pano_-_grand_canyon_yuma_point.glb"](4);return ut.add(t=>{e.rotation.y=t*1e-4}),i.add(rn(e,{rotateX:-Math.PI/2,position:{setY:-.5}}),Mt(new Ac(16777215,.025)),rn(Mt(new la(16117434,1.6)),{position:{set:[.3,1,-1]}}),Uc("fog")?IC():new ke),i},visible:()=>se().availableNews.aliensComing??!1,createEnemyPools:()=>{const i=Wh(!0).onAllocate(r=>({name:"Bird",time:0,hp:15*(1+Math.random())*se().getExplorationLv()*500**se().transcendence,update:()=>{r.position.x-=.01},onKilled:()=>{e.allocate().position.copy(r.position)},radius:.03,money:1*se().getExplorationLv()*500**se().transcendence,items:{Food:Math.floor(1*Ts(se())*se().getExplorationLv()*500**se().transcendence)}})),e=Wh(!1).onAllocate(()=>({time:0})),t=_r().onAllocate(r=>({name:"Weather Effect UFO",time:0,hp:1500*se().getExplorationLv()*se().upgrades.Laser,update:()=>{},onKilled:()=>{n.allocate().position.copy(r.position),se().stopWeatherEffect(),se().completeTutorial("weatherEffect")},radius:.03,money:400*se().getExplorationLv()*se().upgrades.Laser,items:{Scrap:Math.floor(1*Ts(se())*se().getExplorationLv()*500**se().transcendence)}})),n=_r().onAllocate(()=>({time:0}));return Object.assign(new ke().add(i,e,t,n),{alive:()=>[...i.children,...t.children],dead:()=>[...e.children,...n.children],spawn:r=>{r%5===0&&i.allocate().position.set(2,0,r*.06%1*(Mr-Sn)+Sn),se().getWeather()&&t.children.length===0&&t.allocate().position.set(1,0,Math.random()*(Mr-Sn)+Sn)}})}},s3=`#include <snoise>

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
`,o3=`void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,a3={createModel:()=>{const i={u_resolution:{value:new he(window.innerWidth,window.innerHeight)},time:{value:0}};return ut.add(e=>{i.time.value=e}),window.addEventListener("resize",()=>{i.u_resolution.value.set(window.innerWidth,window.innerHeight)}),new ke().add(new nt(new Xi(6,6,6),new ct({uniforms:i,side:Ut,vertexShader:o3,fragmentShader:s3})),Mt(rn(WC(),{position:{set:[.5,-2,0]},scale:{multiplyScalar:2}})),Mt(new Ac(11184895,.2)),rn(Mt(new la(16117434,.4)),{position:{set:[.3,1,-1]}}))},visible:()=>se().availableNews.aliensComing??!1,createEnemyPools:()=>{const i=_r().onAllocate(r=>({name:"UFO",time:0,hp:1e3*(1+Math.random())*se().getExplorationLv()*500**se().transcendence,update:()=>{r.userData.time%80<=3?r.scale.copy(r.getOriginalScale().multiply(new P(1,1-r.userData.time%80/3,1))):r.userData.time%80===4?(r.position.x-=.35+Math.random()*.2,r.position.z=Math.max(Sn,Math.min(Mr,r.position.z+(Math.random()-.5)*.2))):r.userData.time%80<=7?r.scale.copy(r.getOriginalScale().multiply(new P(1,(r.userData.time%80-4)/3,1))):r.position.x-=.005},onKilled:()=>{e.allocate().position.copy(r.position)},radius:.03,money:500*se().getExplorationLv()*500**se().transcendence,items:{Scrap:Math.floor(1*Ts(se())*se().getExplorationLv()*500**se().transcendence)}})),e=_r().onAllocate(()=>({time:0})),t=_r().onAllocate(r=>({name:"Weather Effect UFO",time:0,hp:1500*se().getExplorationLv()*se().upgrades.Laser,update:()=>{},onKilled:()=>{n.allocate().position.copy(r.position),se().stopWeatherEffect(),se().completeTutorial("weatherEffect")},radius:.03,money:400*se().getExplorationLv()*se().upgrades.Laser,items:{Scrap:Math.floor(1*Ts(se())*se().getExplorationLv()*500**se().transcendence)}})),n=_r().onAllocate(()=>({time:0}));return Object.assign(new ke().add(i,e,t,n),{alive:()=>[...i.children,...t.children],dead:()=>[...e.children,...n.children],spawn:r=>{r%31===0&&(se().availableNews.aliensComing??!1)&&i.allocate().position.set(2,0,r*.06%1*(Mr-Sn)+Sn),se().getWeather()&&t.children.length===0&&t.allocate().position.set(1,0,Math.random()*(Mr-Sn)+Sn)}})}},l3=`#include <snoise>

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
`,c3=`void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,u3={createModel:()=>{const i={u_resolution:{value:new he(window.innerWidth,window.innerHeight)},time:{value:0}};return ut.add(e=>{i.time.value=e}),window.addEventListener("resize",()=>{i.u_resolution.value.set(window.innerWidth,window.innerHeight)}),Mt(new ke().add(new nt(new Xi(8,8,8),new ct({uniforms:i,side:Ut,vertexShader:c3,fragmentShader:l3})),Mt(new Ac(11184895,.2)),rn(Mt(new la(16117434,.4)),{position:{set:[.3,1,-1]}})))},visible:()=>(se().availableNews.aliensComing??!1)&&se().upgrades["ATK\xD72"]>0,createEnemyPools:()=>{const i=jh().onAllocate(t=>({name:"Planet",time:0,hp:12e5*se().getExplorationLv()*500**se().transcendence,update:()=>{},onKilled:()=>{e.allocate().position.copy(t.position),se().defeatedMothership()},radius:1,money:1e4*se().getExplorationLv()*500**se().transcendence,items:{}})),e=jh().onAllocate(()=>({time:0}));return Object.assign(new ke().add(i,e),{alive:()=>[...i.children],dead:()=>[...e.children],spawn:t=>{i.children.length===0&&!se().canTranscend&&i.allocate().position.set(4,0,0)}})}},Ur={Earth:r3,Universe:a3,Mothership:u3},d3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAC7klEQVRYw+2WS2skVRiGn1PdVHtpkmgcRHEEV4r7kFqoy1HRheDGjb/AteBe8CeIILMQRAcEEReKjpdhRmJ6ZmFQEILjJckqMVNdXVXd6VSdc1431VoZTLrLSYKLvMuv4HzPec93KThEkgJOQeaQxPPAeSADNowx/qQA2ofEHwBeBR4HPpB0Ddg2xtjTcAVJD0p6W//oI0kvSXroVJ5GUlvSczqosaSL1toLm5ub59bW1tonUgM1iPPAu8Cz9bi1dntnZ+f9OI4/3dvbW/fe34qiyJ4EwD3AK8DFetw5RxzHxHH8c57nHzvnLgPrkvqAjaLIHxdAADwJfAE8PIl778nznDiOSdOUoihueO8/kXQV+AVoBGKm1MJ9wJvAa7UYZVmSpilJkpDnOWVZ4r3/BvgcWAF+r0CKaSDTAELgAvAecH8doigKsiyj3+8zHA4nEDlwpXJtBfgVyI6CmNZSFvgJ+OoAtTGEYUi322VhYYFut0un06HVanWBF4HXgZeBx4C7jkpwJEA1Af8Evv6Xb4RhyNzcHIuLi8zPz08gMMY8CrwAPAHcvbq6GjSdhHUVwBrwHfDUAfogIAxDgiDAGINzDuccRVEAPAIsTLvkLFPNA1vA5SOcQtLt4SGQTOuIqQDVMwyA68BvtxUp1lpGoxFpmv7dEZVuADcrkDtyAGAM/AFcq8+D/f19siyrzwQkIekH4FLVBfY4AKiKcQW4NUmeJAm7u7skScJ4PMZ7j6Rt4C3gW2AwbQ7MtFCMMV7SEPhR0nVr7fPD4ZDBYECe5zjnJjVQAG8An0VRNJrl7CYOFMCWpCtlWW6NRqP6rUvgHeBp4NKsyWd2oOZCX9JV59y9zrlnJJ2TFANfAh8CG003Y9OdPgbWgyDIW63W98aYENitZv92003YGMAY4733WRiGNzudzka73aYsy/2lpaWC05T3Puj3+wFnaqBerxf0er2g0f/AcSavtbxfXl72/7UL7qh0AOrJz3Sm/4X+AkuezARcvU++AAAAAElFTkSuQmCC",h3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADPUlEQVRYw+2WT2gcVRzHP+/tdrY1W1M3Kmq3AaVUKR68FHNQT6KIKaV4EcFrCXgWvAuePZZKEcE/1YMaWypataWVaNPSWFui0fzbzaRxs8lsdnf238y89zxkFobqdjPtpvSQ7/H7G/h95v3+vAcdZBsjuQsSHRL3A3uAKpDLCqE3CyDZwX8QeBN4EvjUNuYCUMgKEfQa4D/HHP5tBegDDgKfAe8Dw7Yxj/a6NKJD/ZPAi8C3EbsFfNLw1Ocnr9yYuDbnlD5845lgUwBCiD3AB8DLUd9tBoWzk8sfX511vllZa0z5Sq+OjgwFmwFwH/A6cDzqNzzF+IzDxKwzaRfdL1u+OgNMaW1KQDA6MqR7BSCB/cB3wGNt3ws00wWXyzMOM0sVqjXvkq/011qb88DfQCwQcaugbcwDwLvAW21PaUO57jO5WOF6fo38sku94eMr/VPYM2PAXAjidQPpBmABLwEfAZkohON6TC1VuTpfYnGl1oZwgXPhqY0BM0D1VhDdRioArgE/RM2EFGTSFnsfSfP04C4GH07TvzNFalsiDQwDbwOvAY8D22Ptgf/ZCUXgx5tjCSnI9Fns330/B/YOsG93P/3pFKltCaQUg8CrwFPAjkNHf5VxN2FUHvAb8DPwXDRgJSWZtIWVlCSkoOkpWr7Cr3sAWWBXt5/cyFbTwAJwptMHCSlQ2txs14C1bhPRFSAsQxkYB2ajMaUNbjMgv1rnz8UK+eL6RIS6BEyHINxJCQCawDxwAXiivQ+cmkd+ZT353D9VqjUPZQxamwngRDgFQS8ACJtxDBj2Aj1QrLa4ni/z140KS06desNvJy8A7wFngXK3PbAhgKwQ2jamBvyutBl3m8Erc8s1/rDL2EWXlq/Q6z3gAe8Ap0dHhuq3dR13mYYFpc25csNfsFfrrFaaBIFGa+MDR4HngRMbTR6rBOEplJQ25xue6mt66gWlzUPKGAf4Pnw35OLejHF6oN2MU1ZSututxC8JKSxgJdz9hbg3YWyArBA6p3Q102dND+xM5XakktQafuuLIwc87qZySstT8yXJlmLo8LGL8vCxizLWe6CXySMjr7868qy+3Sm4E2mAaPItbeme0L/HoavvkpVO3AAAAABJRU5ErkJggg==";var tc={exports:{}},Gi={},Wc={exports:{}},f3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",p3=f3,m3=p3;function $m(){}function jm(){}jm.resetWarningCache=$m;var g3=function(){function i(n,r,s,o,a,l){if(l!==m3){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}i.isRequired=i;function e(){return i}var t={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:e,element:i,elementType:i,instanceOf:e,node:i,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:jm,resetWarningCache:$m};return t.PropTypes=t,t};Wc.exports=g3();var nc={exports:{}},vn={},Yo={exports:{}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var t="none",n="contents",r=/input|select|textarea|button|object|iframe/;function s(h,d){return d.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function o(h){var d=h.offsetWidth<=0&&h.offsetHeight<=0;if(d&&!h.innerHTML)return!0;try{var p=window.getComputedStyle(h),g=p.getPropertyValue("display");return d?g!==n&&s(h,p):g===t}catch{return console.warn("Failed to inspect element style"),!1}}function a(h){for(var d=h,p=h.getRootNode&&h.getRootNode();d&&d!==document.body;){if(p&&d===p&&(d=p.host.parentNode),o(d))return!1;d=d.parentNode}return!0}function l(h,d){var p=h.nodeName.toLowerCase(),g=r.test(p)&&!h.disabled||p==="a"&&h.href||d;return g&&a(h)}function c(h){var d=h.getAttribute("tabindex");d===null&&(d=void 0);var p=isNaN(d);return(p||d>=0)&&l(h,!p)}function u(h){var d=[].slice.call(h.querySelectorAll("*"),0).reduce(function(p,g){return p.concat(g.shadowRoot?u(g.shadowRoot):[g])},[]);return d.filter(c)}i.exports=e.default})(Yo,Yo.exports);Object.defineProperty(vn,"__esModule",{value:!0});vn.resetState=y3;vn.log=b3;vn.handleBlur=As;vn.handleFocus=Cs;vn.markForFocusLater=w3;vn.returnFocus=S3;vn.popWithoutFocus=M3;vn.setupScopedFocus=T3;vn.teardownScopedFocus=E3;var v3=Yo.exports,_3=x3(v3);function x3(i){return i&&i.__esModule?i:{default:i}}var zr=[],xr=null,ic=!1;function y3(){zr=[]}function b3(){}function As(){ic=!0}function Cs(){if(ic){if(ic=!1,!xr)return;setTimeout(function(){if(!xr.contains(document.activeElement)){var i=(0,_3.default)(xr)[0]||xr;i.focus()}},0)}}function w3(){zr.push(document.activeElement)}function S3(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{zr.length!==0&&(e=zr.pop(),e.focus({preventScroll:i}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function M3(){zr.length>0&&zr.pop()}function T3(i){xr=i,window.addEventListener?(window.addEventListener("blur",As,!1),document.addEventListener("focus",Cs,!0)):(window.attachEvent("onBlur",As),document.attachEvent("onFocus",Cs))}function E3(){xr=null,window.addEventListener?(window.removeEventListener("blur",As),document.removeEventListener("focus",Cs)):(window.detachEvent("onBlur",As),document.detachEvent("onFocus",Cs))}var rc={exports:{}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var t=Yo.exports,n=r(t);function r(a){return a&&a.__esModule?a:{default:a}}function s(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?s(a.activeElement.shadowRoot):a.activeElement}function o(a,l){var c=(0,n.default)(a);if(!c.length){l.preventDefault();return}var u=void 0,h=l.shiftKey,d=c[0],p=c[c.length-1],g=s();if(a===g){if(!h)return;u=p}if(p===g&&!h&&(u=d),d===g&&h&&(u=p),u){l.preventDefault(),u.focus();return}var m=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),f=m!=null&&m[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(!!f){var v=c.indexOf(g);if(v>-1&&(v+=h?-1:1),u=c[v],typeof u>"u"){l.preventDefault(),u=h?p:d,u.focus();return}l.preventDefault(),u.focus()}}i.exports=e.default})(rc,rc.exports);var _n={},A3=function(){},C3=A3,pn={},qm={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(i){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),t={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};i.exports?i.exports=t:window.ExecutionEnvironment=t})()})(qm);Object.defineProperty(pn,"__esModule",{value:!0});pn.canUseDOM=pn.SafeNodeList=pn.SafeHTMLCollection=void 0;var D3=qm.exports,R3=L3(D3);function L3(i){return i&&i.__esModule?i:{default:i}}var fa=R3.default,P3=fa.canUseDOM?window.HTMLElement:{};pn.SafeHTMLCollection=fa.canUseDOM?window.HTMLCollection:{};pn.SafeNodeList=fa.canUseDOM?window.NodeList:{};pn.canUseDOM=fa.canUseDOM;pn.default=P3;Object.defineProperty(_n,"__esModule",{value:!0});_n.resetState=k3;_n.log=B3;_n.assertNodeList=Xm;_n.setElement=U3;_n.validateElement=$c;_n.hide=z3;_n.show=V3;_n.documentNotReadyOrSSRTesting=H3;var I3=C3,F3=O3(I3),N3=pn;function O3(i){return i&&i.__esModule?i:{default:i}}var Qt=null;function k3(){Qt&&(Qt.removeAttribute?Qt.removeAttribute("aria-hidden"):Qt.length!=null?Qt.forEach(function(i){return i.removeAttribute("aria-hidden")}):document.querySelectorAll(Qt).forEach(function(i){return i.removeAttribute("aria-hidden")})),Qt=null}function B3(){}function Xm(i,e){if(!i||!i.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function U3(i){var e=i;if(typeof e=="string"&&N3.canUseDOM){var t=document.querySelectorAll(e);Xm(t,e),e=t}return Qt=e||Qt,Qt}function $c(i){var e=i||Qt;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,F3.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function z3(i){var e=!0,t=!1,n=void 0;try{for(var r=$c(i)[Symbol.iterator](),s;!(e=(s=r.next()).done);e=!0){var o=s.value;o.setAttribute("aria-hidden","true")}}catch(a){t=!0,n=a}finally{try{!e&&r.return&&r.return()}finally{if(t)throw n}}}function V3(i){var e=!0,t=!1,n=void 0;try{for(var r=$c(i)[Symbol.iterator](),s;!(e=(s=r.next()).done);e=!0){var o=s.value;o.removeAttribute("aria-hidden")}}catch(a){t=!0,n=a}finally{try{!e&&r.return&&r.return()}finally{if(t)throw n}}}function H3(){Qt=null}var Xr={};Object.defineProperty(Xr,"__esModule",{value:!0});Xr.resetState=G3;Xr.log=W3;var ps={},ms={};function qh(i,e){i.classList.remove(e)}function G3(){var i=document.getElementsByTagName("html")[0];for(var e in ps)qh(i,ps[e]);var t=document.body;for(var n in ms)qh(t,ms[n]);ps={},ms={}}function W3(){}var $3=function(e,t){return e[t]||(e[t]=0),e[t]+=1,t},j3=function(e,t){return e[t]&&(e[t]-=1),t},q3=function(e,t,n){n.forEach(function(r){$3(t,r),e.add(r)})},X3=function(e,t,n){n.forEach(function(r){j3(t,r),t[r]===0&&e.remove(r)})};Xr.add=function(e,t){return q3(e.classList,e.nodeName.toLowerCase()=="html"?ps:ms,t.split(" "))};Xr.remove=function(e,t){return X3(e.classList,e.nodeName.toLowerCase()=="html"?ps:ms,t.split(" "))};var Kr={};Object.defineProperty(Kr,"__esModule",{value:!0});Kr.log=Y3;Kr.resetState=Z3;function K3(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}var Km=function i(){var e=this;K3(this,i),this.register=function(t){e.openInstances.indexOf(t)===-1&&(e.openInstances.push(t),e.emit("register"))},this.deregister=function(t){var n=e.openInstances.indexOf(t);n!==-1&&(e.openInstances.splice(n,1),e.emit("deregister"))},this.subscribe=function(t){e.subscribers.push(t)},this.emit=function(t){e.subscribers.forEach(function(n){return n(t,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Zo=new Km;function Y3(){console.log("portalOpenInstances ----------"),console.log(Zo.openInstances.length),Zo.openInstances.forEach(function(i){return console.log(i)}),console.log("end portalOpenInstances ----------")}function Z3(){Zo=new Km}Kr.default=Zo;var jc={};Object.defineProperty(jc,"__esModule",{value:!0});jc.resetState=tD;jc.log=nD;var J3=Kr,Q3=eD(J3);function eD(i){return i&&i.__esModule?i:{default:i}}var Ct=void 0,ln=void 0,Oi=[];function tD(){for(var i=[Ct,ln],e=0;e<i.length;e++){var t=i[e];!t||t.parentNode&&t.parentNode.removeChild(t)}Ct=ln=null,Oi=[]}function nD(){console.log("bodyTrap ----------"),console.log(Oi.length);for(var i=[Ct,ln],e=0;e<i.length;e++){var t=i[e],n=t||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")}function Xh(){Oi.length!==0&&Oi[Oi.length-1].focusContent()}function iD(i,e){!Ct&&!ln&&(Ct=document.createElement("div"),Ct.setAttribute("data-react-modal-body-trap",""),Ct.style.position="absolute",Ct.style.opacity="0",Ct.setAttribute("tabindex","0"),Ct.addEventListener("focus",Xh),ln=Ct.cloneNode(),ln.addEventListener("focus",Xh)),Oi=e,Oi.length>0?(document.body.firstChild!==Ct&&document.body.insertBefore(Ct,document.body.firstChild),document.body.lastChild!==ln&&document.body.appendChild(ln)):(Ct.parentElement&&Ct.parentElement.removeChild(Ct),ln.parentElement&&ln.parentElement.removeChild(ln))}Q3.default.subscribe(iD);(function(i,e){Object.defineProperty(e,"__esModule",{value:!0});var t=Object.assign||function(I){for(var k=1;k<arguments.length;k++){var K=arguments[k];for(var L in K)Object.prototype.hasOwnProperty.call(K,L)&&(I[L]=K[L])}return I},n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(I){return typeof I}:function(I){return I&&typeof Symbol=="function"&&I.constructor===Symbol&&I!==Symbol.prototype?"symbol":typeof I},r=function(){function I(k,K){for(var L=0;L<K.length;L++){var B=K[L];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(k,B.key,B)}}return function(k,K,L){return K&&I(k.prototype,K),L&&I(k,L),k}}(),s=Bs,o=Wc.exports,a=M(o),l=vn,c=_(l),u=rc.exports,h=M(u),d=_n,p=_(d),g=Xr,m=_(g),f=pn,v=M(f),y=Kr,b=M(y);function _(I){if(I&&I.__esModule)return I;var k={};if(I!=null)for(var K in I)Object.prototype.hasOwnProperty.call(I,K)&&(k[K]=I[K]);return k.default=I,k}function M(I){return I&&I.__esModule?I:{default:I}}function R(I,k){if(!(I instanceof k))throw new TypeError("Cannot call a class as a function")}function F(I,k){if(!I)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k&&(typeof k=="object"||typeof k=="function")?k:I}function x(I,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof k);I.prototype=Object.create(k&&k.prototype,{constructor:{value:I,enumerable:!1,writable:!0,configurable:!0}}),k&&(Object.setPrototypeOf?Object.setPrototypeOf(I,k):I.__proto__=k)}var E={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},N=function(k){return k.code==="Tab"||k.keyCode===9},$=function(k){return k.code==="Escape"||k.keyCode===27},Q=0,G=function(I){x(k,I);function k(K){R(this,k);var L=F(this,(k.__proto__||Object.getPrototypeOf(k)).call(this,K));return L.setOverlayRef=function(B){L.overlay=B,L.props.overlayRef&&L.props.overlayRef(B)},L.setContentRef=function(B){L.content=B,L.props.contentRef&&L.props.contentRef(B)},L.afterClose=function(){var B=L.props,q=B.appElement,j=B.ariaHideApp,V=B.htmlOpenClassName,W=B.bodyOpenClassName,ne=B.parentSelector,re=ne&&ne().ownerDocument||document;W&&m.remove(re.body,W),V&&m.remove(re.getElementsByTagName("html")[0],V),j&&Q>0&&(Q-=1,Q===0&&p.show(q)),L.props.shouldFocusAfterRender&&(L.props.shouldReturnFocusAfterClose?(c.returnFocus(L.props.preventScroll),c.teardownScopedFocus()):c.popWithoutFocus()),L.props.onAfterClose&&L.props.onAfterClose(),b.default.deregister(L)},L.open=function(){L.beforeOpen(),L.state.afterOpen&&L.state.beforeClose?(clearTimeout(L.closeTimer),L.setState({beforeClose:!1})):(L.props.shouldFocusAfterRender&&(c.setupScopedFocus(L.node),c.markForFocusLater()),L.setState({isOpen:!0},function(){L.openAnimationFrame=requestAnimationFrame(function(){L.setState({afterOpen:!0}),L.props.isOpen&&L.props.onAfterOpen&&L.props.onAfterOpen({overlayEl:L.overlay,contentEl:L.content})})}))},L.close=function(){L.props.closeTimeoutMS>0?L.closeWithTimeout():L.closeWithoutTimeout()},L.focusContent=function(){return L.content&&!L.contentHasFocus()&&L.content.focus({preventScroll:!0})},L.closeWithTimeout=function(){var B=Date.now()+L.props.closeTimeoutMS;L.setState({beforeClose:!0,closesAt:B},function(){L.closeTimer=setTimeout(L.closeWithoutTimeout,L.state.closesAt-Date.now())})},L.closeWithoutTimeout=function(){L.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},L.afterClose)},L.handleKeyDown=function(B){N(B)&&(0,h.default)(L.content,B),L.props.shouldCloseOnEsc&&$(B)&&(B.stopPropagation(),L.requestClose(B))},L.handleOverlayOnClick=function(B){L.shouldClose===null&&(L.shouldClose=!0),L.shouldClose&&L.props.shouldCloseOnOverlayClick&&(L.ownerHandlesClose()?L.requestClose(B):L.focusContent()),L.shouldClose=null},L.handleContentOnMouseUp=function(){L.shouldClose=!1},L.handleOverlayOnMouseDown=function(B){!L.props.shouldCloseOnOverlayClick&&B.target==L.overlay&&B.preventDefault()},L.handleContentOnClick=function(){L.shouldClose=!1},L.handleContentOnMouseDown=function(){L.shouldClose=!1},L.requestClose=function(B){return L.ownerHandlesClose()&&L.props.onRequestClose(B)},L.ownerHandlesClose=function(){return L.props.onRequestClose},L.shouldBeClosed=function(){return!L.state.isOpen&&!L.state.beforeClose},L.contentHasFocus=function(){return document.activeElement===L.content||L.content.contains(document.activeElement)},L.buildClassName=function(B,q){var j=(typeof q>"u"?"undefined":n(q))==="object"?q:{base:E[B],afterOpen:E[B]+"--after-open",beforeClose:E[B]+"--before-close"},V=j.base;return L.state.afterOpen&&(V=V+" "+j.afterOpen),L.state.beforeClose&&(V=V+" "+j.beforeClose),typeof q=="string"&&q?V+" "+q:V},L.attributesFromObject=function(B,q){return Object.keys(q).reduce(function(j,V){return j[B+"-"+V]=q[V],j},{})},L.state={afterOpen:!1,beforeClose:!1},L.shouldClose=null,L.moveFromContentToOverlay=null,L}return r(k,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(L,B){this.props.isOpen&&!L.isOpen?this.open():!this.props.isOpen&&L.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!B.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var L=this.props,B=L.appElement,q=L.ariaHideApp,j=L.htmlOpenClassName,V=L.bodyOpenClassName,W=L.parentSelector,ne=W&&W().ownerDocument||document;V&&m.add(ne.body,V),j&&m.add(ne.getElementsByTagName("html")[0],j),q&&(Q+=1,p.hide(B)),b.default.register(this)}},{key:"render",value:function(){var L=this.props,B=L.id,q=L.className,j=L.overlayClassName,V=L.defaultStyles,W=L.children,ne=q?{}:V.content,re=j?{}:V.overlay;if(this.shouldBeClosed())return null;var U={ref:this.setOverlayRef,className:this.buildClassName("overlay",j),style:t({},re,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Y=t({id:B,ref:this.setContentRef,style:t({},ne,this.props.style.content),className:this.buildClassName("content",q),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",t({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Me=this.props.contentElement(Y,W);return this.props.overlayElement(U,Me)}}]),k}(s.Component);G.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},G.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(v.default),a.default.instanceOf(f.SafeHTMLCollection),a.default.instanceOf(f.SafeNodeList),a.default.arrayOf(a.default.instanceOf(v.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=G,i.exports=e.default})(nc,nc.exports);function Ym(){var i=this.constructor.getDerivedStateFromProps(this.props,this.state);i!=null&&this.setState(i)}function Zm(i){function e(t){var n=this.constructor.getDerivedStateFromProps(i,t);return n??null}this.setState(e.bind(this))}function Jm(i,e){try{var t=this.props,n=this.state;this.props=i,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,n)}finally{this.props=t,this.state=n}}Ym.__suppressDeprecationWarning=!0;Zm.__suppressDeprecationWarning=!0;Jm.__suppressDeprecationWarning=!0;function rD(i){var e=i.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof i.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return i;var t=null,n=null,r=null;if(typeof e.componentWillMount=="function"?t="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(t="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?n="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(n="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?r="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(r="UNSAFE_componentWillUpdate"),t!==null||n!==null||r!==null){var s=i.displayName||i.name,o=typeof i.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+o+" but also contains the following legacy lifecycles:"+(t!==null?`
  `+t:"")+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof i.getDerivedStateFromProps=="function"&&(e.componentWillMount=Ym,e.componentWillReceiveProps=Zm),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=Jm;var a=e.componentDidUpdate;e.componentDidUpdate=function(c,u,h){var d=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;a.call(this,c,u,d)}}return i}const sD=Object.freeze(Object.defineProperty({__proto__:null,polyfill:rD},Symbol.toStringTag,{value:"Module"})),oD=of(sD);Object.defineProperty(Gi,"__esModule",{value:!0});Gi.bodyOpenClassName=Gi.portalClassName=void 0;var Kh=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},aD=function(){function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),Qm=Bs,Jo=Hs(Qm),lD=Bs,Qo=Hs(lD),cD=Wc.exports,Ee=Hs(cD),uD=nc.exports,Yh=Hs(uD),dD=_n,hD=pD(dD),ui=pn,Zh=Hs(ui),fD=oD;function pD(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);return e.default=i,e}function Hs(i){return i&&i.__esModule?i:{default:i}}function mD(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function Jh(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i}function gD(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)}var vD=Gi.portalClassName="ReactModalPortal",_D=Gi.bodyOpenClassName="ReactModal__Body--open",Ci=ui.canUseDOM&&Qo.default.createPortal!==void 0,Qh=function(e){return document.createElement(e)},ef=function(){return Ci?Qo.default.createPortal:Qo.default.unstable_renderSubtreeIntoContainer};function wo(i){return i()}var Gs=function(i){gD(e,i);function e(){var t,n,r,s;mD(this,e);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return s=(n=(r=Jh(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),r),r.removePortal=function(){!Ci&&Qo.default.unmountComponentAtNode(r.node);var c=wo(r.props.parentSelector);c&&c.contains(r.node)?c.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(c){r.portal=c},r.renderPortal=function(c){var u=ef(),h=u(r,Jo.default.createElement(Yh.default,Kh({defaultStyles:e.defaultStyles},c)),r.node);r.portalRef(h)},n),Jh(r,s)}return aD(e,[{key:"componentDidMount",value:function(){if(!!ui.canUseDOM){Ci||(this.node=Qh("div")),this.node.className=this.props.portalClassName;var n=wo(this.props.parentSelector);n.appendChild(this.node),!Ci&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(n){var r=wo(n.parentSelector),s=wo(this.props.parentSelector);return{prevParent:r,nextParent:s}}},{key:"componentDidUpdate",value:function(n,r,s){if(!!ui.canUseDOM){var o=this.props,a=o.isOpen,l=o.portalClassName;n.portalClassName!==l&&(this.node.className=l);var c=s.prevParent,u=s.nextParent;u!==c&&(c.removeChild(this.node),u.appendChild(this.node)),!(!n.isOpen&&!a)&&!Ci&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!ui.canUseDOM||!this.node||!this.portal)){var n=this.portal.state,r=Date.now(),s=n.isOpen&&this.props.closeTimeoutMS&&(n.closesAt||r+this.props.closeTimeoutMS);s?(n.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-r)):this.removePortal()}}},{key:"render",value:function(){if(!ui.canUseDOM||!Ci)return null;!this.node&&Ci&&(this.node=Qh("div"));var n=ef();return n(Jo.default.createElement(Yh.default,Kh({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(n){hD.setElement(n)}}]),e}(Qm.Component);Gs.propTypes={isOpen:Ee.default.bool.isRequired,style:Ee.default.shape({content:Ee.default.object,overlay:Ee.default.object}),portalClassName:Ee.default.string,bodyOpenClassName:Ee.default.string,htmlOpenClassName:Ee.default.string,className:Ee.default.oneOfType([Ee.default.string,Ee.default.shape({base:Ee.default.string.isRequired,afterOpen:Ee.default.string.isRequired,beforeClose:Ee.default.string.isRequired})]),overlayClassName:Ee.default.oneOfType([Ee.default.string,Ee.default.shape({base:Ee.default.string.isRequired,afterOpen:Ee.default.string.isRequired,beforeClose:Ee.default.string.isRequired})]),appElement:Ee.default.oneOfType([Ee.default.instanceOf(Zh.default),Ee.default.instanceOf(ui.SafeHTMLCollection),Ee.default.instanceOf(ui.SafeNodeList),Ee.default.arrayOf(Ee.default.instanceOf(Zh.default))]),onAfterOpen:Ee.default.func,onRequestClose:Ee.default.func,closeTimeoutMS:Ee.default.number,ariaHideApp:Ee.default.bool,shouldFocusAfterRender:Ee.default.bool,shouldCloseOnOverlayClick:Ee.default.bool,shouldReturnFocusAfterClose:Ee.default.bool,preventScroll:Ee.default.bool,parentSelector:Ee.default.func,aria:Ee.default.object,data:Ee.default.object,role:Ee.default.string,contentLabel:Ee.default.string,shouldCloseOnEsc:Ee.default.bool,overlayRef:Ee.default.func,contentRef:Ee.default.func,id:Ee.default.string,overlayElement:Ee.default.func,contentElement:Ee.default.func};Gs.defaultProps={isOpen:!1,portalClassName:vD,bodyOpenClassName:_D,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return Jo.default.createElement("div",e,t)},contentElement:function(e,t){return Jo.default.createElement("div",e,t)}};Gs.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,fD.polyfill)(Gs);Gi.default=Gs;(function(i,e){Object.defineProperty(e,"__esModule",{value:!0});var t=Gi,n=r(t);function r(s){return s&&s.__esModule?s:{default:s}}e.default=n.default,i.exports=e.default})(tc,tc.exports);const eg=sf(tc.exports),So=i=>{const[e,t]=An(!1);return hi(()=>{i.ref_!==void 0&&(i.ref_.current={showModal:()=>{t(!0)},close:()=>{t(!1),i.onClose?.()}})},[i.ref_]),C(eg,{isOpen:e,closeTimeoutMS:300,onRequestClose:()=>{t(!1),i.onClose?.()},className:"absolute outline-none top-1/2 left-1/2 right-auto bottom-auto mr-[-50%] [max-width:90vw] [max-height:90vh] overflow-auto "+(i.class??""),children:i.children})},tf=new Map(Wn(Nm).map((i,e)=>[i,e])),xD=()=>{const i=ze(Ge,t=>[...new Set(Wn(t.availableTutorials)).difference(new Set(Wn(t.completedTutorials)))].sort((n,r)=>tf.get(n)-tf.get(r))[0]),e=ci(void 0);return Zi(()=>{e.current=i??e.current},[i]),C("div",{style:{opacity:i===void 0?"0":"1"},class:"absolute w-[90%] py-3 left-[5%] px-16 text-center top-[70%] [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none z-10 window-popup",children:(i??e.current)&&C(tt,{children:[C("i",{class:"ti ti-message-report absolute left-4 top-0 [font-size:250%]"}),C("span",{class:"[&>b]:text-orange-300",children:Nm[i??e.current]})]})})},bt=Bc("acgDOMStore",3,{news:null,usePowerSaveMode:!0,sfxVolume:1,bgmVolume:1,resolutionMultiplier:1,quality:"standard"},(i,e)=>({showNews:t=>{i({news:[...t]})},hideNews:()=>{i({news:null})}})),vi=kc({enemyStatus:null,powerSaveMode:!1},(i,e)=>({setEnemyStatus:t=>{i({enemyStatus:{...t,hp:Math.max(0,Math.round(t.hp))}})},updatePowerSaveModeState:()=>{i({powerSaveMode:bt.getState().usePowerSaveMode&&(document.visibilityState==="hidden"||!document.hasFocus())})}}));vi.getState().updatePowerSaveModeState();document.addEventListener("visibilitychange",()=>{vi.getState().updatePowerSaveModeState()});window.addEventListener("blur",()=>{vi.getState().updatePowerSaveModeState()});window.addEventListener("focus",()=>{vi.getState().updatePowerSaveModeState()});const yD=Array(1e4).fill(0).map(()=>Array(Math.floor(Math.random()*6)+2).fill(0).map(()=>"abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)]).join("")).join(" "),bD=()=>{const i=ze(vi,t=>t.enemyStatus,Gc),e=ze(Ge,t=>t.upgrades.Vacuum>0);return i?C("div",{class:"pl-3 pr-4 pt-1 pb-3 window",children:[C("h2",{class:"mb-2 tracking-wide",children:[C("i",{class:"ti ti-chart-line"})," Enemy Stats"]}),C("div",{children:C("table",{class:"tracking-wide",children:[C("tr",{children:[C("td",{class:"pr-1",children:C("i",{class:"ti ti-float-none"})}),C("td",{children:i.name})]}),C("tr",{children:[C("td",{class:"pr-1",children:C("i",{class:"ti ti-heart"})}),C("td",{children:i.hp})]}),C("tr",{children:[C("td",{class:"pr-1",children:C("i",{class:"ti ti-moneybag"})}),C("td",{children:i.money})]}),e&&C("tr",{children:[C("td",{class:"pr-1",children:C("i",{class:"ti ti-notes"})}),C("td",{children:Wn(i.items).length===0?"-":Vi(i.items).map(([t,n])=>C(tt,{children:[t," ",n]}))})]})]})})]}):C(tt,{})},wD=()=>{const i=ze(Ge,e=>e.items);return C("div",{class:"pr-3 pl-4 pt-1 pb-3 window",children:[C("h2",{class:"mb-2 tracking-wide",children:[C("i",{class:"ti ti-notes"})," Items"]}),C("table",{class:"w-full",children:Vi(i).map(([e,t])=>C("tr",{onMouseEnter:()=>{Xo(`item-${e}`,tA[e])},onMouseLeave:()=>{Ko(`item-${e}`)},children:[C("td",{children:[C("i",{class:"ti ti-meat"})," ",e]}),C("td",{class:"text-right",children:t})]}))})]})},SD=()=>{const i=ze(Ge,e=>e.canTranscend);return C(tt,{children:i&&C("div",{class:"pr-3 pl-4 pt-1 pb-3 window gold",children:[C("p",{class:"text-xs mb-2",children:"You have reached the point of singularity and can transcended to a higher plane of existence."}),C("button",{class:"w-full",tabIndex:-1,onClick:()=>{se().transcend()},children:"Show Bonus"})]})})},MD=()=>{const i=ze(Ge,e=>e.getExplorationLv());return C("table",{children:[C("tr",{children:[C("td",{children:C("i",{class:"ti ti-heart"})}),C("td",{children:["\xD7",i," \u2192 \xD7",i-1]})]}),C("tr",{children:[C("td",{children:C("i",{class:"ti ti-moneybag"})}),C("td",{children:["\xD7",i," \u2192 \xD7",i-1]})]}),C("tr",{children:[C("td",{children:C("i",{class:"ti ti-notes"})}),C("td",{children:["\xD7",i," \u2192 \xD7",i-1]})]})]})},TD=()=>{const i=ze(Ge,e=>e.getExplorationLv());return C("table",{children:[C("tr",{children:[C("td",{children:C("i",{class:"ti ti-heart"})}),C("td",{children:["\xD7",i," \u2192 \xD7",i+1]})]}),C("tr",{children:[C("td",{children:C("i",{class:"ti ti-moneybag"})}),C("td",{children:["\xD7",i," \u2192 \xD7",i+1]})]}),C("tr",{children:[C("td",{children:C("i",{class:"ti ti-notes"})}),C("td",{children:["\xD7",i," \u2192 \xD7",i+1]})]})]})},nf=()=>{const[i,e]=An(null),[t,n]=An("default");return hi(()=>{const r=o=>{e([o.clientX,o.clientY]);const a=document.elementFromPoint(o.clientX,o.clientY);n(a?.matches(".pointer,.pointer *,button,a,input,dialog")?"pointer":"default")},s=()=>{e(null)};return window.addEventListener("mousemove",r),document.body.addEventListener("mouseleave",s),window.addEventListener("blur",s),()=>{window.removeEventListener("mousemove",r),document.body.removeEventListener("mouseleave",s),window.removeEventListener("blur",s)}},[]),i?C("img",{src:t==="default"?d3:h3,style:{left:i[0]-10,top:i[1]-4},class:"absolute z-20 pointer-events-none"}):C(tt,{})},ED=()=>{const i=ze(bt),e=ci(null),t=ci(null),n=ci(null),r=ci(null),[s,o]=An(""),a=ze(Ge,()=>Oc(Vi(Ur).map(([f,v])=>[f,v.visible()])),Gc),l=ze(Ge,f=>f.getWeather()),c=ze(Ge,f=>Math.ceil((f.weatherEffectWillBeEnabledInLessThan[f.stage]??Number.MAX_SAFE_INTEGER)/qo/60)),u=ze(Ge,f=>Jl(f)),h=ze(Ge,f=>f.transcending),d=ze(vi,f=>f.powerSaveMode),p=ze(Ge,f=>f.stage),g=ze(Ge,f=>f.upgrades.Vacuum>0),m=ze(Ge,f=>f.getExplorationLv());return hi(()=>{for(const f of["./audio/credit.html","./models/credit.html","./font/credit.html","./lib_credit.html","./lib_credit2.html"])fetch(f).then(v=>v.text()).then(v=>{o(y=>y+SC.link(v))}).catch(console.error)},[]),hi(()=>{i.news!==null&&setTimeout(()=>{!e.current||e.current.showModal()},2e3)},[i.news]),h?C("div",{class:"absolute window w-full h-full",children:[C("div",{class:"m-auto w-fit h-fit text-center p-[30vh]",children:[C("h2",{children:"Transcending..."}),C("p",{class:"my-4",children:"Enemies in the next world will have 500x the HP and money."}),C("div",{class:"float-right",children:[C("span",{class:"gold",children:C("button",{class:"px-8",onClick:()=>{se().confirmTranscending()},children:"Confirm"})}),C("button",{class:"px-8 ml-2",onClick:()=>{se().cancelTranscending()},children:"Cancel"})]})]}),C(nf,{})]}):C(tt,{children:[C("div",{class:"absolute left-[-4px] top-[-2px] w-44 sm:w-72 [&>*]:mt-3",children:[C(cA,{}),g&&C(wD,{}),C(SD,{})]}),C(xD,{}),d&&C("div",{class:"absolute text-center w-full top-[45%] select-none [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none z-10",children:C("div",{class:"relative py-3 px-8 mx-auto w-fit window-popup",children:[C("h2",{class:"tracking-wide text-orange-300",children:[C("i",{class:"ti ti-zzz inline-block"})," Power Save Mode"]}),C("p",{class:"[font-size:60%] tracking-wide",children:["Power Save Mode stops rendering the game,",C("br",{}),"but the game still runs in the background."]})]})}),C("div",{class:"absolute right-[-4px] top-[-2px] min-w-[7rem] sm:min-w-[13rem] [&>*]:mt-3",children:[Or(a).some(f=>f)&&C("div",{class:"pl-3 pr-4 pt-1 pb-3 window",children:[C("h2",{class:"mb-2 tracking-wide",children:[C("i",{class:"ti ti-map-2"})," Stages"]}),C("div",{class:"[&>*:not(:last-child)]:mb-1",children:Wn(Ur).map(f=>C("button",{tabIndex:-1,class:"w-full"+(p===f?" button-primary":""),onClick:()=>{se().setStageTransitingTo(f)},disabled:!a[f]||p===f,children:a[f]?f:"???"}))})]}),u&&Zl[p]!==null&&C("div",{class:"pl-3 pr-4 pt-1 pb-3 window",children:[C("h2",{class:"mb-2 tracking-wide",children:[C("i",{class:"ti ti-sun"})," Weather"]}),C("div",{children:C("table",{children:[C("tr",{children:[C("td",{class:"pr-1",children:!l&&">"}),C("td",{class:"tracking-wider "+(l?"":"font-bold"),children:"Normal"})]}),C("tr",{children:[C("td",{class:"pr-1",children:l&&">"}),C("td",{class:"tracking-wider "+(l?"font-bold":""),children:[Zl[p],!l&&C("span",{class:"text-gray-300",children:[" (in ","<"+c," min",c!==1&&"s",")"]})]})]})]})})]}),C(bD,{}),g&&p!=="Mothership"&&C("div",{class:"pl-3 pr-4 pt-1 pb-3 window",children:[C("h2",{class:"mb-2 tracking-wide",children:[C("i",{class:"ti ti-route"})," Explore: ",C("span",{class:"tracking-tight",children:["Lv. ",m]})]}),C("button",{class:"block w-full text-left pl-[2rem] sm:pl-[5.1rem]",onClick:()=>{se().exploreNext()},onMouseEnter:()=>{Xo("explorationNext",C(TD,{}))},onMouseLeave:()=>{Ko("explorationNext")},children:[C("i",{class:"ti ti-arrow-forward"})," Next",C("span",{class:"[font-size:80%] tracking-tighter",children:[C("i",{class:"ti ti-meat ml-3 mr-1"}),Ql(m)]})]}),m>=2&&C("button",{class:"block w-full text-left pl-[2rem] sm:pl-[5.1rem] mt-1",onClick:()=>{se().explorePrev()},onMouseEnter:()=>{Xo("explorationPrev",C(MD,{}))},onMouseLeave:()=>{Ko("explorationPrev")},children:[C("i",{class:"ti ti-arrow-back"})," Prev"]})]})]}),C(p2,{}),C(So,{class:"window p-5",ref_:n,children:[C("p",{children:"Are you sure you want to reset your save data?"}),C("div",{class:"float-right mt-4",children:[C("button",{class:"px-4 button-primary",onClick:()=>{oA(),location.reload()},children:"Reset"}),C("button",{class:"px-4 ml-2",onClick:()=>{n.current.close()},children:"Cancel"})]})]}),C("div",{class:"absolute left-[-4px] bottom-[-2px] px-5 pb-1 window tracking-wide [&>*:not(:first-child)]:ml-5",children:[C("span",{class:"pointer hover:text-white",onClick:()=>{t.current.showModal()},children:[C("i",{class:"ti ti-license"})," Credits"]}),C("span",{class:"pointer hover:text-white",onClick:()=>{r.current.showModal()},children:[C("i",{class:"ti ti-tool"})," Options"]})]}),C(So,{ref_:t,class:"window p-5",children:[C("h1",{class:"text-xl mb-2 tracking-wider w-full text-center",children:"Credits"}),C("ul",{dangerouslySetInnerHTML:{__html:s??""},class:"w-full h-full block [&_li]:mb-2 [&_h2]:font-bold [&_a]:text-violet-300 select-text list-disc ml-5"})]}),C(So,{ref_:r,class:"window py-4 px-10",children:[C("h1",{class:"text-xl mb-2 tracking-wider w-full text-center",children:"Options"}),C("table",{children:[C("tr",{children:[C("td",{class:"pr-4 text-right",title:"Power Save Mode stops rendering the game,<br />but the game still runs in the background.",children:"Power Save Mode"}),C("td",{children:C("label",{class:"pointer",children:[C("input",{type:"checkbox",checked:i.usePowerSaveMode,onChange:f=>{bt.setState({usePowerSaveMode:f.currentTarget.checked})}})," enabled"]})})]}),C("tr",{children:[C("td",{class:"pr-4 text-right",children:"Resolution"}),C("td",{class:"[&>*:not(:first-child)]:ml-2",children:[C("label",{children:[C("input",{type:"radio",name:"resolution",checked:i.resolutionMultiplier===1,onChange:f=>{bt.setState({resolutionMultiplier:1})}})," x1"]}),C("label",{children:[C("input",{type:"radio",name:"resolution",checked:i.resolutionMultiplier===Math.SQRT1_2,onChange:f=>{bt.setState({resolutionMultiplier:Math.SQRT1_2})}})," x0.7"]}),C("label",{children:[C("input",{type:"radio",name:"resolution",checked:i.resolutionMultiplier===Math.SQRT1_2**2,onChange:f=>{bt.setState({resolutionMultiplier:Math.SQRT1_2**2})}})," x0.5"]}),C("label",{children:[C("input",{type:"radio",name:"resolution",checked:i.resolutionMultiplier===Math.SQRT1_2**3,onChange:f=>{bt.setState({resolutionMultiplier:Math.SQRT1_2**3})}})," x0.35"]}),C("label",{children:[C("input",{type:"radio",name:"resolution",checked:i.resolutionMultiplier===Math.SQRT1_2**4,onChange:f=>{bt.setState({resolutionMultiplier:Math.SQRT1_2**4})}})," x0.25"]})]})]}),C("tr",{children:[C("td",{class:"pr-4 text-right",children:"Quality"}),C("td",{class:"[&>*:not(:first-child)]:ml-2",children:[C("label",{children:[C("input",{type:"radio",name:"quality",value:"high",checked:i.quality==="high",onChange:f=>{bt.setState({quality:f.currentTarget.value})}})," High"]}),C("label",{children:[C("input",{type:"radio",name:"quality",value:"standard",checked:i.quality==="standard",onChange:f=>{bt.setState({quality:f.currentTarget.value})}})," Standard"]})]})]})]}),C("div",{class:"pointer text-orange-300 hover:text-orange-400 mt-4",onClick:()=>{r.current?.close(),n.current?.showModal()},children:[C("i",{class:"ti ti-eraser"})," Reset Progress"]})]}),C(So,{ref_:e,class:"from-gray-200 to-gray-400 bg-gradient-to-b [box-shadow:0_0_5px_1px_#00000040] [border-radius:2px] w-[400px] h-[620px] p-5 box-border shadow-2xl select-none",onClose:()=>{bt.getState().hideNews(),se().addTutorial("nextStage")},children:[i.news&&C("div",{class:"[line-height:1.2] [font-size:12px] text-justify overflow-y-hidden h-full [font-family:KottaOne] [-webkit-text-stroke:3px_rgba(0,0,0,0.05)]",children:[C("h2",{class:"text-lg tracking-wide font-bold mb-4 [border-bottom:3px_solid_rgb(130,130,130)] text-center",children:i.news[0]}),C("span",{children:i.news[1]}),C("span",{class:"text-gray-500",children:[" ",yD]})]}),C("button",{class:"sm:hidden absolute right-2 bottom-2 px-4",onClick:()=>{e.current.close()},children:"Close"})]}),C(aA,{}),C(nf,{})]})};eg.setAppElement(document.body);Ir(C(ED,{}),document.body);const AD=`uniform bool daytime;

void main() {
    super();
    if (daytime) {
        gl_FragColor.rgb = vec3(0.2, 0.2, 0.6);
    } else {
        gl_FragColor.rgb = vec3(0.2, 0.2, 0.3);
    }
}
`,CD=i=>{const e=mi["hammer_notexture.glb"](.03);e.position.set(-.01,0,-.06);const t={daytime:{value:se().stage==="Earth"}};gi(r=>{t.daytime.value=r.stage==="Earth"}),ha(e,{uniforms:t,fragmentShader:AD}),Mt(e,{noDiffusion:!0});const n=new Ji("hammer",new ke().add(e)).onClone(r=>{ut.add(s=>{r.rotation.x+=Math.random()*.03,r.rotation.y=s*.01,r.rotation.z=Math.PI/2})}).onAllocate(()=>{const r=(Math.random()-.5)*2*Math.PI/4;return{time:0,velocity:new P(Math.cos(r),Math.sin(r),0)}});return Mt(n,{noDiffusion:!0}),Kn.add(r=>{const s=Vc(se()).Hammer;s&&r%s===0&&n.allocate().position.copy(i.position);for(const o of n.children)o.userData.time++,o.position.x+=o.userData.velocity.x*.01,o.position.y=Math.sin(o.userData.time*.15)*.03,o.position.z+=o.userData.velocity.y*.01,(o.position.x>4||Math.abs(o.position.z)>1)&&o.free()}),{obj:n,doDamage:r=>{for(const s of r)for(const o of n.children)s.position.distanceTo(o.position)<s.userData.radius+.02&&(s.userData.hp-=da(se()).Hammer??0,o.free())}}},DD=`in vec2 pos;
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
`,RD=`out vec2 pos;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    pos = position.xy;
}
`,LD=i=>{const e={time:{value:0},count:{value:0}},t=rn(new nt(new Is(1,1),new ct({blending:Oo,transparent:!0,uniforms:e,vertexShader:RD,fragmentShader:DD})),{rotateY:-Math.PI/2,rotateX:-Math.PI/2,scale:{set:[.25,2,0]},position:{set:[1,.01,0]}});Mt(t),t.renderOrder=1,ut.add(s=>{e.time.value=s,e.count.value=se().getUpgrade("Laser"),rn(t,{position:{setX:i.position.x+1,setY:i.position.y+.01,setZ:i.position.z}})});const n=new Ji("hitEffect",Mt(new nt(new oa(.006),new Mn({color:16738047})))),r=new WeakMap;return{obj:new li().add(t,n),doDamage:s=>{for(const o of s)Math.abs(o.position.z-i.position.z)<o.userData.radius&&Math.abs(o.position.y-i.position.y)<o.userData.radius&&o.position.x>i.position.x?(r.emplace(o,{insert:()=>n.allocate()}).position.copy(o.position.clone()).setZ(i.position.z),o.userData.hp-=da(se()).Laser,vi.getState().setEnemyStatus({hp:o.userData.hp,name:o.userData.name,money:o.userData.money,items:o.userData.items})):r.has(o)&&(r.get(o).free(),r.delete(o))},onEnemyRemoved:s=>{r.get(s)?.free(),r.delete(s)}}},PD=`uniform bool daytime;

void main() {
    super();
    if (daytime) {
        gl_FragColor.rgb *= vec3(0.8);
    } else {
        gl_FragColor.rgb *= vec3(2.0);
    }
}
`,ID=i=>{const e=mi["ballistic_missile.glb"](.03);e.position.set(-.01,0,-.06);const t={daytime:{value:se().stage==="Earth"}};gi(r=>{t.daytime.value=r.stage==="Earth"}),ha(e,{uniforms:t,fragmentShader:PD}),Mt(e);const n=new Ji("missile",new ke().add(e)).onAllocate(()=>{const r=(Math.random()-.5)*2*Math.PI/4;return{time:0,velocity:new P(Math.cos(r),Math.sin(r),0)}});return Mt(n),Kn.add(r=>{const s=Vc(se()).Missile;s&&r%s===0&&(se().items.Scrap??0)>=1e3&&(se().addItems({Scrap:-1e3}),n.allocate().position.copy(i.position));for(const o of n.children)o.userData.time++,o.position.x+=o.userData.velocity.x*.02,o.position.z+=o.userData.velocity.y*.02,o.lookAt(o.position.clone().add(new P(o.userData.velocity.x,0,o.userData.velocity.y))),(o.position.x>4||Math.abs(o.position.z)>1)&&o.free()}),{obj:n,doDamage:r=>{for(const s of r)for(const o of n.children)s.position.distanceTo(o.position)<s.userData.radius+.02&&(s.userData.hp-=da(se()).Missile??0,o.free())}}},FD=[CD,LD,ID];{const i=new BroadcastChannel("acg");i.addEventListener("message",e=>{e.data==="hello"&&(location.href="./tab_already_open.html")}),i.postMessage("hello")}const mn=new xp({antialias:!0});mn.outputEncoding=qe;mn.setSize(window.innerWidth,window.innerHeight);mn.setPixelRatio(window.devicePixelRatio*bt.getState().resolutionMultiplier);document.body.appendChild(mn.domElement);const tg=[-.5,.6,0],jt=rn(new kt(70,window.innerWidth/window.innerHeight,.01,10),{position:{set:tg}});let xt,Lo,Po;const rf=new NT().add(xt=CC(mn.domElement),VC(xt),KC(),...Vi(Ur).map(([i,{createModel:e}])=>{const t=e();return t.visible=se().stage===i,gi((n,r)=>{n.stage!==r.stage&&(t.visible=n.stage===i)}),t}),...(Lo=FD.map(i=>i(xt))).map(({obj:i})=>i),...Or(Po=Oc(Vi(Ur).map(([i,e])=>[i,e.createEnemyPools()])))),Ds=new Lm(mn),ng=t3();{let i;for(const e of[i=new J2(rf,jt),new Hi(new he(256,256),.2,0,0),UC(mn,rf,jt,i),JC(Uc("rain.blur")),qC(),ng.pass])Ds.addPass(e)}window.addEventListener("resize",()=>{jt.aspect=window.innerWidth/window.innerHeight,jt.updateProjectionMatrix(),mn.setSize(window.innerWidth,window.innerHeight),mn.setPixelRatio(window.devicePixelRatio*bt.getState().resolutionMultiplier),Ds.setSize(window.innerWidth,window.innerHeight),Ds.setPixelRatio(window.devicePixelRatio*bt.getState().resolutionMultiplier)});bt.subscribe((i,e)=>{i.resolutionMultiplier!==e.resolutionMultiplier&&(mn.setPixelRatio(window.devicePixelRatio*i.resolutionMultiplier),Ds.setPixelRatio(window.devicePixelRatio*i.resolutionMultiplier))});Kn.add(()=>{se().countdown()});{const i=()=>Or(Po).flatMap(t=>t.alive()),e=()=>Or(Po).flatMap(t=>t.dead());Kn.add(t=>{Po[se().stage].spawn(t);const n=i();n.forEach(s=>s.userData.update());for(const s of e())s.position.y-=.001*s.userData.time,s.rotateZ(.1*(Math.random()-.5)),s.userData.time++,s.userData.time>100&&s.free();Lo.forEach(s=>s.doDamage(n));const r=(s,o)=>s.length===0?void 0:s.reduce((a,l)=>o(a)<o(l)?a:l,s[0]);(!xt.userData.autopilotTarget||!n.includes(xt.userData.autopilotTarget)||xt.userData.autopilotTarget.position.x<xt.position.x)&&(xt.userData.autopilotTarget=r(n.filter(s=>s.position.x>xt.position.x+.3&&s.userData.name!=="Weather Effect UFO"),s=>s.position.x));for(const s of n)(s.position.x<-1||s.userData.hp<=0)&&(s.userData.hp<=0&&(s.userData.onKilled(),se().incrementKillCount(s.userData.name),se().addMoney(s.userData.money),se().addItems(s.userData.items)),s.free(),Lo.forEach(o=>"onEnemyRemoved"in o&&o.onEnemyRemoved(s))),s.userData.time++}),gi((t,n)=>{if(!(t.stage===n.stage&&t.transcendence===n.transcendence)){for(const r of i())r.free(),Lo.forEach(s=>"onEnemyRemoved"in s&&s.onEnemyRemoved(r));for(const r of e())r.free()}})}Kn.add(()=>{const{stageTransitingTo:i}=se();if(i===null)return;const e=Wn(Ur).indexOf(i)>=Wn(Ur).indexOf(se().stage);e&&(xt.position.x+=.01+Math.max(0,xt.position.x)*.08,jt.rotateOnWorldAxis(new P(0,1,0),-.02),jt.rotateOnWorldAxis(new P(0,0,1),.003),jt.position.z-=.01),(xt.position.x>2||!e)&&ng.play(()=>{xt.position.x=0,jt.position.set(...tg)})});const ND=null;{const i=m2(),e={render:0,update:0};let t=0;mn.setAnimationLoop(n=>{const r=!se().transcending&&!i(),s=!se().transcending&&!vi.getState().powerSaveMode;if(ND?.update(),!r)e.update=Date.now();else{const o=Math.floor((n-e.update)/(1e3/qo));e.update+=o*(1e3/qo);for(let a=0;a<o;a++)Kn.forEach(l=>l(t)),t++}if(!s)e.render=Date.now();else{const o=n-e.render;e.render=n,s&&ut.forEach(a=>a(n,o,jt))}r&&s&&se().stageTransitingTo===null&&(jt.position.z=xt.position.z,jt.lookAt(se().stage==="Mothership"?new P(.5,0,xt.position.z):new P(0,0,xt.position.z)),jt.rotation.x+=xt.userData.velocity.x*.05,jt.rotation.y-=Math.abs(xt.userData.velocity.y*.02)),s&&(Im.forEach(o=>o()),Ds.render())})}const qc=()=>{const i=document.querySelector("audio#rainAudio");i.loop=!0,i.play()};window.addEventListener("click",qc);window.addEventListener("keydown",qc);qc();se().addTutorial("wasd");window.dispatchEvent(new UIEvent("resize"));K2();
