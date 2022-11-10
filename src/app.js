import  express from 'express';
import  rentasRoutes from './routes/renta.routes.js';
import  viajesRoutes from './routes/viaje.routes.js';
import ventasRoutes from  './routes/venta.routes.js'

const app = express();

//middlewares
app.use(express.json());




app.use(rentasRoutes);
app.use(viajesRoutes);
app.use(ventasRoutes);

export default app;