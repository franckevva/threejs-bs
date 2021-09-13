import express, { Request, Response } from "express";
import { ObjectId } from "mongoose";
import { SceneState } from "../models/scene-state";

const router = express.Router();

router.get("/api/scene", [], async (req: Request, res: Response) => {
  console.log("get api/scene");
  try {
    const scene = await SceneState.find({});
    return res.status(200).send(scene);
  } catch (error: any) {
    res.status(500).send(error?.message);
  }
});

router.get("/api/scene/:id", [], async (req: Request, res: Response) => {
  const id = req?.params?.id;
  console.log("get api/scene ", id);
  try {
    const query = { userId: id };
    const scene = await SceneState.findOne(query);
    if (scene) {
      return res.status(200).send(scene);
    }
  } catch (error: any) {
    res.status(404).send(`Can't find scene with this id: ${req?.params?.id}`);
  }
});

router.post("/api/scene", async (req: Request, res: Response) => {
  console.log("post api/scene ");
  try {
    const { cameraPosition, userId } = req.body;
    console.log("req", req.body);

    const sceneState = SceneState.build({ cameraPosition, userId });
    await sceneState.save();
    return res.status(201).send(sceneState);
  } catch (error: any) {
    res.status(500).send(error?.message);
  }
});

export { router as sceneRouter };
