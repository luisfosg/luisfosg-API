import { Router } from "express";

const router = Router();

router.get("/proyects", (req, res) => {
    res.status(200).json({"status": "OK"})
});

export default router;
