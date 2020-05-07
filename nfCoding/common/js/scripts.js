/* -----------------------------------------------
Table of Contents (common js)
--------------------------------------------------
1. userAgent判別
2. URL判別
3. motion設定
4. JSファイル読み込み時即実行(Execute JavaScript when the page loaded.)
5. DOM構築後実行(Execute JavaScript when the DOM is fully loaded.)
6. 画像など含めてページ読込み完了後に実行(Execute JavaScript when the Window Object is fully loaded.)
7. 動的コンテンツに対してイベントを設定
8. その他のイベントを設定
9. 関数(プラグイン)複数

-------------------------------------------------- */

// require jQuery JavaScript Library v1.11.3
(function($) {

/* ------------------------------------------------------------
1. userAgent判別
http://www.useragentstring.com/pages/useragentstring.php
* ------------------------------------------------------------ */
var ua                  = window.navigator.userAgent;
var appVer              = window.navigator.appVersion;

//PC
var isIE                 = ua.indexOf('MSIE') != -1 || ua.indexOf('Trident') != -1;
var isIE6               = isIE && appVer.indexOf('MSIE 6') != -1;
var isIE7               = isIE && appVer.indexOf('MSIE 7.') != -1;
var isIE8               = isIE && ua.indexOf('Trident/4.') != -1;
var isIE9               = isIE && ua.indexOf('Trident/5.') != -1;
var isIE10               = isIE && ua.indexOf('Trident/6.') != -1;
var isIE11               = ua.indexOf('Trident/7.') != -1;

var isFirefox           = ua.indexOf('Firefox') != -1;
var isChrome             = ua.indexOf('Chrome') != -1;
var isSafari             = ua.indexOf('Safari') != -1;

//Mobile (smartphone + tablet)
var isMobileSafari       = ua.match(/iPhone|iPad|iPod/i) ? true : false;
var isMobileSafariTypeT = ua.match(/ipad/i) ? true : false;
var isMobileSafariTypeS = ua.match(/iphone|ipod/i) ? true : false;
var isAndroid           = ua.indexOf('Android') != -1;
var isMobileAndroidTypeT = isAndroid && ua.indexOf('Mobile') == -1;
var isMobileAndroidTypeS = isAndroid && ua.indexOf('Mobile') != -1;
var isAndroidChrome     = isChrome && isAndroid;
var isAndroidFirefox     = isFirefox && isAndroid;
var isMobileFirefox     = isFirefox && ua.indexOf('Mobile') != -1;
var isTabletFirefox     = isFirefox && ua.indexOf('Tablet') != -1;

//PC or Mobile
var isTablet             = isMobileSafariTypeT || isMobileAndroidTypeT || isTabletFirefox;
var isSmartPhone         = isMobileSafariTypeS || isMobileAndroidTypeS || isMobileFirefox;
var isMobile             = isTablet || isSmartPhone || isAndroidChrome || isAndroidFirefox;
var isPC                 = !isMobile;

//APP
var isFacebookAPP        = ua.indexOf('FBAN') != -1;


/* ------------------------------------------------------------
   2. URL判別
   * ------------------------------------------------------------ */
var locationHref     = window.location.href;     // http://www.google.com:80/search?q=demo#test
var locationProtocol = window.location.protocol; // http:
var locationHostname = window.location.hostname; // www.google.com
var locationHost     = window.location.host;     // www.google.com:80
var locationPort     = window.location.port;     // 80
var locationPath     = window.location.pathname; // /search
var locationSearch   = window.location.search;   // ?q=demo
var locationHash     = window.location.hash;     // #test
var locationReplace  = window.location.replace;



/* ------------------------------------------------------------
   3. motion設定
   * ------------------------------------------------------------ */
   var animateInterval = 1000;



/* ------------------------------------------------------------
   4. JSファイル読み込み時即実行(Execute JavaScript when the page loaded.)
   * ------------------------------------------------------------ */



/* ------------------------------------------------------------
5. DOM構築後実行(Execute JavaScript when the DOM is fully loaded.)
* ------------------------------------------------------------ */
$(document).on('ready', function() {



/* 5-1. Global変数
-------------------------------------------------- */
var $window       = $(window);
var isWindowWidth = $window.width();


/* 5-2. 実行
-------------------------------------------------- */
smoothScroll({
	mt				: -100,							// ターゲットの上の余白
	btn			 : 'a[href^=#]',		 // ボタン
	body			: 'html,body',			// スクロールする要素
	easing		: 'easeOutExpo',
	speed		 : 1000,						 // アニメーション時間(ミリ秒)
	pageTopID : '#document',			// ページトップIDへのスクロール時はURLハッシュを変更しない
});

});//End -> ready method


/* ------------------------------------------------------------
	6. 画像など含めてページ読込み完了後に実行(Execute JavaScript when the Window Object is fully loaded.)
	* ------------------------------------------------------------ */
	$(window).on('load', function() {
	// ここに処理を記述
});//End


/* ============================================================
 * 7.Execute JavaScript when the Window Resized.
 * ============================================================ */
 var resizeTimer = false;
 $(window).resize(function() {
 	if (resizeTimer !== false) { clearTimeout(resizeTimer); }
 	resizeTimer = setTimeout(function() {
 	}, 200);
});//End


})(jQuery)//End








/* ------------------------------------------------------------
   9. 関数(プラグイン)複数
   * ------------------------------------------------------------ */

/* ------------------------------------------------------------
* [ jQuery Easing v1.3 ] http://gsgd.co.uk/sandbox/jquery/easing/
* ------------------------------------------------------------
* Open source under the BSD License.
*
* Copyright 2008 George McGinley Smith
* All rights reserved.
* ------------------------------------------------------------ */
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if ((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if (t==0)return b;if (t==d)return b+c;if ((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if ((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if (t==0)return b;if ((t/=d)==1)return b+c;if (!p)p=d*.3;if (a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if (t==0)return b;if ((t/=d)==1)return b+c;if (!p)p=d*.3;if (a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if (t==0)return b;if ((t/=d/2)==2)return b+c;if (!p)p=d*(.3*1.5);if (a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if (t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if (s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if (s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if (s==undefined)s=1.70158;if ((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if ((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if (t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if (t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if (t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});


/* ------------------------------------------------------------
* [ smoothScroll ]
* ------------------------------------------------------------ */
function smoothScroll(opt) {
	var opt          = opt || {};
	var mt            = opt.mt        === undefined ? 0 : opt.mt;
	var $btn          = opt.btn      === undefined ? $('a[href^=#]') : $(opt.btn);
	var $body        = opt.body     === undefined ? $('html, body') : $(opt.body);
	var easing        = opt.ease      === undefined ? 'easeOutExpo' : opt.ease;
	var animationTime = opt.speed    === undefined ? 1000 : opt.speed;
	var pageTopID    = opt.pageTopID === undefined ? '#l-header' : opt.pageTopID;
	var $frameTop    = $('#l-header');
	var lHash     = location.hash;
	function runScroll(hash, noHash) {
		var $target = opt.target === undefined ? $(hash) : $(opt.target);
		if (hash == pageTopID) {
			marginTop = 0
		} else {
			marginTop = mt + $frameTop.position().top;
		}
		if ( $target.length ) {
			var position = $target.offset().top - marginTop; // 行き先までの画面上の高さの数値
			$body.stop().animate({scrollTop:position}, animationTime, easing);
			if (!noHash && hash !== 'undefined' && hash != pageTopID) {
				location.hash = hash;
			}
		}
	}
	$btn.not('.noScroll').on('click', function() {
		if ($(this).hasClass('noHash')) {
			var noHash = true;
		} else {
			var noHash = false;
		}
		var hash = this.hash;
		runScroll(hash, noHash);
		return false;
	});
	if (lHash.match(/[^#scrollTo-]/)) {
		var hash = '#' + lHash.slice(10);
		setTimeout(function() {
			runScroll(hash);
		}, 300);
	}
	$(document).on('mousewheel', function() { $body.stop(); });
	$(document).on('touchmove', function() { $body.stop(); });
}





/* ------------------------------------------------------------
 * [ リンク範囲拡張 ]
 * ------------------------------------------------------------ */
 $.fn.anchorExpanded = function() {
 	return this.each(function() {
 		var $anchorExpanded = $(this);
 		$anchorExpanded.css('cursor','pointer');
 		$anchorExpanded.hover(
 			function(){$(this).find('a').css('text-decoration','none');},
 			function(){$(this).find('a').css('text-decoration','underline');}
 			);
 		$anchorExpanded.on('click', function(){
 			var targetAttribute  = $(this).find('a').attr('target');
 			if(targetAttribute === '_blank'){
 				window.open($(this).find('a').attr('href'));
 				return false;
 			} else{
 				window.location = $(this).find('a').attr('href');
 				return false;
 			}
	});//end anchorExpanded
 	});
 };

/* ------------------------------------------------------------
 * [ jquery-auto-height.js ]
 * ------------------------------------------------------------
 *  並列のブロック間の高さを揃える
 * ------------------------------------------------------------ */
 $.fn.autoHeight = function(options){
 	var op = $.extend({

 		column  : 0,
 		clear  : 0,
 		height  : 'minHeight',
 		reset  : '',
 		descend : function descend (a,b){ return b-a; }

    },options || {});// optionsに値があれば上書きする

 	var self = $(this);
 	var n = 0,
 	hMax,
 	hList = new Array(),
 	hListLine = new Array();
 	hListLine[n] = 0;

    // 要素の高さを取得
    self.each(function(i){
    	if (op.reset == 'reset') {
    		$(this).removeAttr('style');
    	}
    	var h = $(this).height();
    	hList[i] = h;
    	if (op.column > 1) {
    // op.columnごとの最大値を格納していく
    if (h > hListLine[n]) {
    	hListLine[n] = h;
    }
    if ( (i > 0) && (((i+1) % op.column) == 0) ) {
    	n++;
    	hListLine[n] = 0;
    };
}
});

  // 取得した高さの数値を降順に並べ替え
  hList = hList.sort(op.descend);
  hMax = hList[0];

  // 高さの最大値を要素に適用
  var ie6 = typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined";
  if (op.column > 1) {
  	for (var j=0; j<hListLine.length; j++) {
  		for (var k=0; k<op.column; k++) {
  			if (ie6) {
  				self.eq(j*op.column+k).height(hListLine[j]);
  			} else {
  				self.eq(j*op.column+k).css(op.height,hListLine[j]);
  			}
  			if (k == 0 && op.clear != 0) {
  				self.eq(j*op.column+k).css('clear','both');
  			}
  		}
  	}
  } else {
  	if (ie6) {
  		self.height(hMax);
  	} else {
  		self.css(op.height,hMax);
  	}
  }
};



/* ------------------------------------------------------------
 * [ historyBack ]
 * ------------------------------------------------------------
 *  add "history.back" method to any object.
 * ------------------------------------------------------------ */
 $.fn.historyBack = function() {
 	return this.each(function() {
 		$(this).on('click', function() {
 			history.back();
 		});
 	});
 };

/* ------------------------------------------------------------
 * [ toggleSwitchClass ]
 * ------------------------------------------------------------
 *  class属性値をトグルで追加・削除する
 * ------------------------------------------------------------ */
 $.fn.toggleSwitchClass = function(className) {
 	return this.each(function() {
 		$(this).toggleClass(className);
 	});
 };

/* ----------------------------------------------------------------------
 * [ toggleAttr ]
 * ----------------------------------------------------------------------
 * 属性をトグルで追加・削除する
 * ---------------------------------------------------------------------- */
 $.fn.toggleAttr = function(attr) {
 	return this.each(function() {
 		var $obj = $(this);
 		$obj.attr(attr) ? $obj.removeAttr(attr) : $obj.attr(attr, attr);
 	});
 };



// noRequire jQuery
$(window).load(function() {
	
});
$(window).resize(function() {

});