!function(t){function e(e){for(var o,r,a=e[0],i=e[1],s=0,l=[];s<a.length;s++)r=a[s],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&l.push(n[r][0]),n[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);for(u&&u(e);l.length;)l.shift()()}var o={},n={0:0};function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(){return Promise.resolve()},r.m=t,r.c=o,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var u=i;r(r.s=0)}([function(t,e,o){t.exports=o(1)},function(t,e,o){"use strict";o.r(e);var n;n=function(){document.querySelector("ts-random-quote")&&Promise.resolve().then(o.bind(null,2))},"interactive"===document.readyState||"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)},function(t,e,o){"use strict";function n(){}o.r(e);function r(t){return t()}function a(){return Object.create(null)}function i(t){t.forEach(r)}function s(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return 0===Object.keys(t).length}new Set;function h(t,e){t.appendChild(e)}function c(t,e,o){t.insertBefore(e,o||null)}function d(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(t,e,o){null==o?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e,o){t.classList[o?"add":"remove"](e)}function x(t){const e={};for(const o of t)e[o.name]=o.value;return e}new Set;let w;function b(t){w=t}const v=[],$=[],k=[],T=[],_=Promise.resolve();let S=!1;function E(){S||(S=!0,_.then(A))}function B(t){k.push(t)}let L=!1;const j=new Set;function A(){if(!L){L=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];b(e),O(e.$$)}for(b(null),v.length=0;$.length;)$.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];j.has(e)||(j.add(e),e())}k.length=0}while(v.length);for(;T.length;)T.pop()();S=!1,L=!1,j.clear()}}function O(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const P=new Set;function W(t,e){t&&t.i&&(P.delete(t),t.i(e))}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let q;function C(t,e){const o=t.$$;null!==o.fragment&&(i(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function M(t,e,o,u,l,h,c=[-1]){const f=w;b(t);const p=t.$$={fragment:null,ctx:null,props:h,update:n,not_equal:l,bound:a(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:a(),dirty:c,skip_bound:!1};let m=!1;if(p.ctx=o?o(t,e.props||{},(e,o,...n)=>{const r=n.length?n[0]:o;return p.ctx&&l(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),m&&function(t,e){-1===t.$$.dirty[0]&&(v.push(t),E(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),o}):[],p.update(),m=!0,i(p.before_update),p.fragment=!!u&&u(p.ctx),e.target){if(e.hydrate){const t=(y=e.target,Array.from(y.childNodes));p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();e.intro&&W(t.$$.fragment),function(t,e,o,n){const{fragment:a,on_mount:u,on_destroy:l,after_update:h}=t.$$;a&&a.m(e,o),n||B(()=>{const e=u.map(r).filter(s);l?l.push(...e):i(e),t.$$.on_mount=[]}),h.forEach(B)}(t,e.target,e.anchor,e.customElement),A()}var y;b(f)}"function"==typeof HTMLElement&&(q=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(r).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,o){this[t]=o}disconnectedCallback(){i(this.$$.on_disconnect)}$destroy(){C(this,1),this.$destroy=n}$on(t,e){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function H(t){let e,o,r,a,i,s;return{c(){e=f("div"),o=f("div"),r=p(t[0]),a=p(" "),i=f("div"),s=p(t[1]),this.c=n,m(o,"class","quote"),m(i,"class","author"),m(e,"class","quotes"),g(e,"hide",t[2])},m(t,n){c(t,e,n),h(e,o),h(o,r),h(e,a),h(e,i),h(i,s)},p(t,[o]){1&o&&y(r,t[0]),2&o&&y(s,t[1]),4&o&&g(e,"hide",t[2])},i:n,o:n,d(t){t&&d(e)}}}function D(t,e,o){const n=[{text:"Genius is one percent inspiration and ninety-nine percent perspiration.",author:"Thomas Edison"},{text:"You can observe a lot just by watching.",author:"Yogi Berra"},{text:"A house divided against itself cannot stand.",author:"Abraham Lincoln"},{text:"Difficulties increase the nearer we get to the goal.",author:"Johann Wolfgang von Goethe"},{text:"Fate is in your hands and no one elses",author:"Byron Pulsifer"},{text:"Be the chief but never the lord.",author:"Lao Tzu"},{text:"Nothing happens unless first we dream.",author:"Carl Sandburg"},{text:"Well begun is half done.",author:"Aristotle"},{text:"Life is a learning experience, only if you learn.",author:"Yogi Berra"},{text:"Self-complacency is fatal to progress.",author:"Margaret Sangster"},{text:"Peace comes from within. Do not seek it without.",author:"Buddha"},{text:"What you give is what you get.",author:"Byron Pulsifer"},{text:"We can only learn to love by loving.",author:"Iris Murdoch"},{text:"Life is change. Growth is optional. Choose wisely.",author:"Karen Clark"},{text:"You'll see it when you believe it.",author:"Wayne Dyer"},{text:"Today is the tomorrow we worried about yesterday.",author:null},{text:"It's easier to see the mistakes on someone else's paper.",author:null},{text:"Every man dies. Not every man really lives.",author:null},{text:"To lead people walk behind them.",author:"Lao Tzu"},{text:"Having nothing, nothing can he lose.",author:"William Shakespeare"},{text:"Trouble is only opportunity in work clothes.",author:"Henry J. Kaiser"},{text:"A rolling stone gathers no moss.",author:"Publilius Syrus"},{text:"Ideas are the beginning points of all fortunes.",author:"Napoleon Hill"},{text:"Everything in life is luck.",author:"Donald Trump"},{text:"Doing nothing is better than being busy doing nothing.",author:"Lao Tzu"},{text:"Trust yourself. You know more than you think you do.",author:"Benjamin Spock"},{text:"Study the past, if you would divine the future.",author:"Confucius"},{text:"The day is already blessed, find peace within it.",author:null},{text:"From error to error one discovers the entire truth.",author:"Sigmund Freud"},{text:"Well done is better than well said.",author:"Benjamin Franklin"},{text:"Bite off more than you can chew, then chew it.",author:"Ella Williams"},{text:"Work out your own salvation. Do not depend on others.",author:"Buddha"},{text:"One today is worth two tomorrows.",author:"Benjamin Franklin"},{text:"Once you choose hope, anythings possible.",author:"Christopher Reeve"},{text:"God always takes the simplest way.",author:"Albert Einstein"},{text:"One fails forward toward success.",author:"Charles Kettering"},{text:"From small beginnings come great things.",author:null},{text:"Learning is a treasure that will follow its owner everywhere",author:"Chinese proverb"},{text:"Be as you wish to seem.",author:"Socrates"},{text:"The world is always in movement.",author:"V. Naipaul"},{text:"Never mistake activity for achievement.",author:"John Wooden"},{text:"What worries you masters you.",author:"Haddon Robinson"},{text:"One faces the future with ones past.",author:"Pearl Buck"},{text:"Goals are the fuel in the furnace of achievement.",author:"Brian Tracy"},{text:"Who sows virtue reaps honour.",author:"Leonardo da Vinci"},{text:"Be kind whenever possible. It is always possible.",author:"Dalai Lama"},{text:"Talk doesn't cook rice.",author:"Chinese proverb"},{text:"He is able who thinks he is able.",author:"Buddha"},{text:"A goal without a plan is just a wish.",author:"Larry Elder"},{text:"To succeed, we must first believe that we can.",author:"Michael Korda"},{text:"Learn from yesterday, live for today, hope for tomorrow.",author:"Albert Einstein"},{text:"A weed is no more than a flower in disguise.",author:"James Lowell"},{text:"Do, or do not. There is no try.",author:"Yoda"},{text:"All serious daring starts from within.",author:"Harriet Beecher Stowe"},{text:"The best teacher is experience learned from failures.",author:"Byron Pulsifer"},{text:"Think how hard physics would be if particles could think.",author:"Murray Gell-Mann"},{text:"Love is the flower you've got to let grow.",author:"John Lennon"},{text:"Don't wait. The time will never be just right.",author:"Napoleon Hill"},{text:"Time is the wisest counsellor of all.",author:"Pericles"},{text:"You give before you get.",author:"Napoleon Hill"},{text:"Wisdom begins in wonder.",author:"Socrates"},{text:"Without courage, wisdom bears no fruit.",author:"Baltasar Gracian"},{text:"Change in all things is sweet.",author:"Aristotle"},{text:"What you fear is that which requires action to overcome.",author:"Byron Pulsifer"},{text:"When performance exceeds ambition, the overlap is called success.",author:"Cullen Hightower"},{text:"When deeds speak, words are nothing.",author:"African proverb"},{text:"Real magic in relationships means an absence of judgement of others.",author:"Wayne Dyer"},{text:"I never think of the future. It comes soon enough.",author:"Albert Einstein"},{text:"Skill to do comes of doing.",author:"Ralph Emerson"},{text:"Wisdom is the supreme part of happiness.",author:"Sophocles"},{text:"I believe that every person is born with talent.",author:"Maya Angelou"},{text:"Important principles may, and must, be inflexible.",author:"Abraham Lincoln"},{text:"The undertaking of a new action brings new strength.",author:"Richard Evans"},{text:"The years teach much which the days never know.",author:"Ralph Emerson"},{text:"Our distrust is very expensive.",author:"Ralph Emerson"},{text:"All know the way; few actually walk it.",author:"Bodhidharma"},{text:"Great talent finds happiness in execution.",author:"Johann Wolfgang von Goethe"}];let{quote:r="Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."}=e,{author:a="Mark Twain"}=e,i=!1;return setInterval(async()=>{o(2,i=!0),await new Promise(t=>setTimeout(t,500));const t=n[(e=n.length-1,Math.floor(Math.random()*e))];var e;o(0,r=t.text),o(1,a=t.author),await new Promise(t=>setTimeout(t,500)),o(2,i=!1)},1e4),t.$$set=t=>{"quote"in t&&o(0,r=t.quote),"author"in t&&o(1,a=t.author)},[r,a,i]}class N extends q{constructor(t){super(),this.shadowRoot.innerHTML="<style>.quotes{display:flex;justify-content:center;align-items:center;flex-direction:column;color:#788d93;font-size:24px;line-height:1.25;text-align:center;font-weight:300;text-align:center;opacity:1;transition:opacity 0.3s ease-in;height:200px}.hide{opacity:0}.quote{max-width:80%}.author{margin-top:15px}</style>",M(this,{target:this.shadowRoot,props:x(this.attributes),customElement:!0},D,H,u,{quote:0,author:1}),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),A()))}static get observedAttributes(){return["quote","author"]}get quote(){return this.$$.ctx[0]}set quote(t){this.$set({quote:t}),A()}get author(){return this.$$.ctx[1]}set author(t){this.$set({author:t}),A()}}customElements.define("ts-random-quote",N);e.default=N}]);