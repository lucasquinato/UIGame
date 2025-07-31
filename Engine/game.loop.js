/**
 * @file game.loop.js
 * @module GameLoop
*
* @description
* Implements the core requestAnimationFrame-driven game loop, calculating
* delta time between frames and providing an extensible hook for updating
* and rendering the game state on each animation frame.
*/

/**
 * Starts the main game loop, calling the provided context each frame with
 * elapsed time information. Automatically schedules subsequent frames
 * via requestAnimationFrame.
 *
 * @function
 * @name $$GameLoop
 * @memberof module:GameLoop
 * @param { CanvasRenderingContext2D } context
 * @returns { void }
 * 
 * @example
 * import { $$InitCanvas, getContext } from './game.canvas.js';
 * import { $$GameLoop } from './game.loop.js';
 *
 * $$InitCanvas(); // Required
 * // Get context rendering
 * const context = getContext();
 * $$GameLoop(context);
 */
export function $$GameLoop(context) {
    /**
     * Stores the timestamp of the last executed frame, used to compute deltaTime.
     * @type {number}
     * @private
     */
    let _lastTimestamp = 0;

    /**
     * Internal callback for requestAnimationFrame, invoked each frame.
     * Calculates deltaTime (in seconds) and triggers game update/render hooks.
     *
     * @param { DOMHighResTimeStamp } timestamp
     * @returns { void }
     * @private
     */
    function loop(timestamp) {
        if (!_lastTimestamp) _lastTimestamp = timestamp;
        const deltaTime = (timestamp - _lastTimestamp) / 1000;
        _lastTimestamp = timestamp;

        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}