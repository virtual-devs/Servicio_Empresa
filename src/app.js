import  express from 'express';
import  rentasRoutes from './routes/renta.routes.js';
import  viajesRoutes from './routes/viaje.routes.js';

const app = express();

//middlewares
app.use(express.json());




app.use(rentasRoutes);
app.use(viajesRoutes);

export default app;