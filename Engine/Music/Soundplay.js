document.querySelectorAll("audio").forEach(a => {
  // Read the loop attribute from the engine
  const loopAttr = a.getAttribute("loop");
  a.loop = (loopAttr === "true"); // only true if explicitly set

  // Play the audio
  a.play().catch(err => {
    console.error("Playback failed:", err);
  });
});
