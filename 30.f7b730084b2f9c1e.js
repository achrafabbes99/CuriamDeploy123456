(self.webpackChunkegret_angular_latest_test=self.webpackChunkegret_angular_latest_test||[]).push([[30],{35030:(G,U,y)=>{"use strict";y.r(U),y.d(U,{AppTourModule:()=>$});var Y=y(96814),F=y(35420),M=y(32296),N=y(95195),W=y(84966),e=y(65879),I=y(22939);const P=function(){return{title:"Step one",content:"This is step description.",target:"areaOne",placement:"left",xOffset:10}},Q=function(){return{title:"Step Two",content:"This is step description.",target:"areaTwo",placement:"left",xOffset:15}},B=function(h,L){return[h,L]},v=function(h){return{id:"demo-tour",showPrevButton:!0,steps:h}},j=[{path:"",component:(()=>{class h{constructor(S){this.snackBar=S}ngOnInit(){}ngOnDestroy(){W.endTour(!0)}tourSteps(){let S=this;return{id:"demo-tour",showPrevButton:!0,onEnd:function(){S.snackBar.open("User tour ended!","close",{duration:3e3})},onClose:function(){S.snackBar.open("You just closed User Tour!","close",{duration:3e3})},steps:[{title:"Step one",content:"This is step description.",target:"areaOne",placement:"left",xOffset:10},{title:"Define your steps",content:"This is step description.",target:document.querySelector("#areaOne code"),placement:"left",xOffset:0,yOffset:-10},{title:"Invoke startTour function",content:"This is step description.",target:document.querySelector("#areaTwo code"),placement:"left",xOffset:15,yOffset:-10}]}}startTour(){W.endTour(!0),W.startTour(this.tourSteps())}}return h.\u0275fac=function(S){return new(S||h)(e.Y36(I.ux))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-app-tour"]],decls:28,vars:14,consts:[[1,"flex","flex-wrap"],[1,"w-full","md:w-1/3"],[1,"p-4"],[1,"!mb-2"],["color","primary","mat-raised-button","",3,"click"],["id","areaOne",1,"p-4"],[1,"m-0"],[1,"!px-0"],["id","areaTwo",1,"p-4"],[1,"!mb-4"]],template:function(S,Z){1&S&&(e.TgZ(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-title",3),e._uU(4,"Example User Tour"),e.qZA(),e.TgZ(5,"mat-card-subtitle",3),e._uU(6,"Click this button to start a demo Tour."),e.qZA(),e.TgZ(7,"mat-card-content")(8,"button",4),e.NdJ("click",function(){return Z.startTour()}),e._uU(9,"Start Tour"),e.qZA()()()(),e.TgZ(10,"div",1)(11,"mat-card",5)(12,"mat-card-title",6),e._uU(13,"Define your steps"),e.qZA(),e.TgZ(14,"mat-card-content",7)(15,"pre"),e._uU(16,"        "),e.TgZ(17,"code"),e._uU(18),e.ALo(19,"json"),e.qZA(),e._uU(20,"\n        "),e.qZA()()()(),e.TgZ(21,"div",1)(22,"mat-card",8)(23,"mat-card-title",9),e._uU(24,"Initialize tour"),e.qZA(),e.TgZ(25,"mat-card-content",7)(26,"code"),e._uU(27," hopscotch.startTour(this.steps) "),e.qZA()()()()()),2&S&&(e.xp6(17),e.Udp("display","block"),e.xp6(1),e.hij("steps = ",e.lcZ(19,5,e.VKq(12,v,e.WLB(9,B,e.DdM(7,P),e.DdM(8,Q)))),"\n        "),e.xp6(8),e.Udp("display","block"))},dependencies:[N.a8,N.dn,N.$j,N.n5,M.lW,Y.Ts]}),h})(),data:{title:"User Tour"}}];let $=(()=>{class h{}return h.\u0275fac=function(S){return new(S||h)},h.\u0275mod=e.oAB({type:h}),h.\u0275inj=e.cJS({imports:[Y.ez,N.QW,M.ot,F.Bz.forChild(j)]}),h})()},84966:function(G){G.exports=function(){"use strict";var U,y,Y,F,M,N,W,e,I,P,B,v,w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j="bubble_default",$=window.Sizzle||null,h="undefined",L=!1,S=(typeof jQuery>"u"?"undefined":w(jQuery))!==h,Z=!1,J=!1,K=/^[a-zA-Z]+[a-zA-Z0-9_-]*$/,tt={left:"right",right:"left"};try{w(window.sessionStorage)!==h&&(Z=!0,sessionStorage.setItem("hopscotch.test.storage","ok"),sessionStorage.removeItem("hopscotch.test.storage"),J=!0)}catch{}return B={smoothScroll:!0,scrollDuration:1e3,scrollTopMargin:200,showCloseButton:!0,showPrevButton:!1,showNextButton:!0,bubbleWidth:280,bubblePadding:15,arrowWidth:20,skipIfNoElement:!0,isRtl:!1,cookieName:"hopscotch.tour.state"},Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),(e={addClass:function(t,o){var n,i,s,l;if(t.className){for(i=o.split(/\s+/),n=" "+t.className+" ",s=0,l=i.length;l>s;++s)n.indexOf(" "+i[s]+" ")<0&&(n+=i[s]+" ");t.className=n.replace(/^\s+|\s+$/g,"")}else t.className=o},removeClass:function(t,o){var n,i,s,l;for(i=o.split(/\s+/),n=" "+t.className+" ",s=0,l=i.length;l>s;++s)n=n.replace(" "+i[s]+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")},hasClass:function(t,o){return!!t.className&&-1!==(" "+t.className+" ").indexOf(" "+o+" ")},getPixelValue:function(t){var o=typeof t>"u"?"undefined":w(t);return"number"===o?t:"string"===o?parseInt(t,10):0},valOrDefault:function(t,o){return(typeof t>"u"?"undefined":w(t))!==h?t:o},invokeCallbackArrayHelper:function(t){var o;return Array.isArray(t)&&"function"==typeof(o=P[t[0]])?o.apply(this,t.slice(1)):void 0},invokeCallbackArray:function(t){var o,n;if(Array.isArray(t)){if("string"==typeof t[0])return e.invokeCallbackArrayHelper(t);for(o=0,n=t.length;n>o;++o)e.invokeCallback(t[o])}},invokeCallback:function(t){return"function"==typeof t?t():"string"==typeof t&&P[t]?P[t]():e.invokeCallbackArray(t)},invokeEventCallbacks:function(t,o){var n,i,s=I[t];if(o)return this.invokeCallback(o);for(n=0,i=s.length;i>n;++n)this.invokeCallback(s[n].cb)},getScrollTop:function(){return w(window.pageYOffset)!==h?window.pageYOffset:document.documentElement.scrollTop},getScrollLeft:function(){return w(window.pageXOffset)!==h?window.pageXOffset:document.documentElement.scrollLeft},getWindowHeight:function(){return window.innerHeight||document.documentElement.clientHeight},addEvtListener:function(t,o,n){return t?t.addEventListener?t.addEventListener(o,n,!1):t.attachEvent("on"+o,n):void 0},removeEvtListener:function(t,o,n){return t?t.removeEventListener?t.removeEventListener(o,n,!1):t.detachEvent("on"+o,n):void 0},documentIsReady:function(){return"complete"===document.readyState},evtPreventDefault:function(t){t.preventDefault?t.preventDefault():event&&(event.returnValue=!1)},extend:function(t,o){var n;for(n in o)o.hasOwnProperty(n)&&(t[n]=o[n])},getStepTargetHelper:function(t){var o=document.getElementById(t);if(o)return o;if(S)return(o=jQuery(t)).length?o[0]:null;if($)return(o=new $(t)).length?o[0]:null;if(document.querySelector)try{return document.querySelector(t)}catch{}return/^#[a-zA-Z][\w-_:.]*$/.test(t)?document.getElementById(t.substring(1)):null},getStepTarget:function(t){var o;if(!t||!t.target)return null;if("string"==typeof t.target)return e.getStepTargetHelper(t.target);if(Array.isArray(t.target)){var n,i;for(n=0,i=t.target.length;i>n;n++)if("string"==typeof t.target[n]&&(o=e.getStepTargetHelper(t.target[n])))return o;return null}return t.target},getI18NString:function(t){return M[t]||F[t]},setState:function(t,o,n){var i,s="";if(Z&&J)try{sessionStorage.setItem(t,o)}catch{J=!1,this.setState(t,o,n)}else Z&&sessionStorage.removeItem(t),n&&((i=new Date).setTime(i.getTime()+24*n*60*60*1e3),s="; expires="+i.toGMTString()),document.cookie=t+"="+o+s+"; path=/"},getState:function(t){var o,n,i,s=t+"=",l=document.cookie.split(";");if(Z&&(i=sessionStorage.getItem(t)))return i;for(o=0;o<l.length;o++){for(n=l[o];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(s)){i=n.substring(s.length,n.length);break}}return i},clearState:function(t){Z?sessionStorage.removeItem(t):this.setState(t,"",-1)},normalizePlacement:function(t){!t.placement&&t.orientation&&(t.placement=t.orientation)},flipPlacement:function(t){if(t.isRtl&&!t._isFlipped){var o,n,i=["orientation","placement"];for(n in t.xOffset&&(t.xOffset=-1*this.getPixelValue(t.xOffset)),i)t.hasOwnProperty(o=i[n])&&tt.hasOwnProperty(t[o])&&(t[o]=tt[t[o]]);t._isFlipped=!0}}}).addEvtListener(window,"load",function(){L&&v.startTour()}),I={next:[],prev:[],start:[],end:[],show:[],error:[],close:[]},P={},F={stepNums:null,nextBtn:"Next",prevBtn:"Back",doneBtn:"Done",skipBtn:"Skip",closeTooltip:"Close"},M={},(y=function(t){this.init(t)}).prototype={isShowing:!1,currStep:void 0,setPosition:function(t){var o,n,i,s,l,d,f,T=e.getStepTarget(t),C=this.element,b=this.arrowEl,k=t.isRtl?"right":"left";if(e.flipPlacement(t),e.normalizePlacement(t),n=C.offsetWidth,o=C.offsetHeight,e.removeClass(C,"fade-in-down fade-in-up fade-in-left fade-in-right"),i=T.getBoundingClientRect(),f=t.isRtl?i.right-n:i.left,"top"===t.placement)s=i.top-o-this.opt.arrowWidth,l=f;else if("bottom"===t.placement)s=i.bottom+this.opt.arrowWidth,l=f;else if("left"===t.placement)s=i.top,l=i.left-n-this.opt.arrowWidth;else{if("right"!==t.placement)throw new Error("Bubble placement failed because step.placement is invalid or undefined!");s=i.top,l=i.right+this.opt.arrowWidth}(d="center"!==t.arrowOffset?e.getPixelValue(t.arrowOffset):t.arrowOffset)?"top"===t.placement||"bottom"===t.placement?(b.style.top="",b.style[k]="center"===d?Math.floor(n/2-b.offsetWidth/2)+"px":d+"px"):("left"===t.placement||"right"===t.placement)&&(b.style[k]="",b.style.top="center"===d?Math.floor(o/2-b.offsetHeight/2)+"px":d+"px"):(b.style.top="",b.style[k]=""),"center"===t.xOffset?l=i.left+T.offsetWidth/2-n/2:l+=e.getPixelValue(t.xOffset),"center"===t.yOffset?s=i.top+T.offsetHeight/2-o/2:s+=e.getPixelValue(t.yOffset),t.fixedElement||(s+=e.getScrollTop(),l+=e.getScrollLeft()),C.style.position=t.fixedElement?"fixed":"absolute",C.style.top=s+"px",C.style.left=l+"px"},render:function(t,o,n){var i,s,l,d,f,T,C,b,k,O,R=this.element;if(t?this.currStep=t:this.currStep&&(t=this.currStep),this.opt.isTourBubble?(d=v.getCurrTour())&&(s=d.customData,i=d.customRenderer,t.isRtl=t.hasOwnProperty("isRtl")?t.isRtl:d.hasOwnProperty("isRtl")?d.isRtl:this.opt.isRtl,l=d.unsafe,Array.isArray(d.steps)&&(T=this._getStepI18nNum(this._getStepNum((f=d.steps.length)-1)),b=this._getStepNum(o)===this._getStepNum(f-1))):(s=t.customData,i=t.customRenderer,l=t.unsafe,t.isRtl=t.hasOwnProperty("isRtl")?t.isRtl:this.opt.isRtl),C=e.getI18NString(b?"doneBtn":t.showSkip?"skipBtn":"nextBtn"),e.flipPlacement(t),e.normalizePlacement(t),this.placement=t.placement,O={i18n:{prevBtn:e.getI18NString("prevBtn"),nextBtn:C,closeTooltip:e.getI18NString("closeTooltip"),stepNum:this._getStepI18nNum(this._getStepNum(o)),numSteps:T},buttons:{showPrev:e.valOrDefault(t.showPrevButton,this.opt.showPrevButton)&&this._getStepNum(o)>0,showNext:e.valOrDefault(t.showNextButton,this.opt.showNextButton),showCTA:e.valOrDefault(t.showCTAButton&&t.ctaLabel,!1),ctaLabel:t.ctaLabel,showClose:e.valOrDefault(this.opt.showCloseButton,!0)},step:{num:o,isLast:e.valOrDefault(b,!1),title:t.title||"",content:t.content||"",isRtl:t.isRtl,placement:t.placement,padding:e.valOrDefault(t.padding,this.opt.bubblePadding),width:e.getPixelValue(t.width)||this.opt.bubbleWidth,customData:t.customData||{}},tour:{isTour:this.opt.isTourBubble,numSteps:f,unsafe:e.valOrDefault(l,!1),customData:s||{}}},"function"==typeof i)R.innerHTML=i(O);else if("string"==typeof i){if(!v.templates||"function"!=typeof v.templates[i])throw new Error('Bubble rendering failed - template "'+i+'" is not a function.');R.innerHTML=v.templates[i](O)}else if(N)R.innerHTML=N(O);else{if(!v.templates||"function"!=typeof v.templates[j])throw new Error('Bubble rendering failed - template "'+j+'" is not a function.');R.innerHTML=v.templates[j](O)}var g,x=R.children,z=x.length;for(k=0;z>k;k++)e.hasClass(g=x[k],"hopscotch-arrow")&&(this.arrowEl=g);return R.style.zIndex="number"==typeof t.zindex?t.zindex:"",this._setArrow(t.placement),this.hide(!1),this.setPosition(t),n&&n(!t.fixedElement),this},_getStepNum:function(t){var n,i=0,s=v.getSkippedStepsIndexes(),l=s.length;for(n=0;l>n;n++)t>s[n]&&i++;return t-i},_getStepI18nNum:function(t){var o=e.getI18NString("stepNums");return o&&t<o.length?t=o[t]:t+=1,t},_setArrow:function(t){e.removeClass(this.arrowEl,"down up right left"),"top"===t?e.addClass(this.arrowEl,"down"):"bottom"===t?e.addClass(this.arrowEl,"up"):"left"===t?e.addClass(this.arrowEl,"right"):"right"===t&&e.addClass(this.arrowEl,"left")},_getArrowDirection:function(){return"top"===this.placement?"down":"bottom"===this.placement?"up":"left"===this.placement?"right":"right"===this.placement?"left":void 0},show:function(){var t=this,o="fade-in-"+this._getArrowDirection();return e.removeClass(this.element,"hide"),e.addClass(this.element,o),setTimeout(function(){e.removeClass(t.element,"invisible")},50),setTimeout(function(){e.removeClass(t.element,o)},1e3),this.isShowing=!0,this},hide:function(t){var o=this.element;return t=e.valOrDefault(t,!0),o.style.top="",o.style.left="",t?(e.addClass(o,"hide"),e.removeClass(o,"invisible")):(e.removeClass(o,"hide"),e.addClass(o,"invisible")),e.removeClass(o,"animate fade-in-up fade-in-down fade-in-right fade-in-left"),this.isShowing=!1,this},destroy:function(){var t=this.element;t&&t.parentNode.removeChild(t),e.removeEvtListener(t,"click",this.clickCb)},_handleBubbleClick:function(t){var n;if("cta"===(n=function o(f){return f===t.currentTarget?null:e.hasClass(f,"hopscotch-cta")?"cta":e.hasClass(f,"hopscotch-next")?"next":e.hasClass(f,"hopscotch-prev")?"prev":e.hasClass(f,"hopscotch-close")?"close":o(f.parentElement)}((t=t||window.event).target||t.srcElement)))this.opt.isTourBubble||v.getCalloutManager().removeCallout(this.currStep.id),this.currStep.onCTA&&e.invokeCallback(this.currStep.onCTA);else if("next"===n)v.nextStep(!0);else if("prev"===n)v.prevStep(!0);else if("close"===n){if(this.opt.isTourBubble){var d=v.getCurrStepNum()===v.getCurrTour().steps.length-1;e.invokeEventCallbacks("close"),v.endTour(!0,d)}else this.opt.onClose&&e.invokeCallback(this.opt.onClose),this.opt.id&&!this.opt.isTourBubble?v.getCalloutManager().removeCallout(this.opt.id):this.destroy();e.evtPreventDefault(t)}},init:function(t){var n,i,s,l=document.createElement("div"),d=this,f=!1;this.element=l,s={showPrevButton:B.showPrevButton,showNextButton:B.showNextButton,bubbleWidth:B.bubbleWidth,bubblePadding:B.bubblePadding,arrowWidth:B.arrowWidth,isRtl:B.isRtl,showNumber:!0,isTourBubble:!0},t=(typeof t>"u"?"undefined":w(t))===h?{}:t,e.extend(s,t),this.opt=s,l.className="hopscotch-bubble animated",s.isTourBubble?(i=v.getCurrTour())&&e.addClass(l,"tour-"+i.id):e.addClass(l,"hopscotch-callout no-number"),e.addEvtListener(window,"resize",function(){!f&&d.isShowing&&(f=!0,setTimeout(function(){d.setPosition(d.currStep),f=!1},100))}),this.clickCb=function(T){d._handleBubbleClick(T)},e.addEvtListener(l,"click",this.clickCb),this.hide(),e.documentIsReady()?document.body.appendChild(l):(document.addEventListener?(n=function(){document.removeEventListener("DOMContentLoaded",n),window.removeEventListener("load",n),document.body.appendChild(l)},document.addEventListener("DOMContentLoaded",n,!1)):(n=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",n),window.detachEvent("onload",n),document.body.appendChild(l))},document.attachEvent("onreadystatechange",n)),e.addEvtListener(window,"load",n))}},Y=function(){var t={},o={};this.createCallout=function(n){var i;if(!n.id)throw new Error("Must specify a callout id.");if(!K.test(n.id))throw new Error("Callout ID is using an invalid format. Use alphanumeric, underscores, and/or hyphens only. First character must be a letter.");if(t[n.id])throw new Error("Callout by that id already exists. Please choose a unique id.");if(!e.getStepTarget(n))throw new Error("Must specify existing target element via 'target' option.");return n.showNextButton=n.showPrevButton=!1,n.isTourBubble=!1,i=new y(n),t[n.id]=i,o[n.id]=n,i.render(n,null,function(){i.show(),n.onShow&&e.invokeCallback(n.onShow)}),i},this.getCallout=function(n){return t[n]},this.removeAllCallouts=function(){var n;for(n in t)t.hasOwnProperty(n)&&this.removeCallout(n)},this.removeCallout=function(n){var i=t[n];t[n]=null,o[n]=null,i&&i.destroy()},this.refreshCalloutPositions=function(){var n,i,s;for(n in t)t.hasOwnProperty(n)&&o.hasOwnProperty(n)&&(s=o[n],(i=t[n])&&s&&i.setPosition(s))}},U=function(t){var o,n,i,s,l,d,f,T,C=this,b={},k=[],O=function(r){return o&&o.element&&o.element.parentNode||(o=new y(i)),r&&e.extend(o.opt,{bubblePadding:g("bubblePadding"),bubbleWidth:g("bubbleWidth"),showNextButton:g("showNextButton"),showPrevButton:g("showPrevButton"),showCloseButton:g("showCloseButton"),arrowWidth:g("arrowWidth"),isRtl:g("isRtl")}),o},g=function(r){return typeof i>"u"?B[r]:e.valOrDefault(i[r],B[r])},x=function(){return!s||0>l||l>=s.steps.length?null:s.steps[l]},z=function(){C.nextStep()},et=function r(u,c){var p,m;l+u>=0&&l+u<s.steps.length?(l+=u,m=function(){e.getStepTarget(p)?(b[l]&&delete b[l],c(l)):(b[l]=!0,e.invokeEventCallbacks("error"),r(u,c))},(p=x()).delay?setTimeout(m,p.delay):m()):c(-1)},nt=function(r,u){var c,a,p,m,E=O(),q=this;if(E.hide(),r=e.valOrDefault(r,!0),(c=x()).nextOnTargetClick&&e.removeEvtListener(e.getStepTarget(c),"click",z),a=c,m=function(A){var D;if(-1===A)return this.endTour(!0);if(r&&(D=u>0?e.invokeEventCallbacks("next",a.onNext):e.invokeEventCallbacks("prev",a.onPrev)),A===l){if(p)return void rt();(D=e.valOrDefault(D,!0))?this.showStep(A):this.endTour(!1)}},!(p=u>0?a.multipage:l>0&&s.steps[l-1].multipage)&&g("skipIfNoElement"))et(u,function(A){m.call(q,A)});else if(l+u>=0&&l+u<s.steps.length){if(l+=u,c=x(),!e.getStepTarget(c)&&!p)return e.invokeEventCallbacks("error"),this.endTour(!0,!1);m.call(this,l)}else if(l+u===s.steps.length)return this.endTour();return this},ft=function(r){var u,c,a,p={};for(u in r)r.hasOwnProperty(u)&&"id"!==u&&"steps"!==u&&(p[u]=r[u]);return T.call(this,p,!0),(c=e.getState(g("cookieName")))&&(a=c.split(":"),d=a[0],f=a[1],a.length>2&&(k=a[2].split(",")),f=parseInt(f,10)),this},ot=function(r){function u(){a.show(),e.invokeEventCallbacks("show",c.onShow)}var c=s.steps[r],a=O(),p=e.getStepTarget(c);l!==r&&x().nextOnTargetClick&&e.removeEvtListener(e.getStepTarget(x()),"click",z),l=r,a.hide(!1),a.render(c,r,function(m){m?function(r){var u,c,a,p,m,E,A=O().element,D=e.getPixelValue(A.style.top),it=D+e.getPixelValue(A.offsetHeight),st=e.getStepTarget(x()).getBoundingClientRect(),lt=st.top+e.getScrollTop(),ut=st.bottom+e.getScrollTop(),X=lt>D?D:lt,gt=it>ut?it:ut,V=e.getScrollTop(),vt=V+e.getWindowHeight(),H=X-g("scrollTopMargin");X>=V&&(X<=V+g("scrollTopMargin")||vt>=gt)?r&&r():g("smoothScroll")?(typeof YAHOO>"u"?"undefined":w(YAHOO))!==h&&w(YAHOO.env)!==h&&w(YAHOO.env.ua)!==h&&w(YAHOO.util)!==h&&w(YAHOO.util.Scroll)!==h?(u=YAHOO.env.ua.webkit?document.body:document.documentElement,a=YAHOO.util.Easing?YAHOO.util.Easing.easeOut:void 0,(c=new YAHOO.util.Scroll(u,{scroll:{to:[0,H]}},g("scrollDuration")/1e3,a)).onComplete.subscribe(r),c.animate()):S?jQuery("body, html").animate({scrollTop:H},g("scrollDuration"),r):(0>H&&(H=0),p=V>X?-1:1,m=Math.abs(V-H)/(g("scrollDuration")/10),(E=function(){var ct=e.getScrollTop(),_=ct+p*m;return p>0&&_>=H||0>p&&H>=_?(_=H,r&&r(),void window.scrollTo(0,_)):(window.scrollTo(0,_),e.getScrollTop()===ct?void(r&&r()):void setTimeout(E,10))})()):(window.scrollTo(0,H),r&&r())}(u):u(),c.nextOnTargetClick&&e.addEvtListener(p,"click",z)}),rt()},rt=function(){var r=s.id+":"+l,u=v.getSkippedStepsIndexes();u&&u.length>0&&(r+=":"+u.join(",")),e.setState(g("cookieName"),r,1)};this.getCalloutManager=function(){return(typeof n>"u"?"undefined":w(n))===h&&(n=new Y),n},this.startTour=function(r,u){var a,p={},m=this;if(!s){if(!r)throw new Error("Tour data is required for startTour.");if(!r.id||!K.test(r.id))throw new Error("Tour ID is using an invalid format. Use alphanumeric, underscores, and/or hyphens only. First character must be a letter.");s=r,ft.call(this,r)}if((typeof u>"u"?"undefined":w(u))!==h){if(u>=s.steps.length)throw new Error("Specified step number out of bounds.");a=u}if(!e.documentIsReady())return L=!0,this;if(typeof a>"u"&&s.id===d&&(typeof f>"u"?"undefined":w(f))!==h){if(a=f,k.length>0)for(var E=0,q=k.length;q>E;E++)p[k[E]]=!0}else a||(a=0);return function(r,u,c){var a,p;if(l=r||0,b=u||{},a=x(),p=e.getStepTarget(a))c(l);else if(!p){if(e.invokeEventCallbacks("error"),b[l]=!0,g("skipIfNoElement"))return void et(1,c);c(l=-1)}}(a,p,function(A){return-1!==A&&e.getStepTarget(s.steps[A])?(e.invokeEventCallbacks("start"),O().hide(!1),m.isActive=!0,void(e.getStepTarget(x())?m.showStep(A):(e.invokeEventCallbacks("error"),g("skipIfNoElement")&&m.nextStep(!1)))):void m.endTour(!1,!1)}),this},this.showStep=function(r){var u=s.steps[r],c=l;return e.getStepTarget(u)?(u.delay?setTimeout(function(){ot(r)},u.delay):ot(r),this):(l=r,e.invokeEventCallbacks("error"),void(l=c))},this.prevStep=function(r){return nt.call(this,r,-1),this},this.nextStep=function(r){return nt.call(this,r,1),this},this.endTour=function(r,u){var c,a=O();return r=e.valOrDefault(r,!0),u=e.valOrDefault(u,!0),s&&(c=x())&&c.nextOnTargetClick&&e.removeEvtListener(e.getStepTarget(c),"click",z),l=0,f=void 0,a.hide(),r&&e.clearState(g("cookieName")),this.isActive&&(this.isActive=!1,s&&u&&e.invokeEventCallbacks("end")),this.removeCallbacks(null,!0),this.resetDefaultOptions(),o&&(o.destroy(),o=null),s=null,this},this.getCurrTour=function(){return s},this.getCurrTarget=function(){return e.getStepTarget(x())},this.getCurrStepNum=function(){return l},this.getSkippedStepsIndexes=function(){var r,u=[];for(r in b)u.push(r);return u},this.refreshBubblePosition=function(){var r=x();return r&&O().setPosition(r),this.getCalloutManager().refreshCalloutPositions(),this},this.listen=function(r,u,c){return r&&I[r].push({cb:u,fromTour:c}),this},this.unlisten=function(r,u){var c,a,p=I[r];for(c=0,a=p.length;a>c;++c)p[c].cb===u&&p.splice(c,1);return this},this.removeCallbacks=function(r,u){var c,a,p,m;for(m in I)if(!r||r===m)if(u)for(a=0,p=(c=I[m]).length;p>a;++a)c[a].fromTour&&(c.splice(a--,1),--p);else I[m]=[];return this},this.registerHelper=function(r,u){"string"==typeof r&&"function"==typeof u&&(P[r]=u)},this.unregisterHelper=function(r){P[r]=null},this.invokeHelper=function(r){var u,c,a=[];for(u=1,c=arguments.length;c>u;++u)a.push(arguments[u]);P[r]&&P[r].call(null,a)},this.setCookieName=function(r){return i.cookieName=r,this},this.resetDefaultOptions=function(){return i={},this},this.resetDefaultI18N=function(){return M={},this},this.getState=function(){return e.getState(g("cookieName"))},T=function(r,u){var a,p,m,E=["next","prev","start","end","show","error","close"];for(i||this.resetDefaultOptions(),e.extend(i,r),r&&e.extend(M,r.i18n),p=0,m=E.length;m>p;++p)r[a="on"+E[p].charAt(0).toUpperCase()+E[p].substring(1)]&&this.listen(E[p],r[a],u);return O(!0),this},this.configure=function(r){return T.call(this,r,!1)},this.setRenderer=function(r){var u=typeof r>"u"?"undefined":w(r);return"string"===u?(j=r,N=void 0):"function"===u&&(N=r),this},this.setEscaper=function(r){return"function"==typeof r&&(W=r),this},function(r){r&&this.configure(r)}.call(this,t)},v=new U,function(){var t_escape=function(o){return W?W(o):null==o?"":(""+o).replace(new RegExp("[&<>\"']","g"),function(n){return"&"==n?"&amp;":"<"==n?"&lt;":">"==n?"&gt;":'"'==n?"&quot;":"'"==n?"&#x27;":void 0})};this.templates=this.templates||{},this.templates.bubble_default=function(o){function n(C,b){return b?t_escape(C):C}var i,s="";s+="\n";var l=o.i18n,d=o.buttons,f=o.step,T=o.tour;return s+='\n<div class="hopscotch-bubble-container" style="width: '+(null==(i=f.width)?"":i)+"px; padding: "+(null==(i=f.padding)?"":i)+'px;">\n  ',T.isTour&&(s+='<span class="hopscotch-bubble-number">'+(null==(i=l.stepNum)?"":i)+"</span>"),s+='\n  <div class="hopscotch-bubble-content">\n    ',""!==f.title&&(s+='<h3 class="hopscotch-title">'+(null==(i=n(f.title,T.unsafe))?"":i)+"</h3>"),s+="\n    ",""!==f.content&&(s+='<div class="hopscotch-content">'+(null==(i=n(f.content,T.unsafe))?"":i)+"</div>"),s+='\n  </div>\n  <div class="hopscotch-actions">\n    ',d.showPrev&&(s+='<button class="hopscotch-nav-button prev hopscotch-prev">'+(null==(i=l.prevBtn)?"":i)+"</button>"),s+="\n    ",d.showCTA&&(s+='<button class="hopscotch-nav-button next hopscotch-cta">'+(null==(i=d.ctaLabel)?"":i)+"</button>"),s+="\n    ",d.showNext&&(s+='<button class="hopscotch-nav-button next hopscotch-next">'+(null==(i=l.nextBtn)?"":i)+"</button>"),s+="\n  </div>\n  ",d.showClose&&(s+='<button class="hopscotch-bubble-close hopscotch-close">'+(null==(i=l.closeTooltip)?"":i)+"</button>"),s+'\n</div>\n<div class="hopscotch-bubble-arrow-container hopscotch-arrow">\n  <div class="hopscotch-bubble-arrow-border"></div>\n  <div class="hopscotch-bubble-arrow"></div>\n</div>\n'}}.call(v),v}()}}]);