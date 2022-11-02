import  express from 'express';
import  rentasRoutes from './routes/renta.routes.js';

const app = express();

//middlewares
app.use(express.json());




app.use(rentasRoutes);

export default app;