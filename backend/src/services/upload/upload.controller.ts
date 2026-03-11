import { Request, Response } from "express"
import { processUpload } from "./upload.service"

export const uploadFile = async (
  req: Request,
  res: Response
) => {

  try {

    const email = req.body.email

    if (!req.file) {
      return res.status(400).json({
        message: "File required"
      })
    }

    const result = await processUpload(req.file, email)

    res.json({
      message: "Summary sent successfully",
      result
    })

  } catch (error) {

    res.status(500).json({
      message: "Upload failed"
    })

  }

}