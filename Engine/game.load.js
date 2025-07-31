/**
 * @param { object } images
 * @returns { Promise<void> }
 */
export async function $$PreloadImages(images) {
    const loadImages = (pathImage) => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = () => reject(new Error(`Load fail: ${pathImage}`));
            image.src = pathImage;
        });
    };

    async function recursiveLoader(obj) {
        if (Array.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
                if (typeof obj[i] === "string") {
                    obj[i] = await loadImages(obj[i]);
                } else if (typeof obj[i] === "object" && obj[i] !== null) {
                    await recursiveLoader(obj[i]);
                }
            }
        } else if (typeof obj === "object" && obj !== null) {
            for (const key in obj) {
                if (typeof obj[key] === "string") {
                    obj[key] = await loadImages(obj[key]);
                } else if (typeof obj[key] === "object") {
                    await recursiveLoader(obj[key]);
                }
            }
        }
    }

    await recursiveLoader(images);
}
