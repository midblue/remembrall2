(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{302:function(e,t,n){"use strict";n.r(t);n(25),n(51);var o={props:{text:{required:!1,default:"",type:String},lineBreaksAllowed:{required:!1,default:!0,type:Boolean},acceptBlank:{required:!1,default:!1,type:Boolean},disableEdits:{required:!1,default:!1,type:Boolean},placeholder:{required:!1,default:"",type:String},focus:{required:!1,default:!1,type:Boolean}},components:{},data:function(){return{displayText:this.text,isEditing:!1,metaDown:!1,shiftDown:!1,isPlaceholder:0===this.text.length}},model:{prop:"text",event:"changeText"},computed:{},watch:{text:function(e){this.isEditing||this.resetTextTo(e)},disableEdits:function(e){this.isEditing=!1,this.metaDown=!1,this.shiftDown=!1},focus:function(e){var t=this;e&&this.$nextTick((function(){t.startEdit()}))}},mounted:function(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp),this.isPlaceholder&&(this.displayText=this.placeholder),this.focus&&this.startEdit()},beforeDestroy:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp)},methods:{startEdit:function(){var e=this;this.isEditing||this.disableEdits||(this.isEditing=!0,this.isPlaceholder&&(this.displayText=""),this.isPlaceholder=!1,this.metaDown=!1,this.shiftDown=!1,this.$nextTick((function(){e.$el.focus(),e.$nextTick(e.selectText)})),this.$emit("startEdit",this.displayText))},resetTextTo:function(e){var t=this;this.displayText="",this.$el.innerHTML="",this.$nextTick((function(){t.displayText=e,e||!t.placeholder||t.isEditing||(t.displayText=t.placeholder,t.isPlaceholder=!0)}))},commitEdit:function(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty(),this.isEditing=!1,this.metaDown=!1,this.shiftDown=!1;var e=this.sanitize(this.$el.innerHTML);e.length>0?this.$emit("endEdit",e):this.resetTextTo(this.text)},keyDown:function(e){this.isEditing&&!this.disableEdits&&("Meta"===e.key&&(this.metaDown=!0),"Shift"===e.key&&(this.shiftDown=!0),"Enter"!==e.key||this.lineBreaksAllowed||this.commitEdit(),"Enter"===e.key&&this.metaDown&&this.commitEdit(),"Tab"===e.key&&this.shiftDown&&this.$emit("prev",e),"Tab"===e.key&&this.$emit("next",e),"Escape"===e.key&&(this.resetTextTo(this.text),this.$nextTick(this.commitEdit)))},keyUp:function(e){this.isEditing&&!this.disableEdits&&("Meta"===e.key&&(this.metaDown=!1),"Shift"===e.key&&(this.shiftDown=!1))},selectText:function(){if(document.body.createTextRange){var e=document.body.createTextRange();e.moveToElementText(this.$el),e.select()}else if(window.getSelection){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(this.$el),t.removeAllRanges(),t.addRange(n)}},sanitize:function(text){return text.replace(/<div>/g,"\n").replace(/<br\s?\/?>/g,"\n").replace(/<[^>]*>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/^[\s\n\t]*/g,"")},paste:function(e){e.stopPropagation(),e.preventDefault();var t=e.clipboardData||window.clipboardData,n=this.sanitize(t.getData("Text"));if(/.(jpe?g|png|gif|webm|bmp)$/gi.test(n))return this.$emit("setImageURL",n);if(/^data:/gi.test(n))return alert("that's image data, not a link! make sure you get an image url that ends in .jpg, .png, .gif, etc.");var o,l,r,d,c,h=document.activeElement.innerText,f=(o=this.$el,l=function(){var e=window.getSelection();if(null!=e&&e.rangeCount>0){var t=e.getRangeAt(0);return{start:r(o,t.startContainer,t.startOffset),end:r(o,t.endContainer,t.endOffset)}}return null},r=function e(t,n,o){var l=0;if("#text"===n.nodeName)l+=o;else for(var i=0;i<o;i++)l+=d(n.childNodes[i]);return n!==t&&(l+=e(t,n.parentNode,c(n))),l},d=function e(t){var n=0;if("BR"===t.nodeName)n=1;else if("#text"===t.nodeName)n=t.nodeValue.length;else if(null!==t.childNodes)for(var i=0;i<t.childNodes.length;i++)n+=e(t.childNodes[i]);return n},c=function e(t){return null==t?-1:1+e(t.previousSibling)},l(document.activeElement)),m=h.substring(0,f.start)+n+h.substring(f.end);this.displayText=m,this.$emit("changeText",m),this.$nextTick(this.moveCursorToEnd)},moveCursorToEnd:function(){var e,t;document.createRange?((e=document.createRange()).selectNodeContents(this.$el),e.collapse(!1),(t=window.getSelection()).removeAllRanges(),t.addRange(e)):document.selection&&((e=document.body.createTextRange()).moveToElementText(this.$el),e.collapse(!1),e.select())}}},l=(n(323),n(49)),component=Object(l.a)(o,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"editabletext",class:{editabletextediting:e.isEditing,placeholder:e.isPlaceholder},attrs:{contenteditable:e.isEditing,tabindex:"0"},domProps:{innerHTML:e._s(e.displayText)},on:{focus:e.startEdit,click:e.startEdit,input:function(t){e.$emit("changeText",e.sanitize(e.$el.innerHTML))},blur:e.commitEdit,paste:e.paste}})}),[],!1,null,null,null);t.default=component.exports},306:function(e,t,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(117).default)("08509a0a",content,!0,{sourceMap:!1})},323:function(e,t,n){"use strict";n(306)},324:function(e,t,n){var o=n(116)((function(i){return i[1]}));o.push([e.i,".editabletext{cursor:pointer}.editabletext.placeholder{color:rgba(0,0,0,.2)}.editabletext.editabletextediting{cursor:text}",""]),o.locals={},e.exports=o}}]);