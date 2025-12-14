const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const script = document.createElement("script");
script.src = isMobile
  ? "https://raw.githubusercontent.com/winer156win-sudo/Ideal-Gamer-Maker/main/Ui/Custommousepointerfortouchscreen.js"
  : "https://raw.githubusercontent.com/winer156win-sudo/Ideal-Gamer-Maker/main/Ui/Custommouseponter.js";
document.head.appendChild(script);
