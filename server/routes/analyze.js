import express from 'express';
import { analyzeResume } from '../controllers/analyzeController.js';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('resume'), analyzeResume);

export default router;
