import { parseFile } from "../parser/parser.service"
import { generateSummary } from "../ai/ai.service"
import { sendEmail } from "../email/email.service"

export const processUpload = async (
  file: Express.Multer.File,
  email: string
) => {

  const parsedData = await parseFile(file)

  const summary = await generateSummary(parsedData)

  await sendEmail(email, summary)

  return summary
}
