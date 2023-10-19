videojs("vdoPlayer", {}, function(){
  // Player (this) is initialized and ready.
  $("li.vjs-texttrack-settings").eq(2).trigger('click');
});
