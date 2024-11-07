class Resources {
  constructor() {
    // A list of images to load
    this.toLoad = {
      sky: "/sprites/sky.png",
      ground: "/sprites/ground.png",
      hero: "/sprites/hero-sheet.png",
      shadow: "/sprites/shadow.png",
    };

    // A bucket to keep all the loaded images
    this.images = {};

    // Load each image
    Object.keys(this.toLoad).forEach((key) => {
      const img = new Image();
      img.src = this.toLoad[key];

      this.images[key] = {
        image: img,
        isLoaded: false
      }

      img.onload = () => {
        this.images[key].isLoaded = true;
      }

    });
  }
}

// Single shared instance of the Resources class
export const resources = new Resources();