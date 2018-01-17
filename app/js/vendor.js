/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:e?e.ownerDocument.documentElement:document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+i+'Width'],10)}function m(e,t,o,i){return J(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=document.body,t=document.documentElement,o=ie()&&getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=parseFloat(a.borderTopWidth,10),m=parseFloat(a.borderLeftWidth,10),h=c({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=parseFloat(a.marginTop,10),b=parseFloat(a.marginLeft,10);h.top-=f-u,h.bottom-=f-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=l(h,o)),h}function b(e){var t=e.ownerDocument.documentElement,o=u(e,t),i=J(t.clientWidth,window.innerWidth||0),n=J(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function w(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||w(o(e))}function y(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(t)),'BODY'===a.nodeName&&(a=e.ownerDocument.documentElement)):'window'===r?a=e.ownerDocument.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!w(s)){var f=h(),m=f.height,c=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=c+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=y(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function O(e,t,o){var i=d(t,o);return u(o,i)}function L(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function x(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=L(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[x(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function D(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function C(t,o,i){var n=void 0===i?t:t.slice(0,D(t,'name',i));return n.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t['function']||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=C(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function W(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,k(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[W('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function B(e){var t=e.ownerDocument;return t?t.defaultView:window}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function A(e,t,o,i){o.updateBound=i,B(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=A(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return B(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function R(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function U(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&U(t[o])&&(i='px'),e.style[o]=t[o]+i})}function j(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function K(e){return'end'===e?'start':'start'===e?'end':e}function q(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function V(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?J(document.documentElement.clientHeight,window.innerHeight||0):J(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function z(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){U(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function G(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=U(+i)?[+i,0]:z(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var _=Math.min,X=Math.floor,J=Math.max,Q='undefined'!=typeof window&&'undefined'!=typeof document,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(Q&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=Q&&window.Promise,oe=te?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),le={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},fe=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=i&&i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return N.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return R.call(this)}}]),t}();return fe.Utils=('undefined'==typeof window?global:window).PopperUtils,fe.placements=de,fe.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:G,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=y(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=J(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=_(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=X,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var i;if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var n=o.element;if('string'==typeof n){if(n=e.instance.popper.querySelector(n),!n)return e;}else if(!e.instance.popper.contains(n))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',g=a?'bottom':'right',u=L(n)[l];d[g]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[g]-u)),d[m]+u>s[g]&&(e.offsets.popper[m]+=d[m]+u-s[g]),e.offsets.popper=c(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=J(_(s[l]-u,v),0),e.arrowElement=n,e.offsets.arrow=(i={},pe(i,m,Math.round(v)),pe(i,h,''),i),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=x(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case le.FLIP:p=[i,n];break;case le.CLOCKWISE:p=q(i);break;case le.COUNTERCLOCKWISE:p=q(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=x(i);var a=e.offsets.popper,l=e.offsets.reference,f=X,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,w=-1!==['top','bottom'].indexOf(i),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),y&&(r=K(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=C(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=x(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},h={left:X(n.left),top:X(n.top),bottom:X(n.bottom),right:X(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=W('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==u?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==u?-1:1;m[c]=d*w,m[u]=s*y,m.willChange=c+', '+u}var E={"x-placement":e.placement};return e.attributes=se({},E,e.attributes),e.styles=se({},m,e.styles),e.arrowStyles=se({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return Y(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=O(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),Y(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},fe});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
var bootstrap=function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var s=function(){function t(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(){return{bindType:r.end,delegateType:r.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}}function i(){if(window.QUnit)return!1;var t=document.createElement("bootstrap");for(var e in o)if("undefined"!=typeof t.style[e])return{end:o[e]};return!1}function s(t){var n=this,i=!1;return e(this).one(a.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||a.triggerTransitionEnd(n)},t),this}var r=!1,o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},a={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var n=t.getAttribute("data-target");n&&"#"!==n||(n=t.getAttribute("href")||"");try{return e(document).find(n).length>0?n:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(r.end)},supportsTransitionEnd:function(){return Boolean(r)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(e,n,i){for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){var r=i[s],o=n[s],l=o&&a.isElement(o)?"element":t(o);if(!new RegExp(r).test(l))throw new Error(e.toUpperCase()+': Option "'+s+'" provided type "'+l+'" but expected type "'+r+'".')}}};return r=i(),e.fn.emulateTransitionEnd=s,a.supportsTransitionEnd()&&(e.event.special[a.TRANSITION_END]=n()),a}(),r=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t},o=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e},a=function(){var t="alert",n=e.fn[t],i={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},o={ALERT:"alert",FADE:"fade",SHOW:"show"},a=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=s.getSelectorFromElement(t),i=!1;return n&&(i=e(n)[0]),i||(i=e(t).closest("."+o.ALERT)[0]),i},n._triggerCloseEvent=function(t){var n=e.Event(i.CLOSE);return e(t).trigger(n),n},n._removeElement=function(t){var n=this;e(t).removeClass(o.SHOW),s.supportsTransitionEnd()&&e(t).hasClass(o.FADE)?e(t).one(s.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(150):this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger(i.CLOSED).remove()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),s=i.data("bs.alert");s||(s=new t(this),i.data("bs.alert",s)),"close"===n&&s[n](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},r(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}();return e(document).on(i.CLICK_DATA_API,{DISMISS:'[data-dismiss="alert"]'}.DISMISS,a._handleDismiss(new a)),e.fn[t]=a._jQueryInterface,e.fn[t].Constructor=a,e.fn[t].noConflict=function(){return e.fn[t]=n,a._jQueryInterface},a}(),l=function(){var t="button",n=e.fn[t],i={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},s={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},o={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},a=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,r=e(this._element).closest(s.DATA_TOGGLE)[0];if(r){var o=e(this._element).find(s.INPUT)[0];if(o){if("radio"===o.type)if(o.checked&&e(this._element).hasClass(i.ACTIVE))t=!1;else{var a=e(r).find(s.ACTIVE)[0];a&&e(a).removeClass(i.ACTIVE)}if(t){if(o.hasAttribute("disabled")||r.hasAttribute("disabled")||o.classList.contains("disabled")||r.classList.contains("disabled"))return;o.checked=!e(this._element).hasClass(i.ACTIVE),e(o).trigger("change")}o.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!e(this._element).hasClass(i.ACTIVE)),t&&e(this._element).toggleClass(i.ACTIVE)},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()})},r(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}();return e(document).on(o.CLICK_DATA_API,s.DATA_TOGGLE_CARROT,function(t){t.preventDefault();var n=t.target;e(n).hasClass(i.BUTTON)||(n=e(n).closest(s.BUTTON)),a._jQueryInterface.call(e(n),"toggle")}).on(o.FOCUS_BLUR_DATA_API,s.DATA_TOGGLE_CARROT,function(t){var n=e(t.target).closest(s.BUTTON)[0];e(n).toggleClass(i.FOCUS,/^focus(in)?$/.test(t.type))}),e.fn[t]=a._jQueryInterface,e.fn[t].Constructor=a,e.fn[t].noConflict=function(){return e.fn[t]=n,a._jQueryInterface},a}(),h=function(){var t="carousel",n="bs.carousel",i="."+n,o=e.fn[t],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},c={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},u={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},d={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},f=function(){function o(t,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(d.INDICATORS)[0],this._addEventListeners()}var f=o.prototype;return f.next=function(){this._isSliding||this._slide(h.NEXT)},f.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},f.prev=function(){this._isSliding||this._slide(h.PREV)},f.pause=function(t){t||(this._isPaused=!0),e(this._element).find(d.NEXT_PREV)[0]&&s.supportsTransitionEnd()&&(s.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},f.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},f.to=function(t){var n=this;this._activeElement=e(this._element).find(d.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(c.SLID,function(){return n.to(t)});else{if(i===t)return this.pause(),void this.cycle();var s=t>i?h.NEXT:h.PREV;this._slide(s,this._items[t])}},f.dispose=function(){e(this._element).off(i),e.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},f._getConfig=function(n){return n=e.extend({},a,n),s.typeCheckConfig(t,n,l),n},f._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(c.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(e(this._element).on(c.MOUSEENTER,function(e){return t.pause(e)}).on(c.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&e(this._element).on(c.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},f._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next();break;default:return}},f._getItemIndex=function(t){return this._items=e.makeArray(e(t).parent().find(d.ITEM)),this._items.indexOf(t)},f._getItemByDirection=function(t,e){var n=t===h.NEXT,i=t===h.PREV,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===h.PREV?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},f._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),s=this._getItemIndex(e(this._element).find(d.ACTIVE_ITEM)[0]),r=e.Event(c.SLIDE,{relatedTarget:t,direction:n,from:s,to:i});return e(this._element).trigger(r),r},f._setActiveIndicatorElement=function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(d.ACTIVE).removeClass(u.ACTIVE);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&e(n).addClass(u.ACTIVE)}},f._slide=function(t,n){var i,r,o,a=this,l=e(this._element).find(d.ACTIVE_ITEM)[0],f=this._getItemIndex(l),_=n||l&&this._getItemByDirection(t,l),g=this._getItemIndex(_),m=Boolean(this._interval);if(t===h.NEXT?(i=u.LEFT,r=u.NEXT,o=h.LEFT):(i=u.RIGHT,r=u.PREV,o=h.RIGHT),_&&e(_).hasClass(u.ACTIVE))this._isSliding=!1;else if(!this._triggerSlideEvent(_,o).isDefaultPrevented()&&l&&_){this._isSliding=!0,m&&this.pause(),this._setActiveIndicatorElement(_);var p=e.Event(c.SLID,{relatedTarget:_,direction:o,from:f,to:g});s.supportsTransitionEnd()&&e(this._element).hasClass(u.SLIDE)?(e(_).addClass(r),s.reflow(_),e(l).addClass(i),e(_).addClass(i),e(l).one(s.TRANSITION_END,function(){e(_).removeClass(i+" "+r).addClass(u.ACTIVE),e(l).removeClass(u.ACTIVE+" "+r+" "+i),a._isSliding=!1,setTimeout(function(){return e(a._element).trigger(p)},0)}).emulateTransitionEnd(600)):(e(l).removeClass(u.ACTIVE),e(_).addClass(u.ACTIVE),this._isSliding=!1,e(this._element).trigger(p)),m&&this.cycle()}},o._jQueryInterface=function(t){return this.each(function(){var i=e(this).data(n),s=e.extend({},a,e(this).data());"object"==typeof t&&e.extend(s,t);var r="string"==typeof t?t:s.slide;if(i||(i=new o(this,s),e(this).data(n,i)),"number"==typeof t)i.to(t);else if("string"==typeof r){if("undefined"==typeof i[r])throw new Error('No method named "'+r+'"');i[r]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(t){var i=s.getSelectorFromElement(this);if(i){var r=e(i)[0];if(r&&e(r).hasClass(u.CAROUSEL)){var a=e.extend({},e(r).data(),e(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(e(r),a),l&&e(r).data(n).to(l),t.preventDefault()}}},r(o,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return a}}]),o}();return e(document).on(c.CLICK_DATA_API,d.DATA_SLIDE,f._dataApiClickHandler),e(window).on(c.LOAD_DATA_API,function(){e(d.DATA_RIDE).each(function(){var t=e(this);f._jQueryInterface.call(t,t.data())})}),e.fn[t]=f._jQueryInterface,e.fn[t].Constructor=f,e.fn[t].noConflict=function(){return e.fn[t]=o,f._jQueryInterface},f}(),c=function(){var t="collapse",n="bs.collapse",i=e.fn[t],o={toggle:!0,parent:""},a={toggle:"boolean",parent:"(string|element)"},l={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},h={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},c={WIDTH:"width",HEIGHT:"height"},u={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},d=function(){function i(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var i=e(u.DATA_TOGGLE),r=0;r<i.length;r++){var o=i[r],a=s.getSelectorFromElement(o);null!==a&&e(a).filter(t).length>0&&this._triggerArray.push(o)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var d=i.prototype;return d.toggle=function(){e(this._element).hasClass(h.SHOW)?this.hide():this.show()},d.show=function(){var t=this;if(!this._isTransitioning&&!e(this._element).hasClass(h.SHOW)){var r,o;if(this._parent&&((r=e.makeArray(e(this._parent).children().children(u.ACTIVES))).length||(r=null)),!(r&&(o=e(r).data(n))&&o._isTransitioning)){var a=e.Event(l.SHOW);if(e(this._element).trigger(a),!a.isDefaultPrevented()){r&&(i._jQueryInterface.call(e(r),"hide"),o||e(r).data(n,null));var c=this._getDimension();e(this._element).removeClass(h.COLLAPSE).addClass(h.COLLAPSING),this._element.style[c]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(h.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var d=function(){e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).addClass(h.SHOW),t._element.style[c]="",t.setTransitioning(!1),e(t._element).trigger(l.SHOWN)};if(s.supportsTransitionEnd()){var f="scroll"+(c[0].toUpperCase()+c.slice(1));e(this._element).one(s.TRANSITION_END,d).emulateTransitionEnd(600),this._element.style[c]=this._element[f]+"px"}else d()}}}},d.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(h.SHOW)){var n=e.Event(l.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",s.reflow(this._element),e(this._element).addClass(h.COLLAPSING).removeClass(h.COLLAPSE).removeClass(h.SHOW),this._triggerArray.length)for(var r=0;r<this._triggerArray.length;r++){var o=this._triggerArray[r],a=s.getSelectorFromElement(o);null!==a&&(e(a).hasClass(h.SHOW)||e(o).addClass(h.COLLAPSED).attr("aria-expanded",!1))}this.setTransitioning(!0);var c=function(){t.setTransitioning(!1),e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).trigger(l.HIDDEN)};this._element.style[i]="",s.supportsTransitionEnd()?e(this._element).one(s.TRANSITION_END,c).emulateTransitionEnd(600):c()}}},d.setTransitioning=function(t){this._isTransitioning=t},d.dispose=function(){e.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},d._getConfig=function(n){return n=e.extend({},o,n),n.toggle=Boolean(n.toggle),s.typeCheckConfig(t,n,a),n},d._getDimension=function(){return e(this._element).hasClass(c.WIDTH)?c.WIDTH:c.HEIGHT},d._getParent=function(){var t=this,n=null;s.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=e(this._config.parent)[0];var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return e(n).find(r).each(function(e,n){t._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},d._addAriaAndCollapsedClass=function(t,n){if(t){var i=e(t).hasClass(h.SHOW);n.length&&e(n).toggleClass(h.COLLAPSED,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(t){var n=s.getSelectorFromElement(t);return n?e(n)[0]:null},i._jQueryInterface=function(t){return this.each(function(){var s=e(this),r=s.data(n),a=e.extend({},o,s.data(),"object"==typeof t&&t);if(!r&&a.toggle&&/show|hide/.test(t)&&(a.toggle=!1),r||(r=new i(this,a),s.data(n,r)),"string"==typeof t){if("undefined"==typeof r[t])throw new Error('No method named "'+t+'"');r[t]()}})},r(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return o}}]),i}();return e(document).on(l.CLICK_DATA_API,u.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var i=e(this),r=s.getSelectorFromElement(this);e(r).each(function(){var t=e(this),s=t.data(n)?"toggle":i.data();d._jQueryInterface.call(t,s)})}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=i,d._jQueryInterface},d}(),u=function(){if("undefined"==typeof n)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var t="dropdown",i="bs.dropdown",o="."+i,a=e.fn[t],l=new RegExp("38|40|27"),h={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},c={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left"},u={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled)"},d={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end"},f={offset:0,flip:!0},_={offset:"(number|string|function)",flip:"boolean"},g=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var g=a.prototype;return g.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(c.DISABLED)){var t=a._getParentFromElement(this._element),i=e(this._menu).hasClass(c.SHOW);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=e.Event(h.SHOW,s);if(e(t).trigger(r),!r.isDefaultPrevented()){var o=this._element;e(t).hasClass(c.DROPUP)&&(e(this._menu).hasClass(c.MENULEFT)||e(this._menu).hasClass(c.MENURIGHT))&&(o=t),this._popper=new n(o,this._menu,this._getPopperConfig()),"ontouchstart"in document.documentElement&&!e(t).closest(u.NAVBAR_NAV).length&&e("body").children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(c.SHOW),e(t).toggleClass(c.SHOW).trigger(e.Event(h.SHOWN,s))}}}},g.dispose=function(){e.removeData(this._element,i),e(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&this._popper.destroy(),this._popper=null},g.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},g._addEventListeners=function(){var t=this;e(this._element).on(h.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},g._getConfig=function(n){return n=e.extend({},this.constructor.Default,e(this._element).data(),n),s.typeCheckConfig(t,n,this.constructor.DefaultType),n},g._getMenuElement=function(){if(!this._menu){var t=a._getParentFromElement(this._element);this._menu=e(t).find(u.MENU)[0]}return this._menu},g._getPlacement=function(){var t=e(this._element).parent(),n=d.BOTTOM;return t.hasClass(c.DROPUP)?(n=d.TOP,e(this._menu).hasClass(c.MENURIGHT)&&(n=d.TOPEND)):e(this._menu).hasClass(c.MENURIGHT)&&(n=d.BOTTOMEND),n},g._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},g._getPopperConfig=function(){var t=this,n={};"function"==typeof this._config.offset?n.fn=function(n){return n.offsets=e.extend({},n.offsets,t._config.offset(n.offsets)||{}),n}:n.offset=this._config.offset;var i={placement:this._getPlacement(),modifiers:{offset:n,flip:{enabled:this._config.flip}}};return this._inNavbar&&(i.modifiers.applyStyle={enabled:!this._inNavbar}),i},a._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(i),s="object"==typeof t?t:null;if(n||(n=new a(this,s),e(this).data(i,n)),"string"==typeof t){if("undefined"==typeof n[t])throw new Error('No method named "'+t+'"');n[t]()}})},a._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var n=e.makeArray(e(u.DATA_TOGGLE)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=e(n[s]).data(i),l={relatedTarget:n[s]};if(o){var d=o._menu;if(e(r).hasClass(c.SHOW)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&e.contains(r,t.target))){var f=e.Event(h.HIDE,l);e(r).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),n[s].setAttribute("aria-expanded","false"),e(d).removeClass(c.SHOW),e(r).removeClass(c.SHOW).trigger(e.Event(h.HIDDEN,l)))}}}},a._getParentFromElement=function(t){var n,i=s.getSelectorFromElement(t);return i&&(n=e(i)[0]),n||t.parentNode},a._dataApiKeydownHandler=function(t){if(!(!l.test(t.which)||/button/i.test(t.target.tagName)&&32===t.which||/input|textarea/i.test(t.target.tagName)||(t.preventDefault(),t.stopPropagation(),this.disabled||e(this).hasClass(c.DISABLED)))){var n=a._getParentFromElement(this),i=e(n).hasClass(c.SHOW);if((i||27===t.which&&32===t.which)&&(!i||27!==t.which&&32!==t.which)){var s=e(n).find(u.VISIBLE_ITEMS).get();if(s.length){var r=s.indexOf(t.target);38===t.which&&r>0&&r--,40===t.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===t.which){var o=e(n).find(u.DATA_TOGGLE)[0];e(o).trigger("focus")}e(this).trigger("click")}}},r(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return f}},{key:"DefaultType",get:function(){return _}}]),a}();return e(document).on(h.KEYDOWN_DATA_API,u.DATA_TOGGLE,g._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API,u.MENU,g._dataApiKeydownHandler).on(h.CLICK_DATA_API+" "+h.KEYUP_DATA_API,g._clearMenus).on(h.CLICK_DATA_API,u.DATA_TOGGLE,function(t){t.preventDefault(),t.stopPropagation(),g._jQueryInterface.call(e(this),"toggle")}).on(h.CLICK_DATA_API,u.FORM_CHILD,function(t){t.stopPropagation()}),e.fn[t]=g._jQueryInterface,e.fn[t].Constructor=g,e.fn[t].noConflict=function(){return e.fn[t]=a,g._jQueryInterface},g}(),d=function(){var t="modal",n=".bs.modal",i=e.fn[t],o={backdrop:!0,keyboard:!0,focus:!0,show:!0},a={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},l={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},h={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},c={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},u=function(){function i(t,n){this._config=this._getConfig(n),this._element=t,this._dialog=e(t).find(c.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var u=i.prototype;return u.toggle=function(t){return this._isShown?this.hide():this.show(t)},u.show=function(t){var n=this;if(!this._isTransitioning&&!this._isShown){s.supportsTransitionEnd()&&e(this._element).hasClass(h.FADE)&&(this._isTransitioning=!0);var i=e.Event(l.SHOW,{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(h.OPEN),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(l.CLICK_DISMISS,c.DATA_DISMISS,function(t){return n.hide(t)}),e(this._dialog).on(l.MOUSEDOWN_DISMISS,function(){e(n._element).one(l.MOUSEUP_DISMISS,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},u.hide=function(t){var n=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var i=e.Event(l.HIDE);if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var r=s.supportsTransitionEnd()&&e(this._element).hasClass(h.FADE);r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(l.FOCUSIN),e(this._element).removeClass(h.SHOW),e(this._element).off(l.CLICK_DISMISS),e(this._dialog).off(l.MOUSEDOWN_DISMISS),r?e(this._element).one(s.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},u.dispose=function(){e.removeData(this._element,"bs.modal"),e(window,document,this._element,this._backdrop).off(n),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},u.handleUpdate=function(){this._adjustDialog()},u._getConfig=function(n){return n=e.extend({},o,n),s.typeCheckConfig(t,n,a),n},u._showElement=function(t){var n=this,i=s.supportsTransitionEnd()&&e(this._element).hasClass(h.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&s.reflow(this._element),e(this._element).addClass(h.SHOW),this._config.focus&&this._enforceFocus();var r=e.Event(l.SHOWN,{relatedTarget:t}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(r)};i?e(this._dialog).one(s.TRANSITION_END,o).emulateTransitionEnd(300):o()},u._enforceFocus=function(){var t=this;e(document).off(l.FOCUSIN).on(l.FOCUSIN,function(n){document===n.target||t._element===n.target||e(t._element).has(n.target).length||t._element.focus()})},u._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(l.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(l.KEYDOWN_DISMISS)},u._setResizeEvent=function(){var t=this;this._isShown?e(window).on(l.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(l.RESIZE)},u._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(h.OPEN),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(l.HIDDEN)})},u._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},u._showBackdrop=function(t){var n=this,i=e(this._element).hasClass(h.FADE)?h.FADE:"";if(this._isShown&&this._config.backdrop){var r=s.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=h.BACKDROP,i&&e(this._backdrop).addClass(i),e(this._backdrop).appendTo(document.body),e(this._element).on(l.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),r&&s.reflow(this._backdrop),e(this._backdrop).addClass(h.SHOW),!t)return;if(!r)return void t();e(this._backdrop).one(s.TRANSITION_END,t).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(h.SHOW);var o=function(){n._removeBackdrop(),t&&t()};s.supportsTransitionEnd()&&e(this._element).hasClass(h.FADE)?e(this._backdrop).one(s.TRANSITION_END,o).emulateTransitionEnd(150):o()}else t&&t()},u._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},u._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},u._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},u._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){e(c.FIXED_CONTENT).each(function(n,i){var s=e(i)[0].style.paddingRight,r=e(i).css("padding-right");e(i).data("padding-right",s).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")}),e(c.STICKY_CONTENT).each(function(n,i){var s=e(i)[0].style.marginRight,r=e(i).css("margin-right");e(i).data("margin-right",s).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")}),e(c.NAVBAR_TOGGLER).each(function(n,i){var s=e(i)[0].style.marginRight,r=e(i).css("margin-right");e(i).data("margin-right",s).css("margin-right",parseFloat(r)+t._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=e("body").css("padding-right");e("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},u._resetScrollbar=function(){e(c.FIXED_CONTENT).each(function(t,n){var i=e(n).data("padding-right");"undefined"!=typeof i&&e(n).css("padding-right",i).removeData("padding-right")}),e(c.STICKY_CONTENT+", "+c.NAVBAR_TOGGLER).each(function(t,n){var i=e(n).data("margin-right");"undefined"!=typeof i&&e(n).css("margin-right",i).removeData("margin-right")});var t=e("body").data("padding-right");"undefined"!=typeof t&&e("body").css("padding-right",t).removeData("padding-right")},u._getScrollbarWidth=function(){var t=document.createElement("div");t.className=h.SCROLLBAR_MEASURER,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},i._jQueryInterface=function(t,n){return this.each(function(){var s=e(this).data("bs.modal"),r=e.extend({},i.Default,e(this).data(),"object"==typeof t&&t);if(s||(s=new i(this,r),e(this).data("bs.modal",s)),"string"==typeof t){if("undefined"==typeof s[t])throw new Error('No method named "'+t+'"');s[t](n)}else r.show&&s.show(n)})},r(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return o}}]),i}();return e(document).on(l.CLICK_DATA_API,c.DATA_TOGGLE,function(t){var n,i=this,r=s.getSelectorFromElement(this);r&&(n=e(r)[0]);var o=e(n).data("bs.modal")?"toggle":e.extend({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var a=e(n).one(l.SHOW,function(t){t.isDefaultPrevented()||a.one(l.HIDDEN,function(){e(i).is(":visible")&&i.focus()})});u._jQueryInterface.call(e(n),o,this)}),e.fn[t]=u._jQueryInterface,e.fn[t].Constructor=u,e.fn[t].noConflict=function(){return e.fn[t]=i,u._jQueryInterface},u}(),f=function(){if("undefined"==typeof n)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");var t="tooltip",i=".bs.tooltip",o=e.fn[t],a=new RegExp("(^|\\s)bs-tooltip\\S+","g"),l={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)"},h={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},c={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip"},u={SHOW:"show",OUT:"out"},d={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},f={FADE:"fade",SHOW:"show"},_={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},g={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},m=function(){function o(t,e){this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var m=o.prototype;return m.enable=function(){this._isEnabled=!0},m.disable=function(){this._isEnabled=!1},m.toggleEnabled=function(){this._isEnabled=!this._isEnabled},m.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass(f.SHOW))return void this._leave(null,this);this._enter(null,this)}},m.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},m.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var r=e.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!r)return;var a=this.getTipElement(),l=s.getUID(this.constructor.NAME);a.setAttribute("id",l),this.element.setAttribute("aria-describedby",l),this.setContent(),this.config.animation&&e(a).addClass(f.FADE);var h="function"==typeof this.config.placement?this.config.placement.call(this,a,this.element):this.config.placement,c=this._getAttachment(h);this.addAttachmentClass(c);var d=!1===this.config.container?document.body:e(this.config.container);e(a).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(a).appendTo(d),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,a,{placement:c,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:_.ARROW}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){t._handlePopperPlacementChange(e)}}),e(a).addClass(f.SHOW),"ontouchstart"in document.documentElement&&e("body").children().on("mouseover",null,e.noop);var g=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===u.OUT&&t._leave(null,t)};s.supportsTransitionEnd()&&e(this.tip).hasClass(f.FADE)?e(this.tip).one(s.TRANSITION_END,g).emulateTransitionEnd(o._TRANSITION_DURATION):g()}},m.hide=function(t){var n=this,i=this.getTipElement(),r=e.Event(this.constructor.Event.HIDE),o=function(){n._hoverState!==u.SHOW&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};e(this.element).trigger(r),r.isDefaultPrevented()||(e(i).removeClass(f.SHOW),"ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),this._activeTrigger[g.CLICK]=!1,this._activeTrigger[g.FOCUS]=!1,this._activeTrigger[g.HOVER]=!1,s.supportsTransitionEnd()&&e(this.tip).hasClass(f.FADE)?e(i).one(s.TRANSITION_END,o).emulateTransitionEnd(150):o(),this._hoverState="")},m.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},m.isWithContent=function(){return Boolean(this.getTitle())},m.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},m.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},m.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(_.TOOLTIP_INNER),this.getTitle()),t.removeClass(f.FADE+" "+f.SHOW)},m.setElementContent=function(t,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text()):t[i?"html":"text"](n)},m.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},m._getAttachment=function(t){return h[t.toUpperCase()]},m._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(n!==g.MANUAL){var i=n===g.HOVER?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,s=n===g.HOVER?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,function(e){return t._enter(e)}).on(s,t.config.selector,function(e){return t._leave(e)})}e(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=e.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},m._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},m._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?g.FOCUS:g.HOVER]=!0),e(n.getTipElement()).hasClass(f.SHOW)||n._hoverState===u.SHOW?n._hoverState=u.SHOW:(clearTimeout(n._timeout),n._hoverState=u.SHOW,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===u.SHOW&&n.show()},n.config.delay.show):n.show())},m._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?g.FOCUS:g.HOVER]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=u.OUT,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===u.OUT&&n.hide()},n.config.delay.hide):n.hide())},m._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},m._getConfig=function(n){return"number"==typeof(n=e.extend({},this.constructor.Default,e(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),s.typeCheckConfig(t,n,this.constructor.DefaultType),n},m._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},m._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(a);null!==n&&n.length>0&&t.removeClass(n.join(""))},m._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},m._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass(f.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},o._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.tooltip"),i="object"==typeof t&&t;if((n||!/dispose|hide/.test(t))&&(n||(n=new o(this,i),e(this).data("bs.tooltip",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new Error('No method named "'+t+'"');n[t]()}})},r(o,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return c}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return d}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return l}}]),o}();return e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=o,m._jQueryInterface},m}(),_=function(){var t="popover",n=".bs.popover",i=e.fn[t],s=new RegExp("(^|\\s)bs-popover\\S+","g"),a=e.extend({},f.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),l=e.extend({},f.DefaultType,{content:"(string|element|function)"}),h={FADE:"fade",SHOW:"show"},c={TITLE:".popover-header",CONTENT:".popover-body"},u={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,INSERTED:"inserted"+n,CLICK:"click"+n,FOCUSIN:"focusin"+n,FOCUSOUT:"focusout"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n},d=function(i){function d(){return i.apply(this,arguments)||this}o(d,i);var f=d.prototype;return f.isWithContent=function(){return this.getTitle()||this._getContent()},f.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},f.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},f.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(c.TITLE),this.getTitle()),this.setElementContent(t.find(c.CONTENT),this._getContent()),t.removeClass(h.FADE+" "+h.SHOW)},f._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},f._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(s);null!==n&&n.length>0&&t.removeClass(n.join(""))},d._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/destroy|hide/.test(t))&&(n||(n=new d(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new Error('No method named "'+t+'"');n[t]()}})},r(d,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return a}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return u}},{key:"EVENT_KEY",get:function(){return n}},{key:"DefaultType",get:function(){return l}}]),d}(f);return e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=i,d._jQueryInterface},d}(),g=function(){var t="scrollspy",n=e.fn[t],i={offset:10,method:"auto",target:""},o={offset:"number",method:"string",target:"(string|element)"},a={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},l={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},h={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},c={OFFSET:"offset",POSITION:"position"},u=function(){function n(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+h.NAV_LINKS+","+this._config.target+" "+h.LIST_ITEMS+","+this._config.target+" "+h.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(a.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var u=n.prototype;return u.refresh=function(){var t=this,n=this._scrollElement!==this._scrollElement.window?c.POSITION:c.OFFSET,i="auto"===this._config.method?n:this._config.method,r=i===c.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),e.makeArray(e(this._selector)).map(function(t){var n,o=s.getSelectorFromElement(t);if(o&&(n=e(o)[0]),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[e(n)[i]().top+r,o]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},u.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},u._getConfig=function(n){if("string"!=typeof(n=e.extend({},i,n)).target){var r=e(n.target).attr("id");r||(r=s.getUID(t),e(n.target).attr("id",r)),n.target="#"+r}return s.typeCheckConfig(t,n,o),n},u._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},u._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},u._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},u._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;)this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}},u._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",");n=n.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var i=e(n.join(","));i.hasClass(l.DROPDOWN_ITEM)?(i.closest(h.DROPDOWN).find(h.DROPDOWN_TOGGLE).addClass(l.ACTIVE),i.addClass(l.ACTIVE)):(i.addClass(l.ACTIVE),i.parents(h.NAV_LIST_GROUP).prev(h.NAV_LINKS+", "+h.LIST_ITEMS).addClass(l.ACTIVE),i.parents(h.NAV_LIST_GROUP).prev(h.NAV_ITEMS).children(h.NAV_LINKS).addClass(l.ACTIVE)),e(this._scrollElement).trigger(a.ACTIVATE,{relatedTarget:t})},u._clear=function(){e(this._selector).filter(h.ACTIVE).removeClass(l.ACTIVE)},n._jQueryInterface=function(t){return this.each(function(){var i=e(this).data("bs.scrollspy"),s="object"==typeof t&&t;if(i||(i=new n(this,s),e(this).data("bs.scrollspy",i)),"string"==typeof t){if("undefined"==typeof i[t])throw new Error('No method named "'+t+'"');i[t]()}})},r(n,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return i}}]),n}();return e(window).on(a.LOAD_DATA_API,function(){for(var t=e.makeArray(e(h.DATA_SPY)),n=t.length;n--;){var i=e(t[n]);u._jQueryInterface.call(i,i.data())}}),e.fn[t]=u._jQueryInterface,e.fn[t].Constructor=u,e.fn[t].noConflict=function(){return e.fn[t]=n,u._jQueryInterface},u}(),m=function(){var t=e.fn.tab,n={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},i={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},o={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",ACTIVE_UL:"> li > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},a=function(){function t(t){this._element=t}var a=t.prototype;return a.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(i.ACTIVE)||e(this._element).hasClass(i.DISABLED))){var r,a,l=e(this._element).closest(o.NAV_LIST_GROUP)[0],h=s.getSelectorFromElement(this._element);if(l){var c="UL"===l.nodeName?o.ACTIVE_UL:o.ACTIVE;a=e.makeArray(e(l).find(c)),a=a[a.length-1]}var u=e.Event(n.HIDE,{relatedTarget:this._element}),d=e.Event(n.SHOW,{relatedTarget:a});if(a&&e(a).trigger(u),e(this._element).trigger(d),!d.isDefaultPrevented()&&!u.isDefaultPrevented()){h&&(r=e(h)[0]),this._activate(this._element,l);var f=function(){var i=e.Event(n.HIDDEN,{relatedTarget:t._element}),s=e.Event(n.SHOWN,{relatedTarget:a});e(a).trigger(i),e(t._element).trigger(s)};r?this._activate(r,r.parentNode,f):f()}}},a.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},a._activate=function(t,n,r){var a,l=this,h=(a="UL"===n.nodeName?e(n).find(o.ACTIVE_UL):e(n).children(o.ACTIVE))[0],c=r&&s.supportsTransitionEnd()&&h&&e(h).hasClass(i.FADE),u=function(){return l._transitionComplete(t,h,c,r)};h&&c?e(h).one(s.TRANSITION_END,u).emulateTransitionEnd(150):u(),h&&e(h).removeClass(i.SHOW)},a._transitionComplete=function(t,n,r,a){if(n){e(n).removeClass(i.ACTIVE);var l=e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];l&&e(l).removeClass(i.ACTIVE),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(i.ACTIVE),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),r?(s.reflow(t),e(t).addClass(i.SHOW)):e(t).removeClass(i.FADE),t.parentNode&&e(t.parentNode).hasClass(i.DROPDOWN_MENU)){var h=e(t).closest(o.DROPDOWN)[0];h&&e(h).find(o.DROPDOWN_TOGGLE).addClass(i.ACTIVE),t.setAttribute("aria-expanded",!0)}a&&a()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),s=i.data("bs.tab");if(s||(s=new t(this),i.data("bs.tab",s)),"string"==typeof n){if("undefined"==typeof s[n])throw new Error('No method named "'+n+'"');s[n]()}})},r(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}();return e(document).on(n.CLICK_DATA_API,o.DATA_TOGGLE,function(t){t.preventDefault(),a._jQueryInterface.call(e(this),"show")}),e.fn.tab=a._jQueryInterface,e.fn.tab.Constructor=a,e.fn.tab.noConflict=function(){return e.fn.tab=t,a._jQueryInterface},a}();return function(){if("undefined"==typeof e)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=s,t.Alert=a,t.Button=l,t.Carousel=h,t.Collapse=c,t.Dropdown=u,t.Modal=d,t.Popover=_,t.Scrollspy=g,t.Tab=m,t.Tooltip=f,t}({},$,Popper);
//# sourceMappingURL=bootstrap.min.js.map
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(function() {
            return factory(root);
        });
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(root);
    } else {
        root.lottie = factory(root);
        root.bodymovin = root.lottie;
    }
}((window || {}), function(window) {
    "use strict";
    var svgNS = "http://www.w3.org/2000/svg";

var locationHref = '';

var initialDefaultFrame = -999999;

var subframeEnabled = true;
var expressionsPlugin;
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var cachedColors = {};
var bm_rounder = Math.round;
var bm_rnd;
var bm_pow = Math.pow;
var bm_sqrt = Math.sqrt;
var bm_abs = Math.abs;
var bm_floor = Math.floor;
var bm_max = Math.max;
var bm_min = Math.min;
var blitter = 10;

var BMMath = {};
(function(){
    var propertyNames = Object.getOwnPropertyNames(Math);
    var i, len = propertyNames.length;
    for(i=0;i<len;i+=1){
        BMMath[propertyNames[i]] = Math[propertyNames[i]];
    }
}());

function ProjectInterface(){return {};}

BMMath.random = Math.random;
BMMath.abs = function(val){
    var tOfVal = typeof val;
    if(tOfVal === 'object' && val.length){
        var absArr = createSizedArray(val.length);
        var i, len = val.length;
        for(i=0;i<len;i+=1){
            absArr[i] = Math.abs(val[i]);
        }
        return absArr;
    }
    return Math.abs(val);

};
var defaultCurveSegments = 150;
var degToRads = Math.PI/180;
var roundCorner = 0.5519;

function roundValues(flag){
    if(flag){
        bm_rnd = Math.round;
    }else{
        bm_rnd = function(val){
            return val;
        };
    }
}
roundValues(false);

function styleDiv(element){
    element.style.position = 'absolute';
    element.style.top = 0;
    element.style.left = 0;
    element.style.display = 'block';
    element.style.transformOrigin = element.style.webkitTransformOrigin = '0 0';
    element.style.backfaceVisibility  = element.style.webkitBackfaceVisibility = 'visible';
    element.style.transformStyle = element.style.webkitTransformStyle = element.style.mozTransformStyle = "preserve-3d";
}

function BMEnterFrameEvent(n,c,t,d){
    this.type = n;
    this.currentTime = c;
    this.totalTime = t;
    this.direction = d < 0 ? -1:1;
}

function BMCompleteEvent(n,d){
    this.type = n;
    this.direction = d < 0 ? -1:1;
}

function BMCompleteLoopEvent(n,c,t,d){
    this.type = n;
    this.currentLoop = t;
    this.totalLoops = c;
    this.direction = d < 0 ? -1:1;
}

function BMSegmentStartEvent(n,f,t){
    this.type = n;
    this.firstFrame = f;
    this.totalFrames = t;
}

function BMDestroyEvent(n,t){
    this.type = n;
    this.target = t;
}

function randomString(length, chars){
    if(chars === undefined){
        chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    }
    var i;
    var result = '';
    for (i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
    }
    return [ r,
        g,
         b ];
}

function RGBtoHSV(r, g, b) {
    var max = Math.max(r, g, b), min = Math.min(r, g, b),
        d = max - min,
        h,
        s = (max === 0 ? 0 : d / max),
        v = max / 255;

    switch (max) {
        case min: h = 0; break;
        case r: h = (g - b) + d * (g < b ? 6: 0); h /= 6 * d; break;
        case g: h = (b - r) + d * 2; h /= 6 * d; break;
        case b: h = (r - g) + d * 4; h /= 6 * d; break;
    }

    return [
         h,
         s,
         v
    ];
}

function addSaturationToRGB(color,offset){
    var hsv = RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);
    hsv[1] += offset;
    if (hsv[1] > 1) {
        hsv[1] = 1;
    }
    else if (hsv[1] <= 0) {
        hsv[1] = 0;
    }
    return HSVtoRGB(hsv[0],hsv[1],hsv[2]);
}

function addBrightnessToRGB(color,offset){
    var hsv = RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);
    hsv[2] += offset;
    if (hsv[2] > 1) {
        hsv[2] = 1;
    }
    else if (hsv[2] < 0) {
        hsv[2] = 0;
    }
    return HSVtoRGB(hsv[0],hsv[1],hsv[2]);
}

function addHueToRGB(color,offset) {
    var hsv = RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);
    hsv[0] += offset/360;
    if (hsv[0] > 1) {
        hsv[0] -= 1;
    }
    else if (hsv[0] < 0) {
        hsv[0] += 1;
    }
    return HSVtoRGB(hsv[0],hsv[1],hsv[2]);
}

var rgbToHex = (function(){
    var colorMap = [];
    var i;
    var hex;
    for(i=0;i<256;i+=1){
        hex = i.toString(16);
        colorMap[i] = hex.length == 1 ? '0' + hex : hex;
    }

    return function(r, g, b) {
        if(r<0){
            r = 0;
        }
        if(g<0){
            g = 0;
        }
        if(b<0){
            b = 0;
        }
        return '#' + colorMap[r] + colorMap[g] + colorMap[b];
    };
}());
function BaseEvent(){}
BaseEvent.prototype = {
	triggerEvent: function (eventName, args) {
	    if (this._cbs[eventName]) {
	        var len = this._cbs[eventName].length;
	        for (var i = 0; i < len; i++){
	            this._cbs[eventName][i](args);
	        }
	    }
	},
	addEventListener: function (eventName, callback) {
	    if (!this._cbs[eventName]){
	        this._cbs[eventName] = [];
	    }
	    this._cbs[eventName].push(callback);

		return function() {
			this.removeEventListener(eventName, callback);
		}.bind(this);
	},
	removeEventListener: function (eventName,callback){
	    if (!callback){
	        this._cbs[eventName] = null;
	    }else if(this._cbs[eventName]){
	        var i = 0, len = this._cbs[eventName].length;
	        while(i<len){
	            if(this._cbs[eventName][i] === callback){
	                this._cbs[eventName].splice(i,1);
	                i -=1;
	                len -= 1;
	            }
	            i += 1;
	        }
	        if(!this._cbs[eventName].length){
	            this._cbs[eventName] = null;
	        }
	    }
	}
};
var createTypedArray = (function(){
	function createRegularArray(type, len){
		var i = 0, arr = [], value;
		switch(type) {
			case 'int16':
			case 'uint8c':
				value = 1;
				break;
			default:
				value = 1.1;
				break;
		}
		for(i = 0; i < len; i += 1) {
			arr.push(value);
		}
		return arr;
	}
	function createTypedArray(type, len){
		if(type === 'float32') {
			return new Float32Array(len);
		} else if(type === 'int16') {
			return new Int16Array(len);
		} else if(type === 'uint8c') {
			return new Uint8ClampedArray(len);
		}
	}
	if(typeof Uint8ClampedArray === 'function' && typeof Float32Array === 'function') {
		return createTypedArray;
	} else {
		return createRegularArray;
	}
}());

function createSizedArray(len) {
	return Array.apply(null,{length:len});
}
function createNS(type) {
	//return {appendChild:function(){},setAttribute:function(){},style:{}}
	return document.createElementNS(svgNS, type);
}
function createTag(type) {
	//return {appendChild:function(){},setAttribute:function(){},style:{}}
	return document.createElement(type);
}
/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */

/**
 * 2D transformation matrix object initialized with identity matrix.
 *
 * The matrix can synchronize a canvas context by supplying the context
 * as an argument, or later apply current absolute transform to an
 * existing context.
 *
 * All values are handled as floating point values.
 *
 * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
 * @prop {number} a - scale x
 * @prop {number} b - shear y
 * @prop {number} c - shear x
 * @prop {number} d - scale y
 * @prop {number} e - translate x
 * @prop {number} f - translate y
 * @prop {CanvasRenderingContext2D|null} [context=null] - set or get current canvas context
 * @constructor
 */

var Matrix = (function(){

    var _cos = Math.cos;
    var _sin = Math.sin;
    var _tan = Math.tan;
    var _rnd = Math.round;

    function reset(){
        this.props[0] = 1;
        this.props[1] = 0;
        this.props[2] = 0;
        this.props[3] = 0;
        this.props[4] = 0;
        this.props[5] = 1;
        this.props[6] = 0;
        this.props[7] = 0;
        this.props[8] = 0;
        this.props[9] = 0;
        this.props[10] = 1;
        this.props[11] = 0;
        this.props[12] = 0;
        this.props[13] = 0;
        this.props[14] = 0;
        this.props[15] = 1;
        return this;
    }

    function rotate(angle) {
        if(angle === 0){
            return this;
        }
        var mCos = _cos(angle);
        var mSin = _sin(angle);
        return this._t(mCos, -mSin,  0, 0, mSin,  mCos, 0, 0, 0,  0,  1, 0, 0, 0, 0, 1);
    }

    function rotateX(angle){
        if(angle === 0){
            return this;
        }
        var mCos = _cos(angle);
        var mSin = _sin(angle);
        return this._t(1, 0, 0, 0, 0, mCos, -mSin, 0, 0, mSin,  mCos, 0, 0, 0, 0, 1);
    }

    function rotateY(angle){
        if(angle === 0){
            return this;
        }
        var mCos = _cos(angle);
        var mSin = _sin(angle);
        return this._t(mCos,  0,  mSin, 0, 0, 1, 0, 0, -mSin,  0,  mCos, 0, 0, 0, 0, 1);
    }

    function rotateZ(angle){
        if(angle === 0){
            return this;
        }
        var mCos = _cos(angle);
        var mSin = _sin(angle);
        return this._t(mCos, -mSin,  0, 0, mSin,  mCos, 0, 0, 0,  0,  1, 0, 0, 0, 0, 1);
    }

    function shear(sx,sy){
        return this._t(1, sy, sx, 1, 0, 0);
    }

    function skew(ax, ay){
        return this.shear(_tan(ax), _tan(ay));
    }

    function skewFromAxis(ax, angle){
        var mCos = _cos(angle);
        var mSin = _sin(angle);
        return this._t(mCos, mSin,  0, 0, -mSin,  mCos, 0, 0, 0,  0,  1, 0, 0, 0, 0, 1)
            ._t(1, 0,  0, 0, _tan(ax),  1, 0, 0, 0,  0,  1, 0, 0, 0, 0, 1)
            ._t(mCos, -mSin,  0, 0, mSin,  mCos, 0, 0, 0,  0,  1, 0, 0, 0, 0, 1);
        //return this._t(mCos, mSin, -mSin, mCos, 0, 0)._t(1, 0, _tan(ax), 1, 0, 0)._t(mCos, -mSin, mSin, mCos, 0, 0);
    }

    function scale(sx, sy, sz) {
        sz = isNaN(sz) ? 1 : sz;
        if(sx == 1 && sy == 1 && sz == 1){
            return this;
        }
        return this._t(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1);
    }

    function setTransform(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        this.props[0] = a;
        this.props[1] = b;
        this.props[2] = c;
        this.props[3] = d;
        this.props[4] = e;
        this.props[5] = f;
        this.props[6] = g;
        this.props[7] = h;
        this.props[8] = i;
        this.props[9] = j;
        this.props[10] = k;
        this.props[11] = l;
        this.props[12] = m;
        this.props[13] = n;
        this.props[14] = o;
        this.props[15] = p;
        return this;
    }

    function translate(tx, ty, tz) {
        tz = tz || 0;
        if(tx !== 0 || ty !== 0 || tz !== 0){
            return this._t(1,0,0,0,0,1,0,0,0,0,1,0,tx,ty,tz,1);
        }
        return this;
    }

    function transform(a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2) {

        var _p = this.props;

        if(a2 === 1 && b2 === 0 && c2 === 0 && d2 === 0 && e2 === 0 && f2 === 1 && g2 === 0 && h2 === 0 && i2 === 0 && j2 === 0 && k2 === 1 && l2 === 0){
            //NOTE: commenting this condition because TurboFan deoptimizes code when present
            //if(m2 !== 0 || n2 !== 0 || o2 !== 0){
                _p[12] = _p[12] * a2 + _p[15] * m2;
                _p[13] = _p[13] * f2 + _p[15] * n2;
                _p[14] = _p[14] * k2 + _p[15] * o2;
                _p[15] = _p[15] * p2;
            //}
            this._identityCalculated = false;
            return this;
        }

        var a1 = _p[0];
        var b1 = _p[1];
        var c1 = _p[2];
        var d1 = _p[3];
        var e1 = _p[4];
        var f1 = _p[5];
        var g1 = _p[6];
        var h1 = _p[7];
        var i1 = _p[8];
        var j1 = _p[9];
        var k1 = _p[10];
        var l1 = _p[11];
        var m1 = _p[12];
        var n1 = _p[13];
        var o1 = _p[14];
        var p1 = _p[15];

        /* matrix order (canvas compatible):
         * ace
         * bdf
         * 001
         */
        _p[0] = a1 * a2 + b1 * e2 + c1 * i2 + d1 * m2;
        _p[1] = a1 * b2 + b1 * f2 + c1 * j2 + d1 * n2 ;
        _p[2] = a1 * c2 + b1 * g2 + c1 * k2 + d1 * o2 ;
        _p[3] = a1 * d2 + b1 * h2 + c1 * l2 + d1 * p2 ;

        _p[4] = e1 * a2 + f1 * e2 + g1 * i2 + h1 * m2 ;
        _p[5] = e1 * b2 + f1 * f2 + g1 * j2 + h1 * n2 ;
        _p[6] = e1 * c2 + f1 * g2 + g1 * k2 + h1 * o2 ;
        _p[7] = e1 * d2 + f1 * h2 + g1 * l2 + h1 * p2 ;

        _p[8] = i1 * a2 + j1 * e2 + k1 * i2 + l1 * m2 ;
        _p[9] = i1 * b2 + j1 * f2 + k1 * j2 + l1 * n2 ;
        _p[10] = i1 * c2 + j1 * g2 + k1 * k2 + l1 * o2 ;
        _p[11] = i1 * d2 + j1 * h2 + k1 * l2 + l1 * p2 ;

        _p[12] = m1 * a2 + n1 * e2 + o1 * i2 + p1 * m2 ;
        _p[13] = m1 * b2 + n1 * f2 + o1 * j2 + p1 * n2 ;
        _p[14] = m1 * c2 + n1 * g2 + o1 * k2 + p1 * o2 ;
        _p[15] = m1 * d2 + n1 * h2 + o1 * l2 + p1 * p2 ;

        this._identityCalculated = false;
        return this;
    }

    function isIdentity() {
        if(!this._identityCalculated){
            this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1);
            this._identityCalculated = true;
        }
        return this._identity;
    }

    function equals(matr){
        var i = 0;
        while (i < 16) {
            if(matr.props[i] !== this.props[i]) {
                return false;
            }
            i+=1;
        }
        return true;
    }

    function clone(matr){
        var i;
        for(i=0;i<16;i+=1){
            matr.props[i] = this.props[i];
        }
    }

    function cloneFromProps(props){
        var i;
        for(i=0;i<16;i+=1){
            this.props[i] = props[i];
        }
    }

    function applyToPoint(x, y, z) {

        return {
            x: x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],
            y: x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],
            z: x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]
        };
        /*return {
         x: x * me.a + y * me.c + me.e,
         y: x * me.b + y * me.d + me.f
         };*/
    }
    function applyToX(x, y, z) {
        return x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12];
    }
    function applyToY(x, y, z) {
        return x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13];
    }
    function applyToZ(x, y, z) {
        return x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14];
    }

    function inversePoint(pt) {
        var determinant = this.props[0] * this.props[5] - this.props[1] * this.props[4];
        var a = this.props[5]/determinant;
        var b = - this.props[1]/determinant;
        var c = - this.props[4]/determinant;
        var d = this.props[0]/determinant;
        var e = (this.props[4] * this.props[13] - this.props[5] * this.props[12])/determinant;
        var f = - (this.props[0] * this.props[13] - this.props[1] * this.props[12])/determinant;
        return [pt[0] * a + pt[1] * c + e, pt[0] * b + pt[1] * d + f, 0];
    }

    function inversePoints(pts){
        var i, len = pts.length, retPts = [];
        for(i=0;i<len;i+=1){
            retPts[i] = inversePoint(pts[i]);
        }
        return retPts;
    }

    function applyToTriplePoints(pt1, pt2, pt3) {
        var arr = createTypedArray('float32', 6);
        if(this.isIdentity()) {
            arr[0] = pt1[0];
            arr[1] = pt1[1];
            arr[2] = pt2[0];
            arr[3] = pt2[1];
            arr[4] = pt3[0];
            arr[5] = pt3[1];
        } else {
            var p0 = this.props[0], p1 = this.props[1], p4 = this.props[4], p5 = this.props[5], p12 = this.props[12], p13 = this.props[13];
            arr[0] = pt1[0] * p0 + pt1[1] * p4 + p12;
            arr[1] = pt1[0] * p1 + pt1[1] * p5 + p13;
            arr[2] = pt2[0] * p0 + pt2[1] * p4 + p12;
            arr[3] = pt2[0] * p1 + pt2[1] * p5 + p13;
            arr[4] = pt3[0] * p0 + pt3[1] * p4 + p12;
            arr[5] = pt3[0] * p1 + pt3[1] * p5 + p13;
        }
        return arr;
    }

    function applyToPointArray(x,y,z){
        var arr;
        if(this.isIdentity()) {
            arr = [x,y,z];
        } else {
            arr = [x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]];
        }
        return arr;
    }

    function applyToPointStringified(x, y) {
        if(this.isIdentity()) {
            return x + ',' + y;
        }
        return (x * this.props[0] + y * this.props[4] + this.props[12])+','+(x * this.props[1] + y * this.props[5] + this.props[13]);
    }

    function toCSS() {
        //Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
        /*if(this.isIdentity()) {
            return '';
        }*/
        var i = 0;
        var props = this.props;
        var cssValue = 'matrix3d(';
        var v = 10000;
        while(i<16){
            cssValue += _rnd(props[i]*v)/v;
            cssValue += i === 15 ? ')':',';
            i += 1;
        }
        return cssValue;
    }

    function to2dCSS() {
        //Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
        /*if(this.isIdentity()) {
            return '';
        }*/
        var v = 10000;
        var props = this.props;
        return "matrix(" + _rnd(props[0]*v)/v + ',' + _rnd(props[1]*v)/v + ',' + _rnd(props[4]*v)/v + ',' + _rnd(props[5]*v)/v + ',' + _rnd(props[12]*v)/v + ',' + _rnd(props[13]*v)/v + ")";
    }

    return function(){
        this.reset = reset;
        this.rotate = rotate;
        this.rotateX = rotateX;
        this.rotateY = rotateY;
        this.rotateZ = rotateZ;
        this.skew = skew;
        this.skewFromAxis = skewFromAxis;
        this.shear = shear;
        this.scale = scale;
        this.setTransform = setTransform;
        this.translate = translate;
        this.transform = transform;
        this.applyToPoint = applyToPoint;
        this.applyToX = applyToX;
        this.applyToY = applyToY;
        this.applyToZ = applyToZ;
        this.applyToPointArray = applyToPointArray;
        this.applyToTriplePoints = applyToTriplePoints;
        this.applyToPointStringified = applyToPointStringified;
        this.toCSS = toCSS;
        this.to2dCSS = to2dCSS;
        this.clone = clone;
        this.cloneFromProps = cloneFromProps;
        this.equals = equals;
        this.inversePoints = inversePoints;
        this.inversePoint = inversePoint;
        this._t = this.transform;
        this.isIdentity = isIdentity;
        this._identity = true;
        this._identityCalculated = false;

        this.props = createTypedArray('float32', 16);
        this.reset();
    };
}());

/*
 Copyright 2014 David Bau.

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

(function (pool, math) {
//
// The following constants are related to IEEE 754 limits.
//
    var global = this,
        width = 256,        // each RC4 output is 0 <= x < 256
        chunks = 6,         // at least six RC4 outputs for each double
        digits = 52,        // there are 52 significant digits in a double
        rngname = 'random', // rngname: name for Math.random and Math.seedrandom
        startdenom = math.pow(width, chunks),
        significance = math.pow(2, digits),
        overflow = significance * 2,
        mask = width - 1,
        nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
    function seedrandom(seed, options, callback) {
        var key = [];
        options = (options === true) ? { entropy: true } : (options || {});

        // Flatten the seed string or build one from local entropy if needed.
        var shortseed = mixkey(flatten(
            options.entropy ? [seed, tostring(pool)] :
                (seed === null) ? autoseed() : seed, 3), key);

        // Use the seed to initialize an ARC4 generator.
        var arc4 = new ARC4(key);

        // This function returns a random double in [0, 1) that contains
        // randomness in every bit of the mantissa of the IEEE 754 value.
        var prng = function() {
            var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
                d = startdenom,                 //   and denominator d = 2 ^ 48.
                x = 0;                          //   and no 'extra last byte'.
            while (n < significance) {          // Fill up all significant digits by
                n = (n + x) * width;              //   shifting numerator and
                d *= width;                       //   denominator and generating a
                x = arc4.g(1);                    //   new least-significant-byte.
            }
            while (n >= overflow) {             // To avoid rounding up, before adding
                n /= 2;                           //   last byte, shift everything
                d /= 2;                           //   right using integer math until
                x >>>= 1;                         //   we have exactly the desired bits.
            }
            return (n + x) / d;                 // Form the number within [0, 1).
        };

        prng.int32 = function() { return arc4.g(4) | 0; };
        prng.quick = function() { return arc4.g(4) / 0x100000000; };
        prng.double = prng;

        // Mix the randomness into accumulated entropy.
        mixkey(tostring(arc4.S), pool);

        // Calling convention: what to return as a function of prng, seed, is_math.
        return (options.pass || callback ||
        function(prng, seed, is_math_call, state) {
            if (state) {
                // Load the arc4 state from the given state if it has an S array.
                if (state.S) { copy(state, arc4); }
                // Only provide the .state method if requested via options.state.
                prng.state = function() { return copy(arc4, {}); };
            }

            // If called as a method of Math (Math.seedrandom()), mutate
            // Math.random because that is how seedrandom.js has worked since v1.0.
            if (is_math_call) { math[rngname] = prng; return seed; }

            // Otherwise, it is a newer calling convention, so return the
            // prng directly.
            else return prng;
        })(
            prng,
            shortseed,
            'global' in options ? options.global : (this == math),
            options.state);
    }
    math['seed' + rngname] = seedrandom;

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
    function ARC4(key) {
        var t, keylen = key.length,
            me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

        // The empty key [] is treated as [0].
        if (!keylen) { key = [keylen++]; }

        // Set up S using the standard key scheduling algorithm.
        while (i < width) {
            s[i] = i++;
        }
        for (i = 0; i < width; i++) {
            s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
            s[j] = t;
        }

        // The "g" method returns the next (count) outputs as one number.
        (me.g = function(count) {
            // Using instance members instead of closure state nearly doubles speed.
            var t, r = 0,
                i = me.i, j = me.j, s = me.S;
            while (count--) {
                t = s[i = mask & (i + 1)];
                r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
            }
            me.i = i; me.j = j;
            return r;
            // For robust unpredictability, the function call below automatically
            // discards an initial batch of values.  This is called RC4-drop[256].
            // See http://google.com/search?q=rsa+fluhrer+response&btnI
        }(width));
    }

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
    function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
    }

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
    function flatten(obj, depth) {
        var result = [], typ = (typeof obj), prop;
        if (depth && typ == 'object') {
            for (prop in obj) {
                try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
            }
        }
        return (result.length ? result : typ == 'string' ? obj : obj + '\0');
    }

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
    function mixkey(seed, key) {
        var stringseed = seed + '', smear, j = 0;
        while (j < stringseed.length) {
            key[mask & j] =
                mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
        }
        return tostring(key);
    }

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
    function autoseed() {
        try {
            if (nodecrypto) { return tostring(nodecrypto.randomBytes(width)); }
            var out = new Uint8Array(width);
            (global.crypto || global.msCrypto).getRandomValues(out);
            return tostring(out);
        } catch (e) {
            var browser = global.navigator,
                plugins = browser && browser.plugins;
            return [+new Date(), global, plugins, global.screen, tostring(pool)];
        }
    }

//
// tostring()
// Converts an array of charcodes to a string
//
    function tostring(a) {
        return String.fromCharCode.apply(0, a);
    }

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
    mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//

// End anonymous scope, and pass initial values.
})(
    [],     // pool: entropy pool starts empty
    BMMath    // math: package containing random, pow, and seedrandom
);
var BezierFactory = (function(){
    /**
     * BezierEasing - use bezier curve for transition easing function
     * by Gaëtan Renaudeau 2014 - 2015 – MIT License
     *
     * Credits: is based on Firefox's nsSMILKeySpline.cpp
     * Usage:
     * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
     * spline.get(x) => returns the easing value | x must be in [0, 1] range
     *
     */

        var ob = {};
    ob.getBezierEasing = getBezierEasing;
    var beziers = {};

    function getBezierEasing(a,b,c,d,nm){
        var str = nm || ('bez_' + a+'_'+b+'_'+c+'_'+d).replace(/\./g, 'p');
        if(beziers[str]){
            return beziers[str];
        }
        var bezEasing = new BezierEasing([a,b,c,d]);
        beziers[str] = bezEasing;
        return bezEasing;
    }

// These values are established by empiricism with tests (tradeoff: performance VS precision)
    var NEWTON_ITERATIONS = 4;
    var NEWTON_MIN_SLOPE = 0.001;
    var SUBDIVISION_PRECISION = 0.0000001;
    var SUBDIVISION_MAX_ITERATIONS = 10;

    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

    var float32ArraySupported = typeof Float32Array === "function";

    function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
    function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
    function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
    function calcBezier (aT, aA1, aA2) {
        return ((A(aA1, aA2)*aT + B(aA1, aA2))*aT + C(aA1))*aT;
    }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
    function getSlope (aT, aA1, aA2) {
        return 3.0 * A(aA1, aA2)*aT*aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }

    function binarySubdivide (aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) {
                aB = currentT;
            } else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
    }

    function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) return aGuessT;
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    }

    /**
     * points is an array of [ mX1, mY1, mX2, mY2 ]
     */
    function BezierEasing (points) {
        this._p = points;
        this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        this._precomputed = false;

        this.get = this.get.bind(this);
    }

    BezierEasing.prototype = {

        get: function (x) {
            var mX1 = this._p[0],
                mY1 = this._p[1],
                mX2 = this._p[2],
                mY2 = this._p[3];
            if (!this._precomputed) this._precompute();
            if (mX1 === mY1 && mX2 === mY2) return x; // linear
            // Because JavaScript number are imprecise, we should guarantee the extremes are right.
            if (x === 0) return 0;
            if (x === 1) return 1;
            return calcBezier(this._getTForX(x), mY1, mY2);
        },

        // Private part

        _precompute: function () {
            var mX1 = this._p[0],
                mY1 = this._p[1],
                mX2 = this._p[2],
                mY2 = this._p[3];
            this._precomputed = true;
            if (mX1 !== mY1 || mX2 !== mY2)
                this._calcSampleValues();
        },

        _calcSampleValues: function () {
            var mX1 = this._p[0],
                mX2 = this._p[2];
            for (var i = 0; i < kSplineTableSize; ++i) {
                this._mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
            }
        },

        /**
         * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
         */
        _getTForX: function (aX) {
            var mX1 = this._p[0],
                mX2 = this._p[2],
                mSampleValues = this._mSampleValues;

            var intervalStart = 0.0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;

            for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
                intervalStart += kSampleStepSize;
            }
            --currentSample;

            // Interpolate to provide an initial guess for t
            var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample+1] - mSampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;

            var initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= NEWTON_MIN_SLOPE) {
                return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            } else if (initialSlope === 0.0) {
                return guessForT;
            } else {
                return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
            }
        }
    };

    return ob;

}());
(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if(!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = setTimeout(function () {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    if(!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

function extendPrototype(sources,destination){
    var i, len = sources.length, sourcePrototype;
    for (i = 0;i < len;i += 1) {
        sourcePrototype = sources[i].prototype;
        for (var attr in sourcePrototype) {
            if (sourcePrototype.hasOwnProperty(attr)) destination.prototype[attr] = sourcePrototype[attr];
        }
    }
}

function getDescriptor(object, prop) {
    return Object.getOwnPropertyDescriptor(object, prop);
}

function createProxyFunction(prototype) {
	function ProxyFunction(){}
	ProxyFunction.prototype = prototype;
	return ProxyFunction;
}
function bezFunction(){

    var easingFunctions = [];
    var math = Math;

    function pointOnLine2D(x1,y1, x2,y2, x3,y3){
        var det1 = (x1*y2) + (y1*x3) + (x2*y3) - (x3*y2) - (y3*x1) - (x2*y1);
        return det1 > -0.0001 && det1 < 0.0001;
    }

    function pointOnLine3D(x1,y1,z1, x2,y2,z2, x3,y3,z3){
        if(z1 === 0 && z2 === 0 && z3 === 0) {
            return pointOnLine2D(x1,y1, x2,y2, x3,y3);
        }
        var dist1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
        var dist2 = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2) + Math.pow(z3 - z1, 2));
        var dist3 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2) + Math.pow(z3 - z2, 2));
        var diffDist;
        if(dist1 > dist2){
            if(dist1 > dist3){
                diffDist = dist1 - dist2 - dist3;
            } else {
                diffDist = dist3 - dist2 - dist1;
            }
        } else if(dist3 > dist2){
            diffDist = dist3 - dist2 - dist1;
        } else {
            diffDist = dist2 - dist1 - dist3;
        }
        return diffDist > -0.0001 && diffDist < 0.0001;
    }

    var getBezierLength = (function(){

        return function(pt1,pt2,pt3,pt4){
            var curveSegments = defaultCurveSegments;
            var k;
            var i, len;
            var ptCoord,perc,addedLength = 0;
            var ptDistance;
            var point = [],lastPoint = [];
            var lengthData = bezier_length_pool.newElement();
            len = pt3.length;
            for(k=0;k<curveSegments;k+=1){
                perc = k/(curveSegments-1);
                ptDistance = 0;
                for(i=0;i<len;i+=1){
                    ptCoord = bm_pow(1-perc,3)*pt1[i]+3*bm_pow(1-perc,2)*perc*pt3[i]+3*(1-perc)*bm_pow(perc,2)*pt4[i]+bm_pow(perc,3)*pt2[i];
                    point[i] = ptCoord;
                    if(lastPoint[i] !== null){
                        ptDistance += bm_pow(point[i] - lastPoint[i],2);
                    }
                    lastPoint[i] = point[i];
                }
                if(ptDistance){
                    ptDistance = bm_sqrt(ptDistance);
                    addedLength += ptDistance;
                }
                lengthData.percents[k] = perc;
                lengthData.lengths[k] = addedLength;
            }
            lengthData.addedLength = addedLength;
            return lengthData;
        };
    }());

    function getSegmentsLength(shapeData) {
        var segmentsLength = segments_length_pool.newElement();
        var closed = shapeData.c;
        var pathV = shapeData.v;
        var pathO = shapeData.o;
        var pathI = shapeData.i;
        var i, len = shapeData._length;
        var lengths = segmentsLength.lengths;
        var totalLength = 0;
        for(i=0;i<len-1;i+=1){
            lengths[i] = getBezierLength(pathV[i],pathV[i+1],pathO[i],pathI[i+1]);
            totalLength += lengths[i].addedLength;
        }
        if(closed){
            lengths[i] = getBezierLength(pathV[i],pathV[0],pathO[i],pathI[0]);
            totalLength += lengths[i].addedLength;
        }
        segmentsLength.totalLength = totalLength;
        return segmentsLength;
    }

    function BezierData(length){
        this.segmentLength = 0;
        this.points = new Array(length);
    }

    function PointData(partial,point){
        this.partialLength = partial;
        this.point = point;
    }

    var buildBezierData = (function(){

        var storedData = {};

        return function (keyData){
            var pt1 = keyData.s;
            var pt2 = keyData.e;
            var pt3 = keyData.to;
            var pt4 = keyData.ti;
            var bezierName = (pt1[0]+'_'+pt1[1]+'_'+pt2[0]+'_'+pt2[1]+'_'+pt3[0]+'_'+pt3[1]+'_'+pt4[0]+'_'+pt4[1]).replace(/\./g, 'p');
            if(storedData[bezierName]){
                keyData.bezierData = storedData[bezierName];
                return;
            }
            var curveSegments = defaultCurveSegments;
            var k, i, len;
            var ptCoord,perc,addedLength = 0;
            var ptDistance;
            var point,lastPoint = null;
            if (pt1.length === 2 && (pt1[0] != pt2[0] || pt1[1] != pt2[1]) && pointOnLine2D(pt1[0],pt1[1],pt2[0],pt2[1],pt1[0]+pt3[0],pt1[1]+pt3[1]) && pointOnLine2D(pt1[0],pt1[1],pt2[0],pt2[1],pt2[0]+pt4[0],pt2[1]+pt4[1])){
                curveSegments = 2;
            }
            var bezierData = new BezierData(curveSegments);
            len = pt3.length;
            for (k = 0; k < curveSegments; k += 1) {
                point = createSizedArray(len);
                perc = k / (curveSegments - 1);
                ptDistance = 0;
                for (i = 0; i < len; i += 1){
                    ptCoord = bm_pow(1-perc,3)*pt1[i]+3*bm_pow(1-perc,2)*perc*(pt1[i] + pt3[i])+3*(1-perc)*bm_pow(perc,2)*(pt2[i] + pt4[i])+bm_pow(perc,3)*pt2[i];
                    point[i] = ptCoord;
                    if(lastPoint !== null){
                        ptDistance += bm_pow(point[i] - lastPoint[i],2);
                    }
                }
                ptDistance = bm_sqrt(ptDistance);
                addedLength += ptDistance;
                bezierData.points[k] = new PointData(ptDistance, point);
                lastPoint = point;
            }
            bezierData.segmentLength = addedLength;
            keyData.bezierData = bezierData;
            storedData[bezierName] = bezierData;
        };
    }());

    function getDistancePerc(perc,bezierData){
        var percents = bezierData.percents;
        var lengths = bezierData.lengths;
        var len = percents.length;
        var initPos = bm_floor((len-1)*perc);
        var lengthPos = perc*bezierData.addedLength;
        var lPerc = 0;
        if(initPos === len - 1 || initPos === 0 || lengthPos === lengths[initPos]){
            return percents[initPos];
        }else{
            var dir = lengths[initPos] > lengthPos ? -1 : 1;
            var flag = true;
            while(flag){
                if(lengths[initPos] <= lengthPos && lengths[initPos+1] > lengthPos){
                    lPerc = (lengthPos - lengths[initPos]) / (lengths[initPos+1] - lengths[initPos]);
                    flag = false;
                }else{
                    initPos += dir;
                }
                if(initPos < 0 || initPos >= len - 1){
                    //FIX for TypedArrays that don't store floating point values with enough accuracy
                    if(initPos === len - 1) {
                        return percents[initPos];
                    }
                    flag = false;
                }
            }
            return percents[initPos] + (percents[initPos+1] - percents[initPos])*lPerc;
        }
    }

    function getPointInSegment(pt1, pt2, pt3, pt4, percent, bezierData) {
        var t1 = getDistancePerc(percent,bezierData);
        var u0 = 1;
        var u1 = 1 - t1;
        var ptX = Math.round((u1*u1*u1* pt1[0] + (t1*u1*u1 + u1*t1*u1 + u1*u1*t1)* pt3[0] + (t1*t1*u1 + u1*t1*t1 + t1*u1*t1)*pt4[0] + t1*t1*t1* pt2[0])* 1000) / 1000;
        var ptY = Math.round((u1*u1*u1* pt1[1] + (t1*u1*u1 + u1*t1*u1 + u1*u1*t1)* pt3[1] + (t1*t1*u1 + u1*t1*t1 + t1*u1*t1)*pt4[1] + t1*t1*t1* pt2[1])* 1000) / 1000;
        return [ptX, ptY];
    }

    function getSegmentArray() {

    }

    var bezier_segment_points = createTypedArray('float32', 8);

    function getNewSegment(pt1,pt2,pt3,pt4,startPerc,endPerc, bezierData){

        startPerc = startPerc < 0 ? 0 : startPerc > 1 ? 1 : startPerc;
        var t0 = getDistancePerc(startPerc,bezierData);
        endPerc = endPerc > 1 ? 1 : endPerc;
        var t1 = getDistancePerc(endPerc,bezierData);
        var i, len = pt1.length;
        var u0 = 1 - t0;
        var u1 = 1 - t1;
        var u0u0u0 = u0*u0*u0;
        var t0u0u0_3 = t0*u0*u0*3; // t0*u0*u0 + u0*t0*u0 + u0*u0*t0
        var t0t0u0_3 = t0*t0*u0*3; // t0*t0*u0 + u0*t0*t0 + t0*u0*t0
        var t0t0t0 = t0*t0*t0;
        //
        var u0u0u1 = u0*u0*u1;
        var t0u0u1_3 = t0*u0*u1 + u0*t0*u1 + u0*u0*t1;
        var t0t0u1_3 = t0*t0*u1 + u0*t0*t1 + t0*u0*t1;
        var t0t0t1 = t0*t0*t1;
        //
        var u0u1u1 = u0*u1*u1;
        var t0u1u1_3 = t0*u1*u1 + u0*t1*u1 + u0*u1*t1;
        var t0t1u1_3 = t0*t1*u1 + u0*t1*t1 + t0*u1*t1;
        var t0t1t1 = t0*t1*t1;
        //
        var u1u1u1 = u1*u1*u1;
        var t1u1u1_3 = t1*u1*u1 + u1*t1*u1 + u1*u1*t1;
        var t1t1u1_3 = t1*t1*u1 + u1*t1*t1 + t1*u1*t1;
        var t1t1t1 = t1*t1*t1;
        //Math.round(num * 100) / 100
        for(i=0;i<len;i+=1){
            bezier_segment_points[i * 4] = Math.round((u0u0u0 * pt1[i] + t0u0u0_3 * pt3[i] + t0t0u0_3 * pt4[i] + t0t0t0 * pt2[i]) * 1000) / 1000;
            bezier_segment_points[i * 4 + 1] = Math.round((u0u0u1 * pt1[i] + t0u0u1_3 * pt3[i] + t0t0u1_3 * pt4[i] + t0t0t1 * pt2[i]) * 1000) / 1000;
            bezier_segment_points[i * 4 + 2] = Math.round((u0u1u1 * pt1[i] + t0u1u1_3 * pt3[i] + t0t1u1_3 * pt4[i] + t0t1t1 * pt2[i]) * 1000) / 1000;
            bezier_segment_points[i * 4 + 3] = Math.round((u1u1u1 * pt1[i] + t1u1u1_3 * pt3[i] + t1t1u1_3 * pt4[i] + t1t1t1 * pt2[i]) * 1000) / 1000;
            // pts.pt1[i] = Math.round((u0u0u0 * pt1[i] + t0u0u0_3 * pt3[i] + t0t0u0_3 * pt4[i] + t0t0t0 * pt2[i]) * 1000) / 1000;
            // pts.pt3[i] = Math.round((u0u0u1 * pt1[i] + t0u0u1_3 * pt3[i] + t0t0u1_3 * pt4[i] + t0t0t1 * pt2[i]) * 1000) / 1000;
            // pts.pt4[i] = Math.round((u0u1u1 * pt1[i] + t0u1u1_3 * pt3[i] + t0t1u1_3 * pt4[i] + t0t1t1 * pt2[i]) * 1000) / 1000;
            // pts.pt2[i] = Math.round((u1u1u1 * pt1[i] + t1u1u1_3 * pt3[i] + t1t1u1_3 * pt4[i] + t1t1t1 * pt2[i]) * 1000) / 1000;
            // pts.pt1[i] =  Math.round((u0*u0*u0* pt1[i] + (t0*u0*u0 + u0*t0*u0 + u0*u0*t0) * pt3[i] + (t0*t0*u0 + u0*t0*t0 + t0*u0*t0)* pt4[i] + t0*t0*t0* pt2[i])* 1000) / 1000;
            // pts.pt3[i] = Math.round((u0*u0*u1*pt1[i] + (t0*u0*u1 + u0*t0*u1 + u0*u0*t1)* pt3[i] + (t0*t0*u1 + u0*t0*t1 + t0*u0*t1)* pt4[i] + t0*t0*t1* pt2[i])* 1000) / 1000;
            // pts.pt4[i] = Math.round((u0*u1*u1* pt1[i] + (t0*u1*u1 + u0*t1*u1 + u0*u1*t1)* pt3[i] + (t0*t1*u1 + u0*t1*t1 + t0*u1*t1)* pt4[i] + t0*t1*t1* pt2[i])* 1000) / 1000;
            // pts.pt2[i] = Math.round((u1*u1*u1* pt1[i] + (t1*u1*u1 + u1*t1*u1 + u1*u1*t1)* pt3[i] + (t1*t1*u1 + u1*t1*t1 + t1*u1*t1)*pt4[i] + t1*t1*t1* pt2[i])* 1000) / 1000;
        }

        return bezier_segment_points;
    }

    return {
        //getEasingCurve : getEasingCurve,
        getSegmentsLength : getSegmentsLength,
        getNewSegment : getNewSegment,
        getPointInSegment : getPointInSegment,
        buildBezierData : buildBezierData,
        pointOnLine2D : pointOnLine2D,
        pointOnLine3D : pointOnLine3D
    };
}

var bez = bezFunction();
function dataFunctionManager(){

    //var tCanvasHelper = createTag('canvas').getContext('2d');

    function completeLayers(layers, comps, fontManager){
        var layerData;
        var animArray, lastFrame;
        var i, len = layers.length;
        var j, jLen, k, kLen;
        for(i=0;i<len;i+=1){
            layerData = layers[i];
            if(!('ks' in layerData) || layerData.completed){
                continue;
            }
            layerData.completed = true;
            if(layerData.tt){
                layers[i-1].td = layerData.tt;
            }
            animArray = [];
            lastFrame = -1;
            if(layerData.hasMask){
                var maskProps = layerData.masksProperties;
                jLen = maskProps.length;
                for(j=0;j<jLen;j+=1){
                    if(maskProps[j].pt.k.i){
                        convertPathsToAbsoluteValues(maskProps[j].pt.k);
                    }else{
                        kLen = maskProps[j].pt.k.length;
                        for(k=0;k<kLen;k+=1){
                            if(maskProps[j].pt.k[k].s){
                                convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]);
                            }
                            if(maskProps[j].pt.k[k].e){
                                convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]);
                            }
                        }
                    }
                }
            }
            if(layerData.ty===0){
                layerData.layers = findCompLayers(layerData.refId, comps);
                completeLayers(layerData.layers,comps, fontManager);
            }else if(layerData.ty === 4){
                completeShapes(layerData.shapes);
            }else if(layerData.ty == 5){
                completeText(layerData, fontManager);
            }
        }
    }

    function findCompLayers(id,comps){
        var i = 0, len = comps.length;
        while(i<len){
            if(comps[i].id === id){
                if(!comps[i].layers.__used) {
                    comps[i].layers.__used = true;
                    return comps[i].layers;
                }
                return JSON.parse(JSON.stringify(comps[i].layers));
            }
            i += 1;
        }
    }

    function completeShapes(arr){
        var i, len = arr.length;
        var j, jLen;
        var hasPaths = false;
        for(i=len-1;i>=0;i-=1){
            if(arr[i].ty == 'sh'){
                if(arr[i].ks.k.i){
                    convertPathsToAbsoluteValues(arr[i].ks.k);
                }else{
                    jLen = arr[i].ks.k.length;
                    for(j=0;j<jLen;j+=1){
                        if(arr[i].ks.k[j].s){
                            convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]);
                        }
                        if(arr[i].ks.k[j].e){
                            convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]);
                        }
                    }
                }
                hasPaths = true;
            }else if(arr[i].ty == 'gr'){
                completeShapes(arr[i].it);
            }
        }
        /*if(hasPaths){
            //mx: distance
            //ss: sensitivity
            //dc: decay
            arr.splice(arr.length-1,0,{
                "ty": "ms",
                "mx":20,
                "ss":10,
                 "dc":0.001,
                "maxDist":200
            });
        }*/
    }

    function convertPathsToAbsoluteValues(path){
        var i, len = path.i.length;
        for(i=0;i<len;i+=1){
            path.i[i][0] += path.v[i][0];
            path.i[i][1] += path.v[i][1];
            path.o[i][0] += path.v[i][0];
            path.o[i][1] += path.v[i][1];
        }
    }

    function checkVersion(minimum,animVersionString){
        var animVersion = animVersionString ? animVersionString.split('.') : [100,100,100];
        if(minimum[0]>animVersion[0]){
            return true;
        } else if(animVersion[0] > minimum[0]){
            return false;
        }
        if(minimum[1]>animVersion[1]){
            return true;
        } else if(animVersion[1] > minimum[1]){
            return false;
        }
        if(minimum[2]>animVersion[2]){
            return true;
        } else if(animVersion[2] > minimum[2]){
            return false;
        }
    }

    var checkText = (function(){
        var minimumVersion = [4,4,14];

        function updateTextLayer(textLayer){
            var documentData = textLayer.t.d;
            textLayer.t.d = {
                k: [
                    {
                        s:documentData,
                        t:0
                    }
                ]
            };
        }

        function iterateLayers(layers){
            var i, len = layers.length;
            for(i=0;i<len;i+=1){
                if(layers[i].ty === 5){
                    updateTextLayer(layers[i]);
                }
            }
        }

        return function (animationData){
            if(checkVersion(minimumVersion,animationData.v)){
                iterateLayers(animationData.layers);
                if(animationData.assets){
                    var i, len = animationData.assets.length;
                    for(i=0;i<len;i+=1){
                        if(animationData.assets[i].layers){
                            iterateLayers(animationData.assets[i].layers);

                        }
                    }
                }
            }
        };
    }());

    var checkChars = (function() {
        var minimumVersion = [4,7,99];
        return function (animationData){
            if(animationData.chars && !checkVersion(minimumVersion,animationData.v)){
                var i, len = animationData.chars.length, j, jLen, k, kLen;
                var pathData, paths;
                for(i = 0; i < len; i += 1) {
                    if(animationData.chars[i].data && animationData.chars[i].data.shapes) {
                        paths = animationData.chars[i].data.shapes[0].it;
                        jLen = paths.length;

                        for(j = 0; j < jLen; j += 1) {
                            pathData = paths[j].ks.k;
                            if(!pathData.__converted) {
                                convertPathsToAbsoluteValues(paths[j].ks.k);
                                pathData.__converted = true;
                            }
                        }
                    }
                }
            }
        };
    }());

    var checkColors = (function(){
        var minimumVersion = [4,1,9];

        function iterateShapes(shapes){
            var i, len = shapes.length;
            var j, jLen;
            for(i=0;i<len;i+=1){
                if(shapes[i].ty === 'gr'){
                    iterateShapes(shapes[i].it);
                }else if(shapes[i].ty === 'fl' || shapes[i].ty === 'st'){
                    if(shapes[i].c.k && shapes[i].c.k[0].i){
                        jLen = shapes[i].c.k.length;
                        for(j=0;j<jLen;j+=1){
                            if(shapes[i].c.k[j].s){
                                shapes[i].c.k[j].s[0] /= 255;
                                shapes[i].c.k[j].s[1] /= 255;
                                shapes[i].c.k[j].s[2] /= 255;
                                shapes[i].c.k[j].s[3] /= 255;
                            }
                            if(shapes[i].c.k[j].e){
                                shapes[i].c.k[j].e[0] /= 255;
                                shapes[i].c.k[j].e[1] /= 255;
                                shapes[i].c.k[j].e[2] /= 255;
                                shapes[i].c.k[j].e[3] /= 255;
                            }
                        }
                    } else {
                        shapes[i].c.k[0] /= 255;
                        shapes[i].c.k[1] /= 255;
                        shapes[i].c.k[2] /= 255;
                        shapes[i].c.k[3] /= 255;
                    }
                }
            }
        }

        function iterateLayers(layers){
            var i, len = layers.length;
            for(i=0;i<len;i+=1){
                if(layers[i].ty === 4){
                    iterateShapes(layers[i].shapes);
                }
            }
        }

        return function (animationData){
            if(checkVersion(minimumVersion,animationData.v)){
                iterateLayers(animationData.layers);
                if(animationData.assets){
                    var i, len = animationData.assets.length;
                    for(i=0;i<len;i+=1){
                        if(animationData.assets[i].layers){
                            iterateLayers(animationData.assets[i].layers);

                        }
                    }
                }
            }
        };
    }());

    var checkShapes = (function(){
        var minimumVersion = [4,4,18];



        function completeShapes(arr){
            var i, len = arr.length;
            var j, jLen;
            var hasPaths = false;
            for(i=len-1;i>=0;i-=1){
                if(arr[i].ty == 'sh'){
                    if(arr[i].ks.k.i){
                        arr[i].ks.k.c = arr[i].closed;
                    }else{
                        jLen = arr[i].ks.k.length;
                        for(j=0;j<jLen;j+=1){
                            if(arr[i].ks.k[j].s){
                                arr[i].ks.k[j].s[0].c = arr[i].closed;
                            }
                            if(arr[i].ks.k[j].e){
                                arr[i].ks.k[j].e[0].c = arr[i].closed;
                            }
                        }
                    }
                    hasPaths = true;
                }else if(arr[i].ty == 'gr'){
                    completeShapes(arr[i].it);
                }
            }
        }

        function iterateLayers(layers){
            var layerData;
            var i, len = layers.length;
            var j, jLen, k, kLen;
            for(i=0;i<len;i+=1){
                layerData = layers[i];
                if(layerData.hasMask){
                    var maskProps = layerData.masksProperties;
                    jLen = maskProps.length;
                    for(j=0;j<jLen;j+=1){
                        if(maskProps[j].pt.k.i){
                            maskProps[j].pt.k.c = maskProps[j].cl;
                        }else{
                            kLen = maskProps[j].pt.k.length;
                            for(k=0;k<kLen;k+=1){
                                if(maskProps[j].pt.k[k].s){
                                    maskProps[j].pt.k[k].s[0].c = maskProps[j].cl;
                                }
                                if(maskProps[j].pt.k[k].e){
                                    maskProps[j].pt.k[k].e[0].c = maskProps[j].cl;
                                }
                            }
                        }
                    }
                }
                if(layerData.ty === 4){
                    completeShapes(layerData.shapes);
                }
            }
        }

        return function (animationData){
            if(checkVersion(minimumVersion,animationData.v)){
                iterateLayers(animationData.layers);
                if(animationData.assets){
                    var i, len = animationData.assets.length;
                    for(i=0;i<len;i+=1){
                        if(animationData.assets[i].layers){
                            iterateLayers(animationData.assets[i].layers);

                        }
                    }
                }
            }
        };
    }());

    /*function blitPaths(path){
        var i, len = path.i.length;
        for(i=0;i<len;i+=1){
            path.i[i][0] /= blitter;
            path.i[i][1] /= blitter;
            path.o[i][0] /= blitter;
            path.o[i][1] /= blitter;
            path.v[i][0] /= blitter;
            path.v[i][1] /= blitter;
        }
    }

    function blitShapes(arr){
        var i, len = arr.length;
        var j, jLen;
        var hasPaths = false;
        for(i=len-1;i>=0;i-=1){
            if(arr[i].ty == 'sh'){
                if(arr[i].ks.k.i){
                    blitPaths(arr[i].ks.k);
                }else{
                    jLen = arr[i].ks.k.length;
                    for(j=0;j<jLen;j+=1){
                        if(arr[i].ks.k[j].s){
                            blitPaths(arr[i].ks.k[j].s[0]);
                        }
                        if(arr[i].ks.k[j].e){
                            blitPaths(arr[i].ks.k[j].e[0]);
                        }
                    }
                }
                hasPaths = true;
            }else if(arr[i].ty == 'gr'){
                blitShapes(arr[i].it);
            }else if(arr[i].ty == 'rc'){
                blitProperty(arr[i].p);
                blitProperty(arr[i].s);
            }else if(arr[i].ty == 'st'){
                blitProperty(arr[i].w);
            }else if(arr[i].ty == 'tr'){
                blitProperty(arr[i].p);
                blitProperty(arr[i].sk);
                blitProperty(arr[i].a);
            }else if(arr[i].ty == 'el'){
                blitProperty(arr[i].p);
                blitProperty(arr[i].s);
            }else if(arr[i].ty == 'rd'){
                blitProperty(arr[i].r);
            }else{

                //console.log(arr[i].ty );
            }
        }
    }

    function blitText(data, fontManager){

    }

    function blitValue(val){
        if(typeof(val) === 'number'){
            val /= blitter;
        } else {
            var i = val.length-1;
            while(i>=0){
                val[i] /= blitter;
                i-=1;
            }
        }
        return val;
    }

    function blitProperty(data){
        if(!data.k.length){
            data.k = blitValue(data.k);
        }else if(typeof(data.k[0]) === 'number'){
            data.k = blitValue(data.k);
        } else {
            var i, len = data.k.length;
            for(i=0;i<len;i+=1){
                if(data.k[i].s){
                    //console.log('pre S: ', data.k[i].s);
                    data.k[i].s = blitValue(data.k[i].s);
                    //console.log('post S: ', data.k[i].s);
                }
                if(data.k[i].e){
                    //console.log('pre E: ', data.k[i].e);
                    data.k[i].e = blitValue(data.k[i].e);
                    //console.log('post E: ', data.k[i].e);
                }
            }
        }
    }

    function blitLayers(layers,comps, fontManager){
        var layerData;
        var animArray, lastFrame;
        var i, len = layers.length;
        var j, jLen, k, kLen;
        for(i=0;i<len;i+=1){
            layerData = layers[i];
            if(!('ks' in layerData)){
                continue;
            }
            blitProperty(layerData.ks.a);
            blitProperty(layerData.ks.p);
            layerData.completed = true;
            if(layerData.tt){
                layers[i-1].td = layerData.tt;
            }
            animArray = [];
            lastFrame = -1;
            if(layerData.hasMask){
                var maskProps = layerData.masksProperties;
                jLen = maskProps.length;
                for(j=0;j<jLen;j+=1){
                    if(maskProps[j].pt.k.i){
                        blitPaths(maskProps[j].pt.k);
                    }else{
                        kLen = maskProps[j].pt.k.length;
                        for(k=0;k<kLen;k+=1){
                            if(maskProps[j].pt.k[k].s){
                                blitPaths(maskProps[j].pt.k[k].s[0]);
                            }
                            if(maskProps[j].pt.k[k].e){
                                blitPaths(maskProps[j].pt.k[k].e[0]);
                            }
                        }
                    }
                }
            }
            if(layerData.ty===0){
                layerData.w = Math.round(layerData.w/blitter);
                layerData.h = Math.round(layerData.h/blitter);
                blitLayers(layerData.layers,comps, fontManager);
            }else if(layerData.ty === 4){
                blitShapes(layerData.shapes);
            }else if(layerData.ty == 5){
                blitText(layerData, fontManager);
            }else if(layerData.ty == 1){
                layerData.sh /= blitter;
                layerData.sw /= blitter;
            } else {
            }
        }
    }

    function blitAnimation(animationData,comps, fontManager){
        blitLayers(animationData.layers,comps, fontManager);
    }*/

    function completeData(animationData, fontManager){
        if(animationData.__complete){
            return;
        }
        checkColors(animationData);
        checkText(animationData);
        checkChars(animationData);
        checkShapes(animationData);
        completeLayers(animationData.layers, animationData.assets, fontManager);
        animationData.__complete = true;
        //blitAnimation(animationData, animationData.assets, fontManager);
    }

    function completeText(data, fontManager){
        if(data.t.a.length === 0 && !('m' in data.t.p)){
            data.singleShape = true;
        }
    }

    var moduleOb = {};
    moduleOb.completeData = completeData;

    return moduleOb;
}

var dataManager = dataFunctionManager();
var FontManager = (function(){

    var maxWaitingTime = 5000;
    var emptyChar = {
        w: 0,
        size:0,
        shapes:[]
    };

    function setUpNode(font, family){
        var parentNode = createTag('span');
        parentNode.style.fontFamily    = family;
        var node = createTag('span');
        // Characters that vary significantly among different fonts
        node.innerHTML = 'giItT1WQy@!-/#';
        // Visible - so we can measure it - but not on the screen
        parentNode.style.position      = 'absolute';
        parentNode.style.left          = '-10000px';
        parentNode.style.top           = '-10000px';
        // Large font size makes even subtle changes obvious
        parentNode.style.fontSize      = '300px';
        // Reset any font properties
        parentNode.style.fontVariant   = 'normal';
        parentNode.style.fontStyle     = 'normal';
        parentNode.style.fontWeight    = 'normal';
        parentNode.style.letterSpacing = '0';
        parentNode.appendChild(node);
        document.body.appendChild(parentNode);

        // Remember width with no applied web font
        var width = node.offsetWidth;
        node.style.fontFamily = font + ', '+family;
        return {node:node, w:width, parent:parentNode};
    }

    function checkLoadedFonts() {
        var i, len = this.fonts.length;
        var node, w;
        var loadedCount = len;
        for(i=0;i<len; i+= 1){
            if(this.fonts[i].loaded){
                loadedCount -= 1;
                continue;
            }
            if(this.fonts[i].fOrigin === 't' || this.fonts[i].origin === 2){
                if(window.Typekit && window.Typekit.load && this.typekitLoaded === 0){
                    this.typekitLoaded = 1;
                    try{window.Typekit.load({
                        async: true,
                        active: function() {
                            this.typekitLoaded = 2;
                        }.bind(this)
                    });}catch(e){}
                }
                if(this.typekitLoaded === 2) {
                    this.fonts[i].loaded = true;
                }
            } else if(this.fonts[i].fOrigin === 'n' || this.fonts[i].origin === 0){
                this.fonts[i].loaded = true;
            } else{
                node = this.fonts[i].monoCase.node;
                w = this.fonts[i].monoCase.w;
                if(node.offsetWidth !== w){
                    loadedCount -= 1;
                    this.fonts[i].loaded = true;
                }else{
                    node = this.fonts[i].sansCase.node;
                    w = this.fonts[i].sansCase.w;
                    if(node.offsetWidth !== w){
                        loadedCount -= 1;
                        this.fonts[i].loaded = true;
                    }
                }
                if(this.fonts[i].loaded){
                    this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);
                    this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent);
                }
            }
        }

        if(loadedCount !== 0 && Date.now() - this.initTime < maxWaitingTime){
            setTimeout(checkLoadedFonts.bind(this),20);
        }else{
            setTimeout(function(){this.loaded = true;}.bind(this),0);

        }
    }

    function createHelper(def, fontData){
        var tHelper = createNS('text');
        tHelper.style.fontSize = '100px';
        tHelper.style.fontFamily = fontData.fFamily;
        tHelper.textContent = '1';
        if(fontData.fClass){
            tHelper.style.fontFamily = 'inherit';
            tHelper.className = fontData.fClass;
        } else {
            tHelper.style.fontFamily = fontData.fFamily;
        }
        def.appendChild(tHelper);
        var tCanvasHelper = createTag('canvas').getContext('2d');
        tCanvasHelper.font = '100px '+ fontData.fFamily;
        return tCanvasHelper;
    }

    function addFonts(fontData, defs){
        if(!fontData){
            this.loaded = true;
            return;
        }
        if(this.chars){
            this.loaded = true;
            this.fonts = fontData.list;
            return;
        }

        var fontArr = fontData.list;
        var i, len = fontArr.length;
        for(i=0; i<len; i+= 1){
            fontArr[i].loaded = false;
            fontArr[i].monoCase = setUpNode(fontArr[i].fFamily,'monospace');
            fontArr[i].sansCase = setUpNode(fontArr[i].fFamily,'sans-serif');
            if(!fontArr[i].fPath) {
                fontArr[i].loaded = true;
            }else if(fontArr[i].fOrigin === 'p' || fontArr[i].origin === 3){
                var s = createTag('style');
                s.type = "text/css";
                s.innerHTML = "@font-face {" + "font-family: "+fontArr[i].fFamily+"; font-style: normal; src: url('"+fontArr[i].fPath+"');}";
                defs.appendChild(s);
            } else if(fontArr[i].fOrigin === 'g' || fontArr[i].origin === 1){
                //<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
                var l = createTag('link');
                l.type = "text/css";
                l.rel = "stylesheet";
                l.href = fontArr[i].fPath;
                defs.appendChild(l);
            } else if(fontArr[i].fOrigin === 't' || fontArr[i].origin === 2){
                //<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
                var sc = createTag('script');
                sc.setAttribute('src',fontArr[i].fPath);
                defs.appendChild(sc);
            }
            fontArr[i].helper = createHelper(defs,fontArr[i]);
            this.fonts.push(fontArr[i]);
        }
        checkLoadedFonts.bind(this)();
    }

    function addChars(chars){
        if(!chars){
            return;
        }
        if(!this.chars){
            this.chars = [];
        }
        var i, len = chars.length;
        var j, jLen = this.chars.length, found;
        for(i=0;i<len;i+=1){
            j = 0;
            found = false;
            while(j<jLen){
                if(this.chars[j].style === chars[i].style && this.chars[j].fFamily === chars[i].fFamily && this.chars[j].ch === chars[i].ch){
                    found = true;
                }
                j += 1;
            }
            if(!found){
                this.chars.push(chars[i]);
                jLen += 1;
            }
        }
    }

    function getCharData(char, style, font){
        var i = 0, len = this.chars.length;
        while( i < len) {
            if(this.chars[i].ch === char && this.chars[i].style === style && this.chars[i].fFamily === font){
                return this.chars[i];
            }
            i+= 1;
        }
        if(console && console.warn) {
            console.warn('Missing character from exported characters list: ', char, style, font);
        }
        return emptyChar;
    }

    function measureText(char, fontName, size){
        var fontData = this.getFontByName(fontName);
        var tHelper = fontData.helper;
        //tHelper.textContent = char;
        return tHelper.measureText(char).width*size/100;
        //return tHelper.getComputedTextLength()*size/100;
    }

    function getFontByName(name){
        var i = 0, len = this.fonts.length;
        while(i<len){
            if(this.fonts[i].fName === name) {
                return this.fonts[i];
            }
            i += 1;
        }
        return 'sans-serif';
    }

    var Font = function(){
        this.fonts = [];
        this.chars = null;
        this.typekitLoaded = 0;
        this.loaded = false;
        this.initTime = Date.now();
    };
    Font.prototype.addChars = addChars;
    Font.prototype.addFonts = addFonts;
    Font.prototype.getCharData = getCharData;
    Font.prototype.getFontByName = getFontByName;
    Font.prototype.measureText = measureText;

    return Font;

}());
var PropertyFactory = (function(){

    var initFrame = initialDefaultFrame;

    function interpolateValue(frameNum, previousValue, caching){
        var offsetTime = this.offsetTime;
        var newValue;
        if(this.propType === 'multidimensional') {
            newValue = createTypedArray('float32', previousValue.length);
        }
        var iterationIndex = caching.lastIndex;
        var i = iterationIndex;
        var len = this.keyframes.length- 1,flag = true;
        var keyData, nextKeyData;

        while(flag){
            keyData = this.keyframes[i];
            nextKeyData = this.keyframes[i+1];
            if(i == len-1 && frameNum >= nextKeyData.t - offsetTime){
                if(keyData.h){
                    keyData = nextKeyData;
                }
                iterationIndex = 0;
                break;
            }
            if((nextKeyData.t - offsetTime) > frameNum){
                iterationIndex = i;
                break;
            }
            if(i < len - 1){
                i += 1;
            }else{
                iterationIndex = 0;
                flag = false;
            }
        }

        var k, kLen,perc,jLen, j, fnc;
        if(keyData.to){

            if(!keyData.bezierData){
                bez.buildBezierData(keyData);
            }
            var bezierData = keyData.bezierData;
            if(frameNum >= nextKeyData.t-offsetTime || frameNum < keyData.t-offsetTime){
                var ind = frameNum >= nextKeyData.t-offsetTime ? bezierData.points.length - 1 : 0;
                kLen = bezierData.points[ind].point.length;
                for(k = 0; k < kLen; k += 1){
                    newValue[k] = bezierData.points[ind].point[k];
                }
                caching._lastBezierData = null;
            }else{
                if(keyData.__fnct){
                    fnc = keyData.__fnct;
                }else{
                    fnc = BezierFactory.getBezierEasing(keyData.o.x,keyData.o.y,keyData.i.x,keyData.i.y,keyData.n).get;
                    keyData.__fnct = fnc;
                }
                perc = fnc((frameNum-(keyData.t-offsetTime))/((nextKeyData.t-offsetTime)-(keyData.t-offsetTime)));
                var distanceInLine = bezierData.segmentLength*perc;

                var segmentPerc;
                var addedLength =  (caching.lastFrame < frameNum && caching._lastBezierData === bezierData) ? caching._lastAddedLength : 0;
                j =  (caching.lastFrame < frameNum && caching._lastBezierData === bezierData) ? caching._lastPoint : 0;
                flag = true;
                jLen = bezierData.points.length;
                while(flag){
                    addedLength +=bezierData.points[j].partialLength;
                    if(distanceInLine === 0 || perc === 0 || j == bezierData.points.length - 1){
                        kLen = bezierData.points[j].point.length;
                        for(k=0;k<kLen;k+=1){
                            newValue[k] = bezierData.points[j].point[k];
                        }
                        break;
                    }else if(distanceInLine >= addedLength && distanceInLine < addedLength + bezierData.points[j+1].partialLength){
                        segmentPerc = (distanceInLine-addedLength)/(bezierData.points[j+1].partialLength);
                        kLen = bezierData.points[j].point.length;
                        for(k=0;k<kLen;k+=1){
                            newValue[k] = bezierData.points[j].point[k] + (bezierData.points[j+1].point[k] - bezierData.points[j].point[k])*segmentPerc;
                        }
                        break;
                    }
                    if(j < jLen - 1){
                        j += 1;
                    }else{
                        flag = false;
                    }
                }
                caching._lastPoint = j;
                caching._lastAddedLength = addedLength - bezierData.points[j].partialLength;
                caching._lastBezierData = bezierData;
            }
        }else{
            var outX,outY,inX,inY, keyValue;
            len = keyData.s.length;
            for(i=0;i<len;i+=1){
                if(keyData.h !== 1){
                    if(frameNum >= nextKeyData.t-offsetTime){
                        perc = 1;
                    }else if(frameNum < keyData.t-offsetTime){
                        perc = 0;
                    }else{
                        if(keyData.o.x.constructor === Array){
                            if(!keyData.__fnct){
                                keyData.__fnct = [];
                            }
                            if (!keyData.__fnct[i]) {
                                outX = keyData.o.x[i] || keyData.o.x[0];
                                outY = keyData.o.y[i] || keyData.o.y[0];
                                inX = keyData.i.x[i] || keyData.i.x[0];
                                inY = keyData.i.y[i] || keyData.i.y[0];
                                fnc = BezierFactory.getBezierEasing(outX,outY,inX,inY).get;
                                keyData.__fnct[i] = fnc;
                            } else {
                                fnc = keyData.__fnct[i];
                            }
                        } else {
                            if (!keyData.__fnct) {
                                outX = keyData.o.x;
                                outY = keyData.o.y;
                                inX = keyData.i.x;
                                inY = keyData.i.y;
                                fnc = BezierFactory.getBezierEasing(outX,outY,inX,inY).get;
                                keyData.__fnct = fnc;
                            } else{
                                fnc = keyData.__fnct;
                            }
                        }
                        perc = fnc((frameNum-(keyData.t-offsetTime))/((nextKeyData.t-offsetTime)-(keyData.t-offsetTime)));
                    }
                }
                if(this.sh && keyData.h !== 1){
                    var initP = keyData.s[i];
                    var endP = keyData.e[i];
                    if(initP-endP < -180){
                        initP += 360;
                    } else if(initP-endP > 180){
                        initP -= 360;
                    }
                    keyValue = initP+(endP-initP)*perc;
                } else {
                    keyValue = keyData.h === 1 ? keyData.s[i] : keyData.s[i]+(keyData.e[i]-keyData.s[i])*perc;
                }
                if(len === 1){
                    newValue = keyValue;
                }else{
                    newValue[i] = keyValue;
                }
            }
        }
        caching.lastIndex = iterationIndex;
        return newValue;
    }

    function calculateMultidimensionalValueAtCurrentTime(renderResult) {
        var i = 0;
        while(i<this.v.length){
            this.pv[i] = renderResult[i];
            this.v[i] = this.mult ? this.pv[i] * this.mult : this.pv[i];
            if(this.lastPValue[i] !== this.pv[i]) {
                this._mdf = true;
                this.lastPValue[i] = this.pv[i];
            }
            i += 1;
        }
    }

    function calculateUnidimenstionalValueAtCurrentTime(renderResult) {
        this.pv = renderResult;
        this.v = this.mult ? this.pv*this.mult : this.pv;
        if(this.lastPValue != this.pv){
            this._mdf = true;
            this.lastPValue = this.pv;
        }
    }

    function getValueAtCurrentTime(){
        if(this.elem.globalData.frameId === this.frameId){
            return;
        }
        this._mdf = false;
        var frameNum = this.comp.renderedFrame - this.offsetTime;
        var initTime = this.keyframes[0].t - this.offsetTime;
        var endTime = this.keyframes[this.keyframes.length- 1].t-this.offsetTime;
        if(!(frameNum === this._caching.lastFrame || (this._caching.lastFrame !== initFrame && ((this._caching.lastFrame >= endTime && frameNum >= endTime) || (this._caching.lastFrame < initTime && frameNum < initTime))))){
            this._caching.lastIndex = this._caching.lastFrame < frameNum ? this._caching.lastIndex : 0;
            var renderResult = this.interpolateValue(frameNum, this.pv, this._caching);
            this.calculateValueAtCurrentTime(renderResult);
        }
        this._caching.lastFrame = frameNum;
        this.frameId = this.elem.globalData.frameId;
    }

    function getNoValue(){
        this._mdf = false;
    }

    function ValueProperty(elem,data, mult){
        this.propType = 'unidimensional';
        this.mult = mult;
        this.v = mult ? data.k * mult : data.k;
        this.pv = data.k;
        this._mdf = false;
        this.comp = elem.comp;
        this.k = false;
        this.kf = false;
        this.vel = 0;
        this.getValue = getNoValue;
    }

    function MultiDimensionalProperty(elem, data, mult) {
        this.propType = 'multidimensional';
        this.mult = mult;
        this.data = data;
        this._mdf = false;
        this.comp = elem.comp;
        this.k = false;
        this.kf = false;
        this.frameId = -1;
        var i, len = data.k.length;
        this.v = createTypedArray('float32', len);
        this.pv = createTypedArray('float32', len);
        this.lastValue = createTypedArray('float32', len);
        var arr = createTypedArray('float32', len);
        this.vel = createTypedArray('float32', len);
        for (i = 0; i < len; i += 1) {
            this.v[i] = mult ? data.k[i] * mult : data.k[i];
            this.pv[i] = data.k[i];
        }
        this.getValue = getNoValue;
    }

    function KeyframedValueProperty(elem, data, mult) {
        this.propType = 'unidimensional';
        this.keyframes = data.k;
        this.offsetTime = elem.data.st;
        this.lastValue = initFrame;
        this.lastPValue = initFrame;
        this.frameId = -1;
        this._caching = {lastFrame: initFrame, lastIndex: 0, value: 0};
        this.k = true;
        this.kf = true;
        this.data = data;
        this.mult = mult;
        this.elem = elem;
        this._isFirstFrame = false;
        this.comp = elem.comp;
        this.v = mult ? data.k[0].s[0] * mult : data.k[0].s[0];
        this.pv = data.k[0].s[0];
        this.getValue = getValueAtCurrentTime;
        this.calculateValueAtCurrentTime = calculateUnidimenstionalValueAtCurrentTime;
        this.interpolateValue = interpolateValue;
    }

    function KeyframedMultidimensionalProperty(elem, data, mult){
        this.propType = 'multidimensional';
        var i, len = data.k.length;
        var s, e,to,ti;
        for (i = 0; i < len - 1; i += 1) {
            if (data.k[i].to && data.k[i].s && data.k[i].e) {
                s = data.k[i].s;
                e = data.k[i].e;
                to = data.k[i].to;
                ti = data.k[i].ti;
                if((s.length === 2 && !(s[0] === e[0] && s[1] === e[1]) && bez.pointOnLine2D(s[0],s[1],e[0],e[1],s[0] + to[0],s[1] + to[1]) && bez.pointOnLine2D(s[0],s[1],e[0],e[1],e[0] + ti[0],e[1] + ti[1])) || (s.length === 3 && !(s[0] === e[0] && s[1] === e[1] && s[2] === e[2]) && bez.pointOnLine3D(s[0],s[1],s[2],e[0],e[1],e[2],s[0] + to[0],s[1] + to[1],s[2] + to[2]) && bez.pointOnLine3D(s[0],s[1],s[2],e[0],e[1],e[2],e[0] + ti[0],e[1] + ti[1],e[2] + ti[2]))){
                    data.k[i].to = null;
                    data.k[i].ti = null;
                }
                if(s[0] === e[0] && s[1] === e[1] && to[0] === 0 && to[1] === 0 && ti[0] === 0 && ti[1] === 0) {
                    if(s.length === 2 || (s[2] === e[2] && to[2] === 0 && ti[2] === 0)) {
                        data.k[i].to = null;
                        data.k[i].ti = null;
                    }
                }
            }
        }
        this.keyframes = data.k;
        this.offsetTime = elem.data.st;
        this.k = true;
        this.kf = true;
        this._isFirstFrame = true;
        this.mult = mult;
        this.elem = elem;
        this.comp = elem.comp;
        this.getValue = getValueAtCurrentTime;
        this.calculateValueAtCurrentTime = calculateMultidimensionalValueAtCurrentTime;
        this.interpolateValue = interpolateValue;
        this.frameId = -1;
        var arrLen = data.k[0].s.length;
        this.v = createTypedArray('float32', arrLen);
        this.pv = createTypedArray('float32', arrLen);
        this.lastValue = createTypedArray('float32', arrLen);
        this.lastPValue = createTypedArray('float32', arrLen);
        this._caching={lastFrame:initFrame,lastIndex:0,value:createTypedArray('float32', arrLen)};
    }

    function getProp(elem,data,type, mult, arr) {
        var p;
        if(data.a === 0){
            if(type === 0) {
                p = new ValueProperty(elem,data,mult);
            } else {
                p = new MultiDimensionalProperty(elem,data, mult);
            }
        } else if(data.a === 1){
            if(type === 0) {
                p = new KeyframedValueProperty(elem,data,mult);
            } else {
                p = new KeyframedMultidimensionalProperty(elem,data, mult);
            }
        } else if(!data.k.length){
            p = new ValueProperty(elem,data, mult);
        }else if(typeof(data.k[0]) === 'number'){
            p = new MultiDimensionalProperty(elem,data, mult);
        }else{
            switch(type){
                case 0:
                    p = new KeyframedValueProperty(elem,data,mult);
                    break;
                case 1:
                    p = new KeyframedMultidimensionalProperty(elem,data,mult);
                    break;
            }
        }
        if(p.k){
            arr.push(p);
        }
        return p;
    }

    var ob = {
        getProp: getProp
    };
    return ob;
}());
var TransformPropertyFactory = (function() {

    function applyToMatrix(mat) {
        var i, len = this.dynamicProperties.length;
        for(i = 0; i < len; i += 1) {
            this.dynamicProperties[i].getValue();
            if (this.dynamicProperties[i]._mdf) {
                this._mdf = true;
            }
        }
        if (this.a) {
            mat.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
        }
        if (this.s) {
            mat.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
        }
        if (this.r) {
            mat.rotate(-this.r.v);
        } else {
            mat.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
        }
        if (this.data.p.s) {
            if (this.data.p.z) {
                mat.translate(this.px.v, this.py.v, -this.pz.v);
            } else {
                mat.translate(this.px.v, this.py.v, 0);
            }
        } else {
            mat.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
        }
    }
    function processKeys(forceRender){
        if (this.elem.globalData.frameId === this.frameId) {
            return;
        }

        this._mdf = false;
        var i, len = this.dynamicProperties.length;

        for(i = 0; i < len; i += 1) {
            this.dynamicProperties[i].getValue();
            if (this.dynamicProperties[i]._mdf) {
                this._mdf = true;
            }
        }

        if (this._mdf || forceRender) {
            this.v.reset();
            if (this.a) {
                this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
            }
            if(this.s) {
                this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
            }
            if (this.sk) {
                this.v.skewFromAxis(-this.sk.v, this.sa.v);
            }
            if (this.r) {
                this.v.rotate(-this.r.v);
            } else {
                this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
            }
            if (this.autoOriented && this.p.keyframes && this.p.getValueAtTime) {
                var v1,v2;
                if (this.p._caching.lastFrame+this.p.offsetTime <= this.p.keyframes[0].t) {
                    v1 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / this.elem.globalData.frameRate,0);
                    v2 = this.p.getValueAtTime(this.p.keyframes[0].t / this.elem.globalData.frameRate, 0);
                } else if(this.p._caching.lastFrame+this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
                    v1 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t / this.elem.globalData.frameRate), 0);
                    v2 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.01) / this.elem.globalData.frameRate, 0);
                } else {
                    v1 = this.p.pv;
                    v2 = this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime - 0.01) / this.elem.globalData.frameRate, this.p.offsetTime);
                }
                this.v.rotate(-Math.atan2(v1[1] - v2[1], v1[0] - v2[0]));
            }
            if(this.data.p.s){
                if(this.data.p.z) {
                    this.v.translate(this.px.v, this.py.v, -this.pz.v);
                } else {
                    this.v.translate(this.px.v, this.py.v, 0);
                }
            }else{
                this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2]);
            }
        }
        this.frameId = this.elem.globalData.frameId;
    }

    function setInverted(){
        this.inverted = true;
        this.iv = new Matrix();
        if(!this.k){
            if(this.data.p.s){
                this.iv.translate(this.px.v,this.py.v,-this.pz.v);
            }else{
                this.iv.translate(this.p.v[0],this.p.v[1],-this.p.v[2]);
            }
            if(this.r){
                this.iv.rotate(-this.r.v);
            }else{
                this.iv.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
            }
            if(this.s){
                this.iv.scale(this.s.v[0],this.s.v[1],1);
            }
            if(this.a){
                this.iv.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]);
            }
        }
    }

    function autoOrient(){
        //
        //var prevP = this.getValueAtTime();
    }

    function TransformProperty(elem,data,arr){
        this.elem = elem;
        this.frameId = -1;
        this.propType = 'transform';
        this.dynamicProperties = [];
        this._mdf = false;
        this.data = data;
        this.v = new Matrix();
        if(data.p.s){
            this.px = PropertyFactory.getProp(elem,data.p.x,0,0,this.dynamicProperties);
            this.py = PropertyFactory.getProp(elem,data.p.y,0,0,this.dynamicProperties);
            if(data.p.z){
                this.pz = PropertyFactory.getProp(elem,data.p.z,0,0,this.dynamicProperties);
            }
        }else{
            this.p = PropertyFactory.getProp(elem,data.p,1,0,this.dynamicProperties);
        }
        if(data.r) {
            this.r = PropertyFactory.getProp(elem, data.r, 0, degToRads, this.dynamicProperties);
        } else if(data.rx) {
            this.rx = PropertyFactory.getProp(elem, data.rx, 0, degToRads, this.dynamicProperties);
            this.ry = PropertyFactory.getProp(elem, data.ry, 0, degToRads, this.dynamicProperties);
            this.rz = PropertyFactory.getProp(elem, data.rz, 0, degToRads, this.dynamicProperties);
            if(data.or.k[0].ti) {
                var i, len = data.or.k.length;
                for(i=0;i<len;i+=1) {
                    data.or.k[i].to = data.or.k[i].ti = null;
                }
            }
            this.or = PropertyFactory.getProp(elem, data.or, 1, degToRads, this.dynamicProperties);
            //sh Indicates it needs to be capped between -180 and 180
            this.or.sh = true;
        }
        if(data.sk){
            this.sk = PropertyFactory.getProp(elem, data.sk, 0, degToRads, this.dynamicProperties);
            this.sa = PropertyFactory.getProp(elem, data.sa, 0, degToRads, this.dynamicProperties);
        }
        if(data.a) {
            this.a = PropertyFactory.getProp(elem,data.a,1,0,this.dynamicProperties);
        }
        if(data.s) {
            this.s = PropertyFactory.getProp(elem,data.s,1,0.01,this.dynamicProperties);
        }
        // Opacity is not part of the transform properties, that's why it won't use this.dynamicProperties. That way transforms won't get updated if opacity changes.
        if(data.o){
            this.o = PropertyFactory.getProp(elem,data.o,0,0.01,arr);
        } else {
            this.o = {_mdf:false,v:1};
        }
        if(this.dynamicProperties.length){
            arr.push(this);
        }else{
            this.getValue(true);
        }
    }

    TransformProperty.prototype.applyToMatrix = applyToMatrix;
    TransformProperty.prototype.getValue = processKeys;
    TransformProperty.prototype.setInverted = setInverted;
    TransformProperty.prototype.autoOrient = autoOrient;

    function getTransformProperty(elem,data,arr){
        return new TransformProperty(elem,data,arr);
    }

    return {
        getTransformProperty: getTransformProperty
    };

}());
function ShapePath(){
	this.c = false;
	this._length = 0;
	this._maxLength = 8;
	this.v = createSizedArray(this._maxLength);
	this.o = createSizedArray(this._maxLength);
	this.i = createSizedArray(this._maxLength);
}

ShapePath.prototype.setPathData = function(closed, len) {
	this.c = closed;
	this.setLength(len);
	var i = 0;
	while(i < len){
		this.v[i] = point_pool.newElement();
		this.o[i] = point_pool.newElement();
		this.i[i] = point_pool.newElement();
		i += 1;
	}
};

ShapePath.prototype.setLength = function(len) {
	while(this._maxLength < len) {
		this.doubleArrayLength();
	}
	this._length = len;
};

ShapePath.prototype.doubleArrayLength = function() {
	this.v = this.v.concat(createSizedArray(this._maxLength));
	this.i = this.i.concat(createSizedArray(this._maxLength));
	this.o = this.o.concat(createSizedArray(this._maxLength));
	this._maxLength *= 2;
};

ShapePath.prototype.setXYAt = function(x, y, type, pos, replace) {
	var arr;
	this._length = Math.max(this._length, pos + 1);
	if(this._length >= this._maxLength) {
		this.doubleArrayLength();
	}
	switch(type){
		case 'v':
			arr = this.v;
			break;
		case 'i':
			arr = this.i;
			break;
		case 'o':
			arr = this.o;
			break;
	}
	if(!arr[pos] || (arr[pos] && !replace)){
		arr[pos] = point_pool.newElement();
	}
	arr[pos][0] = x;
	arr[pos][1] = y;
};

ShapePath.prototype.setTripleAt = function(vX,vY,oX,oY,iX,iY,pos, replace) {
	this.setXYAt(vX,vY,'v',pos, replace);
	this.setXYAt(oX,oY,'o',pos, replace);
	this.setXYAt(iX,iY,'i',pos, replace);
};

ShapePath.prototype.reverse = function() {
	var newPath = new ShapePath();
	newPath.setPathData(this.c, this._length);
	var vertices = this.v, outPoints = this.o, inPoints = this.i;
	var init = 0;
	if (this.c) {
		newPath.setTripleAt(vertices[0][0], vertices[0][1], inPoints[0][0], inPoints[0][1], outPoints[0][0], outPoints[0][1], 0, false);
        init = 1;
    }
    var cnt = this._length - 1;
    var len = this._length;

    for (i = init; i < len; i += 1) {
    	newPath.setTripleAt(vertices[cnt][0], vertices[cnt][1], inPoints[cnt][0], inPoints[cnt][1], outPoints[cnt][0], outPoints[cnt][1], i, false);
        cnt -= 1;
    }
    return newPath;
};
var ShapePropertyFactory = (function(){

    var initFrame = -999999;

    function interpolateShape(frameNum, previousValue, isCurrentRender, caching) {
        var iterationIndex = caching.lastIndex;
        var keyPropS,keyPropE,isHold, j, k, jLen, kLen, perc, vertexValue, hasModified = false;
        if(frameNum < this.keyframes[0].t-this.offsetTime){
            keyPropS = this.keyframes[0].s[0];
            isHold = true;
            iterationIndex = 0;
        }else if(frameNum >= this.keyframes[this.keyframes.length - 1].t-this.offsetTime){
            if(this.keyframes[this.keyframes.length - 2].h === 1){
                keyPropS = this.keyframes[this.keyframes.length - 1].s[0];
            }else{
                keyPropS = this.keyframes[this.keyframes.length - 2].e[0];
            }
            isHold = true;
        }else{
            var i = iterationIndex;
            var len = this.keyframes.length- 1,flag = true,keyData,nextKeyData;
            while(flag){
                keyData = this.keyframes[i];
                nextKeyData = this.keyframes[i+1];
                if((nextKeyData.t - this.offsetTime) > frameNum){
                    break;
                }
                if(i < len - 1){
                    i += 1;
                }else{
                    flag = false;
                }
            }
            isHold = keyData.h === 1;
            iterationIndex = i;
            if(!isHold){
                if(frameNum >= nextKeyData.t-this.offsetTime){
                    perc = 1;
                }else if(frameNum < keyData.t-this.offsetTime){
                    perc = 0;
                }else{
                    var fnc;
                    if(keyData.__fnct){
                        fnc = keyData.__fnct;
                    }else{
                        fnc = BezierFactory.getBezierEasing(keyData.o.x,keyData.o.y,keyData.i.x,keyData.i.y).get;
                        keyData.__fnct = fnc;
                    }
                    perc = fnc((frameNum-(keyData.t-this.offsetTime))/((nextKeyData.t-this.offsetTime)-(keyData.t-this.offsetTime)));
                }
                keyPropE = keyData.e[0];
            }
            keyPropS = keyData.s[0];
        }
        jLen = previousValue._length;
        kLen = keyPropS.i[0].length;
        caching.lastIndex = iterationIndex;

        for(j=0;j<jLen;j+=1){
            for(k=0;k<kLen;k+=1){
                vertexValue = isHold ? keyPropS.i[j][k] :  keyPropS.i[j][k]+(keyPropE.i[j][k]-keyPropS.i[j][k])*perc;
                if(previousValue.i[j][k] !== vertexValue){
                    previousValue.i[j][k] = vertexValue;
                    if(isCurrentRender) {
                        this.pv.i[j][k] = vertexValue;
                    }
                    hasModified = true;
                }
                vertexValue = isHold ? keyPropS.o[j][k] :  keyPropS.o[j][k]+(keyPropE.o[j][k]-keyPropS.o[j][k])*perc;
                if(previousValue.o[j][k] !== vertexValue){
                    previousValue.o[j][k] = vertexValue;
                    if(isCurrentRender) {
                        this.pv.o[j][k] = vertexValue;
                    }
                    hasModified = true;
                }
                vertexValue = isHold ? keyPropS.v[j][k] :  keyPropS.v[j][k]+(keyPropE.v[j][k]-keyPropS.v[j][k])*perc;
                if(previousValue.v[j][k] !== vertexValue){
                    previousValue.v[j][k] = vertexValue;
                    if(isCurrentRender) {
                        this.pv.v[j][k] = vertexValue;
                    }
                    hasModified = true;
                }
            }
        }

        return hasModified;
    }

    function interpolateShapeCurrentTime(){
        if(this.elem.globalData.frameId === this.frameId){
            return;
        }
        this._mdf = false;
        var frameNum = this.comp.renderedFrame - this.offsetTime;
        var initTime = this.keyframes[0].t - this.offsetTime;
        var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        var lastFrame = this._caching.lastFrame;
        if(!(lastFrame !== initFrame && ((lastFrame < initTime && frameNum < initTime) || (lastFrame > endTime && frameNum > endTime)))){
            ////
            this._caching.lastIndex = lastFrame < frameNum ? this._caching.lastIndex : 0;
            var hasModified = this.interpolateShape(frameNum, this.v, true, this._caching);
            ////
            this._mdf = hasModified;
            if(hasModified) {
                this.paths = this.localShapeCollection;
            }
        }
        this._caching.lastFrame = frameNum;
        this.frameId = this.elem.globalData.frameId;
    }

    function getShapeValue(){
        return this.v;
    }

    function resetShape(){
        this.paths = this.localShapeCollection;
        if(!this.k){
            this._mdf = false;
        }
    }

    function ShapeProperty(elem, data, type){
        this.propType = 'shape';
        this.comp = elem.comp;
        this.k = false;
        this._mdf = false;
        var pathData = type === 3 ? data.pt.k : data.ks.k;
        this.v = shape_pool.clone(pathData);
        this.pv = shape_pool.clone(this.v);
        this.localShapeCollection = shapeCollection_pool.newShapeCollection();
        this.paths = this.localShapeCollection;
        this.paths.addShape(this.v);
        this.reset = resetShape;
    }
    ShapeProperty.prototype.interpolateShape = interpolateShape;
    ShapeProperty.prototype.getValue = getShapeValue;

    function KeyframedShapeProperty(elem,data,type){
        this.propType = 'shape';
        this.comp = elem.comp;
        this.elem = elem;
        this.offsetTime = elem.data.st;
        this.keyframes = type === 3 ? data.pt.k : data.ks.k;
        this.k = true;
        this.kf = true;
        var i, len = this.keyframes[0].s[0].i.length;
        var jLen = this.keyframes[0].s[0].i[0].length;
        this.v = shape_pool.newElement();
        this.v.setPathData(this.keyframes[0].s[0].c, len);
        this.pv = shape_pool.clone(this.v);
        this.localShapeCollection = shapeCollection_pool.newShapeCollection();
        this.paths = this.localShapeCollection;
        this.paths.addShape(this.v);
        this.lastFrame = initFrame;
        this.reset = resetShape;
        this._caching = {lastFrame: initFrame, lastIndex: 0};
    }
    KeyframedShapeProperty.prototype.getValue = interpolateShapeCurrentTime;
    KeyframedShapeProperty.prototype.interpolateShape = interpolateShape;

    var EllShapeProperty = (function(){

        var cPoint = roundCorner;

        function convertEllToPath(){
            var p0 = this.p.v[0], p1 = this.p.v[1], s0 = this.s.v[0]/2, s1 = this.s.v[1]/2;
            var _cw = this.d !== 3;
            var _v = this.v;
            if(this.d !== 3){
                _v.v[0][0] = p0;
                _v.v[0][1] = p1 - s1;
                _v.v[1][0] = _cw ? p0 + s0 : p0 - s0;
                _v.v[1][1] = p1;
                _v.v[2][0] = p0;
                _v.v[2][1] = p1 + s1;
                _v.v[3][0] = _cw ? p0 - s0 : p0 + s0;
                _v.v[3][1] = p1;
                _v.i[0][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
                _v.i[0][1] = p1 - s1;
                _v.i[1][0] = _cw ? p0 + s0 : p0 - s0;
                _v.i[1][1] = p1 - s1 * cPoint;
                _v.i[2][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
                _v.i[2][1] = p1 + s1;
                _v.i[3][0] = _cw ? p0 - s0 : p0 + s0;
                _v.i[3][1] = p1 + s1 * cPoint;
                _v.o[0][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
                _v.o[0][1] = p1 - s1;
                _v.o[1][0] = _cw ? p0 + s0 : p0 - s0;
                _v.o[1][1] = p1 + s1 * cPoint;
                _v.o[2][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
                _v.o[2][1] = p1 + s1;
                _v.o[3][0] = _cw ? p0 - s0 : p0 + s0;
                _v.o[3][1] = p1 - s1 * cPoint;
            }
        }

        function processKeys(frameNum){
            var i, len = this.dynamicProperties.length;
            if(this.elem.globalData.frameId === this.frameId){
                return;
            }
            this._mdf = false;
            this.frameId = this.elem.globalData.frameId;

            for(i=0;i<len;i+=1){
                this.dynamicProperties[i].getValue(frameNum);
                if(this.dynamicProperties[i]._mdf){
                    this._mdf = true;
                }
            }
            if(this._mdf){
                this.convertEllToPath();
            }
        }

        return function EllShapeProperty(elem,data) {
            /*this.v = {
                v: createSizedArray(4),
                i: createSizedArray(4),
                o: createSizedArray(4),
                c: true
            };*/
            this.v = shape_pool.newElement();
            this.v.setPathData(true, 4);
            this.localShapeCollection = shapeCollection_pool.newShapeCollection();
            this.paths = this.localShapeCollection;
            this.localShapeCollection.addShape(this.v);
            this.d = data.d;
            this.dynamicProperties = [];
            this.elem = elem;
            this.comp = elem.comp;
            this.frameId = -1;
            this._mdf = false;
            this.getValue = processKeys;
            this.convertEllToPath = convertEllToPath;
            this.reset = resetShape;
            this.p = PropertyFactory.getProp(elem,data.p,1,0,this.dynamicProperties);
            this.s = PropertyFactory.getProp(elem,data.s,1,0,this.dynamicProperties);
            if(this.dynamicProperties.length){
                this.k = true;
            }else{
                this.convertEllToPath();
            }
        };
    }());

    var StarShapeProperty = (function() {

        function convertPolygonToPath(){
            var numPts = Math.floor(this.pt.v);
            var angle = Math.PI*2/numPts;
            /*this.v.v.length = numPts;
            this.v.i.length = numPts;
            this.v.o.length = numPts;*/
            var rad = this.or.v;
            var roundness = this.os.v;
            var perimSegment = 2*Math.PI*rad/(numPts*4);
            var i, currentAng = -Math.PI/ 2;
            var dir = this.data.d === 3 ? -1 : 1;
            currentAng += this.r.v;
            this.v._length = 0;
            for(i=0;i<numPts;i+=1){
                var x = rad * Math.cos(currentAng);
                var y = rad * Math.sin(currentAng);
                var ox = x === 0 && y === 0 ? 0 : y/Math.sqrt(x*x + y*y);
                var oy = x === 0 && y === 0 ? 0 : -x/Math.sqrt(x*x + y*y);
                x +=  + this.p.v[0];
                y +=  + this.p.v[1];
                this.v.setTripleAt(x,y,x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir,x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir, i, true);
                /*this.v.v[i] = [x,y];
                this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
                this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];*/
                currentAng += angle*dir;
            }
            this.paths.length = 0;
            this.paths[0] = this.v;
        }

        function convertStarToPath() {
            var numPts = Math.floor(this.pt.v)*2;
            var angle = Math.PI*2/numPts;
            /*this.v.v.length = numPts;
            this.v.i.length = numPts;
            this.v.o.length = numPts;*/
            var longFlag = true;
            var longRad = this.or.v;
            var shortRad = this.ir.v;
            var longRound = this.os.v;
            var shortRound = this.is.v;
            var longPerimSegment = 2*Math.PI*longRad/(numPts*2);
            var shortPerimSegment = 2*Math.PI*shortRad/(numPts*2);
            var i, rad,roundness,perimSegment, currentAng = -Math.PI/ 2;
            currentAng += this.r.v;
            var dir = this.data.d === 3 ? -1 : 1;
            this.v._length = 0;
            for(i=0;i<numPts;i+=1){
                rad = longFlag ? longRad : shortRad;
                roundness = longFlag ? longRound : shortRound;
                perimSegment = longFlag ? longPerimSegment : shortPerimSegment;
                var x = rad * Math.cos(currentAng);
                var y = rad * Math.sin(currentAng);
                var ox = x === 0 && y === 0 ? 0 : y/Math.sqrt(x*x + y*y);
                var oy = x === 0 && y === 0 ? 0 : -x/Math.sqrt(x*x + y*y);
                x +=  + this.p.v[0];
                y +=  + this.p.v[1];
                this.v.setTripleAt(x,y,x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir,x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir, i, true);

                /*this.v.v[i] = [x,y];
                this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
                this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];
                this.v._length = numPts;*/
                longFlag = !longFlag;
                currentAng += angle*dir;
            }
        }

        function processKeys() {
            if(this.elem.globalData.frameId === this.frameId){
                return;
            }
            this._mdf = false;
            this.frameId = this.elem.globalData.frameId;
            var i, len = this.dynamicProperties.length;

            for(i=0;i<len;i+=1){
                this.dynamicProperties[i].getValue();
                if(this.dynamicProperties[i]._mdf){
                    this._mdf = true;
                }
            }
            if(this._mdf){
                this.convertToPath();
            }
        }

        return function StarShapeProperty(elem,data) {
            /*this.v = {
                v: [],
                i: [],
                o: [],
                c: true
            };*/
            this.v = shape_pool.newElement();
            this.v.setPathData(true, 0);
            this.elem = elem;
            this.comp = elem.comp;
            this.data = data;
            this.frameId = -1;
            this.d = data.d;
            this.dynamicProperties = [];
            this._mdf = false;
            this.getValue = processKeys;
            this.reset = resetShape;
            if(data.sy === 1){
                this.ir = PropertyFactory.getProp(elem,data.ir,0,0,this.dynamicProperties);
                this.is = PropertyFactory.getProp(elem,data.is,0,0.01,this.dynamicProperties);
                this.convertToPath = convertStarToPath;
            } else {
                this.convertToPath = convertPolygonToPath;
            }
            this.pt = PropertyFactory.getProp(elem,data.pt,0,0,this.dynamicProperties);
            this.p = PropertyFactory.getProp(elem,data.p,1,0,this.dynamicProperties);
            this.r = PropertyFactory.getProp(elem,data.r,0,degToRads,this.dynamicProperties);
            this.or = PropertyFactory.getProp(elem,data.or,0,0,this.dynamicProperties);
            this.os = PropertyFactory.getProp(elem,data.os,0,0.01,this.dynamicProperties);
            this.localShapeCollection = shapeCollection_pool.newShapeCollection();
            this.localShapeCollection.addShape(this.v);
            this.paths = this.localShapeCollection;
            if(this.dynamicProperties.length){
                this.k = true;
            }else{
                this.convertToPath();
            }
        };
    }());

    var RectShapeProperty = (function() {
        function processKeys(frameNum){
            if(this.elem.globalData.frameId === this.frameId){
                return;
            }
            this._mdf = false;
            this.frameId = this.elem.globalData.frameId;
            var i, len = this.dynamicProperties.length;

            for(i=0;i<len;i+=1){
                this.dynamicProperties[i].getValue(frameNum);
                if(this.dynamicProperties[i]._mdf){
                    this._mdf = true;
                }
            }
            if(this._mdf){
                this.convertRectToPath();
            }

        }

        function convertRectToPath(){
            var p0 = this.p.v[0], p1 = this.p.v[1], v0 = this.s.v[0]/2, v1 = this.s.v[1]/2;
            var round = bm_min(v0,v1,this.r.v);
            var cPoint = round*(1-roundCorner);
            this.v._length = 0;

            if(this.d === 2 || this.d === 1) {
                this.v.setTripleAt(p0+v0, p1-v1+round,p0+v0, p1-v1+round,p0+v0,p1-v1+cPoint,0, true);
                this.v.setTripleAt(p0+v0, p1+v1-round,p0+v0, p1+v1-cPoint,p0+v0, p1+v1-round,1, true);
                if(round!== 0){
                    this.v.setTripleAt(p0+v0-round, p1+v1,p0+v0-round,p1+v1,p0+v0-cPoint,p1+v1,2, true);
                    this.v.setTripleAt(p0-v0+round,p1+v1,p0-v0+cPoint,p1+v1,p0-v0+round,p1+v1,3, true);
                    this.v.setTripleAt(p0-v0,p1+v1-round,p0-v0,p1+v1-round,p0-v0,p1+v1-cPoint,4, true);
                    this.v.setTripleAt(p0-v0,p1-v1+round,p0-v0,p1-v1+cPoint,p0-v0,p1-v1+round,5, true);
                    this.v.setTripleAt(p0-v0+round,p1-v1,p0-v0+round,p1-v1,p0-v0+cPoint,p1-v1,6, true);
                    this.v.setTripleAt(p0+v0-round,p1-v1,p0+v0-cPoint,p1-v1,p0+v0-round,p1-v1,7, true);
                } else {
                    this.v.setTripleAt(p0-v0,p1+v1,p0-v0+cPoint,p1+v1,p0-v0,p1+v1,2);
                    this.v.setTripleAt(p0-v0,p1-v1,p0-v0,p1-v1+cPoint,p0-v0,p1-v1,3);
                }
            }else{
                this.v.setTripleAt(p0+v0,p1-v1+round,p0+v0,p1-v1+cPoint,p0+v0,p1-v1+round,0, true);
                if(round!== 0){
                    this.v.setTripleAt(p0+v0-round,p1-v1,p0+v0-round,p1-v1,p0+v0-cPoint,p1-v1,1, true);
                    this.v.setTripleAt(p0-v0+round,p1-v1,p0-v0+cPoint,p1-v1,p0-v0+round,p1-v1,2, true);
                    this.v.setTripleAt(p0-v0,p1-v1+round,p0-v0,p1-v1+round,p0-v0,p1-v1+cPoint,3, true);
                    this.v.setTripleAt(p0-v0,p1+v1-round,p0-v0,p1+v1-cPoint,p0-v0,p1+v1-round,4, true);
                    this.v.setTripleAt(p0-v0+round,p1+v1,p0-v0+round,p1+v1,p0-v0+cPoint,p1+v1,5, true);
                    this.v.setTripleAt(p0+v0-round,p1+v1,p0+v0-cPoint,p1+v1,p0+v0-round,p1+v1,6, true);
                    this.v.setTripleAt(p0+v0,p1+v1-round,p0+v0,p1+v1-round,p0+v0,p1+v1-cPoint,7, true);
                } else {
                    this.v.setTripleAt(p0-v0,p1-v1,p0-v0+cPoint,p1-v1,p0-v0,p1-v1,1, true);
                    this.v.setTripleAt(p0-v0,p1+v1,p0-v0,p1+v1-cPoint,p0-v0,p1+v1,2, true);
                    this.v.setTripleAt(p0+v0,p1+v1,p0+v0-cPoint,p1+v1,p0+v0,p1+v1,3, true);

                }
            }
        }

        return function RectShapeProperty(elem,data) {
            this.v = shape_pool.newElement();
            this.v.c = true;
            this.localShapeCollection = shapeCollection_pool.newShapeCollection();
            this.localShapeCollection.addShape(this.v);
            this.paths = this.localShapeCollection;
            this.elem = elem;
            this.comp = elem.comp;
            this.frameId = -1;
            this.d = data.d;
            this.dynamicProperties = [];
            this._mdf = false;
            this.getValue = processKeys;
            this.convertRectToPath = convertRectToPath;
            this.reset = resetShape;
            this.p = PropertyFactory.getProp(elem,data.p,1,0,this.dynamicProperties);
            this.s = PropertyFactory.getProp(elem,data.s,1,0,this.dynamicProperties);
            this.r = PropertyFactory.getProp(elem,data.r,0,0,this.dynamicProperties);
            if(this.dynamicProperties.length){
                this.k = true;
            }else{
                this.convertRectToPath();
            }
        };
    }());

    function getShapeProp(elem,data,type, arr){
        var prop;
        if(type === 3 || type === 4){
            var dataProp = type === 3 ? data.pt : data.ks;
            var keys = dataProp.k;
            if(dataProp.a === 1 || keys.length){
                prop = new KeyframedShapeProperty(elem, data, type);
            }else{
                prop = new ShapeProperty(elem, data, type);
            }
        }else if(type === 5){
            prop = new RectShapeProperty(elem, data);
        }else if(type === 6){
            prop = new EllShapeProperty(elem, data);
        }else if(type === 7){
            prop = new StarShapeProperty(elem, data);
        }
        if(prop.k){
            arr.push(prop);
        }
        return prop;
    }

    function getConstructorFunction() {
        return ShapeProperty;
    }

    function getKeyframedConstructorFunction() {
        return KeyframedShapeProperty;
    }

    var ob = {};
    ob.getShapeProp = getShapeProp;
    ob.getConstructorFunction = getConstructorFunction;
    ob.getKeyframedConstructorFunction = getKeyframedConstructorFunction;
    return ob;
}());
var ShapeModifiers = (function(){
    var ob = {};
    var modifiers = {};
    ob.registerModifier = registerModifier;
    ob.getModifier = getModifier;

    function registerModifier(nm,factory){
        if(!modifiers[nm]){
            modifiers[nm] = factory;
        }
    }

    function getModifier(nm,elem, data, dynamicProperties){
        return new modifiers[nm](elem, data, dynamicProperties);
    }

    return ob;
}());

function ShapeModifier(){}
ShapeModifier.prototype.initModifierProperties = function(){};
ShapeModifier.prototype.addShapeToModifier = function(){};
ShapeModifier.prototype.addShape = function(data){
    if(!this.closed){
        var shapeData = {shape:data.sh, data: data, localShapeCollection:shapeCollection_pool.newShapeCollection()};
        this.shapes.push(shapeData);
        this.addShapeToModifier(shapeData);
    }
};
ShapeModifier.prototype.init = function(elem,data,dynamicProperties){
    this.dynamicProperties = [];
    this.shapes = [];
    this.elem = elem;
    this.initModifierProperties(elem,data);
    this.frameId = initialDefaultFrame;
    this._mdf = false;
    this.closed = false;
    this.k = false;
    if(this.dynamicProperties.length){
        this.k = true;
        dynamicProperties.push(this);
    }else{
        this.getValue(true);
    }
};
ShapeModifier.prototype.processKeys = function(){
    if(this.elem.globalData.frameId === this.frameId){
        return;
    }
    this._mdf = false;
    var i, len = this.dynamicProperties.length;

    for(i=0;i<len;i+=1){
        this.dynamicProperties[i].getValue();
        if(this.dynamicProperties[i]._mdf){
            this._mdf = true;
        }
    }
    this.frameId = this.elem.globalData.frameId;
};
function TrimModifier(){
}
extendPrototype([ShapeModifier], TrimModifier);
TrimModifier.prototype.initModifierProperties = function(elem, data) {
    this.s = PropertyFactory.getProp(elem, data.s, 0, 0.01, this.dynamicProperties);
    this.e = PropertyFactory.getProp(elem, data.e, 0, 0.01, this.dynamicProperties);
    this.o = PropertyFactory.getProp(elem, data.o, 0, 0, this.dynamicProperties);
    this.sValue = 0;
    this.eValue = 0;
    this.getValue = this.processKeys;
    this.m = data.m;
};

TrimModifier.prototype.addShapeToModifier = function(shapeData){
    shapeData.pathsData = [];
};

TrimModifier.prototype.calculateShapeEdges = function(s, e, shapeLength, addedLength, totalModifierLength) {
    var segments = [];
    if (e <= 1) {
        segments.push({
            s: s,
            e: e
        });
    } else if (s >= 1) {
        segments.push({
            s: s - 1,
            e: e - 1
        });
    } else {
        segments.push({
            s: s,
            e: 1
        });
        segments.push({
            s: 0,
            e: e - 1
        });
    }
    var shapeSegments = [];
    var i, len = segments.length, segmentOb;
    for (i = 0; i < len; i += 1) {
        segmentOb = segments[i];
        if (segmentOb.e * totalModifierLength < addedLength || segmentOb.s * totalModifierLength > addedLength + shapeLength) {
            
        } else {
            var shapeS, shapeE;
            if (segmentOb.s * totalModifierLength <= addedLength) {
                shapeS = 0;
            } else {
                shapeS = (segmentOb.s * totalModifierLength - addedLength) / shapeLength;
            }
            if(segmentOb.e * totalModifierLength >= addedLength + shapeLength) {
                shapeE = 1;
            } else {
                shapeE = ((segmentOb.e * totalModifierLength - addedLength) / shapeLength);
            }
            shapeSegments.push([shapeS, shapeE]);
        }
    }
    if (!shapeSegments.length) {
        shapeSegments.push([0, 0]);
    }
    return shapeSegments;
};

TrimModifier.prototype.releasePathsData = function(pathsData) {
    var i, len = pathsData.length;
    for (i = 0; i < len; i += 1) {
        segments_length_pool.release(pathsData[i]);
    }
    pathsData.length = 0;
    return pathsData;
};

TrimModifier.prototype.processShapes = function(_isFirstFrame) {
    var s, e;
    if (this._mdf || _isFirstFrame) {
        var o = (this.o.v % 360) / 360;
        if (o < 0) {
            o += 1;
        }
        s = this.s.v + o;
        e = this.e.v + o;
        if (s === e) {

        }
        if (s > e) {
            var _s = s;
            s = e;
            e = _s;
        }
        this.sValue = s;
        this.eValue = e;
    } else {
        s = this.sValue;
        e = this.eValue;
    }
    var shapePaths;
    var i, len = this.shapes.length, j, jLen;
    var pathsData, pathData, totalShapeLength, totalModifierLength = 0;

    if (e === s) {
        for (i = 0; i < len; i += 1) {
            this.shapes[i].localShapeCollection.releaseShapes();
            this.shapes[i].shape._mdf = true;
            this.shapes[i].shape.paths = this.shapes[i].localShapeCollection;
        }
    } else if (!((e === 1 && s === 0) || (e===0 && s === 1))){
        var segments = [], shapeData, localShapeCollection;
        for (i = 0; i < len; i += 1) {
            shapeData = this.shapes[i];
            // if shape hasn't changed and trim properties haven't changed, cached previous path can be used
            if (!shapeData.shape._mdf && !this._mdf && !_isFirstFrame && this.m !== 2) {
                shapeData.shape.paths = shapeData.localShapeCollection;
            } else {
                shapePaths = shapeData.shape.paths;
                jLen = shapePaths._length;
                totalShapeLength = 0;
                if (!shapeData.shape._mdf && shapeData.pathsData.length) {
                    totalShapeLength = shapeData.totalShapeLength;
                } else {
                    pathsData = this.releasePathsData(shapeData.pathsData);
                    for (j = 0; j < jLen; j += 1) {
                        pathData = bez.getSegmentsLength(shapePaths.shapes[j]);
                        pathsData.push(pathData);
                        totalShapeLength += pathData.totalLength;
                    }
                    shapeData.totalShapeLength = totalShapeLength;
                    shapeData.pathsData = pathsData;
                }

                totalModifierLength += totalShapeLength;
                shapeData.shape._mdf = true;
            }
        }
        var shapeS = s, shapeE = e, addedLength = 0, edges;
        for (i = len - 1; i >= 0; i -= 1) {
            shapeData = this.shapes[i];
            if (shapeData.shape._mdf) {
                localShapeCollection = shapeData.localShapeCollection;
                localShapeCollection.releaseShapes();
                //if m === 2 means paths are trimmed individually so edges need to be found for this specific shape relative to whoel group
                if (this.m === 2 && len > 1) {
                    edges = this.calculateShapeEdges(s, e, shapeData.totalShapeLength, addedLength, totalModifierLength);
                    addedLength += shapeData.totalShapeLength;
                } else {
                    edges = [[shapeS, shapeE]];
                }
                jLen = edges.length;
                for (j = 0; j < jLen; j += 1) {
                    shapeS = edges[j][0];
                    shapeE = edges[j][1];
                    segments.length = 0;
                    if (shapeE <= 1) {
                        segments.push({
                            s:shapeData.totalShapeLength * shapeS,
                            e:shapeData.totalShapeLength * shapeE
                        });
                    } else if (shapeS >= 1) {
                        segments.push({
                            s:shapeData.totalShapeLength * (shapeS - 1),
                            e:shapeData.totalShapeLength * (shapeE - 1)
                        });
                    } else {
                        segments.push({
                            s:shapeData.totalShapeLength * shapeS,
                            e:shapeData.totalShapeLength
                        });
                        segments.push({
                            s:0,
                            e:shapeData.totalShapeLength * (shapeE - 1)
                        });
                    }
                    var newShapesData = this.addShapes(shapeData,segments[0]);
                    if (segments[0].s !== segments[0].e) {
                        if (segments.length > 1) {
                            if (shapeData.shape.v.c) {
                                var lastShape = newShapesData.pop();
                                this.addPaths(newShapesData, localShapeCollection);
                                newShapesData = this.addShapes(shapeData, segments[1], lastShape);
                            } else {
                                this.addPaths(newShapesData, localShapeCollection);
                                newShapesData = this.addShapes(shapeData, segments[1]);
                            }
                        } 
                        this.addPaths(newShapesData, localShapeCollection);
                    }
                    
                }
                shapeData.shape.paths = localShapeCollection;
            }
        }
    } else if (this._mdf) {
        for (i = 0; i < len; i += 1) {
            this.shapes[i].shape._mdf = true;
        }
    }
};

TrimModifier.prototype.addPaths = function(newPaths, localShapeCollection) {
    var i, len = newPaths.length;
    for (i = 0; i < len; i += 1) {
        localShapeCollection.addShape(newPaths[i]);
    }
};

TrimModifier.prototype.addSegment = function(pt1, pt2, pt3, pt4, shapePath, pos, newShape) {
    shapePath.setXYAt(pt2[0], pt2[1], 'o', pos);
    shapePath.setXYAt(pt3[0], pt3[1], 'i', pos + 1);
    if(newShape){
        shapePath.setXYAt(pt1[0], pt1[1], 'v', pos);
    }
    shapePath.setXYAt(pt4[0], pt4[1], 'v', pos + 1);
};

TrimModifier.prototype.addSegmentFromArray = function(points, shapePath, pos, newShape) {
    shapePath.setXYAt(points[1], points[5], 'o', pos);
    shapePath.setXYAt(points[2], points[6], 'i', pos + 1);
    if(newShape){
        shapePath.setXYAt(points[0], points[4], 'v', pos);
    }
    shapePath.setXYAt(points[3], points[7], 'v', pos + 1);
};

TrimModifier.prototype.addShapes = function(shapeData, shapeSegment, shapePath) {
    var pathsData = shapeData.pathsData;
    var shapePaths = shapeData.shape.paths.shapes;
    var i, len = shapeData.shape.paths._length, j, jLen;
    var addedLength = 0;
    var currentLengthData,segmentCount;
    var lengths;
    var segment;
    var shapes = [];
    var initPos;
    var newShape = true;
    if (!shapePath) {
        shapePath = shape_pool.newElement();
        segmentCount = 0;
        initPos = 0;
    } else {
        segmentCount = shapePath._length;
        initPos = shapePath._length;
    }
    shapes.push(shapePath);
    for (i = 0; i < len; i += 1) {
        lengths = pathsData[i].lengths;
        shapePath.c = shapePaths[i].c;
        jLen = shapePaths[i].c ? lengths.length : lengths.length + 1;
        for (j = 1; j < jLen; j +=1) {
            currentLengthData = lengths[j-1];
            if (addedLength + currentLengthData.addedLength < shapeSegment.s) {
                addedLength += currentLengthData.addedLength;
                shapePath.c = false;
            } else if(addedLength > shapeSegment.e) {
                shapePath.c = false;
                break;
            } else {
                if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + currentLengthData.addedLength) {
                    this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[j], shapePaths[i].v[j], shapePath, segmentCount, newShape);
                    newShape = false;
                } else {
                    segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[j], shapePaths[i].o[j - 1], shapePaths[i].i[j], (shapeSegment.s - addedLength)/currentLengthData.addedLength,(shapeSegment.e - addedLength)/currentLengthData.addedLength, lengths[j-1]);
                    this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
                    // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
                    newShape = false;
                    shapePath.c = false;
                }
                addedLength += currentLengthData.addedLength;
                segmentCount += 1;
            }
        }
        if (shapePaths[i].c) {
            currentLengthData = lengths[j - 1];
            if (addedLength <= shapeSegment.e) {
                var segmentLength = lengths[j - 1].addedLength;
                if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + segmentLength) {
                    this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[0], shapePaths[i].v[0], shapePath, segmentCount, newShape);
                    newShape = false;
                } else {
                    segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[0], shapePaths[i].o[j - 1], shapePaths[i].i[0], (shapeSegment.s - addedLength) / segmentLength, (shapeSegment.e - addedLength) / segmentLength, lengths[j - 1]);
                    this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
                    // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
                    newShape = false;
                    shapePath.c = false;
                }
            } else {
                shapePath.c = false;
            }
            addedLength += currentLengthData.addedLength;
            segmentCount += 1;
        }
        if (shapePath._length) {
            shapePath.setXYAt(shapePath.v[initPos][0], shapePath.v[initPos][1], 'i', initPos);
            shapePath.setXYAt(shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1],'o', shapePath._length - 1);
        }
        if (addedLength > shapeSegment.e) {
            break;
        }
        if (i < len - 1) {
            shapePath = shape_pool.newElement();
            newShape = true;
            shapes.push(shapePath);
            segmentCount = 0;
        }
    }
    return shapes;
};


ShapeModifiers.registerModifier('tm', TrimModifier);
function RoundCornersModifier(){}
extendPrototype([ShapeModifier],RoundCornersModifier);
RoundCornersModifier.prototype.initModifierProperties = function(elem,data){
    this.getValue = this.processKeys;
    this.rd = PropertyFactory.getProp(elem,data.r,0,null,this.dynamicProperties);
};

RoundCornersModifier.prototype.processPath = function(path, round){
    var cloned_path = shape_pool.newElement();
    cloned_path.c = path.c;
    var i, len = path._length;
    var currentV,currentI,currentO,closerV, newV,newO,newI,distance,newPosPerc,index = 0;
    var vX,vY,oX,oY,iX,iY;
    for(i=0;i<len;i+=1){
        currentV = path.v[i];
        currentO = path.o[i];
        currentI = path.i[i];
        if(currentV[0]===currentO[0] && currentV[1]===currentO[1] && currentV[0]===currentI[0] && currentV[1]===currentI[1]){
            if((i===0 || i === len - 1) && !path.c){
                cloned_path.setTripleAt(currentV[0],currentV[1],currentO[0],currentO[1],currentI[0],currentI[1],index);
                /*cloned_path.v[index] = currentV;
                cloned_path.o[index] = currentO;
                cloned_path.i[index] = currentI;*/
                index += 1;
            } else {
                if(i===0){
                    closerV = path.v[len-1];
                } else {
                    closerV = path.v[i-1];
                }
                distance = Math.sqrt(Math.pow(currentV[0]-closerV[0],2)+Math.pow(currentV[1]-closerV[1],2));
                newPosPerc = distance ? Math.min(distance/2,round)/distance : 0;
                vX = iX = currentV[0]+(closerV[0]-currentV[0])*newPosPerc;
                vY = iY = currentV[1]-(currentV[1]-closerV[1])*newPosPerc;
                oX = vX-(vX-currentV[0])*roundCorner;
                oY = vY-(vY-currentV[1])*roundCorner;
                cloned_path.setTripleAt(vX,vY,oX,oY,iX,iY,index);
                index += 1;

                if(i === len - 1){
                    closerV = path.v[0];
                } else {
                    closerV = path.v[i+1];
                }
                distance = Math.sqrt(Math.pow(currentV[0]-closerV[0],2)+Math.pow(currentV[1]-closerV[1],2));
                newPosPerc = distance ? Math.min(distance/2,round)/distance : 0;
                vX = oX = currentV[0]+(closerV[0]-currentV[0])*newPosPerc;
                vY = oY = currentV[1]+(closerV[1]-currentV[1])*newPosPerc;
                iX = vX-(vX-currentV[0])*roundCorner;
                iY = vY-(vY-currentV[1])*roundCorner;
                cloned_path.setTripleAt(vX,vY,oX,oY,iX,iY,index);
                index += 1;
            }
        } else {
            cloned_path.setTripleAt(path.v[i][0],path.v[i][1],path.o[i][0],path.o[i][1],path.i[i][0],path.i[i][1],index);
            index += 1;
        }
    }
    return cloned_path;
};

RoundCornersModifier.prototype.processShapes = function(_isFirstFrame){
    var shapePaths;
    var i, len = this.shapes.length;
    var j, jLen;
    var rd = this.rd.v;

    if(rd !== 0){
        var shapeData, newPaths, localShapeCollection;
        for(i=0;i<len;i+=1){
            shapeData = this.shapes[i];
            newPaths = shapeData.shape.paths;
            localShapeCollection = shapeData.localShapeCollection;
            if(!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)){
                localShapeCollection.releaseShapes();
                shapeData.shape._mdf = true;
                shapePaths = shapeData.shape.paths.shapes;
                jLen = shapeData.shape.paths._length;
                for(j=0;j<jLen;j+=1){
                    localShapeCollection.addShape(this.processPath(shapePaths[j],rd));
                }
            }
            shapeData.shape.paths = shapeData.localShapeCollection;
        }

    }
    if(!this.dynamicProperties.length){
        this._mdf = false;
    }
};

ShapeModifiers.registerModifier('rd',RoundCornersModifier);
function RepeaterModifier(){}
extendPrototype([ShapeModifier], RepeaterModifier);

RepeaterModifier.prototype.initModifierProperties = function(elem,data){
    this.getValue = this.processKeys;
    this.c = PropertyFactory.getProp(elem,data.c,0,null,this.dynamicProperties);
    this.o = PropertyFactory.getProp(elem,data.o,0,null,this.dynamicProperties);
    this.tr = TransformPropertyFactory.getTransformProperty(elem,data.tr,this.dynamicProperties);
    this.data = data;
    if(!this.dynamicProperties.length){
        this.getValue(true);
    }
    this.pMatrix = new Matrix();
    this.rMatrix = new Matrix();
    this.sMatrix = new Matrix();
    this.tMatrix = new Matrix();
    this.matrix = new Matrix();
};

RepeaterModifier.prototype.applyTransforms = function(pMatrix, rMatrix, sMatrix, transform, perc, inv){
    var dir = inv ? -1 : 1;
    var scaleX = transform.s.v[0] + (1 - transform.s.v[0]) * (1 - perc);
    var scaleY = transform.s.v[1] + (1 - transform.s.v[1]) * (1 - perc);
    pMatrix.translate(transform.p.v[0] * dir * perc, transform.p.v[1] * dir * perc, transform.p.v[2]);
    rMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
    rMatrix.rotate(-transform.r.v * dir * perc);
    rMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
    sMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
    sMatrix.scale(inv ? 1/scaleX : scaleX, inv ? 1/scaleY : scaleY);
    sMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
};

RepeaterModifier.prototype.init = function(elem, arr, pos, elemsData, dynamicProperties) {
    this.elem = elem;
    this.arr = arr;
    this.pos = pos;
    this.elemsData = elemsData;
    this._currentCopies = 0;
    this._elements = [];
    this._groups = [];
    this.dynamicProperties = [];
    this.frameId = -1;
    this.initModifierProperties(elem,arr[pos]);
    var cont = 0;
    while(pos>0){
        pos -= 1;
        //this._elements.unshift(arr.splice(pos,1)[0]);
        this._elements.unshift(arr[pos]);
        cont += 1;
    }
    if(this.dynamicProperties.length){
        this.k = true;
        dynamicProperties.push(this);
    }else{
        this.getValue(true);
    }
};

RepeaterModifier.prototype.resetElements = function(elements){
    var i, len = elements.length;
    for(i = 0; i < len; i += 1) {
        elements[i]._processed = false;
        if(elements[i].ty === 'gr'){
            this.resetElements(elements[i].it);
        }
    }
};

RepeaterModifier.prototype.cloneElements = function(elements){
    var i, len = elements.length;
    var newElements = JSON.parse(JSON.stringify(elements));
    this.resetElements(newElements);
    return newElements;
};

RepeaterModifier.prototype.changeGroupRender = function(elements, renderFlag) {
    var i, len = elements.length;
    for(i = 0; i < len ; i += 1) {
        elements[i]._render = renderFlag;
        if(elements[i].ty === 'gr') {
            this.changeGroupRender(elements[i].it, renderFlag);
        }
    }
};

RepeaterModifier.prototype.processShapes = function(_isFirstFrame) {
    var items, itemsTransform, i, dir, cont;
    if(this._mdf || _isFirstFrame){
        var copies = Math.ceil(this.c.v);
        if(this._groups.length < copies){
            while(this._groups.length < copies){
                var group = {
                    it:this.cloneElements(this._elements),
                    ty:'gr'
                };
                group.it.push({"a":{"a":0,"ix":1,"k":[0,0]},"nm":"Transform","o":{"a":0,"ix":7,"k":100},"p":{"a":0,"ix":2,"k":[0,0]},"r":{"a":0,"ix":6,"k":0},"s":{"a":0,"ix":3,"k":[100,100]},"sa":{"a":0,"ix":5,"k":0},"sk":{"a":0,"ix":4,"k":0},"ty":"tr"});
                
                this.arr.splice(0,0,group);
                this._groups.splice(0,0,group);
                this._currentCopies += 1;
            }
            this.elem.reloadShapes();
        }
        cont = 0;
        var renderFlag;
        for(i = 0; i  <= this._groups.length - 1; i += 1){
            renderFlag = cont < copies;
            this._groups[i]._render = renderFlag;
            this.changeGroupRender(this._groups[i].it, renderFlag);
            cont += 1;
        }
        
        this._currentCopies = copies;
        ////

        var offset = this.o.v;
        var offsetModulo = offset%1;
        var roundOffset = offset > 0 ? Math.floor(offset) : Math.ceil(offset);
        var k;
        var tMat = this.tr.v.props;
        var pProps = this.pMatrix.props;
        var rProps = this.rMatrix.props;
        var sProps = this.sMatrix.props;
        this.pMatrix.reset();
        this.rMatrix.reset();
        this.sMatrix.reset();
        this.tMatrix.reset();
        this.matrix.reset();
        var iteration = 0;

        if(offset > 0) {
            while(iteration<roundOffset){
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
                iteration += 1;
            }
            if(offsetModulo){
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, offsetModulo, false);
                iteration += offsetModulo;
            }
        } else if(offset < 0) {
            while(iteration>roundOffset){
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
                iteration -= 1;
            }
            if(offsetModulo){
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, - offsetModulo, true);
                iteration -= offsetModulo;
            }
        }
        i = this.data.m === 1 ? 0 : this._currentCopies - 1;
        dir = this.data.m === 1 ? 1 : -1;
        cont = this._currentCopies;
        var j, jLen;
        while(cont){
            items = this.elemsData[i].it;
            itemsTransform = items[items.length - 1].transform.mProps.v.props;
            jLen = itemsTransform.length;
            items[items.length - 1].transform.mProps._mdf = true;
            items[items.length - 1].transform.op._mdf = true;
            if(iteration !== 0){
                if((i !== 0 && dir === 1) || (i !== this._currentCopies - 1 && dir === -1)){
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
                }
                this.matrix.transform(rProps[0],rProps[1],rProps[2],rProps[3],rProps[4],rProps[5],rProps[6],rProps[7],rProps[8],rProps[9],rProps[10],rProps[11],rProps[12],rProps[13],rProps[14],rProps[15]);
                this.matrix.transform(sProps[0],sProps[1],sProps[2],sProps[3],sProps[4],sProps[5],sProps[6],sProps[7],sProps[8],sProps[9],sProps[10],sProps[11],sProps[12],sProps[13],sProps[14],sProps[15]);
                this.matrix.transform(pProps[0],pProps[1],pProps[2],pProps[3],pProps[4],pProps[5],pProps[6],pProps[7],pProps[8],pProps[9],pProps[10],pProps[11],pProps[12],pProps[13],pProps[14],pProps[15]);
                
                for(j=0;j<jLen;j+=1) {
                    itemsTransform[j] = this.matrix.props[j];
                }
                this.matrix.reset();
            } else {
                this.matrix.reset();
                for(j=0;j<jLen;j+=1) {
                    itemsTransform[j] = this.matrix.props[j];
                }
            }
            iteration += 1;
            cont -= 1;
            i += dir;
        }
    } else {
        cont = this._currentCopies;
        i = 0;
        dir = 1;
        while(cont){
            items = this.elemsData[i].it;
            itemsTransform = items[items.length - 1].transform.mProps.v.props;
            items[items.length - 1].transform.mProps._mdf = false;
            items[items.length - 1].transform.op._mdf = false;
            cont -= 1;
            i += dir;
        }
    }
};

RepeaterModifier.prototype.addShape = function(){};

ShapeModifiers.registerModifier('rp',RepeaterModifier);
function ShapeCollection(){
	this._length = 0;
	this._maxLength = 4;
	this.shapes = createSizedArray(this._maxLength);
}

ShapeCollection.prototype.addShape = function(shapeData){
	if(this._length === this._maxLength){
		this.shapes = this.shapes.concat(createSizedArray(this._maxLength));
		this._maxLength *= 2;
	}
	this.shapes[this._length] = shapeData;
	this._length += 1;
};

ShapeCollection.prototype.releaseShapes = function(){
	var i;
	for(i = 0; i < this._length; i += 1) {
		shape_pool.release(this.shapes[i]);
	}
	this._length = 0;
};
function DashProperty(elem, data, renderer, dynamicProperties) {
    this.elem = elem;
    this.frameId = -1;
    this.dataProps = createSizedArray(data.length);
    this.renderer = renderer;
    this._mdf = false;
    this.k = false;
    this.dashStr = '';
    this.dashArray = createTypedArray('float32',  data.length - 1);
    this.dashoffset = createTypedArray('float32',  1);
    var i, len = data.length, prop;
    for(i=0;i<len;i+=1){
        prop = PropertyFactory.getProp(elem,data[i].v,0, 0, dynamicProperties);
        this.k = prop.k ? true : this.k;
        this.dataProps[i] = {n:data[i].n,p:prop};
    }
    if(this.k){
        dynamicProperties.push(this);
    }else{
        this.getValue(true);
    }
}

DashProperty.prototype.getValue = function(forceRender) {
    if(this.elem.globalData.frameId === this.frameId && !forceRender){
        return;
    }
    var i = 0, len = this.dataProps.length;
    this._mdf = false;
    this.frameId = this.elem.globalData.frameId;
    while(i<len){
        if(this.dataProps[i].p._mdf){
            this._mdf = !forceRender;
            break;
        }
        i+=1;
    }
    if(this._mdf || forceRender){
        if(this.renderer === 'svg') {
            this.dashStr = '';
        }
        for(i=0;i<len;i+=1){
            if(this.dataProps[i].n != 'o'){
                if(this.renderer === 'svg') {
                    this.dashStr += ' ' + this.dataProps[i].p.v;
                }else{
                    this.dashArray[i] = this.dataProps[i].p.v;
                }
            }else{
                this.dashoffset[0] = this.dataProps[i].p.v;
            }
        }
    }
};
function GradientProperty(elem,data,arr){
    this.prop = PropertyFactory.getProp(elem,data.k,1,null,[]);
    this.data = data;
    this.k = this.prop.k;
    this.c = createTypedArray('uint8c', data.p*4);
    var cLength = data.k.k[0].s ? (data.k.k[0].s.length - data.p*4) : data.k.k.length - data.p*4;
    this.o = createTypedArray('float32', cLength);
    this._cmdf = false;
    this._omdf = false;
    this._collapsable = this.checkCollapsable();
    this._hasOpacity = cLength;
    if(this.prop.k){
        arr.push(this);
    }
    this.getValue(true);
}

GradientProperty.prototype.comparePoints = function(values, points) {
    var i = 0, len = this.o.length/2, diff;
    while(i < len) {
        diff = Math.abs(values[i*4] - values[points*4 + i*2]);
        if(diff > 0.01){
            return false;
        }
        i += 1;
    }
    return true;
};

GradientProperty.prototype.checkCollapsable = function() {
    if (this.o.length/2 !== this.c.length/4) {
        return false;
    }
    if (this.data.k.k[0].s) {
        var i = 0, len = this.data.k.k.length;
        while (i < len) {
            if (!this.comparePoints(this.data.k.k[i].s, this.data.p)) {
                return false;
            }
            i += 1;
        }
    } else if(!this.comparePoints(this.data.k.k, this.data.p)) {
        return false;
    }
    return true;
};

GradientProperty.prototype.getValue = function(forceRender){
    this.prop.getValue();
    this._cmdf = false;
    this._omdf = false;
    if(this.prop._mdf || forceRender){
        var i, len = this.data.p*4;
        var mult, val;
        for(i=0;i<len;i+=1){
            mult = i%4 === 0 ? 100 : 255;
            val = Math.round(this.prop.v[i]*mult);
            if(this.c[i] !== val){
                this.c[i] = val;
                this._cmdf = !forceRender;
            }
        }
        if(this.o.length){
            len = this.prop.v.length;
            for(i=this.data.p*4;i<len;i+=1){
                mult = i%2 === 0 ? 100 : 1;
                val = i%2 === 0 ?  Math.round(this.prop.v[i]*100):this.prop.v[i];
                if(this.o[i-this.data.p*4] !== val){
                    this.o[i-this.data.p*4] = val;
                    this._omdf = !forceRender;
                }
            }
        }
    }
};
var ImagePreloader = (function(){

    function imageLoaded(){
        this.loadedAssets += 1;
        if(this.loadedAssets === this.totalImages){
            if(this.imagesLoadedCb) {
                this.imagesLoadedCb(null);
            }
        }
    }

    function getAssetsPath(assetData){
        var path = '';
        if(this.assetsPath){
            var imagePath = assetData.p;
            if(imagePath.indexOf('images/') !== -1){
                imagePath = imagePath.split('/')[1];
            }
            path = this.assetsPath + imagePath;
        } else {
            path = this.path;
            path += assetData.u ? assetData.u : '';
            path += assetData.p;
        }
        return path;
    }

    function loadImage(path){
        var img = createTag('img');
        img.addEventListener('load', imageLoaded.bind(this), false);
        img.addEventListener('error', imageLoaded.bind(this), false);
        img.src = path;
    }
    function loadAssets(assets, cb){
        this.imagesLoadedCb = cb;
        this.totalAssets = assets.length;
        var i;
        for(i=0;i<this.totalAssets;i+=1){
            if(!assets[i].layers){
                loadImage.bind(this)(getAssetsPath.bind(this)(assets[i]));
                this.totalImages += 1;
            }
        }
    }

    function setPath(path){
        this.path = path || '';
    }

    function setAssetsPath(path){
        this.assetsPath = path || '';
    }

    function destroy() {
        this.imagesLoadedCb = null;
    }

    return function ImagePreloader(){
        this.loadAssets = loadAssets;
        this.setAssetsPath = setAssetsPath;
        this.setPath = setPath;
        this.destroy = destroy;
        this.assetsPath = '';
        this.path = '';
        this.totalAssets = 0;
        this.totalImages = 0;
        this.loadedAssets = 0;
        this.imagesLoadedCb = null;
    };
}());
var featureSupport = (function(){
	var ob = {
		maskType: true
	};
	if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
	   ob.maskType = false;
	}
	return ob;
}());
var filtersFactory = (function(){
	var ob = {};
	ob.createFilter = createFilter;
	ob.createAlphaToLuminanceFilter = createAlphaToLuminanceFilter;

	function createFilter(filId){
        	var fil = createNS('filter');
        	fil.setAttribute('id',filId);
                fil.setAttribute('filterUnits','objectBoundingBox');
                fil.setAttribute('x','0%');
                fil.setAttribute('y','0%');
                fil.setAttribute('width','100%');
                fil.setAttribute('height','100%');
                return fil;
	}

	function createAlphaToLuminanceFilter(){
                var feColorMatrix = createNS('feColorMatrix');
                feColorMatrix.setAttribute('type','matrix');
                feColorMatrix.setAttribute('color-interpolation-filters','sRGB');
                feColorMatrix.setAttribute('values','0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1');
                return feColorMatrix;
	}

	return ob;
}());
function TextAnimatorProperty(textData, renderType, elem){
    this._mdf = false;
    this._isFirstFrame = true;
	this._hasMaskedPath = false;
	this._frameId = -1;
	this._dynamicProperties = [];
	this._textData = textData;
	this._renderType = renderType;
	this._elem = elem;
	this._animatorsData = createSizedArray(this._textData.a.length);
	this._pathData = {};
	this._moreOptions = {
		alignment: {}
	};
	this.renderedLetters = [];
    this.lettersChangedFlag = false;

}

TextAnimatorProperty.prototype.searchProperties = function(dynamicProperties){
    var i, len = this._textData.a.length, animatorProps;
    var getProp = PropertyFactory.getProp;
    for(i=0;i<len;i+=1){
        animatorProps = this._textData.a[i];
        this._animatorsData[i] = new TextAnimatorDataProperty(this._elem, animatorProps, this._dynamicProperties);
    }
    if(this._textData.p && 'm' in this._textData.p){
        this._pathData = {
            f: getProp(this._elem,this._textData.p.f,0,0,this._dynamicProperties),
            l: getProp(this._elem,this._textData.p.l,0,0,this._dynamicProperties),
            r: this._textData.p.r,
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
        };
        this._hasMaskedPath = true;
    } else {
        this._hasMaskedPath = false;
    }
    this._moreOptions.alignment = getProp(this._elem,this._textData.m.a,1,0,this._dynamicProperties);
    if(this._dynamicProperties.length) {
    	dynamicProperties.push(this);
    }
};

TextAnimatorProperty.prototype.getMeasures = function(documentData, lettersChangedFlag){
    this.lettersChangedFlag = lettersChangedFlag;
    if(!this._mdf && !this._isFirstFrame && !lettersChangedFlag && (!this._hasMaskedPath || !this._pathData.m._mdf)) {
        return;
    }
    this._isFirstFrame = false;
    var alignment = this._moreOptions.alignment.v;
    var animators = this._animatorsData;
    var textData = this._textData;
    var matrixHelper = this.mHelper;
    var renderType = this._renderType;
    var renderedLettersCount = this.renderedLetters.length;
    var data = this.data;
    var xPos,yPos;
    var i, len;
    var letters = documentData.l, pathInfo, currentLength, currentPoint, segmentLength, flag, pointInd, segmentInd, prevPoint, points, segments, partialLength, totalLength, perc, tanAngle, mask;
    if(this._hasMaskedPath) {
        mask = this._pathData.m;
        if(!this._pathData.n || this._pathData._mdf){
            var paths = mask.v;
            if(this._pathData.r){
                paths = paths.reverse();
            }
            // TODO: release bezier data cached from previous pathInfo: this._pathData.pi
            pathInfo = {
                tLength: 0,
                segments: []
            };
            len = paths._length - 1;
            var pathData;
            totalLength = 0;
            for (i = 0; i < len; i += 1) {
                pathData = {
                    s: paths.v[i],
                    e: paths.v[i + 1],
                    to: [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]],
                    ti: [paths.i[i + 1][0] - paths.v[i + 1][0], paths.i[i + 1][1] - paths.v[i + 1][1]]
                };
                bez.buildBezierData(pathData);
                pathInfo.tLength += pathData.bezierData.segmentLength;
                pathInfo.segments.push(pathData);
                totalLength += pathData.bezierData.segmentLength;
            }
            i = len;
            if (mask.v.c) {
                pathData = {
                    s: paths.v[i],
                    e: paths.v[0],
                    to: [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]],
                    ti: [paths.i[0][0] - paths.v[0][0], paths.i[0][1] - paths.v[0][1]]
                };
                bez.buildBezierData(pathData);
                pathInfo.tLength += pathData.bezierData.segmentLength;
                pathInfo.segments.push(pathData);
                totalLength += pathData.bezierData.segmentLength;
            }
            this._pathData.pi = pathInfo;
        }
        pathInfo = this._pathData.pi;

        currentLength = this._pathData.f.v;
        segmentInd = 0;
        pointInd = 1;
        segmentLength = 0;
        flag = true;
        segments = pathInfo.segments;
        if (currentLength < 0 && mask.v.c) {
            if (pathInfo.tLength < Math.abs(currentLength)) {
                currentLength = -Math.abs(currentLength) % pathInfo.tLength;
            }
            segmentInd = segments.length - 1;
            points = segments[segmentInd].bezierData.points;
            pointInd = points.length - 1;
            while (currentLength < 0) {
                currentLength += points[pointInd].partialLength;
                pointInd -= 1;
                if (pointInd < 0) {
                    segmentInd -= 1;
                    points = segments[segmentInd].bezierData.points;
                    pointInd = points.length - 1;
                }
            }

        }
        points = segments[segmentInd].bezierData.points;
        prevPoint = points[pointInd - 1];
        currentPoint = points[pointInd];
        partialLength = currentPoint.partialLength;
    }


    len = letters.length;
    xPos = 0;
    yPos = 0;
    var yOff = documentData.finalSize * 1.2 * 0.714;
    var firstLine = true;
    var animatorProps, animatorSelector;
    var j, jLen;
    var letterValue;

    jLen = animators.length;
    var lastLetter;

    var mult, ind = -1, offf, xPathPos, yPathPos;
    var initPathPos = currentLength,initSegmentInd = segmentInd, initPointInd = pointInd, currentLine = -1;
    var elemOpacity;
    var sc,sw,fc,k;
    var lineLength = 0;
    var letterSw,letterSc,letterFc,letterM = '',letterP = this.defaultPropsArray,letterO;
    for( i = 0; i < len; i += 1) {
        matrixHelper.reset();
        elemOpacity = 1;
        if(letters[i].n) {
            xPos = 0;
            yPos += documentData.yOffset;
            yPos += firstLine ? 1 : 0;
            currentLength = initPathPos ;
            firstLine = false;
            lineLength = 0;
            if(this._hasMaskedPath) {
                segmentInd = initSegmentInd;
                pointInd = initPointInd;
                points = segments[segmentInd].bezierData.points;
                prevPoint = points[pointInd - 1];
                currentPoint = points[pointInd];
                partialLength = currentPoint.partialLength;
                segmentLength = 0;
            }
            letterO = letterSw = letterFc = letterM = '';
            letterP = this.defaultPropsArray;
        }else{
            if(this._hasMaskedPath) {
                if(currentLine !== letters[i].line){
                    switch(documentData.j){
                        case 1:
                            currentLength += totalLength - documentData.lineWidths[letters[i].line];
                            break;
                        case 2:
                            currentLength += (totalLength - documentData.lineWidths[letters[i].line])/2;
                            break;
                    }
                    currentLine = letters[i].line;
                }
                if (ind !== letters[i].ind) {
                    if (letters[ind]) {
                        currentLength += letters[ind].extra;
                    }
                    currentLength += letters[i].an / 2;
                    ind = letters[i].ind;
                }
                currentLength += alignment[0] * letters[i].an / 200;
                var animatorOffset = 0;
                for (j = 0; j < jLen; j += 1) {
                    animatorProps = animators[j].a;
                    if (animatorProps.p.propType) {
                        animatorSelector = animators[j].s;
                        mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                        if(mult.length){
                            animatorOffset += animatorProps.p.v[0] * mult[0];
                        } else{
                            animatorOffset += animatorProps.p.v[0] * mult;
                        }

                    }
                    if (animatorProps.a.propType) {
                        animatorSelector = animators[j].s;
                        mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                        if(mult.length){
                            animatorOffset += animatorProps.a.v[0] * mult[0];
                        } else{
                            animatorOffset += animatorProps.a.v[0] * mult;
                        }

                    }
                }
                flag = true;
                while (flag) {
                    if (segmentLength + partialLength >= currentLength + animatorOffset || !points) {
                        perc = (currentLength + animatorOffset - segmentLength) / currentPoint.partialLength;
                        xPathPos = prevPoint.point[0] + (currentPoint.point[0] - prevPoint.point[0]) * perc;
                        yPathPos = prevPoint.point[1] + (currentPoint.point[1] - prevPoint.point[1]) * perc;
                        matrixHelper.translate(-alignment[0]*letters[i].an/200, -(alignment[1] * yOff / 100));
                        flag = false;
                    } else if (points) {
                        segmentLength += currentPoint.partialLength;
                        pointInd += 1;
                        if (pointInd >= points.length) {
                            pointInd = 0;
                            segmentInd += 1;
                            if (!segments[segmentInd]) {
                                if (mask.v.c) {
                                    pointInd = 0;
                                    segmentInd = 0;
                                    points = segments[segmentInd].bezierData.points;
                                } else {
                                    segmentLength -= currentPoint.partialLength;
                                    points = null;
                                }
                            } else {
                                points = segments[segmentInd].bezierData.points;
                            }
                        }
                        if (points) {
                            prevPoint = currentPoint;
                            currentPoint = points[pointInd];
                            partialLength = currentPoint.partialLength;
                        }
                    }
                }
                offf = letters[i].an / 2 - letters[i].add;
                matrixHelper.translate(-offf, 0, 0);
            } else {
                offf = letters[i].an/2 - letters[i].add;
                matrixHelper.translate(-offf,0,0);

                // Grouping alignment
                matrixHelper.translate(-alignment[0]*letters[i].an/200, -alignment[1]*yOff/100, 0);
            }

            lineLength += letters[i].l/2;
            for(j=0;j<jLen;j+=1){
                animatorProps = animators[j].a;
                if (animatorProps.t.propType) {
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                    if(this._hasMaskedPath) {
                        if(mult.length) {
                            currentLength += animatorProps.t*mult[0];
                        } else {
                            currentLength += animatorProps.t*mult;
                        }
                    }else{
                        if(mult.length) {
                            xPos += animatorProps.t.v*mult[0];
                        } else {
                            xPos += animatorProps.t.v*mult;
                        }
                    }
                }
            }
            lineLength += letters[i].l/2;
            if(documentData.strokeWidthAnim) {
                sw = documentData.sw || 0;
            }
            if(documentData.strokeColorAnim) {
                if(documentData.sc){
                    sc = [documentData.sc[0], documentData.sc[1], documentData.sc[2]];
                }else{
                    sc = [0,0,0];
                }
            }
            if(documentData.fillColorAnim && documentData.fc) {
                fc = [documentData.fc[0], documentData.fc[1], documentData.fc[2]];
            }
            for(j=0;j<jLen;j+=1){
                animatorProps = animators[j].a;
                if (animatorProps.a.propType) {
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);

                    if(mult.length){
                        matrixHelper.translate(-animatorProps.a.v[0]*mult[0], -animatorProps.a.v[1]*mult[1], animatorProps.a.v[2]*mult[2]);
                    } else {
                        matrixHelper.translate(-animatorProps.a.v[0]*mult, -animatorProps.a.v[1]*mult, animatorProps.a.v[2]*mult);
                    }
                }
            }
            for(j=0;j<jLen;j+=1){
                animatorProps = animators[j].a;
                if (animatorProps.s.propType) {
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                    if(mult.length){
                        matrixHelper.scale(1+((animatorProps.s.v[0]-1)*mult[0]),1+((animatorProps.s.v[1]-1)*mult[1]),1);
                    } else {
                        matrixHelper.scale(1+((animatorProps.s.v[0]-1)*mult),1+((animatorProps.s.v[1]-1)*mult),1);
                    }
                }
            }
            for(j=0;j<jLen;j+=1) {
                animatorProps = animators[j].a;
                animatorSelector = animators[j].s;
                mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                if (animatorProps.sk.propType) {
                    if(mult.length) {
                        matrixHelper.skewFromAxis(-animatorProps.sk.v * mult[0], animatorProps.sa.v * mult[1]);
                    } else {
                        matrixHelper.skewFromAxis(-animatorProps.sk.v * mult, animatorProps.sa.v * mult);
                    }
                }
                if (animatorProps.r.propType) {
                    if(mult.length) {
                        matrixHelper.rotateZ(-animatorProps.r.v * mult[2]);
                    } else {
                        matrixHelper.rotateZ(-animatorProps.r.v * mult);
                    }
                }
                if (animatorProps.ry.propType) {

                    if(mult.length) {
                        matrixHelper.rotateY(animatorProps.ry.v*mult[1]);
                    }else{
                        matrixHelper.rotateY(animatorProps.ry.v*mult);
                    }
                }
                if (animatorProps.rx.propType) {
                    if(mult.length) {
                        matrixHelper.rotateX(animatorProps.rx.v*mult[0]);
                    } else {
                        matrixHelper.rotateX(animatorProps.rx.v*mult);
                    }
                }
                if (animatorProps.o.propType) {
                    if(mult.length) {
                        elemOpacity += ((animatorProps.o.v)*mult[0] - elemOpacity)*mult[0];
                    } else {
                        elemOpacity += ((animatorProps.o.v)*mult - elemOpacity)*mult;
                    }
                }
                if (documentData.strokeWidthAnim && animatorProps.sw.propType) {
                    if(mult.length) {
                        sw += animatorProps.sw.v*mult[0];
                    } else {
                        sw += animatorProps.sw.v*mult;
                    }
                }
                if (documentData.strokeColorAnim && animatorProps.sc.propType) {
                    for(k=0;k<3;k+=1){
                        if(mult.length) {
                            sc[k] = sc[k] + (animatorProps.sc.v[k] - sc[k])*mult[0];
                        } else {
                            sc[k] = sc[k] + (animatorProps.sc.v[k] - sc[k])*mult;
                        }
                    }
                }
                if (documentData.fillColorAnim && documentData.fc) {
                    if(animatorProps.fc.propType){
                        for(k=0;k<3;k+=1){
                            if(mult.length) {
                                fc[k] = fc[k] + (animatorProps.fc.v[k] - fc[k])*mult[0];
                            } else {
                                fc[k] = fc[k] + (animatorProps.fc.v[k] - fc[k])*mult;
                            }
                        }
                    }
                    if(animatorProps.fh.propType){
                        if(mult.length) {
                            fc = addHueToRGB(fc,animatorProps.fh.v*mult[0]);
                        } else {
                            fc = addHueToRGB(fc,animatorProps.fh.v*mult);
                        }
                    }
                    if(animatorProps.fs.propType){
                        if(mult.length) {
                            fc = addSaturationToRGB(fc,animatorProps.fs.v*mult[0]);
                        } else {
                            fc = addSaturationToRGB(fc,animatorProps.fs.v*mult);
                        }
                    }
                    if(animatorProps.fb.propType){
                        if(mult.length) {
                            fc = addBrightnessToRGB(fc,animatorProps.fb.v*mult[0]);
                        } else {
                            fc = addBrightnessToRGB(fc,animatorProps.fb.v*mult);
                        }
                    }
                }
            }

            for(j=0;j<jLen;j+=1){
                animatorProps = animators[j].a;

                if (animatorProps.p.propType) {
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                    if(this._hasMaskedPath) {
                        if(mult.length) {
                            matrixHelper.translate(0, animatorProps.p.v[1] * mult[0], -animatorProps.p.v[2] * mult[1]);
                        } else {
                            matrixHelper.translate(0, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
                        }
                    }else{
                        if(mult.length) {
                            matrixHelper.translate(animatorProps.p.v[0] * mult[0], animatorProps.p.v[1] * mult[1], -animatorProps.p.v[2] * mult[2]);
                        } else {
                            matrixHelper.translate(animatorProps.p.v[0] * mult, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
                        }
                    }
                }
            }
            if(documentData.strokeWidthAnim){
                letterSw = sw < 0 ? 0 : sw;
            }
            if(documentData.strokeColorAnim){
                letterSc = 'rgb('+Math.round(sc[0]*255)+','+Math.round(sc[1]*255)+','+Math.round(sc[2]*255)+')';
            }
            if(documentData.fillColorAnim && documentData.fc){
                letterFc = 'rgb('+Math.round(fc[0]*255)+','+Math.round(fc[1]*255)+','+Math.round(fc[2]*255)+')';
            }

            if(this._hasMaskedPath) {
                matrixHelper.translate(0,-documentData.ls);

                matrixHelper.translate(0, alignment[1]*yOff/100 + yPos,0);
                if (textData.p.p) {
                    tanAngle = (currentPoint.point[1] - prevPoint.point[1]) / (currentPoint.point[0] - prevPoint.point[0]);
                    var rot = Math.atan(tanAngle) * 180 / Math.PI;
                    if (currentPoint.point[0] < prevPoint.point[0]) {
                        rot += 180;
                    }
                    matrixHelper.rotate(-rot * Math.PI / 180);
                }
                matrixHelper.translate(xPathPos, yPathPos, 0);
                currentLength -= alignment[0]*letters[i].an/200;
                if(letters[i+1] && ind !== letters[i+1].ind){
                    currentLength += letters[i].an / 2;
                    currentLength += documentData.tr/1000*documentData.finalSize;
                }
            }else{

                matrixHelper.translate(xPos,yPos,0);

                if(documentData.ps){
                    //matrixHelper.translate(documentData.ps[0],documentData.ps[1],0);
                    matrixHelper.translate(documentData.ps[0],documentData.ps[1] + documentData.ascent,0);
                }
                switch(documentData.j){
                    case 1:
                        matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]),0,0);
                        break;
                    case 2:
                        matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line])/2,0,0);
                        break;
                }
                matrixHelper.translate(0,-documentData.ls);
                matrixHelper.translate(offf,0,0);
                matrixHelper.translate(alignment[0]*letters[i].an/200,alignment[1]*yOff/100,0);
                xPos += letters[i].l + documentData.tr/1000*documentData.finalSize;
            }
            if(renderType === 'html'){
                letterM = matrixHelper.toCSS();
            }else if(renderType === 'svg'){
                letterM = matrixHelper.to2dCSS();
            }else{
                letterP = [matrixHelper.props[0],matrixHelper.props[1],matrixHelper.props[2],matrixHelper.props[3],matrixHelper.props[4],matrixHelper.props[5],matrixHelper.props[6],matrixHelper.props[7],matrixHelper.props[8],matrixHelper.props[9],matrixHelper.props[10],matrixHelper.props[11],matrixHelper.props[12],matrixHelper.props[13],matrixHelper.props[14],matrixHelper.props[15]];
            }
            letterO = elemOpacity;
        }

        if(renderedLettersCount <= i) {
            letterValue = new LetterProps(letterO,letterSw,letterSc,letterFc,letterM,letterP);
            this.renderedLetters.push(letterValue);
            renderedLettersCount += 1;
            this.lettersChangedFlag = true;
        } else {
            letterValue = this.renderedLetters[i];
            this.lettersChangedFlag = letterValue.update(letterO, letterSw, letterSc, letterFc, letterM, letterP) || this.lettersChangedFlag;
        }
    }
};

TextAnimatorProperty.prototype.getValue = function(){
	if(this._elem.globalData.frameId === this._frameId){
        return;
    }
    this._frameId = this._elem.globalData.frameId;
	var i, len = this._dynamicProperties.length;
    this._mdf = false;
	for(i = 0; i < len; i += 1) {
		this._dynamicProperties[i].getValue();
        this._mdf = this._dynamicProperties[i]._mdf || this._mdf;
	}
};

TextAnimatorProperty.prototype.mHelper = new Matrix();
TextAnimatorProperty.prototype.defaultPropsArray = [];
function TextAnimatorDataProperty(elem, animatorProps, dynamicProperties) {
	var defaultData = {propType:false};
	var getProp = PropertyFactory.getProp;
	var textAnimator_animatables = animatorProps.a;
	this.a = {
		r: textAnimator_animatables.r ? getProp(elem, textAnimator_animatables.r, 0, degToRads, dynamicProperties) : defaultData,
		rx: textAnimator_animatables.rx ? getProp(elem, textAnimator_animatables.rx, 0, degToRads, dynamicProperties) : defaultData,
		ry: textAnimator_animatables.ry ? getProp(elem, textAnimator_animatables.ry, 0, degToRads, dynamicProperties) : defaultData,
		sk: textAnimator_animatables.sk ? getProp(elem, textAnimator_animatables.sk, 0, degToRads, dynamicProperties) : defaultData,
		sa: textAnimator_animatables.sa ? getProp(elem, textAnimator_animatables.sa, 0, degToRads, dynamicProperties) : defaultData,
		s: textAnimator_animatables.s ? getProp(elem, textAnimator_animatables.s, 1, 0.01, dynamicProperties) : defaultData,
		a: textAnimator_animatables.a ? getProp(elem, textAnimator_animatables.a, 1, 0, dynamicProperties) : defaultData,
		o: textAnimator_animatables.o ? getProp(elem, textAnimator_animatables.o, 0, 0.01, dynamicProperties) : defaultData,
		p: textAnimator_animatables.p ? getProp(elem,textAnimator_animatables.p, 1, 0, dynamicProperties) : defaultData,
		sw: textAnimator_animatables.sw ? getProp(elem, textAnimator_animatables.sw, 0, 0, dynamicProperties) : defaultData,
		sc: textAnimator_animatables.sc ? getProp(elem, textAnimator_animatables.sc, 1, 0, dynamicProperties) : defaultData,
		fc: textAnimator_animatables.fc ? getProp(elem, textAnimator_animatables.fc, 1, 0, dynamicProperties) : defaultData,
		fh: textAnimator_animatables.fh ? getProp(elem, textAnimator_animatables.fh, 0, 0, dynamicProperties) : defaultData,
		fs: textAnimator_animatables.fs ? getProp(elem, textAnimator_animatables.fs, 0, 0.01, dynamicProperties) : defaultData,
		fb: textAnimator_animatables.fb ? getProp(elem, textAnimator_animatables.fb, 0, 0.01, dynamicProperties) : defaultData,
		t: textAnimator_animatables.t ? getProp(elem, textAnimator_animatables.t, 0, 0, dynamicProperties) : defaultData
	};

	this.s = TextSelectorProp.getTextSelectorProp(elem,animatorProps.s, dynamicProperties);
    this.s.t = animatorProps.s.t;
}
function LetterProps(o, sw, sc, fc, m, p){
    this.o = o;
    this.sw = sw;
    this.sc = sc;
    this.fc = fc;
    this.m = m;
    this.p = p;
    this._mdf = {
    	o: true,
    	sw: !!sw,
    	sc: !!sc,
    	fc: !!fc,
    	m: true,
    	p: true
    };
}

LetterProps.prototype.update = function(o, sw, sc, fc, m, p) {
	this._mdf.o = false;
	this._mdf.sw = false;
	this._mdf.sc = false;
	this._mdf.fc = false;
	this._mdf.m = false;
	this._mdf.p = false;
	var updated = false;

	if(this.o !== o) {
		this.o = o;
		this._mdf.o = true;
		updated = true;
	}
	if(this.sw !== sw) {
		this.sw = sw;
		this._mdf.sw = true;
		updated = true;
	}
	if(this.sc !== sc) {
		this.sc = sc;
		this._mdf.sc = true;
		updated = true;
	}
	if(this.fc !== fc) {
		this.fc = fc;
		this._mdf.fc = true;
		updated = true;
	}
	if(this.m !== m) {
		this.m = m;
		this._mdf.m = true;
		updated = true;
	}
	if(p.length && (this.p[0] !== p[0] || this.p[1] !== p[1] || this.p[4] !== p[4] || this.p[5] !== p[5] || this.p[12] !== p[12] || this.p[13] !== p[13])) {
		this.p = p;
		this._mdf.p = true;
		updated = true;
	}
	return updated;
};
function TextProperty(elem, data, dynamicProperties){
	this._frameId = initialDefaultFrame;
	this.pv = '';
	this.v = '';
	this.kf = false;
	this._isFirstFrame = true;
	this._mdf = true;
	this.data = data;
	this.elem = elem;
	this.keysIndex = -1;
    this.canResize = false;
    this.minimumFontSize = 1;
	this.currentData = {
		ascent: 0,
        boxWidth: [0,0],
        f: '',
        fStyle: '',
        fWeight: '',
        fc: '',
        j: '',
        justifyOffset: '',
        l: [],
        lh: 0,
        lineWidths: [],
        ls: '',
        of: '',
        s: '',
        sc: '',
        sw: 0,
        t: 0,
        tr: 0,
        sz:0,
        ps:[0,0],
        fillColorAnim: false,
        strokeColorAnim: false,
        strokeWidthAnim: false,
        yOffset: 0,
        __complete: false,
        finalSize:0,
        finalText:'',
        finalLineHeight: 0

	};
	if(this.searchProperty()) {
		dynamicProperties.push(this);
	} else {
		this.getValue(true);
	}
}

TextProperty.prototype.setCurrentData = function(data){
		var currentData = this.currentData;
        currentData.ascent = data.ascent;
        currentData.boxWidth = data.boxWidth ? data.boxWidth : currentData.boxWidth;
        currentData.f = data.f;
        currentData.fStyle = data.fStyle;
        currentData.fWeight = data.fWeight;
        currentData.fc = data.fc;
        currentData.j = data.j;
        currentData.justifyOffset = data.justifyOffset;
        currentData.l = data.l;
        currentData.lh = data.lh;
        currentData.lineWidths = data.lineWidths;
        currentData.ls = data.ls;
        currentData.of = data.of;
        currentData.s = data.s;
        currentData.sc = data.sc;
        currentData.sw = data.sw;
        currentData.sz = data.sz;
        currentData.ps = data.ps;
        currentData.t = data.t;
        currentData.tr = data.tr;
        currentData.fillColorAnim = data.fillColorAnim || currentData.fillColorAnim;
        currentData.strokeColorAnim = data.strokeColorAnim || currentData.strokeColorAnim;
        currentData.strokeWidthAnim = data.strokeWidthAnim || currentData.strokeWidthAnim;
        currentData.yOffset = data.yOffset;
        currentData.finalSize = data.finalSize;
        currentData.finalLineHeight = data.finalLineHeight;
        currentData.finalText = data.finalText;
        currentData.__complete = false;
};

TextProperty.prototype.searchProperty = function() {
	this.kf = this.data.d.k.length > 1;
	return this.kf;
};

TextProperty.prototype.getValue = function(_forceRender) {
	this._mdf = false;
	var frameId = this.elem.globalData.frameId;
	if((frameId === this._frameId || !this.kf) && !this._isFirstFrame && !_forceRender) {
		return;
	}
    var textKeys = this.data.d.k, textDocumentData;
    var frameNum = this.elem.comp.renderedFrame;
    var i = 0, len = textKeys.length;
    while(i <= len - 1) {
        textDocumentData = textKeys[i].s;
        if(i === len - 1 || textKeys[i+1].t > frameNum){
            break;
        }
        i += 1;
    }
    if(this.keysIndex !== i) {
    	if(!textDocumentData.__complete) {
            this.completeTextData(textDocumentData);
        }
        this.setCurrentData(textDocumentData);
        //TODO check this
        this._mdf = !this._isFirstFrame;
        this.pv = this.v = this.currentData.t;
        this.keysIndex = i;
    }
	this._frameId = frameId;
};

TextProperty.prototype.completeTextData = function(documentData) {
    documentData.__complete = true;
    var fontManager = this.elem.globalData.fontManager;
    var data = this.data;
    var letters = [];
    var i, len;
    var newLineFlag, index = 0, val;
    var anchorGrouping = data.m.g;
    var currentSize = 0, currentPos = 0, currentLine = 0, lineWidths = [];
    var lineWidth = 0;
    var maxLineWidth = 0;
    var j, jLen;
    var fontData = fontManager.getFontByName(documentData.f);
    var charData, cLength = 0;
    var styles = fontData.fStyle.split(' ');

    var fWeight = 'normal', fStyle = 'normal';
    len = styles.length;
    var styleName;
    for(i=0;i<len;i+=1){
        styleName = styles[i].toLowerCase();
        switch(styleName) {
            case 'italic':
            fStyle = 'italic';
            break;
            case 'bold':
            fWeight = '700';
            break;
            case 'black':
            fWeight = '900';
            break;
            case 'medium':
            fWeight = '500';
            break;
            case 'regular':
            case 'normal':
            fWeight = '400';
            break;
            case 'light':
            case 'thin':
            fWeight = '200';
            break;
        }
    }
    documentData.fWeight = fWeight;
    documentData.fStyle = fStyle;
    len = documentData.t.length;
    documentData.finalSize = documentData.s;
    documentData.finalText = documentData.t;
    documentData.finalLineHeight = documentData.lh;
    var trackingOffset = documentData.tr/1000*documentData.finalSize;
    if(documentData.sz){
        var flag = true;
        var boxWidth = documentData.sz[0];
        var boxHeight = documentData.sz[1];
        var currentHeight, finalText;
        while(flag) {
            finalText = documentData.t;
            currentHeight = 0;
            lineWidth = 0;
            len = documentData.t.length;
            trackingOffset = documentData.tr/1000*documentData.finalSize;
            var lastSpaceIndex = -1;
            for(i=0;i<len;i+=1){
                newLineFlag = false;
                if(finalText.charAt(i) === ' '){
                    lastSpaceIndex = i;
                }else if(finalText.charCodeAt(i) === 13){
                    lineWidth = 0;
                    newLineFlag = true;
                    currentHeight += documentData.finalLineHeight || documentData.finalSize*1.2;
                }
                if(fontManager.chars){
                    charData = fontManager.getCharData(finalText.charAt(i), fontData.fStyle, fontData.fFamily);
                    cLength = newLineFlag ? 0 : charData.w*documentData.finalSize/100;
                }else{
                    //tCanvasHelper.font = documentData.s + 'px '+ fontData.fFamily;
                    cLength = fontManager.measureText(finalText.charAt(i), documentData.f, documentData.finalSize);
                }
                if(lineWidth + cLength > boxWidth && finalText.charAt(i) !== ' '){
                    if(lastSpaceIndex === -1){
                        len += 1;
                    } else {
                        i = lastSpaceIndex;
                    }
                    currentHeight += documentData.finalLineHeight || documentData.finalSize*1.2;
                    finalText = finalText.substr(0,i) + "\r" + finalText.substr(i === lastSpaceIndex ? i + 1 : i);
                    lastSpaceIndex = -1;
                    lineWidth = 0;
                }else {
                    lineWidth += cLength;
                    lineWidth += trackingOffset;
                }
            }
            currentHeight += fontData.ascent*documentData.finalSize/100;
            if(this.canResize && documentData.finalSize > this.minimumFontSize && boxHeight < currentHeight) {
                documentData.finalSize -= 1;
                documentData.finalLineHeight = documentData.finalSize * documentData.lh / documentData.s;
            } else {
                documentData.finalText = finalText;
                len = documentData.finalText.length;
                flag = false;
            }
        }
        
    }
    lineWidth = - trackingOffset;
    cLength = 0;
    var uncollapsedSpaces = 0;
    var currentChar;
    for (i = 0;i < len ;i += 1) {
        newLineFlag = false;
        currentChar = documentData.finalText.charAt(i);
        if(currentChar === ' '){
            val = '\u00A0';
        }else if(currentChar.charCodeAt(0) === 13){
            uncollapsedSpaces = 0;
            lineWidths.push(lineWidth);
            maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
            lineWidth = - 2 * trackingOffset;
            val = '';
            newLineFlag = true;
            currentLine += 1;
        }else{
            val = documentData.finalText.charAt(i);
        }
        if(fontManager.chars){
            charData = fontManager.getCharData(currentChar, fontData.fStyle, fontManager.getFontByName(documentData.f).fFamily);
            cLength = newLineFlag ? 0 : charData.w*documentData.finalSize/100;
        }else{
            //var charWidth = fontManager.measureText(val, documentData.f, documentData.finalSize);
            //tCanvasHelper.font = documentData.finalSize + 'px '+ fontManager.getFontByName(documentData.f).fFamily;
            cLength = fontManager.measureText(val, documentData.f, documentData.finalSize);
        }

        //
        if(currentChar === ' '){
            uncollapsedSpaces += cLength + trackingOffset;
        } else {
            lineWidth += cLength + trackingOffset + uncollapsedSpaces;
            uncollapsedSpaces = 0;
        }
        letters.push({l:cLength,an:cLength,add:currentSize,n:newLineFlag, anIndexes:[], val: val, line: currentLine});
        if(anchorGrouping == 2){
            currentSize += cLength;
            if(val === '' || val === '\u00A0' || i === len - 1){
                if(val === '' || val === '\u00A0'){
                    currentSize -= cLength;
                }
                while(currentPos<=i){
                    letters[currentPos].an = currentSize;
                    letters[currentPos].ind = index;
                    letters[currentPos].extra = cLength;
                    currentPos += 1;
                }
                index += 1;
                currentSize = 0;
            }
        }else if(anchorGrouping == 3){
            currentSize += cLength;
            if(val === '' || i === len - 1){
                if(val === ''){
                    currentSize -= cLength;
                }
                while(currentPos<=i){
                    letters[currentPos].an = currentSize;
                    letters[currentPos].ind = index;
                    letters[currentPos].extra = cLength;
                    currentPos += 1;
                }
                currentSize = 0;
                index += 1;
            }
        }else{
            letters[index].ind = index;
            letters[index].extra = 0;
            index += 1;
        }
    }
    documentData.l = letters;
    maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
    lineWidths.push(lineWidth);
    if(documentData.sz){
        documentData.boxWidth = documentData.sz[0];
        documentData.justifyOffset = 0;
    }else{
        documentData.boxWidth = maxLineWidth;
        switch(documentData.j){
            case 1:
                documentData.justifyOffset = - documentData.boxWidth;
                break;
            case 2:
                documentData.justifyOffset = - documentData.boxWidth/2;
                break;
            default:
                documentData.justifyOffset = 0;
        }
    }
    documentData.lineWidths = lineWidths;

    var animators = data.a, animatorData, letterData;
    jLen = animators.length;
    var based, ind, indexes = [];
    for(j=0;j<jLen;j+=1){
        animatorData = animators[j];
        if(animatorData.a.sc){
            documentData.strokeColorAnim = true;
        }
        if(animatorData.a.sw){
            documentData.strokeWidthAnim = true;
        }
        if(animatorData.a.fc || animatorData.a.fh || animatorData.a.fs || animatorData.a.fb){
            documentData.fillColorAnim = true;
        }
        ind = 0;
        based = animatorData.s.b;
        for(i=0;i<len;i+=1){
            letterData = letters[i];
            letterData.anIndexes[j] = ind;
            if((based == 1 && letterData.val !== '') || (based == 2 && letterData.val !== '' && letterData.val !== '\u00A0') || (based == 3 && (letterData.n || letterData.val == '\u00A0' || i == len - 1)) || (based == 4 && (letterData.n || i == len - 1))){
                if(animatorData.s.rn === 1){
                    indexes.push(ind);
                }
                ind += 1;
            }
        }
        data.a[j].s.totalChars = ind;
        var currentInd = -1, newInd;
        if(animatorData.s.rn === 1){
            for(i = 0; i < len; i += 1){
                letterData = letters[i];
                if(currentInd != letterData.anIndexes[j]){
                    currentInd = letterData.anIndexes[j];
                    newInd = indexes.splice(Math.floor(Math.random()*indexes.length),1)[0];
                }
                letterData.anIndexes[j] = newInd;
            }
        }
    }
    documentData.yOffset = documentData.finalLineHeight || documentData.finalSize*1.2;
    documentData.ls = documentData.ls || 0;
    documentData.ascent = fontData.ascent*documentData.finalSize/100;
};

TextProperty.prototype.updateDocumentData = function(newData, index) {
	index = index === undefined ? this.keysIndex : index;
    var dData = this.data.d.k[index].s;
    for(var s in newData) {
        dData[s] = newData[s];
    }
    this.recalculate(index);
};

TextProperty.prototype.recalculate = function(index) {
    var dData = this.data.d.k[index].s;
    dData.__complete = false;
    this.keysIndex = -1;
    this.getValue(true);
}

TextProperty.prototype.canResizeFont = function(_canResize) {
    this.canResize = _canResize;
    this.recalculate(this.keysIndex);
};

TextProperty.prototype.setMinimumFontSize = function(_fontValue) {
    this.minimumFontSize = Math.floor(_fontValue) || 1;
    this.recalculate(this.keysIndex);
};
var TextSelectorProp = (function(){
    var max = Math.max;
    var min = Math.min;
    var floor = Math.floor;
    function updateRange(newCharsFlag){
        this._mdf = newCharsFlag || false;
        if(this.dynamicProperties.length){
            var i, len = this.dynamicProperties.length;
            for(i=0;i<len;i+=1){
                this.dynamicProperties[i].getValue();
                if(this.dynamicProperties[i]._mdf){
                    this._mdf = true;
                }
            }
        }
        var totalChars = this.elem.textProperty.currentData ? this.elem.textProperty.currentData.l.length : 0;
        if(newCharsFlag && this.data.r === 2) {
            this.e.v = totalChars;
        }
        var divisor = this.data.r === 2 ? 1 : 100 / totalChars;
        var o = this.o.v/divisor;
        var s = this.s.v/divisor + o;
        var e = (this.e.v/divisor) + o;
        if(s>e){
            var _s = s;
            s = e;
            e = _s;
        }
        this.finalS = s;
        this.finalE = e;
    }

    function getMult(ind){
        //var easer = bez.getEasingCurve(this.ne.v/100,0,1-this.xe.v/100,1);
        var easer = BezierFactory.getBezierEasing(this.ne.v/100,0,1-this.xe.v/100,1).get;
        var mult = 0;
        var s = this.finalS;
        var e = this.finalE;
        var type = this.data.sh;
        if(type == 2){
            if(e === s){
                mult = ind >= e ? 1 : 0;
            }else{
                mult = max(0,min(0.5/(e-s) + (ind-s)/(e-s),1));
            }
            mult = easer(mult);
        }else if(type == 3){
            if(e === s){
                mult = ind >= e ? 0 : 1;
            }else{
                mult = 1 - max(0,min(0.5/(e-s) + (ind-s)/(e-s),1));
            }

            mult = easer(mult);
        }else if(type == 4){
            if(e === s){
                mult = 0;
            }else{
                mult = max(0,min(0.5/(e-s) + (ind-s)/(e-s),1));
                if(mult<0.5){
                    mult *= 2;
                }else{
                    mult = 1 - 2*(mult-0.5);
                }
            }
            mult = easer(mult);
        }else if(type == 5){
            if(e === s){
                mult = 0;
            }else{
                var tot = e - s;
                /*ind += 0.5;
                mult = -4/(tot*tot)*(ind*ind)+(4/tot)*ind;*/
                ind = min(max(0,ind+0.5-s),e-s);
                var x = -tot/2+ind;
                var a = tot/2;
                mult = Math.sqrt(1 - (x*x)/(a*a));
            }
            mult = easer(mult);
        }else if(type == 6){
            if(e === s){
                mult = 0;
            }else{
                ind = min(max(0,ind+0.5-s),e-s);
                mult = (1+(Math.cos((Math.PI+Math.PI*2*(ind)/(e-s)))))/2;
                /*
                 ind = Math.min(Math.max(s,ind),e-1);
                 mult = (1+(Math.cos((Math.PI+Math.PI*2*(ind-s)/(e-1-s)))))/2;
                 mult = Math.max(mult,(1/(e-1-s))/(e-1-s));*/
            }
            mult = easer(mult);
        }else {
            if(ind >= floor(s)){
                if(ind-s < 0){
                    mult = 1 - (s - ind);
                }else{
                    mult = max(0,min(e-ind,1));
                }
            }
            mult = easer(mult);
        }
        return mult*this.a.v;
    }

    function TextSelectorProp(elem,data, arr){
        this._mdf = false;
        this.k = false;
        this.data = data;
        this.dynamicProperties = [];
        this.getValue = updateRange;
        this.getMult = getMult;
        this.elem = elem;
        this.comp = elem.comp;
        this.finalS = 0;
        this.finalE = 0;
        this.s = PropertyFactory.getProp(elem,data.s || {k:0},0,0,this.dynamicProperties);
        if('e' in data){
            this.e = PropertyFactory.getProp(elem,data.e,0,0,this.dynamicProperties);
        }else{
            this.e = {v:100};
        }
        this.o = PropertyFactory.getProp(elem,data.o || {k:0},0,0,this.dynamicProperties);
        this.xe = PropertyFactory.getProp(elem,data.xe || {k:0},0,0,this.dynamicProperties);
        this.ne = PropertyFactory.getProp(elem,data.ne || {k:0},0,0,this.dynamicProperties);
        this.a = PropertyFactory.getProp(elem,data.a,0,0.01,this.dynamicProperties);
        if(this.dynamicProperties.length){
            arr.push(this);
        }else{
            this.getValue();
        }
    }

    function getTextSelectorProp(elem, data,arr) {
        return new TextSelectorProp(elem, data, arr);
    }

    return {
        getTextSelectorProp: getTextSelectorProp
    };
}());

    
var pool_factory = (function() {
	return function(initialLength, _create, _release, _clone) {

		var _length = 0;
		var _maxLength = initialLength;
		var pool = createSizedArray(_maxLength);

		var ob = {
			newElement: newElement,
			release: release
		};

		function newElement(){
			var element;
			if(_length){
				_length -= 1;
				element = pool[_length];
			} else {
				element = _create();
			}
			return element;
		}

		function release(element) {
			if(_length === _maxLength) {
				pool = pooling.double(pool);
				_maxLength = _maxLength*2;
			}
			if (_release) {
				_release(element);
			}
			pool[_length] = element;
			_length += 1;
		}

		function clone() {
			var clonedElement = newElement();
			return _clone(clonedElement);
		}

		return ob;
	};
}());

var pooling = (function(){

	function double(arr){
		return arr.concat(createSizedArray(arr.length));
	}

	return {
		double: double
	};
}());
var point_pool = (function(){

	function create() {
		return createTypedArray('float32', 2);
	}
	return pool_factory(8, create);
}());
var shape_pool = (function(){

	function create() {
		return new ShapePath();
	}

	function release(shapePath) {
		var len = shapePath._length, i;
		for(i = 0; i < len; i += 1) {
			point_pool.release(shapePath.v[i]);
			point_pool.release(shapePath.i[i]);
			point_pool.release(shapePath.o[i]);
			shapePath.v[i] = null;
			shapePath.i[i] = null;
			shapePath.o[i] = null;
		}
		shapePath._length = 0;
		shapePath.c = false;
	}

	function clone(shape) {
		var cloned = factory.newElement();
		var i, len = shape._length === undefined ? shape.v.length : shape._length;
		cloned.setLength(len);
		cloned.c = shape.c;
		var pt;
		
		for(i = 0; i < len; i += 1) {
			cloned.setTripleAt(shape.v[i][0],shape.v[i][1],shape.o[i][0],shape.o[i][1],shape.i[i][0],shape.i[i][1], i);
		}
		return cloned;
	}

	var factory = pool_factory(4, create, release);
	factory.clone = clone;

	return factory;
}());
var shapeCollection_pool = (function(){
	var ob = {
		newShapeCollection: newShapeCollection,
		release: release
	};

	var _length = 0;
	var _maxLength = 4;
	var pool = createSizedArray(_maxLength);

	function newShapeCollection(){
		var shapeCollection;
		if(_length){
			_length -= 1;
			shapeCollection = pool[_length];
		} else {
			shapeCollection = new ShapeCollection();
		}
		return shapeCollection;
	}

	function release(shapeCollection) {
		var i, len = shapeCollection._length;
		for(i = 0; i < len; i += 1) {
			shape_pool.release(shapeCollection.shapes[i]);
		}
		shapeCollection._length = 0;

		if(_length === _maxLength) {
			pool = pooling.double(pool);
			_maxLength = _maxLength*2;
		}
		pool[_length] = shapeCollection;
		_length += 1;
	}

	return ob;
}());
var segments_length_pool = (function(){

	function create() {
		return {
			lengths: [],
			totalLength: 0
		};
	}

	function release(element) {
		var i, len = element.lengths.length;
		for(i=0;i<len;i+=1) {
			bezier_length_pool.release(element.lengths[i]);
		}
		element.lengths.length = 0;
	}

	return pool_factory(8, create, release);
}());
var bezier_length_pool = (function(){

	function create() {
		return {
            addedLength: 0,
            percents: createTypedArray('float32', defaultCurveSegments),
            lengths: createTypedArray('float32', defaultCurveSegments),
        };
	}
	return pool_factory(8, create);
}());
function BaseRenderer(){}
BaseRenderer.prototype.checkLayers = function(num){
    var i, len = this.layers.length, data;
    this.completeLayers = true;
    for (i = len - 1; i >= 0; i--) {
        if (!this.elements[i]) {
            data = this.layers[i];
            if(data.ip - data.st <= (num - this.layers[i].st) && data.op - data.st > (num - this.layers[i].st))
            {
                this.buildItem(i);
            }
        }
        this.completeLayers = this.elements[i] ? this.completeLayers:false;
    }
    this.checkPendingElements();
};

BaseRenderer.prototype.createItem = function(layer){
    switch(layer.ty){
        case 2:
            return this.createImage(layer);
        case 0:
            return this.createComp(layer);
        case 1:
            return this.createSolid(layer);
        case 3:
            return this.createNull(layer);
        case 4:
            return this.createShape(layer);
        case 5:
            return this.createText(layer);
        case 13:
            return this.createCamera(layer);
    }
    return this.createNull(layer);
};

BaseRenderer.prototype.createCamera = function(){
    throw new Error('You\'re using a 3d camera. Try the html renderer.');
};

BaseRenderer.prototype.buildAllItems = function(){
    var i, len = this.layers.length;
    for(i=0;i<len;i+=1){
        this.buildItem(i);
    }
    this.checkPendingElements();
};

BaseRenderer.prototype.includeLayers = function(newLayers){
    this.completeLayers = false;
    var i, len = newLayers.length;
    var j, jLen = this.layers.length;
    for(i=0;i<len;i+=1){
        j = 0;
        while(j<jLen){
            if(this.layers[j].id == newLayers[i].id){
                this.layers[j] = newLayers[i];
                break;
            }
            j += 1;
        }
    }
};

BaseRenderer.prototype.setProjectInterface = function(pInterface){
    this.globalData.projectInterface = pInterface;
};

BaseRenderer.prototype.initItems = function(){
    if(!this.globalData.progressiveLoad){
        this.buildAllItems();
    }
};
BaseRenderer.prototype.buildElementParenting = function(element, parentName, hierarchy) {
    var elements = this.elements;
    var layers = this.layers;
    var i=0, len = layers.length;
    while (i < len) {
        if (layers[i].ind == parentName) {
            if (!elements[i] || elements[i] === true) {
                this.buildItem(i);
                this.addPendingElement(element);
            } else {
                hierarchy.push(elements[i]);
                elements[i].setAsParent();
                if(layers[i].parent !== undefined) {
                    this.buildElementParenting(element, layers[i].parent, hierarchy);
                } else {
                    element.setHierarchy(hierarchy);
                }
            }
        }
        i += 1;
    }
};

BaseRenderer.prototype.addPendingElement = function(element){
    this.pendingElements.push(element);
};

BaseRenderer.prototype.searchExtraCompositions = function(assets){
    var i, len = assets.length;
    for(i=0;i<len;i+=1){
        if(assets[i].xt){
            var comp = this.createComp(assets[i]);
            comp.initExpressions();
            this.globalData.projectInterface.registerComposition(comp);
        }
    }
};

function SVGRenderer(animationItem, config){
    this.animationItem = animationItem;
    this.layers = null;
    this.renderedFrame = -1;
    this.svgElement = createNS('svg');
    var maskElement = createNS('g');
    this.svgElement.appendChild(maskElement);
    this.layerElement = maskElement;
    var defs = createNS( 'defs');
    this.svgElement.appendChild(defs);
    this.renderConfig = {
        preserveAspectRatio: (config && config.preserveAspectRatio) || 'xMidYMid meet',
        progressiveLoad: (config && config.progressiveLoad) || false,
        hideOnTransparent: (config && config.hideOnTransparent === false) ? false : true,
        viewBoxOnly: (config && config.viewBoxOnly) || false,
        viewBoxSize: (config && config.viewBoxSize) || false,
        className: (config && config.className) || ''
    };
    this.globalData = {
        _mdf: false,
        frameNum: -1,
        defs: defs,
        frameId: 0,
        compSize: {w:0,h:0},
        renderConfig: this.renderConfig,
        fontManager: new FontManager()
    };
    this.elements = [];
    this.pendingElements = [];
    this.destroyed = false;

}

extendPrototype([BaseRenderer],SVGRenderer);

SVGRenderer.prototype.createNull = function (data) {
    return new NullElement(data,this.globalData,this);
};

SVGRenderer.prototype.createShape = function (data) {
    return new SVGShapeElement(data,this.globalData,this);
};

SVGRenderer.prototype.createText = function (data) {
    return new SVGTextElement(data,this.globalData,this);

};

SVGRenderer.prototype.createImage = function (data) {
    return new IImageElement(data,this.globalData,this);
};

SVGRenderer.prototype.createComp = function (data) {
    return new SVGCompElement(data,this.globalData,this);

};

SVGRenderer.prototype.createSolid = function (data) {
    return new ISolidElement(data,this.globalData,this);
};

SVGRenderer.prototype.configAnimation = function(animData){
    this.svgElement.setAttribute('xmlns','http://www.w3.org/2000/svg');
    if(this.renderConfig.viewBoxSize) {
        this.svgElement.setAttribute('viewBox',this.renderConfig.viewBoxSize);
    } else {
        this.svgElement.setAttribute('viewBox','0 0 '+animData.w+' '+animData.h);
    }

    if(!this.renderConfig.viewBoxOnly) {
        this.svgElement.setAttribute('width',animData.w);
        this.svgElement.setAttribute('height',animData.h);
        this.svgElement.style.width = '100%';
        this.svgElement.style.height = '100%';
    }
    if(this.renderConfig.className) {
        this.svgElement.setAttribute('class', this.renderConfig.className);
    }
    this.svgElement.setAttribute('preserveAspectRatio',this.renderConfig.preserveAspectRatio);
    //this.layerElement.style.transform = 'translate3d(0,0,0)';
    //this.layerElement.style.transformOrigin = this.layerElement.style.mozTransformOrigin = this.layerElement.style.webkitTransformOrigin = this.layerElement.style['-webkit-transform'] = "0px 0px 0px";
    this.animationItem.wrapper.appendChild(this.svgElement);
    //Mask animation
    var defs = this.globalData.defs;

    this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
    this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
    this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
    this.globalData.nm = animData.nm;
    this.globalData.compSize.w = animData.w;
    this.globalData.compSize.h = animData.h;
    this.globalData.frameRate = animData.fr;
    this.data = animData;

    var maskElement = createNS( 'clipPath');
    var rect = createNS('rect');
    rect.setAttribute('width',animData.w);
    rect.setAttribute('height',animData.h);
    rect.setAttribute('x',0);
    rect.setAttribute('y',0);
    var maskId = 'animationMask_'+randomString(10);
    maskElement.setAttribute('id', maskId);
    maskElement.appendChild(rect);
    this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#"+maskId+")");

    defs.appendChild(maskElement);
    this.layers = animData.layers;
    this.globalData.fontManager.addChars(animData.chars);
    this.globalData.fontManager.addFonts(animData.fonts,defs);
    this.elements = createSizedArray(animData.layers.length);
};


SVGRenderer.prototype.destroy = function () {
    this.animationItem.wrapper.innerHTML = '';
    this.layerElement = null;
    this.globalData.defs = null;
    var i, len = this.layers ? this.layers.length : 0;
    for (i = 0; i < len; i++) {
        if(this.elements[i]){
            this.elements[i].destroy();
        }
    }
    this.elements.length = 0;
    this.destroyed = true;
    this.animationItem = null;
};

SVGRenderer.prototype.updateContainerSize = function () {
};

SVGRenderer.prototype.buildItem  = function(pos){
    var elements = this.elements;
    if(elements[pos] || this.layers[pos].ty == 99){
        return;
    }
    elements[pos] = true;
    var element = this.createItem(this.layers[pos]);

    elements[pos] = element;
    if(expressionsPlugin){
        if(this.layers[pos].ty === 0){
            this.globalData.projectInterface.registerComposition(element);
        }
        element.initExpressions();
    }
    this.appendElementInPos(element,pos);
    if(this.layers[pos].tt){
        if(!this.elements[pos - 1] || this.elements[pos - 1] === true){
            this.buildItem(pos - 1);
            this.addPendingElement(element);
        } else {
            element.setMatte(elements[pos - 1].layerId);
        }
    }
};

SVGRenderer.prototype.checkPendingElements  = function(){
    while(this.pendingElements.length){
        var element = this.pendingElements.pop();
        element.checkParenting();
        if(element.data.tt){
            var i = 0, len = this.elements.length;
            while(i<len){
                if(this.elements[i] === element){
                    element.setMatte(this.elements[i - 1].layerId);
                    break;
                }
                i += 1;
            }
        }
    }
};

SVGRenderer.prototype.renderFrame = function(num){
    if(this.renderedFrame === num || this.destroyed){
        return;
    }
    if(num === null){
        num = this.renderedFrame;
    }else{
        this.renderedFrame = num;
    }
    //clearPoints();
    // console.log('-------');
    // console.log('FRAME ',num);
    this.globalData.frameNum = num;
    this.globalData.frameId += 1;
    this.globalData.projectInterface.currentFrame = num;
    this.globalData._mdf = false;
    var i, len = this.layers.length;
    if(!this.completeLayers){
        this.checkLayers(num);
    }
    for (i = len - 1; i >= 0; i--) {
        if(this.completeLayers || this.elements[i]){
            this.elements[i].prepareFrame(num - this.layers[i].st);
        }
    }
    if(this.globalData._mdf) {
        for (i = 0; i < len; i += 1) {
            if(this.completeLayers || this.elements[i]){
                this.elements[i].renderFrame();
            }
        }
    }
};

SVGRenderer.prototype.appendElementInPos = function(element, pos){
    var newElement = element.getBaseElement();
    if(!newElement){
        return;
    }
    var i = 0;
    var nextElement;
    while(i<pos){
        if(this.elements[i] && this.elements[i]!== true && this.elements[i].getBaseElement()){
            nextElement = this.elements[i].getBaseElement();
        }
        i += 1;
    }
    if(nextElement){
        this.layerElement.insertBefore(newElement, nextElement);
    } else {
        this.layerElement.appendChild(newElement);
    }
};

SVGRenderer.prototype.hide = function(){
    this.layerElement.style.display = 'none';
};

SVGRenderer.prototype.show = function(){
    this.layerElement.style.display = 'block';
};

function MaskElement(data,element,globalData, dynamicProperties) {
    this.data = data;
    this.element = element;
    this.globalData = globalData;
    this.storedData = [];
    this.masksProperties = this.data.masksProperties || [];
    this.maskElement = null;
    this._isFirstFrame = true;
    var defs = this.globalData.defs;
    var i, len = this.masksProperties ? this.masksProperties.length : 0;
    this.viewData = createSizedArray(len);
    this.solidPath = '';


    var path, properties = this.masksProperties;
    var count = 0;
    var currentMasks = [];
    var j, jLen;
    var layerId = randomString(10);
    var rect, expansor, feMorph,x;
    var maskType = 'clipPath', maskRef = 'clip-path';
    for (i = 0; i < len; i++) {

        if((properties[i].mode !== 'a' && properties[i].mode !== 'n')|| properties[i].inv || properties[i].o.k !== 100){
            maskType = 'mask';
            maskRef = 'mask';
        }

        if((properties[i].mode == 's' || properties[i].mode == 'i') && count === 0){
            rect = createNS( 'rect');
            rect.setAttribute('fill', '#ffffff');
            rect.setAttribute('width', this.element.comp.data.w);
            rect.setAttribute('height', this.element.comp.data.h);
            currentMasks.push(rect);
        } else {
            rect = null;
        }

        path = createNS( 'path');
        if(properties[i].mode == 'n') {
            // TODO move this to a factory or to a constructor
            this.viewData[i] = {
                op: PropertyFactory.getProp(this.element,properties[i].o,0,0.01,dynamicProperties),
                prop: ShapePropertyFactory.getShapeProp(this.element,properties[i],3,dynamicProperties,null),
                elem: path
            };
            defs.appendChild(path);
            continue;
        }
        count += 1;

        path.setAttribute('fill', properties[i].mode === 's' ? '#000000':'#ffffff');
        path.setAttribute('clip-rule','nonzero');
        var filterID;

        if (properties[i].x.k !== 0) {
            maskType = 'mask';
            maskRef = 'mask';
            x = PropertyFactory.getProp(this.element,properties[i].x,0,null,dynamicProperties);
            filterID = 'fi_'+randomString(10);
            expansor = createNS('filter');
            expansor.setAttribute('id',filterID);
            feMorph = createNS('feMorphology');
            feMorph.setAttribute('operator','dilate');
            feMorph.setAttribute('in','SourceGraphic');
            feMorph.setAttribute('radius','0');
            expansor.appendChild(feMorph);
            defs.appendChild(expansor);
            path.setAttribute('stroke', properties[i].mode === 's' ? '#000000':'#ffffff');
        } else {
            feMorph = null;
            x = null;
        }

        // TODO move this to a factory or to a constructor
        this.storedData[i] = {
             elem: path,
             x: x,
             expan: feMorph,
            lastPath: '',
            lastOperator:'',
            filterId:filterID,
            lastRadius:0
        };
        if(properties[i].mode == 'i'){
            jLen = currentMasks.length;
            var g = createNS('g');
            for(j=0;j<jLen;j+=1){
                g.appendChild(currentMasks[j]);
            }
            var mask = createNS('mask');
            mask.setAttribute('mask-type','alpha');
            mask.setAttribute('id',layerId+'_'+count);
            mask.appendChild(path);
            defs.appendChild(mask);
            g.setAttribute('mask','url(' + locationHref + '#'+layerId+'_'+count+')');

            currentMasks.length = 0;
            currentMasks.push(g);
        }else{
            currentMasks.push(path);
        }
        if(properties[i].inv && !this.solidPath){
            this.solidPath = this.createLayerSolidPath();
        }
        // TODO move this to a factory or to a constructor
        this.viewData[i] = {
            elem: path,
            lastPath: '',
            op: PropertyFactory.getProp(this.element,properties[i].o,0,0.01,dynamicProperties),
            prop:ShapePropertyFactory.getShapeProp(this.element,properties[i],3,dynamicProperties,null),
            invRect: rect
        };
        if(!this.viewData[i].prop.k){
            this.drawPath(properties[i],this.viewData[i].prop.v,this.viewData[i]);
        }
    }

    this.maskElement = createNS( maskType);

    len = currentMasks.length;
    for(i=0;i<len;i+=1){
        this.maskElement.appendChild(currentMasks[i]);
    }

    if(count > 0){
        this.maskElement.setAttribute('id', layerId);
        this.element.maskedElement.setAttribute(maskRef, "url(" + locationHref + "#" + layerId + ")");
        defs.appendChild(this.maskElement);
    }

}

MaskElement.prototype.getMaskProperty = function(pos){
    return this.viewData[pos].prop;
};

MaskElement.prototype.renderFrame = function (finalMat) {
    var i, len = this.masksProperties.length;
    for (i = 0; i < len; i++) {
        if(this.viewData[i].prop._mdf || this._isFirstFrame){
            this.drawPath(this.masksProperties[i],this.viewData[i].prop.v,this.viewData[i]);
        }
        if(this.viewData[i].op._mdf || this._isFirstFrame){
            this.viewData[i].elem.setAttribute('fill-opacity',this.viewData[i].op.v);
        }
        if(this.masksProperties[i].mode !== 'n'){
            if(this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || this._isFirstFrame)){
                this.viewData[i].invRect.setAttribute('x', -finalMat.props[12]);
                this.viewData[i].invRect.setAttribute('y', -finalMat.props[13]);
            }
            if(this.storedData[i].x && (this.storedData[i].x._mdf || this._isFirstFrame)){
                var feMorph = this.storedData[i].expan;
                if(this.storedData[i].x.v < 0){
                    if(this.storedData[i].lastOperator !== 'erode'){
                        this.storedData[i].lastOperator = 'erode';
                        this.storedData[i].elem.setAttribute('filter','url(' + locationHref + '#'+this.storedData[i].filterId+')');
                    }
                    feMorph.setAttribute('radius',-this.storedData[i].x.v);
                }else{
                    if(this.storedData[i].lastOperator !== 'dilate'){
                        this.storedData[i].lastOperator = 'dilate';
                        this.storedData[i].elem.setAttribute('filter',null);
                    }
                    this.storedData[i].elem.setAttribute('stroke-width', this.storedData[i].x.v*2);

                }
            }
        }
    }
    this._isFirstFrame = false;
};

MaskElement.prototype.getMaskelement = function () {
    return this.maskElement;
};

MaskElement.prototype.createLayerSolidPath = function(){
    var path = 'M0,0 ';
    path += ' h' + this.globalData.compSize.w ;
    path += ' v' + this.globalData.compSize.h ;
    path += ' h-' + this.globalData.compSize.w ;
    path += ' v-' + this.globalData.compSize.h + ' ';
    return path;
};

MaskElement.prototype.drawPath = function(pathData,pathNodes,viewData){
    var pathString = " M"+pathNodes.v[0][0]+','+pathNodes.v[0][1];
    var i, len;
    len = pathNodes._length;
    for(i=1;i<len;i+=1){
        //pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[i][0]+','+pathNodes.i[i][1] + " "+pathNodes.v[i][0]+','+pathNodes.v[i][1];
        pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[i][0]+','+pathNodes.i[i][1] + " "+pathNodes.v[i][0]+','+pathNodes.v[i][1];
    }
        //pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[0][0]+','+pathNodes.i[0][1] + " "+pathNodes.v[0][0]+','+pathNodes.v[0][1];
    if(pathNodes.c && len > 1){
        pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[0][0]+','+pathNodes.i[0][1] + " "+pathNodes.v[0][0]+','+pathNodes.v[0][1];
    }
    //pathNodes.__renderedString = pathString;


    if(viewData.lastPath !== pathString){
        var pathShapeValue = '';
        if(viewData.elem){
            if(pathNodes.c){
                pathShapeValue = pathData.inv ? this.solidPath + pathString : pathString;
            }
            viewData.elem.setAttribute('d',pathShapeValue);
        }
        viewData.lastPath = pathString;
    }
};

MaskElement.prototype.destroy = function(){
    this.element = null;
    this.globalData = null;
    this.maskElement = null;
    this.data = null;
    this.masksProperties = null;
};
/**
 * @file 
 * Handles AE's layer parenting property.
 *
 */

function HierarchyElement(){}

HierarchyElement.prototype = {
	/**
     * @function 
     * Initializes hierarchy properties
     *
     */
	initHierarchy: function() {
		//element's parent list
	    this.hierarchy = [];
	    //if element is parent of another layer _isParent will be true
	    this._isParent = false;
	    this.checkParenting();
	},
	/**
     * @function 
     * Sets layer's hierarchy.
     * @param {array} hierarch
     * layer's parent list
     *
     */ 
	setHierarchy: function(hierarchy){
	    this.hierarchy = hierarchy;
	},
	/**
     * @function 
     * Sets layer as parent.
     *
     */ 
	setAsParent: function() {
	    this._isParent = true;
	},
	/**
     * @function 
     * Searches layer's parenting chain
     *
     */ 
	checkParenting: function(){
	    if (this.data.parent !== undefined){
	        this.comp.buildElementParenting(this, this.data.parent, []);
	    }
	}
};
/**
 * @file 
 * Handles element's layer frame update.
 * Checks layer in point and out point
 *
 */

function FrameElement(){}

FrameElement.prototype = {
    /**
     * @function 
     * Initializes frame related properties.
     *
     */
    initFrame: function(){
        //set to true when inpoint is rendered
        this._isFirstFrame = false;
        //list of animated properties
        this.dynamicProperties = [];
        // If layer has been modified in current tick this will be true
        this._mdf = false;
    },
    /**
     * @function 
     * Calculates all dynamic values
     *
     * @param {number} num
     * current frame number in Layer's time
     * @param {boolean} isVisible
     * if layers is currently in range
     * 
     */
    prepareProperties: function(num, isVisible) {
        var i, len = this.dynamicProperties.length;
        for (i = 0;i < len; i += 1) {
            if (isVisible || (this._isParent && this.dynamicProperties[i].propType === 'transform')) {
                this.dynamicProperties[i].getValue();
                if (this.dynamicProperties[i]._mdf) {
                    this.globalData._mdf = true;
                    this._mdf = true;
                }
            }
        }
    }
};
function TransformElement(){}

TransformElement.prototype = {
    initTransform: function() {
        this.finalTransform = {
            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this.dynamicProperties) : {o:0},
            _matMdf: false,
            _opMdf: false,
            mat: new Matrix()
        };
        if (this.data.ao) {
            this.finalTransform.mProp.autoOriented = true;
        }

        //TODO: check TYPE 11: Guided elements
        if (this.data.ty !== 11) {
            //this.createElements();
        }
    },
    renderTransform: function() {

        this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
        this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;

        if (this.hierarchy) {
            var mat;
            var finalMat = this.finalTransform.mat;
            var i = 0, len = this.hierarchy.length;
            //Checking if any of the transformation matrices in the hierarchy chain has changed.
            if (!this.finalTransform._matMdf) {
                while (i < len) {
                    if (this.hierarchy[i].finalTransform.mProp._mdf) {
                        this.finalTransform._matMdf = true;
                        break;
                    }
                    i += 1;
                }
            }
            
            if (this.finalTransform._matMdf) {
                mat = this.finalTransform.mProp.v.props;
                finalMat.cloneFromProps(mat);
                for (i = 0; i < len; i += 1) {
                    mat = this.hierarchy[i].finalTransform.mProp.v.props;
                    finalMat.transform(mat[0], mat[1], mat[2], mat[3], mat[4], mat[5], mat[6], mat[7], mat[8], mat[9], mat[10], mat[11], mat[12], mat[13], mat[14], mat[15]);
                }
            }
        }
    },
    globalToLocal: function(pt) {
        var transforms = [];
        transforms.push(this.finalTransform);
        var flag = true;
        var comp = this.comp;
        while (flag) {
            if (comp.finalTransform) {
                if (comp.data.hasMask) {
                    transforms.splice(0, 0, comp.finalTransform);
                }
                comp = comp.comp;
            } else {
                flag = false;
            }
        }
        var i, len = transforms.length,ptNew;
        for (i = 0; i < len; i += 1) {
            ptNew = transforms[i].mat.applyToPointArray(0, 0, 0);
            //ptNew = transforms[i].mat.applyToPointArray(pt[0],pt[1],pt[2]);
            pt = [pt[0] - ptNew[0], pt[1] - ptNew[1], 0];
        }
        return pt;
    },
    mHelper: new Matrix()
};
function RenderableElement(){

}

RenderableElement.prototype = {
    initRenderable: function() {
        //layer's visibility related to inpoint and outpoint. Rename isVisible to isInRange
        this.isInRange = false;
        //layer's display state
        this.hidden = false;
        // If layer's transparency equals 0, it can be hidden
        this.isTransparent = false;
    },
    prepareRenderableFrame: function(num) {
        this.checkLayerLimits(num);
    },
    checkTransparency: function(){
        if(this.finalTransform.mProp.o.v <= 0) {
            if(!this.isTransparent && this.globalData.renderConfig.hideOnTransparent){
                this.isTransparent = true;
                this.hide();
            }
        } else if(this.isTransparent) {
            this.isTransparent = false;
            this.show();
        }
    },
    /**
     * @function 
     * Initializes frame related properties.
     *
     * @param {number} num
     * current frame number in Layer's time
     * 
     */
    checkLayerLimits: function(num) {
        if(this.data.ip - this.data.st <= num && this.data.op - this.data.st > num)
        {
            if(this.isInRange !== true){
                this.globalData._mdf = true;
                this._mdf = true;
                this.isInRange = true;
                this.show();
            }
        } else {
            if(this.isInRange !== false){
                this.globalData._mdf = true;
                this.isInRange = false;
                this.hide();
            }
        }
    },
    renderRenderable: function() {
        this.maskManager.renderFrame(this.finalTransform.mat);
        this.renderableEffectsManager.renderFrame(this._isFirstFrame);
    },
    sourceRectAtTime: function(){
        return {
            top:0,
            left:0,
            width:100,
            height:100
        };
    },
    getLayerSize: function(){
        if(this.data.ty === 5){
            return {w:this.data.textData.width,h:this.data.textData.height};
        }else{
            return {w:this.data.width,h:this.data.height};
        }
    }
};
function RenderableDOMElement() {}

(function(){
    var _prototype = {
        initElement: function(data,globalData,comp) {
            this.initFrame();
            this.initBaseData(data, globalData, comp);
            this.initTransform(data, globalData, comp);
            this.initHierarchy();
            this.initRenderable();
            this.initRendererElement();
            this.createContainerElements();
            this.addMasks();
            this.createContent();
            this.hide();
        },
        hide: function(){
            if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                this.layerElement.style.display = 'none';
                this.hidden = true;
            }
        },
        show: function(){
            if (this.isInRange && !this.isTransparent){
                if (!this.data.hd) {
                    this.layerElement.style.display = 'block';
                }
                this.hidden = false;
                this._isFirstFrame = true;
                this.maskManager._isFirstFrame = true;
            }
        },
        renderFrame: function() {
            //If it is exported as hidden (data.hd === true) no need to render
            //If it is not visible no need to render
            if (this.data.hd || this.hidden) {
                return;
            }
            this.renderTransform();
            this.renderRenderable();
            this.renderElement();
            this.renderInnerContent();
            if (this._isFirstFrame) {
                this._isFirstFrame = false;
            }
        },
        renderInnerContent: function() {},
        prepareFrame: function(num) {
            this._mdf = false;
            this.prepareRenderableFrame(num);
            this.prepareProperties(num, this.isInRange);
            this.checkTransparency();
        },
        destroy: function(){
            this.innerElem =  null;
            this.destroyBaseElement();
        }
    };
    extendPrototype([RenderableElement, createProxyFunction(_prototype)], RenderableDOMElement);
}());
function ProcessedElement(element, position) {
	this.elem = element;
	this.pos = position;
}
function SVGStyleData(data, level) {
	this.data = data;
	this.type = data.ty;
	this.d = '';
	this.lvl = level;
	this._mdf = false;
	this.closed = false;
	this.pElem = createNS('path');
	this.msElem = null;
}

SVGStyleData.prototype.reset = function() {
	this.d = '';
	this._mdf = false;
};
function SVGShapeData(transformers, level, shape) {
    this.caches = [];
    this.styles = [];
    this.transformers = transformers;
    this.lStr = '';
    this.sh = shape;
    this.lvl = level;
}
function SVGTransformData(mProps, op) {
	this.transform = {
		mProps: mProps,
		op: op
	};
	this.elements = [];
}
function SVGStrokeStyleData(elem, data, dynamicProperties, styleOb){
	this.o = PropertyFactory.getProp(elem,data.o,0,0.01,dynamicProperties);
	this.w = PropertyFactory.getProp(elem,data.w,0,null,dynamicProperties);
	this.d = new DashProperty(elem,data.d||{},'svg',dynamicProperties);
	this.c = PropertyFactory.getProp(elem,data.c,1,255,dynamicProperties);
	this.style = styleOb;
}
function SVGFillStyleData(elem, data, dynamicProperties, styleOb){
	this.o = PropertyFactory.getProp(elem,data.o,0,0.01,dynamicProperties);
	this.c = PropertyFactory.getProp(elem,data.c,1,255,dynamicProperties);
	this.style = styleOb;
}
function SVGGradientFillStyleData(elem, data, dynamicProperties, styleOb){
    this.initGradientData(elem, data, dynamicProperties, styleOb);
}

SVGGradientFillStyleData.prototype.initGradientData = function(elem, data, dynamicProperties, styleOb){
    this.o = PropertyFactory.getProp(elem,data.o,0,0.01,dynamicProperties);
    this.s = PropertyFactory.getProp(elem,data.s,1,null,dynamicProperties);
    this.e = PropertyFactory.getProp(elem,data.e,1,null,dynamicProperties);
    this.h = PropertyFactory.getProp(elem,data.h||{k:0},0,0.01,dynamicProperties);
    this.a = PropertyFactory.getProp(elem,data.a||{k:0},0,degToRads,dynamicProperties);
    this.g = new GradientProperty(elem,data.g,dynamicProperties);
    this.style = styleOb;
    this.stops = [];
    this.setGradientData(styleOb.pElem, data);
    this.setGradientOpacity(data, styleOb);

};

SVGGradientFillStyleData.prototype.setGradientData = function(pathElement,data){

    var gradientId = 'gr_'+randomString(10);
    var gfill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
    gfill.setAttribute('id',gradientId);
    gfill.setAttribute('spreadMethod','pad');
    gfill.setAttribute('gradientUnits','userSpaceOnUse');
    var stops = [];
    var stop, j, jLen;
    jLen = data.g.p*4;
    for(j=0;j<jLen;j+=4){
        stop = createNS('stop');
        gfill.appendChild(stop);
        stops.push(stop);
    }
    pathElement.setAttribute( data.ty === 'gf' ? 'fill':'stroke','url(#'+gradientId+')');
    
    this.gf = gfill;
    this.cst = stops;
};

SVGGradientFillStyleData.prototype.setGradientOpacity = function(data, styleOb){
    if(this.g._hasOpacity && !this.g._collapsable){
        var stop, j, jLen;
        var mask = createNS("mask");
        var maskElement = createNS( 'path');
        mask.appendChild(maskElement);
        var opacityId = 'op_'+randomString(10);
        var maskId = 'mk_'+randomString(10);
        mask.setAttribute('id',maskId);
        var opFill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
        opFill.setAttribute('id',opacityId);
        opFill.setAttribute('spreadMethod','pad');
        opFill.setAttribute('gradientUnits','userSpaceOnUse');
        jLen = data.g.k.k[0].s ? data.g.k.k[0].s.length : data.g.k.k.length;
        var stops = this.stops;
        for(j=data.g.p*4;j<jLen;j+=2){
            stop = createNS('stop');
            stop.setAttribute('stop-color','rgb(255,255,255)');
            opFill.appendChild(stop);
            stops.push(stop);
        }
        maskElement.setAttribute( data.ty === 'gf' ? 'fill':'stroke','url(#'+opacityId+')');
        this.of = opFill;
        this.ms = mask;
        this.ost = stops;
        this.maskId = maskId;
        styleOb.msElem = maskElement;
    }
};
function SVGGradientStrokeStyleData(elem, data, dynamicProperties, styleOb){
	this.w = PropertyFactory.getProp(elem,data.w,0,null,dynamicProperties);
	this.d = new DashProperty(elem,data.d||{},'svg',dynamicProperties);
    this.initGradientData(elem, data, dynamicProperties, styleOb);
}

SVGGradientStrokeStyleData.prototype.initGradientData = SVGGradientFillStyleData.prototype.initGradientData;
SVGGradientStrokeStyleData.prototype.setGradientData = SVGGradientFillStyleData.prototype.setGradientData;
SVGGradientStrokeStyleData.prototype.setGradientOpacity = SVGGradientFillStyleData.prototype.setGradientOpacity;
function ShapeGroupData() {
	this.it = [];
    this.prevViewData = [];
    this.gr = createNS('g');
}
function BaseElement(){
}
BaseElement.prototype.checkMasks = function(){
    if(!this.data.hasMask){
        return false;
    }
    var i = 0, len = this.data.masksProperties.length;
    while(i<len) {
        if((this.data.masksProperties[i].mode !== 'n' && this.data.masksProperties[i].cl !== false)) {
            return true;
        }
        i += 1;
    }
    return false;
};

BaseElement.prototype.initExpressions = function(){
    this.layerInterface = LayerExpressionInterface(this);
    if(this.data.hasMask){
        this.layerInterface.registerMaskInterface(this.maskManager);
    }
    var effectsInterface = EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);
    this.layerInterface.registerEffectsInterface(effectsInterface);

    if(this.data.ty === 0 || this.data.xt){
        this.compInterface = CompExpressionInterface(this);
    } else if(this.data.ty === 4){
        this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface);
        this.layerInterface.content = this.layerInterface.shapeInterface;
    } else if(this.data.ty === 5){
        this.layerInterface.textInterface = TextExpressionInterface(this);
        this.layerInterface.text = this.layerInterface.textInterface;
    }
};

BaseElement.prototype.blendModeEnums = {
    1:'multiply',
    2:'screen',
    3:'overlay',
    4:'darken',
    5:'lighten',
    6:'color-dodge',
    7:'color-burn',
    8:'hard-light',
    9:'soft-light',
    10:'difference',
    11:'exclusion',
    12:'hue',
    13:'saturation',
    14:'color',
    15:'luminosity'
};

BaseElement.prototype.getBlendMode = function(){
    return this.blendModeEnums[this.data.bm] || '';
};

BaseElement.prototype.setBlendMode = function(){
    var blendModeValue = this.getBlendMode();
    var elem = this.baseElement || this.layerElement;

    elem.style['mix-blend-mode'] = blendModeValue;
};

BaseElement.prototype.initBaseData = function(data, globalData, comp){
    this.globalData = globalData;
    this.comp = comp;
    this.data = data;
    this.layerId = 'ly_'+randomString(10);
    
    //Stretch factor for old animations missing this property.
    if(!this.data.sr){
        this.data.sr = 1;
    }
    // effects manager
    this.effectsManager = new EffectsManager(this.data,this,this.dynamicProperties);
    
};

BaseElement.prototype.getType = function(){
    return this.type;
};

function NullElement(data,globalData,comp){
    this.initFrame();
	this.initBaseData(data, globalData, comp);
    this.initFrame();
    this.initTransform(data, globalData, comp);
    this.initHierarchy();
}

NullElement.prototype.prepareFrame = function(num) {
    this.prepareProperties(num, true);
};

NullElement.prototype.renderFrame = function() {
};

NullElement.prototype.getBaseElement = function() {
	return null;
};

NullElement.prototype.destroy = function() {
};

NullElement.prototype.sourceRectAtTime = function() {
};

NullElement.prototype.hide = function() {
};

extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement], NullElement);

function SVGBaseElement(){
}

SVGBaseElement.prototype = {
    initRendererElement: function() {
        this.layerElement = createNS('g');
    },
    createContainerElements: function(){
        this.matteElement = createNS('g');
        this.transformedElement = this.layerElement;
        this.maskedElement = this.layerElement;
        this._sizeChanged = false;
        var layerElementParent = null;
        //If this layer acts as a mask for the following layer
        var filId, fil, gg;
        if (this.data.td) {
            if (this.data.td == 3 || this.data.td == 1) {
                var masker = createNS('mask');
                masker.setAttribute('id', this.layerId);
                masker.setAttribute('mask-type', this.data.td == 3 ? 'luminance' : 'alpha');
                masker.appendChild(this.layerElement);
                layerElementParent = masker;
                this.globalData.defs.appendChild(masker);
                // This is only for IE and Edge when mask if of type alpha
                if (!featureSupport.maskType && this.data.td == 1) {
                    masker.setAttribute('mask-type', 'luminance');
                    filId = randomString(10);
                    fil = filtersFactory.createFilter(filId);
                    this.globalData.defs.appendChild(fil);
                    fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                    gg = createNS('g');
                    gg.appendChild(this.layerElement);
                    layerElementParent = gg;
                    masker.appendChild(gg);
                    gg.setAttribute('filter','url(' + locationHref + '#' + filId + ')');
                }
            } else if(this.data.td == 2) {
                var maskGroup = createNS('mask');
                maskGroup.setAttribute('id', this.layerId);
                maskGroup.setAttribute('mask-type','alpha');
                var maskGrouper = createNS('g');
                maskGroup.appendChild(maskGrouper);
                filId = randomString(10);
                fil = filtersFactory.createFilter(filId);
                ////

                var feColorMatrix = createNS('feColorMatrix');
                feColorMatrix.setAttribute('type', 'matrix');
                feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
                feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1');
                fil.appendChild(feColorMatrix);

                ////
                /*var feCTr = createNS('feComponentTransfer');
                feCTr.setAttribute('in','SourceGraphic');
                fil.appendChild(feCTr);
                var feFunc = createNS('feFuncA');
                feFunc.setAttribute('type','table');
                feFunc.setAttribute('tableValues','1.0 0.0');
                feCTr.appendChild(feFunc);*/
                this.globalData.defs.appendChild(fil);
                var alphaRect = createNS('rect');
                alphaRect.setAttribute('width',  this.comp.data.w);
                alphaRect.setAttribute('height', this.comp.data.h);
                alphaRect.setAttribute('x','0');
                alphaRect.setAttribute('y','0');
                alphaRect.setAttribute('fill','#ffffff');
                alphaRect.setAttribute('opacity','0');
                maskGrouper.setAttribute('filter', 'url(' + locationHref + '#'+filId+')');
                maskGrouper.appendChild(alphaRect);
                maskGrouper.appendChild(this.layerElement);
                layerElementParent = maskGrouper;
                if (!featureSupport.maskType) {
                    maskGroup.setAttribute('mask-type', 'luminance');
                    fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                    gg = createNS('g');
                    maskGrouper.appendChild(alphaRect);
                    gg.appendChild(this.layerElement);
                    layerElementParent = gg;
                    maskGrouper.appendChild(gg);
                }
                this.globalData.defs.appendChild(maskGroup);
            }
        } else if (this.data.tt) {
            this.matteElement.appendChild(this.layerElement);
            layerElementParent = this.matteElement;
            this.baseElement = this.matteElement;
        } else {
            this.baseElement = this.layerElement;
        }
        if ((this.data.ln || this.data.cl) && (this.data.ty === 4 || this.data.ty === 0)) {
            if (this.data.ln) {
                this.layerElement.setAttribute('id', this.data.ln);
            }
            if (this.data.cl) {
                this.layerElement.setAttribute('class', this.data.cl);
            }
        }
        //Clipping compositions to hide content that exceeds boundaries. If collapsed transformations is on, component should not be clipped
        if (this.data.ty === 0 && !this.data.hd) {
            var cp = createNS( 'clipPath');
            var pt = createNS('path');
            pt.setAttribute('d','M0,0 L' + this.data.w + ',0' + ' L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z');
            var clipId = 'cp_'+randomString(8);
            cp.setAttribute('id',clipId);
            cp.appendChild(pt);
            this.globalData.defs.appendChild(cp);

            if (this.checkMasks()) {
                var cpGroup = createNS('g');
                cpGroup.setAttribute('clip-path','url(' + locationHref + '#'+clipId + ')');
                cpGroup.appendChild(this.layerElement);
                this.transformedElement = cpGroup;
                if (layerElementParent) {
                    layerElementParent.appendChild(this.transformedElement);
                } else {
                    this.baseElement = this.transformedElement;
                }
            } else {
                this.layerElement.setAttribute('clip-path','url(' + locationHref + '#'+clipId+')');
            }
            
        }
        if (this.data.bm !== 0) {
            this.setBlendMode();
        }
        this.renderableEffectsManager = new SVGEffects(this);

    },
    renderElement: function() {
        if (this.finalTransform._matMdf) {
            this.transformedElement.setAttribute('transform', this.finalTransform.mat.to2dCSS());
        }
        if (this.finalTransform._opMdf) {
            this.transformedElement.setAttribute('opacity', this.finalTransform.mProp.o.v);
        }
    },
    destroyBaseElement: function() {
        this.layerElement = null;
        this.matteElement = null;
        this.maskManager.destroy();
    },
    getBaseElement: function() {
        if (this.data.hd) {
            return null;
        }
        return this.baseElement;
    },
    addMasks: function() {
        this.maskManager = new MaskElement(this.data, this, this.globalData, this.dynamicProperties);
    },
    setMatte: function(id) {
        if (!this.matteElement) {
            return;
        }
        this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + id + ")");
    }
};
function IShapeElement(){
}

IShapeElement.prototype = {
    addShapeToModifiers: function(data) {
        var i, len = this.shapeModifiers.length;
        for(i=0;i<len;i+=1){
            this.shapeModifiers[i].addShape(data);
        }
    },
    renderModifiers: function() {
        if(!this.shapeModifiers.length){
            return;
        }
        var i, len = this.shapes.length;
        for(i=0;i<len;i+=1){
            this.shapes[i].reset();
        }

        len = this.shapeModifiers.length;
        for(i=len-1;i>=0;i-=1){
            this.shapeModifiers[i].processShapes(this._isFirstFrame);
        }
    },
    lcEnum: {
        '1': 'butt',
        '2': 'round',
        '3': 'square'
    },
    ljEnum: {
        '1': 'miter',
        '2': 'round',
        '3': 'butt'
    },
    searchProcessedElement: function(elem){
        var i = 0, len = this.processedElements.length;
        while(i < len){
            if(this.processedElements[i].elem === elem){
                return this.processedElements[i].pos;
            }
            i += 1;
        }
        return 0;
    },
    addProcessedElement: function(elem, pos){
        var i = this.processedElements.length;
        while(i){
            i -= 1;
            if(this.processedElements[i].elem === elem){
                this.processedElements[i].pos = pos;
                break;
            }
        }
        if(i === 0){
            this.processedElements.push(new ProcessedElement(elem, pos));
        }
    },
    prepareFrame: function(num) {
        this.prepareRenderableFrame(num);
        this.prepareProperties(num, this.isInRange);
    },
    buildShapeString: function(pathNodes, length, closed, mat) {
        var i, shapeString = '';
        for(i = 1; i < length; i += 1) {
            if (i === 1) {
                shapeString += " M" + mat.applyToPointStringified(pathNodes.v[0][0], pathNodes.v[0][1]);
            }
            shapeString += " C" + mat.applyToPointStringified(pathNodes.o[i - 1][0], pathNodes.o[i - 1][1]) + " " + mat.applyToPointStringified(pathNodes.i[i][0], pathNodes.i[i][1]) + " " + mat.applyToPointStringified(pathNodes.v[i][0], pathNodes.v[i][1]);
        }
        if (length === 1) {
            shapeString += " M" + mat.applyToPointStringified(pathNodes.v[0][0], pathNodes.v[0][1]);
        }
        if (closed && length) {
            shapeString += " C" + mat.applyToPointStringified(pathNodes.o[i - 1][0], pathNodes.o[i - 1][1]) + " " + mat.applyToPointStringified(pathNodes.i[0][0], pathNodes.i[0][1]) + " " + mat.applyToPointStringified(pathNodes.v[0][0], pathNodes.v[0][1]);
            shapeString += 'z';
        }
        return shapeString;
    }
};
function ITextElement(){
}

ITextElement.prototype.initElement = function(data,globalData,comp){
    this.lettersChangedFlag = true;
    this.initFrame();
    this.initBaseData(data, globalData, comp);
    this.textAnimator = new TextAnimatorProperty(data.t, this.renderType, this);
    this.textProperty = new TextProperty(this, data.t, this.dynamicProperties);
    this.initTransform(data, globalData, comp);
    this.initHierarchy();
    this.initRenderable();
    this.initRendererElement();
    this.createContainerElements();
    this.addMasks();
    this.createContent();
    this.textAnimator.searchProperties(this.dynamicProperties);
};

ITextElement.prototype.prepareFrame = function(num) {
    this._mdf = false;
    this.prepareRenderableFrame(num);
    this.prepareProperties(num, this.isInRange);
    if(this.textProperty._mdf || this.textProperty._isFirstFrame) {
        this.buildNewText();
        this.textProperty._isFirstFrame = false;
    }
};

ITextElement.prototype.createPathShape = function(matrixHelper, shapes) {
    var j,jLen = shapes.length;
    var k, kLen, pathNodes;
    var shapeStr = '';
    for(j=0;j<jLen;j+=1){
        pathNodes = shapes[j].ks.k;
        shapeStr += this.buildShapeString(pathNodes, pathNodes.i.length, true, matrixHelper);
    }
    return shapeStr;
};

ITextElement.prototype.updateDocumentData = function(newData, index) {
    this.textProperty.updateDocumentData(newData, index);
    this.buildNewText();
    this.renderInnerContent();
};

ITextElement.prototype.canResizeFont = function(_canResize) {
    this.textProperty.canResizeFont(_canResize);
    this.buildNewText();
    this.renderInnerContent();
};

ITextElement.prototype.setMinimumFontSize = function(_fontSize) {
    this.textProperty.setMinimumFontSize(_fontSize);
    this.buildNewText();
    this.renderInnerContent();
};

ITextElement.prototype.applyTextPropertiesToMatrix = function(documentData, matrixHelper, lineNumber, xPos, yPos) {
    if(documentData.ps){
        matrixHelper.translate(documentData.ps[0],documentData.ps[1] + documentData.ascent,0);
    }
    matrixHelper.translate(0,-documentData.ls,0);
    switch(documentData.j){
        case 1:
            matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]),0,0);
            break;
        case 2:
            matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber] )/2,0,0);
            break;
    }
    matrixHelper.translate(xPos, yPos, 0);
};

ITextElement.prototype.buildColor = function(colorData) {
    return 'rgb(' + Math.round(colorData[0]*255) + ',' + Math.round(colorData[1]*255) + ',' + Math.round(colorData[2]*255) + ')';
};

ITextElement.prototype.buildShapeString = IShapeElement.prototype.buildShapeString;

ITextElement.prototype.emptyProp = new LetterProps();

ITextElement.prototype.destroy = function(){
    
};
function ICompElement(){}

extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement);

ICompElement.prototype.initElement = function(data,globalData,comp) {
    this.initFrame();
    this.initBaseData(data, globalData, comp);
    this.initTransform(data, globalData, comp);
    this.initRenderable();
    this.initHierarchy();
    this.initRendererElement();
    this.createContainerElements();
    this.addMasks();
    if(this.data.xt || !globalData.progressiveLoad){
        this.buildAllItems();
    }
    this.hide();
};

/*ICompElement.prototype.hide = function(){
    if(!this.hidden){
        this.hideElement();
        var i,len = this.elements.length;
        for( i = 0; i < len; i+=1 ){
            if(this.elements[i]){
                this.elements[i].hide();
            }
        }
    }
};*/

ICompElement.prototype.prepareFrame = function(num){
    this._mdf = false;
    this.prepareRenderableFrame(num);
    this.prepareProperties(num, this.isInRange);
    if(!this.isInRange && !this.data.xt){
        return;
    }

    if (!this.tm._placeholder) {
        var timeRemapped = this.tm.v;
        if(timeRemapped === this.data.op){
            timeRemapped = this.data.op - 1;
        }
        this.renderedFrame = timeRemapped;
    } else {
        this.renderedFrame = num/this.data.sr;
    }
    var i,len = this.elements.length;
    if(!this.completeLayers){
        this.checkLayers(this.renderedFrame);
    }
    for( i = 0; i < len; i+=1 ){
        if(this.completeLayers || this.elements[i]){
            this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st);
            if(this.elements[i]._mdf) {
                this._mdf = true;
            }
        }
    }
};

ICompElement.prototype.renderInnerContent = function() {
    var i,len = this.layers.length;
    for( i = 0; i < len; i += 1 ){
        if(this.completeLayers || this.elements[i]){
            this.elements[i].renderFrame();
        }
    }
};

ICompElement.prototype.setElements = function(elems){
    this.elements = elems;
};

ICompElement.prototype.getElements = function(){
    return this.elements;
};

ICompElement.prototype.destroyElements = function(){
    var i,len = this.layers.length;
    for( i = 0; i < len; i+=1 ){
        if(this.elements[i]){
            this.elements[i].destroy();
        }
    }
};

ICompElement.prototype.destroy = function(){
    this.destroyElements();
    this.destroyBaseElement();
};

function IImageElement(data,globalData,comp){
    this.assetData = globalData.getAssetData(data.refId);
    this.initElement(data,globalData,comp);
}

extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement], IImageElement);

IImageElement.prototype.createContent = function(){

    var assetPath = this.globalData.getAssetsPath(this.assetData);

    this.innerElem = createNS('image');
    this.innerElem.setAttribute('width',this.assetData.w+"px");
    this.innerElem.setAttribute('height',this.assetData.h+"px");
    this.innerElem.setAttribute('preserveAspectRatio','xMidYMid slice');
    this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink','href',assetPath);
    
    this.layerElement.appendChild(this.innerElem);
};

function ISolidElement(data,globalData,comp){
    this.initElement(data,globalData,comp);
}
extendPrototype([IImageElement], ISolidElement);

ISolidElement.prototype.createContent = function(){

    var rect = createNS('rect');
    ////rect.style.width = this.data.sw;
    ////rect.style.height = this.data.sh;
    ////rect.style.fill = this.data.sc;
    rect.setAttribute('width',this.data.sw);
    rect.setAttribute('height',this.data.sh);
    rect.setAttribute('fill',this.data.sc);
    this.layerElement.appendChild(rect);
};
function SVGCompElement(data,globalData,comp){
    this.layers = data.layers;
    this.supports3d = true;
    this.completeLayers = false;
    this.pendingElements = [];
    this.elements = this.layers ? createSizedArray(this.layers.length) : [];
    //this.layerElement = createNS('g');
    this.initElement(data,globalData,comp);
    this.tm = data.tm ? PropertyFactory.getProp(this,data.tm,0,globalData.frameRate,this.dynamicProperties) : {_placeholder:true};
}

extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement);
function SVGTextElement(data,globalData,comp){
    this.textSpans = [];
    this.renderType = 'svg';
    this.initElement(data,globalData,comp);
}

extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement], SVGTextElement);

SVGTextElement.prototype.createContent = function(){

    if(this.data.ln){
        this.layerElement.setAttribute('id',this.data.ln);
    }
    if(this.data.cl){
        this.layerElement.setAttribute('class',this.data.cl);
    }
    if (this.data.singleShape && !this.globalData.fontManager.chars) {
        this.textContainer = createNS('text');
    }
};

SVGTextElement.prototype.buildNewText = function(){
    var i, len;

    var documentData = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(documentData ? documentData.l.length : 0);
    if(documentData.fc) {
        this.layerElement.setAttribute('fill', this.buildColor(documentData.fc));
    }else{
        this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)');
    }
    if(documentData.sc){
        this.layerElement.setAttribute('stroke', this.buildColor(documentData.sc));
        this.layerElement.setAttribute('stroke-width', documentData.sw);
    }
    this.layerElement.setAttribute('font-size', documentData.finalSize);
    var fontData = this.globalData.fontManager.getFontByName(documentData.f);
    if(fontData.fClass){
        this.layerElement.setAttribute('class',fontData.fClass);
    } else {
        this.layerElement.setAttribute('font-family', fontData.fFamily);
        var fWeight = documentData.fWeight, fStyle = documentData.fStyle;
        this.layerElement.setAttribute('font-style', fStyle);
        this.layerElement.setAttribute('font-weight', fWeight);
    }

    var letters = documentData.l || [];
    var usesGlyphs = this.globalData.fontManager.chars;
    len = letters.length;
    if(!len){
        return;
    }
    var tSpan;
    var matrixHelper = this.mHelper;
    var shapes, shapeStr = '', singleShape = this.data.singleShape;
    var xPos = 0, yPos = 0, firstLine = true;
    var trackingOffset = documentData.tr/1000*documentData.finalSize;
    if(singleShape && !usesGlyphs && !documentData.sz) {
        var tElement = this.textContainer;
        var justify = 'start';
        switch(documentData.j) {
            case 1:
                justify = 'end';
                break;
            case 2:
                justify = 'middle';
                break;
        }
        tElement.setAttribute('text-anchor',justify);
        tElement.setAttribute('letter-spacing',trackingOffset);
        var textContent = documentData.finalText.split(String.fromCharCode(13));
        len = textContent.length;
        yPos = documentData.ps ? documentData.ps[1] + documentData.ascent : 0;
        for ( i = 0; i < len; i += 1) {
            tSpan = this.textSpans[i] || createNS('tspan');
            tSpan.textContent = textContent[i];
            tSpan.setAttribute('x', 0);
            tSpan.setAttribute('y', yPos);
            tSpan.style.display = 'inherit';
            tElement.appendChild(tSpan);
            this.textSpans[i] = tSpan;
            yPos += documentData.finalLineHeight;
        }
        
        this.layerElement.appendChild(tElement);
    } else {
        var cachedSpansLength = this.textSpans.length;
        var shapeData, charData;
        for (i = 0; i < len; i += 1) {
            if(!usesGlyphs || !singleShape || i === 0){
                tSpan = cachedSpansLength > i ? this.textSpans[i] : createNS(usesGlyphs?'path':'text');
                if (cachedSpansLength <= i) {
                    tSpan.setAttribute('stroke-linecap', 'butt');
                    tSpan.setAttribute('stroke-linejoin','round');
                    tSpan.setAttribute('stroke-miterlimit','4');
                    this.textSpans[i] = tSpan;
                    this.layerElement.appendChild(tSpan);
                }
                tSpan.style.display = 'inherit';
            }
            
            matrixHelper.reset();
            matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
            if (singleShape) {
                if(letters[i].n) {
                    xPos = -trackingOffset;
                    yPos += documentData.yOffset;
                    yPos += firstLine ? 1 : 0;
                    firstLine = false;
                }
                this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
                xPos += letters[i].l || 0;
                //xPos += letters[i].val === ' ' ? 0 : trackingOffset;
                xPos += trackingOffset;
            }
            if(usesGlyphs) {
                charData = this.globalData.fontManager.getCharData(documentData.finalText.charAt(i), fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
                shapeData = charData && charData.data || {};
                shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
                if(!singleShape){
                    tSpan.setAttribute('d',this.createPathShape(matrixHelper,shapes));
                } else {
                    shapeStr += this.createPathShape(matrixHelper,shapes);
                }
            } else {
                if(singleShape) {
                    tSpan.setAttribute("transform", "translate(" + matrixHelper.props[12] + "," + matrixHelper.props[13] + ")");
                }
                tSpan.textContent = letters[i].val;
                tSpan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space","preserve");
            }
            //
        }
        if (singleShape) {
            tSpan.setAttribute('d',shapeStr);
        }
    }
    while (i < this.textSpans.length){
        this.textSpans[i].style.display = 'none';
        i += 1;
    }
    
    this._sizeChanged = true;
};

SVGTextElement.prototype.sourceRectAtTime = function(time){
    this.prepareFrame(this.comp.renderedFrame - this.data.st);
    this.renderInnerContent();
    if(this._sizeChanged){
        this._sizeChanged = false;
        var textBox = this.layerElement.getBBox();
        this.bbox = {
            top: textBox.y,
            left: textBox.x,
            width: textBox.width,
            height: textBox.height
        };
    }
    return this.bbox;
};

SVGTextElement.prototype.renderInnerContent = function(){

    if(!this.data.singleShape){
        this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        if(this.lettersChangedFlag || this.textAnimator.lettersChangedFlag){
            this._sizeChanged = true;
            var  i,len;
            var renderedLetters = this.textAnimator.renderedLetters;

            var letters = this.textProperty.currentData.l;

            len = letters.length;
            var renderedLetter, textSpan;
            for(i=0;i<len;i+=1){
                if(letters[i].n){
                    continue;
                }
                renderedLetter = renderedLetters[i];
                textSpan = this.textSpans[i];
                if(renderedLetter._mdf.m) {
                    textSpan.setAttribute('transform',renderedLetter.m);
                }
                if(renderedLetter._mdf.o) {
                    textSpan.setAttribute('opacity',renderedLetter.o);
                }
                if(renderedLetter._mdf.sw){
                    textSpan.setAttribute('stroke-width',renderedLetter.sw);
                }
                if(renderedLetter._mdf.sc){
                    textSpan.setAttribute('stroke',renderedLetter.sc);
                }
                if(renderedLetter._mdf.fc){
                    textSpan.setAttribute('fill',renderedLetter.fc);
                }
            }
        }
    }
};
function SVGShapeElement(data,globalData,comp){
    //List of drawable elements
    this.shapes = [];
    // Full shape data
    this.shapesData = data.shapes;
    //List of styles that will be applied to shapes
    this.stylesList = [];
    //List of modifiers that will be applied to shapes
    this.shapeModifiers = [];
    //List of items in shape tree
    this.itemsData = [];
    //List of items in previous shape tree
    this.processedElements = [];
    this.initElement(data,globalData,comp);
    //Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
    // List of elements that have been created
    this.prevViewData = [];
}

extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement], SVGShapeElement);

SVGShapeElement.prototype.initSecondaryElement = function() {
};

SVGShapeElement.prototype.identityMatrix = new Matrix();

SVGShapeElement.prototype.buildExpressionInterface = function(){};

SVGShapeElement.prototype.createContent = function(){
    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,this.dynamicProperties, 0, [], true);
};

SVGShapeElement.prototype.createStyleElement = function(data, level, dynamicProperties){
    //TODO: prevent drawing of hidden styles
    var elementData;
    var styleOb = new SVGStyleData(data, level);

    var pathElement = styleOb.pElem;
    if(data.ty === 'st') {
        elementData = new SVGStrokeStyleData(this, data, dynamicProperties, styleOb);
    } else if(data.ty === 'fl') {
        elementData = new SVGFillStyleData(this, data, dynamicProperties, styleOb);
    } else if(data.ty === 'gf' || data.ty === 'gs') {
        var gradientConstructor = data.ty === 'gf' ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
        elementData = new gradientConstructor(this, data, dynamicProperties, styleOb);
        this.globalData.defs.appendChild(elementData.gf);
        if (elementData.maskId) {
            this.globalData.defs.appendChild(elementData.ms);
            this.globalData.defs.appendChild(elementData.of);
            pathElement.setAttribute('mask','url(#' + elementData.maskId + ')');
        }
    }
    
    if(data.ty === 'st' || data.ty === 'gs') {
        pathElement.setAttribute('stroke-linecap', this.lcEnum[data.lc] || 'round');
        pathElement.setAttribute('stroke-linejoin',this.ljEnum[data.lj] || 'round');
        pathElement.setAttribute('fill-opacity','0');
        if(data.lj === 1) {
            pathElement.setAttribute('stroke-miterlimit',data.ml);
        }
    }

    if(data.r === 2) {
        pathElement.setAttribute('fill-rule', 'evenodd');
    }

    if(data.ln){
        pathElement.setAttribute('id',data.ln);
    }
    if(data.cl){
        pathElement.setAttribute('class',data.cl);
    }
    this.stylesList.push(styleOb);
    return elementData;
};

SVGShapeElement.prototype.createGroupElement = function(data) {
    var elementData = new ShapeGroupData();
    if(data.ln){
        elementData.gr.setAttribute('id',data.ln);
    }
    return elementData;
};

SVGShapeElement.prototype.createTransformElement = function(data, dynamicProperties) {
    return new SVGTransformData(TransformPropertyFactory.getTransformProperty(this,data,dynamicProperties), PropertyFactory.getProp(this,data.o,0,0.01,dynamicProperties));
};

SVGShapeElement.prototype.createShapeElement = function(data, ownTransformers, level, dynamicProperties) {
    var ty = 4;
    if(data.ty === 'rc'){
        ty = 5;
    }else if(data.ty === 'el'){
        ty = 6;
    }else if(data.ty === 'sr'){
        ty = 7;
    }
    var shapeProperty = ShapePropertyFactory.getShapeProp(this,data,ty,dynamicProperties);
    var elementData = new SVGShapeData(ownTransformers, level, shapeProperty);
    this.shapes.push(elementData.sh);
    this.addShapeToModifiers(elementData);
    return elementData;
};

SVGShapeElement.prototype.setElementStyles = function(elementData){
    var arr = elementData.styles;
    var j, jLen = this.stylesList.length;
    for (j = 0; j < jLen; j += 1) {
        if (!this.stylesList[j].closed) {
            arr.push(this.stylesList[j]);
        }
    }
};

SVGShapeElement.prototype.reloadShapes = function(){
    this._isFirstFrame = true;
    var i, len = this.itemsData.length;
    for( i = 0; i < len; i += 1) {
        this.prevViewData[i] = this.itemsData[i];
    }
    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,this.dynamicProperties, 0, [], true);
    len = this.dynamicProperties.length;
    for(i = 0; i < len; i += 1) {
        this.dynamicProperties[i].getValue();
    }
    this.renderModifiers();
};

SVGShapeElement.prototype.searchShapes = function(arr,itemsData,prevViewData,container,dynamicProperties, level, transformers, render){
    var ownTransformers = [].concat(transformers);
    var i, len = arr.length - 1;
    var j, jLen;
    var ownStyles = [], ownModifiers = [], styleOb, currentTransform, modifier, processedPos;
    for(i=len;i>=0;i-=1){
        processedPos = this.searchProcessedElement(arr[i]);
        if(!processedPos){
            arr[i]._render = render;
        } else {
            itemsData[i] = prevViewData[processedPos - 1];
        }
        if(arr[i].ty == 'fl' || arr[i].ty == 'st' || arr[i].ty == 'gf' || arr[i].ty == 'gs'){
            if(!processedPos){
                itemsData[i] = this.createStyleElement(arr[i], level, dynamicProperties);
            } else {
                itemsData[i].style.closed = false;
            }
            if(arr[i]._render){
                container.appendChild(itemsData[i].style.pElem);
            }
            ownStyles.push(itemsData[i].style);
        }else if(arr[i].ty == 'gr'){
            if(!processedPos){
                itemsData[i] = this.createGroupElement(arr[i]);
            } else {
                jLen = itemsData[i].it.length;
                for(j=0;j<jLen;j+=1){
                    itemsData[i].prevViewData[j] = itemsData[i].it[j];
                }
            }
            this.searchShapes(arr[i].it,itemsData[i].it,itemsData[i].prevViewData,itemsData[i].gr,dynamicProperties, level + 1, ownTransformers, render);
            if(arr[i]._render){
                container.appendChild(itemsData[i].gr);
            }
        }else if(arr[i].ty == 'tr'){
            if(!processedPos){
                itemsData[i] = this.createTransformElement(arr[i], dynamicProperties);
            }
            currentTransform = itemsData[i].transform;
            ownTransformers.push(currentTransform);
        }else if(arr[i].ty == 'sh' || arr[i].ty == 'rc' || arr[i].ty == 'el' || arr[i].ty == 'sr'){
            if(!processedPos){
                itemsData[i] = this.createShapeElement(arr[i], ownTransformers, level, dynamicProperties);
            }
            this.setElementStyles(itemsData[i]);

        }else if(arr[i].ty == 'tm' || arr[i].ty == 'rd' || arr[i].ty == 'ms'){
            if(!processedPos){
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                modifier.init(this,arr[i],dynamicProperties);
                itemsData[i] = modifier;
                this.shapeModifiers.push(modifier);
            } else {
                modifier = itemsData[i];
                modifier.closed = false;
            }
            ownModifiers.push(modifier);
        }else if(arr[i].ty == 'rp'){
            if(!processedPos){
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                itemsData[i] = modifier;
                modifier.init(this,arr,i,itemsData,dynamicProperties);
                this.shapeModifiers.push(modifier);
                render = false;
            }else{
                modifier = itemsData[i];
                modifier.closed = true;
            }
            ownModifiers.push(modifier);
        }
        this.addProcessedElement(arr[i], i + 1);
    }
    len = ownStyles.length;
    for(i=0;i<len;i+=1){
        ownStyles[i].closed = true;
    }
    len = ownModifiers.length;
    for(i=0;i<len;i+=1){
        ownModifiers[i].closed = true;
    }
};

SVGShapeElement.prototype.renderInnerContent = function() {
    this.renderModifiers();
    var i, len = this.stylesList.length;
    for(i=0;i<len;i+=1){
        this.stylesList[i].reset();
    }
    this.renderShape(this.shapesData, this.itemsData, this.layerElement);

    for (i = 0; i < len; i += 1) {
        if (this.stylesList[i]._mdf || this._isFirstFrame) {
            if(this.stylesList[i].msElem){
                this.stylesList[i].msElem.setAttribute('d', this.stylesList[i].d);
                //Adding M0 0 fixes same mask bug on all browsers
                this.stylesList[i].d = 'M0 0' + this.stylesList[i].d;
            }
            this.stylesList[i].pElem.setAttribute('d', this.stylesList[i].d || 'M0 0');
        }
    }
};


SVGShapeElement.prototype.renderShape = function(items, data, container) {
    var i, len = items.length - 1;
    var ty;
    for(i=0;i<=len;i+=1){
        ty = items[i].ty;
        if(ty == 'tr'){
            if(this._isFirstFrame || data[i].transform.op._mdf){
                container.setAttribute('opacity',data[i].transform.op.v);
            }
            if(this._isFirstFrame || data[i].transform.mProps._mdf){
                container.setAttribute('transform',data[i].transform.mProps.v.to2dCSS());
            }
        }else if(items[i]._render && (ty == 'sh' || ty == 'el' || ty == 'rc' || ty == 'sr')){
            this.renderPath(data[i]);
        }else if(ty == 'fl'){
            this.renderFill(items[i],data[i]);
        }else if(ty == 'gf'){
            this.renderGradient(items[i],data[i]);
        }else if(ty == 'gs'){
            this.renderGradient(items[i],data[i]);
            this.renderStroke(items[i],data[i]);
        }else if(ty == 'st'){
            this.renderStroke(items[i],data[i]);
        }else if(ty == 'gr'){
            this.renderShape(items[i].it,data[i].it, data[i].gr);
        }else if(ty == 'tm'){
            //
        }
    }

};

SVGShapeElement.prototype.renderPath = function(itemData){
    var j, jLen,pathStringTransformed,redraw,pathNodes,l, lLen = itemData.styles.length;
    var lvl = itemData.lvl;
    var paths, mat, props, iterations, k;
    for(l=0;l<lLen;l+=1){
        redraw = itemData.sh._mdf || this._isFirstFrame;
        if(itemData.styles[l].lvl < lvl){
            mat = this.mHelper.reset();
            iterations = lvl - itemData.styles[l].lvl;
            k = itemData.transformers.length-1;
            while(iterations > 0) {
                redraw = itemData.transformers[k].mProps._mdf || redraw;
                props = itemData.transformers[k].mProps.v.props;
                mat.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);
                iterations --;
                k --;
            }
        } else {
            mat = this.identityMatrix;
        }
        paths = itemData.sh.paths;
        jLen = paths._length;
        if(redraw){
            pathStringTransformed = '';
            for(j=0;j<jLen;j+=1){
                pathNodes = paths.shapes[j];
                if(pathNodes && pathNodes._length){
                    pathStringTransformed += this.buildShapeString(pathNodes, pathNodes._length, pathNodes.c, mat);
                }
            }
            itemData.caches[l] = pathStringTransformed;
        } else {
            pathStringTransformed = itemData.caches[l];
        }
        itemData.styles[l].d += pathStringTransformed;
        itemData.styles[l]._mdf = redraw || itemData.styles[l]._mdf;
    }
};

SVGShapeElement.prototype.renderFill = function(styleData,itemData){
    var styleElem = itemData.style;

    if(itemData.c._mdf || this._isFirstFrame){
        styleElem.pElem.setAttribute('fill','rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')');
    }
    if(itemData.o._mdf || this._isFirstFrame){
        styleElem.pElem.setAttribute('fill-opacity',itemData.o.v);
    }
};

SVGShapeElement.prototype.renderGradient = function(styleData, itemData) {
    var gfill = itemData.gf;
    var hasOpacity = itemData.g._hasOpacity;
    var pt1 = itemData.s.v, pt2 = itemData.e.v;

    if (itemData.o._mdf || this._isFirstFrame) {
        var attr = styleData.ty === 'gf' ? 'fill-opacity' : 'stroke-opacity';
        itemData.style.pElem.setAttribute(attr, itemData.o.v);
    }
    if (itemData.s._mdf || this._isFirstFrame) {
        var attr1 = styleData.t === 1 ? 'x1' : 'cx';
        var attr2 = attr1 === 'x1' ? 'y1' : 'cy';
        gfill.setAttribute(attr1, pt1[0]);
        gfill.setAttribute(attr2, pt1[1]);
        if (hasOpacity && !itemData.g._collapsable) {
            itemData.of.setAttribute(attr1, pt1[0]);
            itemData.of.setAttribute(attr2, pt1[1]);
        }
    }
    var stops, i, len, stop;
    if (itemData.g._cmdf || this._isFirstFrame) {
        stops = itemData.cst;
        var cValues = itemData.g.c;
        len = stops.length;
        for (i = 0; i < len; i += 1){
            stop = stops[i];
            stop.setAttribute('offset', cValues[i * 4] + '%');
            stop.setAttribute('stop-color','rgb('+ cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ','+cValues[i * 4 + 3] + ')');
        }
    }
    if (hasOpacity && (itemData.g._omdf || this._isFirstFrame)) {
        var oValues = itemData.g.o;
        if(itemData.g._collapsable) {
            stops = itemData.cst;
        } else {
            stops = itemData.ost;
        }
        len = stops.length;
        for (i = 0; i < len; i += 1) {
            stop = stops[i];
            if(!itemData.g._collapsable) {
                stop.setAttribute('offset', oValues[i * 2] + '%');
            }
            stop.setAttribute('stop-opacity', oValues[i * 2 + 1]);
        }
    }
    if (styleData.t === 1) {
        if (itemData.e._mdf  || this._isFirstFrame) {
            gfill.setAttribute('x2', pt2[0]);
            gfill.setAttribute('y2', pt2[1]);
            if (hasOpacity && !itemData.g._collapsable) {
                itemData.of.setAttribute('x2', pt2[0]);
                itemData.of.setAttribute('y2', pt2[1]);
            }
        }
    } else {
        var rad;
        if (itemData.s._mdf || itemData.e._mdf || this._isFirstFrame) {
            rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
            gfill.setAttribute('r', rad);
            if(hasOpacity && !itemData.g._collapsable){
                itemData.of.setAttribute('r', rad);
            }
        }
        if (itemData.e._mdf || itemData.h._mdf || itemData.a._mdf || this._isFirstFrame) {
            if (!rad) {
                rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
            }
            var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);

            var percent = itemData.h.v >= 1 ? 0.99 : itemData.h.v <= -1 ? -0.99: itemData.h.v;
            var dist = rad * percent;
            var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
            var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
            gfill.setAttribute('fx', x);
            gfill.setAttribute('fy', y);
            if (hasOpacity && !itemData.g._collapsable) {
                itemData.of.setAttribute('fx', x);
                itemData.of.setAttribute('fy', y);
            }
        }
        //gfill.setAttribute('fy','200');
    }
};

SVGShapeElement.prototype.renderStroke = function(styleData, itemData) {
    var styleElem = itemData.style;
    var d = itemData.d;
    if (d && (d._mdf || this._isFirstFrame)) {
        styleElem.pElem.setAttribute('stroke-dasharray', d.dashStr);
        styleElem.pElem.setAttribute('stroke-dashoffset', d.dashoffset[0]);
    }
    if(itemData.c && (itemData.c._mdf || this._isFirstFrame)){
        styleElem.pElem.setAttribute('stroke','rgb(' + bm_floor(itemData.c.v[0]) + ',' + bm_floor(itemData.c.v[1]) + ',' + bm_floor(itemData.c.v[2]) + ')');
    }
    if(itemData.o._mdf || this._isFirstFrame){
        styleElem.pElem.setAttribute('stroke-opacity', itemData.o.v);
    }
    if(itemData.w._mdf || this._isFirstFrame){
        styleElem.pElem.setAttribute('stroke-width', itemData.w.v);
        if(styleElem.msElem){
            styleElem.msElem.setAttribute('stroke-width', itemData.w.v);
        }
    }
};

SVGShapeElement.prototype.destroy = function(){
    this.destroyBaseElement();
    this.shapeData = null;
    this.itemsData = null;
};

function SVGTintFilter(filter, filterManager){
    this.filterManager = filterManager;
    var feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type','matrix');
    feColorMatrix.setAttribute('color-interpolation-filters','linearRGB');
    feColorMatrix.setAttribute('values','0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
    feColorMatrix.setAttribute('result','f1');
    filter.appendChild(feColorMatrix);
    feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type','matrix');
    feColorMatrix.setAttribute('color-interpolation-filters','sRGB');
    feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
    feColorMatrix.setAttribute('result','f2');
    filter.appendChild(feColorMatrix);
    this.matrixFilter = feColorMatrix;
    if(filterManager.effectElements[2].p.v !== 100 || filterManager.effectElements[2].p.k){
        var feMerge = createNS('feMerge');
        filter.appendChild(feMerge);
        var feMergeNode;
        feMergeNode = createNS('feMergeNode');
        feMergeNode.setAttribute('in','SourceGraphic');
        feMerge.appendChild(feMergeNode);
        feMergeNode = createNS('feMergeNode');
        feMergeNode.setAttribute('in','f2');
        feMerge.appendChild(feMergeNode);
    }
}

SVGTintFilter.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager._mdf){
        var colorBlack = this.filterManager.effectElements[0].p.v;
        var colorWhite = this.filterManager.effectElements[1].p.v;
        var opacity = this.filterManager.effectElements[2].p.v/100;
        this.matrixFilter.setAttribute('values',(colorWhite[0]- colorBlack[0])+' 0 0 0 '+ colorBlack[0] +' '+ (colorWhite[1]- colorBlack[1]) +' 0 0 0 '+ colorBlack[1] +' '+ (colorWhite[2]- colorBlack[2]) +' 0 0 0 '+ colorBlack[2] +' 0 0 0 ' + opacity + ' 0');
    }
};
function SVGFillFilter(filter, filterManager){
    this.filterManager = filterManager;
    var feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type','matrix');
    feColorMatrix.setAttribute('color-interpolation-filters','sRGB');
    feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
    filter.appendChild(feColorMatrix);
    this.matrixFilter = feColorMatrix;
}
SVGFillFilter.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager._mdf){
        var color = this.filterManager.effectElements[2].p.v;
        var opacity = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute('values','0 0 0 0 '+color[0]+' 0 0 0 0 '+color[1]+' 0 0 0 0 '+color[2]+' 0 0 0 '+opacity+' 0');
    }
};
function SVGStrokeEffect(elem, filterManager){
    this.initialized = false;
    this.filterManager = filterManager;
    this.elem = elem;
    this.paths = [];
}

SVGStrokeEffect.prototype.initialize = function(){

    var elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
    var path,groupPath, i, len;
    if(this.filterManager.effectElements[1].p.v === 1){
        len = this.elem.maskManager.masksProperties.length;
        i = 0;
    } else {
        i = this.filterManager.effectElements[0].p.v - 1;
        len = i + 1;
    }
    groupPath = createNS('g'); 
    groupPath.setAttribute('fill','none');
    groupPath.setAttribute('stroke-linecap','round');
    groupPath.setAttribute('stroke-dashoffset',1);
    for(i;i<len;i+=1){
        path = createNS('path');
        groupPath.appendChild(path);
        this.paths.push({p:path,m:i});
    }
    if(this.filterManager.effectElements[10].p.v === 3){
        var mask = createNS('mask');
        var id = 'stms_' + randomString(10);
        mask.setAttribute('id',id);
        mask.setAttribute('mask-type','alpha');
        mask.appendChild(groupPath);
        this.elem.globalData.defs.appendChild(mask);
        var g = createNS('g');
        g.setAttribute('mask','url(' + locationHref + '#'+id+')');
        if(elemChildren[0]){
            g.appendChild(elemChildren[0]);
        }
        this.elem.layerElement.appendChild(g);
        this.masker = mask;
        groupPath.setAttribute('stroke','#fff');
    } else if(this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2){
        if(this.filterManager.effectElements[10].p.v === 2){
            elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            while(elemChildren.length){
                this.elem.layerElement.removeChild(elemChildren[0]);
            }
        }
        this.elem.layerElement.appendChild(groupPath);
        this.elem.layerElement.removeAttribute('mask');
        groupPath.setAttribute('stroke','#fff');
    }
    this.initialized = true;
    this.pathMasker = groupPath;
};

SVGStrokeEffect.prototype.renderFrame = function(forceRender){
    if(!this.initialized){
        this.initialize();
    }
    var i, len = this.paths.length;
    var mask, path;
    for(i=0;i<len;i+=1){
        mask = this.elem.maskManager.viewData[this.paths[i].m];
        path = this.paths[i].p;
        if(forceRender || this.filterManager._mdf || mask.prop._mdf){
            path.setAttribute('d',mask.lastPath);
        }
        if(forceRender || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || mask.prop._mdf){
            var dasharrayValue;
            if(this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100){
                var s = Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100;
                var e = Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100;
                var l = path.getTotalLength();
                dasharrayValue = '0 0 0 ' + l*s + ' ';
                var lineLength = l*(e-s);
                var segment = 1+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100;
                var units = Math.floor(lineLength/segment);
                var j;
                for(j=0;j<units;j+=1){
                    dasharrayValue += '1 ' + this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100 + ' ';
                }
                dasharrayValue += '0 ' + l*10 + ' 0 0';
            } else {
                dasharrayValue = '1 ' + this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100;
            }
            path.setAttribute('stroke-dasharray',dasharrayValue);
        }
    }
    if(forceRender || this.filterManager.effectElements[4].p._mdf){
        this.pathMasker.setAttribute('stroke-width',this.filterManager.effectElements[4].p.v*2);
    }
    
    if(forceRender || this.filterManager.effectElements[6].p._mdf){
        this.pathMasker.setAttribute('opacity',this.filterManager.effectElements[6].p.v);
    }
    if(this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2){
        if(forceRender || this.filterManager.effectElements[3].p._mdf){
            var color = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute('stroke','rgb('+bm_floor(color[0]*255)+','+bm_floor(color[1]*255)+','+bm_floor(color[2]*255)+')');
        }
    }
};
function SVGTritoneFilter(filter, filterManager){
    this.filterManager = filterManager;
    var feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type','matrix');
    feColorMatrix.setAttribute('color-interpolation-filters','linearRGB');
    feColorMatrix.setAttribute('values','0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
    feColorMatrix.setAttribute('result','f1');
    filter.appendChild(feColorMatrix);
    var feComponentTransfer = createNS('feComponentTransfer');
    feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');
    filter.appendChild(feComponentTransfer);
    this.matrixFilter = feComponentTransfer;
    var feFuncR = createNS('feFuncR');
    feFuncR.setAttribute('type','table');
    feComponentTransfer.appendChild(feFuncR);
    this.feFuncR = feFuncR;
    var feFuncG = createNS('feFuncG');
    feFuncG.setAttribute('type','table');
    feComponentTransfer.appendChild(feFuncG);
    this.feFuncG = feFuncG;
    var feFuncB = createNS('feFuncB');
    feFuncB.setAttribute('type','table');
    feComponentTransfer.appendChild(feFuncB);
    this.feFuncB = feFuncB;
}

SVGTritoneFilter.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager._mdf){
        var color1 = this.filterManager.effectElements[0].p.v;
        var color2 = this.filterManager.effectElements[1].p.v;
        var color3 = this.filterManager.effectElements[2].p.v;
        var tableR = color3[0] + ' ' + color2[0] + ' ' + color1[0];
        var tableG = color3[1] + ' ' + color2[1] + ' ' + color1[1];
        var tableB = color3[2] + ' ' + color2[2] + ' ' + color1[2];
        this.feFuncR.setAttribute('tableValues', tableR);
        this.feFuncG.setAttribute('tableValues', tableG);
        this.feFuncB.setAttribute('tableValues', tableB);
        //var opacity = this.filterManager.effectElements[2].p.v/100;
        //this.matrixFilter.setAttribute('values',(colorWhite[0]- colorBlack[0])+' 0 0 0 '+ colorBlack[0] +' '+ (colorWhite[1]- colorBlack[1]) +' 0 0 0 '+ colorBlack[1] +' '+ (colorWhite[2]- colorBlack[2]) +' 0 0 0 '+ colorBlack[2] +' 0 0 0 ' + opacity + ' 0');
    }
};
function SVGProLevelsFilter(filter, filterManager){
    this.filterManager = filterManager;
    var effectElements = this.filterManager.effectElements;
    var feComponentTransfer = createNS('feComponentTransfer');
    var feFuncR, feFuncG, feFuncB;
    
    if(effectElements[10].p.k || effectElements[10].p.v !== 0 || effectElements[11].p.k || effectElements[11].p.v !== 1 || effectElements[12].p.k || effectElements[12].p.v !== 1 || effectElements[13].p.k || effectElements[13].p.v !== 0 || effectElements[14].p.k || effectElements[14].p.v !== 1){
        this.feFuncR = this.createFeFunc('feFuncR', feComponentTransfer);
    }
    if(effectElements[17].p.k || effectElements[17].p.v !== 0 || effectElements[18].p.k || effectElements[18].p.v !== 1 || effectElements[19].p.k || effectElements[19].p.v !== 1 || effectElements[20].p.k || effectElements[20].p.v !== 0 || effectElements[21].p.k || effectElements[21].p.v !== 1){
        this.feFuncG = this.createFeFunc('feFuncG', feComponentTransfer);
    }
    if(effectElements[24].p.k || effectElements[24].p.v !== 0 || effectElements[25].p.k || effectElements[25].p.v !== 1 || effectElements[26].p.k || effectElements[26].p.v !== 1 || effectElements[27].p.k || effectElements[27].p.v !== 0 || effectElements[28].p.k || effectElements[28].p.v !== 1){
        this.feFuncB = this.createFeFunc('feFuncB', feComponentTransfer);
    }
    if(effectElements[31].p.k || effectElements[31].p.v !== 0 || effectElements[32].p.k || effectElements[32].p.v !== 1 || effectElements[33].p.k || effectElements[33].p.v !== 1 || effectElements[34].p.k || effectElements[34].p.v !== 0 || effectElements[35].p.k || effectElements[35].p.v !== 1){
        this.feFuncA = this.createFeFunc('feFuncA', feComponentTransfer);
    }
    
    if(this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA){
        feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');
        filter.appendChild(feComponentTransfer);
        feComponentTransfer = createNS('feComponentTransfer');
    }

    if(effectElements[3].p.k || effectElements[3].p.v !== 0 || effectElements[4].p.k || effectElements[4].p.v !== 1 || effectElements[5].p.k || effectElements[5].p.v !== 1 || effectElements[6].p.k || effectElements[6].p.v !== 0 || effectElements[7].p.k || effectElements[7].p.v !== 1){

        feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');
        filter.appendChild(feComponentTransfer);
        this.feFuncRComposed = this.createFeFunc('feFuncR', feComponentTransfer);
        this.feFuncGComposed = this.createFeFunc('feFuncG', feComponentTransfer);
        this.feFuncBComposed = this.createFeFunc('feFuncB', feComponentTransfer);
    }
}

SVGProLevelsFilter.prototype.createFeFunc = function(type, feComponentTransfer) {
    var feFunc = createNS(type);
    feFunc.setAttribute('type','table');
    feComponentTransfer.appendChild(feFunc);
    return feFunc;
};

SVGProLevelsFilter.prototype.getTableValue = function(inputBlack, inputWhite, gamma, outputBlack, outputWhite) {
    var cnt = 0;
    var segments = 256;
    var perc;
    var min = Math.min(inputBlack, inputWhite);
    var max = Math.max(inputBlack, inputWhite);
    var table = Array.call(null,{length:segments});
    var colorValue;
    var pos = 0;
    var outputDelta = outputWhite - outputBlack; 
    var inputDelta = inputWhite - inputBlack; 
    while(cnt <= 256) {
        perc = cnt/256;
        if(perc <= min){
            colorValue = inputDelta < 0 ? outputWhite : outputBlack;
        } else if(perc >= max){
            colorValue = inputDelta < 0 ? outputBlack : outputWhite;
        } else {
            colorValue = (outputBlack + outputDelta * Math.pow((perc - inputBlack) / inputDelta, 1 / gamma));
        }
        table[pos++] = colorValue;
        cnt += 256/(segments-1);
    }
    return table.join(' ');
};

SVGProLevelsFilter.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager._mdf){
        var val, cnt, perc, bezier;
        var effectElements = this.filterManager.effectElements;
        if(this.feFuncRComposed && (forceRender || effectElements[3].p._mdf || effectElements[4].p._mdf || effectElements[5].p._mdf || effectElements[6].p._mdf || effectElements[7].p._mdf)){
            val = this.getTableValue(effectElements[3].p.v,effectElements[4].p.v,effectElements[5].p.v,effectElements[6].p.v,effectElements[7].p.v);
            this.feFuncRComposed.setAttribute('tableValues',val);
            this.feFuncGComposed.setAttribute('tableValues',val);
            this.feFuncBComposed.setAttribute('tableValues',val);
        }


        if(this.feFuncR && (forceRender || effectElements[10].p._mdf || effectElements[11].p._mdf || effectElements[12].p._mdf || effectElements[13].p._mdf || effectElements[14].p._mdf)){
            val = this.getTableValue(effectElements[10].p.v,effectElements[11].p.v,effectElements[12].p.v,effectElements[13].p.v,effectElements[14].p.v);
            this.feFuncR.setAttribute('tableValues',val);
        }

        if(this.feFuncG && (forceRender || effectElements[17].p._mdf || effectElements[18].p._mdf || effectElements[19].p._mdf || effectElements[20].p._mdf || effectElements[21].p._mdf)){
            val = this.getTableValue(effectElements[17].p.v,effectElements[18].p.v,effectElements[19].p.v,effectElements[20].p.v,effectElements[21].p.v);
            this.feFuncG.setAttribute('tableValues',val);
        }

        if(this.feFuncB && (forceRender || effectElements[24].p._mdf || effectElements[25].p._mdf || effectElements[26].p._mdf || effectElements[27].p._mdf || effectElements[28].p._mdf)){
            val = this.getTableValue(effectElements[24].p.v,effectElements[25].p.v,effectElements[26].p.v,effectElements[27].p.v,effectElements[28].p.v);
            this.feFuncB.setAttribute('tableValues',val);
        }

        if(this.feFuncA && (forceRender || effectElements[31].p._mdf || effectElements[32].p._mdf || effectElements[33].p._mdf || effectElements[34].p._mdf || effectElements[35].p._mdf)){
            val = this.getTableValue(effectElements[31].p.v,effectElements[32].p.v,effectElements[33].p.v,effectElements[34].p.v,effectElements[35].p.v);
            this.feFuncA.setAttribute('tableValues',val);
        }
        
    }
};
function SVGDropShadowEffect(filter, filterManager){
    filter.setAttribute('x','-100%');
    filter.setAttribute('y','-100%');
    filter.setAttribute('width','400%');
    filter.setAttribute('height','400%');
    this.filterManager = filterManager;

    var feGaussianBlur = createNS('feGaussianBlur');
    feGaussianBlur.setAttribute('in','SourceAlpha');
    feGaussianBlur.setAttribute('result','drop_shadow_1');
    feGaussianBlur.setAttribute('stdDeviation','0');
    this.feGaussianBlur = feGaussianBlur;
    filter.appendChild(feGaussianBlur);

    var feOffset = createNS('feOffset');
    feOffset.setAttribute('dx','25');
    feOffset.setAttribute('dy','0');
    feOffset.setAttribute('in','drop_shadow_1');
    feOffset.setAttribute('result','drop_shadow_2');
    this.feOffset = feOffset;
    filter.appendChild(feOffset);
    var feFlood = createNS('feFlood');
    feFlood.setAttribute('flood-color','#00ff00');
    feFlood.setAttribute('flood-opacity','1');
    feFlood.setAttribute('result','drop_shadow_3');
    this.feFlood = feFlood;
    filter.appendChild(feFlood);

    var feComposite = createNS('feComposite');
    feComposite.setAttribute('in','drop_shadow_3');
    feComposite.setAttribute('in2','drop_shadow_2');
    feComposite.setAttribute('operator','in');
    feComposite.setAttribute('result','drop_shadow_4');
    filter.appendChild(feComposite);


    var feMerge = createNS('feMerge');
    filter.appendChild(feMerge);
    var feMergeNode;
    feMergeNode = createNS('feMergeNode');
    feMerge.appendChild(feMergeNode);
    feMergeNode = createNS('feMergeNode');
    feMergeNode.setAttribute('in','SourceGraphic');
    this.feMergeNode = feMergeNode;
    this.feMerge = feMerge;
    this.originalNodeAdded = false;
    feMerge.appendChild(feMergeNode);
}

SVGDropShadowEffect.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager._mdf){
        if(forceRender || this.filterManager.effectElements[4].p._mdf){
            this.feGaussianBlur.setAttribute('stdDeviation', this.filterManager.effectElements[4].p.v / 4);
        }
        if(forceRender || this.filterManager.effectElements[0].p._mdf){
            var col = this.filterManager.effectElements[0].p.v;
            this.feFlood.setAttribute('flood-color',rgbToHex(Math.round(col[0]*255),Math.round(col[1]*255),Math.round(col[2]*255)));
        }
        if(forceRender || this.filterManager.effectElements[1].p._mdf){
            this.feFlood.setAttribute('flood-opacity',this.filterManager.effectElements[1].p.v/255);
        }
        if(forceRender || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf){
            var distance = this.filterManager.effectElements[3].p.v;
            var angle = (this.filterManager.effectElements[2].p.v - 90) * degToRads;
            var x = distance * Math.cos(angle);
            var y = distance * Math.sin(angle);
            this.feOffset.setAttribute('dx', x);
            this.feOffset.setAttribute('dy', y);
        }
        /*if(forceRender || this.filterManager.effectElements[5].p._mdf){
            if(this.filterManager.effectElements[5].p.v === 1 && this.originalNodeAdded) {
                this.feMerge.removeChild(this.feMergeNode);
                this.originalNodeAdded = false;
            } else if(this.filterManager.effectElements[5].p.v === 0 && !this.originalNodeAdded) {
                this.feMerge.appendChild(this.feMergeNode);
                this.originalNodeAdded = true;
            }
        }*/
    }
};
var _svgMatteSymbols = [];
var _svgMatteMaskCounter = 0;

function SVGMatte3Effect(filterElem, filterManager, elem){
    this.initialized = false;
    this.filterManager = filterManager;
    this.filterElem = filterElem;
    this.elem = elem;
    elem.matteElement = createNS('g');
    elem.matteElement.appendChild(elem.layerElement);
    elem.matteElement.appendChild(elem.transformedElement);
    elem.baseElement = elem.matteElement;
}

SVGMatte3Effect.prototype.findSymbol = function(mask) {
    var i = 0, len = _svgMatteSymbols.length;
    while(i < len) {
        if(_svgMatteSymbols[i] === mask) {
            return _svgMatteSymbols[i];
        }
        i += 1;
    }
    return null;
};

SVGMatte3Effect.prototype.replaceInParent = function(mask, symbolId) {
    var parentNode = mask.layerElement.parentNode;
    if(!parentNode) {
        return;
    }
    var children = parentNode.children;
    var i = 0, len = children.length;
    while (i < len) {
        if (children[i] === mask.layerElement) {
            break;
        }
        i += 1;
    }
    var nextChild;
    if (i <= len - 2) {
        nextChild = children[i + 1];
    }
    var useElem = createNS('use');
    useElem.setAttribute('href', '#' + symbolId);
    if(nextChild) {
        parentNode.insertBefore(useElem, nextChild);
    } else {
        parentNode.appendChild(useElem);
    }
};

SVGMatte3Effect.prototype.setElementAsMask = function(elem, mask) {
    if(!this.findSymbol(mask)) {
        var symbolId = 'matte_' + randomString(5) + '_' + _svgMatteMaskCounter++;
        var masker = createNS('mask');
        masker.setAttribute('id', mask.layerId);
        masker.setAttribute('mask-type', 'alpha');
        _svgMatteSymbols.push(mask);
        var defs = elem.globalData.defs;
        defs.appendChild(masker);
        var symbol = createNS('symbol');
        symbol.setAttribute('id', symbolId);
        this.replaceInParent(mask, symbolId);
        symbol.appendChild(mask.layerElement);
        defs.appendChild(symbol);
        useElem = createNS('use');
        useElem.setAttribute('href', '#' + symbolId);
        masker.appendChild(useElem);
        mask.data.hd = false;
        mask.show();
    }
    elem.setMatte(mask.layerId);
};

SVGMatte3Effect.prototype.initialize = function() {
    var ind = this.filterManager.effectElements[0].p.v;
    var i = 0, len = this.elem.comp.elements.length;
    while (i < len) {
    	if (this.elem.comp.elements[i].data.ind === ind) {
    		this.setElementAsMask(this.elem, this.elem.comp.elements[i]);
    	}
    	i += 1;
    }
    this.initialized = true;
};

SVGMatte3Effect.prototype.renderFrame = function() {
	if(!this.initialized) {
		this.initialize();
	}
};
function SVGEffects(elem){
    var i, len = elem.data.ef ? elem.data.ef.length : 0;
    var filId = randomString(10);
    var fil = filtersFactory.createFilter(filId);
    var count = 0;
    this.filters = [];
    var filterManager;
    for(i=0;i<len;i+=1){
        filterManager = null;
        if(elem.data.ef[i].ty === 20){
            count += 1;
            filterManager = new SVGTintFilter(fil, elem.effectsManager.effectElements[i]);
        }else if(elem.data.ef[i].ty === 21){
            count += 1;
            filterManager = new SVGFillFilter(fil, elem.effectsManager.effectElements[i]);
        }else if(elem.data.ef[i].ty === 22){
            filterManager = new SVGStrokeEffect(elem, elem.effectsManager.effectElements[i]);
        }else if(elem.data.ef[i].ty === 23){
            count += 1;
            filterManager = new SVGTritoneFilter(fil, elem.effectsManager.effectElements[i]);
        }else if(elem.data.ef[i].ty === 24){
            count += 1;
            filterManager = new SVGProLevelsFilter(fil, elem.effectsManager.effectElements[i]);
        }else if(elem.data.ef[i].ty === 25){
            count += 1;
            filterManager = new SVGDropShadowEffect(fil, elem.effectsManager.effectElements[i]);
        }else if(elem.data.ef[i].ty === 28){
            //count += 1;
            filterManager = new SVGMatte3Effect(fil, elem.effectsManager.effectElements[i], elem);
        }
        if(filterManager) {
            this.filters.push(filterManager);
        }
    }
    if(count){
        elem.globalData.defs.appendChild(fil);
        elem.layerElement.setAttribute('filter','url(' + locationHref + '#'+filId+')');
    }
}

SVGEffects.prototype.renderFrame = function(_isFirstFrame){
    var i, len = this.filters.length;
    for(i=0;i<len;i+=1){
        this.filters[i].renderFrame(_isFirstFrame);
    }
};
var animationManager = (function(){
    var moduleOb = {};
    var registeredAnimations = [];
    var initTime = 0;
    var len = 0;
    var idled = true;
    var playingAnimationsNum = 0;
    var _stopped = true;

    function removeElement(ev){
        var i = 0;
        var animItem = ev.target;
        while(i<len) {
            if (registeredAnimations[i].animation === animItem) {
                registeredAnimations.splice(i, 1);
                i -= 1;
                len -= 1;
                if(!animItem.isPaused){
                    subtractPlayingCount();
                }
            }
            i += 1;
        }
    }

    function registerAnimation(element, animationData){
        if(!element){
            return null;
        }
        var i=0;
        while(i<len){
            if(registeredAnimations[i].elem == element && registeredAnimations[i].elem !== null ){
                return registeredAnimations[i].animation;
            }
            i+=1;
        }
        var animItem = new AnimationItem();
        setupAnimation(animItem, element);
        animItem.setData(element, animationData);
        return animItem;
    }

    function addPlayingCount(){
        playingAnimationsNum += 1;
        activate();
    }

    function subtractPlayingCount(){
        playingAnimationsNum -= 1;
        if(playingAnimationsNum === 0){
            idled = true;
        }
    }

    function setupAnimation(animItem, element){
        animItem.addEventListener('destroy',removeElement);
        animItem.addEventListener('_active',addPlayingCount);
        animItem.addEventListener('_idle',subtractPlayingCount);
        registeredAnimations.push({elem: element,animation:animItem});
        len += 1;
    }

    function loadAnimation(params){
        var animItem = new AnimationItem();
        setupAnimation(animItem, null);
        animItem.setParams(params);
        return animItem;
    }


    function setSpeed(val,animation){
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.setSpeed(val, animation);
        }
    }

    function setDirection(val, animation){
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.setDirection(val, animation);
        }
    }

    function play(animation){
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.play(animation);
        }
    }
    function resume(nowTime) {
        var elapsedTime = nowTime - initTime;
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.advanceTime(elapsedTime);
        }
        initTime = nowTime;
        if(!idled) {
            window.requestAnimationFrame(resume);
        } else {
            _stopped = true;
        }
    }

    function first(nowTime){
        initTime = nowTime;
        window.requestAnimationFrame(resume);
    }

    function pause(animation) {
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.pause(animation);
        }
    }

    function goToAndStop(value,isFrame,animation) {
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.goToAndStop(value,isFrame,animation);
        }
    }

    function stop(animation) {
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.stop(animation);
        }
    }

    function togglePause(animation) {
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.togglePause(animation);
        }
    }

    function destroy(animation) {
        var i;
        for(i=(len-1);i>=0;i-=1){
            registeredAnimations[i].animation.destroy(animation);
        }
    }

    function searchAnimations(animationData, standalone, renderer){
        var animElements = [].concat([].slice.call(document.getElementsByClassName('lottie')),
                  [].slice.call(document.getElementsByClassName('bodymovin')));
        var i, len = animElements.length;
        for(i=0;i<len;i+=1){
            if(renderer){
                animElements[i].setAttribute('data-bm-type',renderer);
            }
            registerAnimation(animElements[i], animationData);
        }
        if(standalone && len === 0){
            if(!renderer){
                renderer = 'svg';
            }
            var body = document.getElementsByTagName('body')[0];
            body.innerHTML = '';
            var div = createTag('div');
            div.style.width = '100%';
            div.style.height = '100%';
            div.setAttribute('data-bm-type',renderer);
            body.appendChild(div);
            registerAnimation(div, animationData);
        }
    }

    function resize(){
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.resize();
        }
    }

    /*function start(){
        window.requestAnimationFrame(first);
    }*/

    function activate(){
        if(idled){
            idled = false;
            if(_stopped) {
                window.requestAnimationFrame(first);
                _stopped = false;
            }
        }
    }

    //start();

    //setTimeout(start,0);

    moduleOb.registerAnimation = registerAnimation;
    moduleOb.loadAnimation = loadAnimation;
    moduleOb.setSpeed = setSpeed;
    moduleOb.setDirection = setDirection;
    moduleOb.play = play;
    moduleOb.pause = pause;
    moduleOb.stop = stop;
    moduleOb.togglePause = togglePause;
    moduleOb.searchAnimations = searchAnimations;
    moduleOb.resize = resize;
    //moduleOb.start = start;
    moduleOb.goToAndStop = goToAndStop;
    moduleOb.destroy = destroy;
    return moduleOb;
}());

var AnimationItem = function () {
    this._cbs = [];
    this.name = '';
    this.path = '';
    this.isLoaded = false;
    this.currentFrame = 0;
    this.currentRawFrame = 0;
    this.totalFrames = 0;
    this.frameRate = 0;
    this.frameMult = 0;
    this.playSpeed = 1;
    this.playDirection = 1;
    this.pendingElements = 0;
    this.playCount = 0;
    this.animationData = {};
    this.layers = [];
    this.assets = [];
    this.isPaused = true;
    this.autoplay = false;
    this.loop = true;
    this.renderer = null;
    this.animationID = randomString(10);
    this.assetsPath = '';
    this.timeCompleted = 0;
    this.segmentPos = 0;
    this.subframeEnabled = subframeEnabled;
    this.segments = [];
    this._idle = true;
    this.projectInterface = ProjectInterface();
};

extendPrototype([BaseEvent], AnimationItem);

AnimationItem.prototype.setParams = function(params) {
    var self = this;
    if(params.context){
        this.context = params.context;
    }
    if(params.wrapper || params.container){
        this.wrapper = params.wrapper || params.container;
    }
    var animType = params.animType ? params.animType : params.renderer ? params.renderer : 'svg';
    switch(animType){
        case 'canvas':
            this.renderer = new CanvasRenderer(this, params.rendererSettings);
            break;
        case 'svg':
            this.renderer = new SVGRenderer(this, params.rendererSettings);
            break;
        default:
            this.renderer = new HybridRenderer(this, params.rendererSettings);
            break;
    }
    this.renderer.setProjectInterface(this.projectInterface);
    this.animType = animType;

    if(params.loop === '' || params.loop === null){
    }else if(params.loop === false){
        this.loop = false;
    }else if(params.loop === true){
        this.loop = true;
    }else{
        this.loop = parseInt(params.loop);
    }
    this.autoplay = 'autoplay' in params ? params.autoplay : true;
    this.name = params.name ? params.name :  '';
    this.autoloadSegments = params.hasOwnProperty('autoloadSegments') ? params.autoloadSegments :  true;
    if(params.animationData){
        self.configAnimation(params.animationData);
    }else if(params.path){
        if(params.path.substr(-4) != 'json'){
            if (params.path.substr(-1, 1) != '/') {
                params.path += '/';
            }
            params.path += 'data.json';
        }

        var xhr = new XMLHttpRequest();
        if(params.path.lastIndexOf('\\') != -1){
            this.path = params.path.substr(0,params.path.lastIndexOf('\\')+1);
        }else{
            this.path = params.path.substr(0,params.path.lastIndexOf('/')+1);
        }
        this.assetsPath = params.assetsPath;
        this.fileName = params.path.substr(params.path.lastIndexOf('/')+1);
        this.fileName = this.fileName.substr(0,this.fileName.lastIndexOf('.json'));
        xhr.open('GET', params.path, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if(xhr.status == 200){
                    self.configAnimation(JSON.parse(xhr.responseText));
                }else{
                    try{
                        var response = JSON.parse(xhr.responseText);
                        self.configAnimation(response);
                    }catch(err){
                    }
                }
            }
        };
    }
};

AnimationItem.prototype.setData = function (wrapper, animationData) {
    var params = {
        wrapper: wrapper,
        animationData: animationData ? (typeof animationData  === "object") ? animationData : JSON.parse(animationData) : null
    };
    var wrapperAttributes = wrapper.attributes;

    params.path = wrapperAttributes.getNamedItem('data-animation-path') ? wrapperAttributes.getNamedItem('data-animation-path').value : wrapperAttributes.getNamedItem('data-bm-path') ? wrapperAttributes.getNamedItem('data-bm-path').value :  wrapperAttributes.getNamedItem('bm-path') ? wrapperAttributes.getNamedItem('bm-path').value : '';
    params.animType = wrapperAttributes.getNamedItem('data-anim-type') ? wrapperAttributes.getNamedItem('data-anim-type').value : wrapperAttributes.getNamedItem('data-bm-type') ? wrapperAttributes.getNamedItem('data-bm-type').value : wrapperAttributes.getNamedItem('bm-type') ? wrapperAttributes.getNamedItem('bm-type').value :  wrapperAttributes.getNamedItem('data-bm-renderer') ? wrapperAttributes.getNamedItem('data-bm-renderer').value : wrapperAttributes.getNamedItem('bm-renderer') ? wrapperAttributes.getNamedItem('bm-renderer').value : 'canvas';

    var loop = wrapperAttributes.getNamedItem('data-anim-loop') ? wrapperAttributes.getNamedItem('data-anim-loop').value :  wrapperAttributes.getNamedItem('data-bm-loop') ? wrapperAttributes.getNamedItem('data-bm-loop').value :  wrapperAttributes.getNamedItem('bm-loop') ? wrapperAttributes.getNamedItem('bm-loop').value : '';
    if(loop === ''){
    }else if(loop === 'false'){
        params.loop = false;
    }else if(loop === 'true'){
        params.loop = true;
    }else{
        params.loop = parseInt(loop);
    }
    var autoplay = wrapperAttributes.getNamedItem('data-anim-autoplay') ? wrapperAttributes.getNamedItem('data-anim-autoplay').value :  wrapperAttributes.getNamedItem('data-bm-autoplay') ? wrapperAttributes.getNamedItem('data-bm-autoplay').value :  wrapperAttributes.getNamedItem('bm-autoplay') ? wrapperAttributes.getNamedItem('bm-autoplay').value : true;
    params.autoplay = autoplay !== "false";

    params.name = wrapperAttributes.getNamedItem('data-name') ? wrapperAttributes.getNamedItem('data-name').value :  wrapperAttributes.getNamedItem('data-bm-name') ? wrapperAttributes.getNamedItem('data-bm-name').value : wrapperAttributes.getNamedItem('bm-name') ? wrapperAttributes.getNamedItem('bm-name').value :  '';
    var prerender = wrapperAttributes.getNamedItem('data-anim-prerender') ? wrapperAttributes.getNamedItem('data-anim-prerender').value :  wrapperAttributes.getNamedItem('data-bm-prerender') ? wrapperAttributes.getNamedItem('data-bm-prerender').value :  wrapperAttributes.getNamedItem('bm-prerender') ? wrapperAttributes.getNamedItem('bm-prerender').value : '';

    if(prerender === 'false'){
        params.prerender = false;
    }
    this.setParams(params);
};

AnimationItem.prototype.includeLayers = function(data) {
    if(data.op > this.animationData.op){
        this.animationData.op = data.op;
        this.totalFrames = Math.floor(data.op - this.animationData.ip);
        this.animationData.tf = this.totalFrames;
    }
    var layers = this.animationData.layers;
    var i, len = layers.length;
    var newLayers = data.layers;
    var j, jLen = newLayers.length;
    for(j=0;j<jLen;j+=1){
        i = 0;
        while(i<len){
            if(layers[i].id == newLayers[j].id){
                layers[i] = newLayers[j];
                break;
            }
            i += 1;
        }
    }
    if(data.chars || data.fonts){
        this.renderer.globalData.fontManager.addChars(data.chars);
        this.renderer.globalData.fontManager.addFonts(data.fonts, this.renderer.globalData.defs);
    }
    if(data.assets){
        len = data.assets.length;
        for(i = 0; i < len; i += 1){
            this.animationData.assets.push(data.assets[i]);
        }
    }
    //this.totalFrames = 50;
    //this.animationData.tf = 50;
    this.animationData.__complete = false;
    dataManager.completeData(this.animationData,this.renderer.globalData.fontManager);
    this.renderer.includeLayers(data.layers);
    if(expressionsPlugin){
        expressionsPlugin.initExpressions(this);
    }
    this.renderer.renderFrame(-1);
    this.loadNextSegment();
};

AnimationItem.prototype.loadNextSegment = function() {
    var segments = this.animationData.segments;
    if(!segments || segments.length === 0 || !this.autoloadSegments){
        this.trigger('data_ready');
        this.timeCompleted = this.animationData.tf;
        return;
    }
    var segment = segments.shift();
    this.timeCompleted = segment.time * this.frameRate;
    var xhr = new XMLHttpRequest();
    var self = this;
    var segmentPath = this.path+this.fileName+'_' + this.segmentPos + '.json';
    this.segmentPos += 1;
    xhr.open('GET', segmentPath, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if(xhr.status == 200){
                self.includeLayers(JSON.parse(xhr.responseText));
            }else{
                try{
                    var response = JSON.parse(xhr.responseText);
                    self.includeLayers(response);
                }catch(err){
                }
            }
        }
    };
};

AnimationItem.prototype.loadSegments = function() {
    var segments = this.animationData.segments;
    if(!segments) {
        this.timeCompleted = this.animationData.tf;
    }
    this.loadNextSegment();
};

AnimationItem.prototype.configAnimation = function (animData) {
    var _this = this;
    if(this.renderer && this.renderer.destroyed){
        return;
    }
    //console.log(JSON.parse(JSON.stringify(animData)));
    //animData.w = Math.round(animData.w/blitter);
    //animData.h = Math.round(animData.h/blitter);
    this.animationData = animData;
    this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
    this.animationData.tf = this.totalFrames;
    this.renderer.configAnimation(animData);
    if(!animData.assets){
        animData.assets = [];
    }
    if(animData.comps) {
        animData.assets = animData.assets.concat(animData.comps);
        animData.comps = null;
    }
    this.renderer.searchExtraCompositions(animData.assets);

    this.layers = this.animationData.layers;
    this.assets = this.animationData.assets;
    this.frameRate = this.animationData.fr;
    this.firstFrame = Math.round(this.animationData.ip);
    this.frameMult = this.animationData.fr / 1000;
    this.trigger('config_ready');
    this.imagePreloader = new ImagePreloader();
    this.imagePreloader.setAssetsPath(this.assetsPath);
    this.imagePreloader.setPath(this.path);
    this.imagePreloader.loadAssets(animData.assets, function(err) {
        if(!err) {
            _this.trigger('loaded_images');
        }
    });
    this.loadSegments();
    this.updaFrameModifier();
    if(this.renderer.globalData.fontManager){
        this.waitForFontsLoaded();
    }else{
        dataManager.completeData(this.animationData,this.renderer.globalData.fontManager);
        this.checkLoaded();
    }
};

AnimationItem.prototype.waitForFontsLoaded = (function(){
    function checkFontsLoaded(){
        if(this.renderer.globalData.fontManager.loaded){
            dataManager.completeData(this.animationData,this.renderer.globalData.fontManager);
            //this.renderer.buildItems(this.animationData.layers);
            this.checkLoaded();
        }else{
            setTimeout(checkFontsLoaded.bind(this),20);
        }
    }

    return function(){
        checkFontsLoaded.bind(this)();
    };
}());

AnimationItem.prototype.addPendingElement = function () {
    this.pendingElements += 1;
};

AnimationItem.prototype.elementLoaded = function () {
    this.pendingElements--;
    this.checkLoaded();
};

AnimationItem.prototype.checkLoaded = function () {
    if (this.pendingElements === 0) {
        if(expressionsPlugin){
            expressionsPlugin.initExpressions(this);
        }
        this.renderer.initItems();
        setTimeout(function(){
            this.trigger('DOMLoaded');
        }.bind(this),0);
        this.isLoaded = true;
        this.gotoFrame();
        if(this.autoplay){
            this.play();
        }
    }
};

AnimationItem.prototype.resize = function () {
    this.renderer.updateContainerSize();
};

AnimationItem.prototype.setSubframe = function(flag){
    this.subframeEnabled = flag ? true : false;
};

AnimationItem.prototype.gotoFrame = function () {
    this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame;

    if(this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted){
        this.currentFrame = this.timeCompleted;
    }
    //console.log(this.currentFrame)
    this.trigger('enterFrame');
    // console.log('gotoFrame: ', this.currentFrame )
    this.renderFrame();
};

AnimationItem.prototype.renderFrame = function () {
    if(this.isLoaded === false){
        return;
    }
    //console.log('this.currentFrame:',this.currentFrame + this.firstFrame);
    this.renderer.renderFrame(this.currentFrame + this.firstFrame);
};

AnimationItem.prototype.play = function (name) {
    if(name && this.name != name){
        return;
    }
    if(this.isPaused === true){
        this.isPaused = false;
        if(this._idle){
            this._idle = false;
            this.trigger('_active');
        }
    }
};

AnimationItem.prototype.pause = function (name) {
    if(name && this.name != name){
        return;
    }
    if(this.isPaused === false){
        this.isPaused = true;
        this._idle = true;
        this.trigger('_idle');
    }
};

AnimationItem.prototype.togglePause = function (name) {
    if(name && this.name != name){
        return;
    }
    if(this.isPaused === true){
        this.play();
    }else{
        this.pause();
    }
};

AnimationItem.prototype.stop = function (name) {
    if(name && this.name != name){
        return;
    }
    this.pause();
    this.playCount = 0;
    this.setCurrentRawFrameValue(0);
};

AnimationItem.prototype.goToAndStop = function (value, isFrame, name) {
    if(name && this.name != name){
        return;
    }
    if(isFrame){
        this.setCurrentRawFrameValue(value);
    }else{
        this.setCurrentRawFrameValue(value * this.frameModifier);
    }
    this.pause();
};

AnimationItem.prototype.goToAndPlay = function (value, isFrame, name) {
    this.goToAndStop(value, isFrame, name);
    this.play();
};

AnimationItem.prototype.advanceTime = function (value) {
    if (this.isPaused === true || this.isLoaded === false) {
        return;
    }
    var nextValue = this.currentRawFrame + value * this.frameModifier;
    var _isComplete = false;
    if (nextValue >= this.totalFrames) {
        if(!this.checkSegments(nextValue % this.totalFrames)) {
            if (this.loop && !(++this.playCount === this.loop)) {
                this.setCurrentRawFrameValue(nextValue % this.totalFrames);
                this.trigger('loopComplete');
            } else {
                _isComplete = true;
                nextValue = this.totalFrames;
            }
        }
    } else if(nextValue < 0) {
        if(!this.checkSegments(nextValue % this.totalFrames)) {
            if (this.loop && !(this.playCount-- <= 0 && this.loop !== true)) {
                this.setCurrentRawFrameValue(this.totalFrames + (nextValue % this.totalFrames));
                this.trigger('loopComplete');
            } else {
                _isComplete = true;
                nextValue = 0;
            }
        }
    } else {
        this.setCurrentRawFrameValue(nextValue);
    }
    if (_isComplete) {
        this.setCurrentRawFrameValue(nextValue);
        this.pause();
        this.trigger('complete');
    }
};

AnimationItem.prototype.adjustSegment = function(arr, offset){
    this.playCount = 0;
    if(arr[1] < arr[0]){
        if(this.frameModifier > 0){
            if(this.playSpeed < 0){
                this.setSpeed(-this.playSpeed);
            } else {
                this.setDirection(-1);
            }
        }
        this.totalFrames = arr[0] - arr[1];
        this.firstFrame = arr[1];
        this.setCurrentRawFrameValue(this.totalFrames - 0.001 - offset);
    } else if(arr[1] > arr[0]){
        if(this.frameModifier < 0){
            if(this.playSpeed < 0){
                this.setSpeed(-this.playSpeed);
            } else {
                this.setDirection(1);
            }
        }
        this.totalFrames = arr[1] - arr[0];
        this.firstFrame = arr[0];
        this.setCurrentRawFrameValue(0.001 + offset);
    }
    this.trigger('segmentStart');
};
AnimationItem.prototype.setSegment = function (init,end) {
    var pendingFrame = -1;
    if(this.isPaused) {
        if (this.currentRawFrame + this.firstFrame < init) {
            pendingFrame = init;
        } else if (this.currentRawFrame + this.firstFrame > end) {
            pendingFrame = end - init;
        }
    }

    this.firstFrame = init;
    this.totalFrames = end - init;
    if(pendingFrame !== -1) {
        this.goToAndStop(pendingFrame,true);
    }
};

AnimationItem.prototype.playSegments = function (arr,forceFlag) {
    if(typeof arr[0] === 'object'){
        var i, len = arr.length;
        for(i=0;i<len;i+=1){
            this.segments.push(arr[i]);
        }
    }else{
        this.segments.push(arr);
    }
    if(forceFlag){
        this.checkSegments(0);
    }
    if(this.isPaused){
        this.play();
    }
};

AnimationItem.prototype.resetSegments = function (forceFlag) {
    this.segments.length = 0;
    this.segments.push([this.animationData.ip,this.animationData.op]);
    //this.segments.push([this.animationData.ip*this.frameRate,Math.floor(this.animationData.op - this.animationData.ip+this.animationData.ip*this.frameRate)]);
    if(forceFlag){
        this.checkSegments(0);
    }
};
AnimationItem.prototype.checkSegments = function(offset){
    if(this.segments.length) {
        //console.log(this.currentRawFrame % lastFrame)
        this.adjustSegment(this.segments.shift(), offset);
        return true;
    }
    return false;
};

AnimationItem.prototype.remove = function (name) {
    if(name && this.name != name){
        return;
    }
    this.renderer.destroy();
};

AnimationItem.prototype.destroy = function (name) {
    if((name && this.name != name) || (this.renderer && this.renderer.destroyed)){
        return;
    }
    this.renderer.destroy();
    this.trigger('destroy');
    this._cbs = null;
    this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null;
    this.renderer = null;
};

AnimationItem.prototype.setCurrentRawFrameValue = function(value){
    this.currentRawFrame = value;
    this.gotoFrame();
};

AnimationItem.prototype.setSpeed = function (val) {
    this.playSpeed = val;
    this.updaFrameModifier();
};

AnimationItem.prototype.setDirection = function (val) {
    this.playDirection = val < 0 ? -1 : 1;
    this.updaFrameModifier();
};

AnimationItem.prototype.updaFrameModifier = function () {
    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
};

AnimationItem.prototype.getPath = function () {
    return this.path;
};

AnimationItem.prototype.getAssetsPath = function (assetData) {
    var path = '';
    if(this.assetsPath){
        var imagePath = assetData.p;
        if(imagePath.indexOf('images/') !== -1){
            imagePath = imagePath.split('/')[1];
        }
        path = this.assetsPath + imagePath;
    } else {
        path = this.path;
        path += assetData.u ? assetData.u : '';
        path += assetData.p;
    }
    return path;
};

AnimationItem.prototype.getAssetData = function (id) {
    var i = 0, len = this.assets.length;
    while (i < len) {
        if(id == this.assets[i].id){
            return this.assets[i];
        }
        i += 1;
    }
};

AnimationItem.prototype.hide = function () {
    this.renderer.hide();
};

AnimationItem.prototype.show = function () {
    this.renderer.show();
};

AnimationItem.prototype.getAssets = function () {
    return this.assets;
};

AnimationItem.prototype.trigger = function(name){
    if(this._cbs && this._cbs[name]){
        switch(name){
            case 'enterFrame':
                this.triggerEvent(name,new BMEnterFrameEvent(name,this.currentFrame,this.totalFrames,this.frameMult));
                break;
            case 'loopComplete':
                this.triggerEvent(name,new BMCompleteLoopEvent(name,this.loop,this.playCount,this.frameMult));
                break;
            case 'complete':
                this.triggerEvent(name,new BMCompleteEvent(name,this.frameMult));
                break;
            case 'segmentStart':
                this.triggerEvent(name,new BMSegmentStartEvent(name,this.firstFrame,this.totalFrames));
                break;
            case 'destroy':
                this.triggerEvent(name,new BMDestroyEvent(name,this));
                break;
            default:
                this.triggerEvent(name);
        }
    }
    if(name === 'enterFrame' && this.onEnterFrame){
        this.onEnterFrame.call(this,new BMEnterFrameEvent(name,this.currentFrame,this.totalFrames,this.frameMult));
    }
    if(name === 'loopComplete' && this.onLoopComplete){
        this.onLoopComplete.call(this,new BMCompleteLoopEvent(name,this.loop,this.playCount,this.frameMult));
    }
    if(name === 'complete' && this.onComplete){
        this.onComplete.call(this,new BMCompleteEvent(name,this.frameMult));
    }
    if(name === 'segmentStart' && this.onSegmentStart){
        this.onSegmentStart.call(this,new BMSegmentStartEvent(name,this.firstFrame,this.totalFrames));
    }
    if(name === 'destroy' && this.onDestroy){
        this.onDestroy.call(this,new BMDestroyEvent(name,this));
    }
};
function CanvasRenderer(animationItem, config){
    this.animationItem = animationItem;
    this.renderConfig = {
        clearCanvas: (config && config.clearCanvas !== undefined) ? config.clearCanvas : true,
        context: (config && config.context) || null,
        progressiveLoad: (config && config.progressiveLoad) || false,
        preserveAspectRatio: (config && config.preserveAspectRatio) || 'xMidYMid meet',
        className: (config && config.className) || ''
    };
    this.renderConfig.dpr = (config && config.dpr) || 1;
    if (this.animationItem.wrapper) {
        this.renderConfig.dpr = (config && config.dpr) || window.devicePixelRatio || 1;
    }
    this.renderedFrame = -1;
    this.globalData = {
        frameNum: -1,
        _mdf: false,
        renderConfig: this.renderConfig
    };
    var i, len = 15;
    this.contextData = new CVContextData();
    this.elements = [];
    this.pendingElements = [];
    this.transformMat = new Matrix();
    this.completeLayers = false;
}
extendPrototype([BaseRenderer],CanvasRenderer);

CanvasRenderer.prototype.createShape = function (data) {
    return new CVShapeElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createText = function (data) {
    return new CVTextElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createImage = function (data) {
    return new CVImageElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createComp = function (data) {
    return new CVCompElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createSolid = function (data) {
    return new CVSolidElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull;

CanvasRenderer.prototype.ctxTransform = function(props){
    if(props[0] === 1 && props[1] === 0 && props[4] === 0 && props[5] === 1 && props[12] === 0 && props[13] === 0){
        return;
    }
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.transform(props[0],props[1],props[4],props[5],props[12],props[13]);
        return;
    }
    this.transformMat.cloneFromProps(props);
    var cProps = this.contextData.cTr.props;
    this.transformMat.transform(cProps[0],cProps[1],cProps[2],cProps[3],cProps[4],cProps[5],cProps[6],cProps[7],cProps[8],cProps[9],cProps[10],cProps[11],cProps[12],cProps[13],cProps[14],cProps[15]);
    //this.contextData.cTr.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);
    this.contextData.cTr.cloneFromProps(this.transformMat.props);
    var trProps = this.contextData.cTr.props;
    this.canvasContext.setTransform(trProps[0],trProps[1],trProps[4],trProps[5],trProps[12],trProps[13]);
};

CanvasRenderer.prototype.ctxOpacity = function(op){
    /*if(op === 1){
        return;
    }*/
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.globalAlpha *= op < 0 ? 0 : op;
        return;
    }
    this.contextData.cO *= op < 0 ? 0 : op;
    this.canvasContext.globalAlpha = this.contextData.cO;
};

CanvasRenderer.prototype.reset = function(){
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.restore();
        return;
    }
    this.contextData.reset();
};

CanvasRenderer.prototype.save = function(actionFlag){
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.save();
        return;
    }
    if(actionFlag){
        this.canvasContext.save();
    }
    var props = this.contextData.cTr.props;
    if(this.contextData._length <= this.contextData.cArrPos) {
        this.contextData.duplicate();
    }
    var i, arr = this.contextData.saved[this.contextData.cArrPos];
    for (i = 0; i < 16; i += 1) {
        arr[i] = props[i];
    }
    this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO;
    this.contextData.cArrPos += 1;
};

CanvasRenderer.prototype.restore = function(actionFlag){
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.restore();
        return;
    }
    if(actionFlag){
        this.canvasContext.restore();
        this.globalData.blendMode = 'source-over';
    }
    this.contextData.cArrPos -= 1;
    var popped = this.contextData.saved[this.contextData.cArrPos];
    var i,arr = this.contextData.cTr.props;
    for(i=0;i<16;i+=1){
        arr[i] = popped[i];
    }
    this.canvasContext.setTransform(popped[0],popped[1],popped[4],popped[5],popped[12],popped[13]);
    popped = this.contextData.savedOp[this.contextData.cArrPos];
    this.contextData.cO = popped;
    this.canvasContext.globalAlpha = popped;
};

CanvasRenderer.prototype.configAnimation = function(animData){
    if(this.animationItem.wrapper){
        this.animationItem.container = createTag('canvas');
        this.animationItem.container.style.width = '100%';
        this.animationItem.container.style.height = '100%';
        //this.animationItem.container.style.transform = 'translate3d(0,0,0)';
        //this.animationItem.container.style.webkitTransform = 'translate3d(0,0,0)';
        this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style['-webkit-transform'] = "0px 0px 0px";
        this.animationItem.wrapper.appendChild(this.animationItem.container);
        this.canvasContext = this.animationItem.container.getContext('2d');
        if(this.renderConfig.className) {
            this.animationItem.container.setAttribute('class', this.renderConfig.className);
        }
    }else{
        this.canvasContext = this.renderConfig.context;
    }
    this.data = animData;
    this.globalData.canvasContext = this.canvasContext;
    this.globalData.renderer = this;
    this.globalData.isDashed = false;
    this.globalData.totalFrames = Math.floor(animData.tf);
    this.globalData.compWidth = animData.w;
    this.globalData.compHeight = animData.h;
    this.globalData.frameRate = animData.fr;
    this.globalData.frameId = 0;
    this.globalData.compSize = {
        w: animData.w,
        h: animData.h
    };
    this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
    this.layers = animData.layers;
    this.transformCanvas = {
        w: animData.w,
        h:animData.h,
        sx:0,
        sy:0,
        tx:0,
        ty:0
    };
    this.globalData.fontManager = new FontManager();
    this.globalData.fontManager.addChars(animData.chars);
    this.globalData.fontManager.addFonts(animData.fonts,document.body);
    this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
    this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
    this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem);
    this.globalData.addPendingElement = this.animationItem.addPendingElement.bind(this.animationItem);
    this.globalData.transformCanvas = this.transformCanvas;
    this.elements = createSizedArray(animData.layers.length);

    this.updateContainerSize();
};

CanvasRenderer.prototype.updateContainerSize = function () {
    this.reset();
    var elementWidth,elementHeight;
    if(this.animationItem.wrapper && this.animationItem.container){
        elementWidth = this.animationItem.wrapper.offsetWidth;
        elementHeight = this.animationItem.wrapper.offsetHeight;
        this.animationItem.container.setAttribute('width',elementWidth * this.renderConfig.dpr );
        this.animationItem.container.setAttribute('height',elementHeight * this.renderConfig.dpr);
    }else{
        elementWidth = this.canvasContext.canvas.width * this.renderConfig.dpr;
        elementHeight = this.canvasContext.canvas.height * this.renderConfig.dpr;
    }
    var elementRel,animationRel;
    if(this.renderConfig.preserveAspectRatio.indexOf('meet') !== -1 || this.renderConfig.preserveAspectRatio.indexOf('slice') !== -1){
        var par = this.renderConfig.preserveAspectRatio.split(' ');
        var fillType = par[1] || 'meet';
        var pos = par[0] || 'xMidYMid';
        var xPos = pos.substr(0,4);
        var yPos = pos.substr(4);
        elementRel = elementWidth/elementHeight;
        animationRel = this.transformCanvas.w/this.transformCanvas.h;
        if(animationRel>elementRel && fillType === 'meet' || animationRel<elementRel && fillType === 'slice'){
            this.transformCanvas.sx = elementWidth/(this.transformCanvas.w/this.renderConfig.dpr);
            this.transformCanvas.sy = elementWidth/(this.transformCanvas.w/this.renderConfig.dpr);
        }else{
            this.transformCanvas.sx = elementHeight/(this.transformCanvas.h / this.renderConfig.dpr);
            this.transformCanvas.sy = elementHeight/(this.transformCanvas.h / this.renderConfig.dpr);
        }

        if(xPos === 'xMid' && ((animationRel<elementRel && fillType==='meet') || (animationRel>elementRel && fillType === 'slice'))){
            this.transformCanvas.tx = (elementWidth-this.transformCanvas.w*(elementHeight/this.transformCanvas.h))/2*this.renderConfig.dpr;
        } else if(xPos === 'xMax' && ((animationRel<elementRel && fillType==='meet') || (animationRel>elementRel && fillType === 'slice'))){
            this.transformCanvas.tx = (elementWidth-this.transformCanvas.w*(elementHeight/this.transformCanvas.h))*this.renderConfig.dpr;
        } else {
            this.transformCanvas.tx = 0;
        }
        if(yPos === 'YMid' && ((animationRel>elementRel && fillType==='meet') || (animationRel<elementRel && fillType === 'slice'))){
            this.transformCanvas.ty = ((elementHeight-this.transformCanvas.h*(elementWidth/this.transformCanvas.w))/2)*this.renderConfig.dpr;
        } else if(yPos === 'YMax' && ((animationRel>elementRel && fillType==='meet') || (animationRel<elementRel && fillType === 'slice'))){
            this.transformCanvas.ty = ((elementHeight-this.transformCanvas.h*(elementWidth/this.transformCanvas.w)))*this.renderConfig.dpr;
        } else {
            this.transformCanvas.ty = 0;
        }

    }else if(this.renderConfig.preserveAspectRatio == 'none'){
        this.transformCanvas.sx = elementWidth/(this.transformCanvas.w/this.renderConfig.dpr);
        this.transformCanvas.sy = elementHeight/(this.transformCanvas.h/this.renderConfig.dpr);
        this.transformCanvas.tx = 0;
        this.transformCanvas.ty = 0;
    }else{
        this.transformCanvas.sx = this.renderConfig.dpr;
        this.transformCanvas.sy = this.renderConfig.dpr;
        this.transformCanvas.tx = 0;
        this.transformCanvas.ty = 0;
    }
    this.transformCanvas.props = [this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1];
    /*var i, len = this.elements.length;
    for(i=0;i<len;i+=1){
        if(this.elements[i] && this.elements[i].data.ty === 0){
            this.elements[i].resize(this.globalData.transformCanvas);
        }
    }*/
    this.ctxTransform(this.transformCanvas.props);
    this.canvasContext.beginPath();
    this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h);
    this.canvasContext.closePath();
    this.canvasContext.clip();
};

CanvasRenderer.prototype.destroy = function () {
    if(this.renderConfig.clearCanvas) {
        this.animationItem.wrapper.innerHTML = '';
    }
    var i, len = this.layers ? this.layers.length : 0;
    for (i = len - 1; i >= 0; i-=1) {
        if(this.elements[i]) {
            this.elements[i].destroy();
        }
    }
    this.elements.length = 0;
    this.globalData.canvasContext = null;
    this.animationItem.container = null;
    this.destroyed = true;
};

CanvasRenderer.prototype.renderFrame = function(num){
    if((this.renderedFrame == num && this.renderConfig.clearCanvas === true) || this.destroyed || num === -1){
        return;
    }
    this.renderedFrame = num;
    this.globalData.frameNum = num - this.animationItem._isFirstFrame;
    this.globalData.frameId += 1;
    this.globalData._mdf = false;
    this.globalData.projectInterface.currentFrame = num;

     // console.log('--------');
     // console.log('NEW: ',num);
    var i, len = this.layers.length;
    if(!this.completeLayers){
        this.checkLayers(num);
    }

    for (i = 0; i < len; i++) {
        if(this.completeLayers || this.elements[i]){
            this.elements[i].prepareFrame(num - this.layers[i].st);
        }
    }
    if(this.globalData._mdf) {
        if(this.renderConfig.clearCanvas === true){
            this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
        }else{
            this.save();
        }
        for (i = len - 1; i >= 0; i-=1) {
            if(this.completeLayers || this.elements[i]){
                this.elements[i].renderFrame();
            }
        }
        if(this.renderConfig.clearCanvas !== true){
            this.restore();
        }
    }
};

CanvasRenderer.prototype.buildItem = function(pos){
    var elements = this.elements;
    if(elements[pos] || this.layers[pos].ty == 99){
        return;
    }
    var element = this.createItem(this.layers[pos], this,this.globalData);
    elements[pos] = element;
    element.initExpressions();
    /*if(this.layers[pos].ty === 0){
        element.resize(this.globalData.transformCanvas);
    }*/
};

CanvasRenderer.prototype.checkPendingElements  = function(){
    while(this.pendingElements.length){
        var element = this.pendingElements.pop();
        element.checkParenting();
    }
};

CanvasRenderer.prototype.hide = function(){
    this.animationItem.container.style.display = 'none';
};

CanvasRenderer.prototype.show = function(){
    this.animationItem.container.style.display = 'block';
};

function HybridRenderer(animationItem, config){
    this.animationItem = animationItem;
    this.layers = null;
    this.renderedFrame = -1;
    this.renderConfig = {
        className: (config && config.className) || '',
        hideOnTransparent: (config && config.hideOnTransparent === false) ? false : true
    };
    this.globalData = {
        _mdf: false,
        frameNum: -1,
        renderConfig: this.renderConfig
    };
    this.pendingElements = [];
    this.elements = [];
    this.threeDElements = [];
    this.destroyed = false;
    this.camera = null;
    this.supports3d = true;

}

extendPrototype([BaseRenderer],HybridRenderer);

HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem;

HybridRenderer.prototype.checkPendingElements  = function(){
    while(this.pendingElements.length){
        var element = this.pendingElements.pop();
        element.checkParenting();
    }
};

HybridRenderer.prototype.appendElementInPos = function(element, pos){
    var newDOMElement = element.getBaseElement();
    if(!newDOMElement){
        return;
    }
    var layer = this.layers[pos];
    if(!layer.ddd || !this.supports3d){
        var i = 0;
        var nextDOMElement, nextLayer, tmpDOMElement;
        while(i<pos){
            if(this.elements[i] && this.elements[i]!== true && this.elements[i].getBaseElement){
                nextLayer = this.elements[i];
                tmpDOMElement = this.layers[i].ddd ? this.getThreeDContainerByPos(i) : nextLayer.getBaseElement();
                nextDOMElement = tmpDOMElement || nextDOMElement;
            }
            i += 1;
        }
        if(nextDOMElement){
            if(!layer.ddd || !this.supports3d){
                this.layerElement.insertBefore(newDOMElement, nextDOMElement);
            }
        } else {
            if(!layer.ddd || !this.supports3d){
                this.layerElement.appendChild(newDOMElement);
            }
        }
    } else {
        this.addTo3dContainer(newDOMElement,pos);
    }
};

HybridRenderer.prototype.createShape = function (data) {
    if(!this.supports3d){
        return new SVGShapeElement(data, this.globalData, this);
    }
    return new HShapeElement(data, this.globalData, this);
};

HybridRenderer.prototype.createText = function (data) {
    if(!this.supports3d){
        return new SVGTextElement(data, this.globalData, this);
    }
    return new HTextElement(data, this.globalData, this);
};

HybridRenderer.prototype.createCamera = function (data) {
    this.camera = new HCameraElement(data, this.globalData, this);
    return this.camera;
};

HybridRenderer.prototype.createImage = function (data) {
    if(!this.supports3d){
        return new IImageElement(data, this.globalData, this);
    }
    return new HImageElement(data, this.globalData, this);
};

HybridRenderer.prototype.createComp = function (data) {
    if(!this.supports3d){
        return new ICompElement(data, this.globalData, this);
    }
    return new HCompElement(data, this.globalData, this);

};

HybridRenderer.prototype.createSolid = function (data) {
    if(!this.supports3d){
        return new ISolidElement(data, this.globalData, this);
    }
    return new HSolidElement(data, this.globalData, this);
};

HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull;

HybridRenderer.prototype.getThreeDContainerByPos = function(pos){
    var i = 0, len = this.threeDElements.length;
    while(i<len) {
        if(this.threeDElements[i].startPos <= pos && this.threeDElements[i].endPos >= pos) {
            return this.threeDElements[i].perspectiveElem;
        }
        i += 1;
    }
};

HybridRenderer.prototype.createThreeDContainer = function(pos){
    var perspectiveElem = createTag('div');
    styleDiv(perspectiveElem);
    perspectiveElem.style.width = this.globalData.compSize.w+'px';
    perspectiveElem.style.height = this.globalData.compSize.h+'px';
    perspectiveElem.style.transformOrigin = perspectiveElem.style.mozTransformOrigin = perspectiveElem.style.webkitTransformOrigin = "50% 50%";
    var container = createTag('div');
    styleDiv(container);
    container.style.transform = container.style.webkitTransform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
    perspectiveElem.appendChild(container);
    this.resizerElem.appendChild(perspectiveElem);
    var threeDContainerData = {
        container:container,
        perspectiveElem:perspectiveElem,
        startPos: pos,
        endPos: pos
    };
    this.threeDElements.push(threeDContainerData);
    return threeDContainerData;
};

HybridRenderer.prototype.build3dContainers = function(){
    var i, len = this.layers.length;
    var lastThreeDContainerData;
    for(i=0;i<len;i+=1){
        if(this.layers[i].ddd){
            if(!lastThreeDContainerData){
                lastThreeDContainerData = this.createThreeDContainer(i);
            }
            lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos,i);
        } else {
            lastThreeDContainerData = null;
        }
    }
};

HybridRenderer.prototype.addTo3dContainer = function(elem,pos){
    var i = 0, len = this.threeDElements.length;
    while(i<len){
        if(pos <= this.threeDElements[i].endPos){
            var j = this.threeDElements[i].startPos;
            var nextElement;
            while(j<pos){
                if(this.elements[j] && this.elements[j].getBaseElement){
                    nextElement = this.elements[j].getBaseElement();
                }
                j += 1;
            }
            if(nextElement){
                this.threeDElements[i].container.insertBefore(elem, nextElement);
            } else {
                this.threeDElements[i].container.appendChild(elem);
            }
            break;
        }
        i += 1;
    }
};

HybridRenderer.prototype.configAnimation = function(animData){
    var resizerElem = createTag('div');
    var wrapper = this.animationItem.wrapper;
    resizerElem.style.width = animData.w+'px';
    resizerElem.style.height = animData.h+'px';
    this.resizerElem = resizerElem;
    styleDiv(resizerElem);
    resizerElem.style.transformStyle = resizerElem.style.webkitTransformStyle = resizerElem.style.mozTransformStyle = "flat";
    if(this.renderConfig.className) {
      wrapper.setAttribute('class', this.renderConfig.className);
    }
    wrapper.appendChild(resizerElem);

    resizerElem.style.overflow = 'hidden';
    var svg = createNS('svg');
    svg.setAttribute('width','1');
    svg.setAttribute('height','1');
    styleDiv(svg);
    this.resizerElem.appendChild(svg);
    var defs = createNS('defs');
    svg.appendChild(defs);
    this.globalData.defs = defs;
    this.data = animData;
    //Mask animation
    this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
    this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
    this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem);
    this.globalData.frameId = 0;
    this.globalData.compSize = {
        w: animData.w,
        h: animData.h
    };
    this.globalData.frameRate = animData.fr;
    this.layers = animData.layers;
    this.globalData.fontManager = new FontManager();
    this.globalData.fontManager.addChars(animData.chars);
    this.globalData.fontManager.addFonts(animData.fonts,svg);
    this.layerElement = this.resizerElem;
    this.build3dContainers();
    this.updateContainerSize();
};

HybridRenderer.prototype.destroy = function () {
    this.animationItem.wrapper.innerHTML = '';
    this.animationItem.container = null;
    this.globalData.defs = null;
    var i, len = this.layers ? this.layers.length : 0;
    for (i = 0; i < len; i++) {
        this.elements[i].destroy();
    }
    this.elements.length = 0;
    this.destroyed = true;
    this.animationItem = null;
};

HybridRenderer.prototype.updateContainerSize = function () {
    var elementWidth = this.animationItem.wrapper.offsetWidth;
    var elementHeight = this.animationItem.wrapper.offsetHeight;
    var elementRel = elementWidth/elementHeight;
    var animationRel = this.globalData.compSize.w/this.globalData.compSize.h;
    var sx,sy,tx,ty;
    if(animationRel>elementRel){
        sx = elementWidth/(this.globalData.compSize.w);
        sy = elementWidth/(this.globalData.compSize.w);
        tx = 0;
        ty = ((elementHeight-this.globalData.compSize.h*(elementWidth/this.globalData.compSize.w))/2);
    }else{
        sx = elementHeight/(this.globalData.compSize.h);
        sy = elementHeight/(this.globalData.compSize.h);
        tx = (elementWidth-this.globalData.compSize.w*(elementHeight/this.globalData.compSize.h))/2;
        ty = 0;
    }
    this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = 'matrix3d(' + sx + ',0,0,0,0,'+sy+',0,0,0,0,1,0,'+tx+','+ty+',0,1)';
};

HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame;

HybridRenderer.prototype.hide = function(){
    this.resizerElem.style.display = 'none';
};

HybridRenderer.prototype.show = function(){
    this.resizerElem.style.display = 'block';
};

HybridRenderer.prototype.initItems = function(){
    this.buildAllItems();
    if(this.camera){
        this.camera.setup();
    } else {
        var cWidth = this.globalData.compSize.w;
        var cHeight = this.globalData.compSize.h;
        var i, len = this.threeDElements.length;
        for(i=0;i<len;i+=1){
            this.threeDElements[i].perspectiveElem.style.perspective = this.threeDElements[i].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(cWidth,2) + Math.pow(cHeight,2)) + 'px';
        }
    }
};

HybridRenderer.prototype.searchExtraCompositions = function(assets){
    var i, len = assets.length;
    var floatingContainer = createTag('div');
    for(i=0;i<len;i+=1){
        if(assets[i].xt){
            var comp = this.createComp(assets[i],floatingContainer,this.globalData.comp,null);
            comp.initExpressions();
            this.globalData.projectInterface.registerComposition(comp);
        }
    }
};

function CVContextData() {
	this.saved = [];
    this.cArrPos = 0;
    this.cTr = new Matrix();
    this.cO = 1;
    var i, len = 15;
    this.savedOp = createTypedArray('float32', len);
    for(i=0;i<len;i+=1){
        this.saved[i] = createTypedArray('float32', 16);
    }
    this._length = len;
}

CVContextData.prototype.duplicate = function() {
	var newLength = this._length * 2;
	var currentSavedOp = this.savedOp;
    this.savedOp = createTypedArray('float32', newLength);
    this.savedOp.set(currentSavedOp);
    var i = 0;
    for(i = this._length; i < newLength; i += 1) {
        this.saved[i] = createTypedArray('float32', 16);
    }
    this._length = newLength;
};

CVContextData.prototype.reset = function() {
	this.cArrPos = 0;
	this.cTr.reset();
    this.cO = 1;
};
function CVBaseElement(){
}

CVBaseElement.prototype = {
    createElements: function(){},
    initRendererElement: function(){},
    createContainerElements: function(){
        this.canvasContext = this.globalData.canvasContext;
        this.renderableEffectsManager = new CVEffects(this);
    },
    createContent: function(){},
    setBlendMode: function(){
        var globalData = this.globalData;
        if(globalData.blendMode !== this.data.bm) {
            globalData.blendMode = this.data.bm;
            var blendModeValue = this.getBlendMode();
            globalData.canvasContext.globalCompositeOperation = blendModeValue;
        }
    },
    addMasks: function(){
        this.maskManager = new CVMaskElement(this.data, this, this.dynamicProperties);
    },
    hideElement: function(){
        if (!this.hidden && (!this.isInRange || this.isTransparent)) {
            this.hidden = true;
        }
    },
    showElement: function(){
        if (this.isInRange && !this.isTransparent){
            this.hidden = false;
            this._isFirstFrame = true;
            this.maskManager._isFirstFrame = true;
        }
    },
    renderFrame: function() {
        if (this.hidden) {
            return;
        }
        this.renderTransform();
        this.renderRenderable();
        this.setBlendMode();
        this.globalData.renderer.save();
        this.globalData.renderer.ctxTransform(this.finalTransform.mat.props);
        this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v);
        this.renderInnerContent();
        this.globalData.renderer.restore();
        if(this.maskManager.hasMasks) {
            this.globalData.renderer.restore(true);
        }
        if (this._isFirstFrame) {
            this._isFirstFrame = false;
        }
    },
    destroy: function(){
        this.canvasContext = null;
        this.data = null;
        this.globalData = null;
        this.maskManager.destroy();
    },
    mHelper: new Matrix()
};
CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement;
CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;

function CVImageElement(data, globalData, comp){
    this.failed = false;
    this.img = new Image();
    this.assetData = globalData.getAssetData(data.refId);
    this.initElement(data,globalData,comp);
    this.globalData.addPendingElement();
}
extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement);

CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement;
CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

CVImageElement.prototype.imageLoaded = function() {
    this.globalData.elementLoaded();
    if(this.assetData.w !== this.img.width || this.assetData.h !== this.img.height){
        var canvas = createTag('canvas');
        canvas.width = this.assetData.w;
        canvas.height = this.assetData.h;
        var ctx = canvas.getContext('2d');

        var imgW = this.img.width;
        var imgH = this.img.height;
        var imgRel = imgW / imgH;
        var canvasRel = this.assetData.w/this.assetData.h;
        var widthCrop, heightCrop;
        if(imgRel>canvasRel){
            heightCrop = imgH;
            widthCrop = heightCrop*canvasRel;
        } else {
            widthCrop = imgW;
            heightCrop = widthCrop/canvasRel;
        }
        ctx.drawImage(this.img,(imgW-widthCrop)/2,(imgH-heightCrop)/2,widthCrop,heightCrop,0,0,this.assetData.w,this.assetData.h);
        this.img = canvas;
    }
};

CVImageElement.prototype.imageFailed = function() {
    this.failed = true;
    this.globalData.elementLoaded();
};

CVImageElement.prototype.createContent = function(){
    var img = this.img;
    img.addEventListener('load', this.imageLoaded.bind(this), false);
    img.addEventListener('error', this.imageFailed.bind(this), false);
    var assetPath = this.globalData.getAssetsPath(this.assetData);
    img.src = assetPath;

};

CVImageElement.prototype.renderInnerContent = function(parentMatrix){
    if (this.failed) {
        return;
    }
    this.canvasContext.drawImage(this.img, 0, 0);
};

CVImageElement.prototype.destroy = function(){
    this.img = null;
};
function CVCompElement(data, globalData, comp) {
    this.completeLayers = false;
    this.layers = data.layers;
    this.pendingElements = [];
    this.elements = createSizedArray(this.layers.length);
    this.initElement(data, globalData, comp);
    this.tm = data.tm ? PropertyFactory.getProp(this,data.tm,0,globalData.frameRate,this.dynamicProperties) : {_placeholder:true};
}

extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement);

CVCompElement.prototype.renderInnerContent = function() {
    var i,len = this.layers.length;
    for( i = len - 1; i >= 0; i -= 1 ){
        if(this.completeLayers || this.elements[i]){
            this.elements[i].renderFrame();
        }
    }
};

CVCompElement.prototype.destroy = function(){
    var i,len = this.layers.length;
    for( i = len - 1; i >= 0; i -= 1 ){
        if(this.elements[i]) {
            this.elements[i].destroy();
        }
    }
    this.layers = null;
    this.elements = null;
};

function CVMaskElement(data,element, dynamicProperties){
    this.data = data;
    this.element = element;
    this.masksProperties = this.data.masksProperties || [];
    this.viewData = createSizedArray(this.masksProperties.length);
    var i, len = this.masksProperties.length, hasMasks = false;
    for (i = 0; i < len; i++) {
        if(this.masksProperties[i].mode !== 'n'){
            hasMasks = true;
        }
        this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[i],3,dynamicProperties,null);
    }
    this.hasMasks = hasMasks;
}

CVMaskElement.prototype.renderFrame = function (transform) {
    if(!this.hasMasks){
        return;
    }
    var ctx = this.element.canvasContext;
    var i, len = this.masksProperties.length;
    var pt,pts,data;
    ctx.beginPath();
    for (i = 0; i < len; i++) {
        if(this.masksProperties[i].mode !== 'n'){
            if (this.masksProperties[i].inv) {
                ctx.moveTo(0, 0);
                ctx.lineTo(this.element.globalData.compWidth, 0);
                ctx.lineTo(this.element.globalData.compWidth, this.element.globalData.compHeight);
                ctx.lineTo(0, this.element.globalData.compHeight);
                ctx.lineTo(0, 0);
            }
            data = this.viewData[i].v;
            pt = transform.applyToPointArray(data.v[0][0],data.v[0][1],0);
            ctx.moveTo(pt[0], pt[1]);
            var j, jLen = data._length;
            for (j = 1; j < jLen; j++) {
                pts = transform.applyToTriplePoints(data.o[j - 1], data.i[j], data.v[j]);
                ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
            }
            pts = transform.applyToTriplePoints(data.o[j - 1], data.i[0], data.v[0]);
            ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
        }
    }
    this.element.globalData.renderer.save(true);
    ctx.clip();
};

CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty;

CVMaskElement.prototype.destroy = function(){
    this.element = null;
};
function CVShapeElement(data, globalData, comp) {
    this.shapes = [];
    this.shapesData = data.shapes;
    this.stylesList = [];
    this.itemsData = [];
    this.prevViewData = [];
    this.shapeModifiers = [];
    this.processedElements = [];
    this.initElement(data, globalData, comp);
}

extendPrototype([BaseElement,TransformElement,CVBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableElement], CVShapeElement);

CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement;

CVShapeElement.prototype.transformHelper = {opacity:1,mat:new Matrix(),_matMdf:false,_opMdf:false};

CVShapeElement.prototype.dashResetter = [];

CVShapeElement.prototype.createContent = function(){
    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.dynamicProperties, true);
};

CVShapeElement.prototype.createStyleElement = function(data, dynamicProperties){
    var styleElem = {
        data: data,
        type: data.ty,
        elements: []
    };
    var elementData = {};
    if(data.ty == 'fl' || data.ty == 'st'){
        elementData.c = PropertyFactory.getProp(this,data.c,1,255,dynamicProperties);
        if(!elementData.c.k){
            styleElem.co = 'rgb('+bm_floor(elementData.c.v[0])+','+bm_floor(elementData.c.v[1])+','+bm_floor(elementData.c.v[2])+')';
        }
    }
    elementData.o = PropertyFactory.getProp(this,data.o,0,0.01,dynamicProperties);
    if(data.ty == 'st') {
        styleElem.lc = this.lcEnum[data.lc] || 'round';
        styleElem.lj = this.ljEnum[data.lj] || 'round';
        if(data.lj == 1) {
            styleElem.ml = data.ml;
        }
        elementData.w = PropertyFactory.getProp(this,data.w,0,null,dynamicProperties);
        if(!elementData.w.k){
            styleElem.wi = elementData.w.v;
        }
        if(data.d){
            var d = new DashProperty(this,data.d,'canvas',dynamicProperties);
            elementData.d = d;
            if(!elementData.d.k){
                styleElem.da = elementData.d.dashArray;
                styleElem.do = elementData.d.dashoffset[0];
            }
        }

    } else {

        styleElem.r = data.r === 2 ? 'evenodd' : 'nonzero';
    }
    this.stylesList.push(styleElem);
    elementData.style = styleElem;
    return elementData;
};

CVShapeElement.prototype.createGroupElement = function(data) {
    var elementData = {
        it: [],
        prevViewData: []
    };
    return elementData;
};

CVShapeElement.prototype.createTransformElement = function(data, dynamicProperties) {
    var elementData = {
        transform : {
            mat: new Matrix(),
            opacity: 1,
            _matMdf:false,
            _opMdf:false,
            op: PropertyFactory.getProp(this,data.o,0,0.01,dynamicProperties),
            //mProps: PropertyFactory.getProp(this,data,2,null,dynamicProperties)
            mProps: TransformPropertyFactory.getTransformProperty(this,data,dynamicProperties)
        },
        elements: []
    };
    return elementData;
};

CVShapeElement.prototype.createShapeElement = function(data, dynamicProperties) {
    var elementData = {
        nodes:[],
        trNodes:[],
        tr:[0,0,0,0,0,0]
    };
    var ty = 4;
    if(data.ty == 'rc'){
        ty = 5;
    }else if(data.ty == 'el'){
        ty = 6;
    }else if(data.ty == 'sr'){
        ty = 7;
    }
    elementData.sh = ShapePropertyFactory.getShapeProp(this,data,ty,dynamicProperties);
    this.shapes.push(elementData.sh);
    this.addShapeToModifiers(elementData);
    var j, jLen = this.stylesList.length;
    var hasStrokes = false, hasFills = false;
    for(j=0;j<jLen;j+=1){
        if(!this.stylesList[j].closed){
            this.stylesList[j].elements.push(elementData);
            if(this.stylesList[j].type === 'st'){
                hasStrokes = true;
            }else{
                hasFills = true;
            }
        }
    }
    elementData.st = hasStrokes;
    elementData.fl = hasFills;
    return elementData;
};

CVShapeElement.prototype.reloadShapes = function(){
    this._isFirstFrame = true;
    var i, len = this.itemsData.length;
    for(i=0;i<len;i+=1){
        this.prevViewData[i] = this.itemsData[i];
    }
    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.dynamicProperties, true);
    len = this.dynamicProperties.length;
    for(i=0;i<len;i+=1){
        this.dynamicProperties[i].getValue();
    }
    this.renderModifiers();
};

CVShapeElement.prototype.searchShapes = function(arr,itemsData, prevViewData,dynamicProperties, render){
    var i, len = arr.length - 1;
    var j, jLen;
    var ownArrays = [], ownModifiers = [], processedPos, modifier;
    for(i=len;i>=0;i-=1){
        processedPos = this.searchProcessedElement(arr[i]);
        if(!processedPos){
            arr[i]._render = render;
        } else {
            itemsData[i] = prevViewData[processedPos - 1];
        }
        if(arr[i].ty == 'fl' || arr[i].ty == 'st'){
            if(!processedPos){
                itemsData[i] = this.createStyleElement(arr[i], dynamicProperties);
            } else {
                itemsData[i].style.closed = false;
            }
            
            ownArrays.push(itemsData[i].style);
        }else if(arr[i].ty == 'gr'){
            if(!processedPos){
                itemsData[i] = this.createGroupElement(arr[i]);
            } else {
                jLen = itemsData[i].it.length;
                for(j=0;j<jLen;j+=1){
                    itemsData[i].prevViewData[j] = itemsData[i].it[j];
                }
            }
            this.searchShapes(arr[i].it,itemsData[i].it,itemsData[i].prevViewData,dynamicProperties, render);
        }else if(arr[i].ty == 'tr'){
            if(!processedPos){
                itemsData[i] = this.createTransformElement(arr[i], dynamicProperties);
            }
        }else if(arr[i].ty == 'sh' || arr[i].ty == 'rc' || arr[i].ty == 'el' || arr[i].ty == 'sr'){
            if(!processedPos){
                itemsData[i] = this.createShapeElement(arr[i], dynamicProperties);
            }
            
        }else if(arr[i].ty == 'tm' || arr[i].ty == 'rd'){
            if(!processedPos){
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                modifier.init(this,arr[i],dynamicProperties);
                itemsData[i] = modifier;
                this.shapeModifiers.push(modifier);
            } else {
                modifier = itemsData[i];
                modifier.closed = false;
            }
            ownModifiers.push(modifier);
        } else if(arr[i].ty == 'rp'){
            if(!processedPos){
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                itemsData[i] = modifier;
                modifier.init(this,arr,i,itemsData,dynamicProperties);
                this.shapeModifiers.push(modifier);
                render = false;
            }else{
                modifier = itemsData[i];
                modifier.closed = true;
            }
            ownModifiers.push(modifier);
        }
        this.addProcessedElement(arr[i], i + 1);
    }
    len = ownArrays.length;
    for(i=0;i<len;i+=1){
        ownArrays[i].closed = true;
    }
    len = ownModifiers.length;
    for(i=0;i<len;i+=1){
        ownModifiers[i].closed = true;
    }
};

CVShapeElement.prototype.renderInnerContent = function() {

    this.transformHelper.mat.reset();
    this.transformHelper.opacity = 1;
    this.transformHelper._matMdf = false;
    this.transformHelper._opMdf = false;
    this.renderModifiers();
    this.renderShape(this.transformHelper,this.shapesData,this.itemsData,true);
};

CVShapeElement.prototype.renderShapeTransform = function(parentTransform, groupTransform) {
    var props, groupMatrix;
    if(parentTransform._opMdf || groupTransform.op._mdf || this._isFirstFrame) {
        groupTransform.opacity = parentTransform.opacity;
        groupTransform.opacity *= groupTransform.op.v;
        groupTransform._opMdf = true;
    }
    if(parentTransform._opMdf || groupTransform.op._mdf || this._isFirstFrame) {
        groupMatrix = groupTransform.mat;
        groupMatrix.cloneFromProps(groupTransform.mProps.v.props);
        groupTransform._matMdf = true;
        props = parentTransform.mat.props;
        groupMatrix.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);
    }
};

CVShapeElement.prototype.drawLayer = function() {
    var i, len = this.stylesList.length;
    var j, jLen, k, kLen,elems,nodes, renderer = this.globalData.renderer, ctx = this.globalData.canvasContext, type, currentStyle;
    for(i=0;i<len;i+=1){
        currentStyle = this.stylesList[i];
        type = currentStyle.type;
        if((type === 'st' && currentStyle.wi === 0) || !currentStyle.data._render || currentStyle.coOp === 0){
            continue;
        }
        renderer.save();
        elems = currentStyle.elements;
        if(type === 'st'){
            ctx.strokeStyle = currentStyle.co;
            ctx.lineWidth = currentStyle.wi;
            ctx.lineCap = currentStyle.lc;
            ctx.lineJoin = currentStyle.lj;
            ctx.miterLimit = currentStyle.ml || 0;
        }else{
            ctx.fillStyle = currentStyle.co;
        }
        renderer.ctxOpacity(currentStyle.coOp);
        if(type !== 'st'){
            ctx.beginPath();
        }
        jLen = elems.length;
        for(j=0;j<jLen;j+=1){
            if(type === 'st'){
                ctx.beginPath();
                if(currentStyle.da){
                    ctx.setLineDash(currentStyle.da);
                    ctx.lineDashOffset = currentStyle.do;
                    this.globalData.isDashed = true;
                }else if(this.globalData.isDashed){
                    ctx.setLineDash(this.dashResetter);
                    this.globalData.isDashed = false;
                }
            }
            nodes = elems[j].trNodes;
            kLen = nodes.length;

            for(k=0;k<kLen;k+=1){
                if(nodes[k].t == 'm'){
                    ctx.moveTo(nodes[k].p[0],nodes[k].p[1]);
                }else if(nodes[k].t == 'c'){
                    ctx.bezierCurveTo(nodes[k].pts[0],nodes[k].pts[1],nodes[k].pts[2],nodes[k].pts[3],nodes[k].pts[4],nodes[k].pts[5]);
                }else{
                    ctx.closePath();
                }
            }
            if(type === 'st'){
                ctx.stroke();
            }
        }
        if(type !== 'st'){
            ctx.fill(currentStyle.r);
        }
        renderer.restore();
    }
};

CVShapeElement.prototype.renderShape = function(parentTransform,items,data,isMain){
    var i, len = items.length - 1;
    var groupTransform;
    groupTransform = parentTransform;
    for(i=len;i>=0;i-=1){
        if(items[i].ty == 'tr'){
            groupTransform = data[i].transform;
            this.renderShapeTransform(parentTransform, groupTransform);
        }else if(items[i].ty == 'sh' || items[i].ty == 'el' || items[i].ty == 'rc' || items[i].ty == 'sr'){
            this.renderPath(items[i],data[i],groupTransform);
        }else if(items[i].ty == 'fl'){
            this.renderFill(items[i],data[i],groupTransform);
        }else if(items[i].ty == 'st'){
            this.renderStroke(items[i],data[i],groupTransform);
        }else if(items[i].ty == 'gr'){
            this.renderShape(groupTransform,items[i].it,data[i].it);
        }else if(items[i].ty == 'tm'){
            //
        }
    }
    if(isMain){
        this.drawLayer();
    }
    
};
CVShapeElement.prototype.renderPath = function(pathData,itemData,groupTransform){
    var len, i, j,jLen;
    var redraw = groupTransform._matMdf || itemData.sh._mdf || this._isFirstFrame;
    if(redraw) {
        var paths = itemData.sh.paths, groupTransformMat = groupTransform.mat;
        jLen = pathData._render === false ? 0 : paths._length;
        var pathStringTransformed = itemData.trNodes;
        pathStringTransformed.length = 0;
        for(j=0;j<jLen;j+=1){
            var pathNodes = paths.shapes[j];
            if(pathNodes && pathNodes.v){
                len = pathNodes._length;
                for (i = 1; i < len; i += 1) {
                    if (i == 1) {
                        pathStringTransformed.push({
                            t: 'm',
                            p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
                        });
                    }
                    pathStringTransformed.push({
                        t: 'c',
                        pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[i], pathNodes.v[i])
                    });
                }
                if (len == 1) {
                    pathStringTransformed.push({
                        t: 'm',
                        p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
                    });
                }
                if (pathNodes.c && len) {
                    pathStringTransformed.push({
                        t: 'c',
                        pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[0], pathNodes.v[0])
                    });
                    pathStringTransformed.push({
                        t: 'z'
                    });
                }
                itemData.lStr = pathStringTransformed;
            }

        }

        if (itemData.st) {
            for (i = 0; i < 16; i += 1) {
                itemData.tr[i] = groupTransform.mat.props[i];
            }
        }
        itemData.trNodes = pathStringTransformed;

    }
};



CVShapeElement.prototype.renderFill = function(styleData,itemData, groupTransform){
    var styleElem = itemData.style;

    if(itemData.c._mdf || this._isFirstFrame){
        styleElem.co = 'rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')';
    }
    if(itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame){
        styleElem.coOp = itemData.o.v*groupTransform.opacity;
    }
};

CVShapeElement.prototype.renderStroke = function(styleData,itemData, groupTransform){
    var styleElem = itemData.style;
    var d = itemData.d;
    if(d && (d._mdf  || this._isFirstFrame)){
        styleElem.da = d.dashArray;
        styleElem.do = d.dashoffset[0];
    }
    if(itemData.c._mdf || this._isFirstFrame){
        styleElem.co = 'rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')';
    }
    if(itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame){
        styleElem.coOp = itemData.o.v*groupTransform.opacity;
    }
    if(itemData.w._mdf || this._isFirstFrame){
        styleElem.wi = itemData.w.v;
    }
};


CVShapeElement.prototype.destroy = function(){
    this.shapesData = null;
    this.globalData = null;
    this.canvasContext = null;
    this.stylesList.length = 0;
    this.itemsData.length = 0;
};


function CVSolidElement(data, globalData, comp) {
    this.initElement(data,globalData,comp);
}
extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement);

CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement;
CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

CVSolidElement.prototype.renderInnerContent = function() {
    var ctx = this.canvasContext;
    ctx.fillStyle = this.data.sc;
    ctx.fillRect(0, 0, this.data.sw, this.data.sh);
    //
};
function CVTextElement(data, globalData, comp){
    this.textSpans = [];
    this.yOffset = 0;
    this.fillColorAnim = false;
    this.strokeColorAnim = false;
    this.strokeWidthAnim = false;
    this.stroke = false;
    this.fill = false;
    this.justifyOffset = 0;
    this.currentRender = null;
    this.renderType = 'canvas';
    this.values = {
        fill: 'rgba(0,0,0,0)',
        stroke: 'rgba(0,0,0,0)',
        sWidth: 0,
        fValue: ''
    };
    this.initElement(data,globalData,comp);
}
extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement,ITextElement], CVTextElement);

CVTextElement.prototype.tHelper = createTag('canvas').getContext('2d');

CVTextElement.prototype.buildNewText = function(){
    var documentData = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);

    var hasFill = false;
    if(documentData.fc) {
        hasFill = true;
        this.values.fill = this.buildColor(documentData.fc);
    }else{
        this.values.fill = 'rgba(0,0,0,0)';
    }
    this.fill = hasFill;
    var hasStroke = false;
    if(documentData.sc){
        hasStroke = true;
        this.values.stroke = this.buildColor(documentData.sc);
        this.values.sWidth = documentData.sw;
    }
    var fontData = this.globalData.fontManager.getFontByName(documentData.f);
    var i, len;
    var letters = documentData.l;
    var matrixHelper = this.mHelper;
    this.stroke = hasStroke;
    this.values.fValue = documentData.finalSize + 'px '+ this.globalData.fontManager.getFontByName(documentData.f).fFamily;
    len = documentData.finalText.length;
    //this.tHelper.font = this.values.fValue;
    var charData, shapeData, k, kLen, shapes, j, jLen, pathNodes, commands, pathArr, singleShape = this.data.singleShape;
    var trackingOffset = documentData.tr/1000*documentData.finalSize;
    var xPos = 0, yPos = 0, firstLine = true;
    var cnt = 0;
    for (i = 0; i < len; i += 1) {
        charData = this.globalData.fontManager.getCharData(documentData.finalText.charAt(i), fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
        shapeData = charData && charData.data || {};
        matrixHelper.reset();
        if(singleShape && letters[i].n) {
            xPos = -trackingOffset;
            yPos += documentData.yOffset;
            yPos += firstLine ? 1 : 0;
            firstLine = false;
        }

        shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
        jLen = shapes.length;
        matrixHelper.scale(documentData.finalSize/100,documentData.finalSize/100);
        if(singleShape){
            this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
        }
        commands = createSizedArray(jLen);
        for(j=0;j<jLen;j+=1){
            kLen = shapes[j].ks.k.i.length;
            pathNodes = shapes[j].ks.k;
            pathArr = [];
            for(k=1;k<kLen;k+=1){
                if(k==1){
                    pathArr.push(matrixHelper.applyToX(pathNodes.v[0][0],pathNodes.v[0][1],0),matrixHelper.applyToY(pathNodes.v[0][0],pathNodes.v[0][1],0));
                }
                pathArr.push(matrixHelper.applyToX(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToY(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToX(pathNodes.i[k][0],pathNodes.i[k][1],0),matrixHelper.applyToY(pathNodes.i[k][0],pathNodes.i[k][1],0),matrixHelper.applyToX(pathNodes.v[k][0],pathNodes.v[k][1],0),matrixHelper.applyToY(pathNodes.v[k][0],pathNodes.v[k][1],0));
            }
            pathArr.push(matrixHelper.applyToX(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToY(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToX(pathNodes.i[0][0],pathNodes.i[0][1],0),matrixHelper.applyToY(pathNodes.i[0][0],pathNodes.i[0][1],0),matrixHelper.applyToX(pathNodes.v[0][0],pathNodes.v[0][1],0),matrixHelper.applyToY(pathNodes.v[0][0],pathNodes.v[0][1],0));
            commands[j] = pathArr;
        }
        if(singleShape){
            xPos += letters[i].l;
            xPos += trackingOffset;
        }
        if(this.textSpans[cnt]){
            this.textSpans[cnt].elem = commands;
        } else {
            this.textSpans[cnt] = {elem: commands};
        }
        cnt +=1;
    }
};

CVTextElement.prototype.renderInnerContent = function(){
    var ctx = this.canvasContext;
    var finalMat = this.finalTransform.mat.props;
    ctx.font = this.values.fValue;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;

    if(!this.data.singleShape){
        this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
    }

    var  i,len, j, jLen, k, kLen;
    var renderedLetters = this.textAnimator.renderedLetters;

    var letters = this.textProperty.currentData.l;

    len = letters.length;
    var renderedLetter;
    var lastFill = null, lastStroke = null, lastStrokeW = null, commands, pathArr;
    for(i=0;i<len;i+=1){
        if(letters[i].n){
            continue;
        }
        renderedLetter = renderedLetters[i];
        if(renderedLetter){
            this.globalData.renderer.save();
            this.globalData.renderer.ctxTransform(renderedLetter.p);
            this.globalData.renderer.ctxOpacity(renderedLetter.o);
        }
        if(this.fill){
            if(renderedLetter && renderedLetter.fc){
                if(lastFill !== renderedLetter.fc){
                    lastFill = renderedLetter.fc;
                    ctx.fillStyle = renderedLetter.fc;
                }
            }else if(lastFill !== this.values.fill){
                lastFill = this.values.fill;
                ctx.fillStyle = this.values.fill;
            }
            commands = this.textSpans[i].elem;
            jLen = commands.length;
            this.globalData.canvasContext.beginPath();
            for(j=0;j<jLen;j+=1) {
                pathArr = commands[j];
                kLen = pathArr.length;
                this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
                for (k = 2; k < kLen; k += 6) {
                    this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
                }
            }
            this.globalData.canvasContext.closePath();
            this.globalData.canvasContext.fill();
            ///ctx.fillText(this.textSpans[i].val,0,0);
        }
        if(this.stroke){
            if(renderedLetter && renderedLetter.sw){
                if(lastStrokeW !== renderedLetter.sw){
                    lastStrokeW = renderedLetter.sw;
                    ctx.lineWidth = renderedLetter.sw;
                }
            }else if(lastStrokeW !== this.values.sWidth){
                lastStrokeW = this.values.sWidth;
                ctx.lineWidth = this.values.sWidth;
            }
            if(renderedLetter && renderedLetter.sc){
                if(lastStroke !== renderedLetter.sc){
                    lastStroke = renderedLetter.sc;
                    ctx.strokeStyle = renderedLetter.sc;
                }
            }else if(lastStroke !== this.values.stroke){
                lastStroke = this.values.stroke;
                ctx.strokeStyle = this.values.stroke;
            }
            commands = this.textSpans[i].elem;
            jLen = commands.length;
            this.globalData.canvasContext.beginPath();
            for(j=0;j<jLen;j+=1) {
                pathArr = commands[j];
                kLen = pathArr.length;
                this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
                for (k = 2; k < kLen; k += 6) {
                    this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
                }
            }
            this.globalData.canvasContext.closePath();
            this.globalData.canvasContext.stroke();
            ///ctx.strokeText(letters[i].val,0,0);
        }
        if(renderedLetter) {
            this.globalData.renderer.restore();
        }
    }
    /*if(this.data.hasMask){
     this.globalData.renderer.restore(true);
     }*/
};
function CVEffects() {

}
CVEffects.prototype.renderFrame = function(){};
function HBaseElement(data,globalData,comp){}
HBaseElement.prototype = {
    checkBlendMode: function(){},
    initRendererElement: function(){
        this.baseElement = createTag('div');
        if(this.data.hasMask) {
            this.svgElement = createNS('svg');
            this.layerElement = createNS('g');
            this.maskedElement = this.layerElement;
            this.svgElement.appendChild(this.layerElement);
            this.baseElement.appendChild(this.svgElement);
        } else {
            this.layerElement = this.baseElement;
        }
        styleDiv(this.baseElement);
    },
    createContainerElements: function(){
        this.renderableEffectsManager = new CVEffects(this);
        this.transformedElement = this.baseElement;
        this.maskedElement = this.layerElement;
        if (this.data.ln) {
            this.layerElement.setAttribute('id',this.data.ln);
        }
        if (this.data.bm !== 0) {
            this.setBlendMode();
        }
    },
    renderElement: function() {
        if(this.finalTransform._matMdf){
            this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS();
        }
        if(this.finalTransform._opMdf){
            this.transformedElement.style.opacity = this.finalTransform.mProp.o.v;
        }
    },
    renderFrame: function() {
        //If it is exported as hidden (data.hd === true) no need to render
        //If it is not visible no need to render
        if (this.data.hd || this.hidden) {
            return;
        }
        this.renderTransform();
        this.renderRenderable();
        this.renderElement();
        this.renderInnerContent();
        if (this._isFirstFrame) {
            this._isFirstFrame = false;
        }
    },
    destroy: function(){
        this.layerElement = null;
        this.transformedElement = null;
        if(this.matteElement) {
            this.matteElement = null;
        }
        if(this.maskManager) {
            this.maskManager.destroy();
            this.maskManager = null;
        }
    },
    addMasks: function(){
        this.maskManager = new MaskElement(this.data, this, this.globalData, this.dynamicProperties);
    },
    setMatte: function(){}
};
HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement;
HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy;
HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting;
function HSolidElement(data,globalData,comp){
    this.initElement(data,globalData,comp);
}
extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement], HSolidElement);

HSolidElement.prototype.createContent = function(){
    var rect;
    if(this.data.hasMask){
        rect = createNS('rect');
        rect.setAttribute('width',this.data.sw);
        rect.setAttribute('height',this.data.sh);
        rect.setAttribute('fill',this.data.sc);
        this.svgElement.setAttribute('width',this.data.sw);
        this.svgElement.setAttribute('height',this.data.sh);
    } else {
        rect = createTag('div');
        rect.style.width = this.data.sw + 'px';
        rect.style.height = this.data.sh + 'px';
        rect.style.backgroundColor = this.data.sc;
    }
    this.layerElement.appendChild(rect);
};

function HCompElement(data,globalData,comp){
    this.layers = data.layers;
    this.supports3d = !data.hasMask;
    this.completeLayers = false;
    this.pendingElements = [];
    this.elements = this.layers ? createSizedArray(this.layers.length) : [];
    this.tm = data.tm ? PropertyFactory.getProp(this,data.tm,0,globalData.frameRate,this.dynamicProperties) : {_placeholder:true};
    
    this.initElement(data,globalData,comp);
}

extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement);
HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements;

HCompElement.prototype.createContainerElements = function(){
    this._createBaseContainerElements();
    //divElement.style.clip = 'rect(0px, '+this.data.w+'px, '+this.data.h+'px, 0px)';
    if(this.data.hasMask){
        this.svgElement.setAttribute('width',this.data.w);
        this.svgElement.setAttribute('height',this.data.h);
    }
    this.transformedElement = this.layerElement;
};
function HShapeElement(data,globalData,comp){
    //List of drawable elements
    this.shapes = [];
    // Full shape data
    this.shapesData = data.shapes;
    //List of styles that will be applied to shapes
    this.stylesList = [];
    //List of modifiers that will be applied to shapes
    this.shapeModifiers = [];
    //List of items in shape tree
    this.itemsData = [];
    //List of items in previous shape tree
    this.processedElements = [];
    this.shapesContainer = createNS('g');
    this.initElement(data,globalData,comp);
    //Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
    // List of elements that have been created
    this.prevViewData = [];
    this.currentBBox = {
        x:999999,
        y: -999999,
        h: 0,
        w: 0
    };
}
extendPrototype([BaseElement,TransformElement,HSolidElement,SVGShapeElement,HBaseElement,HierarchyElement,FrameElement,RenderableElement], HShapeElement);
HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent;

HShapeElement.prototype.createContent = function(){
    var cont;
    if (this.data.hasMask) {
        this.layerElement.appendChild(this.shapesContainer);
        cont = this.svgElement;
    } else {
        cont = createNS('svg');
        var size = this.comp.data ? this.comp.data : this.globalData.compSize;
        cont.setAttribute('width',size.w);
        cont.setAttribute('height',size.h);
        cont.appendChild(this.shapesContainer);
        this.layerElement.appendChild(cont);
    }

    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.shapesContainer,this.dynamicProperties,0, [], true);
    this.shapeCont = cont;
};

HShapeElement.prototype.renderInnerContent = function() {
    this._renderShapeFrame();

    if(!this.hidden && (this._isFirstFrame || this._mdf)) {
        var boundingBox = this.shapeCont.getBBox();
        var changed = false;
        if(this.currentBBox.w !== boundingBox.width){
            this.currentBBox.w = boundingBox.width;
            this.shapeCont.setAttribute('width',boundingBox.width);
            changed = true;
        }
        if(this.currentBBox.h !== boundingBox.height){
            this.currentBBox.h = boundingBox.height;
            this.shapeCont.setAttribute('height',boundingBox.height);
            changed = true;
        }
        if(changed  || this.currentBBox.x !== boundingBox.x  || this.currentBBox.y !== boundingBox.y){
            this.currentBBox.w = boundingBox.width;
            this.currentBBox.h = boundingBox.height;
            this.currentBBox.x = boundingBox.x;
            this.currentBBox.y = boundingBox.y;

            this.shapeCont.setAttribute('viewBox',this.currentBBox.x+' '+this.currentBBox.y+' '+this.currentBBox.w+' '+this.currentBBox.h);
            this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
        }
    }

};
function HTextElement(data,globalData,comp){
    this.textSpans = [];
    this.textPaths = [];
    this.currentBBox = {
        x:999999,
        y: -999999,
        h: 0,
        w: 0
    };
    this.renderType = 'svg';
    this.isMasked = false;
    this.initElement(data,globalData,comp);

}
extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement], HTextElement);

HTextElement.prototype.createContent = function(){
    this.isMasked = this.checkMasks();
    if(this.isMasked){
        this.renderType = 'svg';
        this.compW = this.comp.data.w;
        this.compH = this.comp.data.h;
        this.svgElement.setAttribute('width',this.compW);
        this.svgElement.setAttribute('height',this.compH);
        var g = createNS('g');
        this.maskedElement.appendChild(g);
        this.innerElem = g;
    } else {
        this.renderType = 'html';
        this.innerElem = this.layerElement;
    }

    this.checkParenting();

};

HTextElement.prototype.buildNewText = function(){
    var documentData = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(this.textProperty.currentData.l ? this.textProperty.currentData.l.length : 0);
    var innerElemStyle = this.innerElem.style;
    innerElemStyle.color = innerElemStyle.fill = documentData.fc ? this.buildColor(documentData.fc) : 'rgba(0,0,0,0)';
    if(documentData.sc){
        innerElemStyle.stroke = this.buildColor(documentData.sc);
        innerElemStyle.strokeWidth = documentData.sw+'px';
    }
    var fontData = this.globalData.fontManager.getFontByName(documentData.f);
    if(!this.globalData.fontManager.chars){
        innerElemStyle.fontSize = documentData.finalSize+'px';
        innerElemStyle.lineHeight = documentData.finalSize+'px';
        if(fontData.fClass){
            this.innerElem.className = fontData.fClass;
        } else {
            innerElemStyle.fontFamily = fontData.fFamily;
            var fWeight = documentData.fWeight, fStyle = documentData.fStyle;
            innerElemStyle.fontStyle = fStyle;
            innerElemStyle.fontWeight = fWeight;
        }
    }
    var i, len;

    var letters = documentData.l;
    len = letters.length;
    var tSpan,tParent,tCont;
    var matrixHelper = this.mHelper;
    var shapes, shapeStr = '';
    var cnt = 0;
    for (i = 0;i < len ;i += 1) {
        if(this.globalData.fontManager.chars){
            if(!this.textPaths[cnt]){
                tSpan = createNS('path');
                tSpan.setAttribute('stroke-linecap', 'butt');
                tSpan.setAttribute('stroke-linejoin','round');
                tSpan.setAttribute('stroke-miterlimit','4');
            } else {
                tSpan = this.textPaths[cnt];
            }
            if(!this.isMasked){
                if(this.textSpans[cnt]){
                    tParent = this.textSpans[cnt];
                    tCont = tParent.children[0];
                } else {

                    tParent = createTag('div');
                    tCont = createNS('svg');
                    tCont.appendChild(tSpan);
                    styleDiv(tParent);
                }
            }
        }else{
            if(!this.isMasked){
                if(this.textSpans[cnt]){
                    tParent = this.textSpans[cnt];
                    tSpan = this.textPaths[cnt];
                } else {
                    tParent = createTag('span');
                    styleDiv(tParent);
                    tSpan = createTag('span');
                    styleDiv(tSpan);
                    tParent.appendChild(tSpan);
                }
            } else {
                tSpan = this.textPaths[cnt] ? this.textPaths[cnt] : createNS('text');
            }
        }
        //tSpan.setAttribute('visibility', 'hidden');
        if(this.globalData.fontManager.chars){
            var charData = this.globalData.fontManager.getCharData(documentData.finalText.charAt(i), fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
            var shapeData;
            if(charData){
                shapeData = charData.data;
            } else {
                shapeData = null;
            }
            matrixHelper.reset();
            if(shapeData && shapeData.shapes){
                shapes = shapeData.shapes[0].it;
                matrixHelper.scale(documentData.finalSize/100,documentData.finalSize/100);
                shapeStr = this.createPathShape(matrixHelper,shapes);
                tSpan.setAttribute('d',shapeStr);
            }
            if(!this.isMasked){
                this.innerElem.appendChild(tParent);
                if(shapeData && shapeData.shapes){

                    //document.body.appendChild is needed to get exact measure of shape
                    document.body.appendChild(tCont);
                    var boundingBox = tCont.getBBox();
                    tCont.setAttribute('width',boundingBox.width + 2);
                    tCont.setAttribute('height',boundingBox.height + 2);
                    tCont.setAttribute('viewBox',(boundingBox.x-1)+' '+ (boundingBox.y-1)+' '+ (boundingBox.width+2)+' '+ (boundingBox.height+2));
                    tCont.style.transform = tCont.style.webkitTransform = 'translate(' + (boundingBox.x-1) + 'px,' + (boundingBox.y-1) + 'px)';

                    letters[i].yOffset = boundingBox.y-1;
                    tParent.appendChild(tCont);

                } else{
                    tCont.setAttribute('width',1);
                    tCont.setAttribute('height',1);
                }
            }else{
                this.innerElem.appendChild(tSpan);
            }
        }else{
            tSpan.textContent = letters[i].val;
            tSpan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space","preserve");
            if(!this.isMasked){
                this.innerElem.appendChild(tParent);
                //
                tSpan.style.transform = tSpan.style.webkitTransform = 'translate3d(0,'+ -documentData.finalSize/1.2+'px,0)';
            } else {
                this.innerElem.appendChild(tSpan);
            }
        }
        //
        if(!this.isMasked){
            this.textSpans[cnt] = tParent;
        }else{
            this.textSpans[cnt] = tSpan;
        }
        this.textSpans[cnt].style.display = 'block';
        this.textPaths[cnt] = tSpan;
        cnt += 1;
    }
    while(cnt < this.textSpans.length){
        this.textSpans[cnt].style.display = 'none';
        cnt += 1;
    }
};

HTextElement.prototype.renderInnerContent = function() {

    if(this.data.singleShape){
        if(!this._isFirstFrame && !this.lettersChangedFlag){
            return;
        } else {
            // Todo Benchmark if using this is better than getBBox
             if(this.isMasked && this.finalTransform._matMdf){
                 this.svgElement.setAttribute('viewBox',-this.finalTransform.mProp.p.v[0]+' '+ -this.finalTransform.mProp.p.v[1]+' '+this.compW+' '+this.compH);
                this.svgElement.style.transform = this.svgElement.style.webkitTransform = 'translate(' + -this.finalTransform.mProp.p.v[0] + 'px,' + -this.finalTransform.mProp.p.v[1] + 'px)';
             }
        }
    }

    this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
    if(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag){
        return;
    }
    var  i,len, count = 0;
    var renderedLetters = this.textAnimator.renderedLetters;

    var letters = this.textProperty.currentData.l;

    len = letters.length;
    var renderedLetter, textSpan, textPath;
    for(i=0;i<len;i+=1){
        if(letters[i].n){
            count += 1;
            continue;
        }
        textSpan = this.textSpans[i];
        textPath = this.textPaths[i];
        renderedLetter = renderedLetters[count];
        count += 1;
        if(!this.isMasked){
            textSpan.style.transform = textSpan.style.webkitTransform = renderedLetter.m;
        }else{
            textSpan.setAttribute('transform',renderedLetter.m);
        }
        ////textSpan.setAttribute('opacity',renderedLetter.o);
        textSpan.style.opacity = renderedLetter.o;
        if(renderedLetter.sw){
            textPath.setAttribute('stroke-width',renderedLetter.sw);
        }
        if(renderedLetter.sc){
            textPath.setAttribute('stroke',renderedLetter.sc);
        }
        if(renderedLetter.fc){
            textPath.setAttribute('fill',renderedLetter.fc);
            textPath.style.color = renderedLetter.fc;
        }
    }

    if(this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)){
        var boundingBox = this.innerElem.getBBox();

        if(this.currentBBox.w !== boundingBox.width){
            this.currentBBox.w = boundingBox.width;
            this.svgElement.setAttribute('width',boundingBox.width);
        }
        if(this.currentBBox.h !== boundingBox.height){
            this.currentBBox.h = boundingBox.height;
            this.svgElement.setAttribute('height',boundingBox.height);
        }

        var margin = 1;
        if(this.currentBBox.w !== (boundingBox.width + margin*2) || this.currentBBox.h !== (boundingBox.height + margin*2)  || this.currentBBox.x !== (boundingBox.x - margin)  || this.currentBBox.y !== (boundingBox.y - margin)){
            this.currentBBox.w = boundingBox.width + margin*2;
            this.currentBBox.h = boundingBox.height + margin*2;
            this.currentBBox.x = boundingBox.x - margin;
            this.currentBBox.y = boundingBox.y - margin;

            this.svgElement.setAttribute('viewBox',this.currentBBox.x+' '+this.currentBBox.y+' '+this.currentBBox.w+' '+this.currentBBox.h);
            this.svgElement.style.transform = this.svgElement.style.webkitTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
        }
    }
};
function HImageElement(data,globalData,comp){
    this.assetData = globalData.getAssetData(data.refId);
    this.initElement(data,globalData,comp);
}

extendPrototype([BaseElement,TransformElement,HBaseElement,HSolidElement,HierarchyElement,FrameElement,RenderableElement], HImageElement);


HImageElement.prototype.createContent = function(){
    var assetPath = this.globalData.getAssetsPath(this.assetData);
    var img = new Image();

    if(this.data.hasMask){
        this.imageElem = createNS('image');
        this.imageElem.setAttribute('width',this.assetData.w+"px");
        this.imageElem.setAttribute('height',this.assetData.h+"px");
        this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink','href',assetPath);
        this.layerElement.appendChild(this.imageElem);
        this.baseElement.setAttribute('width',this.assetData.w);
        this.baseElement.setAttribute('height',this.assetData.h);
    } else {
        this.layerElement.appendChild(img);
    }
    img.src = assetPath;
    if(this.data.ln){
        this.innerElem.setAttribute('id',this.data.ln);
    }
};
function HCameraElement(data,globalData,comp){
    this.initFrame();
    this.initBaseData(data,globalData,comp);
    var getProp = PropertyFactory.getProp;
    this.pe = getProp(this,data.pe,0,0,this.dynamicProperties);
    if(data.ks.p.s){
        this.px = getProp(this,data.ks.p.x,1,0,this.dynamicProperties);
        this.py = getProp(this,data.ks.p.y,1,0,this.dynamicProperties);
        this.pz = getProp(this,data.ks.p.z,1,0,this.dynamicProperties);
    }else{
        this.p = getProp(this,data.ks.p,1,0,this.dynamicProperties);
    }
    if(data.ks.a){
        this.a = getProp(this,data.ks.a,1,0,this.dynamicProperties);
    }
    if(data.ks.or.k.length && data.ks.or.k[0].to){
        var i,len = data.ks.or.k.length;
        for(i=0;i<len;i+=1){
            data.ks.or.k[i].to = null;
            data.ks.or.k[i].ti = null;
        }
    }
    this.or = getProp(this,data.ks.or,1,degToRads,this.dynamicProperties);
    this.or.sh = true;
    this.rx = getProp(this,data.ks.rx,0,degToRads,this.dynamicProperties);
    this.ry = getProp(this,data.ks.ry,0,degToRads,this.dynamicProperties);
    this.rz = getProp(this,data.ks.rz,0,degToRads,this.dynamicProperties);
    this.mat = new Matrix();
    this._prevMat = new Matrix();
    this._isFirstFrame = true;
}
extendPrototype([BaseElement, FrameElement], HCameraElement);

HCameraElement.prototype.setup = function() {
    var i, len = this.comp.threeDElements.length, comp;
    for(i=0;i<len;i+=1){
        //[perspectiveElem,container]
        comp = this.comp.threeDElements[i];
        comp.perspectiveElem.style.perspective = comp.perspectiveElem.style.webkitPerspective = this.pe.v+'px';
        comp.container.style.transformOrigin = comp.container.style.mozTransformOrigin = comp.container.style.webkitTransformOrigin = "0px 0px 0px";
        comp.perspectiveElem.style.transform = comp.perspectiveElem.style.webkitTransform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
    }
};

HCameraElement.prototype.createElements = function(){
};

HCameraElement.prototype.hide = function(){
};

HCameraElement.prototype.renderFrame = function(){
    var _mdf = this._isFirstFrame;
    var i, len;
    if(this.hierarchy){
        len = this.hierarchy.length;
        for(i=0;i<len;i+=1){
            _mdf = this.hierarchy[i].finalTransform.mProp._mdf || _mdf;
        }
    }
    if(_mdf || (this.p && this.p._mdf) || (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || (this.a && this.a._mdf)) {
        this.mat.reset();

        if(this.p){
            this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]);
        }else{
            this.mat.translate(-this.px.v,-this.py.v,this.pz.v);
        }
        if(this.a){
            var diffVector = [this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]];
            var mag = Math.sqrt(Math.pow(diffVector[0],2)+Math.pow(diffVector[1],2)+Math.pow(diffVector[2],2));
            //var lookDir = getNormalizedPoint(getDiffVector(this.a.v,this.p.v));
            var lookDir = [diffVector[0]/mag,diffVector[1]/mag,diffVector[2]/mag];
            var lookLengthOnXZ = Math.sqrt( lookDir[2]*lookDir[2] + lookDir[0]*lookDir[0] );
            var m_rotationX = (Math.atan2( lookDir[1], lookLengthOnXZ ));
            var m_rotationY = (Math.atan2( lookDir[0], -lookDir[2]));
            this.mat.rotateY(m_rotationY).rotateX(-m_rotationX);

        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
        this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]);
        this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0);
        this.mat.translate(0,0,this.pe.v);
        if(this.hierarchy){
            var mat;
            len = this.hierarchy.length;
            for(i=0;i<len;i+=1){
                mat = this.hierarchy[i].finalTransform.mProp.iv.props;
                this.mat.transform(mat[0],mat[1],mat[2],mat[3],mat[4],mat[5],mat[6],mat[7],mat[8],mat[9],mat[10],mat[11],-mat[12],-mat[13],mat[14],mat[15]);
            }
        }
        if(!this._prevMat.equals(this.mat)) {
            len = this.comp.threeDElements.length;
            var comp;
            for(i=0;i<len;i+=1){
                comp = this.comp.threeDElements[i];
                comp.container.style.transform = comp.container.style.webkitTransform = this.mat.toCSS();
            }
            this.mat.clone(this._prevMat);
        }
    }
    this._isFirstFrame = false;
};

HCameraElement.prototype.prepareFrame = function(num) {
    this.prepareProperties(num, true);
};

HCameraElement.prototype.destroy = function(){
};
HCameraElement.prototype.initExpressions = function(){};
HCameraElement.prototype.getBaseElement = function(){return null;};
function HEffects() {
}
HEffects.prototype.renderFrame = function(){};
var Expressions = (function(){
    var ob = {};
    ob.initExpressions = initExpressions;


    function initExpressions(animation){
        animation.renderer.compInterface = CompExpressionInterface(animation.renderer);
        animation.renderer.globalData.projectInterface.registerComposition(animation.renderer);
    }
   return ob;
}());

expressionsPlugin = Expressions;

var ExpressionManager = (function(){
    'use strict';
    var ob = {};
    var Math = BMMath;
    var window = null;
    var document = null;

    function duplicatePropertyValue(value, mult) {
        mult = mult || 1;

        if (typeof value === 'number'  || value instanceof Number) {
            return value * mult;
        } else if(value.i) {
            return shape_pool.clone(value);
        } else {
            var arr = createTypedArray('float32', value.length);
            var i, len = value.length;
            for (i = 0; i < len; i += 1) {
                arr[i] = value[i] * mult;
            }
            return arr;
        }
    }

    function isTypeOfArray(arr) {
        return arr.constructor === Array || arr.constructor === Float32Array;
    }

    function shapesEqual(shape1, shape2) {
        if(shape1._length !== shape2._length || shape1.c !== shape2.c){
            return false;
        }
        var i, len = shape1._length;
        for(i = 0; i < len; i += 1) {
            if(shape1.v[i][0] !== shape2.v[i][0] || shape1.v[i][1] !== shape2.v[i][1] || shape1.o[i][0] !== shape2.o[i][0] || shape1.o[i][1] !== shape2.o[i][1] || shape1.i[i][0] !== shape2.i[i][0] || shape1.i[i][1] !== shape2.i[i][1]){
                return false;
            }
        }
        return true;
    }

    function $bm_neg(a){
        var tOfA = typeof a;
        if(tOfA === 'number' || tOfA === 'boolean'  || a instanceof Number ){
            return -a;
        }
        if(isTypeOfArray(a)){
            var i, lenA = a.length;
            var retArr = [];
            for(i=0;i<lenA;i+=1){
                retArr[i] = -a[i];
            }
            return retArr;
        }
    }

    function sum(a,b) {
        var tOfA = typeof a;
        var tOfB = typeof b;
        if(tOfA === 'string' || tOfB === 'string'){
            return a + b;
        }
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number) && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string'  || b instanceof Number)) {
            return a + b;
        }
        if(isTypeOfArray(a) && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string' || b instanceof Number )){
            a[0] = a[0] + b;
            return a;
        }
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number ) && isTypeOfArray(b)){
            b[0] = a + b[0];
            return b;
        }
        if(isTypeOfArray(a) && isTypeOfArray(b)){
            
            var i = 0, lenA = a.length, lenB = b.length;
            var retArr = [];
            while(i<lenA || i < lenB){
                if((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)){
                    retArr[i] = a[i] + b[i];
                }else{
                    retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
                }
                i += 1;
            }
            return retArr;
        }
        return 0;
    }
    var add = sum;

    function sub(a,b) {
        var tOfA = typeof a;
        var tOfB = typeof b;
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number ) && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string' || b instanceof Number )) {
            if(tOfA === 'string') {
                a = parseInt(a);
            }
            if(tOfB === 'string') {
                b = parseInt(b);
            }
            return a - b;
        }
        if( isTypeOfArray(a) && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string' || b instanceof Number )){
            a[0] = a[0] - b;
            return a;
        }
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number ) &&  isTypeOfArray(b)){
            b[0] = a - b[0];
            return b;
        }
        if(isTypeOfArray(a) && isTypeOfArray(b)){
            var i = 0, lenA = a.length, lenB = b.length;
            var retArr = [];
            while(i<lenA || i < lenB){
                if((typeof a[i] === 'number' || a[i] instanceof Number) && typeof (typeof b[i] === 'number' || b[i] instanceof Number)){
                    retArr[i] = a[i] - b[i];
                }else{
                    retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
                }
                i += 1;
            }
            return retArr;
        }
        return 0;
    }

    function mul(a,b) {
        var tOfA = typeof a;
        var tOfB = typeof b;
        var arr;
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number ) && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string' || b instanceof Number )) {
            return a * b;
        }

        var i, len;
        if(isTypeOfArray(a) && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string' || b instanceof Number )){
            len = a.length;
            arr = createTypedArray('float32', len);
            for(i=0;i<len;i+=1){
                arr[i] = a[i] * b;
            }
            return arr;
        }
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number ) && isTypeOfArray(b)){
            len = b.length;
            arr = createTypedArray('float32', len);
            for(i=0;i<len;i+=1){
                arr[i] = a * b[i];
            }
            return arr;
        }
        return 0;
    }

    function div(a,b) {
        var tOfA = typeof a;
        var tOfB = typeof b;
        var arr;
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number ) && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string' || b instanceof Number )) {
            return a / b;
        }
        var i, len;
        if(isTypeOfArray(a) && (tOfB === 'number' || tOfB === 'boolean' || tOfB === 'string' || b instanceof Number  )){
            len = a.length;
            arr = createTypedArray('float32', len);
            for(i=0;i<len;i+=1){
                arr[i] = a[i] / b;
            }
            return arr;
        }
        if((tOfA === 'number' || tOfA === 'boolean' || tOfA === 'string' || a instanceof Number ) && isTypeOfArray(b)){
            len = b.length;
            arr = createTypedArray('float32', len);
            for(i=0;i<len;i+=1){
                arr[i] = a / b[i];
            }
            return arr;
        }
        return 0;
    }
    function mod(a,b) {
        if(typeof a === 'string') {
            a = parseInt(a);
        }
        if(typeof b === 'string') {
            b = parseInt(b);
        }
        return a % b;
    }

    function clamp(num, min, max) {
        if(min > max){
            var mm = max;
            max = min;
            min = mm;
        }
        return Math.min(Math.max(num, min), max);
    }

    function radiansToDegrees(val) {
        return val/degToRads;
    }
    var radians_to_degrees = radiansToDegrees;

    function degreesToRadians(val) {
        return val*degToRads;
    }
    var degrees_to_radians = radiansToDegrees;

    var helperLengthArray = [0,0,0,0,0,0];

    function length(arr1, arr2) {
        if (typeof arr1 === 'number' || arr1 instanceof Number) {
            arr2 = arr2 || 0;
            return Math.abs(arr1 - arr2);
        }
        if(!arr2) {
            arr2 = helperLengthArray;
        }
        var i, len = Math.min(arr1.length, arr2.length);
        var addedLength = 0;
        for (i = 0; i < len; i += 1) {
            addedLength += Math.pow(arr2[i] - arr1[i], 2);
        }
        return Math.sqrt(addedLength);
    }

    function normalize(vec) {
        return div(vec, length(vec));
    }

    function rgbToHsl(val) {
        var r = val[0]; var g = val[1]; var b = val[2];
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if(max == min){
            h = s = 0; // achromatic
        }else{
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [h, s, l,val[3]];
    }

    function hue2rgb(p, q, t){
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    function hslToRgb(val){
        var h = val[0];
        var s = val[1];
        var l = val[2];

        var r, g, b;

        if(s === 0){
            r = g = b = l; // achromatic
        }else{

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return [r, g , b, val[3]];
    }

    function linear(t, tMin, tMax, value1, value2){
        if(value1 === undefined || value2 === undefined){
            return linear(t,0,1,tMin,tMax);
        }
        if(t <= tMin) {
            return value1;
        }else if(t >= tMax){
            return value2;
        }
        var perc = tMax === tMin ? 0 : (t-tMin)/(tMax-tMin);
        if(!value1.length){
            return value1 + (value2-value1)*perc;
        }
        var i, len = value1.length;
        var arr = createTypedArray('float32', len);
        for(i=0;i<len;i+=1){
            arr[i] = value1[i] + (value2[i]-value1[i])*perc;
        }
        return arr;
    }
    function random(min,max){
        if(max === undefined){
            if(min === undefined){
                min = 0;
                max = 1;
            } else {
                max = min;
                min = undefined;
            }
        }
        if(max.length){
            var i, len = max.length;
            if(!min){
                min = createTypedArray('float32', len);
            }
            var arr = createTypedArray('float32', len);
            var rnd = BMMath.random();
            for(i=0;i<len;i+=1){
                arr[i] = min[i] + rnd*(max[i]-min[i]);
            }
            return arr;
        }
        if(min === undefined){
            min = 0;
        }
        var rndm = BMMath.random();
        return min + rndm*(max-min);
    }

    function createPath(points, inTangents, outTangents, closed) {
        inTangents = inTangents && inTangents.length ? inTangents : points;
        outTangents = outTangents && outTangents.length ? outTangents : points;
        var path = shape_pool.newElement();
        var i, len = points.length;
        path.setPathData(closed, len);
        for(i = 0; i < len; i += 1) {
            path.setTripleAt(points[i][0],points[i][1],outTangents[i][0] + points[i][0],outTangents[i][1] + points[i][1],inTangents[i][0] + points[i][0],inTangents[i][1] + points[i][1],i,true);
        }
        return path;
    }

    function initiateExpression(elem,data,property){
        var val = data.x;
        var needsVelocity = /velocity(?![\w\d])/.test(val);
        var _needsRandom = val.indexOf('random') !== -1;
        var elemType = elem.data.ty;
        var transform,content,effect;
        var thisProperty = property;
        elem.comp.frameDuration = 1/elem.comp.globalData.frameRate;
        var inPoint = elem.data.ip/elem.comp.globalData.frameRate;
        var outPoint = elem.data.op/elem.comp.globalData.frameRate;
        var width = elem.data.sw ? elem.data.sw : 0;
        var height = elem.data.sh ? elem.data.sh : 0;
        var loopIn, loop_in, loopOut, loop_out;
        var toWorld,fromWorld,fromComp,fromCompToSurface,anchorPoint,thisLayer,thisComp,mask,valueAtTime,velocityAtTime;

        var scoped_bm_rt;
        var expression_function = eval('[function _expression_function(){' + val+';scoped_bm_rt=$bm_rt}' + ']')[0];
        var numKeys = property.kf ? data.k.length : 0;

        var wiggle = function wiggle(freq,amp){
            var i,j, len = this.pv.length ? this.pv.length : 1;
            var addedAmps = createTypedArray('float32', len);
            freq = 5;
            var iterations = Math.floor(time*freq);
            i = 0;
            j = 0;
            while(i<iterations){
                //var rnd = BMMath.random();
                for(j=0;j<len;j+=1){
                    addedAmps[j] += -amp + amp*2*BMMath.random();
                    //addedAmps[j] += -amp + amp*2*rnd;
                }
                i += 1;
            }
            //var rnd2 = BMMath.random();
            var periods = time*freq;
            var perc = periods - Math.floor(periods);
            var arr = createTypedArray('float32', len);
            if(len>1){
                for(j=0;j<len;j+=1){
                    arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp*2*BMMath.random())*perc;
                    //arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp*2*rnd)*perc;
                    //arr[i] = this.pv[i] + addedAmp + amp1*perc + amp2*(1-perc);
                }
                return arr;
            } else {
                return this.pv + addedAmps[0] + (-amp + amp*2*BMMath.random())*perc;
            }
        }.bind(this);

        if(thisProperty.loopIn) {
            loopIn = thisProperty.loopIn.bind(thisProperty);
            loop_in = loopIn;
        }

        if(thisProperty.loopOut) {
            loopOut = thisProperty.loopOut.bind(thisProperty);
            loop_out = loopOut;
        }

        function loopInDuration(type,duration){
            return loopIn(type,duration,true);
        }

        function loopOutDuration(type,duration){
            return loopOut(type,duration,true);
        }

        if(this.getValueAtTime) {
            valueAtTime = this.getValueAtTime.bind(this);
        }

        if(this.getVelocityAtTime) {
            velocityAtTime = this.getVelocityAtTime.bind(this);
        }

        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

        function lookAt(elem1,elem2){
            var fVec = [elem2[0]-elem1[0],elem2[1]-elem1[1],elem2[2]-elem1[2]];
            var pitch = Math.atan2(fVec[0],Math.sqrt(fVec[1]*fVec[1]+fVec[2]*fVec[2]))/degToRads;
            var yaw = -Math.atan2(fVec[1],fVec[2])/degToRads;
            return [yaw,pitch,0];
        }

        function easeOut(t, tMin, tMax, val1, val2){
            if(val1 === undefined){
                val1 = tMin;
                val2 = tMax;
            } else {
                t = (t - tMin) / (tMax - tMin);
            }
            return -(val2-val1) * t*(t-2) + val1;
        }

        function easeIn(t, tMin, tMax, val1, val2){
            if(val1 === undefined){
                val1 = tMin;
                val2 = tMax;
            } else {
                t = (t - tMin) / (tMax - tMin);
            }
            return (val2-val1)*t*t + val1;
        }

        function nearestKey(time){
            var i, len = data.k.length,index,keyTime;
            if(!data.k.length || typeof(data.k[0]) === 'number'){
                index = 0;
                keyTime = 0;
            } else {
                index = -1;
                time *= elem.comp.globalData.frameRate;
                if (time < data.k[0].t) {
                    index = 1;
                    keyTime = data.k[0].t;
                } else {
                    for(i=0;i<len-1;i+=1){
                        if(time === data.k[i].t){
                            index = i + 1;
                            keyTime = data.k[i].t;
                            break;
                        }else if(time>data.k[i].t && time<data.k[i+1].t){
                            if(time-data.k[i].t > data.k[i+1].t - time){
                                index = i + 2;
                                keyTime = data.k[i+1].t;
                            } else {
                                index = i + 1;
                                keyTime = data.k[i].t;
                            }
                            break;
                        }
                    }
                    if(index === -1){
                        index = i + 1;
                        keyTime = data.k[i].t;
                    }
                }
                
            }
            var ob = {};
            ob.index = index;
            ob.time = keyTime/elem.comp.globalData.frameRate;
            return ob;
        }

        function key(ind){
            var ob, i, len;
            if(!data.k.length || typeof(data.k[0]) === 'number'){
                throw new Error('The property has no keyframe at index ' + ind);
            }
            ind -= 1;
            ob = {
                time: data.k[ind].t/elem.comp.globalData.frameRate
            };
            var arr;
            if(ind === data.k.length - 1 && !data.k[ind].h){
                arr = data.k[ind-1].e;
            }else{
                arr = data.k[ind].s;
            }
            len = arr.length;
            for(i=0;i<len;i+=1){
                ob[i] = arr[i];
            }
            return ob;
        }

        function framesToTime(frames, fps) { 
            if (!fps) {
                fps = elem.comp.globalData.frameRate;
            }
            return frames / fps;
        }

        function timeToFrames(t, fps) {
            if (!t && t !== 0) {
                t = time;
            }
            if (!fps) {
                fps = elem.comp.globalData.frameRate;
            }
            return t * fps;
        }

        function seedRandom(seed){
            BMMath.seedrandom(randSeed + seed);
        }

        function sourceRectAtTime() {
            return elem.sourceRectAtTime();
        }

        var time, velocity, value, textIndex, textTotal, selectorValue;
        var index = elem.data.ind;
        var hasParent = !!(elem.hierarchy && elem.hierarchy.length);
        var parent;
        var randSeed = Math.floor(Math.random()*1000000);
        function executeExpression() {
            if (_needsRandom) {
                seedRandom(randSeed);
            }
            if (this.frameExpressionId === elem.globalData.frameId && this.propType !== 'textSelector') {
                return;
            }
            if(this.lock){
                this.v = duplicatePropertyValue(this.pv,this.mult);
                return true;
            }
            if(this.propType === 'textSelector'){
                textIndex = this.textIndex;
                textTotal = this.textTotal;
                selectorValue = this.selectorValue;
            }
            if (!thisLayer) {
                thisLayer = elem.layerInterface;
                thisComp = elem.comp.compInterface;
                toWorld = thisLayer.toWorld.bind(thisLayer);
                fromWorld = thisLayer.fromWorld.bind(thisLayer);
                fromComp = thisLayer.fromComp.bind(thisLayer);
                mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null;
                fromCompToSurface = fromComp;
            }
            if (!transform) {
                transform = elem.layerInterface("ADBE Transform Group");
                anchorPoint = transform.anchorPoint;
            }
            
            if (elemType === 4 && !content) {
                content = thisLayer("ADBE Root Vectors Group");
            }
            if (!effect) {
                effect = thisLayer(4);
            }
            hasParent = !!(elem.hierarchy && elem.hierarchy.length);
            if (hasParent && !parent) {
                parent = elem.hierarchy[0].layerInterface;
            }
            this.lock = true;
            if (this.getPreValue) {
                this.getPreValue();
            }
            value = this.pv;
            time = this.comp.renderedFrame/this.comp.globalData.frameRate;
            if (needsVelocity) {
                velocity = velocityAtTime(time);
            }
            expression_function();
            if (scoped_bm_rt.propType === "shape") {
                this.v = shape_pool.clone(scoped_bm_rt.v);
            } else {
                this.v = scoped_bm_rt;
            }

            this.frameExpressionId = elem.globalData.frameId;
            var i,len;
            if(this.mult){
                if(this.propType === 'unidimensional'){
                    this.v *= this.mult;
                }else if(this.v.length === 1){
                    this.v = this.v[0] * this.mult;
                }else{
                    len = this.v.length;
                    if(value === this.v){
                        this.v = len === 2 ? [value[0],value[1]] : [value[0],value[1],value[2]];
                    }
                    for(i = 0; i < len; i += 1){
                        this.v[i] *= this.mult;
                    }
                }
            }
            if (this.v.length === 1) {
                this.v = this.v[0];
            }
            if (this.propType === 'unidimensional') {
                if(this.lastValue !== this.v){
                    this.lastValue = this.v;
                    this._mdf = true;
                }
            } else if (this.propType === 'shape') {
                if (!shapesEqual(this.v, this.localShapeCollection.shapes[0])) {
                    this._mdf = true;
                    this.localShapeCollection.releaseShapes();
                    this.localShapeCollection.addShape(shape_pool.clone(this.v));
                }
            } else {
                len = this.v.length;
                for (i = 0; i < len; i += 1) {
                    if (this.v[i] !== this.lastValue[i]) {
                        this.lastValue[i] = this.v[i];
                        this._mdf = true;
                    }
                }
            }
            this.lock = false;
        }
        return executeExpression;
    }

    ob.initiateExpression = initiateExpression;
    return ob;
}());
(function addPropertyDecorator() {

    function getStaticValueAtTime() {
        return this.pv;
    }

    function loopOut(type,duration,durationFlag){
        if(!this.k || !this.keyframes){
            return this.pv;
        }
        type = type ? type.toLowerCase() : '';
        var currentFrame = this.comp.renderedFrame;
        var keyframes = this.keyframes;
        var lastKeyFrame = keyframes[keyframes.length - 1].t;
        if(currentFrame<=lastKeyFrame){
            return this.pv;
        }else{
            var cycleDuration, firstKeyFrame;
            if(!durationFlag){
                if(!duration || duration > keyframes.length - 1){
                    duration = keyframes.length - 1;
                }
                firstKeyFrame = keyframes[keyframes.length - 1 - duration].t;
                cycleDuration = lastKeyFrame - firstKeyFrame;
            } else {
                if(!duration){
                    cycleDuration = Math.max(0,lastKeyFrame - this.elem.data.ip);
                } else {
                    cycleDuration = Math.abs(lastKeyFrame - elem.comp.globalData.frameRate*duration);
                }
                firstKeyFrame = lastKeyFrame - cycleDuration;
            }
            var i, len, ret;
            if(type === 'pingpong') {
                var iterations = Math.floor((currentFrame - firstKeyFrame)/cycleDuration);
                if(iterations % 2 !== 0){
                    return this.getValueAtTime(((cycleDuration - (currentFrame - firstKeyFrame) % cycleDuration +  firstKeyFrame)) / this.comp.globalData.frameRate, 0);
                }
            } else if(type === 'offset'){
                var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
                var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
                var current = this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration +  firstKeyFrame) / this.comp.globalData.frameRate, 0);
                var repeats = Math.floor((currentFrame - firstKeyFrame)/cycleDuration);
                if(this.pv.length){
                    ret = new Array(initV.length);
                    len = ret.length;
                    for(i=0;i<len;i+=1){
                        ret[i] = (endV[i]-initV[i])*repeats + current[i];
                    }
                    return ret;
                }
                return (endV-initV)*repeats + current;
            } else if(type === 'continue'){
                var lastValue = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
                var nextLastValue = this.getValueAtTime((lastKeyFrame - 0.001) / this.comp.globalData.frameRate, 0);
                if(this.pv.length){
                    ret = new Array(lastValue.length);
                    len = ret.length;
                    for(i=0;i<len;i+=1){
                        ret[i] = lastValue[i] + (lastValue[i]-nextLastValue[i])*((currentFrame - lastKeyFrame)/ this.comp.globalData.frameRate)/0.0005;
                    }
                    return ret;
                }
                return lastValue + (lastValue-nextLastValue)*(((currentFrame - lastKeyFrame))/0.001);
            }
            return this.getValueAtTime((((currentFrame - firstKeyFrame) % cycleDuration +  firstKeyFrame)) / this.comp.globalData.frameRate, 0);
        }
    }

    function loopIn(type,duration, durationFlag) {
        if(!this.k){
            return this.pv;
        }
        type = type ? type.toLowerCase() : '';
        var currentFrame = this.comp.renderedFrame;
        var keyframes = this.keyframes;
        var firstKeyFrame = keyframes[0].t;
        if(currentFrame>=firstKeyFrame){
            return this.pv;
        }else{
            var cycleDuration, lastKeyFrame;
            if(!durationFlag){
                if(!duration || duration > keyframes.length - 1){
                    duration = keyframes.length - 1;
                }
                lastKeyFrame = keyframes[duration].t;
                cycleDuration = lastKeyFrame - firstKeyFrame;
            } else {
                if(!duration){
                    cycleDuration = Math.max(0,this.elem.data.op - firstKeyFrame);
                } else {
                    cycleDuration = Math.abs(elem.comp.globalData.frameRate*duration);
                }
                lastKeyFrame = firstKeyFrame + cycleDuration;
            }
            var i, len, ret;
            if(type === 'pingpong') {
                var iterations = Math.floor((firstKeyFrame - currentFrame)/cycleDuration);
                if(iterations % 2 === 0){
                    return this.getValueAtTime((((firstKeyFrame - currentFrame)%cycleDuration +  firstKeyFrame)) / this.comp.globalData.frameRate, 0);
                }
            } else if(type === 'offset'){
                var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
                var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
                var current = this.getValueAtTime((cycleDuration - (firstKeyFrame - currentFrame)%cycleDuration +  firstKeyFrame) / this.comp.globalData.frameRate, 0);
                var repeats = Math.floor((firstKeyFrame - currentFrame)/cycleDuration)+1;
                if(this.pv.length){
                    ret = new Array(initV.length);
                    len = ret.length;
                    for(i=0;i<len;i+=1){
                        ret[i] = current[i]-(endV[i]-initV[i])*repeats;
                    }
                    return ret;
                }
                return current-(endV-initV)*repeats;
            } else if(type === 'continue'){
                var firstValue = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
                var nextFirstValue = this.getValueAtTime((firstKeyFrame + 0.001) / this.comp.globalData.frameRate, 0);
                if(this.pv.length){
                    ret = new Array(firstValue.length);
                    len = ret.length;
                    for(i=0;i<len;i+=1){
                        ret[i] = firstValue[i] + (firstValue[i]-nextFirstValue[i])*(firstKeyFrame - currentFrame)/0.001;
                    }
                    return ret;
                }
                return firstValue + (firstValue-nextFirstValue)*(firstKeyFrame - currentFrame)/0.001;
            }
            return this.getValueAtTime(((cycleDuration - (firstKeyFrame - currentFrame) % cycleDuration +  firstKeyFrame)) / this.comp.globalData.frameRate, 0);
        }
    }

    function getValueAtTime(frameNum) {
        if(frameNum !== this._cachingAtTime.lastFrame) {
            frameNum *= this.elem.globalData.frameRate;
            frameNum -= this.offsetTime;
            this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < frameNum ? this._cachingAtTime.lastIndex : 0;
            this._cachingAtTime.value = this.interpolateValue(frameNum, this.pv, this._cachingAtTime);
            this._cachingAtTime.lastFrame = frameNum;
        }
        return this._cachingAtTime.value;

    }

    function getVelocityAtTime(frameNum) {
        if(this.vel !== undefined){
            return this.vel;
        }
        var delta = -0.01;
        //frameNum += this.elem.data.st;
        var v1 = this.getValueAtTime(frameNum);
        var v2 = this.getValueAtTime(frameNum + delta);
        var velocity;
        if(v1.length){
            velocity = createTypedArray('float32', v1.length);
            var i;
            for(i=0;i<v1.length;i+=1){
                //removing frameRate
                //if needed, don't add it here
                //velocity[i] = this.elem.globalData.frameRate*((v2[i] - v1[i])/delta);
                velocity[i] = (v2[i] - v1[i])/delta;
            }
        } else {
            velocity = (v2 - v1)/delta;
        }
        return velocity;
    }

    function setGroupProperty(propertyGroup){
        this.propertyGroup = propertyGroup;
    }

    function searchExpressions(elem,data,prop){
        if(data.x){
            prop.k = true;
            prop.x = true;
            if(prop.getValue) {
                prop.getPreValue = prop.getValue;
            }

            prop.initiateExpression = ExpressionManager.initiateExpression;
            prop.getValue = prop.initiateExpression(elem,data,prop);
        }
    }

    function getTransformValueAtTime(time) {
        //console.log('time:', time)
    }

    function getTransformStaticValueAtTime(time) {

    }

    var TextExpressionSelectorProp = (function(){

        function getValueProxy(index,total){
            this.textIndex = index+1;
            this.textTotal = total;
            this.getValue();
            return this.v;
        }

        return function TextExpressionSelectorProp(elem,data){
            this.pv = 1;
            this.comp = elem.comp;
            this.elem = elem;
            this.mult = 0.01;
            this.propType = 'textSelector';
            this.textTotal = data.totalChars;
            this.selectorValue = 100;
            this.lastValue = [1,1,1];
            searchExpressions.bind(this)(elem,data,this);
            this.getMult = getValueProxy;
            this.getVelocityAtTime = getVelocityAtTime;
            if(this.kf){
                this.getValueAtTime = getValueAtTime.bind(this);
            } else {
                this.getValueAtTime = getStaticValueAtTime.bind(this);
            }
            this.setGroupProperty = setGroupProperty;
        };
    }());

    var getTransformProperty = TransformPropertyFactory.getTransformProperty;
    TransformPropertyFactory.getTransformProperty = function(elem, data, arr) {
        var prop = getTransformProperty(elem, data, arr);
        if(prop.dynamicProperties.length) {
            prop.getValueAtTime = getTransformValueAtTime.bind(prop);
        } else {
            prop.getValueAtTime = getTransformStaticValueAtTime.bind(prop);
        }
        prop.setGroupProperty = setGroupProperty;
        return prop;
    };

    var propertyGetProp = PropertyFactory.getProp;
    PropertyFactory.getProp = function(elem,data,type, mult, arr){
        var prop = propertyGetProp(elem,data,type, mult, arr);
        //prop.getVelocityAtTime = getVelocityAtTime;
        //prop.loopOut = loopOut;
        //prop.loopIn = loopIn;
        if(prop.kf){
            prop.getValueAtTime = getValueAtTime.bind(prop);
        } else {
            prop.getValueAtTime = getStaticValueAtTime.bind(prop);
        }
        prop.setGroupProperty = setGroupProperty;
        prop.loopOut = loopOut;
        prop.loopIn = loopIn;
        prop.getVelocityAtTime = getVelocityAtTime;
        prop.numKeys = data.a === 1 ? data.k.length : 0;
        var isAdded = prop.k;
        prop.propertyIndex = data.ix;
        var value = 0;
        if(type !== 0) {
            value = createTypedArray('float32', data.a === 1 ?  data.k[0].s.length : data.k.length);
        }
        prop._cachingAtTime = {
            lastFrame: initialDefaultFrame,
            lastIndex: 0,
            value: value
        };
        searchExpressions(elem,data,prop);
        if(!isAdded && prop.x){
            arr.push(prop);
        }

        return prop;
    };

    function getShapeValueAtTime(frameNum) {
        //For now this caching object is created only when needed instead of creating it when the shape is initialized.
        if (!this._cachingAtTime) {
            this._cachingAtTime = {
                shapeValue: shape_pool.clone(this.pv),
                lastIndex: 0,
                lastTime: initialDefaultFrame
            };
        }
        if(frameNum !== this._cachingAtTime.lastTime) {
            this._cachingAtTime.lastTime = frameNum;
            frameNum *= this.elem.globalData.frameRate;
            this.interpolateShape(frameNum, this._cachingAtTime.shapeValue, false, this._cachingAtTime);
        }
        return this._cachingAtTime.shapeValue;
    }

    var ShapePropertyConstructorFunction = ShapePropertyFactory.getConstructorFunction();
    var KeyframedShapePropertyConstructorFunction = ShapePropertyFactory.getKeyframedConstructorFunction();

    function ShapeExpressions(){}
    ShapeExpressions.prototype = {
        vertices: function(prop, time){
            var shapePath = this.v;
            if(time !== undefined) {
                shapePath = this.getValueAtTime(time, 0);
            }
            var i, len = shapePath._length;
            var vertices = shapePath[prop];
            var points = shapePath.v;
            var arr = createSizedArray(len);
            for(i = 0; i < len; i += 1) {
                if(prop === 'i' || prop === 'o') {
                    arr[i] = [vertices[i][0] - points[i][0], vertices[i][1] - points[i][1]];
                } else {
                    arr[i] = [vertices[i][0], vertices[i][1]];
                }
                
            }
            return arr;
        },
        points: function(time){
            return this.vertices('v', time);
        },
        inTangents: function(time){
            return this.vertices('i', time);
        },
        outTangents: function(time){
            return this.vertices('o', time);
        },
        isClosed: function(){
            return this.v.c;
        },
        pointOnPath: function(perc, time){
            var shapePath = this.v;
            if(time !== undefined) {
                shapePath = this.getValueAtTime(time, 0);
            }
            if(!this._segmentsLength) {
                this._segmentsLength = bez.getSegmentsLength(shapePath);
            }

            var segmentsLength = this._segmentsLength;
            var lengths = segmentsLength.lengths;
            var lengthPos = segmentsLength.totalLength * perc;
            var i = 0, len = lengths.length;
            var j = 0, jLen;
            var accumulatedLength = 0, pt;
            while(i < len) {
                if(accumulatedLength + lengths[i].addedLength > lengthPos) {
                    var initIndex = i;
                    var endIndex = (shapePath.c && i === len - 1) ? 0 : i + 1;
                    var segmentPerc = (lengthPos - accumulatedLength)/lengths[i].addedLength;
                    pt = bez.getPointInSegment(shapePath.v[initIndex], shapePath.v[endIndex], shapePath.o[initIndex], shapePath.i[endIndex], segmentPerc, lengths[i]);
                    break;
                } else {
                    accumulatedLength += lengths[i].addedLength;
                }
                i += 1;
            }
            if(!pt){
                pt = shapePath.c ? [shapePath.v[0][0],shapePath.v[0][1]]:[shapePath.v[shapePath._length-1][0],shapePath.v[shapePath._length-1][1]];
            }
            return pt;
        },
        vectorOnPath: function(perc, time, vectorType){
            //perc doesn't use triple equality because it can be a Number object as well as a primitive.
            perc = perc == 1 ? this.v.c ? 0 : 0.999 : perc;
            var pt1 = this.pointOnPath(perc, time);
            var pt2 = this.pointOnPath(perc + 0.001, time);
            var xLength = pt2[0] - pt1[0];
            var yLength = pt2[1] - pt1[1];
            var magnitude = Math.sqrt(Math.pow(xLength,2) + Math.pow(yLength,2));
            var unitVector = vectorType === 'tangent' ? [xLength/magnitude, yLength/magnitude] : [-yLength/magnitude, xLength/magnitude];
            return unitVector;
        },
        tangentOnPath: function(perc, time){
            return this.vectorOnPath(perc, time, 'tangent');
        },
        normalOnPath: function(perc, time){
            return this.vectorOnPath(perc, time, 'normal');
        },
        setGroupProperty: setGroupProperty,
        getValueAtTime: getStaticValueAtTime
    };
    extendPrototype([ShapeExpressions], ShapePropertyConstructorFunction);
    extendPrototype([ShapeExpressions], KeyframedShapePropertyConstructorFunction);
    KeyframedShapePropertyConstructorFunction.prototype.getValueAtTime = getShapeValueAtTime;
    KeyframedShapePropertyConstructorFunction.prototype.initiateExpression = ExpressionManager.initiateExpression;

    var propertyGetShapeProp = ShapePropertyFactory.getShapeProp;
    ShapePropertyFactory.getShapeProp = function(elem,data,type, arr, trims){
        var prop = propertyGetShapeProp(elem,data,type, arr, trims);
        var isAdded = prop.k;
        prop.propertyIndex = data.ix;
        prop.lock = false;
        if(type === 3){
            searchExpressions(elem,data.pt,prop);
        } else if(type === 4){
            searchExpressions(elem,data.ks,prop);
        }
        if(!isAdded && prop.x){
            arr.push(prop);
        }
        return prop;
    };

    var propertyGetTextProp = TextSelectorProp.getTextSelectorProp;
    TextSelectorProp.getTextSelectorProp = function(elem, data,arr){
        if(data.t === 1){
            return new TextExpressionSelectorProp(elem, data,arr);
        } else {
            return propertyGetTextProp(elem,data,arr);
        }
    };
}());
(function addDecorator() {

    function searchExpressions(){
        if(this.data.d.x){
            this.comp = this.elem.comp;
            if(this.getValue) {
                this.getPreValue = this.getValue;
            }
            this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this);
            this.getValue = this.getExpressionValue;
            return true;
        }
        return false;
    }

    TextProperty.prototype.searchProperty = function(){
        this.kf = this.searchExpressions() || this.data.d.k.length > 1;
        return this.kf;
    };

    TextProperty.prototype.getExpressionValue = function(num){
        this.calculateExpression();
        if(this._mdf) {
            this.currentData.t = this.v.toString();
            this.completeTextData(this.currentData);
        }
    };

    TextProperty.prototype.searchExpressions = searchExpressions;
    
}());
var ShapeExpressionInterface = (function(){

    function iterateElements(shapes,view, propertyGroup){
        var arr = [];
        var i, len = shapes ? shapes.length : 0;
        for(i=0;i<len;i+=1){
            if(shapes[i].ty == 'gr'){
                arr.push(groupInterfaceFactory(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'fl'){
                arr.push(fillInterfaceFactory(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'st'){
                arr.push(strokeInterfaceFactory(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'tm'){
                arr.push(trimInterfaceFactory(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'tr'){
                //arr.push(transformInterfaceFactory(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'el'){
                arr.push(ellipseInterfaceFactory(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'sr'){
                arr.push(starInterfaceFactory(shapes[i],view[i],propertyGroup));
            } else if(shapes[i].ty == 'sh'){
                arr.push(pathInterfaceFactory(shapes[i],view[i],propertyGroup));
            } else if(shapes[i].ty == 'rc'){
                arr.push(rectInterfaceFactory(shapes[i],view[i],propertyGroup));
            } else if(shapes[i].ty == 'rd'){
                arr.push(roundedInterfaceFactory(shapes[i],view[i],propertyGroup));
            } else if(shapes[i].ty == 'rp'){
                arr.push(repeaterInterfaceFactory(shapes[i],view[i],propertyGroup));
            } else{
                //console.log(shapes[i].ty);
            }
        }
        return arr;
    }

    function contentsInterfaceFactory(shape,view, propertyGroup){
       var interfaces;
       var interfaceFunction = function _interfaceFunction(value){
           var i = 0, len = interfaces.length;
            while(i<len){
                if(interfaces[i]._name === value || interfaces[i].mn === value || interfaces[i].propertyIndex === value || interfaces[i].ix === value || interfaces[i].ind === value){
                   return interfaces[i];
                }
                i+=1;
            }
            if(typeof value === 'number'){
               return interfaces[value-1];
            }
       };
       interfaceFunction.propertyGroup = function(val){
           if(val === 1){
               return interfaceFunction;
           } else{
               return propertyGroup(val-1);
           }
       };
       interfaces = iterateElements(shape.it, view.it, interfaceFunction.propertyGroup);
       interfaceFunction.numProperties = interfaces.length;
       interfaceFunction.propertyIndex = shape.cix;

       return interfaceFunction;
   }

    function groupInterfaceFactory(shape,view, propertyGroup){
        var interfaceFunction = function _interfaceFunction(value){
            switch(value){
                case 'ADBE Vectors Group':
                case 'Contents':
                case 2:
                    return interfaceFunction.content;
                //Not necessary for now. Keeping them here in case a new case appears
                //case 'ADBE Vector Transform Group':
                //case 3:
                default:
                    return interfaceFunction.transform;
            }
        };
        interfaceFunction.propertyGroup = function(val){
            if(val === 1){
                return interfaceFunction;
            } else{
                return propertyGroup(val-1);
            }
        };
        var content = contentsInterfaceFactory(shape,view,interfaceFunction.propertyGroup);
        var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1],view.it[view.it.length - 1],interfaceFunction.propertyGroup);
        interfaceFunction.content = content;
        interfaceFunction.transform = transformInterface;
        Object.defineProperty(interfaceFunction, '_name', {
            get: function(){
                return shape.nm;
            }
        });
        //interfaceFunction.content = interfaceFunction;
        interfaceFunction.numProperties = shape.np;
        interfaceFunction.propertyIndex = shape.ix;
        interfaceFunction.nm = shape.nm;
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function fillInterfaceFactory(shape,view,propertyGroup){
        function interfaceFunction(val){
            if(val === 'Color' || val === 'color'){
                return interfaceFunction.color;
            } else if(val === 'Opacity' || val === 'opacity'){
                return interfaceFunction.opacity;
            }
        }
        Object.defineProperties(interfaceFunction, {
            'color': {
                get: function() {
                    return ExpressionValue(view.c, 1 / view.c.mult, 'color');
                }
            },
            'opacity': {
                get: function() {
                    return ExpressionValue(view.o, 100);
                }
            },
            '_name': { value: shape.nm },
            'mn': { value: shape.mn }
        });

        view.c.setGroupProperty(propertyGroup);
        view.o.setGroupProperty(propertyGroup);
        return interfaceFunction;
    }

    function strokeInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val === 1){
                return ob;
            } else{
                return propertyGroup(val-1);
            }
        }
        function _dashPropertyGroup(val){
            if(val === 1){
                return dashOb;
            } else{
                return _propertyGroup(val-1);
            }
        }
        function addPropertyToDashOb(i) {
            Object.defineProperty(dashOb, shape.d[i].nm, {
                get: function(){
                    return ExpressionValue(view.d.dataProps[i].p);
                }
            });
        }
        var i, len = shape.d ? shape.d.length : 0;
        var dashOb = {};
        for (i = 0; i < len; i += 1) {
            addPropertyToDashOb(i);
            view.d.dataProps[i].p.setGroupProperty(_dashPropertyGroup);
        }

        function interfaceFunction(val){
            if(val === 'Color' || val === 'color'){
                return interfaceFunction.color;
            } else if(val === 'Opacity' || val === 'opacity'){
                return interfaceFunction.opacity;
            } else if(val === 'Stroke Width' || val === 'stroke width'){
                return interfaceFunction.strokeWidth;
            }
        }
        Object.defineProperties(interfaceFunction, {
            'color': {
                get: function() {
                    return ExpressionValue(view.c, 1 / view.c.mult, 'color');
                }
            },
            'opacity': {
                get: function() {
                    return ExpressionValue(view.o, 100);
                }
            },
            'strokeWidth': {
                get: function() {
                    return ExpressionValue(view.w);
                }
            },
            'dash': {
                get: function() {
                    return dashOb;
                }
            },
            '_name': { value: shape.nm },
            'mn': { value: shape.mn }
        });

        view.c.setGroupProperty(_propertyGroup);
        view.o.setGroupProperty(_propertyGroup);
        view.w.setGroupProperty(_propertyGroup);
        return interfaceFunction;
    }

    function trimInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        interfaceFunction.propertyIndex = shape.ix;

        view.s.setGroupProperty(_propertyGroup);
        view.e.setGroupProperty(_propertyGroup);
        view.o.setGroupProperty(_propertyGroup);

        function interfaceFunction(val){
            if(val === shape.e.ix || val === 'End' || val === 'end'){
                return interfaceFunction.end;
            }
            if(val === shape.s.ix){
                return interfaceFunction.start;
            }
            if(val === shape.o.ix){
                return interfaceFunction.offset;
            }
        }
        interfaceFunction.propertyIndex = shape.ix;

        Object.defineProperties(interfaceFunction, {
            'start': {
                get: function() {
                    return ExpressionValue(view.s, 1 / view.s.mult);
                }
            },
            'end': {
                get: function() {
                    return ExpressionValue(view.e, 1 / view.e.mult);
                }
            },
            'offset': {
                get: function() {
                    return ExpressionValue(view.o);
                }
            },
            '_name': { value: shape.nm }
        });
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function transformInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        view.transform.mProps.o.setGroupProperty(_propertyGroup);
        view.transform.mProps.p.setGroupProperty(_propertyGroup);
        view.transform.mProps.a.setGroupProperty(_propertyGroup);
        view.transform.mProps.s.setGroupProperty(_propertyGroup);
        view.transform.mProps.r.setGroupProperty(_propertyGroup);
        if(view.transform.mProps.sk){
            view.transform.mProps.sk.setGroupProperty(_propertyGroup);
            view.transform.mProps.sa.setGroupProperty(_propertyGroup);
        }
        view.transform.op.setGroupProperty(_propertyGroup);

        function interfaceFunction(value){
            if(shape.a.ix === value || value === 'Anchor Point'){
                return interfaceFunction.anchorPoint;
            }
            if(shape.o.ix === value || value === 'Opacity'){
                return interfaceFunction.opacity;
            }
            if(shape.p.ix === value || value === 'Position'){
                return interfaceFunction.position;
            }
            if(shape.r.ix === value || value === 'Rotation' || value === 'ADBE Vector Rotation'){
                return interfaceFunction.rotation;
            }
            if(shape.s.ix === value || value === 'Scale'){
                return interfaceFunction.scale;
            }
            if(shape.sk && shape.sk.ix === value || value === 'Skew'){
                return interfaceFunction.skew;
            }
            if(shape.sa && shape.sa.ix === value || value === 'Skew Axis'){
                return interfaceFunction.skewAxis;
            }

        }
        Object.defineProperties(interfaceFunction, {
            'opacity': {
                get: function(){
                    return ExpressionValue(view.transform.mProps.o, 1/view.transform.mProps.o.mult);
                }
            },
            'position': {
                get: function(){
                    return ExpressionValue(view.transform.mProps.p);
                }
            },
            'anchorPoint': {
                get: function(){
                    return ExpressionValue(view.transform.mProps.a);
                }
            },
            'scale': {
                get: function(){
                    return ExpressionValue(view.transform.mProps.s, 1 / view.transform.mProps.s.mult);
                }
            },
            'rotation': {
                get: function(){
                    return ExpressionValue(view.transform.mProps.r, 1 / view.transform.mProps.r.mult);
                }
            },
            'skew': {
                get: function(){
                    return ExpressionValue(view.transform.mProps.sk);
                }
            },
            'skewAxis': {
                get: function(){
                    return ExpressionValue(view.transform.mProps.sa);
                }
            },
            '_name': { value: shape.nm }
        });
        interfaceFunction.ty = 'tr';
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function ellipseInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        interfaceFunction.propertyIndex = shape.ix;
        var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
        prop.s.setGroupProperty(_propertyGroup);
        prop.p.setGroupProperty(_propertyGroup);
        function interfaceFunction(value){
            if(shape.p.ix === value){
                return interfaceFunction.position;
            }
            if(shape.s.ix === value){
                return interfaceFunction.size;
            }
        }
        Object.defineProperties(interfaceFunction, {
            'size': {
                get: function(){
                    return ExpressionValue(prop.s);
                }
            },
            'position': {
                get: function(){
                    return ExpressionValue(prop.p);
                }
            },
            '_name': { value: shape.nm }
        });
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function starInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
        interfaceFunction.propertyIndex = shape.ix;
        prop.or.setGroupProperty(_propertyGroup);
        prop.os.setGroupProperty(_propertyGroup);
        prop.pt.setGroupProperty(_propertyGroup);
        prop.p.setGroupProperty(_propertyGroup);
        prop.r.setGroupProperty(_propertyGroup);
        if(shape.ir){
            prop.ir.setGroupProperty(_propertyGroup);
            prop.is.setGroupProperty(_propertyGroup);
        }

        function interfaceFunction(value){
            if(shape.p.ix === value){
                return interfaceFunction.position;
            }
            if(shape.r.ix === value){
                return interfaceFunction.rotation;
            }
            if(shape.pt.ix === value){
                return interfaceFunction.points;
            }
            if(shape.or.ix === value || 'ADBE Vector Star Outer Radius' === value){
                return interfaceFunction.outerRadius;
            }
            if(shape.os.ix === value){
                return interfaceFunction.outerRoundness;
            }
            if(shape.ir && (shape.ir.ix === value || 'ADBE Vector Star Inner Radius' === value)){
                return interfaceFunction.innerRadius;
            }
            if(shape.is && shape.is.ix === value){
                return interfaceFunction.innerRoundness;
            }

        }
        Object.defineProperties(interfaceFunction, {
            'position': {
                get: function() {
                    return ExpressionValue(prop.p);
                }
            },
            'rotation': {
                get: function() {
                    return ExpressionValue(prop.r, 1 / prop.r.mult);
                }
            },
            'points': {
                get: function() {
                    return ExpressionValue(prop.pt);
                }
            },
            'outerRadius': {
                get: function() {
                    return ExpressionValue(prop.or);
                }
            },
            'outerRoundness': {
                get: function(){
                    return ExpressionValue(prop.os);
                }
            },
            'innerRadius': {
                get: function(){
                    if(!prop.ir){
                        return 0;
                    }
                    return ExpressionValue(prop.ir);
                }
            },
            'innerRoundness': {
                get: function(){
                    if(!prop.is){
                        return 0;
                    }
                    return ExpressionValue(prop.is, 1 / prop.is.mult);
                }
            },
            '_name': { value: shape.nm }
        });
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function rectInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
        interfaceFunction.propertyIndex = shape.ix;
        prop.p.setGroupProperty(_propertyGroup);
        prop.s.setGroupProperty(_propertyGroup);
        prop.r.setGroupProperty(_propertyGroup);

        function interfaceFunction(value){
            if(shape.p.ix === value){
                return interfaceFunction.position;
            }
            if(shape.r.ix === value){
                return interfaceFunction.roundness;
            }
            if(shape.s.ix === value || value === 'Size' || value === 'ADBE Vector Rect Size'){
                return interfaceFunction.size;
            }

        }
        Object.defineProperties(interfaceFunction, {
            'position': {
                get: function(){
                    return ExpressionValue(prop.p);
                }
            },
            'roundness': {
                get: function(){
                    return ExpressionValue(prop.r);
                }
            },
            'size': {
                get: function(){
                    return ExpressionValue(prop.s);
                }
            },
            '_name': { value: shape.nm }
        });
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function roundedInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        var prop = view;
        interfaceFunction.propertyIndex = shape.ix;
        prop.rd.setGroupProperty(_propertyGroup);

        function interfaceFunction(value){
            if(shape.r.ix === value || 'Round Corners 1' === value){
                return interfaceFunction.radius;
            }

        }
        Object.defineProperties(interfaceFunction, {
            'radius': {
                get: function() {
                    return ExpressionValue(prop.rd);
                }
            },
            '_name': { value: shape.nm }
        });
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function repeaterInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        var prop = view;
        interfaceFunction.propertyIndex = shape.ix;
        prop.c.setGroupProperty(_propertyGroup);
        prop.o.setGroupProperty(_propertyGroup);

        function interfaceFunction(value){
            if(shape.c.ix === value || 'Copies' === value){
                return interfaceFunction.copies;
            } else if(shape.o.ix === value || 'Offset' === value){
                return interfaceFunction.offset;
            }

        }
        Object.defineProperties(interfaceFunction, {
            'copies': {
                get: function(){
                    return ExpressionValue(prop.c);
                }
            },
            'offset': {
                get: function(){
                    return ExpressionValue(prop.o);
                }
            },
            '_name': { value: shape.nm }
        });
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function pathInterfaceFactory(shape,view,propertyGroup){
        var prop = view.sh;
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        prop.setGroupProperty(_propertyGroup);

        function interfaceFunction(val){
            if(val === 'Shape' || val === 'shape' || val === 'Path' || val === 'path' || val === 'ADBE Vector Shape' || val === 2){
                return interfaceFunction.path;
            }
        }
        Object.defineProperties(interfaceFunction, {
            'path': {
                get: function(){
                    if(prop.k){
                        prop.getValue();
                    }
                    return prop;
                }
            },
            'shape': {
                get: function(){
                    if(prop.k){
                        prop.getValue();
                    }
                    return prop;
                }
            },
            '_name': { value: shape.nm },
            'ix': { value: shape.ix },
            'mn': { value: shape.mn }
        });
        return interfaceFunction;
    }

    return function(shapes,view,propertyGroup) {
        var interfaces;
        function _interfaceFunction(value){
            if(typeof value === 'number'){
                return interfaces[value-1];
            } else {
                var i = 0, len = interfaces.length;
                while(i<len){
                    if(interfaces[i]._name === value){
                        return interfaces[i];
                    }
                    i+=1;
                }
            }
        }
        _interfaceFunction.propertyGroup = propertyGroup;
        interfaces = iterateElements(shapes, view, _interfaceFunction);
        return _interfaceFunction;
    };
}());

var TextExpressionInterface = (function(){
	return function(elem){
        var _prevValue, _sourceText;
        function _thisLayerFunction(){
        }
        Object.defineProperty(_thisLayerFunction, "sourceText", {
            get: function(){
                var stringValue = elem.textProperty.currentData.t;
                if(elem.textProperty.currentData.t !== _prevValue) {
                    elem.textProperty.currentData.t = _prevValue;
                    _sourceText = new String(stringValue);
                    //If stringValue is an empty string, eval returns undefined, so it has to be returned as a String primitive
                    _sourceText.value = stringValue ? stringValue : new String(stringValue);
                }
                return _sourceText;
            }
        });
        return _thisLayerFunction;
    };
}());
var LayerExpressionInterface = (function (){
    function toWorld(arr, time){
        var toWorldMat = new Matrix();
        toWorldMat.reset();
        var transformMat;
        if(time) {
            //Todo implement value at time on transform properties
            //transformMat = this._elem.finalTransform.mProp.getValueAtTime(time);
            transformMat = this._elem.finalTransform.mProp;
        } else {
            transformMat = this._elem.finalTransform.mProp;
        }
        transformMat.applyToMatrix(toWorldMat);
        if(this._elem.hierarchy && this._elem.hierarchy.length){
            var i, len = this._elem.hierarchy.length;
            for(i=0;i<len;i+=1){
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
            }
            return toWorldMat.applyToPointArray(arr[0],arr[1],arr[2]||0);
        }
        return toWorldMat.applyToPointArray(arr[0],arr[1],arr[2]||0);
    }
    function fromWorld(arr, time){
        var toWorldMat = new Matrix();
        toWorldMat.reset();
        var transformMat;
        if(time) {
            //Todo implement value at time on transform properties
            //transformMat = this._elem.finalTransform.mProp.getValueAtTime(time);
            transformMat = this._elem.finalTransform.mProp;
        } else {
            transformMat = this._elem.finalTransform.mProp;
        }
        transformMat.applyToMatrix(toWorldMat);
        if(this._elem.hierarchy && this._elem.hierarchy.length){
            var i, len = this._elem.hierarchy.length;
            for(i=0;i<len;i+=1){
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
            }
            return toWorldMat.inversePoint(arr);
        }
        return toWorldMat.inversePoint(arr);
    }
    function fromComp(arr){
        var toWorldMat = new Matrix();
        toWorldMat.reset();
        this._elem.finalTransform.mProp.applyToMatrix(toWorldMat);
        if(this._elem.hierarchy && this._elem.hierarchy.length){
            var i, len = this._elem.hierarchy.length;
            for(i=0;i<len;i+=1){
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
            }
            return toWorldMat.inversePoint(arr);
        }
        return toWorldMat.inversePoint(arr);
    }


    return function(elem){

        var transformInterface;

        function _registerMaskInterface(maskManager){
            _thisLayerFunction.mask = new MaskManagerInterface(maskManager, elem);
        }
        function _registerEffectsInterface(effects){
            _thisLayerFunction.effect = effects;
        }

        function _thisLayerFunction(name){
            switch(name){
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                    return _thisLayerFunction.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                    return transformInterface;
                case 4:
                case "ADBE Effect Parade":
                    return _thisLayerFunction.effect;
            }
        }
        _thisLayerFunction.toWorld = toWorld;
        _thisLayerFunction.fromWorld = fromWorld;
        _thisLayerFunction.toComp = toWorld;
        _thisLayerFunction.fromComp = fromComp;
        _thisLayerFunction.sourceRectAtTime = elem.sourceRectAtTime.bind(elem);
        _thisLayerFunction._elem = elem;
        transformInterface = TransformExpressionInterface(elem.finalTransform.mProp);
        var anchorPointDescriptor = getDescriptor(transformInterface, 'anchorPoint');
        Object.defineProperties(_thisLayerFunction,{
            hasParent: {
                get: function(){
                    return elem.hierarchy.length;
                }
            },
            parent: {
                get: function(){
                    return elem.hierarchy[0].layerInterface;
                }
            },
            rotation: getDescriptor(transformInterface, 'rotation'),
            scale: getDescriptor(transformInterface, 'scale'),
            position: getDescriptor(transformInterface, 'position'),
            opacity: getDescriptor(transformInterface, 'opacity'),
            anchorPoint: anchorPointDescriptor,
            anchor_point: anchorPointDescriptor,
            transform: {
                get: function () {
                    return transformInterface;
                }
            },
            active: {
                get: function(){
                    return elem.isInRange;
                }
            }
        });

        _thisLayerFunction.startTime = elem.data.st;
        _thisLayerFunction.index = elem.data.ind;
        _thisLayerFunction.source = elem.data.refId;
        _thisLayerFunction.height = elem.data.ty === 0 ? elem.data.h : 100;
        _thisLayerFunction.width = elem.data.ty === 0 ? elem.data.w : 100;

        _thisLayerFunction.registerMaskInterface = _registerMaskInterface;
        _thisLayerFunction.registerEffectsInterface = _registerEffectsInterface;
        return _thisLayerFunction;
    };
}());

var CompExpressionInterface = (function (){
    return function(comp){
        function _thisLayerFunction(name){
            var i=0, len = comp.layers.length;
            while(i<len){
                if(comp.layers[i].nm === name || comp.layers[i].ind === name){
                    return comp.elements[i].layerInterface;
                }
                i += 1;
            }
            return {active:false};
        }
        Object.defineProperty(_thisLayerFunction, "_name", { value:comp.data.nm });
        _thisLayerFunction.layer = _thisLayerFunction;
        _thisLayerFunction.pixelAspect = 1;
        _thisLayerFunction.height = comp.globalData.compSize.h;
        _thisLayerFunction.width = comp.globalData.compSize.w;
        _thisLayerFunction.pixelAspect = 1;
        _thisLayerFunction.frameDuration = 1/comp.globalData.frameRate;
        return _thisLayerFunction;
    };
}());
var TransformExpressionInterface = (function (){
    return function(transform){
        function _thisFunction(name){
            switch(name){
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                    return _thisFunction.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                    return _thisFunction.rotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                    return _thisFunction.position;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                    return _thisFunction.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                    return _thisFunction.opacity;
            }
        }

        Object.defineProperty(_thisFunction, "rotation", {
            get: function(){
                if(transform.r) {
                    return ExpressionValue(transform.r, 1/degToRads);
                } else {
                    return ExpressionValue(transform.rz, 1/degToRads);
                }
            }
        });
        Object.defineProperty(_thisFunction, "scale", {
            get: function () {
                return ExpressionValue(transform.s, 100);
            }
        });

        Object.defineProperty(_thisFunction, "position", {
            get: function () {
                if(transform.p) {
                    return ExpressionValue(transform.p);
                } else {
                    return [transform.px.v, transform.py.v, transform.pz ? transform.pz.v : 0];
                }
            }
        });

        Object.defineProperty(_thisFunction, "xPosition", {
            get: function () {
                return ExpressionValue(transform.px);
            }
        });

        Object.defineProperty(_thisFunction, "yPosition", {
            get: function () {
                return ExpressionValue(transform.py);
            }
        });

        Object.defineProperty(_thisFunction, "zPosition", {
            get: function () {
                return ExpressionValue(transform.pz);
            }
        });

        Object.defineProperty(_thisFunction, "anchorPoint", {
            get: function () {
                return ExpressionValue(transform.a);
            }
        });

        Object.defineProperty(_thisFunction, "opacity", {
            get: function () {
                return ExpressionValue(transform.o, 100);
            }
        });

        Object.defineProperty(_thisFunction, "skew", {
            get: function () {
                return ExpressionValue(transform.sk);
            }
        });

        Object.defineProperty(_thisFunction, "skewAxis", {
            get: function () {
                return ExpressionValue(transform.sa);
            }
        });

        Object.defineProperty(_thisFunction, "orientation", {
            get: function () {
                return ExpressionValue(transform.or);
            }
        });

        return _thisFunction;
    };
}());
var ProjectInterface = (function (){

    function registerComposition(comp){
        this.compositions.push(comp);
    }

    return function(){
        function _thisProjectFunction(name){
            var i = 0, len = this.compositions.length;
            while(i<len){
                if(this.compositions[i].data && this.compositions[i].data.nm === name){
                    if(this.compositions[i].prepareFrame) {
                        this.compositions[i].prepareFrame(this.compositions[i].data.xt ? this.currentFrame : this.compositions[i].renderedFrame);
                    }
                    return this.compositions[i].compInterface;
                }
                i+=1;
            }
        }

        _thisProjectFunction.compositions = [];
        _thisProjectFunction.currentFrame = 0;

        _thisProjectFunction.registerComposition = registerComposition;



        return _thisProjectFunction;
    };
}());
var EffectsExpressionInterface = (function (){
    var ob = {
        createEffectsInterface: createEffectsInterface
    };

    function createEffectsInterface(elem, propertyGroup){
        if(elem.effectsManager){

            var effectElements = [];
            var effectsData = elem.data.ef;
            var i, len = elem.effectsManager.effectElements.length;
            for(i=0;i<len;i+=1){
                effectElements.push(createGroupInterface(effectsData[i],elem.effectsManager.effectElements[i],propertyGroup,elem));
            }

            return function(name){
                var effects = elem.data.ef, i = 0, len = effects.length;
                while(i<len) {
                    if(name === effects[i].nm || name === effects[i].mn || name === effects[i].ix){
                        return effectElements[i];
                    }
                    i += 1;
                }
            };
        }
    }

    function createGroupInterface(data,elements, propertyGroup, elem){
        var effectElements = [];
        var i, len = data.ef.length;
        for(i=0;i<len;i+=1){
            if(data.ef[i].ty === 5){
                effectElements.push(createGroupInterface(data.ef[i],elements.effectElements[i],elements.effectElements[i].propertyGroup, elem));
            } else {
                effectElements.push(createValueInterface(elements.effectElements[i],data.ef[i].ty, elem, _propertyGroup));
            }
        }

        function _propertyGroup(val) {
            if(val === 1){
               return groupInterface;
            } else{
               return propertyGroup(val-1);
            }
        }

        var groupInterface = function(name){
            var effects = data.ef, i = 0, len = effects.length;
            while(i<len) {
                if(name === effects[i].nm || name === effects[i].mn || name === effects[i].ix){
                    if(effects[i].ty === 5){
                        return effectElements[i];
                    } else {
                        return effectElements[i]();
                    }
                }
                i += 1;
            }
            return effectElements[0]();
        };

        groupInterface.propertyGroup = _propertyGroup;

        if(data.mn === 'ADBE Color Control'){
            Object.defineProperty(groupInterface, 'color', {
                get: function(){
                    return effectElements[0]();
                }
            });
        }
        Object.defineProperty(groupInterface, 'numProperties', {
            get: function(){
                return data.np;
            }
        });
        groupInterface.active = data.en !== 0;
        return groupInterface;
    }

    function createValueInterface(element, type, elem, propertyGroup){
        function interfaceFunction(){
            if(type === 10){
                return elem.comp.compInterface(element.p.v);
            }
            return ExpressionValue(element.p);
        }

        if(element.p.setGroupProperty) {
            element.p.setGroupProperty(propertyGroup);
        }

        return interfaceFunction;
    }

    return ob;

}());
var MaskManagerInterface = (function(){

	function MaskInterface(mask, data){
		this._mask = mask;
		this._data = data;
	}
	Object.defineProperty(MaskInterface.prototype, 'maskPath', {
        get: function(){
                if(this._mask.prop.k){
                    this._mask.prop.getValue();
                }
                return this._mask.prop;
            }
        });

	var MaskManager = function(maskManager, elem){
		var _maskManager = maskManager;
		var _elem = elem;
		var _masksInterfaces = createSizedArray(maskManager.viewData.length);
		var i, len = maskManager.viewData.length;
		for(i = 0; i < len; i += 1) {
			_masksInterfaces[i] = new MaskInterface(maskManager.viewData[i], maskManager.masksProperties[i]);
		}

		var maskFunction = function(name){
			i = 0;
		    while(i<len){
		        if(maskManager.masksProperties[i].nm === name){
		            return _masksInterfaces[i];
		        }
		        i += 1;
		    }
		};
		return maskFunction;
	};
	return MaskManager;
}());

var ExpressionValue = (function() {
	return function(elementProp, mult, type) {
        var expressionValue, arrayValue;

		if (elementProp.k) {
            elementProp.getValue();
        }
        var i, len, arrValue, val;
        if (type) {
        	if(type === 'color') {
        		len = 4;
                expressionValue = createTypedArray('float32', len);
                arrValue = createTypedArray('float32', len);
		        for (i = 0; i < len; i += 1) {
		            expressionValue[i] = arrValue[i] = (mult && i < 3) ? elementProp.v[i] * mult : 1;
		        }
	        	expressionValue.value = arrValue;
        	}
        } else if (typeof elementProp.v === 'number' || elementProp.v instanceof Number){
            val = mult ? elementProp.v * mult : elementProp.v;
            expressionValue = new Number(val);
            expressionValue.value = val;
        } else {
        	len = elementProp.v.length;
            expressionValue = createTypedArray('float32', len);
            arrValue = createTypedArray('float32', len);
	        for (i = 0; i < len; i += 1) {
	            expressionValue[i] = arrValue[i] = mult ? elementProp.v[i] * mult : elementProp.v[i];
	        }
	        expressionValue.value = arrValue;
        }
        
        expressionValue.numKeys = elementProp.keyframes ? elementProp.keyframes.length : 0;
        expressionValue.key = function(pos) {
            if (!expressionValue.numKeys) {
                return 0;
            } else {
                return elementProp.keyframes[pos-1].t;
            }
        };
        expressionValue.valueAtTime = elementProp.getValueAtTime;
        expressionValue.propertyGroup = elementProp.propertyGroup;
        return expressionValue;
	};
}());
function SliderEffect(data,elem, dynamicProperties){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,dynamicProperties);
}
function AngleEffect(data,elem, dynamicProperties){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,dynamicProperties);
}
function ColorEffect(data,elem, dynamicProperties){
    this.p = PropertyFactory.getProp(elem,data.v,1,0,dynamicProperties);
}
function PointEffect(data,elem, dynamicProperties){
    this.p = PropertyFactory.getProp(elem,data.v,1,0,dynamicProperties);
}
function LayerIndexEffect(data,elem, dynamicProperties){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,dynamicProperties);
}
function MaskIndexEffect(data,elem, dynamicProperties){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,dynamicProperties);
}
function CheckboxEffect(data,elem, dynamicProperties){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,dynamicProperties);
}
function NoValueEffect(){
    this.p = {};
}
function EffectsManager(data,element,dynamicProperties){
    var effects = data.ef || [];
    this.effectElements = [];
    var i,len = effects.length;
    var effectItem;
    for(i=0;i<len;i++) {
        effectItem = new GroupEffect(effects[i],element,dynamicProperties);
        this.effectElements.push(effectItem);
    }
}

function GroupEffect(data,element,dynamicProperties){
    this.dynamicProperties = [];
    this.init(data,element,this.dynamicProperties);
    if(this.dynamicProperties.length){
        dynamicProperties.push(this);
    }
}

GroupEffect.prototype.getValue = function(){
    this._mdf = false;
    var i, len = this.dynamicProperties.length;
    for(i=0;i<len;i+=1){
        this.dynamicProperties[i].getValue();
        this._mdf = this.dynamicProperties[i]._mdf || this._mdf;
    }
};

GroupEffect.prototype.init = function(data,element,dynamicProperties){
    this.data = data;
    this._mdf = false;
    this.effectElements = [];
    var i, len = this.data.ef.length;
    var eff, effects = this.data.ef;
    for(i=0;i<len;i+=1){
        eff = null;
        switch(effects[i].ty){
            case 0:
                eff = new SliderEffect(effects[i],element,dynamicProperties);
                break;
            case 1:
                eff = new AngleEffect(effects[i],element,dynamicProperties);
                break;
            case 2:
                eff = new ColorEffect(effects[i],element,dynamicProperties);
                break;
            case 3:
                eff = new PointEffect(effects[i],element,dynamicProperties);
                break;
            case 4:
            case 7:
                eff = new CheckboxEffect(effects[i],element,dynamicProperties);
                break;
            case 10:
                eff = new LayerIndexEffect(effects[i],element,dynamicProperties);
                break;
            case 11:
                eff = new MaskIndexEffect(effects[i],element,dynamicProperties);
                break;
            case 5:
                eff = new EffectsManager(effects[i],element,dynamicProperties);
                break;
            //case 6:
            default:
                eff = new NoValueEffect(effects[i],element,dynamicProperties);
                break;
        }
        if(eff) {
            this.effectElements.push(eff);
        }
    }
};
    var lottiejs = {};

    function setLocationHref (href) {
        locationHref = href;
    }
    function play(animation){
        animationManager.play(animation);
    }

    function pause(animation) {
        animationManager.pause(animation);
    }

    function togglePause(animation) {
        animationManager.togglePause(animation);
    }

    function setSpeed(value, animation) {
        animationManager.setSpeed(value, animation);
    }

    function setDirection(value, animation) {
        animationManager.setDirection(value, animation);
    }

    function stop(animation) {
        animationManager.stop(animation);
    }

    function searchAnimations() {
        if (standalone === true) {
            animationManager.searchAnimations(animationData, standalone, renderer);
        } else {
            animationManager.searchAnimations();
        }
    }

    function registerAnimation(elem) {
        return animationManager.registerAnimation(elem);
    }

    function resize() {
        animationManager.resize();
    }

    /*function start() {
        animationManager.start();
    }*/

    function goToAndStop(val, isFrame, animation) {
        animationManager.goToAndStop(val, isFrame, animation);
    }

    function setSubframeRendering(flag) {
        subframeEnabled = flag;
    }

    function loadAnimation(params) {
        if (standalone === true) {
            params.animationData = JSON.parse(animationData);
        }
        return animationManager.loadAnimation(params);
    }

    function destroy(animation) {
        return animationManager.destroy(animation);
    }

    function setQuality(value) {
        if (typeof value === 'string') {
            switch (value) {
                case 'high':
                    defaultCurveSegments = 200;
                    break;
                case 'medium':
                    defaultCurveSegments = 50;
                    break;
                case 'low':
                    defaultCurveSegments = 10;
                    break;
            }
        } else if (!isNaN(value) && value > 1) {
            defaultCurveSegments = value;
        }
        if (defaultCurveSegments >= 50) {
            roundValues(false);
        } else {
            roundValues(true);
        }
    }

    function inBrowser() {
        return typeof navigator !== 'undefined';
    }

    function installPlugin(type, plugin) {
        if (type === 'expressions') {
            expressionsPlugin = plugin;
        }
    }

    function getFactory(name) {
        switch (name) {
            case "propertyFactory":
                return PropertyFactory;
            case "shapePropertyFactory":
                return ShapePropertyFactory;
            case "matrix":
                return Matrix;
        }
    }
    lottiejs.play = play;
    lottiejs.pause = pause;
    lottiejs.setLocationHref = setLocationHref;
    lottiejs.togglePause = togglePause;
    lottiejs.setSpeed = setSpeed;
    lottiejs.setDirection = setDirection;
    lottiejs.stop = stop;
    lottiejs.searchAnimations = searchAnimations;
    lottiejs.registerAnimation = registerAnimation;
    lottiejs.loadAnimation = loadAnimation;
    lottiejs.setSubframeRendering = setSubframeRendering;
    lottiejs.resize = resize;
    //lottiejs.start = start;
    lottiejs.goToAndStop = goToAndStop;
    lottiejs.destroy = destroy;
    lottiejs.setQuality = setQuality;
    lottiejs.inBrowser = inBrowser;
    lottiejs.installPlugin = installPlugin;
    lottiejs.__getFactory = getFactory;
    lottiejs.version = '5.1.1';

    function checkReady() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            searchAnimations();
        }
    }

    function getQueryVariable(variable) {
        var vars = queryString.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
    }
    var standalone = '__[STANDALONE]__';
    var animationData = '__[ANIMATIONDATA]__';
    var renderer = '';
    if (standalone) {
        var scripts = document.getElementsByTagName('script');
        var index = scripts.length - 1;
        var myScript = scripts[index] || {
            src: ''
        };
        var queryString = myScript.src.replace(/^[^\?]+\??/, '');
        renderer = getQueryVariable('renderer');
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return lottiejs;
}));