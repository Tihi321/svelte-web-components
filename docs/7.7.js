(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{12:function(t,e,o){"use strict";o.r(e);var r=o(14),c=o(20),s=o(15),n=o(16),i=o(19);function l(t){var e,o,c,s,n;return{c(){e=Object(r.k)("div"),o=Object(r.k)("div"),c=Object(r.k)("div"),s=Object(r.A)(),(n=Object(r.k)("slot")).textContent="Scrolling element",this.c=r.u,Object(r.z)(c,"background-color",t.color),Object(r.z)(c,"transform","translateX("+100*t.$progress+"%)"),Object(r.e)(c,"class","scroller"),Object(r.e)(o,"class","inner"),Object(r.e)(e,"class","loader")},m(i,l){Object(r.q)(i,e,l),Object(r.c)(e,o),Object(r.c)(o,c),Object(r.c)(e,s),Object(r.c)(e,n),t.div2_binding(e)},p(t,e){t.color&&Object(r.z)(c,"background-color",e.color),t.$progress&&Object(r.z)(c,"transform","translateX("+100*e.$progress+"%)")},i:r.u,o:r.u,d(o){o&&Object(r.j)(e),t.div2_binding(null)}}}function a(t,e,o){let l,a,{color:d="#3d7e9a"}=e;const b=Object(c.a)(0,{duration:400,easing:s.a});function u(t){const{scrollY:e}=window,{top:o,height:r,y:c,bottom:s}=a.getBoundingClientRect(),n=e+c,i=window.innerHeight||document.documentElement.clientHeight,l=function(t,e,o,r,c){return(t-e)*(c-r)/(o-e)+r}(e+Math.abs(o),n,i,0,1),d=l>1?1:l;b.set(d)}return Object(r.h)(t,b,t=>{o("$progress",l=t)}),Object(i.a)(()=>(window.addEventListener("scroll",Object(n.debounce)(u,10)),()=>window.removeEventListener("scroll",Object(n.debounce)(u,10)))),t.$set=t=>{"color"in t&&o("color",d=t.color)},{color:d,loader:a,progress:b,$progress:l,div2_binding:function(t){r.f[t?"unshift":"push"](()=>{o("loader",a=t)})}}}class d extends r.a{constructor(t){super(),this.shadowRoot.innerHTML="<style>.loader{position:relative}.inner{position:sticky;width:100%;top:0;overflow:hidden;background-color:#FFFFFF;height:var(--ts-scroller-height, 5px);box-shadow:var(--ts-scroller-shadow, 0 1px 4px 0 rgba(0,0,0,0.3))}.scroller{position:relative;left:-100%;height:100%;width:100%}</style>",Object(r.p)(this,{target:this.shadowRoot},a,l,r.y,["color"]),t&&(t.target&&Object(r.q)(t.target,this,t.anchor),t.props&&(this.$set(t.props),Object(r.m)()))}static get observedAttributes(){return["color"]}get color(){return this.$$.ctx.color}set color(t){this.$set({color:t}),Object(r.m)()}}customElements.define("ts-scroller",d),e.default=d}}]);