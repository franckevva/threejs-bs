import express, { Request, Response } from "express";
import { SceneState } from "../models/scene-state";

const router = express.Router();

router.get("/api/scene", [], async (req: Request, res: Response) => {
  const scene = await SceneState.find({});
  return res.status(200).send(scene);
});

router.post("/api/scene", async (req: Request, res: Response) => {
  const { cameraPosition } = req.body;
  console.log('req', req.body);

  const sceneState = SceneState.build({ cameraPosition });
  await sceneState.save();
  return res.status(201).send(sceneState);
});

export { router as sceneRouter };
