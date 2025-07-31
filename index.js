import { $$InitCanvas, canvasResize, getCanvas, getContext } from "./Engine/game.canvas.js";
import { $$PreloadImages } from "./Engine/game.load.js";
import { $$GameLoop } from "./Engine/game.loop.js";

import { gameImages } from "./Game/game.images.js";

window.addEventListener("DOMContentLoaded", async () => {
    await $$PreloadImages(gameImages);
    $$InitCanvas(); // Required.

    // Get canvas element and context rendering
    const canvas = getCanvas();
    const context = getContext();
    canvasResize(canvas); // Resize the first time

    window.addEventListener("resize", () => canvasResize(canvas));

    // Game start:
    $$GameLoop(context);
});