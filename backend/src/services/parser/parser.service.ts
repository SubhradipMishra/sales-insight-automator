import xlsx from "xlsx"

export const parseFile = async (
  file: Express.Multer.File
) => {

  const workbook = xlsx.read(file.buffer)

  const sheet = workbook.Sheets[workbook.SheetNames[0]]

  const data = xlsx.utils.sheet_to_json(sheet)

  return data
}