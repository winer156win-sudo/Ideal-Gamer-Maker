function drawTextWithFallback(canvasId, textId, fallbackContainerId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const textEl = document.getElementById(textId);
  const fallback = document.getElementById(fallbackContainerId);

  function getFallbackPoint() {
    const areaRect = fallback.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / canvasRect.width;
    const scaleY = canvas.height / canvasRect.height;

    const centerXPage = areaRect.left + areaRect.width / 2;
    const centerYPage = areaRect.top + areaRect.height / 2;

    return {
      x: (centerXPage - canvasRect.left) * scaleX,
      y: (centerYPage - canvasRect.top) * scaleY
    };
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let x, y;
    if (textEl.hasAttribute("data-x") && textEl.hasAttribute("data-y")) {
      x = Number(textEl.getAttribute("data-x"));
      y = Number(textEl.getAttribute("data-y"));
    } else {
      const p = getFallbackPoint();
      x = p.x;
      y = p.y;
    }

    ctx.font = "20px sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(textEl.textContent, x, y);
  }

  draw();
}
