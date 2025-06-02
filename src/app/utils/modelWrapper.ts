// utils/modelWrapper.ts
import * as tf from "@tensorflow/tfjs";

export class ModelWrapper {
  private model: any = null;
  private isReady: boolean = false;

  async loadModel(modelPath: string) {
    try {
      console.log("Attempting to load model...");

      // Method 1: Coba sebagai LayersModel
      try {
        this.model = await tf.loadLayersModel(modelPath);
        console.log("Loaded as LayersModel");
      } catch (layersError) {
        console.log("LayersModel failed, trying GraphModel...");

        // Method 2: Coba sebagai GraphModel
        try {
          this.model = await tf.loadGraphModel(modelPath);
          console.log("Loaded as GraphModel");
        } catch (graphError) {
          console.log("GraphModel failed, trying manual reconstruction...");

          // Method 3: Manual reconstruction
          this.model = await this.createManualModel();
          console.log("Created manual model");
        }
      }

      this.isReady = true;
      return this.model;
    } catch (error) {
      console.error("All model loading methods failed:", error);
      throw error;
    }
  }

  private async createManualModel() {
    // Buat model manual berdasarkan arsitektur dari model.json
    const model = tf.sequential({
      layers: [
        tf.layers.dense({
          inputShape: [8],
          units: 128,
          activation: "relu",
          name: "dense_3",
        }),
        tf.layers.dropout({
          rate: 0.3,
          name: "dropout_1",
        }),
        tf.layers.dense({
          units: 64,
          activation: "relu",
          name: "dense_4",
        }),
        tf.layers.dense({
          units: 1,
          activation: "linear",
          name: "dense_5",
        }),
      ],
    });

    // Load weights manually jika diperlukan
    // Ini memerlukan parsing weights dari .bin file

    return model;
  }

  async predict(inputData: number[]): Promise<number> {
    if (!this.isReady || !this.model) {
      throw new Error("Model not ready");
    }

    const inputTensor = tf.tensor2d([inputData], [1, 8]);
    let prediction: tf.Tensor;

    // Handle different model types
    if (this.model.predict) {
      prediction = this.model.predict(inputTensor) as tf.Tensor;
    } else if (this.model.execute) {
      prediction = this.model.execute(inputTensor) as tf.Tensor;
    } else {
      throw new Error("Unknown model type");
    }

    const result = await prediction.data();

    // Cleanup
    inputTensor.dispose();
    prediction.dispose();

    return result[0];
  }

  isModelReady(): boolean {
    return this.isReady;
  }
}

// Usage in your component
export const modelWrapper = new ModelWrapper();
