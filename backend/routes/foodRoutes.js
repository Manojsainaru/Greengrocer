import express from 'express';
import { addFood, listFood, removeFood } from '../controller/foodController.js';
import multer from "multer";

const foodRoutes = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination: "upload",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Endpoints
foodRoutes.post("/add", upload.single("image"), addFood);
foodRoutes.get("/list", listFood);
foodRoutes.post("/remove", removeFood);

export default foodRoutes;
