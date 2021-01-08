const { Router } = require("express");

const router = Router();

router.get("/proyects", (req, res) => {
    res.send({"status": "ok"});
});

module.exports = router;
