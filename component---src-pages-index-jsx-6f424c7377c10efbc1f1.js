(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/9aa":function(e,t,n){var o=n("NykK"),r=n("ExA7");e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},AP2z:function(e,t,n){var o=n("nmnc"),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,l=o?o.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),n=e[l];try{e[l]=void 0;var o=!0}catch(c){}var r=a.call(e);return o&&(t?e[l]=n:delete e[l]),r}},Dtc0:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),i=n("ntAx"),a=n("DGZL"),l=n("bSql"),c=n("PZY4"),u=n("XUsr"),s=n("C4nX");t.default=function(e){var t=e.data.allMarkdownRemark.nodes;return 0===t.length?r.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'):r.a.createElement(i.a,null,r.a.createElement(a.a,{title:s.title,description:s.description,url:s.siteUrl}),r.a.createElement(l.a,null),r.a.createElement(u.a,null),r.a.createElement(c.a,{postList:t}))}},DzJC:function(e,t,n){var o=n("sEfC"),r=n("GoyQ");e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return r(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),o(e,t,{leading:i,maxWait:t,trailing:a})}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},GoyQ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},GxtF:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("vOnD"),a=n("Wbzz"),l=i.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-u45alg-0"})(["display:flex;flex-wrap:wrap;column-gap:8px;row-gap:8px;word-break:break-all;a{display:block;text-decoration:none;padding:9.6px 11.2px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:background-color 200ms;&:hover{background-color:",";}}"],(function(e){return e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground}),(function(e){return e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText}),(function(e){return e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground})),c=function(e){return e.replace(/\s+/g,"-")};t.a=function(e){var t=e.tagList,n=e.count,o=e.selected;return t?n?r.a.createElement(l,null,t.map((function(e,t){return r.a.createElement(a.Link,{key:JSON.stringify({tag:e,i:t}),to:o===e.fieldValue?"/tags":"/tags?q="+e.fieldValue,selected:e.fieldValue===o},c(e.fieldValue)," (",e.totalCount,")")}))):r.a.createElement(l,null,t.map((function(e,t){return r.a.createElement(a.Link,{key:JSON.stringify({tag:e,i:t}),to:"/tags?q="+e},c(e))}))):null}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var o=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},NykK:function(e,t,n){var o=n("nmnc"),r=n("AP2z"),i=n("KfNM"),a=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):i(e)}},PZY4:function(e,t,n){"use strict";var o=n("DzJC"),r=n.n(o),i=n("q1tI"),a=n.n(i),l=n("vOnD"),c=n("Wbzz"),u=n("PyCY"),s=n("XUsr"),f=n("GxtF"),p=l.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1yxgspy-0"})(["@media (max-width:768px){padding:0 10px;}"]),d=l.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1yxgspy-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),m=l.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-1yxgspy-2"})(["margin-bottom:15px;font-size:12px;color:",";"],(function(e){return e.theme.colors.tertiaryText})),g=l.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1yxgspy-3"})(["margin-bottom:32px;line-height:1.6;max-height:3.4em;font-size:14px;color:",";overflow:hidden;text-overflow:ellipsis;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;"],(function(e){return e.theme.colors.secondaryText}));t.a=function(e){var t=e.postList,n=Object(i.useState)(10),o=n[0],l=n[1],x=r()((function(){document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&o<t.length&&setTimeout((function(){return l(o+10)}),300)}),250);return Object(i.useEffect)((function(){return window.addEventListener("scroll",x),function(){window.removeEventListener("scroll",x)}}),[o,t]),Object(i.useEffect)((function(){l(10)}),[t]),a.a.createElement(p,null,t.slice(0,o).map((function(e,n){var r=e.frontmatter,i=r.title,l=r.date,p=r.tags,x=e.excerpt,h=e.fields.slug;return a.a.createElement("div",{key:e.fields.slug},a.a.createElement(d,null,a.a.createElement(u.a,{size:"bg"},a.a.createElement(c.Link,{to:h},i)),a.a.createElement(m,null,l),a.a.createElement(g,null,x),a.a.createElement(f.a,{tagList:p})),o-1!==n&&t.length-1!==n&&a.a.createElement(s.a,{mt:"48px",mb:"32px"}))})))}},PyCY:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("vOnD").default.h1.withConfig({displayName:"Title__Wrapper",componentId:"sc-1oag5ys-0"})(["margin-bottom:15px;font-size:",";font-weight:700;line-height:1.2;color:",";word-break:break-all;> a{text-decoration:none;color:inherit;transition:color 0.2s;&:hover{color:",";}}"],(function(e){return e.size}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.accentColor1}));t.a=function(e){var t=e.size,n=e.children;return r.a.createElement(i,{size:{sm:"16px",md:"20px",bg:"24px"}[t]},n)}},QIyF:function(e,t,n){var o=n("Kz5y");e.exports=function(){return o.Date.now()}},TO8r:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},XUsr:function(e,t,n){"use strict";var o=n("17x9"),r=n.n(o),i=n("vOnD").default.hr.withConfig({displayName:"Divider",componentId:"sc-u4yc3b-0"})(["margin-top:",";margin-bottom:",";border:none;border-bottom:1px solid ",";"],(function(e){return e.mt}),(function(e){return e.mb}),(function(e){return e.theme.colors.divider}));i.propTypes={mt:r.a.string,mb:r.a.string},i.defaultProps={mt:"48px",mb:"48px"},t.a=i},bSql:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("vOnD"),a=n("ma3e"),l=n("LjP0"),c=n("C4nX"),u=i.default.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-1eq4c5c-0"})(["display:flex;align-items:center;column-gap:16px;@media (max-width:768px){padding-inline:15px;}"]),s="undefined"!=typeof window&&"localhost:8000"===window.location.host?"http://localhost:8000":c.siteUrl,f=i.default.div.withConfig({displayName:"Bio__Profile",componentId:"sc-1eq4c5c-1"})(["flex:0 0 auto;width:128px;height:128px;border-radius:50%;background:#f7f7f7 url(","/profile.jpg) center center / cover no-repeat;"],s),p=i.default.div.withConfig({displayName:"Bio__Author",componentId:"sc-1eq4c5c-2"})(["margin-bottom:4.8px;font-size:24px;font-weight:700;color:",";"],(function(e){return e.theme.colors.text})),d=i.default.div.withConfig({displayName:"Bio__Description",componentId:"sc-1eq4c5c-3"})(["margin-bottom:11.2px;line-height:1.5;font-size:16px;color:",";"],(function(e){return e.theme.colors.secondaryText})),m=i.default.div.withConfig({displayName:"Bio__LinksWrapper",componentId:"sc-1eq4c5c-4"})(["display:flex;column-gap:9.6px;svg{width:25.6px;height:25.6px;cursor:pointer;path{fill:",";transition:fill 0.3s;}}a:hover svg path{fill:",";}"],(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.text})),g=function(e){var t=e.link,n=e.children;return t?r.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},n):null};t.a=function(){var e=c.links.github,t=c.links.kaggle,n=c.links.instagram,o=c.links.facebook,i=c.links.linkedIn,s=c.links.email,x=c.links.etc,h=c.links.notion;return r.a.createElement(u,{id:"bio"},r.a.createElement(f,null),r.a.createElement("div",null,r.a.createElement(p,null,"@",c.author),r.a.createElement(d,null,c.description),r.a.createElement(m,null,r.a.createElement(g,{link:e},r.a.createElement(a.c,null)),r.a.createElement(g,{link:h},r.a.createElement(l.a,null)),r.a.createElement(g,{link:t},r.a.createElement(a.e,null)),r.a.createElement(g,{link:n},r.a.createElement(a.d,null)),r.a.createElement(g,{link:o},r.a.createElement(a.b,null)),r.a.createElement(g,{link:i},r.a.createElement(a.g,null)),r.a.createElement(g,{link:s},r.a.createElement(a.a,null)),r.a.createElement(g,{link:x},r.a.createElement(a.f,null)))))}},jXQH:function(e,t,n){var o=n("TO8r"),r=/^\s+/;e.exports=function(e){return e?e.slice(0,o(e)+1).replace(r,""):e}},nmnc:function(e,t,n){var o=n("Kz5y").Symbol;e.exports=o},sEfC:function(e,t,n){var o=n("GoyQ"),r=n("QIyF"),i=n("tLB3"),a=Math.max,l=Math.min;e.exports=function(e,t,n){var c,u,s,f,p,d,m=0,g=!1,x=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=c,o=u;return c=u=void 0,m=t,f=e.apply(o,n)}function y(e){return m=e,p=setTimeout(E,t),g?v(e):f}function b(e){var n=e-d;return void 0===d||n>=t||n<0||x&&e-m>=s}function E(){var e=r();if(b(e))return k(e);p=setTimeout(E,function(e){var n=t-(e-d);return x?l(n,s-(e-m)):n}(e))}function k(e){return p=void 0,h&&c?v(e):(c=u=void 0,f)}function w(){var e=r(),n=b(e);if(c=arguments,u=this,d=e,n){if(void 0===p)return y(d);if(x)return clearTimeout(p),p=setTimeout(E,t),v(d)}return void 0===p&&(p=setTimeout(E,t)),f}return t=i(t)||0,o(n)&&(g=!!n.leading,s=(x="maxWait"in n)?a(i(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h),w.cancel=function(){void 0!==p&&clearTimeout(p),m=0,c=d=u=p=void 0},w.flush=function(){return void 0===p?f:k(r())},w}},tLB3:function(e,t,n){var o=n("jXQH"),r=n("GoyQ"),i=n("/9aa"),a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=o(e);var n=l.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):a.test(e)?NaN:+e}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-6f424c7377c10efbc1f1.js.map