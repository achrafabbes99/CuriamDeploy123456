"use strict";(self.webpackChunkegret_angular_latest_test=self.webpackChunkegret_angular_latest_test||[]).push([[159],{43159:(me,w,o)=>{o.r(w),o.d(w,{AppMapModule:()=>ue});var v=o(96814),Y=o(35420),j=o(95195),U=o(59038),n=o(65879),l=o(65619),H=o(65592),W=(o(78645),o(52572),o(94664)),m=(o(48180),o(37398));o(59773);const I=["*"];class d{_clearListeners(){for(const s of this._listeners)s.remove();this._listeners=[]}constructor(s){this._ngZone=s,this._pending=[],this._listeners=[],this._targetStream=new l.X(void 0)}getLazyEmitter(s){return this._targetStream.pipe((0,W.w)(e=>{const i=new H.y(a=>{if(!e)return void this._pending.push({observable:i,observer:a});const r=e.addListener(s,p=>{this._ngZone.run(()=>a.next(p))});if(r)return this._listeners.push(r),()=>r.remove();a.complete()});return i}))}setTarget(s){const e=this._targetStream.value;s!==e&&(e&&(this._clearListeners(),this._pending=[]),this._targetStream.next(s),this._pending.forEach(i=>i.observable.subscribe(i.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}}const y={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"},k="500px",L="500px";let g=(()=>{class t{set center(e){this._center=e}set zoom(e){this._zoom=e}set options(e){this._options=e||y}constructor(e,i,a){if(this._elementRef=e,this._ngZone=i,this._eventManager=new d((0,n.f3M)(n.R0b)),this.height=k,this.width=L,this._options=y,this.mapInitialized=new n.vpe,this.authFailure=new n.vpe,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=(0,v.NF)(a),this._isBrowser){const r=window;this._existingAuthFailureCallback=r.gm_authFailure,r.gm_authFailure=()=>{this._existingAuthFailureCallback&&this._existingAuthFailureCallback(),this.authFailure.emit()}}}ngOnChanges(e){(e.height||e.width)&&this._setSize();const i=this.googleMap;i&&(e.options&&i.setOptions(this._combineOptions()),e.center&&this._center&&i.setCenter(this._center),e.zoom&&null!=this._zoom&&i.setZoom(this._zoom),e.mapTypeId&&this.mapTypeId&&i.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._ngZone.runOutsideAngular(()=>{this.googleMap=new google.maps.Map(this._mapEl,this._combineOptions())}),this._eventManager.setTarget(this.googleMap),this.mapInitialized.emit(this.googleMap))}ngOnDestroy(){this._eventManager.destroy(),this._isBrowser&&(window.gm_authFailure=this._existingAuthFailureCallback)}fitBounds(e,i){this._assertInitialized(),this.googleMap.fitBounds(e,i)}panBy(e,i){this._assertInitialized(),this.googleMap.panBy(e,i)}panTo(e){this._assertInitialized(),this.googleMap.panTo(e)}panToBounds(e,i){this._assertInitialized(),this.googleMap.panToBounds(e,i)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()||null}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_setSize(){if(this._mapEl){const e=this._mapEl.style;e.height=null===this.height?"":D(this.height)||k,e.width=null===this.width?"":D(this.width)||L}}_combineOptions(){const e=this._options||{};return{...e,center:this._center||e.center||y.center,zoom:this._zoom??e.zoom??y.zoom,mapTypeId:this.mapTypeId||e.mapTypeId||y.mapTypeId}}_assertInitialized(){}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.SBq),n.Y36(n.R0b),n.Y36(n.Lbi))},t.\u0275cmp=n.Xpm({type:t,selectors:[["google-map"]],inputs:{height:"height",width:"width",mapTypeId:"mapTypeId",center:"center",zoom:"zoom",options:"options"},outputs:{mapInitialized:"mapInitialized",authFailure:"authFailure",boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],features:[n.TTD],ngContentSelectors:I,decls:2,vars:0,consts:[[1,"map-container"]],template:function(e,i){1&e&&(n.F$t(),n._UZ(0,"div",0),n.Hsn(1))},encapsulation:2,changeDetection:0}),t})();const X=/([A-Za-z%]+)$/;function D(t){return null==t?"":X.test(t)?t:`${t}px`}let he=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({}),t})();var C=o(69862),ge=o(22096),ce=o(26306);function de(t,s){1&t&&(n.TgZ(0,"div",3),n._UZ(1,"google-map"),n.qZA())}const pe=[{path:"",component:(()=>{class t{constructor(e){this.zoom=6,this.mapCenter={lat:23.806921,lng:90.377078},this.polylinePoints=[{lat:24.847916,lng:89.369764},{lat:23.806921,lng:90.377078},{lat:24.919298,lng:91.831699}],this.circleMapRadius=5e4,this.apiLoaded=e.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyBNcjxo_35qnEG17dQvvftWa68eZWepYE0","callback").pipe((0,m.U)(()=>!0),(0,ce.K)(()=>(0,ge.of)(!1)))}ngOnInit(){}circleMapRadiusChange(e){this.circleMapRadius=e}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(C.eN))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-map"]],decls:4,vars:3,consts:[[1,"flex","flex-wrap"],[1,"w-full","md:w-1/2"],["class","mx-16",4,"ngIf"],[1,"mx-16"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0)(1,"div",1),n.YNc(2,de,2,0,"div",2),n.ALo(3,"async"),n.qZA()()),2&e&&(n.xp6(2),n.Q6J("ngIf",n.lcZ(3,1,i.apiLoaded)))},dependencies:[v.O5,g,v.Ov]}),t})(),data:{title:"Google map"}}];let ue=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[v.ez,j.QW,U.ie,he,C.JF,C.Ed,Y.Bz.forChild(pe)]}),t})()}}]);