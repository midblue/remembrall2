(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{351:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(117).default)("5b06a2bc",content,!0,{sourceMap:!1})},369:function(t,e,n){"use strict";n.r(e);n(35);var r=n(19),o=(n(36),n(14),n(386),n(204),n(85),n(86),n(87),n(206).get),c=n(205).getNumberDueInSet,d={components:{},props:{},data:function(){return{isLoading:!1,inputUsername:"",dueReviews:{},setPickerOpen:!1}},computed:Object(r.a)({currentUser:function(){return this.$store.state.currentUser},appState:function(){return this.$store.state.appState},setList:function(){return this.$store.state.setList||[]},setListWithoutCurrentSet:function(){var t=this;return Object.values(this.setList).filter((function(s){return s.id!==t.currentSetId}))},currentSetId:function(){return this.$store.state.currentSetId},currentCards:function(){var t,e,n=this;return null!==(t=this.$store.state.setList)&&void 0!==t&&t.find((function(s){return s.id===n.$store.state.currentSetId}))?null===(e=this.$store.state.setList)||void 0===e?void 0:e.find((function(s){return s.id===n.$store.state.currentSetId})).cards:[]},isMobile:function(){return this.$store.state.isMobile}},"appState",(function(){return this.$store.state.appState})),watch:{currentUser:function(t){this.isLoading=!1;var e=o("currentSetId");e&&""!==e&&this.$store.commit("setCurrentSetId",e),t||this.$nextTick(this.focusInput)},setList:function(){this.isLoading=!1,this.updateDueReviews()},currentCards:function(){this.updateDueReviews()},currentSetId:function(){this.isLoading=!1,this.updateDueReviews()},setPickerOpen:function(t){t?window.addEventListener("click",this.checkClickToClose):window.removeEventListener("click",this.checkClickToClose)}},mounted:function(){window.addEventListener("keydown",this.keyDown),this.updateDueReviews(),window.setInterval(this.updateDueReviews,6e5);var t=o("currentUser");t&&""!==t?(this.$store.dispatch("logInAs",t),this.isLoading=!0):this.$nextTick(this.focusInput)},beforeDestroy:function(){window.removeEventListener("keydown",this.keyDown)},methods:{logInAs:function(){""!==this.inputUserName&&(this.isLoading=!0,this.$store.dispatch("logInAs",this.inputUsername))},logOut:function(){this.$store.commit("logOut")},keyDown:function(t){if(this.currentUser)return this.updateDueReviews();"Enter"===t.key&&this.logInAs()},focusInput:function(){this.$refs.usernameInput.focus()},switchSet:function(t){this.$store.commit("setCurrentSetId",t)},updateDueReviews:function(){for(var t in this.dueReviews={},this.setList){var e;null!==(e=this.setList)&&void 0!==e&&e[t]&&(new Date(this.setList[t].lastUpdated).getDate()!==(new Date).getDate()&&this.$store.commit("resetSetDay",t),this.dueReviews[this.setList[t].id]=c(this.setList[t]))}},checkClickToClose:function(t){(t.composedPath?t.composedPath():t.path).includes(this.$refs.mainButton)||(this.setPickerOpen=!1)},uploaded:function(t){var e=this,n=t.target.files[0],r=new FileReader;r.onload=function(t){var n=JSON.parse(t.target.result);e.$store.commit("uploadSet",n)},r.readAsText(n)}}},l=(n(387),n(49)),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"userandsetpicker",class:{fullscreen:!t.currentUser||t.isLoading,vertical:!t.currentUser}},[e("input",{ref:"uploader",staticStyle:{display:"none"},attrs:{type:"file",accept:".json"},on:{change:t.uploaded}}),t._v(" "),t.currentUser||t.isLoading?t.isLoading?[e("div",{staticClass:"sub"},[t._v("Loading...")])]:[t.isMobile?e("div",{ref:"mainButton",staticClass:"buttonlist fullheight"},["user"===t.appState?e("button",{staticClass:"mainbutton",on:{click:function(e){return t.$store.commit("setAppState","study")}}},[t._v("\n        ← Back to Studying\n      ")]):t.setList[t.currentSetId]?e("button",{key:t.setList[t.currentSetId].id,staticClass:"mainbutton",class:{open:t.setPickerOpen},staticStyle:{position:"relative"},on:{click:function(e){t.setPickerOpen=!t.setPickerOpen}}},[t._v("\n        "+t._s(t.setList[t.currentSetId].name)+" ▾\n        "),t.setPickerOpen?e("div",{staticClass:"secondarypanel"},[t._l(t.setListWithoutCurrentSet,(function(n){return e("button",{key:n.id,class:{duecards:t.dueReviews[n.id]>0},on:{click:function(e){return t.switchSet(n.id)}}},[t._v("\n            "+t._s(n.name)+"\n          ")])})),t._v(" "),e("button",{on:{click:function(e){return t.$refs.uploader.click()}}},[t._v("Upload Set")]),t._v(" "),e("button",{on:{click:function(e){return t.$store.commit("addSet")}}},[t._v("+ Add Set")])],2):t._e()]):e("button",{on:{click:function(e){return t.$store.commit("addSet")}}},[t._v("\n        + Add Set\n      ")])]):e("div",{staticClass:"buttonlist fullheight inlineblock"},[t._l(t.setList,(function(n){return e("button",{key:n.id,class:{active:t.currentSetId===n.id&&"user"!==t.appState},on:{click:function(e){return t.switchSet(n.id)}}},[t._v("\n        "+t._s(n.name)+"\n        "),!t.isMobile&&t.dueReviews[n.id]>0&&t.currentSetId!==n.id||"user"===t.appState?e("span",{staticClass:"sub"},[t._v("\n          ("+t._s(t.dueReviews[n.id])+")\n        ")]):t._e()])})),t._v(" "),e("button",{on:{click:function(e){return t.$refs.uploader.click()}}},[t._v("Upload Set")]),t._v(" "),e("button",{on:{click:function(e){return t.$store.commit("addSet")}}},[t._v("Add Set")])],2),t._v(" "),e("div",{staticClass:"flex-ai"},[e("div",{staticClass:"buttonlist fullheight inlineblock"},[e("button",{class:{active:"user"===t.appState},on:{click:function(e){return t.$store.commit("setAppState","user")}}},[t._v("\n          "+t._s(t.currentUser))]),t.isMobile?t._e():e("button",{on:{click:t.logOut}},[t._v("Log out")])])])]:[t._m(0),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputUsername,expression:"inputUsername"}],ref:"usernameInput",staticClass:"username",attrs:{autocorrect:"off",autocapitalize:"off",placeholder:"username"},domProps:{value:t.inputUsername},on:{input:function(e){e.target.composing||(t.inputUsername=e.target.value)}}})]),t._v(" "),e("div",[e("button",{staticClass:"loginbutton",on:{click:t.logInAs}},[t._v("Go")])])]],2)}),[function(){var t=this._self._c;return t("h1",[t("b",[this._v("Enter your username.")])])}],!1,null,"6c9389a0",null);e.default=component.exports},386:function(t,e,n){var r=n(2),o=n(210).values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},387:function(t,e,n){"use strict";n(351)},388:function(t,e,n){var r=n(116)((function(i){return i[1]}));r.push([t.i,'.userandsetpicker[data-v-6c9389a0]{align-items:center;background:#333;display:flex;height:43px;justify-content:space-between;padding:3px 50px 0;position:relative;width:100%;z-index:12}@media(max-width:768px){.userandsetpicker[data-v-6c9389a0]{height:40px;padding:0 20px}}.userandsetpicker.fullscreen[data-v-6c9389a0]{background:#eee;height:100vh;justify-content:center;position:fixed}.userandsetpicker.vertical[data-v-6c9389a0]{flex-direction:column}.userandsetpicker.vertical>*[data-v-6c9389a0]{margin-bottom:20px}.username[data-v-6c9389a0]{border:1px solid #eee;border-radius:7px;padding:10px}.loginbutton[data-v-6c9389a0],.username[data-v-6c9389a0]{font-family:"Avenir Neue","Avenir","Helvetica",sans-serif;font-size:1.2rem}.loginbutton[data-v-6c9389a0]{border-radius:7px;padding:20px 50px}button:not(.active).duecards[data-v-6c9389a0]{background:#fd8}.inlineblock[data-v-6c9389a0]{display:inline-block}.flex-ai[data-v-6c9389a0]{align-items:center;display:flex;height:100%;justify-content:center}.buttonlist[data-v-6c9389a0]{overflow:visible}.buttonlist.fullheight[data-v-6c9389a0]{border:none;border-radius:0;height:100%}.buttonlist.fullheight button[data-v-6c9389a0]{background:hsla(0,0%,100%,0);border:none;box-shadow:none;color:#fff;transition:background .2s}@media(min-width:769px){.buttonlist.fullheight button[data-v-6c9389a0]{border-top-left-radius:5px;border-top-right-radius:5px;padding:0 15px 2px}}.buttonlist.fullheight button[data-v-6c9389a0]:hover{background:rgba(0,153,204,.3)}.buttonlist.fullheight button.active[data-v-6c9389a0]{background:#fff;color:#000}@media(max-width:768px){.buttonlist.fullheight button[data-v-6c9389a0]{background:hsla(0,0%,100%,.2);margin-right:3px}}.buttonlist.fullheight>*[data-v-6c9389a0]{border-radius:0;height:100%}button.mainbutton[data-v-6c9389a0]{box-shadow:0 0 1000px 1000px transparent;min-width:25vw;position:relative;transition:box-shadow .3s;z-index:100}button.open[data-v-6c9389a0]{background:#fff!important;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;box-shadow:0 0 1000px 1000px rgba(0,0,0,.3);color:#000!important}.secondarypanel[data-v-6c9389a0]{left:0;position:absolute;top:100%;width:100%}.secondarypanel button[data-v-6c9389a0]{background:#ddd!important;border:0;border-radius:0;border-top:1px solid #eee;color:#000!important;width:100%}.secondarypanel button[data-v-6c9389a0]:first-of-type{border-radius:0}.secondarypanel button[data-v-6c9389a0]:last-of-type{border-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px}',""]),r.locals={},t.exports=r}}]);