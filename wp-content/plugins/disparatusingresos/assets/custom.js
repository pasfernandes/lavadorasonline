jQuery(document).ready(function($){
  if (typeof(rate_post_success) === 'function') {
        jQuery('.post-ratings').find('img').after('<span/>');
        //override default function - to add span on success rating set
        window.rate_post_success = function(data) {
            jQuery('#post-ratings-' + post_id).html(data);
            if (ratingsL10n.show_loading) {
                jQuery('#post-ratings-' + post_id + '-loading').hide();
            }
            if (ratingsL10n.show_fading) {
                jQuery('#post-ratings-' + post_id).fadeTo('def', 1, function() {
                    set_is_being_rated(false);
                });
            } else {
                set_is_being_rated(false);
            }
            jQuery('.post-ratings').find('img').after('<span/>');
        }
    }

  var $procons=$('.procon-col')
  var count=1
  for(var i=0;i<$procons.length;i+=2){var $wrap=jQuery('<div/>',{'class':'procon-wrap'})
  $procons[i].before($wrap[0])
  $wrap.append($procons[i])
  $wrap.append($procons[i+1])}

});

/*


*/
!function(e,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n(require,exports,module):e.ouibounce=n()}(this,function(){return function(e,n){function o(e,n){return"undefined"==typeof e?n:e}function t(e){var n=24*e*60*60*1e3,o=new Date;return o.setTime(o.getTime()+n),"; expires="+o.toUTCString()}function i(){L.addEventListener("mouseleave",u),L.addEventListener("mouseenter",r),L.addEventListener("keydown",c)}function u(e){e.clientY>v||d(T,"true")&&!l||(w=setTimeout(m,p))}function r(){w&&(clearTimeout(w),w=null)}function c(e){g||d(T,"true")&&!l||e.metaKey&&76===e.keyCode&&(g=!0,w=setTimeout(m,p))}function d(e,n){return a()[e]===n}function a(){for(var e=document.cookie.split("; "),n={},o=e.length-1;o>=0;o--){var t=e[o].split("=");n[t[0]]=t[1]}return n}function m(){f(),y()}function f(){e&&(e.style.display="block"),s()}function s(e){var e=e||{};"undefined"!=typeof e.cookieExpire&&(E=t(e.cookieExpire)),e.sitewide===!0&&(b=";path=/"),"undefined"!=typeof e.cookieDomain&&(x=";domain="+e.cookieDomain),"undefined"!=typeof e.cookieName&&(T=e.cookieName),document.cookie=T+"=true"+E+x+b,L.removeEventListener("mouseleave",u),L.removeEventListener("mouseenter",r),L.removeEventListener("keydown",c)}var n=n||{},l=n.aggressive||!1,v=o(n.sensitivity,20),k=o(n.timer,1e3),p=o(n.delay,0),y=n.callback||function(){},E=t(n.cookieExpire)||"",x=n.cookieDomain?";domain="+n.cookieDomain:"",T=n.cookieName?n.cookieName:"viewedOuibounceModal",b=n.sitewide===!0?";path=/":"",w=null,L=document.documentElement;setTimeout(i,k);var g=!1;return{fire:f,disable:s}}});


setTimeout(function(){ var _ouibounce = ouibounce(document.getElementById('ouibounce-modal'),{ aggressive: true, });  }, 3000);


var modal = jQuery('#ouibounce-modal'); 
      if(modal.length)
      {  
          if(jQuery(window).width() < 768)
          {
            var initexitent = false;
            var lastScrollTop = 0;
            jQuery(window).scroll(function(event){
                var st = jQuery(this).scrollTop();
                if (st < lastScrollTop) {
                    setTimeout(function(){
                        if(initexitent==false){
                            initexitent=true;
                            _ouibounce.fire();
                            setTimeout(
                                function(){
                                    jQuery('.exitintent-slider').slick({
                                        infinite: true,
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        arrows: true,
                                        lazyLoad: 'ondemand',
                                        prevArrow: '<button type="button" class="slick-prev"></button>', 
                                        nextArrow: '<button type="button" class="slick-next"></button>'
                                    });
                                }, 200);
                        }
                    }, 10000);
                }
                lastScrollTop = st;
            });
        }
    }

  jQuery('.underlay').on('click',function(){ document.getElementById('ouibounce-modal').style.display = 'none'; });


jQuery(document).ready(function() {

      var expandBtn = document.querySelectorAll(".expand-row");
      expandBtn.forEach(function(t) {
        console.log("expandBtn click");
        t.addEventListener("click", function() {
          var container = this.parentElement.querySelector(".col-2");
          if (container.style.maxHeight) {
            /** @type {null} */
            container.style.maxHeight = null;
            t.querySelector("svg").classList.remove("--rotate");
          } else {
            /** @type {string} */
            container.style.maxHeight = container.scrollHeight + "px";
            t.querySelector("svg").classList.add("--rotate");
          }
        });
      });


        if(jQuery(window).width() > 330 && jQuery(window).width() < 412) {
          jQuery( ".instagram-media" ).each(function( i ) {
            jQuery( this ).attr('height', 480);
          });

        }
        if(jQuery(window).width() < 330) {
          jQuery( ".instagram-media" ).each(function( i ) {
            jQuery( this ).attr('height', 380);
          });

        }
        try {
            jQuery('.post-ratings-text').remove();

            //Back to Top Button
            jQuery(function($) {
                var $window = $(window);
                var $buttonTop = $('.button-top');

                $buttonTop.on('click', function() {
                    $('html, body').animate({
                        scrollTop: 0,
                    }, 400);
                });

                $window.on('scroll', function() {
                    if ($window.scrollTop() > 100) { // 100 is our threshold in pixels
                        $buttonTop.addClass('button-top-visible');
                    } else {
                        $buttonTop.removeClass('button-top-visible');
                    }
                });
            });

        } catch (err) {

        }

        jQuery('.js_sticky').each(function(){
          jQuery('.mini-bar').remove();
          var container = jQuery(this);
          var posTop = container.position().top;
          var items = container.find('.js_sticky-item');
          var conHeight = container.outerHeight();

          jQuery(window).scroll(function(){
              if(! container.hasClass('is_down')) {
                conHeight = container.outerHeight();
                jQuery('.ranking-table-outer').height(conHeight);
              }
              posTop = container.position().top;
              var wScroll = jQuery(window).scrollTop();

              if(wScroll > posTop || wScroll < 900) {
                  container.addClass('is_stuck').removeClass('is_down');
                  if(wScroll > (posTop + conHeight + 500)) {
                      container.removeClass('is_stuck').addClass('is_down');
                  }
              }
              else {
                  container.removeClass('is_stuck is_down');
              }
          });
      });
    });


/* RANKING */
'use strict';
!function($, metaWindow, selector, i) {
  /**
   * @return {undefined}
   */
  var noop = function() {
  };
  var defaults = {
    totalStars : 5,
    useFullStars : false,
    starShape : "straight",
    emptyColor : "lightgray",
    hoverColor : "orange",
    activeColor : "gold",
    ratedColor : "crimson",
    useGradient : true,
    readOnly : false,
    disableAfterRate : true,
    baseUrl : false,
    starGradient : {
      start : "#FEF7CD",
      end : "#FF9511"
    },
    strokeWidth : 4,
    strokeColor : "black",
    initialRating : 0,
    starSize : 40,
    callback : noop,
    onHover : noop,
    onLeave : noop
  };
  /**
   * @param {!Element} el
   * @param {?} options
   * @return {undefined}
   */
  var Plugin = function(el, options) {
    var i;
    var val;
    var floor;
    /** @type {!Element} */
    this.element = el;
    this.$el = $(el);
    this.settings = $.extend({}, defaults, options);
    i = this.$el.data("rating") || this.settings.initialRating;
    /** @type {function(?): number} */
    floor = this.settings.forceRoundUp ? Math.ceil : Math.round;
    /** @type {string} */
    val = (floor(2 * i) / 2).toFixed(1);
    this._state = {
      rating : val
    };
    /** @type {number} */
    this._uid = Math.floor(999 * Math.random());
    if (!(options.starGradient || this.settings.useGradient)) {
      this.settings.starGradient.start = this.settings.starGradient.end = this.settings.activeColor;
    }
    this._defaults = defaults;
    /** @type {string} */
    this._name = "starRating";
    this.init();
  };
  var methods = {
    init : function() {
      this.renderMarkup();
      this.addListeners();
      this.initRating();
    },
    addListeners : function() {
      if (!this.settings.readOnly) {
        this.$stars.on("mouseover", this.hoverRating.bind(this));
        this.$stars.on("mouseout", this.restoreState.bind(this));
        this.$stars.on("click", this.handleRating.bind(this));
      }
    },
    hoverRating : function(e) {
      var index = this.getIndex(e);
      this.paintStars(index, "hovered");
      this.settings.onHover(index + 1, this._state.rating, this.$el);
    },
    handleRating : function(e) {
      var index = this.getIndex(e);
      var rating = index + 1;
      this.applyRating(rating, this.$el);
      this.executeCallback(rating, this.$el);
      if (this.settings.disableAfterRate) {
        this.$stars.off();
      }
    },
    applyRating : function(rating) {
      /** @type {number} */
      var index = rating - 1;
      this.paintStars(index, "rated");
      /** @type {number} */
      this._state.rating = index + 1;
      /** @type {boolean} */
      this._state.rated = true;
    },
    restoreState : function(e) {
      var index = this.getIndex(e);
      var rating = this._state.rating || -1;
      /** @type {string} */
      var active = this._state.rated ? "rated" : "active";
      this.paintStars(rating - 1, active);
      this.settings.onLeave(index + 1, this._state.rating, this.$el);
    },
    getIndex : function(e) {
      var $target = $(e.currentTarget);
      var width = $target.width();
      var side = $(e.target).attr("data-side");
      side = side || this.getOffsetByPixel(e, $target, width);
      side = this.settings.useFullStars ? "right" : side;
      /** @type {number} */
      var ry = $target.index() - ("left" === side ? .5 : 0);
      return ry = ry < .5 && e.offsetX < width / 4 ? -1 : ry;
    },
    getOffsetByPixel : function(e, $target, width) {
      return e.pageX - $target.offset().left <= width / 2 && !this.settings.useFullStars ? "left" : "right";
    },
    initRating : function() {
      this.paintStars(this._state.rating - 1, "active");
    },
    paintStars : function(endIndex, stateClass) {
      var $polygonLeft;
      var $polygonRight;
      var leftClass;
      var rightClass;
      $.each(this.$stars, function(index, mei) {
        $polygonLeft = $(mei).find('[data-side="left"]');
        $polygonRight = $(mei).find('[data-side="right"]');
        leftClass = rightClass = index <= endIndex ? stateClass : "empty";
        leftClass = index - endIndex == .5 ? stateClass : leftClass;
        $polygonLeft.attr("class", "svg-" + leftClass + "-" + this._uid);
        $polygonRight.attr("class", "svg-" + rightClass + "-" + this._uid);
      }.bind(this));
    },
    renderMarkup : function() {
      var s = this.settings;
      /** @type {string} */
      var e = s.baseUrl ? location.href.split("#")[0] : "";
      /** @type {string} */
      var GROUPSIZE = '<div class="jq-star" style="width:' + s.starSize + "px;  height:" + s.starSize + 'px;"><svg version="1.0" class="jq-star-svg" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" ' + this.getSvgDimensions(s.starShape) + " stroke-width:" + s.strokeWidth + 'px;" xml:space="preserve"><style type="text/css">.svg-empty-' + this._uid + "{fill:url(" + e + "#" + this._uid + "_SVGID_1_);}.svg-hovered-" + this._uid + "{fill:url(" + e + "#" + this._uid + "_SVGID_2_);}.svg-active-" + 
      this._uid + "{fill:url(" + e + "#" + this._uid + "_SVGID_3_);}.svg-rated-" + this._uid + "{fill:" + s.ratedColor + ";}</style>" + this.getLinearGradient(this._uid + "_SVGID_1_", s.emptyColor, s.emptyColor, s.starShape) + this.getLinearGradient(this._uid + "_SVGID_2_", s.hoverColor, s.hoverColor, s.starShape) + this.getLinearGradient(this._uid + "_SVGID_3_", s.starGradient.start, s.starGradient.end, s.starShape) + this.getVectorPath(this._uid, {
        starShape : s.starShape,
        strokeWidth : s.strokeWidth,
        strokeColor : s.strokeColor
      }) + "</svg></div>";
      /** @type {string} */
      var i = "";
      /** @type {number} */
      var tr = 0;
      for (; tr < s.totalStars; tr++) {
        /** @type {string} */
        i = i + GROUPSIZE;
      }
      this.$el.append(i);
      this.$stars = this.$el.find(".jq-star");
    },
    getVectorPath : function(id, attrs) {
      return "rounded" === attrs.starShape ? this.getRoundedVectorPath(id, attrs) : this.getSpikeVectorPath(id, attrs);
    },
    getSpikeVectorPath : function(id, attrs) {
      return '<polygon data-side="center" class="svg-empty-' + id + '" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 " style="fill: transparent; stroke: ' + attrs.strokeColor + ';" /><polygon data-side="left" class="svg-empty-' + id + '" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 " style="stroke-opacity: 0;" /><polygon data-side="right" class="svg-empty-' + 
      id + '" points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 " style="stroke-opacity: 0;" />';
    },
    getRoundedVectorPath : function(id, attrs) {
      /** @type {string} */
      var s = "M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z";
      return '<path data-side="center" class="svg-empty-' + id + '" d="' + s + '" style="stroke: ' + attrs.strokeColor + '; fill: transparent; " /><path data-side="right" class="svg-empty-' + id + '" d="' + s + '" style="stroke-opacity: 0;" /><path data-side="left" class="svg-empty-' + id + '" d="M121,648c-7.3,0-14.1-2.2-19.8-6.4c-10.4-7.6-15.6-20.3-13.4-33l24-139.9l-101.6-99 c-9.1-8.9-12.4-22.4-8.6-34.5c3.9-12.1,14.6-21.1,27.2-23l140.4-20.4L232,164.6c5.7-11.6,17.3-18.8,30.2-16.8c0.6,0,1,0.4,1,1 v430.1c0,0.4-0.2,0.7-0.5,0.9l-126,66.3C132,646.6,126.6,648,121,648z" style="stroke: ' + 
      attrs.strokeColor + '; stroke-opacity: 0;" />';
    },
    getSvgDimensions : function(lod) {
      return "rounded" === lod ? 'width="550px" height="500.2px" viewBox="0 146.8 550 500.2" style="enable-background:new 0 0 550 500.2;' : 'x="0px" y="0px" width="305px" height="305px" viewBox="60 -62 309 309" style="enable-background:new 64 -59 305 305;';
    },
    getLinearGradient : function(opt_opacity, opt_mode, opt_transform, lod) {
      return '<linearGradient id="' + opt_opacity + '" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="' + ("rounded" === lod ? 500 : 250) + '"><stop  offset="0" style="stop-color:' + opt_mode + '"/><stop  offset="1" style="stop-color:' + opt_transform + '"/> </linearGradient>';
    },
    executeCallback : function(name, params) {
      (0, this.settings.callback)(name, params);
    }
  };
  var publicMethods = {
    unload : function() {
      /** @type {string} */
      var _name = "plugin_starRating";
      var $el = $(this);
      $el.data(_name).$stars.off();
      $el.removeData(_name).remove();
    },
    setRating : function(rating, isUser) {
      var editingEl = $(this);
      var $plugin = editingEl.data("plugin_starRating");
      if (!(rating > $plugin.settings.totalStars || rating < 0)) {
        if (isUser) {
          /** @type {number} */
          rating = Math.round(rating);
        }
        $plugin.applyRating(rating);
      }
    },
    getRating : function() {
      return $(this).data("plugin_starRating")._state.rating;
    },
    resize : function(box_size) {
      var editingEl = $(this);
      var $starSet = editingEl.data("plugin_starRating");
      var $stars = $starSet.$stars;
      if (!(box_size <= 1 || box_size > 200)) {
        /** @type {!Array<?>} */
        $stars = Array.prototype.slice.call($stars);
        $stars.forEach(function(entryEl) {
          $(entryEl).css({
            width : box_size + "px",
            height : box_size + "px"
          });
        });
      }
    },
    setReadOnly : function(isReadOnly) {
      var editingEl = $(this);
      var $plugin = editingEl.data("plugin_starRating");
      if (true === isReadOnly) {
        $plugin.$stars.off("mouseover mouseout click");
      } else {
        /** @type {boolean} */
        $plugin.settings.readOnly = false;
        $plugin.addListeners();
      }
    }
  };
  $.extend(Plugin.prototype, methods);
  /**
   * @param {string} options
   * @return {?}
   */
  $.fn.starRating = function(options) {
    if (!$.isPlainObject(options)) {
      if (publicMethods.hasOwnProperty(options)) {
        return publicMethods[options].apply(this, Array.prototype.slice.call(arguments, 1));
      }
      $.error("Method " + options + " does not exist on starRating.js");
    }
    return this.each(function() {
      if (!$.data(this, "plugin_starRating")) {
        $.data(this, "plugin_starRating", new Plugin(this, options));
      }
    });
  };
}(jQuery, window, document);
/** @type {(Element|null)} */
