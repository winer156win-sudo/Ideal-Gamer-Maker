const audio = document.querySelector("audio");
audio.play().catch(err => {
  console.error("Playback failed:", err);
});
