import mongoose from "mongoose";

interface ISceneState {
  cameraPosition: string;
  userId: string;
}

interface sceneStateModelInterface extends mongoose.Model<SceneStateDoc> {
  build(attr: ISceneState): SceneStateDoc;
}

interface SceneStateDoc extends mongoose.Document {
  cameraPosition: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const sceneStateSchema = new mongoose.Schema(
  {
    cameraPosition: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

sceneStateSchema.statics.build = (attr: ISceneState) => {
  return new SceneState(attr);
};

const SceneState = mongoose.model<SceneStateDoc, sceneStateModelInterface>(
  "SceneState",
  sceneStateSchema
);

export { SceneState };
