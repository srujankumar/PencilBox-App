/* Purch Ad Tag API V4.0. Copyright 2015 Purch, Inc.*/
var TMNTAG_VERSION="1.1";
/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */(function(){function N(p,r){function q(a){if(q[a]!==w)return q[a];var c;if("bug-string-char-index"==a)c="a"!="a"[0];else if("json"==a)c=q("json-stringify")&&q("json-parse");else{var e;if("json-stringify"==a){c=r.stringify;var b="function"==typeof c&&s;if(b){(e=function(){return 1}).toJSON=e;try{b="0"===c(0)&&"0"===c(new t)&&'""'==c(new A)&&c(u)===w&&c(w)===w&&c()===w&&"1"===c(e)&&"[1]"==c([e])&&"[null]"==c([w])&&"null"==c(null)&&"[null,null,null]"==c([w,u,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==c({a:[e,!0,!1,null,"\x00\b\n\f\r\t"]})&&"1"===c(null,e)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new C(-864E13))&&'"+275760-09-13T00:00:00.000Z"'==c(new C(864E13))&&'"-000001-01-01T00:00:00.000Z"'==c(new C(-621987552E5))&&'"1969-12-31T23:59:59.999Z"'==c(new C(-1))}catch(f){b=!1}}c=b}if("json-parse"==a){c=r.parse;if("function"==typeof c)try{if(0===c("0")&&!c(!1)){e=c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');var n=5==e.a.length&&1===e.a[0];if(n){try{n=!c('"\t"')}catch(d){}if(n)try{n=1!==c("01")}catch(g){}if(n)try{n=1!==c("1.")}catch(m){}}}}catch(X){n=!1}c=n}}return q[a]=!!c}p||(p=k.Object());r||(r=k.Object());var t=p.Number||k.Number,A=p.String||k.String,H=p.Object||k.Object,C=p.Date||k.Date,G=p.SyntaxError||k.SyntaxError,K=p.TypeError||k.TypeError,L=p.Math||k.Math,I=p.JSON||k.JSON;"object"==typeof I&&I&&(r.stringify=I.stringify,r.parse=I.parse);var H=H.prototype,u=H.toString,v,B,w,s=new C(-0xc782b5b800cec);try{s=-109252==s.getUTCFullYear()&&0===s.getUTCMonth()&&1===s.getUTCDate()&&10==s.getUTCHours()&&37==s.getUTCMinutes()&&6==s.getUTCSeconds()&&708==s.getUTCMilliseconds()}catch(Q){}if(!q("json")){var D=q("bug-string-char-index");if(!s)var x=L.floor,M=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,c){return M[c]+365*(a-1970)+x((a-1969+(c=+(1<c)))/4)-x((a-1901+c)/100)+x((a-1601+c)/400)};(v=H.hasOwnProperty)||(v=function(a){var c={},e;(c.__proto__=null,c.__proto__={toString:1},c).toString!=u?v=function(a){var c=this.__proto__;a=a in(this.__proto__=null,this);this.__proto__=c;return a}:(e=c.constructor,v=function(a){var c=(this.constructor||e).prototype;return a in this&&!(a in c&&this[a]===c[a])});c=null;return v.call(this,a)});B=function(a,c){var e=0,b,f,n;(b=function(){this.valueOf=0}).prototype.valueOf=0;f=new b;for(n in f)v.call(f,n)&&e++;b=f=null;e?B=2==e?function(a,c){var e={},b="[object Function]"==u.call(a),f;for(f in a)b&&"prototype"==f||v.call(e,f)||!(e[f]=1)||!v.call(a,f)||c(f)}:function(a,c){var e="[object Function]"==u.call(a),b,f;for(b in a)e&&"prototype"==b||!v.call(a,b)||(f="constructor"===b)||c(b);(f||v.call(a,b="constructor"))&&c(b)}:(f="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),B=function(a,c){var e="[object Function]"==u.call(a),b,h=!e&&"function"!=typeof a.constructor&&F[typeof a.hasOwnProperty]&&a.hasOwnProperty||v;for(b in a)e&&"prototype"==b||!h.call(a,b)||c(b);for(e=f.length;b=f[--e];h.call(a,b)&&c(b));});return B(a,c)};if(!q("json-stringify")){var U={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},y=function(a,c){return("000000"+(c||0)).slice(-a)},R=function(a){for(var c='"',b=0,h=a.length,f=!D||10<h,n=f&&(D?a.split(""):a);b<h;b++){var d=a.charCodeAt(b);switch(d){case 8:case 9:case 10:case 12:case 13:case 34:case 92:c+=U[d];break;default:if(32>d){c+="\\u00"+y(2,d.toString(16));break}c+=f?n[b]:a.charAt(b)}}return c+'"'},O=function(a,c,b,h,f,n,d){var g,m,k,l,p,r,s,t,q;try{g=c[a]}catch(z){}if("object"==typeof g&&g)if(m=u.call(g),"[object Date]"!=m||v.call(g,"toJSON"))"function"==typeof g.toJSON&&("[object Number]"!=m&&"[object String]"!=m&&"[object Array]"!=m||v.call(g,"toJSON"))&&(g=g.toJSON(a));else if(g>-1/0&&g<1/0){if(E){l=x(g/864E5);for(m=x(l/365.2425)+1970-1;E(m+1,0)<=l;m++);for(k=x((l-E(m,0))/30.42);E(m,k+1)<=l;k++);l=1+l-E(m,k);p=(g%864E5+864E5)%864E5;r=x(p/36E5)%24;s=x(p/6E4)%60;t=x(p/1E3)%60;p%=1E3}else m=g.getUTCFullYear(),k=g.getUTCMonth(),l=g.getUTCDate(),r=g.getUTCHours(),s=g.getUTCMinutes(),t=g.getUTCSeconds(),p=g.getUTCMilliseconds();g=(0>=m||1E4<=m?(0>m?"-":"+")+y(6,0>m?-m:m):y(4,m))+"-"+y(2,k+1)+"-"+y(2,l)+"T"+y(2,r)+":"+y(2,s)+":"+y(2,t)+"."+y(3,p)+"Z"}else g=null;b&&(g=b.call(c,a,g));if(null===g)return"null";m=u.call(g);if("[object Boolean]"==m)return""+g;if("[object Number]"==m)return g>-1/0&&g<1/0?""+g:"null";if("[object String]"==m)return R(""+g);if("object"==typeof g){for(a=d.length;a--;)if(d[a]===g)throw K();d.push(g);q=[];c=n;n+=f;if("[object Array]"==m){k=0;for(a=g.length;k<a;k++)m=O(k,g,b,h,f,n,d),q.push(m===w?"null":m);a=q.length?f?"[\n"+n+q.join(",\n"+n)+"\n"+c+"]":"["+q.join(",")+"]":"[]"}else B(h||g,function(a){var c=O(a,g,b,h,f,n,d);c!==w&&q.push(R(a)+":"+(f?" ":"")+c)}),a=q.length?f?"{\n"+n+q.join(",\n"+n)+"\n"+c+"}":"{"+q.join(",")+"}":"{}";d.pop();return a}};r.stringify=function(a,c,b){var h,f,n,d;if(F[typeof c]&&c)if("[object Function]"==(d=u.call(c)))f=c;else if("[object Array]"==d){n={};for(var g=0,k=c.length,l;g<k;l=c[g++],(d=u.call(l),"[object String]"==d||"[object Number]"==d)&&(n[l]=1));}if(b)if("[object Number]"==(d=u.call(b))){if(0<(b-=b%1))for(h="",10<b&&(b=10);h.length<b;h+=" ");}else"[object String]"==d&&(h=10>=b.length?b:b.slice(0,10));return O("",(l={},l[""]=a,l),f,n,h,"",[])}}if(!q("json-parse")){var V=A.fromCharCode,W={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},b,J,l=function(){b=J=null;throw G();},z=function(){for(var a=J,c=a.length,e,h,f,k,d;b<c;)switch(d=a.charCodeAt(b),d){case 9:case 10:case 13:case 32:b++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=D?a.charAt(b):a[b],b++,e;case 34:e="@";for(b++;b<c;)if(d=a.charCodeAt(b),32>d)l();else if(92==d)switch(d=a.charCodeAt(++b),d){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=W[d];b++;break;case 117:h=++b;for(f=b+4;b<f;b++)d=a.charCodeAt(b),48<=d&&57>=d||97<=d&&102>=d||65<=d&&70>=d||l();e+=V("0x"+a.slice(h,b));break;default:l()}else{if(34==d)break;d=a.charCodeAt(b);for(h=b;32<=d&&92!=d&&34!=d;)d=a.charCodeAt(++b);e+=a.slice(h,b)}if(34==a.charCodeAt(b))return b++,e;l();default:h=b;45==d&&(k=!0,d=a.charCodeAt(++b));if(48<=d&&57>=d){for(48==d&&(d=a.charCodeAt(b+1),48<=d&&57>=d)&&l();b<c&&(d=a.charCodeAt(b),48<=d&&57>=d);b++);if(46==a.charCodeAt(b)){for(f=++b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&l();b=f}d=a.charCodeAt(b);if(101==d||69==d){d=a.charCodeAt(++b);43!=d&&45!=d||b++;for(f=b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&l();b=f}return+a.slice(h,b)}k&&l();if("true"==a.slice(b,b+4))return b+=4,!0;if("false"==a.slice(b,b+5))return b+=5,!1;if("null"==a.slice(b,b+4))return b+=4,null;l()}return"$"},P=function(a){var c,b;"$"==a&&l();if("string"==typeof a){if("@"==(D?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(c=[];;b||(b=!0)){a=z();if("]"==a)break;b&&(","==a?(a=z(),"]"==a&&l()):l());","==a&&l();c.push(P(a))}return c}if("{"==a){for(c={};;b||(b=!0)){a=z();if("}"==a)break;b&&(","==a?(a=z(),"}"==a&&l()):l());","!=a&&"string"==typeof a&&"@"==(D?a.charAt(0):a[0])&&":"==z()||l();c[a.slice(1)]=P(z())}return c}l()}return a},T=function(a,b,e){e=S(a,b,e);e===w?delete a[b]:a[b]=e},S=function(a,b,e){var h=a[b],f;if("object"==typeof h&&h)if("[object Array]"==u.call(h))for(f=h.length;f--;)T(h,f,e);else B(h,function(a){T(h,a,e)});return e.call(a,b,h)};r.parse=function(a,c){var e,h;b=0;J=""+a;e=P(z());"$"!=z()&&l();b=J=null;return c&&"[object Function]"==u.call(c)?S((h={},h[""]=e,h),"",c):e}}}r.runInContext=N;return r}var K=typeof define==="function"&&define.amd,F={"function":!0,object:!0},G=F[typeof exports]&&exports&&!exports.nodeType&&exports,k=F[typeof window]&&window||this,t=G&&F[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;!t||t.global!==t&&t.window!==t&&t.self!==t||(k=t);if(G&&!K)N(k,G);else{var L=k.JSON,Q=k.JSON3,M=!1,A=N(k,k.JSON3={noConflict:function(){M||(M=!0,k.JSON=L,k.JSON3=Q,L=Q=null);return A}});k.JSON={parse:A.parse,stringify:A.stringify}}K&&define(function(){return A})}).call(this);
(function(){
  if(document.addEventListener) {
	  window.tmntag_ready = function (handler) {
		  document.addEventListener("DOMContentLoaded", handler);
		  }
  } else if (document.attachEvent) {
	  window.tmntag_ready = function (handler) {
      var boundedHandler = function() {
    	  if ( document.readyState === "complete" ) {
    		  return handler.apply(document);
          }
      };
      document.attachEvent("onreadystatechange", boundedHandler);
    }
  } 
})();
(function() {
	var onblur = function(){
		for (var i=0; tmntagCache && i<tmntagCache.length; i++) {
			if (tmntagCache[i] && tmntagCache[i]['isMouseOver']) {
			    var rnd = Math.floor(Math.random() * 11000);
			    var e   = document.createElement('script');
			    e.type  = 'text/javascript';
			    e.src = 'http://ads.servebom.com/event.js?t=CC&id='+((top.window.requestid)?top.window.requestid:0)+'&bid=&cp=0&bdrid=&crid='+tmntagCache[i].div+'&ad=&r='+rnd;
			    var scripts = document.getElementsByTagName('script')[0];
			    scripts.parentNode.insertBefore(e, scripts);
			}
		}
	};
        if(window.addEventListener) {
           window.addEventListener('blur', onblur);
	   window.addEventListener('focusout', onblur);
	   window.addEventListener('focus', function() {
		window.addEventListener('blur', onblur);
	   });
       }
})();
tmntag_getAdUnit = function(unitId) {
  for(var i = 0; i < tmntag.a.length; i++) {
    if (tmntag.a[i].d === unitId) {
      return tmntag.a[i];
    }
  }
  return false;
}
tmntag_timestamp = function() {
    var date = new Date();
    /*zero-pad a single zero if needed*/
    var zp = function (val) {
        return (val <= 9 ? '0' + val : '' + val);
    }

    /*zero-pad up to two zeroes if needed*/
    var zp2 = function(val) {
        return val <= 99? (val <=9? '00' + val : '0' + val) : ('' + val ) ;
    }

    var d = date.getDate();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var h = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    return '' + y + '-' + zp(m) + '-' + zp(d) + ' ' + zp(h) + ':' + zp(min) + ':' + zp(s);
};
tmntag_inIframe = function() {
	return (top !== self);
}
tmntag_IEVersion = function() {
  var ret = -1;
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      ret = parseFloat( RegExp.$1 );
  }
  return ret;
}
tmntag_isArray = function(object) {
    if (object.constructor === Array) return true;
    else return false;
}
tmntag_getAdunitFromCache = function(divId){
	for (var i=0; i< tmntagCache.length; i++) {
		if (typeof tmntagCache[i].div != 'undefined' && tmntagCache[i].div == divId){
			return tmntagCache[i];
		}		
	}
	return null;
}
var tmntag_registerMouseOver = function(divId) {
	var e = document.getElementById(divId);
	var adunit = tmntag_getAdunitFromCache(divId);
	if (adunit && e && e.childNodes && e.childNodes.length>0) {
		e = e.childNodes[0];
		if (e && e['tagName']==='IFRAME') {
	       e.addEventListener('mouseover', function(){adunit['isMouseOver']=true;});
           e.addEventListener('mouseout', function(){adunit['isMouseOver']=false;});
		} else if (e && e.childNodes && e.childNodes.length>0) {
			e = e.childNodes[0];
			if (e && e['tagName']==='IFRAME') {
			   e.addEventListener('mouseover', function(){adunit['isMouseOver']=true;});
			   e.addEventListener('mouseout', function(){adunit['isMouseOver']=false;});
			}
		}
	}
}
var tmntag_defineSlot = function (divId) {
	var slot;
	var unit =  tmntag_getAdUnit(divId);
	var unitCached = tmntag_getAdunitFromCache(divId);
	
	/* inline markup */
	try {
		if (tmntag.markupsInfo && tmntag.markupsInfo[unit.d] && tmntag.markupsInfo[unit.d]['inline']) {
			var div = unit.d;
			var markupinfo = tmntag.markupsInfo[div];
			if (markupinfo) {
				var ddiv = document.createElement("div");
				ddiv.style.border="0pt none";
				ddiv.style.display="inline-block";
				ddiv.style.width=(markupinfo["width"] || 0)+"px";
				ddiv.style.height=(markupinfo["height"] || 0)+"px";
				var iframe = document.createElement("iframe");
				iframe.frameBorder=0;
				iframe.scrolling="no";
				iframe.marginwidth=0;
				iframe.marginheight=0;
				iframe.style.width=(markupinfo["width"] || 0)+"px";
				iframe.style.height=(markupinfo["height"] || 0)+"px";
				iframe.style.border="0pt none";
				iframe.style.margin="1px 0 0";
				iframe.width = markupinfo["width"] || 0;
				iframe.height = markupinfo["height"] || 0;
				ddiv.appendChild(iframe);
				var e = document.getElementById(div);
				if (e) {
					e.appendChild(ddiv);
				}
				var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;					
				var content = '<!DOCTYPE html><body marginheight="0" marginwidth="0">'+tmntag.markups[div]+'</body></html>';
				iframe.contentWindow.contents = content;
				iframe.src = 'javascript:window["contents"]';
				tmntag.onAdunitRenderedCallbackFunction({div:div,
		            size: {width:markupinfo["width"] || 0,height:markupinfo["height"] || 0}});
			}
			return null;
		}
	} catch (exception) {
       console && console.error && console.error(exception);
	}
	/* /inline markup */
	
	if (unit.z) {
	   slot = googletag.defineSlot(unit.s, unit.z, unit.d).addService(googletag.pubads());
	} else {
		 var e = document.getElementById(unit.d);
		 if (e) {
				e.style.height="0px";
		 }
	   slot = googletag.defineOutOfPageSlot(unit.s, unit.d).addService(googletag.pubads());
	}
	if (unit.c) {
		slot.addService(googletag.companionAds().setRefreshUnfilledSlots(unit.c));
	}
	if(typeof tmntag.adtargets!='undefined') {
	   var targetData = tmntag.adtargets[unit.d];
	   for (var j=0; typeof targetData!='undefined' && j<targetData.length; j++) {
		if(targetData[j][0]==='_bd' && targetData[j][1]==='deal') targetData[j][1]='bid';
			slot.setTargeting(targetData[j][0], targetData[j][1]);
	   }
	}
	
	if(unitCached && typeof unitCached.sizeMapping!='undefined') {
	   slot.defineSizeMapping(unitCached.sizeMapping);
	}
	tmntag.slots[divId]=slot;
	
	return slot;
}

var tmntag_setGptLoaded = function () {
	tmntag_gptloaded = true;
}

tmntag_gptloaded = false;
tmntag_callbacks = new function(){
	this.callback = [];
	this.callback_executed = [];
	
	this.pushCallback = function (func, params) {
		if(typeof params !== 'undefined') {
			this.callback.push({'callback' : func, 'params' : params});
		}else{
			this.callback.push({'callback' : func});
		}
	};
	
	this.executeCallbacks = function() {
		var size = this.callback.length;
		if(size > 0){
			var i = 0;
			while (i<size) {
				var acallback = this.callback[0];
				if(typeof acallback.params !== 'undefined') {
					acallback.callback.apply(null, acallback.params);
				} else {
					acallback.callback();
				}
				this.callback.splice(0, 1);
				this.callback_executed.push(acallback);
				i++;
			}
		}
	};
};
tmntag_il = true;
tmntag_async = false;
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var tmntag={};
var tmntagCache=[];
tmntag.iframebust=true;
tmntagDisplayed={};
tmntag.sr=true;
tmntag.ced=true;
tmntag.a=[];
tmntag.slots={};
tmntag.l=encodeURIComponent(window.top.document.location.href);
tmntag.t=tmntag_timestamp();
tmntag.tz=new Date().getTimezoneOffset();
tmntag.su=0;
tmntag.isAb = true;
tmntag.onAdunitRenderedCallbackFunction = function(){};
tmntag.placementCustomID = function (placementCustomID) {
	tmntag.pc=placementCustomID;
}
tmntag.placement = function (placementId) {
	tmntag.p=placementId;
}
tmntag.account = function (account) {
	tmntag.s=account;
}
tmntag.adunit = function (adunitObject) {
	var a = {};
	if (adunitObject.account) {
		a.s = adunitObject.account;
	} else if (tmntag.s) {
		a.s = tmntag.s;
	}
	if (adunitObject.sizes) {
		a.z = adunitObject.sizes;
	}
	if (adunitObject.div) {
		a.d = adunitObject.div;
	}
	if (adunitObject.targeting) {
		a.g = adunitObject.targeting;
	} else {
		a.g={};
	}
	if (adunitObject.companion) {
        a.c = adunitObject.companion;
    }
	tmntag.a.push(a);
	tmntagCache.push(adunitObject);
	return a;
}
tmntag.adunitTarget = function (adunitObject, key, value) {
	adunitObject.g[key] = value;
}
tmntag.target = function (targetingMap) {
	try {
		if (typeof targetingMap != 'object' || targetingMap instanceof Array) return;
		if (!tmntag.g) {
			tmntag.g = targetingMap;
		}
		for (var key in targetingMap) {
	  		if (targetingMap.hasOwnProperty(key)) {
	  			var value = targetingMap[key];
	  			if (value && tmntag_isArray(value)) {
	  				for (var i=0; i<value.length; i++) {
	  					value[i] = value[i].replace(/'|&amp;|&|#|\r\n|\r|\n|\t|\f|\%0A|\"|\%22|\%5C|\%23|\%26|\%26|\%09/gm, "");
	  				}
	  				tmntag.g[key.replace(/'|&|#/g, "")]= value;
	  			} else if (value) {
	  				tmntag.g[key.replace(/'|&|#/g, "")]= value.replace(/'|&amp;|&|#|\r\n|\r|\n|\t|\f|\%0A|\"|\%22|\%5C|\%23|\%26|\%26|\%09/gm, "");
	  			}
			}
		}
	} catch (exception) {
		return console && console.error && console.error(exception);
	}
}
tmntag.location = function (location) {
	tmntag.l = encodeURIComponent(location);
	tmntag.su=1;
}
tmntag.adTag = function (divid, insertDiv) {
	try{
		var unit = tmntag_getAdunitFromCache(divid);
		if(!unit) {
			if ((typeof insertDiv=='undefined' || insertDiv ) && !document.getElementById(divid)){
				tmntag_callbacks.pushCallback(tmntag.adTag , [divid, false]);
				if (typeof insertDiv=='undefined' /*&& document.readyState == 'loading'*/) {
				  document.write("<div id=\""+divid+"\"></div>");
				}
			} else if (typeof insertDiv=='undefined') {
				tmntag_callbacks.pushCallback(tmntag.adTag , [divid]);
			} else {
				tmntag_callbacks.pushCallback(tmntag.adTag , [divid, insertDiv]);
			}
			return;
		}
		var dynamic = (typeof unit.adunitRule !== 'undefined' && typeof unit.adunitRule == 'function' && unit.adunitRule(divid) == true);
		
		if(dynamic && typeof tmntag_il !== 'undefined' && tmntag_il == true) {
			tmntag.disableInitialLoad();
		}

                if(typeof unit.adunitRule == 'undefined' || dynamic) {
                       if (typeof insertDiv=='undefined' || insertDiv ) document.write("<div id=\""+divid+"\"></div>");
			
                        /* div exists for sure */
                        if (!unit.sizes) {var e = document.getElementById(divid); 
                           if (e) {e.style.height="0px";}
                        }

			if(typeof tmntag_il !== 'undefined' && tmntag_il == false && dynamic == true) {
				var callback = function(){
					googletag.cmd.push(function() {
						var slot = tmntag_defineSlot(divid);
						googletag.display(divid);
					});
					
					/* if we have dynamic zones, clone them */
					var dynamicZones = document.querySelectorAll('.purchrtb-dynamic');
					for(var k = 0, len = dynamicZones.length; k < len; k++) {
						var i = dynamicZones[k].id.lastIndexOf('-');
						var account = '';
						if (i>0) {
							var origId = dynamicZones[k].id.substring(0, i);
							var origUnit  = tmntag_getAdUnit(origId);
							if (origUnit)
								account = origUnit.s;
						}
						if (account.length>0) {
							var a = account.split("/");
						    if (a && a.length>0) {
						    	var acc = a.pop();
						    	if (!isNaN(acc)) {
						    		a.push((acc*1)+(k+1));
						    		account = a.join("/");
						    	}
						    } 
							tmntag.adunitClone(divid, dynamicZones[k].id, {s:account});
					    } else {
							tmntag.adunitClone(divid, dynamicZones[k].id);
					    }
						dynamicZones[k].className = '';
					}
					
					tmntagDisplayed[divid]=1;
				};
					
				if(tmntag_gptloaded == true) {
					callback();
  					/*googletag.cmd.push(function() {
  						googletag.pubads().refresh([tmntag.slots[divid]]);
                      });*/
				} else {
					tmntag_callbacks.pushCallback(callback);
				}
			}else{
					googletag.cmd.push(function() {
						googletag.display(divid);
					});
					tmntagDisplayed[divid]=1;
			}	
		}
	} catch(exception) {
		return console && console.error && console.error(exception);
	}
}
tmntag.refresh = function (divIds, targeting) {
    var refreshRegular = function (divIds, targeting) {
    var a = [];
    var at = [];
    if (typeof divIds=='undefined') {
      googletag.pubads().refresh();
      return;
    } else if (divIds instanceof Array){
      for (var id in divIds) {
        var slot = tmntag.slots[divIds[id]];
        if (slot) {
          a.push(slot);
        }
      }
    } else {
      var slot = tmntag.slots[divIds];
      if (slot) {
        a.push(slot);
      }
    }
    if (a.length>0) {
      for (var slot in a) {
        if (targeting) {
          a[slot].clearTargeting();
          for (var key in targeting) {
            if (targeting.hasOwnProperty(key)) {
              a[slot].setTargeting(key, targeting[key]);
            }
          }
        }
      }
      googletag.pubads().refresh(a);
    }
    return console && console.info && console.info("Regular refresh "+divIds);
  };
  var refreshClone = function(divId, targeting) {
    tmntag.aMap = tmntag.aMap || {};  
    tmntag.aMap[divId] = tmntag.aMap[divId] || [];  
    if (divId == 'purchrtb-zonepub16') {return true;}
    var target = document.getElementById(divId) || document.getElementById(tmntag.aMap[divId][tmntag.aMap[divId].length - 1]);
    if (!target) return;
    var    parent = target.parentNode,
      targetHeight = target.offsetHeight,        
      newDiv = document.createElement('div'),
      cloned = parent.querySelectorAll(".purch-cloned");

    var newId = divId + '-' + tmntag.aMap[divId].length;
    tmntag.aMap[divId].push(newId);

    newDiv.id = newId;
    newDiv.setAttribute("class", "purch-cloned"); 
    parent.style.minHeight = '90px'; /*(tmntag.slots[divId].w[0].a)+ 'px';*/
    parent.insertBefore(newDiv, target);
    tmntag.adunitClone(divId, tmntag.aMap[divId][tmntag.aMap[divId].length - 1], targeting);
    target.style.display = 'none';
    parent.removeChild(target);
    return console && console.info && console.info("Cloned refresh "+divId);
  };
  var useCloneRefresh = function(divId){
      var aSizes = ["270x90","300x100","300x101","300x150","300x151","300x200","300x300","300x350","310x98","312x97","320x90","330x120","336x280","460x185","466x104","466x105","469x103","500x60","512x80","532x80","540x185","540x90","550x90","560x185","575x185","580x122","592x122","596x100","596x90","600x120","600x125","600x185","600x186","600x187","600x80","620x185","628x185","628x186","640x480","643x185","650x140","670x125","675x60","676x185","700x126","932x114","940x90"];
      var useRefresh = false;
      for (var i in tmntag.a) {
      if (divId && divId!=tmntag.a[i].d) continue;
      var z = tmntag.a[i].z;
      if(typeof z !== 'undefined' && z.length) {
        for(x in z) {
        useRefresh = (z[x] instanceof Array) ?  useRefresh || (aSizes.indexOf(z[x].join("x")) != -1) : useRefresh || (aSizes.indexOf(z.join("x")) != -1);
        }
      }
    }
    return useRefresh;
  };
  if (divIds instanceof Array){
	var regular = [];
    for (var i = 0; i < divIds.length; i++) {
      if (useCloneRefresh(divIds[i])){
        regular.push(divIds[i]);
        /*refreshClone(divIds[i], targeting);*/
      } else {
        regular.push(divIds[i]);
        /*refreshRegular(divIds[i], targeting);*/
      }
    }
    refreshRegular(regular, targeting);
  } else {
    if (typeof divIds != 'undefined' && useCloneRefresh(divIds)) { 
       refreshRegular(divIds, targeting);
       /*refreshClone(divIds, targeting);*/
    } else {
      refreshRegular(divIds, targeting);
    }
  }
};
tmntag.adunitClone = function (divId, cloneDivId, params) {
  if ('JSON' in window) {
    var origUnit  = tmntag_getAdUnit(divId);
    if (origUnit) {
      var unitClone;
      try { unitClone = JSON.parse(JSON.stringify(origUnit)); } catch (e) { return false; }
      unitClone.d = cloneDivId;
      unitClone.g = unitClone.g || {};
      if (params) {
        for (var k in params) {
          if (params.hasOwnProperty(k)) {
            unitClone[k] = params[k];
          }
          if (origUnit.g && origUnit.g.hasOwnProperty(k)) {            
            unitClone.g[k] = params[k];  
          }
        }
      }
      tmntag.a.push(unitClone);
      var slotClone = tmntag_defineSlot(unitClone.d);

      var targetingData = unitClone.g || {};
      for (var k in targetingData) {
        if (targetingData.hasOwnProperty(k) && targetingData[k]) {
          slotClone.setTargeting(k, targetingData[k]);
        }
      }

      googletag.cmd.push(function () {
        googletag.display(cloneDivId);
				if(typeof tmntag_il !== 'undefined' && tmntag_il == false)
				{
					googletag.pubads().refresh([slotClone]);
				}
      });
      return slotClone;
    }
  }
  return false;
}
tmntag.disableSingleRequest = function() {
	tmntag.sr = false;
}
tmntag.disableCollapseEmptyDivs = function() {
	tmntag.ced = false;
}
tmntag.enableSingleRequest = function() {
	tmntag.sr = true;
}
tmntag.disableInitialLoad = function() {
	tmntag_il = false;
}
tmntag.disableCollapseEmptyDivs = function() {
	tmntag.ced = false;
}
tmntag.onAdunitRenderedPrivate = function(event) {
	var divid = event.slot.getSlotId().getDomId();
	var adunit = tmntag_getAdunitFromCache(divid);
	var newEvent = {};
	newEvent['div'] = divid;
	newEvent['adunit'] = adunit;
	newEvent['size'] = {width: event.size[0], height: event.size[1]};
	newEvent['_orig'] = event;
	tmntag_registerMouseOver(divid);
	tmntag.onAdunitRenderedCallbackFunction(newEvent);
	if (adunit 
		&& adunit['onAdunitRendered'] 
	    && typeof adunit['onAdunitRendered'] === 'function') {
		
		adunit['onAdunitRendered'](event);
		
	}
}
tmntag.onAdunitRendered = function(callback) {
    callback = typeof callback === 'function' ? callback : function() {};
    tmntag.onAdunitRenderedCallbackFunction = callback;
//    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//    	var newEvent = {};
//    	newEvent['div'] = event.slot.getSlotId().getDomId();
//    	newEvent['adunit'] = tmntag_getAdunitFromCache(newEvent.div);
//    	newEvent['size'] = {width: event.size[0], height: event.size[1]};
//    	newEvent['_orig'] = event;
//        callback(newEvent);
//    });
}
tmntag_executingStart = false;
tmntag.start = function () {
	googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        tmntag.onAdunitRenderedPrivate(event);
    });
	var startPrivate = function (doc) {
		if (tmntag_executingStart) return;
		tmntag_executingStart = true;
		var r = Math.floor(Math.random() * 11000);
   		var host = tmntag_findURL();
   		var jsBids = [];
   		if (typeof amznads!='undefined') {
      		var allBids = amznads.getTokens();
      		if (allBids!=null && allBids.length>0) {
         		jsBids.push({'br':6, 'bs':allBids.join()});
      		}
   		}
	   	if (typeof ybxSlots!='undefined' && ybxSlots.length>0) {
	   		var allBids = [];
	   		for (i in ybxSlots) {
	   			var ybxUnit = ybxSlots[i];
				if (ybxUnit!=null && typeof ybxUnit!='undefined' && ybxUnit.ybot_ad==='y' && ybxUnit.ybot_cpm!='' && ybxUnit.ybot_size!='') {
					allBids.push('a'+ybxUnit.ybot_size+'p'+ybxUnit.ybot_cpm+':'+ybxUnit.ybot_slot);
				}
      		}
      		if (allBids!=null && allBids.length>0) {
         		jsBids.push({'br':7, 'bs':allBids.join()});
      		}
		}
	   	if (typeof apnSlots!='undefined' && apnSlots.length>0) {
	   		var allBids = [];
	   		for (i in apnSlots) {
	   			var apnUnit = apnSlots[i];
				if (apnUnit!=null && typeof apnUnit!='undefined') {
					allBids.push('a'+apnUnit.width+"x"+apnUnit.height+'p'+apnUnit.cpm+':'+apnUnit.ad);
				}
      		}
      		if (allBids!=null && allBids.length>0) {
         		jsBids.push({'br':13, 'bs':allBids.join()});
      		}
	   	}
		var qs = "r="+r+"&o="+JSON.stringify(tmntag).replace(/'|&|#/g, "");
		if (jsBids.length>0) {
        	qs += "&j="+JSON.stringify(jsBids);
      	}
      	/*document.write("<script type='text/javascript' src='"+host+"tmntag.js?"+qs+"'></scr"+"ipt>");*/
		var e = document.createElement("script");
	    e.type = "text/javascript";
    	e.src = host+"tmntag.js?v="+TMNTAG_VERSION+"&"+qs;
    	var scripts = document.getElementsByTagName('script')[0];
    	scripts.parentNode.insertBefore(e, scripts);
	}
	if (tmntag_async) {
		setTimeout(startPrivate, 300);
	} else {
		startPrivate();
	}
}
tmntag_findURL = function () {
   for (var i=0; i<document.scripts.length; i++) {
      var script = document.scripts[i];
      var idx = script.src.indexOf('tmnhead.js');
      if (idx>0) {
         return(script.src.substring(0, idx));
      }
   }
   return 'http://ads.servebom.com/';
}
tmntag_passback = function (doc, id) {
	if (!id) return;
	var a = id.split("|");
	if (a.length==1) {
		var ret = tmntag_render(doc, id);
	} if (a.length>=4) { /* adunit|WIDTH|HEIGHT|adslot */
		var ret = tmntag_render(doc, a[0]);
		if (!ret) {
			doc.write('<scr'+'ipt type="text/javascript">google_ad_client = "ca-pub-5787592483766760";'
					+'\ngoogle_ad_slot = \"'+a[3]+'\";'
					+'\ngoogle_ad_width = '+a[1]+';'
					+'\ngoogle_ad_height = '+a[2]+';'
					+'</scr'+'ipt>'
					+'<scr'+'ipt type="text/javascript" src="//pagead2.googlesyndication.com/pagead/show_ads.js"></scr'+'ipt>');
		}
	}
}
tmntag_render = function (doc, id) {
	var ret = false;
	if (typeof tmntag.markups!='undefined') {
		var markup = tmntag.markups[id];
		if (typeof markup!='undefined' && markup!=null) {
			doc.write(markup);
			ret = true;
			var slot = tmntag.slots[id];
			if (slot) {
				slot.setTargeting("_bd", "none");
			}
			
			if (tmntag.iframebust) {
				if (doc.defaultView && doc.defaultView.frameElement) {
					var width = tmntag.markupsInfo[id]['width']+"px";
					var height = tmntag.markupsInfo[id]['height']+"px"
					doc.defaultView.frameElement.width = width;
					doc.defaultView.frameElement.height = height;
					if (tmntag_inIframe()) {
						self.frameElement.width = width;
						self.frameElement.height = height;
					}
				}
			}
		}
	}
	return ret;
}
document.write("<script src='//www.googletagservices.com/tag/js/gpt.js'></scr"+"ipt>");
/* Incontent */
var PurchInContent = function(divId) {
   var onlyText = function($elem) {
      // remove sub scripts tags
      return $elem.clone().find('script').remove().end().text().trim().length;
   };

   this.isvisible = function(divId) {

      return (onlyText($("#news-content > p")) >= 1350 &&
         $("#news-content .shopping_generic, #news-content .responsiveTable, #news-content .responsiveTableCompact, #news-content .shopping_cpu, #news-content .shopping_gpu, #news-content shopping_ssd").length === 0
      ) || ($(".inContentAd").length > 0);
   };

   this.createZone = function(divId) {
      if ($(".inContentAd").length > 0) {
         return MultipleIncontent(divId, ".inContentAd");
      }
      var minChars = $('body').hasClass('mobile') ? 500 : 1000;
      $("#news-content > p").each(function(index) {
         var current = onlyText($("#news-content > p:eq(" + index + ")"));
         if ((onlyText($("#news-content > p:lt(" + index + ")")) + current) >= minChars && onlyText($("#news-content > p:gt(" + index + ")")) >= 350) {
            $("#news-content > p:eq(" + index + ")").after($('<div id=' + divId + ' class="zonepub zonepub17"></div>'));
            //We break the each() loop
            return false;
         }
      });
   };
   var res;
   if (res = this.isvisible(divId)) {
      this.createZone(divId);
   }

   return res;
}
/* Multiple Incontent */
var MultipleIncontent = function(divId, selectors) {
   this.insertAfter = function insertAfter(newNode, referenceNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
   };
   // Place target divs (source + clones), and return rule validation
   if (!divId || !selectors) {
      return false;
   }
   var aTarget = document.querySelectorAll(selectors);
   // place div source if not already done
   if (aTarget.length) {
      for (var i = 0, len = (aTarget.length); i < len; i++) {
         if (i == 0) {
            var newDiv = document.getElementById(divId);
            if (!newDiv) {
               newDiv = document.createElement('div');
            }
            newDiv.id = divId;
            this.insertAfter(newDiv, aTarget[i]);
         } else {
            var newId = divId + '-' + i + (new Date().getTime());
            var newDivC = document.createElement('div');
            newDivC.id = newId;
            newDivC.className = 'purchrtb-dynamic';
            this.insertAfter(newDivC, aTarget[i]);
         }
      }
   }
   return document.querySelectorAll(selectors).length > 0;
};
/* /Purch Ad Tag API V4.0 */
/* OpenX */
(function(){
openxID = '10518929-TMNP.HOWTOGEEK';
if (openxID!='' && openxID.indexOf('$')!=0) {
    document.write("<script src='//ox-d.tmn.servedbyopenx.com/w/1.0/jstag?ef=db&nc="+openxID+"'></scr"+"ipt>");
}
})();
/* /OpenX */

/* Amazon */
if (!tmntag_inIframe() && (tmntag_IEVersion()==-1 || tmntag_IEVersion()>=9)) {
	(function(){
	try {
		aaxID = '3150';
		if (aaxID!='' && aaxID.indexOf('$')!=0) {
			/*document.write("<script src='http://c.amazon-adsystem.com/aax2/amzn_ads.js'></scr"+"ipt>");*/
			function amzn_ads(t){"use strict";try{amznads.updateAds(t)}catch(e){try{console.log("amzn_ads: "+e)}catch(a){}}}function aax_write(t,e){t.write(e),t.close()}function aax_render_ad(t){if(t.passback)return void aax_write(document,t.html);var e=t.slotSize;if(!e)return void aax_write(document,t.html);var a=e.indexOf("x"),n=e.substring(0,a),o=e.substring(a+1),r="amznad"+Math.round(1e6*Math.random());aax_write(document,'<iframe id="'+r+'" width="'+n+'" height="'+o+'" src="javascript:\'\'" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" bgcolor="#FFFFFF" topmargin="0" leftmargin="0" rightmargin="0" bottommargin="0"></iframe>');var i;try{i=document.getElementById(r);var s=i.contentWindow||i.contentDocument;s.document&&(s=s.document),aax_write(s,t.html)}catch(d){i&&(i.style.display="none")}}var amzn_console=function(){"use strict";var t={};return t.log=function(){},t}();window.console&&(amzn_console=window.console);var amznads=function(t,e,a,n){"use strict";function o(n,r,i,s,d,c,l){this.element=n,this.impId=d,this.win=c,this.doc=l,this.start=null,this.end=null,this.area=null,this.cutoff=r,this.cutoffTime=1e3*i,this.focused=null,this.timer=!1,this.timerStarted=!1,this.getDuration=s,this.reported=!1,this.above=null,this.totalTime=0,this.leftPos=null,this.topPos=null,o.prototype.calcArea=function(){try{var n=e.getElementsByTagName("body")[0],o=a.top.innerWidth||e.documentElement.clientWidth||n.clientWidth,r=a.top.innerHeight||e.documentElement.clientHeight||n.clientHeight,i=t.$jQ(a).scrollTop(),s=t.$jQ(this.element).offset().top,d=t.$jQ(this.element).height(),c=t.$jQ(a).scrollLeft(),l=t.$jQ(this.element).offset().left,g=t.$jQ(this.element).width(),u=Math.max(s,i),m=Math.min(s+d,i+r),f=m-u;f=Math.max(0,f);var h=Math.max(l,c),p=Math.min(l+g,c+o),y=p-h;y=Math.max(0,y);var T=f*y,v=g*d;return this.leftPos=l/t.$jQ(e).width(),this.topPos=s/t.$jQ(e).height(),T/v}catch(A){t.log("calcArea failed for ad id="+this.element+"; error="+A)}return 0},o.prototype.displayTime=function(){if(this.getDuration){var e=this.end-this.start;t.log(this.element+" viewed for: "+e),this.totalTime+=e}},o.prototype.adInView=function(){t.log(this.element+" IN VIEW")},o.prototype.adNotInView=function(){t.log(this.element+" NOT IN VIEW")},o.prototype.seenForTime=function(){t.log(this.element+" displayed for "+this.cutoffTime/1e3+" seconds"),t.log(" "),this.reported=!0;try{{encodeURIComponent(location.protocol+location.host+location.pathname)}}catch(e){this.firePixel('/{"adViewability":[{"error": '+JSON.stringify(encodeURIComponent("Error encoding url - "+e))+"}]}")}try{this.firePixel('/{"adViewability":[{"viewable": true }]}')}catch(e){t.log(e),this.firePixel('/{"adViewability":[{"error": '+JSON.stringify(encodeURIComponent("Error sending pixel - "+e))+"}]}")}},o.prototype.firePixel=function(e){(new Image).src=t.protocol+t.host+t.px_svc+this.impId+e+"&cb="+Math.round(1e7*Math.random())},o.prototype.getAreaTime=function(){function a(){r.reported||(r.timer=setTimeout(function(){r.seenForTime()},r.cutoffTime))}function n(){r.adInView(),r.start=new Date,a(),r.timerStarted=!0}function o(){clearTimeout(r.timer),r.timerStarted=!1,r.end=new Date,r.adNotInView(),r.displayTime()}var r=this;if(null==this.area){this.area=this.calcArea(),this.above=this.area>this.cutoff?!0:!1;try{this.firePixel('/{"adViewability":[{"above_the_fold": '+this.above+', "topPos": '+this.topPos+', "leftPos": '+this.leftPos+"}]}")}catch(i){t.log(i),this.firePixel('/{"adViewability":[{"error": '+JSON.stringify(encodeURIComponent("Error sending pixel - "+i))+"}]}")}}var s=this.calcArea();e.hasFocus()&&(0==this.focused||null==this.focused)&&s>this.cutoff&&0==this.timerStarted&&n(),e.hasFocus()?this.focused=!0:this.area>this.cutoff&&1==this.focused&&(o(),this.focused=!1),(this.area>=this.cutoff&&s<this.cutoff||this.area<this.cutoff&&s>=this.cutoff)&&(s>=this.cutoff&&0==this.timerStarted?n():s<this.area&&o()),this.area=s},o.prototype.collectData=function(){var e=this;e.getAreaTime(),t.$jQ(a).on("scroll resize focus blur",function(){e.reported||e.getAreaTime()})}}var r="https:"===e.location.protocol;return t.protocol=r?"https://":"http://",t.DEFAULT_HOST="aax.amazon-adsystem.com",t.host=t.DEFAULT_HOST,t.dtb_svc="/e/dtb/bid",t.pb_svc="/x/getad",t.px_svc="/x/px/",t.debug_mode=t.debug_mode||!1,t.MIN_TIMEOUT=0,t.DEFAULT_TIMEOUT=1e3,t.targetingKey="amznslots",t.vidKey="amzn_vid",t.tasks=t.tasks||[],t.$jQ=t.$jQ||null,t.VIEWABILITY_CUTOFF_AREA=t.VIEWABILITY_CUTOFF_AREA||.5,t.VIEWABILITY_CUTOFF_DURATION_SEC=t.VIEWABILITY_CUTOFF_DURATION_SEC||1,t.CSM_JS="//c.amazon-adsystem.com/aax2/csm.js.gz",t.isjQueryPresent=function(){if("function"==typeof t.$jQ)return!0;try{if(a.top.jQuery&&a.top.jQuery.fn.on&&a.top.jQuery.fn.scrollTop)return t.$jQ=a.top.jQuery,!0}catch(e){}return!1},t.log=function(e){try{t.debug_mode&&n.log(e)}catch(a){}},t.log("Initiating amznads"),t.ads||(t.ads={}),t.updateAds=function(e){if(t.ads=e.ads,t.ev=e.ev,e.vads){t.ads||(t.ads={});var a;for(a in e.vads)e.vads.hasOwnProperty(a)&&(t.ads[a]=e.vads[a],t.amzn_vid=e.vads[a])}t.log("Updated ads. Executing rest of the task queue"),t.doAllTasks(),t.tasks.push=function(e){t.doTask(e)}},t.saveAds=function(e){t.saved_ads=e.ads,t.updateAds(e)},t.getAdForSlot=function(a,n,o){t.src_id=a;var r=r||{},i=r.u;i||(i=t.getReferrerURL()),i&&-1!==i.indexOf("amzn_debug_mode")&&(t.debug_mode=!0),t.log("amznads.getAdForSlot: Using url="+i);var s="src="+t.src_id+"&slot_uuid="+n+"&c=100&u="+i+"&cb="+Math.round(1e7*Math.random()),d=t.protocol+t.host+t.pb_svc+"?jsd=1&"+s;t.log("amznads.getAdAdForSlot: "+(o?"Async ":"")+"Call to: "+d),o?t.appendScriptTag(d):aax_write(e,"<script type='text/javascript' src='"+d+"'></script>")},t.getAdsCallback=function(e,a,n,o,r){var i=null,r=r||{};try{a&&"function"==typeof a&&(i=t.handleCallBack(a,n))}catch(s){t.log("amznads.getAdsAsyncWithCallback(): Error occured in setting up callback functionality."+s)}r.to||(r.to=n),t.doGetAdsAsync(e,o,r,i)},t.getVideoAdsCallback=function(e,a,n,o,r){var r=r||{};r.mt="V",t.getAdsCallback(e,a,n,o,r)},t.getDisplayAdsCallback=function(e,a,n,o,r){var r=r||{};r.mt="D",t.getAdsCallback(e,a,n,o,r)},t.getAdsAsync=function(e,a,n){t.doGetAdsAsync(e,a,n)},t.getVideoAdsAsync=function(e,a,n){var n=n||{};n.mt="V",t.getAdsAsync(e,a,n)},t.getDisplayAdsAsync=function(e,a,n){var n=n||{};n.mt="D",t.getAdsAsync(e,a,n)},t.handleCallBack=function(e,n){var o=!1,r=null,i=function(t){if(!o){try{e(t),r&&clearTimeout(r)}catch(a){}o=!0}},s=t.getValidMilliseconds(n);return r=s?a.setTimeout(i,s):a.setTimeout(i,t.DEFAULT_TIMEOUT),i},t.getValidMilliseconds=function(e){if(!e)return!1;try{var a=~~Number(e);if(a>t.MIN_TIMEOUT)return a}catch(n){return t.log("amznads.isValidMilliseconds(): Invalid timeout specified."+n),!1}return!1},t.getAds=function(a,n,o,r){if(r)return void t.doGetAdsAsync(a,n,o);var i=t.getScriptSource(a,n,o);t.log("amznads.getAds: Call to: "+i),aax_write(e,"<script type='text/javascript' src='"+i+"'></script>")},t.getVideoAds=function(e,a,n,o){var n=n||{};n.mt="V",t.getAds(e,a,n,o)},t.getDisplayAds=function(e,a,n,o){var n=n||{};n.mt="D",t.getAds(e,a,n,o)},t.doGetAdsAsync=function(e,a,n,o){var r=t.getScriptSource(e,a,n);t.log("amznads.getAds: Async Call to: "+r),t.appendScriptTag(r,o)},t.getScriptSource=function(a,n,o){t.src_id=a;var o=o||{},r=o.u,i=o.d,s=o.to,d=o.mt;if(r||(r=t.getReferrerURL()),r&&-1!==r.indexOf("amzn_debug_mode")&&(t.debug_mode=!0),t.ads&&(t.log("amznads.getAds(): clear out existing ads"),t.clearTargetingFromGPTAsync(),t.ads={}),t.saved_ads&&(t.ads=t.saved_ads),i)try{e.domain=i,t.log("amznads.getAds(): Using domain="+i)}catch(c){t.log("amznads.getAds(): Unable to override document domain with '"+i+"'; exception="+c)}t.log("amznads.getAds(): Using url="+r);var l="src="+a+"&u="+r+"&cb="+Math.round(1e7*Math.random());n&&(l+="&sz="+n),s&&(l+="&t="+s),d&&(l+="&mt="+d);var g=t.protocol+t.host+t.dtb_svc+"?"+l;return g},t.getReferrerURL=function(){var n=encodeURIComponent(e.documentURI);try{n=encodeURIComponent(a.top.location.href),n&&"undefined"!=n||(n=t.detectIframeAndGetURL())}catch(o){n=t.detectIframeAndGetURL()}return n},t.detectIframeAndGetURL=function(){try{if(a.top!==a.self)return t.log("Script is loaded within iFrame"),encodeURIComponent(e.referrer)}catch(n){return encodeURIComponent(e.documentURI)}},t.appendScriptTag=function(a,n){var o=e.getElementsByTagName("script")[0],r=e.createElement("script");r.type="text/javascript",r.async=!0,r.src=a;try{n&&"function"==typeof n&&(r.readyState?(r.onreadystatechange=function(){("loaded"==r.readyState||"complete"==r.readyState)&&(r.onreadystatechange=null,n(!0))},t.log("amznads.appendScriptTag: setting callBack function for < IE-8 ")):(r.onload=function(){n(!0)},t.log("amznads.appendScriptTag: setting callBack function for all other browsers exluding  < IE-8")))}catch(i){t.log("amznads.appendScriptTag: Could not associate callBack function; "+i)}o.parentNode.insertBefore(r,o)},t.renderAd=function(e,a){if(t.log("amznads.renderAd: key="+a+"; ad-tag="+t.ads[a]),t.ads[a]){var n=t.ads[a];if(t.ev){var o="amznad"+Math.round(1e6*Math.random());n=n.replace("window.top.amznads.detectViewability","window.amzncsm.rmD"),n=n.replace(/id=[^ ]*/,'id="'+o+'"');var r="<script type='text/javascript' src='"+t.CSM_JS+"'></script>\n";t.host!=t.DEFAULT_HOST&&(r+="<script type='text/javascript'>try{amzncsm.host=window.top.amznads.host;}catch(e){amzncsm.host=amznads.host;}</script>\n"),n=r+n}aax_write(e,n)}else{var i=new Object;i.c="dtb",i.src=t.src_id,i.kvmismatch=1,i.pubReturnedKey=a,i.aaxReturnedKeys=t.getTokens(),i.cb=Math.round(1e7*Math.random());try{i.u=encodeURIComponent(location.host+location.pathname),navigator&&(i.ua=encodeURIComponent(navigator.userAgent))}catch(s){}var d=encodeURIComponent(JSON.stringify(i)),c=t.protocol+t.host+"/x/px/p/0/"+d;t.log("amznads.renderAd: keyValueMismatch detected, pubReturnedKey="+a+", aaxReturnedKeys="+t.getTokens()),aax_write(e,"<img src='"+c+"'/>")}},t.detectViewability=function(e,n,r,i){t.isjQueryPresent()&&(r===a.top?new o(e,t.VIEWABILITY_CUTOFF_AREA,t.VIEWABILITY_CUTOFF_DURATION_SEC,!0,n,r,i).collectData():new o(r.frameElement,t.VIEWABILITY_CUTOFF_AREA,t.VIEWABILITY_CUTOFF_DURATION_SEC,!0,n,r,i).collectData())},t.hasAds=function(e){var a;if(!e)try{return Object.keys(t.ads).length>0}catch(n){t.log("amznads.hasAds: looks like IE 8 (and below): "+n);for(a in t.ads)if(t.ads.hasOwnProperty(a))return!0}for(a in t.ads)if(t.ads.hasOwnProperty(a)&&a.indexOf(e)>0)return!0;return!1},t.getTargeting=function(){var e={};return t.getTokens()&&t.getTokens().length>0&&(e[t.targetingKey]=t.getTokens(),t.amzn_vid&&(e[t.vidKey]=t.amzn_vid)),e},t.setTargeting=function(e,a){var n;for(n in t.ads)if(t.ads.hasOwnProperty(n)){if(a&&n.indexOf(a)<0)continue;e(n,"1")}},t.setTargetingForGPTAsync=function(e){try{if(e){t.targetingKey=e;var a=t.getTokens();"undefined"!=typeof a&&a.length>0&&googletag.cmd.push(function(){googletag.pubads().setTargeting(e,a),t.amzn_vid&&googletag.pubads().setTargeting(t.vidKey,t.amzn_vid)})}else{var n;for(n in t.ads)t.ads.hasOwnProperty(n)&&!function(){var e=n;t.log("amznads.setTargetingForGPTAsync: pushing localKey="+e),googletag.cmd.push(function(){amznads.debug_mode&&amznads.log("amznads.setTargetingForGPTAsync: localKey="+e),googletag.pubads().setTargeting(e,"1"),t.amzn_vid&&googletag.pubads().setTargeting(t.vidKey,t.amzn_vid)})}()}t.log("amznads.setTargetingForGPTAsync: Completed successfully. Number of ads returned by Amazon: "+Object.keys(t.ads).length)}catch(o){t.log("amznads.setTargetingForGPTAsync: ERROR - "+o)}},t.setTargetingForGPTSync=function(e){try{if(e){t.targetingKey=e;var a=t.getTokens();"undefined"!=typeof a&&a.length>0&&(googletag.pubads().setTargeting(e,a),t.amzn_vid&&googletag.pubads().setTargeting(t.vidKey,t.amzn_vid))}else{var n;for(n in t.ads)t.ads.hasOwnProperty(n)&&(googletag.pubads().setTargeting(n,"1"),t.amzn_vid&&googletag.pubads().setTargeting(t.vidKey,t.amzn_vid))}t.log("amznads.setTargetingForGPTSync: Completed successfully. Number of ads returned by Amazon: "+Object.keys(t.ads).length)}catch(o){t.log("amznads.setTargetingForGPTSync: ERROR - "+o)}},t.clearTargetingFromGPTAsync=function(){try{googletag&&googletag.pubads()&&googletag.pubads().clearTargeting(t.targetingKey),googletag.pubads().clearTargeting(t.vidKey)}catch(e){}},t.appendTargetingToAdServerUrl=function(e){var a=e;try{-1===e.indexOf("?")&&(e+="?");var n;for(n in t.ads)t.ads.hasOwnProperty(n)&&(e+="&"+n+"=1");t.log("amznads.appendTargetingToAdServerUrl: Completed successfully. Number of ads returned by Amazon: "+t.ads.length)}catch(o){t.log("amznads.appendTargetingToAdServerUrl: ERROR - "+o)}return t.log("amznads.appendTargetingToAdServerUrl: input url: "+a+"\nreturning url: "+e),e},t.appendTargetingToQueryString=function(e){var a=e;try{var n;for(n in t.ads)t.ads.hasOwnProperty(n)&&(e+="&"+n+"=1")}catch(o){t.log("amznads.appendTargetingToQueryString: ERROR - "+o)}return t.log("amznads.appendTargetingToQueryString: input query-string:"+a+"\nreturning query-string:"+e),e},t.getTokens=function(e){var a,n=[];try{for(a in t.ads)if(t.ads.hasOwnProperty(a)){if(e&&a.indexOf(e)<0)continue;n.push(a)}}catch(o){t.log("amznads.getTokens: ERROR - "+o)}return t.log("amznads.getTokens: returning tokens = "+n),n},t.getKeys=t.getTokens,t.getVid=function(){return t.amzn_vid},t.doAllTasks=function(){for(;t.tasks.length>0;){var e=t.tasks.shift();t.doTask(e)}},t.doTask=function(e){try{e.call()}catch(a){t.log("Failed calling task: "+a)}},t.tryGetAdsAsync=function(){t.asyncParams&&t.getAdsCallback(t.asyncParams.id,t.asyncParams.callbackFn,t.asyncParams.timeout,t.asyncParams.size,t.asyncParams.data)},t}(amznads||{},document,window,amzn_console);amznads.tryGetAdsAsync(),window.amzn_ads=amzn_ads,window.amznads=amznads;
			document.write("<script>if(typeof amznads!='undefined')amznads.getAds(aaxID);</scr"+"ipt>");
		}
	} catch (exception) {
		console && console.error && console.error(exception);
	}
	})();
}
/* /Amazon */

/* Appnexus */
(function() {
	apnID = '4978100';
	apnSlots = [];
	if (apnID!='' && apnID.indexOf('$')!=0) {
		tmntag_async = true;
/* http://cdn.adnxs.com/tag/csa.js */
/* v0.0.11 */!function(){function t(t){return"https://secure.adnxs.com/imptr?id="+t+"&t=2"}function e(t,e){return t.hasOwnProperty?t.hasOwnProperty(e):typeof t[e]!==v&&t.constructor.prototype[e]!==t[e]}function n(t){if(t&&t.apn_targeting&&w&&w.apn_targeting){var n={};for(var a in w.apn_targeting)e(w.apn_targeting,a)&&(n[a]=w.apn_targeting[a]);for(var r in t.apn_targeting)e(t.apn_targeting,r)&&(n[r]=t.apn_targeting[r]);return n}return t&&t.apn_targeting?t.apn_targeting:w&&w.apn_targeting?w.apn_targeting:void 0}function a(t,e){return e&&e[t]?e[t]:w&&w[t]?w[t]:void 0}function r(t){var n,a=[];if(typeof t===y){var r=t.split(","),o=/^(\d)+x(\d)+$/i;if(r)for(var c in r)e(r,c)&&r[c].match(o)&&a.push(r[c])}else if(typeof t===h){var s=t.length;if(s>0)if(2===s&&typeof t[0]===T&&typeof t[1]===T)a.push(i(t));else for(var p=0;s>p;p++)a.push(i(t[p]))}var u=a.length;if(u>0&&(n="size="+a[0],u>1)){n+="&promo_sizes=";for(var f=1;u>f;f++)n+=a[f]+=",";n&&","===n.charAt(n.length-1)&&(n=n.slice(0,n.length-1))}return n}function i(t){return typeof t!==h||2!==t.length||isNaN(t[0])||isNaN(t[1])?void 0:t[0]+"x"+t[1]}function o(t,e,n){return n?t+=e+"="+encodeURIComponent(n)+"&":t}function c(){try{return window.top.location.href}catch(t){return window.location.href}}function s(t,i){var s=a("apn_tag_id",i),p=a("apn_member_id",i),u=a("apn_inv_code",i),f="http"+("https:"===document.location.protocol?"s":"")+"://ib.adnxs.com/jpt?",l=n(i);f=o(f,"id",s),f=o(f,"member",p),f=o(f,"code",u),f=o(f,"callback",t);var g=r(i.apn_sizes);g&&(f+=g+"&");var m="";if(l)for(var d in l)e(l,d)&&(m+=d+"="+encodeURIComponent(l[d])+"&");return m&&(f+=m),f=o(f,"referrer",c()),f.lastIndexOf("&")===f.length-1&&(f=f.substring(0,f.length-1)),f}function p(t){window[t]=new Function("result,cbName",'apn_csa.handleCB(result,"'+t+'")')}function u(t,e){if(t&&e){var n=e-t,a=!1;for(var r in C)if(r>=n){a=!0,l(C[r]);break}a||l(I)}}function f(t){if(t){var e=!1;for(var n in M)if(n>=t){e=!0,l(M[n]);break}e||l(E)}}function l(t){try{if(t+="&rnd="+Math.random()){var e=document.createElement("img");e.src=t}}catch(n){}}function g(){return"apn_csa_"+Math.random().toString(16).substr(2)}function m(t){var e=document.createElement("script");e.type="text/javascript",e.src=t;var n=document.getElementsByTagName("head")[0];n.insertBefore(e,n.firstChild)}function d(){for(var t=0;t<apn_csa.anq.length;t++)typeof apn_csa.anq[t].called===v&&(apn_csa.anq[t].call(),apn_csa.anq[t].called=!0)}var _="function",v="undefined",h="object",y="string",T="number",b=[],w={},P=[];apn_csa=typeof apn_csa!==v?apn_csa:{},apn_csa.anq=apn_csa.anq||[];var k="Timeout",B="No Bid",q="Internal Error",x="Invalid Settings",C=[];C[100]=t(19187),C[200]=t(19188),C[300]=t(19189),C[400]=t(19190),C[500]=t(19191),C[600]=t(19192),C[700]=t(19193),C[800]=t(19194),C[1e3]=t(19195),C[1300]=t(19196),C[1600]=t(19197),C[2e3]=t(19198),C[5e3]=t(20709),C[1e4]=t(20708);var I=t(19431),N=t(19432),G=t(19435),M=[];M[100]=t(20672),M[200]=t(20673),M[300]=t(20675),M[400]=t(20675),M[500]=t(20676),M[600]=t(20677),M[700]=t(20678),M[800]=t(20679),M[1e3]=t(20680),M[1300]=t(20681),M[1600]=t(20682),M[2e3]=t(20685),M[5e3]=t(20711),M[1e4]=t(20710);var E=t(20686);apn_csa.handleCB=function(t,e){var n,a;if(t.result.cpm&&(a=parseInt(t.result.cpm,10)),typeof b[e]!==v&&!b[e].cancelled&&typeof b[e].cb===_){if(typeof b[e].timeout!==v&&clearTimeout(b[e].timeout),a&&t.result.ad)switch(b[e].opts.page_tag_type){case"GPT":var r=b[e].opts.page_tag_obj;if(typeof r===h&&P.GPT&&typeof P.GPT.cpmToPriceBucket===_){var i=P.GPT.cpmToPriceBucket(a);i?(r.setTargeting(P.GPT.key_priceBucket,i),r.setTargeting(P.GPT.key_adUrl,encodeURIComponent(t.result.ad))):n=x}else n=x;break;case"":case void 0:}else n=B;try{u(b[e].startTime,(new Date).getTime())}catch(o){}b[e].cb.call(this,n,a,t.result.ad,b[e].opts)}},apn_csa.getExamplePriceBucket=function(t,e){if(t&&e)switch(e){case"DollarCent":var n=(t/1e4).toString().split("."),a=0,r=0;return n&&(n[0]&&(a=n[0]),n[1]&&(r=n[1])),{dollars:a,cents:r};case"SimpleBucket100":var i=Math.floor(t/1e4);return Math.min(i,1e4);case"SimpleBucket005":var o=5*Math.floor(t/500);return Math.min(o,1e4)}},apn_csa.requestBid=function(t,e){try{l(G);var n=g();b[n]={},b[n].startTime=(new Date).getTime(),b[n].cb=e,b[n].opts=t,b[n].cancelled=!1;var a=1e4;t.timeout?a=t.timeout:w&&w.timeout&&(a=w.timeout),a&&(b[n].timeout=setTimeout(function(){f(a),l(N),b[n].cancelled=!0,typeof e===_&&e.call(this,k)},a)),p(n);var r=s(n,t);m(r)}catch(i){typeof e===_&&e.call(this,q)}},apn_csa.setPageTagData=function(t,e){P[t]=e},apn_csa.setPageOpts=function(t){w=t},apn_csa.anq.push=function(t){t.call()},d()}();
                 var APN_WIDTH  = 300;
                 var APN_HEIGHT = 250;        
                 apn_csa.anq.push(function() {
                  apn_csa.requestBid({
                    apn_tag_id: apnID,
                    apn_sizes: [[APN_WIDTH, APN_HEIGHT]],
                    timeout: 300
                },
                function(error, cpm, ad, bidOpts) {
                    if (error) console.log('APN', error);
                    if (!error && ad && bidOpts && bidOpts.apn_sizes && cpm) {
                       var w = bidOpts.apn_sizes[0][0]
                       var h = bidOpts.apn_sizes[0][1];
                       apnSlots.push({cpm:cpm/10000.0, ad:encodeURIComponent(ad), width:w, height:h});
                       tmntag_async = false;
                    }
                }
            );
        });
	}
})();
/*/Appnexus */

function PurchStickyColumn(divid, params) {
  
  if (window.innerWidth > 810) {
    
    var div = params && params['colElement']; 
    var stop = params && params['stopElement'];
    var article = params && params['artElement'];
    var topMargin = params && params['topMargin'] || 10;
   
	if (div) var o = document.querySelector(div);
	
	var colProps = window.getComputedStyle((o), null);
	var truHeight = colProps.getPropertyValue('height');
	
	var numHeight = parseInt(truHeight, 10);
	
	var n = o.offsetTop;
	var	d = o.offsetLeft;
	var	i = numHeight; 
		
	var h = document.querySelector(article);
	var a = h.clientHeight;
	
	var stopDiv = document.querySelector(stop);
	var stopTop = stopDiv.offsetTop;
	  
    if (stopTop < i) {
      return false;
    }
	
	var winWidth = window.innerWidth;
	
	if (window.addEventListener) {
	  window.addEventListener('resize', function() {
		var newWinWidth = window.innerWidth;
		d += (newWinWidth - winWidth) / 2;
		winWidth = newWinWidth;
		o.style.left = d + 'px';
	  }, true);
	} else {
	  window.attachEvent("scroll", function() {
		var newWinWidth = window.innerWidth;
		d += (newWinWidth - winWidth) / 2;
		winWidth = newWinWidth;
		o.style.left = d + 'px';
	  })
	}
	
	var l,s;
	  
	if (stop) {
        l = document.querySelector(stop);
		if(l){ s = l.offsetTop - i - 20;}
	}
      
    if (window.addEventListener) {
      window.addEventListener("scroll", function() {
        var e = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		if (stop && e > s) {
            var t = e - s;
			o.style.position = "fixed", o.style.top = 0 - Math.floor(t) + 10 + "px", o.style.left = d + "px"
         } else e > n - 20 ? (o.style.position = "fixed", o.style.top = topMargin + "px", o.style.left = d + "px") : (o.style.top = "", o.style.position = "static", o.style.left = d + "px")
      })
    } else {
      window.attachEvent("scroll", function() {
		var e = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		if (stop && e > s) {
            var t = e - s;
			o.style.position = "fixed", o.style.top = 0 - Math.floor(t) + 10 + "px", o.style.left = d + "px"
         } else e > n - 20 ? (o.style.position = "fixed", o.style.top = topMargin + "px", o.style.left = d + "px") : (o.style.top = "", o.style.position = "static", o.style.left = d + "px")
      })
    }
    
  }

}
