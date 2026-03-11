import express from "express"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"

dotenv.config()

import uploadRoutes from "./services/upload/upload.routes"
import { setupSwagger } from "./config/swagger"

const app = express()

app.use(cors())
app.use(express.json())
app.use(helmet())

app.use("/api/upload", uploadRoutes)

setupSwagger(app)  

export default app