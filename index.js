import express from "express";
import cors from "cors";
import sequelize from "./src/config/db.js";
import router from "./src/routes/route.js";
import { seedCategorias } from "./src/seeders/categorias.js";
import "./src/models/associations.js";
import { seedRoles } from "./src/seeders/roles.js";
import { seedAdmin } from "./src/seeders/admin.js";

const app = express();
const port = 3000;
app.use(express.json());

app.use(cors());

app.use("/api", router);

try {
  await sequelize.authenticate();
  console.log("✅ Conexión a PostgreSQL establecida correctamente");
  await sequelize.sync({ alter: true });
  await seedCategorias();
  await seedRoles();
  await seedAdmin();

  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
} catch (error) {
  console.error("❌ No se pudo conectar a PostgreSQL:", error.message);
}
