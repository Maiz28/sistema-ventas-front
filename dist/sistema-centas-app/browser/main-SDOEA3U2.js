import{a as y}from"./chunk-TZDT7URS.js";import"./chunk-FGYYGVG3.js";import{C as Ke,D as et,E as tt,Z as it,b as Ue,c as $e,d as Ge,f as I,g as U,h as Xe,i as Ye,j as Qe,t as We,u as Je}from"./chunk-C43BA76M.js";import{b as Re,c as Pe,d as Te,e as Ae,f as Le,g as je,h as ze,i as Ve,j as He,k as Be,l as H,m as q}from"./chunk-MFKGNWZG.js";import{c as qe,d as Z,f as B,g as Ze,h as X}from"./chunk-IX6G3U3V.js";import{$a as de,Ba as le,C as ie,Da as ce,Db as a,Dc as Ne,Eb as s,Fb as h,Gb as ye,Hb as Ce,I as P,Ja as pe,Jb as E,Lc as z,M as ne,Mb as N,Mc as V,Ob as b,Oc as De,Pb as Se,Pc as Fe,Qb as xe,Sb as _e,Tb as we,Ub as Ie,Vb as D,W as M,Wa as me,Wb as c,Xb as Me,Yb as w,Z as re,Za as p,_a as v,_b as Oe,a as K,aa as T,ac as L,b as ee,ba as x,bb as ue,bc as j,cc as ke,da as oe,db as fe,fb as he,ga as d,gb as ge,j as F,k as te,ka as u,la as _,na as ae,oa as G,pc as Ee,rb as f,sa as se,t as R,ta as O,tb as m,ua as k,ub as A,vb as ve,wb as be}from"./chunk-M7QQO3YR.js";var nt=(i,e)=>d(y).token$.pipe(P(1),R(t=>!t));var rt=(i,e)=>d(y).token$.pipe(P(1),R(t=>t?!0:(d(Be).createUrlTree(["/login"]),!1)));var yt=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:()=>import("./chunk-X77M6RAZ.js").then(i=>i.HomeModule)},{path:"notFound",loadChildren:()=>import("./chunk-5MEMLXPG.js").then(i=>i.NotFoundModule)},{path:"admin",loadChildren:()=>import("./chunk-BX4P23T6.js").then(i=>i.AdminModule),canActivate:[rt]},{path:"login",loadChildren:()=>import("./chunk-P5JNKGJ6.js").then(i=>i.LoginModule),canActivate:[nt]}],ot=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=_({type:e}),e.\u0275inj=x({imports:[q.forRoot(yt),q]});let i=e;return i})();var St=["overlay"],xt=["*"];function _t(i,e){i&1&&h(0,"div")}function wt(i,e){if(i&1&&(a(0,"div"),f(1,_t,1,0,"div",6),s()),i&2){let r=b(2);be(r.spinner.class),A("color",r.spinner.color),p(),m("ngForOf",r.spinner.divArray)}}function It(i,e){if(i&1&&(h(0,"div",7),L(1,"safeHtml")),i&2){let r=b(2);m("innerHTML",j(1,1,r.template),me)}}function Mt(i,e){if(i&1&&(a(0,"div",2,0),f(2,wt,2,5,"div",3)(3,It,2,3,"div",4),a(4,"div",5),xe(5),s()()),i&2){let r=b();A("background-color",r.spinner.bdColor)("z-index",r.spinner.zIndex)("position",r.spinner.fullScreen?"fixed":"absolute"),m("@.disabled",r.disableAnimation)("@fadeIn","in"),p(2),m("ngIf",!r.template),p(),m("ngIf",r.template),p(),A("z-index",r.spinner.zIndex)}}var Ot={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},Y={BD_COLOR:"rgba(51,51,51,0.8)",SPINNER_COLOR:"#fff",Z_INDEX:99999},Q="primary",S=class i{constructor(e){Object.assign(this,e)}static create(e){return!e?.template&&!e?.type&&console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),new i(e)}},W=(()=>{let e=class e{constructor(){this.spinnerObservable=new te(null)}getSpinner(t){return this.spinnerObservable.asObservable().pipe(ie(n=>n&&n.name===t))}show(t=Q,n){return new Promise((o,l)=>{setTimeout(()=>{n&&Object.keys(n).length?(n.name=t,this.spinnerObservable.next(new S(ee(K({},n),{show:!0}))),o(!0)):(this.spinnerObservable.next(new S({name:t,show:!0})),o(!0))},10)})}hide(t=Q,n=10){return new Promise((o,l)=>{setTimeout(()=>{this.spinnerObservable.next(new S({name:t,show:!1})),o(!0)},n)})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),at=new oe("NGX_SPINNER_CONFIG"),kt=(()=>{let e=class e{constructor(t){this._sanitizer=t}transform(t){if(t)return this._sanitizer.bypassSecurityTrustHtml(t)}};e.\u0275fac=function(n){return new(n||e)(v(ze,16))},e.\u0275pipe=ae({name:"safeHtml",type:e,pure:!0,standalone:!0});let i=e;return i})(),st=(()=>{let e=class e{constructor(t,n,o,l){this.spinnerService=t,this.changeDetector=n,this.elementRef=o,this.globalConfig=l,this.disableAnimation=!1,this.spinner=new S,this.ngUnsubscribe=new F,this.setDefaultOptions=()=>{let{type:g}=this.globalConfig??{};this.spinner=S.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??g,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor=Y.BD_COLOR,this.zIndex=Y.Z_INDEX,this.color=Y.SPINNER_COLOR,this.size="large",this.fullScreen=!0,this.name=Q,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}initObservable(){this.spinnerService.getSpinner(this.name).pipe(M(this.ngUnsubscribe)).subscribe(t=>{this.setDefaultOptions(),Object.assign(this.spinner,t),t.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(t){return t===this.elementRef.nativeElement.parentElement?!0:t.parentNode&&this.isSpinnerZone(t.parentNode)}ngOnChanges(t){for(let n in t)if(n){let o=t[n];if(o.isFirstChange())return;typeof o.currentValue<"u"&&o.currentValue!==o.previousValue&&o.currentValue!==""&&(this.spinner[n]=o.currentValue,n==="showSpinner"&&(o.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),n==="name"&&this.initObservable())}}getClass(t,n){this.spinner.divCount=Ot[t],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((l,g)=>g);let o="";switch(n.toLowerCase()){case"small":o="la-sm";break;case"medium":o="la-2x";break;case"large":o="la-3x";break;default:break}return"la-"+t+" "+o}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}};e.\u0275fac=function(n){return new(n||e)(v(W),v(Ee),v(le),v(at,8))},e.\u0275cmp=u({type:e,selectors:[["ngx-spinner"]],viewQuery:function(n,o){if(n&1&&_e(St,5),n&2){let l;we(l=Ie())&&(o.spinnerDOM=l.first)}},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},standalone:!0,features:[se,Oe],ngContentSelectors:xt,decls:1,vars:1,consts:[["overlay",""],["class","ngx-spinner-overlay",3,"background-color","z-index","position",4,"ngIf"],[1,"ngx-spinner-overlay"],[3,"class","color",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[1,"loading-text"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(n,o){n&1&&(Se(),f(0,Mt,6,12,"div",1)),n&2&&m("ngIf",o.spinner.show)},dependencies:[kt,V,z],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],data:{animation:[qe("fadeIn",[Ze("in",B({opacity:1})),X(":enter",[B({opacity:0}),Z(300)]),X(":leave",Z(200,B({opacity:0})))])]},changeDetection:0});let i=e;return i})(),lt=(()=>{let e=class e{static forRoot(t){return{ngModule:e,providers:[{provide:at,useValue:t}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=_({type:e}),e.\u0275inj=x({imports:[Fe]});let i=e;return i})();function Ft(i,e){if(i&1){let r=E();ye(0),a(1,"button",6),N("click",function(){O(r);let n=b();return k(n.onToggleSidenav())}),a(2,"mat-icon"),c(3,"menu"),s()(),Ce()}}function Rt(i,e){i&1&&(a(0,"a",7),c(1,"Iniciar sesi\xF3n"),s())}function Pt(i,e){if(i&1){let r=E();a(0,"button",8),c(1),L(2,"titlecase"),a(3,"mat-icon"),c(4,"expand_more"),s()(),a(5,"mat-menu",null,1)(7,"button",9),N("click",function(){O(r);let n=b();return k(n.onLogout())}),a(8,"mat-icon"),c(9,"logout"),s(),c(10," cerrar sesion"),s()()}if(i&2){let r=D(6),t=b();m("matMenuTriggerFor",r),p(),w(" ",j(2,2,t.data.nombre+" "+t.data.apellidos)," ")}}var mt=(()=>{let e=class e{constructor(t){this.authSvc=t,this.toggleSidenav=new ce,this.isLogged=!1,this.data={},this.destroy$=new F}ngOnInit(){this.authSvc.isLogged$.pipe(M(this.destroy$)).subscribe(t=>{this.isLogged=t,console.log("IsLogged",this.isLogged)}),this.authSvc.tokenData$.pipe(M(this.destroy$)).subscribe(t=>{this.data=t,console.log("Data",this.data)})}onLogout(){this.authSvc.logOut()}onToggleSidenav(){this.toggleSidenav.emit()}ngOnDestroy(){this.destroy$.next({}),this.destroy$.complete()}};e.\u0275fac=function(n){return new(n||e)(v(y))},e.\u0275cmp=u({type:e,selectors:[["app-header"]],outputs:{toggleSidenav:"toggleSidenav"},decls:9,vars:5,consts:[["viewLogOut",""],["lista","matMenu"],[4,"ngIf"],["routerLink","/home"],[1,"spacer"],["mat-button","","color","primary","routerLink","/login",4,"ngIf","ngIfElse"],["mat-icon-button","",3,"click"],["mat-button","","color","primary","routerLink","/login"],["mat-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"]],template:function(n,o){if(n&1&&(a(0,"mat-toolbar"),f(1,Ft,4,0,"ng-container",2),a(2,"span")(3,"a",3),c(4,"Sistema de ventas"),s()(),h(5,"span",4),f(6,Rt,2,0,"a",5),s(),f(7,Pt,11,4,"ng-template",null,0,ke)),n&2){let l=D(8);ve("mat-elevation-z2",!0),p(),m("ngIf",o.isLogged),p(5),m("ngIf",!o.isLogged)("ngIfElse",l)}},dependencies:[V,H,$e,Ue,Ge,I,U,et,Ke,tt,De],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}a[_ngcontent-%COMP%]{text-decoration:none;color:#249cab}"]});let i=e;return i})();var dt=(()=>{let e=class e{constructor(){this.currentYear=new Date().getFullYear()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-footer"]],decls:19,vars:1,consts:[[1,"footer"],[1,"container"],[1,"row"],[1,"col-md-6"],[1,"col-md-6","text-md-rigth"],["href","",1,"me-2"],["href",""],["color","primary"],[1,"col"],[1,"text-muted"]],template:function(n,o){n&1&&(a(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3),c(4," Lorem ipsum dolor sit amet consectetur adipisicing elit. "),s(),a(5,"div",4)(6,"a",5)(7,"mat-icon"),c(8,"facebook"),s()(),a(9,"a",6)(10,"mat-icon",7),c(11,"cruelty_free "),s()()()(),a(12,"div",2)(13,"div",8),h(14,"hr"),s()(),a(15,"div",2)(16,"div",8)(17,"span",9),c(18),s()()()()()),n&2&&(p(18),w("",o.currentYear," Mi empresa"))},dependencies:[I],styles:[".footer[_ngcontent-%COMP%]{position:relative;width:100%;bottom:0;background-color:#f8f8f8;padding:10px 0;text-align:center}"]});let i=e;return i})();function Lt(i,e){if(i&1&&(a(0,"div")(1,"a",2)(2,"mat-icon",3),c(3),s(),a(4,"span"),c(5),s()()()),i&2){let r=e.$implicit;p(),m("routerLink",r.route),p(2),w("",r.icon,"> "),p(2),Me(r.name)}}var ut=(()=>{let e=class e{constructor(){this.menus=[]}ngOnInit(){this.generarMenu()}generarMenu(){this.menus.push({icon:"home",name:"Inicio",route:"/home"},{icon:"manage_accounts",name:"Usuarios",route:"admin/usuarios"},{icon:"category",name:"Categorias",route:"admin/categorias"},{icon:"inventory_2",name:"Productos",route:"admini/productos"},{icon:"shopping_cart",name:"Ventas",route:"admini/ventas"},{icon:"content_paste",name:"Reportes",route:"admini/reportes"})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-sidebar"]],decls:4,vars:1,consts:[["color","primary"],[4,"ngFor","ngForOf"],["mat-list-item","",3,"routerLink"],[1,"me-2"]],template:function(n,o){n&1&&(a(0,"mat-toolbar",0),c(1,` Men\xFA
`),s(),a(2,"mat-nav-list"),f(3,Lt,6,3,"div",1),s()),n&2&&(p(3),m("ngForOf",o.menus))},dependencies:[z,H,I,U,Je,We]});let i=e;return i})();var ft=(()=>{let e=class e{constructor(){this.title="sistema-centas-app"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-root"]],decls:11,vars:1,consts:[["sidenav",""],["mode","push"],[3,"toggleSidenav"],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-rotate",3,"fullScreen"],[2,"color","white"]],template:function(n,o){if(n&1){let l=E();a(0,"mat-sidenav-container")(1,"mat-sidenav",1,0),h(3,"app-sidebar"),s(),a(4,"mat-sidenav-content")(5,"app-header",2),N("toggleSidenav",function(){O(l);let $=D(2);return k($.toggle())}),s(),h(6,"router-outlet")(7,"app-footer"),s()(),a(8,"ngx-spinner",3)(9,"p",4),c(10," Loading... "),s()()}n&2&&(p(8),m("fullScreen",!0))},dependencies:[He,Ye,Qe,Xe,st,mt,dt,ut],styles:["mat-sidenav[_ngcontent-%COMP%]{width:25%}mat-sidenav-container[_ngcontent-%COMP%]{height:100%}"]});let i=e;return i})();var zt="@",Vt=(()=>{let e=class e{constructor(t,n,o,l,g){this.doc=t,this.delegate=n,this.zone=o,this.animationType=l,this.moduleImpl=g,this._rendererFactoryPromise=null,this.scheduler=d(ue,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-XVQ6TIGY.js").then(n=>n)).catch(n=>{throw new re(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:o})=>{this._engine=n(this.animationType,this.doc);let l=new o(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(t,n){let o=this.delegate.createRenderer(t,n);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let l=new J(o);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(g=>{let $=g.createRenderer(t,n);l.use($),this.scheduler?.notify(9)}).catch(g=>{l.use(o)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){de()},e.\u0275prov=T({token:e,factory:e.\u0275fac});let i=e;return i})(),J=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let r of this.replay)r(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,r){return this.delegate.createElement(e,r)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,r){this.delegate.appendChild(e,r)}insertBefore(e,r,t,n){this.delegate.insertBefore(e,r,t,n)}removeChild(e,r,t){this.delegate.removeChild(e,r,t)}selectRootElement(e,r){return this.delegate.selectRootElement(e,r)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,r,t,n){this.delegate.setAttribute(e,r,t,n)}removeAttribute(e,r,t){this.delegate.removeAttribute(e,r,t)}addClass(e,r){this.delegate.addClass(e,r)}removeClass(e,r){this.delegate.removeClass(e,r)}setStyle(e,r,t,n){this.delegate.setStyle(e,r,t,n)}removeStyle(e,r,t){this.delegate.removeStyle(e,r,t)}setProperty(e,r,t){this.shouldReplay(r)&&this.replay.push(n=>n.setProperty(e,r,t)),this.delegate.setProperty(e,r,t)}setValue(e,r){this.delegate.setValue(e,r)}listen(e,r,t){return this.shouldReplay(r)&&this.replay.push(n=>n.listen(e,r,t)),this.delegate.listen(e,r,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(zt)}};function ht(i="animations"){return he("NgAsyncAnimations"),G([{provide:fe,useFactory:(e,r,t)=>new Vt(e,r,t,i),deps:[Ne,Ae,ge]},{provide:pe,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var gt=(i,e)=>{let r=d(W),t=0;return r.show(),t++,e(i).pipe(ne(()=>{t--,t||r.hide()}))};var vt=(i,e)=>{if(i.headers.get("requireToken")){let t=d(y).tokenValue;if(t){let n=i.clone({setHeaders:{auth:`${t}`}});return e(n)}}return e(i)};var bt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=_({type:e,bootstrap:[ft]}),e.\u0275inj=x({providers:[Ve(),ht(),Re(Te(),Pe([gt,vt]))],imports:[je,ot,it,lt]});let i=e;return i})();Le().bootstrapModule(bt,{ngZoneEventCoalescing:!0}).catch(i=>console.error(i));
