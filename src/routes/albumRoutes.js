import { Router } from "express";
import AlbumController from "../controller/getAlbumController";

const router = Router();

router
  .route("/album/:albumId")
  .get(AlbumController.getAlbumById);

export default router;
