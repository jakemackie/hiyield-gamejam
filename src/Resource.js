class Resources {
  constructor() {
    // A list of assets to load
    this.toLoad = {
      sky: "/sprites/sky.png"
    };

    // A bucket to keep all the loaded images
    this.assets = {};

    // Load each image
    Object.keys(this.toLoad).forEach((key) => {
      const img = new Image();
      img.src = this.toLoad[key];

      this.assets[key] = {
        image: img,
        isLoaded: false
      }

      img.onload = () => {
        this.assets[key].isLoaded = true;
      }

    });
  }
}

// Single shared instance of the Resources class
export const resources = new Resources();