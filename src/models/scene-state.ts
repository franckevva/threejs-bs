import mongoose from "mongoose";

interface ISceneState {
  cameraPosition: string;
}

interface sceneStateModelInterface extends mongoose.Model<SceneStateDoc> {
  build(attr: ISceneState): SceneStateDoc;
}

interface SceneStateDoc extends mongoose.Document {
  cameraPosition: string;
}

const sceneStateSchema = new mongoose.Schema({
  cameraPosition: {
    type: String,
    required: true,
  },
});

sceneStateSchema.statics.build = (attr: ISceneState) => {
  return new SceneState(attr);
};

const SceneState = mongoose.model<SceneStateDoc, sceneStateModelInterface>(
  "SceneState",
  sceneStateSchema
);

export { SceneState };

/* export interface SceneStateDoc extends mongoose.Document {
  cameraPosition: string;
  createdAt: Date;
  updatedAt: Date;
}

const sceneStateSchema = new mongoose.Schema(
  {
    cameraPosition: { type: String, default: true },
  },
  { timestamps: true }
);

export const SceneState = mongoose.model<SceneStateDoc>(
  "SceneState",
  sceneStateSchema
);
 */
// export SceneState;
