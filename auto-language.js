videojs("vdoPlayer", {}, function(){
  // Player (this) is initialized and ready.
  $("li.vjs-texttrack-settings").eq(1).trigger('click');
});
