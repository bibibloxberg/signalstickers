(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{629:function(e,t,a){"use strict";a.r(t),function(e){var r,s=a(74),n=a(1),o=a.n(n),c=a(189),l=a(643),i=a(661),u=a(188),d=a(267),m=a(662),f=a(667);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const h=Object(s.a)("div")({name:"StyledHome",class:"s1kdyk3t"}),p=()=>{const{searchQuery:e,setSearchQuery:t}=o.a.useContext(c.b),a=Object(l.a)(),r=Object(i.a)();o.a.useEffect(()=>{const e=a[d.b]?a[d.b]:null;"string"==typeof e&&t(e)},[]),o.a.useEffect(()=>{r({query:{[d.b]:e||null}})},[e]);const s=o.a.useMemo(()=>o.a.createElement(u.a,{href:"https://support.signal.org/hc/en-us/articles/360031836512-Stickers",title:"Stickers - Signal Support"},"sticker packs"),[]),n=o.a.useMemo(()=>o.a.createElement(u.a,{href:"https://twitter.com/signalstickers",title:"Twitter"},"@signalstickers"),[]);return o.a.createElement(h,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 mt-4 mb-1 mb-md-3 pt-lg-2"},o.a.createElement("p",{className:"intro"},"Welcome to Signal Stickers, the unofficial directory for Signal ",s,". You can filter packs by title, author, or tags. Follow ",n," on Twitter to stay tuned for new packs!"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(m.a,null))),o.a.createElement(f.a,null))};b(p,"useContext{{\n    searchQuery,\n    setSearchQuery\n  }}\nuseQuery{query}\nuseUpdateUrl{updateUrl}\nuseEffect{}\nuseEffect{}\nuseMemo{stickerPackLink}\nuseMemo{twitterLink}",()=>[l.a,i.a]);const k=p;var g,v;t.default=k,a(673),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(h,"StyledHome","/home/travis/build/signalstickers/signalstickers/src/components/home/Home.tsx"),g.register(p,"HomeComponent","/home/travis/build/signalstickers/signalstickers/src/components/home/Home.tsx"),g.register(k,"default","/home/travis/build/signalstickers/signalstickers/src/components/home/Home.tsx")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}.call(this,a(27)(e))},643:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return i}));var r,s,n,o=a(641),c=a.n(o),l=a(15);function i(){return c.a.parse(Object(l.l)().search)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(i,"useLocation{}",()=>[l.l]),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(i,"useQuery","/home/travis/build/signalstickers/signalstickers/src/hooks/use-query.ts"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,a(27)(e))},661:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return u}));var r,s,n,o=a(641),c=a.n(o),l=a(760),i=a(15);function u(){const e=Object(i.k)();return t=>{const a=c.a.parseUrl(e.location.pathname),r=c.a.stringifyUrl(l.a(a,t));e.replace(r)}}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(u,"useHistory{history}",()=>[i.k]),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(u,"useUpdateUrl","/home/travis/build/signalstickers/signalstickers/src/hooks/use-update-url.ts"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,a(27)(e))},662:function(e,t,a){"use strict";(function(e){var r,s=a(663),n=a.n(s),o=a(74),c=a(1),l=a.n(c),i=a(665),u=a(112),d=a(179),m=a(189);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const b=Object(o.a)("div")({name:"SearchInput",class:"sooxe2f"}),h=Object(o.a)("div")({name:"SearchPrepend",class:"sbfo2dx"}),p=Object(o.a)("div")({name:"SearchHelp",class:"s1mpu9hs"}),k=Object(o.a)("div")({name:"SearchClear",class:"s1vlsbwh"}),g=Object(o.a)("button")({name:"MiniTag",class:"m1hdpes4"}),v=()=>{const{searcher:e,searchQuery:t,searchResults:a,setSearchQuery:r}=l.a.useContext(m.b),[s,o]=l.a.useState(""),c=l.a.useRef(null),f=["cute","privacy","meme","for children"],v=n()(r,{wait:250});l.a.useEffect(()=>{t&&o(t)},[t]);const y=l.a.useCallback(e=>{const{value:t}=e.target;o(t)},[o]);l.a.useEffect(()=>(v.cancel(),v(s),()=>{v.cancel()}),[v,s]);const S=l.a.useCallback(t=>{e&&t.currentTarget.textContent&&r(e.buildQueryString({attributeQueries:[{tag:t.currentTarget.textContent}]}))},[e,r]),H=l.a.useCallback(()=>{c.current&&(c.current.style.opacity="1",c.current.style.pointerEvents="initial")},[c]),L=l.a.useCallback(()=>{c.current&&(c.current.style.opacity="0",setTimeout(()=>{c.current&&(c.current.style.pointerEvents="none")},250))},[c]),E=l.a.useCallback(e=>{e.preventDefault(),o(""),r("")},[o,r]);l.a.useEffect(()=>{t&&o(t)},[t]),l.a.useEffect(()=>(v.cancel(),v(s),()=>{v.cancel()}),[v,s]);const G=l.a.useMemo(()=>f.map(e=>l.a.createElement(g,{type:"button",key:e,className:"btn mr-1",onClick:S},e)),[f]);return l.a.createElement(b,{className:"form-group mb-4 mb-md-5"},l.a.createElement("div",{className:"mb-1 position-relative"},l.a.createElement(h,null,l.a.createElement(u.i,null)),l.a.createElement("input",{type:"text",key:"search",className:"form-control form-control-lg",onBlur:L,onChange:y,onFocus:H,value:s,title:"Search","aria-label":"search",autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:"false"}),l.a.createElement(p,{ref:c},l.a.createElement(i.HashLink,{to:"/about#searching",title:"Search Help"},l.a.createElement(d.b,{className:"text-muted"}))),l.a.createElement(k,null,l.a.createElement("button",{type:"button",className:"btn btn-link border-0",title:"Clear Search Results",onClick:E},l.a.createElement(u.l,null)))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",null,l.a.createElement("small",null,"Lost? Why not start with these tags?"," "),l.a.createElement("br",{className:"d-inline d-md-none"}),G),l.a.createElement("div",{className:"text-muted"},l.a.createElement("small",null,(null==a?void 0:a.length)||0," ",1===a.length?"result":"results"))))};f(v,"useContext{{\n    searcher,\n    searchQuery,\n    searchResults,\n    setSearchQuery\n  }}\nuseState{[searchQueryInputValue, setSearchQueryInputValue]('')}\nuseRef{searchHelpRef}\nuseEffect{}\nuseCallback{onSearchQueryInputChange}\nuseEffect{}\nuseCallback{onTagClick}\nuseCallback{handleInputFocus}\nuseCallback{handleInputBlur}\nuseCallback{clearSearchResults}\nuseEffect{}\nuseEffect{}\nuseMemo{tagsFragment}");const y=v;var S,H;t.a=y,a(666),(S="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(S.register(b,"SearchInput","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx"),S.register(h,"SearchPrepend","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx"),S.register(p,"SearchHelp","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx"),S.register(k,"SearchClear","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx"),S.register(g,"MiniTag","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx"),S.register(v,"SearchInputComponent","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx"),S.register(y,"default","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx")),(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&H(e)}).call(this,a(27)(e))},666:function(e,t,a){"use strict";a.r(t)},667:function(e,t,a){"use strict";(function(e){var r,s=a(74),n=a(1),o=a.n(n),c=a(73),l=a(668),i=a(761),u=a(189),d=a(670);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const f=Object(s.a)("div")({name:"StickerPackList",class:"soapbay"}),b=()=>{const{searchResults:e}=o.a.useContext(u.b),[t,a]=o.a.useState(0),[r,s]=o.a.useState([]),n=o.a.useCallback(()=>{if(r.length>=e.length)return;const n=t+64;a(n),s(i.a(n,e))},[t,e,r]);return o.a.useLayoutEffect(()=>{a(0),s([]),n()},[e]),o.a.createElement(f,{className:"row"},r.map(e=>o.a.createElement("div",{className:"col-6 col-md-4 col-lg-3 mb-4",key:e.item.meta.id},o.a.createElement(c.Link,{to:"/pack/"+e.item.meta.id},o.a.createElement(d.a,{stickerPack:e.item})))),o.a.createElement(l.a,{key:t,onEnter:n,bottomOffset:"-500px"}))};m(b,"useContext{{\n    searchResults\n  }}\nuseState{[cursor, setCursor](0)}\nuseState{[renderedSearchResults, setRenderedSearchResults]([])}\nuseCallback{loadMore}\nuseLayoutEffect{}");const h=b;var p,k;t.a=h,a(672),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(f,"StickerPackList","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchResults.tsx"),p.register(64,"PAGE_SIZE","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchResults.tsx"),p.register(b,"StickerPackListComponent","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchResults.tsx"),p.register(h,"default","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchResults.tsx")),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&k(e)}).call(this,a(27)(e))},670:function(e,t,a){"use strict";(function(e){var r,s=a(74),n=a(1),o=a.n(n),c=a(82),l=a.n(c),i=a(190);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const d=Object(s.a)("div")({name:"StickerPackPreviewCard",class:"s6bnemm",vars:{"s6bnemm-0":[e=>e.original?"block":"none"],"s6bnemm-1":[e=>e.animated?"block":"none"],"s6bnemm-2":[e=>e.nsfw?"blur(4px)":"none"]}}),m=e=>{const[t,a]=o.a.useState(),{meta:r,manifest:s}=e.stickerPack;l()(async()=>{try{if(void 0!==r.id){const e=await Object(i.a)(r.id,r.key,s.cover.id);a(e)}}catch(e){console.error("[StickerPackPreviewCard::Effect::GetCover] "+e.message)}},[r.id,r.key,s.cover.id]);const n=`${s.title}${r.nsfw?" (NSFW)":""}`;return o.a.createElement(d,{className:"card",original:r.original,animated:r.animated,nsfw:r.nsfw,"aria-label":n},t?o.a.createElement("img",{className:"card-img-top",src:t,alt:"Cover"}):o.a.createElement("div",{className:"card-img-top"}," "),o.a.createElement("div",{className:"card-header"},n))};u(m,"useState{[cover, setCover]}\nuseAsyncEffect{}",()=>[l.a]);const f=m;var b,h;t.a=f,a(671),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(d,"StickerPackPreviewCard","/home/travis/build/signalstickers/signalstickers/src/components/home/StickerPackPreviewCard.tsx"),b.register(m,"StickerPackPreviewCardComponent","/home/travis/build/signalstickers/signalstickers/src/components/home/StickerPackPreviewCard.tsx"),b.register(f,"default","/home/travis/build/signalstickers/signalstickers/src/components/home/StickerPackPreviewCard.tsx")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}).call(this,a(27)(e))},671:function(e,t,a){"use strict";a.r(t)},672:function(e,t,a){"use strict";a.r(t)},673:function(e,t,a){"use strict";a.r(t)}}]);
//# sourceMappingURL=home-55d44a0f64be5830e140.js.map