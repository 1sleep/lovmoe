$(function(){
   $.Tab = function(el,opts){
      this.options = $.extend({},$.Tab.defaultOptions,opts);
      this.init(el);
   };
   $.Tab.defaultOptions = {
      navSelector : 'li a'
   };
   $.Tab.prototype.init = function(el){
      var self = this;
      this.$el = $(el);
      this.$navs = this.$el.find( this.options.navSelector );
      var $active = this.$navs.first();
      self.active($active);
      this.$el.on('click',this.options.navSelector,function(e){
         var $nav = $(e.currentTarget);
         e.preventDefault();
         if(!$nav.hasClass('active')){
            self.active($nav);
         }
      });
   };
   $.Tab.prototype.active = function($item){
      this.$navs.each(function(i,nav){
         var $nav = $(nav),
             href = $nav.attr('href');
         if($nav.is($item)){
            $nav.addClass('active');
            $(href).fadeIn(100);
         }
         else{
            $nav.removeClass('active');
            $(href).hide();
         }
      })
   };
   $.fn.tab = function(opts){
      return new $.Tab(this,opts);
   };


   $('#carousel').owlCarousel({
      center: true,
      items : 1
   });

   $('#product-menu').tab()
});