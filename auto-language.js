var tracks = player.textTracks();

for (var i = 0; i < tracks.length; i++) {
  var track = tracks[i];

  // 
  if (track.kind === 'captions') {
    track.mode = 'disabled';
  }
}
