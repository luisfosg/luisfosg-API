const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.send({"status": "ok"});
});

module.exports = router;
