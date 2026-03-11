import { Router } from "express"
import multer from "multer"

import { uploadFile } from "./upload.controller"

const router = Router()

const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 }
})


/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Upload sales dataset and generate AI summary
 *     tags: [Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: AI summary generated successfully
 *       400:
 *         description: Invalid file upload
 */

router.post("/", upload.single("file"), uploadFile)

export default router