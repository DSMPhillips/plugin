videojs.registerPlugin('autoLanguage', function() {
      var myPlayer = this;
      myPlayer.on("loadedmetadata", function () {

        // +++ Get the captions +++
        var track_language;
        var tracks = myPlayer.textTracks();

        // +++ Loop through captions +++
            track_language = tracks[i].language.substr(0, 0);
            tracks[i].mode = "disabled";
        }
    });

});
