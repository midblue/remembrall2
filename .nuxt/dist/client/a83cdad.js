(window.webpackJsonp=window.webpackJsonp||[]).push([[21,13,28],{302:function(e,t,n){"use strict";n.r(t);n(25),n(51);var o={props:{text:{required:!1,default:"",type:String},lineBreaksAllowed:{required:!1,default:!0,type:Boolean},acceptBlank:{required:!1,default:!1,type:Boolean},disableEdits:{required:!1,default:!1,type:Boolean},placeholder:{required:!1,default:"",type:String},focus:{required:!1,default:!1,type:Boolean}},components:{},data:function(){return{displayText:this.text,isEditing:!1,metaDown:!1,shiftDown:!1,isPlaceholder:0===this.text.length}},model:{prop:"text",event:"changeText"},computed:{},watch:{text:function(e){this.isEditing||this.resetTextTo(e)},disableEdits:function(e){this.isEditing=!1,this.metaDown=!1,this.shiftDown=!1},focus:function(e){var t=this;e&&this.$nextTick((function(){t.startEdit()}))}},mounted:function(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp),this.isPlaceholder&&(this.displayText=this.placeholder),this.focus&&this.startEdit()},beforeDestroy:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp)},methods:{startEdit:function(){var e=this;this.isEditing||this.disableEdits||(this.isEditing=!0,this.isPlaceholder&&(this.displayText=""),this.isPlaceholder=!1,this.metaDown=!1,this.shiftDown=!1,this.$nextTick((function(){e.$el.focus(),e.$nextTick(e.selectText)})),this.$emit("startEdit",this.displayText))},resetTextTo:function(e){var t=this;this.displayText="",this.$el.innerHTML="",this.$nextTick((function(){t.displayText=e,e||!t.placeholder||t.isEditing||(t.displayText=t.placeholder,t.isPlaceholder=!0)}))},commitEdit:function(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty(),this.isEditing=!1,this.metaDown=!1,this.shiftDown=!1;var e=this.sanitize(this.$el.innerHTML);e.length>0?this.$emit("endEdit",e):this.resetTextTo(this.text)},keyDown:function(e){this.isEditing&&!this.disableEdits&&("Meta"===e.key&&(this.metaDown=!0),"Shift"===e.key&&(this.shiftDown=!0),"Enter"!==e.key||this.lineBreaksAllowed||this.commitEdit(),"Enter"===e.key&&this.metaDown&&this.commitEdit(),"Tab"===e.key&&this.shiftDown&&this.$emit("prev",e),"Tab"===e.key&&this.$emit("next",e),"Escape"===e.key&&(this.resetTextTo(this.text),this.$nextTick(this.commitEdit)))},keyUp:function(e){this.isEditing&&!this.disableEdits&&("Meta"===e.key&&(this.metaDown=!1),"Shift"===e.key&&(this.shiftDown=!1))},selectText:function(){if(document.body.createTextRange){var e=document.body.createTextRange();e.moveToElementText(this.$el),e.select()}else if(window.getSelection){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(this.$el),t.removeAllRanges(),t.addRange(n)}},sanitize:function(text){return text.replace(/<div>/g,"\n").replace(/<br\s?\/?>/g,"\n").replace(/<[^>]*>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/^[\s\n\t]*/g,"")},paste:function(e){e.stopPropagation(),e.preventDefault();var t=e.clipboardData||window.clipboardData,n=this.sanitize(t.getData("Text"));if(/.(jpe?g|png|gif|webm|bmp)$/gi.test(n))return this.$emit("setImageURL",n);if(/^data:/gi.test(n))return alert("that's image data, not a link! make sure you get an image url that ends in .jpg, .png, .gif, etc.");var o,r,l,d,c,h=document.activeElement.innerText,f=(o=this.$el,r=function(){var e=window.getSelection();if(null!=e&&e.rangeCount>0){var t=e.getRangeAt(0);return{start:l(o,t.startContainer,t.startOffset),end:l(o,t.endContainer,t.endOffset)}}return null},l=function e(t,n,o){var r=0;if("#text"===n.nodeName)r+=o;else for(var i=0;i<o;i++)r+=d(n.childNodes[i]);return n!==t&&(r+=e(t,n.parentNode,c(n))),r},d=function e(t){var n=0;if("BR"===t.nodeName)n=1;else if("#text"===t.nodeName)n=t.nodeValue.length;else if(null!==t.childNodes)for(var i=0;i<t.childNodes.length;i++)n+=e(t.childNodes[i]);return n},c=function e(t){return null==t?-1:1+e(t.previousSibling)},r(document.activeElement)),v=h.substring(0,f.start)+n+h.substring(f.end);this.displayText=v,this.$emit("changeText",v),this.$nextTick(this.moveCursorToEnd)},moveCursorToEnd:function(){var e,t;document.createRange?((e=document.createRange()).selectNodeContents(this.$el),e.collapse(!1),(t=window.getSelection()).removeAllRanges(),t.addRange(e)):document.selection&&((e=document.body.createTextRange()).moveToElementText(this.$el),e.collapse(!1),e.select())}}},r=(n(323),n(49)),component=Object(r.a)(o,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"editabletext",class:{editabletextediting:e.isEditing,placeholder:e.isPlaceholder},attrs:{contenteditable:e.isEditing,tabindex:"0"},domProps:{innerHTML:e._s(e.displayText)},on:{focus:e.startEdit,click:e.startEdit,input:function(t){e.$emit("changeText",e.sanitize(e.$el.innerHTML))},blur:e.commitEdit,paste:e.paste}})}),[],!1,null,null,null);t.default=component.exports},306:function(e,t,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(117).default)("08509a0a",content,!0,{sourceMap:!1})},311:function(e,t,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(117).default)("a9b84848",content,!0,{sourceMap:!1})},317:function(e,t,n){"use strict";n.r(t);var o={props:{setTo:{required:!1,type:Boolean,default:!1},label:{required:!1,type:String}},components:{},data:function(){return{on:this.setTo}},computed:{},watch:{setTo:function(e){this.on!==e&&this.toggle()}},methods:{toggle:function(){this.on=!this.on,this.$emit("toggled",this.on)}}},r=(n(333),n(49)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"toggle",class:{on:e.on},on:{click:e.toggle}},[t("div",{staticClass:"icon"}),e._v(" "),e.label?t("div",{staticClass:"label"},[e._v(e._s(e.label))]):e._e()])}),[],!1,null,"96c47868",null);t.default=component.exports},323:function(e,t,n){"use strict";n(306)},324:function(e,t,n){var o=n(116)((function(i){return i[1]}));o.push([e.i,".editabletext{cursor:pointer}.editabletext.placeholder{color:rgba(0,0,0,.2)}.editabletext.editabletextediting{cursor:text}",""]),o.locals={},e.exports=o},325:function(e,t,n){var content=n(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(117).default)("47ac36ad",content,!0,{sourceMap:!1})},333:function(e,t,n){"use strict";n(311)},334:function(e,t,n){var o=n(116)((function(i){return i[1]}));o.push([e.i,'.toggle[data-v-96c47868]{grid-gap:10px;cursor:pointer;display:grid;grid-template-columns:60px 1fr}.toggle .icon[data-v-96c47868]{border:1px solid #bbb;border-radius:.85rem;height:1.7rem;position:relative;transition:.3s;width:3.7rem;z-index:1}.toggle .icon[data-v-96c47868]:before{content:"OFF";font-size:.65rem;font-weight:800;left:55%;opacity:.5;position:absolute;top:24%;transition:.3s;z-index:1}.toggle .icon[data-v-96c47868]:after{background:#bbb;border-radius:.7rem;content:"";height:1.4rem;left:5%;position:absolute;top:6%;transition:.3s;width:1.4rem;z-index:2}.toggle.on .icon[data-v-96c47868]{background:#4c4;border:1px solid transparent}.toggle.on .icon[data-v-96c47868]:before{color:#fff;content:"ON";left:15%;opacity:1}.toggle.on .icon[data-v-96c47868]:after{background:#fff;left:58%}.toggle .label[data-v-96c47868]{font-weight:600;margin-top:.1rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}',""]),o.locals={},e.exports=o},341:function(e,t,n){"use strict";n.r(t);n(52),n(36),n(14);var o=n(19),r=(n(204),n(85),n(50),n(35),n(30),n(28),n(58),n(29),n(59),n(302)),l=n(317),d=n(206);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var h={props:{},components:{EditableTextField:r.default,Toggle:l.default},data:function(){return{selectedLanguageTools:null,displaySpeechSpeed:4,reviewIntervalMultiplier:1,speechSpeedUpdateTimer:null,reviewInterviewMultiplierUpdateTimer:null,languages:{none:"None",ar:"Arabic",zh:"Chinese",da:"Danish",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",ko:"Korean",es:"Spanish"}}},computed:{currentSet:function(){var e,t=this;return null===(e=this.$store.state.setList)||void 0===e?void 0:e.find((function(s){return s.id===t.$store.state.currentSetId}))},settings:function(){var e,t=this;return(null===(e=this.$store.state.setList)||void 0===e?void 0:e.find((function(s){return s.id===t.$store.state.currentSetId})).settings)||{}}},mounted:function(){this.selectedLanguageTools=this.settings.languageTools||"none",this.displaySpeechSpeed=9*(this.settings.speechSpeed-.5)+1||4,this.reviewIntervalMultiplier=this.settings.reviewIntervalMultiplier||1},beforeDestroy:function(){},watch:{selectedLanguageTools:function(e){var t="none"===e?null:e;this.updateSettings({languageTools:t})},displaySpeechSpeed:function(){var e=this;clearTimeout(this.speechSpeedUpdateTimer),this.speechSpeedUpdateTimer=setTimeout((function(){return e.updateSettings({speechSpeed:(e.displaySpeechSpeed-1)/9+.5})}),1e3)},reviewIntervalMultiplier:function(){var e=this;clearTimeout(this.reviewInterviewMultiplierUpdateTimer),this.reviewInterviewMultiplierUpdateTimer=setTimeout((function(){return e.updateSettings({reviewIntervalMultiplier:e.reviewIntervalMultiplier})}),1e3)}},methods:{deleteSet:function(){confirm('Do you really want to delete the set "'.concat(this.currentSet.name,'" with ').concat(this.currentSet.cards?this.currentSet.cards.length:0," cards?"))&&(this.$store.commit("deleteSet",this.currentSet.id),this.$store.commit("setAppState","study"))},updateSettings:function(e){this.$store.commit("updateSetSettings",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},e))},updateMaxNewPerDay:function(e){var t=0===parseInt(e)?0:parseInt(e)||10;this.$store.commit("updateSetSettings",{maxNewPerDay:t})},updateMaxReviewsPerDay:function(e){var t=0===parseInt(e)?0:parseInt(e)||0;this.$store.commit("updateSetSettings",{maxReviewsPerDay:t})},downloadSet:function(){f(this.currentSet,this.currentSet.name+" "+(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString())},downloadSetFromLocalStorage:function(){f(Object(d.get)("".concat(this.currentSet.id)),this.currentSet.name+" "+(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString())},markAllAsNew:function(){}}};function f(e,t){var n="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),o=document.createElement("a");o.setAttribute("href",n),o.setAttribute("download",t+".json"),document.body.appendChild(o),o.click(),o.remove()}var v=h,m=(n(354),n(49)),component=Object(m.a)(v,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"settings"},[t("div",{staticClass:"settingslist"},[e.settings.autoAddNew?e._e():t("p",[t("EditableTextField",{staticClass:"visibletextfield marright",attrs:{text:"".concat(0===e.settings.maxNewPerDay?0:e.settings.maxNewPerDay||10),lineBreaksAllowed:!1},on:{endEdit:e.updateMaxNewPerDay}}),e._v(" "),t("b",[e._v("New cards per day")])],1),e._v(" "),t("p",[t("EditableTextField",{staticClass:"visibletextfield marright",attrs:{text:"".concat(0===e.settings.maxReviewsPerDay?0:e.settings.maxReviewsPerDay||0),lineBreaksAllowed:!1},on:{endEdit:e.updateMaxReviewsPerDay}}),e._v(" "),e._m(0)],1),e._v(" "),t("Toggle",{key:"rev",attrs:{setTo:e.settings.studyReverse,label:"Study cards back-to-front"},on:{toggled:function(t){e.updateSettings({studyReverse:!!!e.settings.studyReverse})}}}),e._v(" "),t("Toggle",{key:"mix",attrs:{setTo:e.settings.shuffleCards,label:"Shuffle cards (new & reviews)"},on:{toggled:function(t){e.updateSettings({shuffleCards:!!!e.settings.shuffleCards})}}}),e._v(" "),t("Toggle",{key:"once",attrs:{setTo:e.settings.oncePerDay,label:"Only see cards once per day"},on:{toggled:function(t){e.updateSettings({oncePerDay:!!!e.settings.oncePerDay})}}}),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedLanguageTools,expression:"selectedLanguageTools"}],staticClass:"marright",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedLanguageTools=t.target.multiple?n:n[0]}}},e._l(e.languages,(function(n,o){return t("option",{key:o,domProps:{value:o}},[e._v("\n        "+e._s(n)+"\n      ")])})),0),e._v(" "),t("b",[e._v("Language Tools")]),e._v(" "),e.selectedLanguageTools&&"none"!==e.selectedLanguageTools?t("Toggle",{key:"autospeak",attrs:{setTo:e.settings.autoSpeak,label:"Auto-speak card backs"},on:{toggled:function(t){e.updateSettings({autoSpeak:!!!e.settings.autoSpeak})}}}):e._e(),e._v(" "),e.selectedLanguageTools&&"none"!==e.selectedLanguageTools?t("Toggle",{key:"autospeakfront",attrs:{setTo:e.settings.autoSpeakFront,label:"Auto-speak card fronts"},on:{toggled:function(t){e.updateSettings({autoSpeakFront:!!!e.settings.autoSpeakFront})}}}):e._e(),e._v(" "),e.selectedLanguageTools&&"none"!==e.selectedLanguageTools?t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.displaySpeechSpeed,expression:"displaySpeechSpeed"}],key:"speechspeed",staticClass:"slider",attrs:{type:"range",min:"1",max:"10"},domProps:{value:e.displaySpeechSpeed},on:{__r:function(t){e.displaySpeechSpeed=t.target.value}}}),e._v(" "),t("b",[e._v("Speech Speed: "+e._s(Math.round(e.displaySpeechSpeed)))])]):e._e(),e._v(" "),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.reviewIntervalMultiplier,expression:"reviewIntervalMultiplier"}],key:"reviewinterval",staticClass:"slider",attrs:{type:"range",min:"1",max:"4",step:".1"},domProps:{value:e.reviewIntervalMultiplier},on:{__r:function(t){e.reviewIntervalMultiplier=t.target.value}}}),e._v(" "),t("b",[e._v("Review Interval Multiplier:\n        "+e._s(Math.round(10*e.reviewIntervalMultiplier)/10))])]),e._v(" "),t("div",[e._v("Click your set's name (above) to edit it.")]),e._v(" "),t("button",{on:{click:e.markAllAsNew}},[e._v("Mark all cards as new")]),e._v(" "),t("button",{on:{click:e.downloadSet}},[e._v("Download Set")]),e._v(" "),t("button",{on:{click:e.deleteSet}},[e._v("Delete Set")]),e._v(" "),t("br"),t("br"),t("br"),e._v(" "),t("div",{staticClass:"sub textcenter fakelink",on:{click:e.downloadSetFromLocalStorage}},[e._v("\n      Download Set from Local Storage\n    ")])],1)])}),[function(){var e=this,t=e._self._c;return t("b",{staticStyle:{position:"relative"}},[e._v("Max reviews per day "),t("span",{staticClass:"below sub"},[e._v("(0 for no limit)")])])}],!1,null,"519f3284",null);t.default=component.exports;installComponents(component,{EditableTextField:n(302).default,Toggle:n(317).default})},354:function(e,t,n){"use strict";n(325)},355:function(e,t,n){var o=n(116)((function(i){return i[1]}));o.push([e.i,".settingslist[data-v-519f3284]{margin:20px auto 0;max-width:400px}.settingslist>*[data-v-519f3284]{margin-bottom:40px}p[data-v-519f3284]{margin-bottom:10px}p>*[data-v-519f3284]{display:inline-block;min-width:55px}.below[data-v-519f3284]{left:0;position:absolute;top:100%}button[data-v-519f3284]{width:100%}.marright[data-v-519f3284]{margin-right:10px}",""]),o.locals={},e.exports=o}}]);