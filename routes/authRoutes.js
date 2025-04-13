import { getProfile, login, signup } from "../controller/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
import express from "express"


const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', protect, getProfile);

export default router;