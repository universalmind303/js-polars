(()=>{"use strict";var e,r,t={517:(e,r,t)=>{function a(e,r){return new Promise((t=>{e.addEventListener("message",(function a({data:n}){null!=n&&n.type===r&&(e.removeEventListener("message",a),t(n))}))}))}let n;async function o(e,r,o){const s={type:"wasm_bindgen_worker_init",module:e,memory:r,receiver:o.receiver()};n=await Promise.all(Array.from({length:o.numThreads()},(async()=>{const e=new Worker(new URL(t.p+t.u(517),t.b),{type:void 0});return e.postMessage(s),await a(e,"wasm_bindgen_worker_ready"),e}))),o.build()}t.d(r,{Q:()=>o}),a(self,"wasm_bindgen_worker_init").then((async e=>{const r=await t.e(290).then(t.bind(t,290));await r.default(e.module,e.memory),postMessage({type:"wasm_bindgen_worker_ready"}),r.wbg_rayon_start_worker(e.receiver)}))},442:(e,r,t)=>{var a=t(290);self.onmessage=async e=>{await a.default(),await a.init_hooks(),await a.initThreadPool(navigator.hardwareConcurrency),Array.from({length:10},((e,r)=>a.Series.new_f64(`col_${r}`,Array.from({length:1e4},(()=>Math.round(100*Math.random()%100))))));const r=await fetch("https://raw.githubusercontent.com/universalmind303/js-polars/js-polars-try-again/examples/1k.json"),t=await r.arrayBuffer();let n=a.DataFrame.read_json(new Int8Array(t));console.log(n.as_str())}}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,n.x=()=>{var e=n.O(void 0,[290],(()=>n(442)));return n.O(e)},e=[],n.O=(r,t,a,o)=>{if(!t){var s=1/0;for(u=0;u<e.length;u++){for(var[t,a,o]=e[u],i=!0,l=0;l<t.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((e=>n.O[e](t[l])))?t.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var c=a();void 0!==c&&(r=c)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,a,o]},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.k=e=>e+".polars.css",n.u=e=>e+".polars.js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/dist/",(()=>{n.b=self.location+"";var e={318:1,517:1};n.f.i=(r,t)=>{e[r]||importScripts(n.p+n.u(r))};var r=self.webpackChunkrust_webpack_template=self.webpackChunkrust_webpack_template||[],t=r.push.bind(r);r.push=r=>{var[a,o,s]=r;for(var i in o)n.o(o,i)&&(n.m[i]=o[i]);for(s&&s(n);a.length;)e[a.pop()]=1;t(r)}})(),r=n.x,n.x=()=>n.e(290).then(r),n.x()})();
//# sourceMappingURL=318.polars.js.map