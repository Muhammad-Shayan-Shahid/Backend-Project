import express from "express"
import cors from 'cors'
import authRoutes from "./routes/auth.routes.js"
import sessionRoutes from './routes/session.routes.js';
import answerRoutes from './routes/answer.routes.js';
import analyticsRoutes from './routes/analytics.routes.js';
const app = express()

app.use(express.json())
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/session', sessionRoutes);
app.use('/api/answer', answerRoutes);
app.use('/api/analytics', analyticsRoutes);

export default app