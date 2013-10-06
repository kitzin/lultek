$(function() {
	
	$(".news-item").click(function() {
		var $this = $(this).parent(),
			$parent = $this.parent().parent(),
			$items = $parent.find(".news-item").not(this).parent(),
			hidden = $items.is(":hidden");
		
		if(!hidden)
			$items.hide();
		
		if($this.hasClass("active"))
			$this.removeClass("active")
		else
			$this.addClass("active");
			
		if(hidden)
			$items.show();
	});
});