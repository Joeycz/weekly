(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{130:function(t,e,a){"use strict";a.r(e);a(66);var i=a(59),s={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:a(100).a},beforeCreate:function(){this.$options.components.SidebarLinks=a(130).default},methods:{isActive:i.e}},n=(a(194),a(0)),r=Object(n.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?a("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[a("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?a("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):a("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[a("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?a("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),a("DropdownTransition",[t.open||!t.collapsable?a("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;a(128);function o(t,e,a,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},a)}function l(t,e,a,s,n){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>n?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var c=Object(i.e)(s,a+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,a+"#"+e.slug,e.title,c),l(t,e.children,a,s,n,r+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var a=e.parent,s=a.$page,n=(a.$site,a.$route),r=a.$themeConfig,c=a.$themeLocaleConfig,u=e.props,p=u.item,d=u.sidebarDepth,h=Object(i.e)(n,p.path),v="auto"===p.type?h||p.children.some(function(t){return Object(i.e)(n,p.basePath+"#"+t.slug)}):h,f="external"===p.type?function(t,e,a){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[a,t("OutboundLink")])}(t,p.path,p.title||p.path):o(t,p.path,p.title||p.path,v),b=s.frontmatter.sidebarDepth||d||c.sidebarDepth||r.sidebarDepth,m=null==b?1:b,g=c.displayAllHeaders||r.displayAllHeaders;return"auto"===p.type?[f,l(t,p.children,p.basePath,n,m)]:(v||g)&&p.headers&&!i.d.test(p.path)?[f,l(t,Object(i.c)(p.headers),p.path,n,m)]:f}};a(195);var u={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(n.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var a=0;a<e.length;a++){var s=e[a];if("group"===s.type&&s.children.some(function(e){return"page"===e.type&&Object(i.e)(t,e.path)}))return a}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},p=Object(n.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.items.length?a("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return a("li",{key:i},["group"===e.type?a("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):a("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=p.exports},141:function(t,e,a){"use strict";var i=a(75);a.n(i).a},193:function(t,e,a){"use strict";var i=a(92);a.n(i).a},194:function(t,e,a){"use strict";var i=a(93);a.n(i).a},195:function(t,e,a){"use strict";var i=a(94);a.n(i).a},196:function(t,e,a){"use strict";var i=a(95);a.n(i).a},197:function(t,e,a){"use strict";var i=a(96);a.n(i).a},232:function(t,e,a){"use strict";a.r(e);var i={components:{NavLink:a(71).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},s=(a(141),a(0)),n=Object(s.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),a("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return a("div",{key:i,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),a("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?a("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports,r=a(129),o=(a(127),a(59));function l(t,e,a){var i=[];!function t(e,a){for(var i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],a):a.push(e[i])}(e,i);for(var s=0;s<i.length;s++){var n=i[s];if("page"===n.type&&n.path===decodeURIComponent(t.path))return i[s+a]}}var c={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,a=this.$page.frontmatter.prev;return!1===a?void 0:a?Object(o.k)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,l(t,e,-1))},next:function(){var t,e,a=this.$page.frontmatter.next;return!1===a?void 0:a?Object(o.k)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,l(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,a=t.editLinks,i=t.docsDir,s=void 0===i?"":i,n=t.docsBranch,r=void 0===n?"master":n,o=t.docsRepo,l=void 0===o?e:o;return l&&a&&this.$page.relativePath?this.createEditLink(e,l,s,r,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,a,i,s){return/bitbucket.org/.test(t)?(o.i.test(e)?e:t).replace(o.a,"")+"/src"+"/".concat(i,"/")+(a?a.replace(o.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(o.i.test(e)?e:"https://github.com/".concat(e)).replace(o.a,"")+"/edit"+"/".concat(i,"/")+(a?a.replace(o.a,"")+"/":"")+s}}},u=(a(193),Object(s.a)(c,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page"},[t._t("top"),t._v(" "),a("Content",{staticClass:"theme-default-content"}),t._v(" "),a("footer",{staticClass:"page-edit"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?a("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},[t.next?a("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),p=a(130),d=a(99),h={name:"Sidebar",components:{SidebarLinks:p.default,NavLinks:d.a},props:["items"]},v=(a(196),{components:{Home:n,Page:u,Sidebar:Object(s.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports,Navbar:r.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(o.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),f=(a(197),Object(s.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));e.default=f.exports},75:function(t,e,a){},92:function(t,e,a){},93:function(t,e,a){},94:function(t,e,a){},95:function(t,e,a){},96:function(t,e,a){}}]);