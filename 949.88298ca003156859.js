"use strict";(self.webpackChunkegret_angular_latest_test=self.webpackChunkegret_angular_latest_test||[]).push([[949],{87949:(L,g,m)=>{m.r(g),m.d(g,{AppFormsModule:()=>M});var A=m(35420),Z=m(96814),o=m(56223),d=m(32296),i=m(95195),h=m(75986),b=m(23680),p=m(38034),v=m(30617),c=m(24516),U=m(59038),q=m(16007),u=m(87466),l=m(38257),C=m(13963),t=m(65879),f=m(64170),T=m(26385);function x(e,a){if(1&e&&(t.TgZ(0,"small",27),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" Username require at least ",n.basicForm.controls.username.errors.minlength.requiredLength," characters ")}}function _(e,a){if(1&e&&(t.TgZ(0,"small",27),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" Username can not contain more than ",n.basicForm.controls.username.errors.maxlength.requiredLength," characters ")}}function I(e,a){1&e&&(t.TgZ(0,"small",27),t._uU(1," First name is required "),t.qZA())}function J(e,a){1&e&&(t.TgZ(0,"small",27),t._uU(1," Email is required "),t.qZA())}function N(e,a){1&e&&(t.TgZ(0,"small",27),t._uU(1," Invaild email address "),t.qZA())}function w(e,a){1&e&&(t.TgZ(0,"small",27),t._uU(1," Password is required "),t.qZA())}function y(e,a){1&e&&(t.TgZ(0,"small",27),t._uU(1," You must agree to the terms and conditions "),t.qZA())}function Y(e,a){1&e&&t._uU(0,"Fill out your name")}function z(e,a){1&e&&t._uU(0,"Fill out your address")}function G(e,a){1&e&&t._uU(0,"Done")}function B(e,a){1&e&&t._uU(0,"Fill out your name")}function W(e,a){1&e&&t._uU(0,"Fill out your address")}function k(e,a){1&e&&t._uU(0,"Done")}const D=[{path:"",children:[{path:"basic",component:(()=>{class e{constructor(){this.formData={},this.console=console}ngOnInit(){let n=new o.p4("",o.kI.required),r=new o.p4("");this.basicForm=new o.nJ({username:new o.p4("",[o.kI.minLength(4),o.kI.maxLength(9)]),firstname:new o.p4("",[o.kI.required]),email:new o.p4("",[o.kI.required,o.kI.email]),website:new o.p4(""),date:new o.p4,cardno:new o.p4(""),password:n,confirmPassword:r,gender:new o.p4(""),agreed:new o.p4("",s=>s.value?null:{agreed:!0})})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-basic-form"]],decls:57,vars:11,consts:[[1,"p-0"],[1,""],[1,"card-title-text","pl-4","rtl:pr-4","py-3"],[1,"!pt-4"],[3,"formGroup"],[1,"flex","flex-wrap"],[1,"w-full","md:w-1/2","md:pr-6"],[1,"!pb-4"],[1,"full-width"],["matInput","","name","username","formControlName","username","placeholder","Username (Min Length: 4, Max Length: 9)","value",""],["class","form-error-msg",4,"ngIf"],["matInput","","name","firstname","formControlName","firstname","placeholder","First name","value",""],["matInput","","type","email","name","email","formControlName","email","placeholder","Your Email","value",""],["matInput","","name","website","formControlName","website","placeholder","Your Website (http://mhrafi.com)","value",""],["matInput","","name","date","formControlName","date","placeholder","Date",3,"matDatepicker"],["matSuffix","",3,"for"],["appDatepicker",""],[1,"w-full","md:w-1/2"],["matInput","","name","cardno","formControlName","cardno","placeholder","Credit card number"],["type","password","name","password","matInput","","formControlName","password","placeholder","Password","value",""],["type","password","name","confirmPassword","matInput","","appEqualValidator","password","formControlName","confirmPassword","placeholder","Confirm Password","value",""],["name","gender","formControlName","gender"],["value","male",1,"mx-12"],["value","female"],[1,"!pb-4","pt-8"],["name","agreed","formControlName","agreed",1,"!pb-4"],["mat-raised-button","","color","primary",3,"disabled"],[1,"form-error-msg"]],template:function(n,r){if(1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-title",1)(2,"div",2),t._uU(3,"Form validation"),t.qZA()(),t._UZ(4,"mat-divider"),t.TgZ(5,"mat-card-content",3)(6,"form",4)(7,"div",5)(8,"div",6)(9,"div",7)(10,"mat-form-field",8),t._UZ(11,"input",9),t.qZA(),t.YNc(12,x,2,1,"small",10),t.YNc(13,_,2,1,"small",10),t.qZA(),t.TgZ(14,"div",7)(15,"mat-form-field",8),t._UZ(16,"input",11),t.qZA(),t.YNc(17,I,2,0,"small",10),t.qZA(),t.TgZ(18,"div",7)(19,"mat-form-field",8),t._UZ(20,"input",12),t.qZA(),t.YNc(21,J,2,0,"small",10),t.YNc(22,N,2,0,"small",10),t.qZA(),t.TgZ(23,"div",7)(24,"mat-form-field",8),t._UZ(25,"input",13),t.qZA()(),t.TgZ(26,"div",7)(27,"mat-form-field",8),t._UZ(28,"input",14)(29,"mat-datepicker-toggle",15),t.qZA(),t._UZ(30,"mat-datepicker",null,16),t.qZA()(),t.TgZ(32,"div",17)(33,"div",7)(34,"mat-form-field",8),t._UZ(35,"input",18),t.qZA()(),t.TgZ(36,"div",7)(37,"mat-form-field",8),t._UZ(38,"input",19),t.qZA(),t.YNc(39,w,2,0,"small",10),t.qZA(),t.TgZ(40,"div",7)(41,"mat-form-field",8),t._UZ(42,"input",20),t.qZA()(),t.TgZ(43,"div",7)(44,"Label"),t._uU(45,"Gender*"),t.qZA(),t.TgZ(46,"mat-radio-group",21)(47,"mat-radio-button",22),t._uU(48,"Male"),t.qZA(),t.TgZ(49,"mat-radio-button",23),t._uU(50,"Female"),t.qZA()()(),t.TgZ(51,"div",24)(52,"mat-checkbox",25),t._uU(53,"I have read and agree to the terms of service."),t.qZA(),t.YNc(54,y,2,0,"small",10),t.qZA()()(),t.TgZ(55,"button",26),t._uU(56,"Submit"),t.qZA()()()()),2&n){const s=t.MAs(31);t.xp6(6),t.Q6J("formGroup",r.basicForm),t.xp6(6),t.Q6J("ngIf",r.basicForm.controls.username.hasError("minlength")&&r.basicForm.controls.username.touched),t.xp6(1),t.Q6J("ngIf",r.basicForm.controls.username.hasError("maxlength")&&r.basicForm.controls.username.touched),t.xp6(4),t.Q6J("ngIf",r.basicForm.controls.firstname.hasError("required")&&r.basicForm.controls.firstname.touched),t.xp6(4),t.Q6J("ngIf",r.basicForm.controls.email.hasError("required")&&r.basicForm.controls.email.touched),t.xp6(1),t.Q6J("ngIf",r.basicForm.controls.email.hasError("email")&&r.basicForm.controls.email.touched),t.xp6(6),t.Q6J("matDatepicker",s),t.xp6(1),t.Q6J("for",s),t.xp6(10),t.Q6J("ngIf",r.basicForm.controls.password.hasError("required")&&r.basicForm.controls.password.touched),t.xp6(15),t.Q6J("ngIf",r.basicForm.controls.agreed.hasError("agreed")&&r.basicForm.controls.agreed.touched),t.xp6(1),t.Q6J("disabled",r.basicForm.invalid)}},dependencies:[Z.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,c.Nt,f.KE,f.R9,T.d,i.a8,i.dn,i.n5,p.Mq,p.hl,p.nW,u.VQ,u.U0,h.oG,d.lW]}),e})(),data:{title:"Basic",breadcrumb:"BASIC"}},{path:"editor",component:(()=>{class e{constructor(){this.editorData='<h1>Egret | Angular material admin</h1>\n  <p><a href="http://devegret.com" target="_blank"><strong>DevEgret</strong></a></p>\n  <p><br></p><p><strong >Lorem Ipsum</strong>\n  <span>&nbsp;is simply dummy text of the printing and typesetting industry. \n  Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a \n  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span></p>'}ngOnInit(){}onContentChanged(){}onSelectionChanged(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-rich-text-editor"]],decls:3,vars:1,consts:[[1,"p-0"],["theme","snow","onSelectionChanged","onSelectionChanged()",3,"ngModel","ngModelChange","onContentChanged"]],template:function(n,r){1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-content",0)(2,"quill-editor",1),t.NdJ("ngModelChange",function(F){return r.editorData=F})("onContentChanged",function(){return r.onContentChanged()}),t.qZA()()()),2&n&&(t.xp6(2),t.Q6J("ngModel",r.editorData))},dependencies:[o.JJ,o.On,i.a8,i.dn,C.g6]}),e})(),data:{title:"Editor",breadcrumb:"EDITOR"}},{path:"wizard",component:(()=>{class e{constructor(n){this.fb=n}ngOnInit(){this.firstFormGroup=this.fb.group({firstCtrl:["",o.kI.required]}),this.secondFormGroup=this.fb.group({secondCtrl:["",o.kI.required]})}submit(){console.log(this.firstFormGroup.value),console.log(this.secondFormGroup.value)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(o.QS))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-wizard"]],decls:72,vars:14,consts:[[1,"p-0"],[1,""],[1,"card-title-text","pl-4","rtl:pr-4","py-3"],[1,"!pt-4"],[3,"linear"],[3,"stepControl"],[3,"formGroup"],["matStepLabel",""],[1,"!pt-4","!pb-4"],["matInput","","placeholder","Last name, First name","formControlName","firstCtrl","required",""],["mat-raised-button","","color","primary","matStepperNext",""],["matInput","","placeholder","Address","formControlName","secondCtrl","required",""],[1,"flex","flex-row"],["mat-raised-button","","color","accent","matStepperPrevious","",1,"!mr-3"],[1,"!pb-4","mb-4"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent","matStepperPrevious",""]],template:function(n,r){1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-title",1)(2,"div",2),t._uU(3,"Horizontal"),t.qZA()(),t._UZ(4,"mat-divider"),t.TgZ(5,"mat-card-content",3)(6,"mat-horizontal-stepper",4)(7,"mat-step",5)(8,"form",6),t.YNc(9,Y,1,0,"ng-template",7),t.TgZ(10,"mat-form-field",8),t._UZ(11,"input",9),t.qZA(),t.TgZ(12,"div")(13,"button",10),t._uU(14,"Next"),t.qZA()()()(),t.TgZ(15,"mat-step",5)(16,"form",6),t.YNc(17,z,1,0,"ng-template",7),t.TgZ(18,"mat-form-field",8),t._UZ(19,"input",11),t.qZA(),t.TgZ(20,"div",12)(21,"button",13),t._uU(22,"Back"),t.qZA(),t.TgZ(23,"button",10),t._uU(24,"Next"),t.qZA()()()(),t.TgZ(25,"mat-step"),t.YNc(26,G,1,0,"ng-template",7),t.TgZ(27,"div")(28,"mat-icon",3),t._uU(29,"check"),t.qZA()(),t.TgZ(30,"div",14),t._uU(31," You Are Done."),t.qZA(),t.TgZ(32,"div",12)(33,"button",13),t._uU(34,"Back"),t.qZA(),t.TgZ(35,"button",15),t.NdJ("click",function(){return r.submit()}),t._uU(36,"Submit"),t.qZA()()()()()(),t.TgZ(37,"mat-card",0)(38,"mat-card-title",1)(39,"div",2),t._uU(40,"Verticle"),t.qZA(),t._UZ(41,"mat-divider"),t.qZA(),t.TgZ(42,"mat-card-content",3)(43,"mat-vertical-stepper",4)(44,"mat-step",5)(45,"form",6),t.YNc(46,B,1,0,"ng-template",7),t.TgZ(47,"mat-form-field"),t._UZ(48,"input",9),t.qZA(),t.TgZ(49,"div")(50,"button",10),t._uU(51,"Next"),t.qZA()()()(),t.TgZ(52,"mat-step",5)(53,"form",6),t.YNc(54,W,1,0,"ng-template",7),t.TgZ(55,"mat-form-field"),t._UZ(56,"input",11),t.qZA(),t.TgZ(57,"div",12)(58,"button",13),t._uU(59,"Back"),t.qZA(),t.TgZ(60,"button",10),t._uU(61,"Next"),t.qZA()()()(),t.TgZ(62,"mat-step"),t.YNc(63,k,1,0,"ng-template",7),t.TgZ(64,"div")(65,"mat-icon",3),t._uU(66,"check"),t.qZA()(),t.TgZ(67,"div",14),t._uU(68," You Are Done."),t.qZA(),t.TgZ(69,"div")(70,"button",16),t._uU(71,"Back"),t.qZA()()()()()()),2&n&&(t.xp6(6),t.Q6J("linear",!0),t.xp6(1),t.Q6J("stepControl",r.firstFormGroup),t.xp6(1),t.Q6J("formGroup",r.firstFormGroup),t.xp6(7),t.Q6J("stepControl",r.secondFormGroup),t.xp6(1),t.Q6J("formGroup",r.secondFormGroup),t.xp6(12),t.Udp("font-size","36px"),t.xp6(15),t.Q6J("linear",!0),t.xp6(1),t.Q6J("stepControl",r.firstFormGroup),t.xp6(1),t.Q6J("formGroup",r.firstFormGroup),t.xp6(7),t.Q6J("stepControl",r.secondFormGroup),t.xp6(1),t.Q6J("formGroup",r.secondFormGroup),t.xp6(12),t.Udp("font-size","36px"))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u,c.Nt,f.KE,T.d,i.a8,i.dn,i.n5,d.lW,v.Hw,l.C0,l.VY,l.Vq,l.Ic,l.fd]}),e})(),data:{title:"Wizard",breadcrumb:"WIZARD"}}]}];let M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[Z.ez,o.u5,o.UX,c.c,U.ie,i.QW,p.FA,b.XK,q.Cv,u.Fk,h.p9,d.ot,v.Ps,l.T5,C.fi.forRoot(),A.Bz.forChild(D)]}),e})()}}]);