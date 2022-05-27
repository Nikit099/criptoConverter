(function(){"use strict";var e={6032:function(e,t,s){var n=s(9242),a=s(3396);function c(e,t,s,n,c,r){const i=(0,a.up)("Navbar"),l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i),(0,a.Wm)(l)])}const r={class:"nav"},i=(0,a.Uk)("График Bitcoin"),l=(0,a.Uk)("График Ethereum"),o=(0,a.Uk)("Мой портфель");function u(e,t,s,n,c,u){const d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(d,{class:"link link1",to:"/"},{default:(0,a.w5)((()=>[i])),_:1}),(0,a.Wm)(d,{class:"link link2",to:"/eth"},{default:(0,a.w5)((()=>[l])),_:1}),(0,a.Wm)(d,{class:"link link3",to:"/portfolio"},{default:(0,a.w5)((()=>[o])),_:1})])}var d={},p=s(89);const h=(0,p.Z)(d,[["render",u],["__scopeId","data-v-857a5a9c"]]);var m=h,v={components:{navbarVue:m,Navbar:m},data(){return{}}};const g=(0,p.Z)(v,[["render",c]]);var f=g,y=s(678);const _=e=>((0,a.dD)("data-v-c6ac3484"),e=e(),(0,a.Cn)(),e),S={class:"containerList"},w=_((()=>(0,a._)("h1",null,"Конвертер валют",-1))),C={class:"convertList"},b={class:"convertFields"},D={class:"flexFields"},k={class:"flexSelect"},V={class:"resultConvert"},x={class:"chartB"},F=_((()=>(0,a._)("h2",null,"График Bitcoin за последние 14 дней",-1)));function I(e,t,s,n,c,r){const i=(0,a.up)("CriptoCount"),l=(0,a.up)("CriptoSelect"),o=(0,a.up)("ConvertCount"),u=(0,a.up)("ChartVue");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",S,[w,(0,a._)("div",C,[(0,a._)("div",b,[(0,a._)("div",D,[(0,a.Wm)(i,{class:"numberSlect",value:c.value,onSetValue:r.setValue},null,8,["value","onSetValue"]),(0,a._)("div",k,[(0,a.Wm)(l,{modelValue:c.selectedFirst,onUpdate:r.changeSelectedFirst,selectedArray:c.selected},null,8,["modelValue","onUpdate","selectedArray"]),(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>r.revers&&r.revers(...e))}),(0,a.Wm)(l,{modelValue:c.selectedSecond,onUpdate:r.changeSelectedSecond,selectedArray:c.selected},null,8,["modelValue","onUpdate","selectedArray"])]),(0,a._)("div",V,[(0,a.Wm)(o,{value:c.value,fixing:c.fixing,selectedFirst:c.selectedFirst,selectedSecond:c.selectedSecond,currency:c.currency},null,8,["value","fixing","selectedFirst","selectedSecond","currency"])])])])]),(0,a._)("div",x,[F,(0,a.Wm)(u)])])])}const U={class:"inpBlok"},A=["value"];function O(e,t,s,n,c,r){return(0,a.wg)(),(0,a.iD)("div",U,[(0,a._)("input",{value:s.value,onInput:t[0]||(t[0]=(...e)=>r.changeInput&&r.changeInput(...e)),min:"1",type:"number"},null,40,A)])}var E={props:{value:{type:String}},methods:{changeInput(e){this.$emit("setValue",e.target.value)}}};const W=(0,p.Z)(E,[["render",O],["__scopeId","data-v-3c39ed10"]]);var $=W,Z=s(7139);const P=e=>((0,a.dD)("data-v-6cc4fd4a"),e=e(),(0,a.Cn)(),e),N=P((()=>(0,a._)("option",{disabled:"",selected:""},"Выбери валюту",-1))),j=["value"];function B(e,t,s,c,r,i){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.modelValue=e),onChange:t[1]||(t[1]=(...e)=>i.changeOption&&i.changeOption(...e))},[N,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.selectedArray,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.vlaue,value:e.Value},(0,Z.zw)(e.Value),9,j)))),128))],544)),[[n.bM,s.modelValue]])}var z={props:{selectedArray:{type:Array,default:()=>[]},modelValue:{type:String}},methods:{changeOption(e){this.$emit("update",e.target.value)}}};const T=(0,p.Z)(z,[["render",B],["__scopeId","data-v-6cc4fd4a"]]);var M=T;const H={key:0},q={class:"text1 text"},L={class:"text3 text"},Y={key:1},J=(0,a._)("p",null,"Значения не выбраны",-1),G=[J];function K(e,t,s,n,c,r){return(0,a.wg)(),(0,a.iD)("div",null,[""!==s.selectedFirst&&""!==s.selectedSecond&&s.value>0?((0,a.wg)(),(0,a.iD)("div",H,[(0,a._)("div",q,[(0,a._)("b",null,(0,Z.zw)(s.value),1),(0,a.Uk)(" "+(0,Z.zw)(s.selectedFirst),1)]),(0,a._)("div",L,[(0,a._)("b",null,(0,Z.zw)(s.currency*s.value),1),(0,a.Uk)(" "+(0,Z.zw)(s.selectedSecond),1)])])):((0,a.wg)(),(0,a.iD)("div",Y,G))])}var Q={props:{selectedSecond:{type:String},selectedFirst:{type:String},fixing:{type:Array},currency:{type:Number},value:{type:String}}};const R=(0,p.Z)(Q,[["render",K]]);var X=R;const ee=e=>((0,a.dD)("data-v-58ed1413"),e=e(),(0,a.Cn)(),e),te={class:"Chart"},se=ee((()=>(0,a._)("canvas",{id:"myChart"},null,-1))),ne=[se];function ae(e,t,s,n,c,r){return(0,a.wg)(),(0,a.iD)("div",te,ne)}var ce=s(4851),re={data(){return{}},mounted(){const e=document.querySelector("#myChart"),t=[],s=[],n=(new Date).getDate();for(let r=0;r<14;r++){const e=n-13+r;t.push(e)}async function a(e){const t=e.map((e=>fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${e}-${(new Date).getMonth()+1}-${(new Date).getFullYear()}`)));Promise.all(t).then((e=>{const t=e.map((e=>e.json()));return Promise.all(t)})).then((e=>{e.map((e=>{s.unshift(e.market_data.current_price.usd)})),c()}))}function c(){const n={labels:t,datasets:[{label:"BTC/USD",data:s,fill:!0,borderColor:"#fb9118",tension:0}]};new ce.Z(e,{type:"line",data:n})}a(t)}};const ie=(0,p.Z)(re,[["render",ae],["__scopeId","data-v-58ed1413"]]);var le=ie,oe=s(6265),ue=s.n(oe),de={components:{CriptoCount:$,CriptoSelect:M,ConvertCount:X,ChartVue:le},data(){return{selected:[{vs:"btc",ids:"bitcoin",Value:"Bitcoin (BTC)"},{vs:"eth",ids:"ethereum",Value:"Ether (ETH)"},{vs:"usd",ids:"usd",Value:"US Dollar (USD)"}],selectedFirst:"",selectedSecond:"",currency:0,fixing:["",""],value:"1"}},methods:{changeSelectedFirst(e){this.selectedFirst=e},changeSelectedSecond(e){this.selectedSecond=e},revers(){const e=this.fixing[0];this.fixing[0]=this.fixing[1],this.fixing[1]=e;const t=this.selectedFirst;this.selectedFirst=this.selectedSecond,this.selectedSecond=t},setValue(e){this.value=e},async fetchCours(e,t){const s=await ue().get(`https://api.coingecko.com/api/v3/simple/price?ids=${e}&vs_currencies=${t}`);this.currency=s.data[e][t]}},watch:{selectedFirst(e){this.selected.map((t=>{e===t.Value&&(this.fixing[0]=t.vs)}))},selectedSecond(e){this.selected.map((t=>{e===t.Value&&(this.fixing[1]=t.vs)}))},fixing:{handler(e){let t="",s="";this.selected.map((s=>{e[0]===s.vs&&(t=s.ids)})),this.selected.map((t=>{e[1]===t.vs&&(s=t.vs)})),this.fetchCours(t,s)},deep:!0}}};const pe=(0,p.Z)(de,[["render",I],["__scopeId","data-v-c6ac3484"]]);var he=pe;const me=e=>((0,a.dD)("data-v-12abba75"),e=e(),(0,a.Cn)(),e),ve={class:"containerList"},ge=me((()=>(0,a._)("h1",null,"Конвертер валют",-1))),fe={class:"convertList"},ye={class:"convertFields"},_e={class:"flexFields"},Se={class:"flexSelect"},we={class:"resultConvert"},Ce={class:"chartE"},be=me((()=>(0,a._)("h2",null,"График Ethereim за последние 14 дней",-1)));function De(e,t,s,n,c,r){const i=(0,a.up)("CriptoCount"),l=(0,a.up)("CriptoSelect"),o=(0,a.up)("ConvertCount"),u=(0,a.up)("ChartVue2");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",ve,[ge,(0,a._)("div",fe,[(0,a._)("div",ye,[(0,a._)("div",_e,[(0,a.Wm)(i,{class:"numberSlect",value:c.value,onSetValue:r.setValue},null,8,["value","onSetValue"]),(0,a._)("div",Se,[(0,a.Wm)(l,{modelValue:c.selectedFirst,onUpdate:r.changeSelectedFirst,selectedArray:c.selected},null,8,["modelValue","onUpdate","selectedArray"]),(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>r.revers&&r.revers(...e))}),(0,a.Wm)(l,{modelValue:c.selectedSecond,onUpdate:r.changeSelectedSecond,selectedArray:c.selected},null,8,["modelValue","onUpdate","selectedArray"])]),(0,a._)("div",we,[(0,a.Wm)(o,{value:c.value,fixing:c.fixing,selectedFirst:c.selectedFirst,selectedSecond:c.selectedSecond,currency:c.currency},null,8,["value","fixing","selectedFirst","selectedSecond","currency"])])])])]),(0,a._)("div",Ce,[be,(0,a.Wm)(u)])])])}const ke=e=>((0,a.dD)("data-v-57265a3d"),e=e(),(0,a.Cn)(),e),Ve={class:"Chart"},xe=ke((()=>(0,a._)("canvas",{id:"myChart"},null,-1))),Fe=[xe];function Ie(e,t,s,n,c,r){return(0,a.wg)(),(0,a.iD)("div",Ve,Fe)}var Ue={data(){return{}},mounted(){const e=document.querySelector("#myChart"),t=[],s=[],n=(new Date).getDate();for(let r=0;r<14;r++){const e=n-13+r;t.push(e)}function a(e){const t=e.map((e=>fetch(`https://api.coingecko.com/api/v3/coins/ethereum/history?date=${e}-${(new Date).getMonth()+1}-${(new Date).getFullYear()}`)));Promise.all(t).then((e=>{const t=e.map((e=>e.json()));return Promise.all(t)})).then((e=>{e.map((e=>{s.unshift(e.market_data.current_price.usd)})),c()}))}function c(){const n={labels:t,datasets:[{label:"ETH/USD",data:s,fill:!0,borderColor:"#5d628a",tension:0}]};new ce.Z(e,{type:"line",data:n})}a(t)}};const Ae=(0,p.Z)(Ue,[["render",Ie],["__scopeId","data-v-57265a3d"]]);var Oe=Ae,Ee={components:{CriptoCount:$,CriptoSelect:M,ConvertCount:X,ChartVue2:Oe},data(){return{selected:[{vs:"btc",ids:"bitcoin",Value:"Bitcoin (BTC)"},{vs:"eth",ids:"ethereum",Value:"Ether (ETH)"},{vs:"usd",ids:"usd",Value:"US Dollar (USD)"}],selectedFirst:"",selectedSecond:"",currency:0,fixing:["",""],value:"1"}},methods:{changeSelectedFirst(e){this.selectedFirst=e},changeSelectedSecond(e){this.selectedSecond=e},revers(){const e=this.fixing[0];this.fixing[0]=this.fixing[1],this.fixing[1]=e;const t=this.selectedFirst;this.selectedFirst=this.selectedSecond,this.selectedSecond=t},setValue(e){this.value=e},async fetchCours(e,t){try{const s=await ue().get(`https://api.coingecko.com/api/v3/simple/price?ids=${e}&vs_currencies=${t}`);this.currency=s.data[e][t]}catch(s){alert("Ошибка")}}},watch:{selectedFirst(e){this.selected.map((t=>{e===t.Value&&(this.fixing[0]=t.vs)}))},selectedSecond(e){this.selected.map((t=>{e===t.Value&&(this.fixing[1]=t.vs)}))},fixing:{handler(e){let t="",s="";this.selected.map((s=>{e[0]===s.vs&&(t=s.ids)})),this.selected.map((t=>{e[1]===t.vs&&(s=t.vs)})),this.fetchCours(t,s)},deep:!0}}};const We=(0,p.Z)(Ee,[["render",De],["__scopeId","data-v-12abba75"]]);var $e=We;const Ze={class:"wind"},Pe={class:"containerPort"},Ne={class:"portf"},je={class:"elem"},Be={key:0},ze={key:1},Te={class:"chart"},Me={key:0},He=(0,a.Uk)(" Текущая оценка портфеля в долларах ");function qe(e,t,s,n,c,r){const i=(0,a.up)("portfolio"),l=(0,a.up)("chartPie");return(0,a.wg)(),(0,a.iD)("div",Ze,[(0,a._)("div",Pe,[(0,a._)("div",Ne,[(0,a._)("div",je,[r.showPercentages()?((0,a.wg)(),(0,a.iD)("h2",Be,(0,Z.zw)(r.showPercentages())+"%",1)):((0,a.wg)(),(0,a.iD)("h2",ze,"Валюта не выбрана")),(0,a.Wm)(i,{sumInp:c.sumInp,elements:c.elements,onChange:r.changeValue,onPlusInp:r.getSumInp,onSetFocus:r.setActive},null,8,["sumInp","elements","onChange","onPlusInp","onSetFocus"])]),(0,a._)("div",Te,[(0,a.Wm)(l,{elements:c.elements,percentages:c.percentages},null,8,["elements","percentages"]),c.sumUSD?((0,a.wg)(),(0,a.iD)("p",Me,[He,(0,a._)("b",null,(0,Z.zw)(c.sumUSD.toFixed(1))+"$",1)])):(0,a.kq)("",!0)])])])])}const Le={class:"formChart"};function Ye(e,t,s,n,c,r){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",Le,[(0,a._)("canvas",{onClick:t[0]||(t[0]=(...t)=>e.clickChart&&e.clickChart(...t)),id:"myChart"})])])}var Je={props:{elements:{type:Array},percentages:{type:Array}},data(){return{}},methods:{},mounted(){const e=document.querySelector("#myChart"),t={labels:["Btc","Eth"],datasets:[{label:"My First Dataset",data:this.percentages,backgroundColor:["#fb9118","#5d628a"],hoverOffset:4}]};this.myChart=new ce.Z(e,{type:"doughnut",data:t})},watch:{percentages(e){this.myChart.data.datasets[0].data=e,this.myChart.update()}}};const Ge=(0,p.Z)(Je,[["render",Ye],["__scopeId","data-v-02a360c6"]]);var Ke=Ge;const Qe={class:"list"},Re=["id"],Xe={class:"img"},et=["src"],tt=["id","value"],st={key:0,class:"scale"},nt={key:1,class:"scale"};function at(e,t,s,c,r,i){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("ul",Qe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.elements,(e=>((0,a.wg)(),(0,a.iD)("li",{class:(0,Z.C_)({active:e.focus}),key:e.name,id:e.name,onClick:t[2]||(t[2]=(...e)=>i.focusElem&&i.focusElem(...e))},[(0,a._)("div",Xe,[(0,a._)("img",{src:e.img,alt:""},null,8,et)]),(0,a._)("p",null,(0,Z.zw)(e.name),1),(0,a._)("div",null,[(0,a._)("input",{min:"0",max:"100",type:"number",id:e.name,value:e.scale,onInput:t[0]||(t[0]=(...e)=>i.changeVlaue&&i.changeVlaue(...e)),onClick:t[1]||(t[1]=(0,n.iM)((()=>{}),["stop"]))},null,40,tt)]),e.scale<101?((0,a.wg)(),(0,a.iD)("div",st,(0,Z.zw)(e.percentages)+"%",1)):((0,a.wg)(),(0,a.iD)("div",nt,"Too much"))],10,Re)))),128))])])}var ct={props:{elements:{type:Array},sumInp:{type:Number}},methods:{changeVlaue(e){this.$emit("change",e.target.value,e.target.id),this.$emit("plusInp")},focusElem(e){this.$emit("setFocus",e.target.id)}}};const rt=(0,p.Z)(ct,[["render",at],["__scopeId","data-v-0729ce6e"]]);var it=rt,lt={components:{chartPie:Ke,portfolio:it},data(){return{elements:[],sumInp:0,percentages:[],sumUSD:0,usdArray:[]}},mounted(){this.GetElements(),this.getUsdArray()},methods:{changeValue(e,t){this.elements.forEach((s=>{if(s.name===t)return s.scale=e}))},async getUsdArray(){const e=await ue().get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"),t=await ue().get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");this.usdArray.push(e.data.bitcoin.usd),this.usdArray.push(t.data.ethereum.usd),localStorage.getItem("elements")?this.elements.map((e=>{this.sumUSD+=Number(e.scale)*Number(e.price)})):this.sumUSD=this.usdArray.reduce(((e,t)=>e+t))},showPercentages(){let e="";return this.elements.map((t=>{t.focus&&(e=t.id.toUpperCase()+" "+t.percentages)})),e},setActive(e){this.elements.forEach((t=>t.name===e?t.focus=!t.focus:t.focus=!1))},async GetElements(){if(localStorage.getItem("elements"))this.elements=JSON.parse(localStorage.getItem("elements")),this.percentages=this.elements.map((e=>e.percentages));else{const e=await ue().get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&order=market_cap_desc&per_page=2&page=1&sparkline=false"),t=e.data;t.map((e=>{const t={id:e.id,name:e.symbol,img:e.image,scale:1,percentages:50,focus:!1};this.sumInp+=t.scale,this.elements.push(t),this.percentages=this.elements.map((e=>e.percentages)),localStorage.setItem("elements",JSON.stringify(this.elements))}))}},getSumInp(){this.sumInp=0,this.elements.map((e=>{this.sumInp+=Number(e.scale)}))}},watch:{sumInp(e){this.sumUSD=0;for(let t=0;t<this.elements.length;t++)this.elements[t].percentages=100*Number(this.elements[t].scale)/e,this.elements[t].percentages=this.elements[t].percentages.toFixed(2),this.elements[t].price=this.usdArray[t];this.elements.map((e=>{this.sumUSD+=Number(e.scale)*Number(e.price)})),this.percentages=this.elements.map((e=>e.percentages)),localStorage.setItem("elements",JSON.stringify(this.elements))}}};const ot=(0,p.Z)(lt,[["render",qe],["__scopeId","data-v-9db118da"]]);var ut=ot;const dt=[{path:"/",component:he},{path:"/eth",component:$e},{path:"/portfolio",component:ut}],pt=(0,y.p7)({routes:dt,history:(0,y.r5)("/")});var ht=pt;const mt=(0,n.ri)(f);mt.use(ht).mount("#app")}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,s),c.exports}s.m=e,function(){var e=[];s.O=function(t,n,a,c){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],c=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&c||r>=c)&&Object.keys(s.O).every((function(e){return s.O[e](n[l])}))?n.splice(l--,1):(i=!1,c<r&&(r=c));if(i){e.splice(u--,1);var o=a();void 0!==o&&(t=o)}}return t}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[n,a,c]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,c,r=n[0],i=n[1],l=n[2],o=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)s.o(i,a)&&(s.m[a]=i[a]);if(l)var u=l(s)}for(t&&t(n);o<r.length;o++)c=r[o],s.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return s.O(u)},n=self["webpackChunkjob"]=self["webpackChunkjob"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(6032)}));n=s.O(n)})();
//# sourceMappingURL=app.6b9b346f.js.map