const express = require("express");
const {
  createEnquary,
  updateSingleEnquary,
  getSingleEnquary,
  getAllEnquary,
  deleteSingleEnquary,
} = require("../controller/enqCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createEnquary);
router.put("/:id", authMiddleware, isAdmin, updateSingleEnquary);
router.get("/:id", getSingleEnquary);
router.delete("/:id", authMiddleware, isAdmin, deleteSingleEnquary);
router.get("/", getAllEnquary);

module.exports = router;
