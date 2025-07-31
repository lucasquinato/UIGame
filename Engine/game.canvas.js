/**
 * @file game.canvas.js
 * @module GameCanvas
 * 
 * @description
 * Provides initialization and utility methods for the HTML5 Canvas element used
 * in the game. Handles obtaning the canvas and its 2D rendering context, as well
 * as dynamically resizing the canvas to fit the browser viewport.
 */

/**
 * Reference to the game canvas element.
 * @type { HTMLCanvasElement }
 * @private
 */
let _canvas = null;

/**
 * Reference to the 2D rendering context of the game canvas.
 * @type { CanvasRenderingContext2D }
 * @private
 */
let _context = null;

/**
 * Initializes the game canvas by locating the HTML element with the ID 'UIGame'
 * and retrieving its 2D rendering context. Must be called before performing any
 * draw operations on the canvas.
 * 
 * @function
 * @name $$InitCanvas
 * @memberof module:GameCanvas
 * @returns { void }
 * 
 * @throws { TypeError } If the canvas element cannot be found.
 * @throws { Error } If context retrieval fails.
 */
export function $$InitCanvas() {
    _canvas = document.getElementById("UIGame");
    if (!(_canvas instanceof HTMLCanvasElement)) {
        console.warn("Value of <canvas>:", _canvas);
        throw new TypeError("Canvas element with ID 'UIGame' not found or invalid.");
    }

    _context = _canvas.getContext("2d");
    if (!(_context instanceof CanvasRenderingContext2D)) {
        console.warn("Value if canvas context:", _context);
        throw new Error("Unable to acquire 2D rendering context from the canvas.");
    }
}

/**
 * Returns the initialized game canvas element.
 * 
 * @function
 * @name getCanvas
 * @memberof module:GameCanvas
 * @returns { HTMLCanvasElement | null }
 * 
 * @example
 * import { $$InitCanvas, getCanvas } from "@/game.canvas.js";
 * 
 * $$InitCanvas(); // Required
 * // Get <canvas> element
 * const canvas = getCanvas();
 */
export function getCanvas() { return _canvas }

/**
 * Return the 2D rendering context of the game canvas.
 * 
 * @function
 * @name getContext
 * @memberof module:GameCanvas
 * @returns { CanvasRenderingContext2D | null }
 * 
 * @example
 * import { $$InitCanvas, getContext } from "@/game.canvas.js";
 * 
 * $$InitCanvas(); // Required
 * // Get context rendering
 * const context = getContext();
 */
export function getContext() { return _context }

/**
 * Adjust the provider canvas element's dimensions to match the current
 * browser viewport size. Useful for responsive full-screen canvas setups.
 * 
 * @function
 * @name canvasResize
 * @memberof module:GameCanvas
 * @param { HTMLCanvasElement } canvasElement 
 * @returns { void }
 */
export function canvasResize(canvas) {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}