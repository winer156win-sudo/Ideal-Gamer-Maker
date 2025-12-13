document.querySelectorAll("audio").forEach(a => {
  const loopAttr = a.getAttribute("loop");
  a.loop = (loopAttr === "true");
  a.play().catch(err => {
    console.error("Playback failed:", err);
  });
});
