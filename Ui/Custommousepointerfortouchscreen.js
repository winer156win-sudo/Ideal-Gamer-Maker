const pointer = document.createElement("div");
pointer.style.position = "absolute";
pointer.style.width = "32px";
pointer.style.height = "32px";
pointer.style.pointerEvents = "none";
pointer.style.background = 'url("https://raw.githubusercontent.com/winer156win-sudo/Ideal-Gamer-Maker/main/Art/Mouse_ponter.png") no-repeat center/contain';
pointer.style.display = "none";
pointer.style.zIndex = "9999";
document.body.appendChild(pointer);

document.addEventListener("touchstart", e => {
  const touch = e.touches[0];
  pointer.style.left = (touch.pageX - 16) + "px";
  pointer.style.top = (touch.pageY - 16) + "px";
  pointer.style.display = "block";
});

document.addEventListener("touchmove", e => {
  const touch = e.touches[0];
  pointer.style.left = (touch.pageX - 16) + "px";
  pointer.style.top = (touch.pageY - 16) + "px";
});

document.addEventListener("touchend", () => {
  pointer.style.display = "none";
});
