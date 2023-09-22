import express from "express";
import {
  updateCM,
  createCM,
  getCMs,
  getSingleCM,
  completeCM,
  updatePO,
  updateIsPOcompleted,
  updateRequestForPoReceived,
  updateRequestForClose,
} from "../controllers/client.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/CMs", verifyToken, getCMs);
router.post("/CM", verifyToken, createCM);
router.get("/CMs/:id", verifyToken, getSingleCM);
router.put("/CMs/:id", verifyToken, updateCM);
router.put("/CMs/po/:id", verifyToken, updatePO);
router.put("/CMs/po_completed/:id", verifyToken, updateIsPOcompleted);
router.put(
  "/CMs/request_for_PO_received/:id",
  verifyToken,
  updateRequestForPoReceived
);
router.put("/CMs/request_for_close/:id", verifyToken, updateRequestForClose);
router.put("/CMs/completed/:id", verifyToken, completeCM);

export default router;
