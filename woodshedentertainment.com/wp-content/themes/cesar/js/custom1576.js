var $j = jQuery.noConflict();

/* jquery.imagefit 
 *
 * Version 0.2 by Oliver Boermans <http://www.ollicle.com/eg/jquery/imagefit/>
 *
 * Extends jQuery <http://jquery.com>
 *
 */
(function($) {
	$.fn.imagefit = function(options) {
		var fit = {
			all : function(imgs){
				imgs.each(function(){
					fit.one(this);
					})
				},
			one : function(img){
				$(img)
					.width('100%').each(function()
					{
						$(this).height(Math.round(
							$(this).attr('startheight')*($(this).width()/$(this).attr('startwidth')))
						);
					})
				}
		};
		
		this.each(function(){
				var container = this;
				
				// store list of contained images (excluding those in tables)
				var imgs = $('img', container).not($("table img"));
				
				// store initial dimensions on each image 
				imgs.each(function(){
					$(this).attr('startwidth', $(this).width())
						.attr('startheight', $(this).height())
						.css('max-width', $(this).attr('startwidth')+"px");
				
					fit.one(this);
				});
				// Re-adjust when window width is changed
				$(window).bind('resize', function(){
					fit.all(imgs);
				});
			});
		return this;
	};
})(jQuery);

$j.fn.getIndex = function(){
	var $jp=$j(this).parent().children();
    return $jp.index(this);
}
 
jQuery.fn.extend({
  slideRight: function() {
    return this.each(function() {
    	jQuery(this).show();
    });
  },
  slideLeft: function() {
    return this.each(function() {
    	jQuery(this).hide();
    });
  },
  slideToggleWidth: function() {
    return this.each(function() {
      var el = jQuery(this);
      if (el.css('display') == 'none') {
        el.slideRight();
      } else {
        el.slideLeft();
      }
    });
  }
});

$j.fn.setNav = function(){
	var calScreenWidth = $j(window).width();
	
	if(calScreenWidth >= 960)
	{
		$j('#menu_border_wrapper').css({display: 'block'});
		$j('#main_menu li ul').css({display: 'none'});
	
		$j('#main_menu li').each(function()
		{	
			var $jsublist = $j(this).find('ul:first');
			
			$j(this).hover(function()
			{	
				position = $j(this).position();
				
				if($j(this).parents().attr('class') == 'sub-menu')
				{	
					$jsublist.stop().css({height:'auto', display:'none'}).slideDown(200);
				}
				else
				{
					$jsublist.stop().css({overflow: 'visible', height:'auto', display:'none'}).slideDown(400);
					
					if(BrowserDetect.browser == 'Explorer' && BrowserDetect.version < 8)
	 				{
	 					hackMargin = -$j(this).width()-2;
						$jsublist.css({marginLeft: hackMargin+'px'});
					}
				}
			},
			function()
			{	
				$jsublist.stop().css({height:'auto', display:'none'}).slideUp(200);	
			});
	
		});
		
		$j('#menu_wrapper .nav ul li ul').css({display: 'none'});
	
		$j('#menu_wrapper .nav ul li').each(function()
		{
			
			var $jsublist = $j(this).find('ul:first');
			
			$j(this).hover(function()
			{	
				$jsublist.stop().css({height:'auto', display:'none'}).slideDown(200);	
			},
			function()
			{	
				$jsublist.stop().css({height:'auto', display:'none'}).slideUp(200);	
			});		
			
		});
	}
}

$j(document).ready(function(){ 

	$j(document).setNav();
	
	$j(window).resize(function(){
		$j(document).setNav();
	});

	$j('.pp_gallery a').fancybox({ 
		padding: 0,
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			overlay	: {
				css : {
					'background' : 'rgba(256, 256, 256, 0.8)'
				}
			},
			thumbs	: {
				width	: 60,
				height	: 60
			}
		}
	});
	
	$j('.flickr li a').fancybox({ 
		padding: 0,
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			overlay	: {
				css : {
					'background' : 'rgba(256, 256, 256, 0.8)'
				}
			},
			thumbs	: {
				width	: 60,
				height	: 60
			}
		}
	});
	
	$j('a.fancy-gallery').fancybox({
		padding : 0,
		prevEffect	: 'fade',
		nextEffect	: 'fade',
		helpers	: {
			title	: {
				type: 'outside'
			},
			overlay	: {
				css : {
					'background' : 'rgba(256, 256, 256, 0.8)'
				}
			}
		},
		beforeLoad: function() {
            this.title = $j(this.element).attr('data-title');
        }
	});
	
	$j('.img_frame').fancybox({ 
		padding: 0,
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			overlay	: {
				css : {
					'background' : 'rgba(256, 256, 256, 0.8)'
				}
			},
			thumbs	: {
				width	: 60,
				height	: 60
			}
		}
	});
	
	$j('.lightbox_youtube').fancybox({ 
		padding: 0,
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			overlay	: {
				css : {
					'background' : 'rgba(256, 256, 256, 0.8)'
				}
			},
			thumbs	: {
				width	: 60,
				height	: 60
			}
		},
		beforeLoad: function() {
            this.title = $j(this.element).attr('data-title');
        }
	});
	
	$j('.attachment a').fancybox({ 
		padding: 0,
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			overlay	: {
				css : {
					'background' : 'rgba(256, 256, 256, 0.8)'
				}
			},
			thumbs	: {
				width	: 60,
				height	: 60
			}
		}
	});
	
	$j('.lightbox_vimeo').fancybox({ 
		padding: 0,
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			overlay	: {
				css : {
					'background' : 'rgba(256, 256, 256, 0.8)'
				}
			},
			thumbs	: {
				width	: 60,
				height	: 60
			}
		},
		beforeLoad: function() {
            this.title = $j(this.element).attr('data-title');
        }
	});
	
	$j('.post_img').hover(
		function(){
			$j(this).stop().animate({
					'opacity': .8
				}, 400);
		},
		function(){
			$j(this).stop().animate({
					'opacity': 1
				}, 400);
		}
	);
	
	$j('.post_img').click(
		function(event){
			$j(this).children('a').trigger('click');
		}
	);
	
	var calScreenHeight = $j(window).height()-108;
	var miniRightPos = 800;
      
    var cols = 3
	var masonry = $j('.gallery_mansory_wrapper');
	
	// initialize masonry
	masonry.imagesLoaded(function(){
	    
	    masonry.masonry({
	    	itemSelector: '.mansory_thumbnail',
	    	isResizable: true,
	    	isAnimated: true,
	    	isFitWidth: true,
	    	columnWidth:Math.floor((masonry.width()/ cols))
	      });
	      
	     masonry.children('.mansory_thumbnail').each(function(){
		    $j(this).addClass('fade-in');
	    });
	});
	
	$j(window).resize(function(){
		var masonry = $j('.gallery_mansory_wrapper');
		
	    masonry.imagesLoaded(function(){
	    
		    masonry.masonry({
		    	itemSelector: '.mansory_thumbnail',
		    	isResizable: true,
		    	isAnimated: true,
		    	isFitWidth: true,
		    	columnWidth:Math.floor((masonry.width()/ cols))
		      });
		      
		     masonry.children('.mansory_thumbnail').each(function(){
			    $j(this).addClass('fade-in');
		    });
		});
	});
    
    $j('#menu_expand_wrapper a').click(function(){
    	$j('#menu_wrapper').fadeIn();
	    $j('#custom_logo').animate({'left': '15px', 'opacity': 1}, 400);
	    $j('#menu_close').animate({'left': '-10px', 'opacity': 1}, 400);
	    $j(this).animate({'left': '-60px', 'opacity': 0}, 400);
	    $j('#menu_border_wrapper select').animate({'left': '0', 'opacity': 1}, 400).fadeIn();
    });
	
	$j('#menu_close').click(function(){
		$j('#custom_logo').animate({'left': '-200px', 'opacity': 0}, 400);
	    $j(this).stop().animate({'left': '-200px', 'opacity': 0}, 400);
	    $j('#menu_expand_wrapper a').animate({'left': '20px', 'opacity': 1}, 400);
	    $j('#menu_border_wrapper select').animate({'left': '-200px', 'opacity': 0}, 400).fadeOut();
	    $j('#menu_wrapper').fadeOut();
	});
	
	var footerLi = 0;
	$j('#footer .sidebar_widget li.widget').each(function()
	{
		footerLi++;
		
		if(footerLi%$j('#pp_footer_style').val() == 0)
		{ 
			$j(this).addClass('last');
		}
	});
	
	// Isotope
	// modified Isotope methods for gutters in masonry
	jQuery.Isotope.prototype._getMasonryGutterColumns = function() {
	    var gutter = this.options.masonry && this.options.masonry.gutterWidth || 0;
	    	containerWidth = this.element.width();
  
	this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth ||
              // or use the size of the first item
              this.$filteredAtoms.outerWidth(true) ||
              // if there's no items, use size of container
              containerWidth;

	this.masonry.columnWidth += gutter;

	this.masonry.cols = Math.floor( ( containerWidth + gutter ) / this.masonry.columnWidth );
	this.masonry.cols = Math.max( this.masonry.cols, 1 );
	};

	jQuery.Isotope.prototype._masonryReset = function() {
	    // layout-specific props
	    this.masonry = {};
	    // FIXME shouldn't have to call this again
	    this._getMasonryGutterColumns();
	    var i = this.masonry.cols;
	    this.masonry.colYs = [];
	    while (i--) {
	    	this.masonry.colYs.push( 0 );
	    }
	};

	jQuery.Isotope.prototype._masonryResizeChanged = function() {
	    var prevSegments = this.masonry.cols;
	    // update cols/rows
	    this._getMasonryGutterColumns();
	    // return if updated cols/rows is not equal to previous
	    return ( this.masonry.cols !== prevSegments );
	};
  
	// cache jQuery window
	var $window = jQuery(window);
  
	// cache container
	var $container = jQuery('#photo_wall_wrapper');
	
	// start up isotope with default settings
	$container.imagesLoaded( function(){
	    reLayout();
	    $window.smartresize( reLayout );
	    
	    $container.children('.wall_entry').each(function(){
		    $j(this).addClass('fade-in');
	    });
	});
	
	function reLayout() {
	
		var columnCount = 4;
		if($j(window).width() < 360)
		{
			columnCount = 2;
		}
		else if($j(window).width() > 360 && $j(window).width() < 769)
		{
			columnCount = 3;
		}
		else if($j(window).width() > 1400 && $j(window).width() < 1720)
		{
			columnCount = 5;
		}
		else if($j(window).width() > 1720)
		{
			columnCount = 6;
		}

	    masonryOpts = {
		  columnWidth: $container.width() / columnCount
		};

	    $container.isotope({
	      resizable: false, // disable resizing by default, we'll trigger it manually
	      itemSelector : '.wall_entry',
	      masonry: masonryOpts
	    }).isotope( 'reLayout' );

	}
	
	$j(window).resize(function() {
		if($j(this).width() < 768)
		{
			$j('#menu_expand_wrapper a').trigger('click');
		}
	});
	
	var isDisableRightClick = $j('#pp_enable_right_click').val();
	var disableRightClickTxt = $j('#pp_right_click_text').val();
	
	if(isDisableRightClick!='')
	{
		$j(this).bind("contextmenu", function(e) {
	    	alert(disableRightClickTxt);
	    	e.preventDefault();
	    });
	}
	
	function rePortfolioLayout() {
	
		var windowWidth = $j(window).width();
		var $jcontainer = $j('#portfolio_filter_wrapper');
		var $jportfolioColumn = $j('#pp_portfolio_columns').attr('value');
		var columnValue = 0;
		if(windowWidth >= 1170)
		{
			columnValue = 1195 / $jportfolioColumn;
		}
		else if(windowWidth < 1170 && windowWidth > 961)
		{
			columnValue = 1000 / $jportfolioColumn;
		}
		//alert(columnValue);
	    masonryOpts = {
		  columnWidth: columnValue
		};

	    $jcontainer.isotope({
	      resizable: false, // disable resizing by default, we'll trigger it manually
	      itemSelector : '.element',
	      masonry: masonryOpts
	    } ).isotope();

	}
	
	// cache jQuery window
	var $window = jQuery(window);
  
	// cache container
	var $jcontainer = $j('#portfolio_filter_wrapper');
	
	// start up isotope with default settings
	$jcontainer.imagesLoaded( function(){
	    rePortfolioLayout();
	    $window.smartresize( rePortfolioLayout );
	    
	    $jcontainer.children('.element').each(function(){
		    $j(this).addClass('fade-in');
	    });
	});
	
	// filter items when filter link is clicked
	$j('#portfolio_filters li a').click(function(){
	  	var selector = $j(this).attr('data-filter');
	  	$jcontainer.isotope({ filter: selector });
	  	$j('#portfolio_filters li a').removeClass('active');
	  	$j(this).addClass('active');
	  	return false;
	});
	
	$j('#mobile_menu').click(function(){ 
		if($j('#menu_border_wrapper').css('display')=='none')
		{
    		$j('#menu_border_wrapper').slideDown('slow');
    		$j('#photo_wall_wrapper').fadeOut();
    		$j('#slidecaption').fadeOut();
    		$j('#imageFlow').fadeOut();
    		$j('#vimeo_bg').fadeOut();
    		$j('#prevslide').fadeOut();
    		$j('#nextslide').fadeOut();
    		$j('.page_control').fadeOut();
    		$j('#thumb-tray').fadeOut();
    		$j('.top_bar').css('position', 'static');
    		$j('body,html').animate({scrollTop:0},800);
    	}
    	else
    	{
	    	$j('#menu_border_wrapper').slideUp();
	    	$j('#photo_wall_wrapper').fadeIn();
	    	$j('#slidecaption').fadeIn();
	    	$j('#imageFlow').fadeIn();
	    	$j('#vimeo_bg').fadeIn();
	    	$j('#prevslide').fadeIn();
    		$j('#nextslide').fadeIn();
    		$j('.page_control').fadeIn();
    		$j('#thumb-tray').fadeIn();
	    	$j('.top_bar').css('position', 'fixed');
	    	$j('body,html').animate({scrollTop:0},800);
    	}
    });
    
    var supersizedMarginTop = 90;
    if($j('#pp_supersized_margintop').val() == 215)
    {
	    supersizedMarginTop = 215;
    }
    $j('#supersized').height($j(window).height() - supersizedMarginTop);
	
	// initialize masonry
	$j('#blog_grid_wrapper').imagesLoaded(function(){
		var windowWidth = $j(window).width();
	    var blogGridColumn = 3;
	    
		if(windowWidth > 769)
		{
			blogGridColumn = 3;
		}
		else
		{
			blogGridColumn = 2;
		}
		
		$j('#blog_grid_wrapper').masonry({
		  itemSelector: '.post.type-post',
		  columnWidth:Math.floor(($j('#blog_grid_wrapper').width()/ blogGridColumn))
		});
	
	    $j(this).children('.post.type-post').each(function(key){
		    $j(this).addClass('animated'+key);
		    $j(this).addClass('fade-in');
	    });
	});
	
	$j(window).resize(function(){
		var windowWidth = $j(window).width();
		var masonry = $j('#blog_grid_wrapper');
		var blogGridColumn = 3;
    
		if(windowWidth > 769)
		{
			blogGridColumn = 3;
		}
		else
		{
			blogGridColumn = 2;
		}
		
	    masonry.imagesLoaded(function(){
	    
		    masonry.masonry({
		    	itemSelector: '.post.type-post',
		    	isResizable: true,
		    	isAnimated: true,
		    	isFitWidth: true,
		    	columnWidth:Math.floor((masonry.width()/ blogGridColumn))
		      });
		      
		     masonry.children('.post.type-post').each(function(){
			    $j(this).addClass('fade-in');
		    });
		});
	});
	
	$j('#galleries_grid_wrapper').masonry({
	  itemSelector: '.gallery.type-gallery',
	  columnWidth:Math.floor(($j('#galleries_grid_wrapper').width()/ 3))
	});
	
	$j('#galleries_grid_wrapper').imagesLoaded(function(){
	    $j(this).children('.gallery.type-gallery').each(function(key){
		    $j(this).addClass('animated'+key);
		    $j(this).addClass('fade-in');
	    });
	});
	
	//Add gesture support for supersized.
	/*jQuery('#supersized').touchwipe({
    	wipeLeft: function(){ 
        	api.nextSlide();
      	},
       	wipeRight: function(){ 
           	api.prevSlide();
       	}
    });*/
    
    //Add to top button when scrolling
    $j(window).scroll(function() {
	 	var calScreenWidth = $j(window).width();
		
		if(calScreenWidth > 768)
		{
			if($j(this).scrollTop() > 200) {
				$j('#toTop').stop().css({opacity: 1.0, "visibility": "visible"}).animate({"visibility": "visible", "bottom": "73px"}, {duration:1000,easing:"easeOutExpo"});
			} else if($j(this).scrollTop() == 0) {
				$j('#toTop').stop().css({opacity: 0, "visibility": "hidden"}).animate({"bottom": "0px", "visibility": "hidden"}, {duration:1500,easing:"easeOutExpo"});
			}
		}
	});
 
	$j('#toTop').click(function() {
		$j('body,html').animate({scrollTop:0},800);
	});
	
	var isDisableDragging = $j('#pp_enable_dragging').val();
	
	if(isDisableDragging!='')
	{
		$j("img").mousedown(function(){
		    return false;
		});
	}
	
	$j('input#s').attr('title', 'Search...');
	
	$j('input[title!=""]').hint();
	
	$j('.portfolio2_content_wrapper').children('.portfolio2_wrapper').each(function(){
		$j(this).addClass('fade-in');
	});
	
	$j('.portfolio3_content_wrapper').children('.portfolio3_wrapper').each(function(){
		$j(this).addClass('fade-in');
	});
	
	$j('.portfolio4_content_wrapper').children('.portfolio4_wrapper').each(function(){
		$j(this).addClass('fade-in');
	});
	
	$j('#option_btn').click(
    	function() {
    		if($j('#option_wrapper').css('left') != '0px')
    		{
 				$j('#option_wrapper').animate({"left": "0px"}, { duration: 500 });
	 			$j(this).animate({"left": "240px"}, { duration: 500 });
	 		}
	 		else
	 		{
	 			$j('#option_wrapper').animate({"left": "-245px"}, { duration: 500 });
    			$j('#option_btn').animate({"left": "0px"}, { duration: 500 });
	 		}
    	}
    );
});
