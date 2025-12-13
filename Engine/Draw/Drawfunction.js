function drawImageWithFallback(canvasId, imgId, fallbackContainerId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const img = document.getElementById(imgId);
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
    if (img.hasAttribute("data-x") && img.hasAttribute("data-y")) {
      x = Number(img.getAttribute("data-x"));
      y = Number(img.getAttribute("data-y"));
    } else {
      const p = getFallbackPoint();
      x = p.x;
      y = p.y;
    }

    const w = img.naturalWidth;
    const h = img.naturalHeight;
    ctx.drawImage(img, x - w / 2, y - h / 2);
  }

  if (img.complete) {
    draw();
  } else {
    img.onload = draw;
  }
}
