"use strict";(self.webpackChunkparry84_site=self.webpackChunkparry84_site||[]).push([[763],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),l=new RegExp(i.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,s=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];i&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),i=!1,l=s,s=!0,o++):s&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=s,s=!1,i=!0):(i=r(c)===c&&n(c)!==c,l=s,s=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return q},L:function(){return h},M:function(){return L},P:function(){return k},S:function(){return D},_:function(){return l},a:function(){return s},b:function(){return d},c:function(){return c},g:function(){return m},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,i,l,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=l(e,g);return r.createElement(r.Fragment,null,r.createElement(p,s({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:o}=e,c=l(e,y);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=l(e,f);const o=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,s({},i,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],k=function(e){let{fallback:t}=e,a=l(e,E);return t?r.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const L=function(e){return r.createElement(r.Fragment,null,r.createElement(v,s({},e)),r.createElement("noscript",null,r.createElement(v,s({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=v.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],$=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},I={image:i().object.isRequired,alt:x},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],_=new Set;let O,j;const R=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:d,class:m,onStartLoad:g,onLoad:p,onError:h}=e,y=l(e,T);const{width:f,height:b,layout:v}=n,w=u(f,b,v),{style:E,className:k}=w,L=l(w,N),C=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const $=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,f,b);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(S);if(j&&_.has(S))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:_.has(S),image:n},y)),_.has(S)||(t=requestAnimationFrame((()=>{C.current&&(r=l(C.current,S,_,i,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{_.has(S)&&j&&(C.current.innerHTML=j(s({isLoading:_.has(S),isLoaded:_.has(S),image:n},y)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},L,{style:s({},E,i,{backgroundColor:c}),className:`${k}${d?` ${d}`:""}`,ref:C,dangerouslySetInnerHTML:{__html:$},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));q.propTypes=I,q.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:n,__error:i}=t,o=l(t,A);return i&&console.warn(i),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const z=P((function(e){let{as:t="div",className:a,class:n,style:i,image:o,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:y,objectFit:f,objectPosition:b}=e,v=l(e,C);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=s({objectFit:f,objectPosition:b,backgroundColor:y},p);const{width:w,height:E,layout:x,images:I,placeholder:T,backgroundColor:N}=o,_=u(w,E,x),{style:O,className:j}=_,R=l(_,S),q={fallback:void 0,sources:[]};return I.fallback&&(q.fallback=s({},I.fallback,{srcSet:I.fallback.srcSet?$(I.fallback.srcSet):void 0})),I.sources&&(q.sources=I.sources.map((e=>s({},e,{srcSet:$(e.srcSet)})))),r.createElement(t,s({},R,{style:s({},O,i,{backgroundColor:y}),className:`${j}${a?` ${a}`:""}`}),r.createElement(h,{layout:x,width:w,height:E},r.createElement(k,s({},m(T,!1,x,w,E,N,f,b))),r.createElement(L,s({"data-gatsby-image-ssr":"",className:g},v,d("eager"===c,!1,q,c,p)))))})),F=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},M=new Set(["fixed","fullWidth","constrained"]),W={src:i().string.isRequired,alt:x,width:F,height:F,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};z.displayName="StaticImage",z.propTypes=W;const D=P(q);D.displayName="StaticImage",D.propTypes=W},4840:function(e,t,a){var r=a(7294);t.Z=e=>{let{href:t,children:a,...n}=e;return r.createElement("a",Object.assign({href:t},n,{rel:"noreferrer noopener",target:"_blank"}),a)}},7505:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294);var n=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,t)}},9546:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(1883);var i=e=>{let{title:t,description:a,pathname:i,children:s}=e;const{title:l,description:o,author:c,image:u,siteUrl:d,twitterUsername:m}=(0,n.useStaticQuery)("3303551625").site.siteMetadata,g={title:t||l,description:a||o,author:c,image:`${d}${u}`,url:`${d}${i||""}`,twitterUsername:m};return r.createElement(r.Fragment,null,r.createElement("title",null,g.title),r.createElement("link",{rel:"canonical",href:`${g.url}/`}),r.createElement("meta",{name:"robots",content:"all"}),r.createElement("meta",{name:"description",content:g.description}),r.createElement("meta",{name:"author",content:g.author}),r.createElement("meta",{property:"og:title",content:g.title}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:url",content:`${g.url}/`}),r.createElement("meta",{property:"og:image",content:g.image}),r.createElement("meta",{property:"og:description",content:g.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:creator",content:"@elparro84"}),r.createElement("meta",{name:"twitter:site",content:"@elparro84"}),r.createElement("meta",{name:"twitter:title",content:g.title}),r.createElement("meta",{name:"twitter:description",content:g.description}),r.createElement("meta",{name:"twitter:domain",content:`${g.url}/`}),r.createElement("meta",{name:"twitter:image:src",content:g.image}),s)}}}]);
//# sourceMappingURL=980688b0a8281bb4d409a1d1bba0bceedc5fd951-7b9b2cb959d56066defa.js.map