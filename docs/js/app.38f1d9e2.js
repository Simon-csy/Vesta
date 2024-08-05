(function(){"use strict";var t={1981:function(t,e,n){var o=n(5130),r=n(4232),i=n(6768);const a={class:(0,r.C4)(["text-center"])};function l(t,e,n,o,l,u){const c=(0,i.g2)("v-timeline-item"),s=(0,i.g2)("v-timeline");return(0,i.uX)(),(0,i.Wv)(s,{align:"start"},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.timelineData,((t,e)=>((0,i.uX)(),(0,i.Wv)(c,{key:e,"dot-color":t.color,size:"small"},{opposite:(0,i.k6)((()=>[(0,i.Lk)("div",{class:(0,r.C4)(`pt-1 headline font-weight-bold text-${t.color}`)},(0,r.v_)(u.formatDate(t.start))+" ~ "+(0,r.v_)(u.formatDate(t.end)),3)])),default:(0,i.k6)((()=>[(0,i.Lk)("div",a,[(0,i.Lk)("h2",{class:(0,r.C4)(`mt-n1 headline font-weight-light mb-4 text-${t.color}`)},(0,r.v_)(t.game.name),3)])])),_:2},1032,["dot-color"])))),128))])),_:1})}var u=n(5768),c={data(){return{timelineData:[],previousColor:null}},mounted(){this.fetchData()},methods:{async fetchData(){try{const t=await fetch("https://www.simonland.me/api/game");if(!t.ok)throw new Error("Failed to fetch data");const e=await t.json();console.log("Fetched data:",e),this.timelineData=e.map((t=>({start:t.start,end:t.end,game:t.game,color:this.getRandomColor()}))),console.log("Mapped timelineData:",this.timelineData)}catch(t){console.error("Error fetching data:",t)}},formatDate(t){return(0,u.GP)(new Date(t),"yyyy-MM-dd")},getRandomColor(){const t=["red","blue","green","orange","purple"];let e=this.previousColor;while(e===this.previousColor)e=t[Math.floor(Math.random()*t.length)];return this.previousColor=e,e},isLeftSide(t){return this.timelineData.indexOf(t)%2===0}}},s=n(1241);const f=(0,s.A)(c,[["render",l],["__scopeId","data-v-0856535a"]]);var d=f,h=(n(5524),n(7768)),v=n(6591),p=n(5741);const m=(0,h.$N)({components:v,directives:p});(0,o.Ef)(d).use(m).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(s=0;s<t.length;s++){o=t[s][0],r=t[s][1],i=t[s][2];for(var l=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(l=!1,i<a&&(a=i));if(l){t.splice(s--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],l=o[1],u=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(u)var s=u(n)}for(e&&e(o);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(s)},o=self["webpackChunkvesta"]=self["webpackChunkvesta"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(1981)}));o=n.O(o)})();
//# sourceMappingURL=app.38f1d9e2.js.map