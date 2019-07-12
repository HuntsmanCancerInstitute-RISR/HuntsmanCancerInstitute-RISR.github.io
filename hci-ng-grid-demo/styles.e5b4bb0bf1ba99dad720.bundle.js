!function(r){var n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var o in r)e.d(t,o,function(n){return r[n]}.bind(null,o));return t},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="/hci-ng-grid-demo/",e(e.s=553)}({553:function(r,n,e){"use strict";e.r(n);e(554)},554:function(r,n,e){var t=e(555);"string"==typeof t&&(t=[[r.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(64)(t,o);t.locals&&(r.exports=t.locals)},555:function(r,n,e){(r.exports=e(63)()).push([r.i,'\r\ndemo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow: hidden;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  overflow: hidden;\r\n  flex-grow: 1;\r\n}\r\n\r\n.demo-component {\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.outlet-column {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n}\r\n\r\n.outlet-row {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  overflow: hidden;\r\n}\r\n\r\n.y-auto {\r\n  overflow-y: auto;\r\n}\r\n\r\n.navbar {\r\n  height: 3rem;\r\n  flex-shrink: 0;\r\n  padding-left: 1rem;\r\n  padding-right: 0.5rem;\r\n  padding-top: 0rem;\r\n  padding-bottom: 0rem;\r\n}\r\n\r\n.navbar .btn-outline-primary.white {\r\n  color: white;\r\n  border-color: white;\r\n}\r\n\r\n.outlet {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.m-3.docs {\r\n  margin: 0 !important;\r\n}\r\n\r\n.iframe {\r\n  flex-grow: 1;\r\n}\r\n\r\n.card {\r\n  margin-top: 15px;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.card-header {\r\n  padding: 0.25rem 1.25rem;\r\n}\r\n\r\n.card-body {\r\n  flex-direction: column;\r\n  flex: 0 0 100%;\r\n}\r\n\r\ndiv .card-text {\r\n  flex-shrink: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#grid-container.big {\r\n  font-family: Arial;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n  font-weight: 100;\r\n}\r\n\r\n#grid-container.big .hci-grid-row.even {\r\n  color: gray;\r\n}\r\n\r\nngb-popover-window {\r\n  max-width: 800px !important;\r\n  width: 800px;\r\n}\r\n\r\nngb-popover-window div.popover-body {\r\n  max-height: 350px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.code-heading {\r\n  font-size: 1.25rem;\r\n  font-weight: 600;\r\n}\r\n\r\npre.language-html {\r\n  background-color: #eeeeee;\r\n  border: gray 1px solid;\r\n}\r\n\r\npre[class*="language-"] {\r\n  margin: 0;\r\n  margin-bottom: 0.5rem;\r\n  padding: 0;\r\n}\r\n',""])},63:function(r,n){r.exports=function(){var r=[];return r.toString=function(){for(var r=[],n=0;n<this.length;n++){var e=this[n];e[2]?r.push("@media "+e[2]+"{"+e[1]+"}"):r.push(e[1])}return r.join("")},r.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(t[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&t[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),r.push(a))}},r}},64:function(r,n,e){var t,o,i={},a=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=t.apply(this,arguments)),o}),s=function(r){var n={};return function(r,e){if("function"==typeof r)return r();if(void 0===n[r]){var t=function(r,n){return n?n.querySelector(r):document.querySelector(r)}.call(this,r,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}n[r]=t}return n[r]}}(),f=null,l=0,u=[],c=e(87);function d(r,n){for(var e=0;e<r.length;e++){var t=r[e],o=i[t.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](t.parts[a]);for(;a<t.parts.length;a++)o.parts.push(b(t.parts[a],n))}else{var s=[];for(a=0;a<t.parts.length;a++)s.push(b(t.parts[a],n));i[t.id]={id:t.id,refs:1,parts:s}}}}function p(r,n){for(var e=[],t={},o=0;o<r.length;o++){var i=r[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};t[a]?t[a].parts.push(s):e.push(t[a]={id:a,parts:[s]})}return e}function h(r,n){var e=s(r.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=u[u.length-1];if("top"===r.insertAt)t?t.nextSibling?e.insertBefore(n,t.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),u.push(n);else if("bottom"===r.insertAt)e.appendChild(n);else{if("object"!=typeof r.insertAt||!r.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(r.insertAt.before,e);e.insertBefore(n,o)}}function m(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r);var n=u.indexOf(r);n>=0&&u.splice(n,1)}function v(r){var n=document.createElement("style");if(void 0===r.attrs.type&&(r.attrs.type="text/css"),void 0===r.attrs.nonce){var t=function(){0;return e.nc}();t&&(r.attrs.nonce=t)}return g(n,r.attrs),h(r,n),n}function g(r,n){Object.keys(n).forEach(function(e){r.setAttribute(e,n[e])})}function b(r,n){var e,t,o,i;if(n.transform&&r.css){if(!(i="function"==typeof n.transform?n.transform(r.css):n.transform.default(r.css)))return function(){};r.css=i}if(n.singleton){var a=l++;e=f||(f=v(n)),t=w.bind(null,e,a,!1),o=w.bind(null,e,a,!0)}else r.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(r){var n=document.createElement("link");return void 0===r.attrs.type&&(r.attrs.type="text/css"),r.attrs.rel="stylesheet",g(n,r.attrs),h(r,n),n}(n),t=function(r,n,e){var t=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(t=c(t));o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([t],{type:"text/css"}),s=r.href;r.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,n),o=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=v(n),t=function(r,n){var e=n.css,t=n.media;t&&r.setAttribute("media",t);if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){m(e)});return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=p(r,n);return d(e,n),function(r){for(var t=[],o=0;o<e.length;o++){var a=e[o];(s=i[a.id]).refs--,t.push(s)}r&&d(p(r,n),n);for(o=0;o<t.length;o++){var s;if(0===(s=t[o]).refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete i[s.id]}}}};var y,x=(y=[],function(r,n){return y[r]=n,y.filter(Boolean).join("\n")});function w(r,n,e,t){var o=e?"":t.css;if(r.styleSheet)r.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(i,a[n]):r.appendChild(i)}}},87:function(r,n){r.exports=function(r){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!r||"string"!=typeof r)return r;var e=n.protocol+"//"+n.host,t=e+n.pathname.replace(/\/[^\/]*$/,"/");return r.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(r,n){var o,i=n.trim().replace(/^"(.*)"$/,function(r,n){return n}).replace(/^'(.*)'$/,function(r,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?r:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:t+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}});