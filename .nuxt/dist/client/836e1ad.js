(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{352:function(e,t,r){var content=r(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(116).default)("0c75da74",content,!0,{sourceMap:!1})},388:function(e,t,r){"use strict";r(352)},389:function(e,t,r){var n=r(115)((function(i){return i[1]}));n.push([e.i,".refreshtakeover[data-v-97f78d7e]{align-items:center;background:hsla(0,0%,100%,0);display:flex;font-size:1.5em;height:100vh;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.4s;width:100%;z-index:2000}.refreshtakeover>*[data-v-97f78d7e]{opacity:0;transition:.4s}.refreshtakeover.on[data-v-97f78d7e]{background:hsla(0,0%,100%,.95);pointer-events:auto}.refreshtakeover.on>*[data-v-97f78d7e]{opacity:1}",""]),n.locals={},e.exports=n},391:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{startTime:null,requireRefreshTime:3e5,refreshing:!1}},computed:{currentUser:function(){return this.$store.state.currentUser}},mounted:function(){this.startTime=Date.now(),window.addEventListener("focus",this.checkIfRefreshNeeded)},beforeDestroy:function(){window.removeEventListener("focus",this.checkIfRefreshNeeded)},methods:{checkIfRefreshNeeded:function(){this.currentUser&&Date.now()-this.startTime>this.requireRefreshTime&&this.refresh(),this.startTime=Date.now()},refresh:function(){this.startTime=Date.now(),this.$store.dispatch("logInAs",this.currentUser)}}},o=(r(388),r(50)),component=Object(o.a)(n,(function(){var e=this._self._c;return e("div",{staticClass:"refreshtakeover",class:{on:!1}},[e("span",[this._v("Loading data...")])])}),[],!1,null,"97f78d7e",null);t.default=component.exports}}]);