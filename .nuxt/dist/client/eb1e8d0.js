(window.webpackJsonp=window.webpackJsonp||[]).push([[2,7,11,14,16,25,26],{303:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(118);var r=n(143),d=n(88);function c(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(r.a)(t)||Object(d.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},310:function(t,e,n){"use strict";n.r(e);n(46),n(53),n(37),n(25),n(28),n(54),n(55),n(38);var o=n(303);n(204),n(14),n(36),n(50),n(144),n(35),n(205);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,r=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw r}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var c={props:{text:{default:""},language:{required:!0}},data:function(){return{speaker:null}},computed:{settings:function(){var t,e=this;return null===(t=this.$store.state.setList)||void 0===t?void 0:t.find((function(s){return s.id===e.$store.state.currentSetId})).settings}},watch:{language:function(t){this.spawnSpeaker()},text:function(t){t&&this.speakWord()}},methods:{spawnSpeaker:function(){var t=this;if(window.speechSynthesis){this.speaker=new SpeechSynthesisUtterance,this.speaker.lang=this.language,this.speaker.volume=.4,this.speaker.rate=this.settings.speechSpeed||.8;var e,n=window.speechSynthesis.getVoices().filter((function(e){return e.lang.split("-")[0].toLowerCase()===t.language})),d={es:["Google ","Paulina","Mónica"],en:["Google ","Samantha"],any:["Google "]},c=r([].concat(Object(o.a)(d[this.language]||[]),Object(o.a)(d.any||[])));try{var l=function(){var o=e.value,r=n.find((function(t){return t.name.startsWith(o)}));if(r)return t.speaker.voice=r,"break"};for(c.s();!(e=c.n()).done;){if("break"===l())break}}catch(t){c.e(t)}finally{c.f()}this.speaker.voice||(this.speaker.voice=n[0],this.speaker.voice=n[Math.floor(Math.random()*n.length)])}},speakWord:function(){this.spawnSpeaker(),this.speaker&&(this.speaker.text=this.text,window.speechSynthesis.speak(this.speaker))}}},l=n(49),component=Object(l.a)(c,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n.r(e);n(25),n(51),n(142),n(52);var o=n(395)({breaks:!0,html:!0,typographer:!0});var r={props:{text:{required:!1,default:"",type:String},lineBreaksAllowed:{required:!1,default:!0,type:Boolean},acceptBlank:{required:!1,default:!1,type:Boolean},disableEdits:{required:!1,default:!1,type:Boolean},placeholder:{required:!1,default:"",type:String},focus:{required:!1,default:!1,type:Boolean}},components:{},data:function(){return{displayText:this.text,isEditing:!1,metaDown:!1,shiftDown:!1,isPlaceholder:0===this.text.length}},model:{prop:"text",event:"changeText"},computed:{displayMarkdown:function(){return(this.displayText.length>0?this.displayText:this.text).split("\n").map((function(t){return o.render(t)||"<br />"})).join("").replace(/(<br \/>)*$/,"")}},watch:{text:function(t){this.isPlaceholder=0===t.length,this.isEditing||this.resetTextTo(t)},disableEdits:function(t){this.isEditing=!1,this.metaDown=!1,this.shiftDown=!1},focus:function(t){var e=this;t&&this.$nextTick((function(){e.startEdit()}))}},mounted:function(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp),this.isPlaceholder&&(this.displayText=this.placeholder),this.focus&&this.startEdit()},beforeDestroy:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp)},methods:{startEdit:function(){var t=this;this.isEditing||this.disableEdits||(this.isEditing=!0,this.isPlaceholder&&(this.displayText=""),this.isPlaceholder=!1,this.metaDown=!1,this.shiftDown=!1,this.$nextTick((function(){t.$el.focus(),t.$nextTick(t.selectText)})),this.$emit("startEdit",this.displayText))},resetTextTo:function(t){var e=this;this.displayText="",this.$el.innerHTML="",this.$nextTick((function(){e.displayText=t,t||!e.placeholder||e.isEditing||(e.displayText=e.placeholder,e.isPlaceholder=!0)}))},commitEdit:function(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty(),this.isEditing=!1,this.metaDown=!1,this.shiftDown=!1;var t=this.sanitize(this.$el.innerHTML);t.length>0?(this.displayText=t,this.$emit("endEdit",t)):this.resetTextTo(this.text)},keyDown:function(t){this.isEditing&&!this.disableEdits&&("Meta"===t.key&&(this.metaDown=!0),"Shift"===t.key&&(this.shiftDown=!0),"Enter"!==t.key||this.lineBreaksAllowed||this.commitEdit(),"Enter"===t.key&&this.metaDown&&this.commitEdit(),"Tab"===t.key&&this.shiftDown&&this.$emit("prev",t),"Tab"===t.key&&this.$emit("next",t),"Escape"===t.key&&(this.resetTextTo(this.text),this.$nextTick(this.commitEdit)))},keyUp:function(t){this.isEditing&&!this.disableEdits&&("Meta"===t.key&&(this.metaDown=!1),"Shift"===t.key&&(this.shiftDown=!1))},selectText:function(){if(document.body.createTextRange){var t=document.body.createTextRange();t.moveToElementText(this.$el),t.select()}else if(window.getSelection){var e=window.getSelection(),n=document.createRange();n.selectNodeContents(this.$el),e.removeAllRanges(),e.addRange(n)}},sanitize:function(text){return text.replace(/<div>/g,"\n").replace(/\n<br ?\/?>/g,"\n").replace(/<br ?\/?>/g,"\n").replace(/<[^>]*>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/^[\s\n\t]*/g,"")},paste:function(t){t.stopPropagation(),t.preventDefault();var e=t.clipboardData||window.clipboardData,n=this.sanitize(e.getData("Text"));if(/.(jpe?g|png|gif|webm|bmp)$/gi.test(n))return this.$emit("setImageURL",n);if(/^data:/gi.test(n))return alert("that's image data, not a link! make sure you get an image url that ends in .jpg, .png, .gif, etc.");var o,r,d,c,l,f=document.activeElement.innerText,h=(o=this.$el,r=function(){var t=window.getSelection();if(null!=t&&t.rangeCount>0){var e=t.getRangeAt(0);return{start:d(o,e.startContainer,e.startOffset),end:d(o,e.endContainer,e.endOffset)}}return null},d=function t(e,n,o){var r=0;if("#text"===n.nodeName)r+=o;else for(var i=0;i<o;i++)r+=c(n.childNodes[i]);return n!==e&&(r+=t(e,n.parentNode,l(n))),r},c=function t(e){var n=0;if("BR"===e.nodeName)n=1;else if("#text"===e.nodeName)n=e.nodeValue.length;else if(null!==e.childNodes)for(var i=0;i<e.childNodes.length;i++)n+=t(e.childNodes[i]);return n},l=function t(e){return null==e?-1:1+t(e.previousSibling)},r(document.activeElement)),v=f.substring(0,h.start)+n+f.substring(h.end);this.displayText=v,this.$emit("changeText",v),this.$nextTick(this.moveCursorToEnd)},moveCursorToEnd:function(){var t,e;document.createRange?((t=document.createRange()).selectNodeContents(this.$el),t.collapse(!1),(e=window.getSelection()).removeAllRanges(),e.addRange(t)):document.selection&&((t=document.body.createTextRange()).moveToElementText(this.$el),t.collapse(!1),t.select())}}},d=(n(370),n(49)),component=Object(d.a)(r,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"editabletext",class:{editabletextediting:t.isEditing,placeholder:t.isPlaceholder},attrs:{contenteditable:t.isEditing,tabindex:"0"},domProps:{innerHTML:t._s(t.isEditing?t.displayText:t.displayMarkdown)},on:{focus:t.startEdit,click:t.startEdit,input:function(e){t.$emit("changeText",t.sanitize(t.$el.innerHTML))},blur:t.commitEdit,paste:t.paste}})}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,n){"use strict";n.r(e);var o={props:{url:{required:!0}},data:function(){return{loaded:!1,hide:!1}},watch:{url:function(t){this.loaded=!1,this.loadImg(t)}},mounted:function(){this.loadImg(this.url)},methods:{loadImg:function(t){var e=this;this.hide=!1;var img=new Image;img.onload=function(){e.loaded=!0},img.onerror=function(){"loading"!==t&&(console.log("Failed to load card image:",t),e.hide=!0,e.$emit("failed"))},"loading"!==t&&(img.src=t)}}},r=(n(372),n(49)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.hide?t._e():e("div",{key:t.url},[t.loaded?e("img",{attrs:{src:t.url}}):e("svg",{attrs:{width:"105",height:"105",viewBox:"0 0 105 105",xmlns:"http://www.w3.org/2000/svg",fill:"#333"}},[e("circle",{attrs:{cx:"12.5",cy:"12.5",r:"12.5"}},[e("animate",{attrs:{attributeName:"fill-opacity",begin:"0s",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),e("circle",{attrs:{cx:"12.5",cy:"52.5",r:"12.5","fill-opacity":"0.5"}},[e("animate",{attrs:{attributeName:"fill-opacity",begin:"100ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),e("circle",{attrs:{cx:"52.5",cy:"12.5",r:"12.5"}},[e("animate",{attrs:{attributeName:"fill-opacity",begin:"300ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),e("circle",{attrs:{cx:"52.5",cy:"52.5",r:"12.5"}},[e("animate",{attrs:{attributeName:"fill-opacity",begin:"600ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),e("circle",{attrs:{cx:"92.5",cy:"12.5",r:"12.5"}},[e("animate",{attrs:{attributeName:"fill-opacity",begin:"800ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),e("circle",{attrs:{cx:"92.5",cy:"52.5",r:"12.5"}},[e("animate",{attrs:{attributeName:"fill-opacity",begin:"400ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),e("circle",{attrs:{cx:"12.5",cy:"92.5",r:"12.5"}},[e("animate",{attrs:{attributeName:"fill-opacity",begin:"700ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),e("circle",{attrs:{cx:"52.5",cy:"92.5",r:"12.5"}},[e("animate",{attrs:{attributeName:"fill-opacity",begin:"500ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),e("circle",{attrs:{cx:"92.5",cy:"92.5",r:"12.5"}},[e("animate",{attrs:{attributeName:"fill-opacity",begin:"200ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})])])])}),[],!1,null,"2f1aa15a",null);e.default=component.exports},321:function(t,e,n){"use strict";n.r(e);n(50),n(46);var o=n(19),r=(n(204),n(14),n(318)),d=n(353),c=n(428),l=n(319),f={props:{reverse:{default:!1},front:{},back:{},id:{required:!0},set:{required:!0},timeMod:{default:0},nextReview:{default:0},totalReviews:{default:0},created:{default:function(){return(new Date).getTime()}},ok:{default:0},again:{default:0},suspended:{default:!1},imageURL:{},examples:{},forStudy:{default:!0},showBack:{default:!1},mini:{default:!1}},components:{EditableTextFieldMarkdown:r.default,CardTools:d.default,StudyExtras:c.default,ImageLoader:l.default},computed:{settings:function(){var t,e=this;return null===(t=this.$store.state.setList)||void 0===t?void 0:t.find((function(s){return s.id===e.$store.state.currentSetId})).settings},isEditingText:function(){return this.$store.state.isEditingText},isNewCard:function(){return!this.totalReviews||0===this.totalReviews}},mounted:function(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp)},beforeDestroy:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp)},methods:{startEdit:function(){"study"===this.$store.state.appState&&this.$store.commit("setAppState","editCard"),this.$store.commit("setIsEditingText",!0)},saveEditedCard:function(t,e){"editCard"===this.$store.state.appState&&this.$store.commit("setAppState","study"),this.$store.commit("setIsEditingText",!1),this[t]!==e&&this.$store.commit("updateCard",Object(o.a)({id:this.id},t,e))},setImageURL:function(t){this.$store.commit("updateCard",{id:this.id,imageURL:t})}}},h=(n(513),n(49)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card roundframe",class:{new:!t.totalReviews,mini:t.mini,suspended:t.suspended}},[e("CardTools",{staticClass:"topleft",attrs:{id:t.id,totalReviews:t.totalReviews,ok:t.ok,front:t.front,back:t.back,nextReview:t.nextReview,setId:t.set,suspended:t.suspended,imageURL:t.imageURL},on:{setImageURL:t.setImageURL}}),t._v(" "),e("div",{staticClass:"front"},[e("EditableTextFieldMarkdown",{staticClass:"textfield",class:{newcard:t.isNewCard},attrs:{text:t.reverse?t.back:t.front},on:{startEdit:t.startEdit,endEdit:function(e){return t.saveEditedCard.apply(t,[t.reverse?"back":"front"].concat(Array.prototype.slice.call(arguments)))},setImageURL:t.setImageURL}}),t._v(" "),t.examples?e("div",{staticClass:"examplefield"},t._l(t.examples,(function(n){return e("div",{key:n.split("@")[0]},[t._v("\n        "+t._s(n.split("@")[0])+"\n      ")])})),0):t._e(),t._v(" "),t.imageURL&&!t.reverse?e("ImageLoader",{attrs:{url:t.imageURL},on:{failed:function(e){return t.setImageURL(null)}}}):t._e(),t._v(" "),t.reverse&&t.settings.languageTools&&t.forStudy?e("StudyExtras",{attrs:{text:t.back,secondaryText:t.front}}):t._e()],1),t._v(" "),e("div",{staticClass:"back",class:{pointer:!1===t.showBack&&t.forStudy},on:{click:function(e){return t.$emit("showBack")}}},[e("div",{class:{hideanswer:!t.showBack&&t.forStudy}},[e("EditableTextFieldMarkdown",{staticClass:"textfield",class:{newcard:t.isNewCard},attrs:{text:t.reverse?t.front:t.back},on:{startEdit:t.startEdit,endEdit:function(e){return t.saveEditedCard.apply(t,[t.reverse?"front":"back"].concat(Array.prototype.slice.call(arguments)))},setImageURL:t.setImageURL}}),t._v(" "),t.examples?e("div",{staticClass:"examplefield"},t._l(t.examples,(function(n){return e("div",{key:n.split("@")[1]},[t._v("\n          "+t._s(n.split("@")[1])+"\n        ")])})),0):t._e(),t._v(" "),t.imageURL&&t.reverse?e("ImageLoader",{attrs:{url:t.imageURL}}):t._e(),t._v(" "),!t.reverse&&t.settings.languageTools&&t.forStudy?e("StudyExtras",{attrs:{text:t.back,secondaryText:t.front,shown:t.showBack}}):t._e()],1)])],1)}),[],!1,null,"73c0c912",null);e.default=component.exports;installComponents(component,{CardTools:n(353).default,EditableTextFieldMarkdown:n(318).default,ImageLoader:n(319).default,StudyExtras:n(428).default})},345:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(117).default)("4dd496eb",content,!0,{sourceMap:!1})},346:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(117).default)("432cb003",content,!0,{sourceMap:!1})},347:function(t,e,n){var content=n(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(117).default)("7b23e2ae",content,!0,{sourceMap:!1})},348:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(117).default)("13cf4c1f",content,!0,{sourceMap:!1})},353:function(t,e,n){"use strict";n.r(e);n(36),n(14),n(35),n(204),n(86),n(87);var o=n(205),r={props:{id:{required:!0},setId:{required:!0},totalReviews:{default:0},ok:{default:0},front:{},back:{},nextReview:{},suspended:{},left:{default:!1},imageURL:{}},data:function(){return{open:!1,moveToSetOpen:!1,realSetId:this.setId}},computed:{isMobile:function(){return this.$store.state.isMobile},settings:function(){var t,e=this;return null===(t=this.$store.state.setList)||void 0===t?void 0:t.find((function(s){return s.id===e.$store.state.currentSetId})).settings}},watch:{id:function(){this.open=!1}},mounted:function(){},methods:{msToString:o.msToString,toggle:function(t){var path=t.path||t.composedPath&&t.composedPath();this.$store.state.isMobile&&!path.includes(this.$refs.movetobutton)&&(this.open=!this.open),this.open&&window.addEventListener("click",this.checkClickToClose)},swapSides:function(){this.$store.commit("updateCard",{id:this.id,front:this.back,back:this.front}),this.open=!1},moveToSet:function(t){this.$store.commit("moveCard",{id:this.id,from:this.realSetId,to:t}),this.open=!1,this.realSetId=t},reviewNow:function(){this.$store.commit("updateCard",{id:this.id,nextReview:1}),this.open=!1},suspendCard:function(){this.$store.commit("updateCard",{id:this.id,suspended:!this.suspended}),this.open=!1},deleteCard:function(){var t=this;this.$store.commit("deleteCard",this.id),this.$emit("done"),this.showBack=!1,this.$nextTick((function(){try{t.$refs.deleteButton.blur()}catch(t){}})),this.open=!1},checkClickToClose:function(t){(t.path||t.composedPath&&t.composedPath()).includes(this.$el)||(this.open=!1,window.removeEventListener("click",this.checkClickToClose))},addImageURL:function(){var link=window.prompt("Enter an image url!");link&&this.$emit("setImageURL",link)},autoAddImageURL:function(){var t=this;this.$emit("setImageURL","loading"),Object(o.getRandomImage)(this.front||this.back).then((function(image){image&&t.$emit("setImageURL",image)}))},removeImageURL:function(){this.$emit("setImageURL","")}}},d=(n(374),n(49)),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return t.id?e("div",{staticClass:"cardtools",on:{mouseover:function(e){!t.isMobile&&(t.open=!0)},click:t.toggle,mouseleave:function(e){!t.isMobile&&(t.open=!1)}}},[e("div",{staticClass:"icon",class:{open:t.open}},[e("svg",{attrs:{width:"50px",height:"50px",viewBox:"0 0 50 50",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("g",{attrs:{fill:"#000000","fill-rule":"evenodd"}},[e("path",{attrs:{d:"M25,33.76 C26.5600078,33.76 28.0199932,33.360004 29.38,32.56 C30.7400068,31.759996 31.819996,30.6900067 32.62,29.35 C33.420004,28.0099933 33.82,26.5600078 33.82,25 C33.82,23.4399922 33.420004,21.9800068 32.62,20.62 C31.819996,19.2599932 30.7400068,18.180004 29.38,17.38 C28.0199932,16.579996 26.5600078,16.18 25,16.18 C23.4399922,16.18 21.9900067,16.579996 20.65,17.38 C19.3099933,18.180004 18.240004,19.2599932 17.44,20.62 C16.639996,21.9800068 16.24,23.4399922 16.24,25 C16.24,26.5600078 16.639996,28.0099933 17.44,29.35 C18.240004,30.6900067 19.3099933,31.759996 20.65,32.56 C21.9900067,33.360004 23.4399922,33.76 25,33.76 Z M43.66,27.46 L48.88,31.54 C49.1200012,31.740001 49.2599998,31.9999984 49.3,32.32 C49.3400002,32.6400016 49.2800008,32.9399986 49.12,33.22 L44.08,41.86 C43.9199992,42.1400014 43.7100013,42.3199996 43.45,42.4 C43.1899987,42.4800004 42.9000016,42.4600006 42.58,42.34 L36.4,39.88 C34.799992,41.0400058 33.3800062,41.8599976 32.14,42.34 L31.24,48.88 C31.1599996,49.2000016 31.0100011,49.459999 30.79,49.66 C30.5699989,49.860001 30.3200014,49.96 30.04,49.96 L19.96,49.96 C19.6799986,49.96 19.4300011,49.860001 19.21,49.66 C18.9899989,49.459999 18.8600002,49.2000016 18.82,48.88 L17.86,42.34 C16.1799916,41.6599966 14.7800056,40.8400048 13.66,39.88 L7.42,42.34 C6.7799968,42.6200014 6.2800018,42.460003 5.92,41.86 L0.88,33.22 C0.7199992,32.9399986 0.6599998,32.6400016 0.7,32.32 C0.7400002,31.9999984 0.8799988,31.740001 1.12,31.54 L6.4,27.46 C6.3199996,26.8999972 6.28,26.0800054 6.28,25 C6.28,23.9199946 6.3199996,23.1000028 6.4,22.54 L1.12,18.46 C0.8799988,18.259999 0.7400002,18.0000016 0.7,17.68 C0.6599998,17.3599984 0.7199992,17.0600014 0.88,16.78 L5.92,8.14 C6.2800018,7.539997 6.7799968,7.3799986 7.42,7.66 L13.66,10.12 C15.1000072,9.0399946 16.4999932,8.2200028 17.86,7.66 L18.82,1.12 C18.8600002,0.7999984 18.9899989,0.540001 19.21,0.34 C19.4300011,0.139999 19.6799986,0.04 19.96,0.04 L30.04,0.04 C30.3200014,0.04 30.5699989,0.139999 30.79,0.34 C31.0100011,0.540001 31.1599996,0.7999984 31.24,1.12 L32.14,7.66 C33.7000078,8.260003 35.1199936,9.0799948 36.4,10.12 L42.58,7.66 C42.9000016,7.5399994 43.1899987,7.5199996 43.45,7.6 C43.7100013,7.6800004 43.9199992,7.8599986 44.08,8.14 L49.12,16.78 C49.2800008,17.0600014 49.3400002,17.3599984 49.3,17.68 C49.2599998,18.0000016 49.1200012,18.259999 48.88,18.46 L43.66,22.54 C43.7400004,23.1000028 43.78,23.9199946 43.78,25 C43.78,26.0800054 43.7400004,26.8999972 43.66,27.46 Z"}})])]),t._v(" "),e("div",{staticClass:"panel",class:{open:t.open,left:t.left}},[e("div",{staticClass:"stats sub"},[t.totalReviews>0?[e("div",[t._v("\n            "+t._s(t.totalReviews)+" review"+t._s(1===t.totalReviews?"":"s")+"\n          ")]),t._v(" "),e("div",[t._v(t._s(parseInt(t.ok/t.totalReviews*100))+"% success")])]:e("div",[t._v("This card is new.")])],2),t._v(" "),e("div",{staticClass:"button",on:{click:t.swapSides}},[t._v("Swap Front/Back")]),t._v(" "),t.imageURL?e("div",{staticClass:"button",on:{click:t.removeImageURL}},[t._v("\n        Remove Image\n      ")]):[e("div",{staticClass:"button",on:{click:t.addImageURL}},[t._v("Set Image")]),t._v(" "),e("div",{staticClass:"button",on:{click:t.autoAddImageURL}},[t._v("Auto-Set Image")])],t._v(" "),t.nextReview>Date.now()?e("div",{staticClass:"button",on:{click:t.reviewNow}},[t._v("\n        Review Now\n      ")]):t._e(),t._v(" "),t.$store.state.setList.length>1?e("div",{ref:"movetobutton",staticClass:"button movetobutton",on:{mouseover:function(e){!t.isMobile&&(t.moveToSetOpen=!0)},click:function(e){t.isMobile&&(t.moveToSetOpen=!t.moveToSetOpen)},mouseleave:function(e){!t.isMobile&&(t.moveToSetOpen=!1)}}},[t._v("\n        Move to Set...\n        "),t.moveToSetOpen?e("div",{ref:"secondaryPanel",staticClass:"secondarypanel",class:{mobile:t.isMobile}},t._l(t.$store.state.setList.filter((function(s){return"".concat(s.id)!=="".concat(t.realSetId)})),(function(n){return e("div",{key:n.id,staticClass:"button",on:{key:n.id,click:function(e){return t.moveToSet(n.id)}}},[t._v("\n            "+t._s(n.name)+"\n          ")])})),0):t._e()]):t._e(),t._v(" "),e("div",{staticClass:"button",on:{click:t.suspendCard}},[t._v("\n        "+t._s(t.suspended?"Unsuspend":"Suspend")+"\n      ")]),t._v(" "),e("div",{staticClass:"button",on:{click:t.deleteCard}},[t._v("Delete")])],2)])]):t._e()}),[],!1,null,"148d4cc4",null);e.default=component.exports},367:function(t,e,n){"use strict";n.r(e);n(204),n(14),n(25),n(51),n(53),n(37),n(402),n(403),n(404),n(405),n(407),n(408),n(409),n(410),n(411),n(412),n(413),n(414),n(415),n(416),n(417),n(418),n(419),n(38),n(50),n(52),n(29),n(46);var o=n(207),r={props:{text:{default:""},secondaryText:{default:""}},data:function(){return{kanjiList:[],examplesToShow:null}},computed:{settings:function(){var t,e=this;return null===(t=this.$store.state.setList)||void 0===t?void 0:t.find((function(s){return s.id===e.$store.state.currentSetId})).settings},searchString:function(){return this.text.replace(/\n.*/g,"")}},watch:{text:function(){this.getKanjiData()}},mounted:function(){this.getKanjiData()},methods:{getKanjiData:function(){var t=this,e=Array.from(new Set("".concat(this.text.replace(/[^\u4e00-\u9faf]/g,"")).concat(this.secondaryText.replace(/[^\u4e00-\u9faf]/g,""))));this.kanjiList=e.map((function(t){return{character:t,meaning:"loading..."}})),Array.from(e).forEach((function(e,n){fetch("https://kanjialive-api.p.rapidapi.com/api/public/kanji/".concat(e),{headers:{"X-RapidAPI-Key":o.rapidAPI}}).then((function(t){return t.json()})).then((function(o){if(o.error||o.message)return t.$set(t.kanjiList,n,{character:e,message:o.error||o.message});t.$set(t.kanjiList,n,{character:o.kanji.character,meaning:o.kanji.meaning.english,examples:o.examples.slice(0,3).map((function(t){return{japanese:t.japanese,meaning:t.meaning.english}}))})}))}))}}},d=(n(377),n(49)),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return t.kanjiList?e("div",[t._l(t.kanjiList,(function(n){return n.meaning?e("div",{key:n.character,staticClass:"kanji sub",on:{mouseover:function(e){t.examplesToShow=n.examples},mouseout:function(e){t.examplesToShow=null}}},[t._v("\n    "+t._s(n.character)+" : "+t._s(n.message||n.meaning)+"\n  ")]):t._e()})),t._v(" "),t.examplesToShow&&t.examplesToShow.length>0?e("div",{staticClass:"examplespopup"},t._l(t.examplesToShow,(function(n,o){return e("div",{key:o,staticClass:"sub"},[t._v("\n      "+t._s(n.japanese)+": "+t._s(n.meaning)+"\n    ")])})),0):t._e()],2):t._e()}),[],!1,null,"40411f44",null);e.default=component.exports},370:function(t,e,n){"use strict";n(345)},371:function(t,e,n){var o=n(116)((function(i){return i[1]}));o.push([t.i,'.editabletext.editabletextediting:empty:before{content:"\ufeff"}.editabletext{cursor:pointer;white-space:normal}.editabletext.placeholder{color:rgba(0,0,0,.2)}.editabletext.editabletextediting{cursor:text;white-space:pre-wrap}.editabletext div,.editabletext h1,.editabletext h2,.editabletext h3,.editabletext h4,.editabletext ol,.editabletext p,.editabletext ul{margin:0;padding:0}.editabletext ol,.editabletext ul{padding:0 10%;text-align:left}',""]),o.locals={},t.exports=o},372:function(t,e,n){"use strict";n(346)},373:function(t,e,n){var o=n(116)((function(i){return i[1]}));o.push([t.i,"svg[data-v-2f1aa15a]{opacity:.3;width:30px!important}img[data-v-2f1aa15a]{margin:0 auto;max-height:250px;max-width:90%;padding-bottom:10px;transition:all .5s}@media(max-width:768px){img[data-v-2f1aa15a]{max-height:200px;padding-bottom:5px}}",""]),o.locals={},t.exports=o},374:function(t,e,n){"use strict";n(347)},375:function(t,e,n){var o=n(116)((function(i){return i[1]}));o.push([t.i,'.button[data-v-148d4cc4]{background:#eee;border-top:1px solid #ddd;cursor:pointer;padding:12px 5px;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:150px}.button[data-v-148d4cc4]:hover{background:#ddd}.button[data-v-148d4cc4]:first-of-type{border-top-right-radius:10px}.button[data-v-148d4cc4]:last-of-type{border-bottom-left-radius:10px;border-bottom-right-radius:10px}.button[data-v-148d4cc4]:first-of-type:last-of-type{border-bottom-left-radius:0}.button[data-v-148d4cc4]:first-child{border-top:none}.cardtools .icon[data-v-148d4cc4]{align-items:center;border-radius:10px;cursor:pointer;display:flex;height:30px;justify-content:center;position:relative;width:30px;z-index:2}.cardtools .icon svg[data-v-148d4cc4]{height:50%;opacity:.1;width:50%;z-index:2}.cardtools .icon.open[data-v-148d4cc4]{background:#eee;border-bottom-left-radius:0;border-bottom-right-radius:0;z-index:3}.cardtools .panel[data-v-148d4cc4]{background:#eee;border-radius:10px;border-top-left-radius:0;color:#000;left:0;position:absolute;top:100%;width:150px}.cardtools .panel[data-v-148d4cc4]:not(.open){display:none}.cardtools .panel.left[data-v-148d4cc4]{border-radius:10px;border-top-right-radius:0;left:auto;right:0}.cardtools .panel .stats[data-v-148d4cc4]{padding:10px 20px}.secondarypanel[data-v-148d4cc4]{left:100%;position:absolute;top:0}.secondarypanel.mobile[data-v-148d4cc4]{color:#555;font-size:.85em;left:-5px;position:relative;top:12px}.secondarypanel.mobile .button[data-v-148d4cc4]{border-radius:0}.secondarypanel.mobile .button[data-v-148d4cc4]:before{color:#555;content:"→"}',""]),o.locals={},t.exports=o},377:function(t,e,n){"use strict";n(348)},378:function(t,e,n){var o=n(116)((function(i){return i[1]}));o.push([t.i,".examplespopup[data-v-40411f44]{background:#f8f8f8;left:0;padding:20px;pointer-events:none;position:absolute;top:0;width:100%}",""]),o.locals={},t.exports=o},379:function(t,e,n){var content=n(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(117).default)("72faea6f",content,!0,{sourceMap:!1})},420:function(t,e,n){"use strict";n(379)},421:function(t,e,n){var o=n(116)((function(i){return i[1]}));o.push([t.i,".extras[data-v-2c57b58b]{padding-bottom:20px}.fakelink[data-v-2c57b58b]{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}",""]),o.locals={},t.exports=o},428:function(t,e,n){"use strict";n.r(e);n(204),n(14),n(25),n(51),n(50),n(85);var o=n(310),r=n(367),d=n(205),c={components:{AutoSpeaker:o.default,StudyExtrasJA:r.default},props:{text:{default:""},secondaryText:{default:""},autoSpeak:{default:!1},shown:{default:!1}},data:function(){return{textToSpeak:""}},computed:{settings:function(){var t,e=this;return null===(t=this.$store.state.setList)||void 0===t?void 0:t.find((function(s){return s.id===e.$store.state.currentSetId})).settings},searchString:function(){return this.text.replace(/\n.*/g,"")},searchWord:function(){return Object(d.getKeyWord)(this.searchString)},pronunciationLink:function(){return"https://forvo.com/word/".concat(this.searchWord,"/#").concat(this.settings.languageTools)},translationLink:function(){return"https://translate.google.com/#".concat(this.settings.languageTools,"/en/").concat(this.searchString)},definitionLink:function(){if("es"===this.settings.languageTools)return"https://www.spanishdict.com/translate/".concat(this.searchString)}},watch:{shown:function(t){t&&this.settings.autoSpeak&&this.speakWord()}},mounted:function(){},methods:{speakWord:function(){var t=this;this.textToSpeak=this.searchString,setTimeout((function(){return t.textToSpeak=""}),300)}}},l=(n(420),n(49)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.text?e("div",{staticClass:"extras"},[t.settings.languageTools?e("AutoSpeaker",{attrs:{text:t.textToSpeak,language:t.settings.languageTools}}):t._e(),t._v(" "),"ja"===t.settings.languageTools?e("StudyExtrasJA",{attrs:{text:t.text,"secondary-text":t.secondaryText}}):t._e(),t._v(" "),e("a",{staticClass:"fakelink sub",on:{click:t.speakWord}},[t._v("Speak it")]),e("span",[t._v(" ・ ")]),t._v(" "),e("a",{staticClass:"sub",attrs:{target:"_blank",href:t.pronunciationLink}},[t._v("Native")]),e("span",[t._v(" ・ ")]),t._v(" "),e("a",{staticClass:"sub",attrs:{target:"_blank",href:t.translationLink}},[t._v("Translation")]),t._v(" "),t.definitionLink?[e("span",[t._v(" ・ ")]),t._v(" "),e("a",{staticClass:"sub",attrs:{target:"_blank",href:t.definitionLink}},[t._v("Definition")])]:t._e()],2):t._e()}),[],!1,null,"2c57b58b",null);e.default=component.exports;installComponents(component,{AutoSpeaker:n(310).default,StudyExtrasJA:n(367).default})},440:function(t,e,n){var content=n(514);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(117).default)("4ce1644b",content,!0,{sourceMap:!1})},513:function(t,e,n){"use strict";n(440)},514:function(t,e,n){var o=n(116)((function(i){return i[1]}));o.push([t.i,'.card[data-v-73c0c912]{overflow:visible;overflow:initial;position:relative;text-align:center}.topleft[data-v-73c0c912]{left:0;position:absolute;top:0}.back[data-v-73c0c912],.front[data-v-73c0c912]{background:#f8f8f8;overflow:hidden;position:relative;transition:.2s}.front[data-v-73c0c912]{border-top-left-radius:10px;border-top-right-radius:10px}.back[data-v-73c0c912]{border-bottom-left-radius:10px;border-bottom-right-radius:10px}.examplefield[data-v-73c0c912]{background:#f8f8f8;color:rgba(0,0,0,.6);font-size:.8rem;line-height:1.2;padding:0 2em 1em;text-align:center}.textfield[data-v-73c0c912]{font-size:1.5rem;padding:45px 30px;transition:padding .5s}@media(max-width:768px){.textfield[data-v-73c0c912]{font-size:1.4rem;padding:35px 25px}}.textfield.editabletextediting[data-v-73c0c912]{background:rgba(0,0,0,.05)}.textfield[data-v-73c0c912]:hover:not(.editabletextediting){background:rgba(0,0,0,.05);position:relative}.textfield[data-v-73c0c912]:hover:not(.editabletextediting):after{content:"CLICK TO EDIT";font-size:.7rem;font-weight:600;opacity:.2;position:absolute;right:10px;top:10px}.newcard[data-v-73c0c912]{color:#09c}.back[data-v-73c0c912]{border-top:1px solid rgba(0,0,0,.15);transition:.2s}.back.pointer[data-v-73c0c912]{cursor:pointer}.back .hideanswer[data-v-73c0c912]{filter:blur(7px);opacity:.15;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.card.mini .textfield[data-v-73c0c912]{font-size:1rem;line-height:1.2;padding:20px 30px}.card.mini .back .textfield[data-v-73c0c912]{padding:20px 15px}.card.mini img[data-v-73c0c912]{margin-top:-10px;max-height:100px;max-width:80%}.card.suspended[data-v-73c0c912]{position:relative}.card.suspended .textfield[data-v-73c0c912]{background:#f5f5f5;color:#bbb}.card.suspended[data-v-73c0c912]:after{color:#888;content:"SUSPENDED";font-size:1.7rem;font-weight:600;left:50%;opacity:1;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none}',""]),o.locals={},t.exports=o}}]);