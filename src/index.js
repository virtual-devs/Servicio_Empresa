import app from "./app.js";
import { sequelize } from "./database/database.js";
// import './models/HistorialRenta.js'
// import './models/HistorialViaje.js'

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(3000);
    console.log("Server on port", 3000);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();

// app.set('port', process.env.PORT || 3000);

// app.use(express.json());

// app.listen(app.get('port'), () => {
//     console.log(`Server on port ${app.get('port')}`);
// });
